import { rest } from 'msw'
import {data} from "../pages/api/Data";
export const handlers = [
    // Handles a POST /login request
    // rest.post('/login', null),
    // Handles a GET /user request
    rest.get('/series', (req,res,ctx)=> {
        return res(
            ctx.status(200),
            ctx.json(data),
          )
    }),
  ]