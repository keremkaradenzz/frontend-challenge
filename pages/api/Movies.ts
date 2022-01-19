// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {Movies} from "../../types/types";
import {data} from "./Data";


export default function getMovie(
  req: NextApiRequest,
  res: NextApiResponse<Movies>
) {
  res.status(200).json(data);
}
