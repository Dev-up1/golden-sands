import { onRequestPost as __api_book_ts_onRequestPost } from "C:\\Users\\Administrator\\Downloads\\Golden Sand\\functions\\api\\book.ts"

export const routes = [
    {
      routePath: "/api/book",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_book_ts_onRequestPost],
    },
  ]