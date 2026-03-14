import { createTRPCRouter } from "../init";
import { voicesRouter } from "./voices";



export const appRouter = createTRPCRouter({
  voice: voicesRouter,
})


export type AppRouter = typeof appRouter;