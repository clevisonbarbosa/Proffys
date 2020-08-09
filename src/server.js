//Servidor
const express = require('express')
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

const nunjucks = require('nunjucks')
//configurar nunjucks (templates engine)
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})


//Inicio e configuração do servidor
server
    //receber os dados do req body
    .use(express.urlencoded({extended: true}))
    //configurar arquivos státicos : css, scripts, imagens
    .use(express.static("public"))
    //rota da aplicação
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .post("/save-classes", saveClasses)
    //Start do servidor
    .listen(5500)