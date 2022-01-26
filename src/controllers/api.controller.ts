
import { Request,Response } from "express";
import { where } from "sequelize/dist";
import { Phrase } from "../models/Phrases";


export const createPhrase = async (req: Request, res: Response) => {
  
  
  let {author, txt} = req.body;
  let newPhrase = await Phrase.create({author, txt});
  res.json({id: newPhrase.id, author, txt});
};

export const getAll = async (req: Request, res: Response) => {
    let list = await Phrase.findAll()


    res.json({list})
    console.log(Phrase.findAll)
};

export const getOne = async (req: Request, res: Response) => {
    let {id} = req.params;

    let phrase = await Phrase.findByPk(id);

    if(phrase)
    {
        res.json({phrase})
    }
    else
    {
        res.json({error: "Frase inexistente!"})
    }
};

export const updatePhrase = async (req: Request, res: Response) => {
   let {id} = req.params;
   let {author,txt} = req.body;

   let phrase = await Phrase.findByPk(id);

   if(phrase)
   {
       phrase.author = author ;
       phrase.txt = txt;
       await phrase.save()

       res.json({phrase})
       
   }
   else
   {
       res.json({error:"Frase inexistente "})
   }
};

export const deletePhrase = async (req: Request, res: Response) => {
    let {id} = req.params;

    await Phrase.findByPk(id);
    if(id)
    {
        await Phrase.destroy({where: {id}})
    }
    else{
        res.json({error: "Frase não encontrada"})
    }
    
};