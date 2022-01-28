import {Request, Response} from 'express';
import { Todo } from '../models/Todo';


export const all = async(req: Request, res: Response) => {
    let list = await Todo.findAll();
    res.json({list})
}

export const add = async(req:Request, res: Response) => {


   if(req.body.title){
       let newList = await Todo.create({
           title: req.body.title,
           done:req.body.done ? true : false
       })
       res.status(201).json({item: 'Dados inseridos com sucesso'})
   }
   else{
       res.json({error: 'Dados não enviados'})
   }
    
} 


export const update = async(req: Request, res: Response) => {
    const  getId = req.params.id;

    let list = await Todo.findByPk(getId);

    if(list)
    {
        if(req.body.title)
        {
            list.title = req.body.title
        }
        if(req.body.done)
        {
            switch(req.body.done){
                case 'true':
                case '1':
                    list.done = true;
                    break;
                case 'false':
                case '0':
                    list.done = false;
                    break;
            }
        }
        await list.save();
        res.json({item: list})
    }else
    {
        res.json({error: "item não encontrado"})
    }
}

export const remove = async(req: Request, res: Response) => {
    let getId = req.params.id;

    let list = await Todo.findByPk(getId);

    if(list)
    {
        await list.destroy()
    }
}