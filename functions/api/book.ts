interface Env {
  DB: D1Database;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  try {
    const body = await request.json() as Record<string, unknown>;

    // Validate required fields
    const name = body.name as string | undefined;
    const email = body.email as string | undefined;
    const phone = body.phone as string | undefined;
    const checkIn = body.checkIn as string | undefined;

    if (!name || !email || !phone || !checkIn) {
      return Response.json(
        { success: false, error: 'يرجى ملء جميع الحقول المطلوبة' },
        { status: 400 }
      );
    }

    const type = (body.type as string) || 'room';
    const checkOut = (body.checkOut as string) || null;
    const guests = (body.guests as string) || null;
    const roomType = (body.roomType as string) || (body.hallType as string) || null;

    // Auto-create table if it doesn't exist (handles fresh local D1 instances)
    await env.DB.prepare(`
      CREATE TABLE IF NOT EXISTS bookings (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT NOT NULL,
        type TEXT NOT NULL DEFAULT 'room',
        check_in TEXT NOT NULL,
        check_out TEXT,
        guests TEXT,
        room_type TEXT,
        created_at TEXT NOT NULL DEFAULT (datetime('now'))
      )
    `).run();

    const result = await env.DB.prepare(
      `INSERT INTO bookings (name, email, phone, type, check_in, check_out, guests, room_type)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
    )
      .bind(name, email, phone, type, checkIn, checkOut, guests, roomType)
      .run();

    return Response.json({
      success: true,
      id: result.meta.last_row_id,
      message: 'تم حفظ الحجز بنجاح',
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    console.error('Booking API error:', message);
    return Response.json(
      { success: false, error: 'حدث خطأ في الخادم، يرجى المحاولة لاحقاً' },
      { status: 500 }
    );
  }
};
