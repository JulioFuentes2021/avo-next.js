import { IncomingMessage, ServerResponse } from "http";
import { NextApiRequest, NextApiResponse } from "next";
import { responseSymbol } from "next/dist/server/web/spec-compliant/fetch-event";
import DB from '../../../database/db';
//*Las apis van dentro de la carpeta api, esto es obligatorio

const allAvos = async (req: NextApiRequest, res: NextApiResponse) => {
    const db = new DB();
    const allEntries = await db.getAll();
    const length = allEntries.length;

    res.statusCode = 200; //Ok
    res.setHeader('Content-type','application/json')
    res.end(JSON.stringify({ data: allEntries, length:length }))
};

export default allAvos;