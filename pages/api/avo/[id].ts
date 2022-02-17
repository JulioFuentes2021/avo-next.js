import { NextApiRequest, NextApiResponse } from "next";
import DB from '../../../database/db';
//*Las apis van dentro de la carpeta api, esto es obligatorio

const allAvos = async (req: NextApiRequest, res: NextApiResponse) => {
    const db = new DB();
    
    const { id } = req.query;

    const avo = await db.getById(id as string);

    //Lo podemos escribir de otra forma
    // res.statusCode = 200; //Ok
    // res.setHeader('Content-type','application/json')
    // res.end(JSON.stringify({ data: avo }))

    res.status(200).json({ data: avo })
};

export default allAvos;