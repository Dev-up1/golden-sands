-- Cloudflare D1 Schema for Golden Sands Bookings
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
);
