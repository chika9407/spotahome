import { NextApiRequest, NextApiResponse } from 'next';

import nc from 'next-connect'
import http from 'http'

const handler = nc<NextApiRequest, NextApiResponse>({
    onError: (err, req, res, next) => {
      console.error(err.stack);
      res.status(500).end(err.toString());
    },
    onNoMatch: (req, res) => {
      res.status(404).end("Page is not found");
    },
  })
  .get((req, res) => {
    res.end(JSON.stringify({data: 'hello'}))
  })
  // .post((req, res) => {
  //   const id = Date.now()
  //   const note = {...req.body, id}

  //   notes.push(note)
  //   res.json({data: note})
  // })
  
  http.createServer(handler).listen(process.env.PORT);


export default handler

export const config = {
  api: {
    responseLimit: false,
  },
}