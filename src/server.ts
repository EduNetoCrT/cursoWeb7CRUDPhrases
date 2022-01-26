import express from 'express';
import path from 'path';
import dotEnv from 'dotenv';
import routerApi from './routes/routes'

dotEnv.config();

const server = express();

server.use(express.static(path.join(__dirname, 'public')));
server.use(express.urlencoded({extended: true}));

server.use(express.json())
server.use(routerApi)
server.use((req, res) =>{
    res.status(404)
    res.json({err: 'Endpoint não encontrado'})
})


server.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`)
});