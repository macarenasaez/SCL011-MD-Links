const fs = require ('fs');
const Marked = require ('marked');
//const fetch = require('fetch');
const path = require('path')
const process = require('process');
//function hola (){
//console.log(hola)
//}

//let path = './README.md'

//LEER INPUT DE USUARIO (EL QUE ESCRIBE EN LA TERMINAL)
let userpath = process.argv[2]
userpath = path.resolve(userpath);
console.log("mi ruta es: " + userpath)

//encontrar archivos MD dentro de un directorio



//leer archibo .md
const readMD = (userpath => { 
  return new Promise(( resolve,reject) =>{
    fs.readFile(userpath,'utf8', (err,data)=>{
      if (err){
        reject(console.log("!Ouch¡ nose a encontrado este archivo: " + userpath))
      }
      resolve(data)
    //  console.log(data);
    })
    
  })
  
});


//obtener links de un archovo .md
const findlinks = (userpath) => {
return new Promise ((resolve,reject)=>{
readMD(userpath).then(res =>{
  let links = [];
  const renderer = new Marked.Renderer();
  renderer.link = function(href, title, text){
      links.push({
        //
        href:href,
        //
        text:text,
        //
        path: userpath})
    }

    Marked(res,{renderer:renderer})
    resolve(links) 
    console.log(links)

      })
      .catch(err =>{
        reject(err)

      })
    })
}
findlinks(userpath)   
console.log(findlinks(userpath))







/*const mdLinks = () => {
    //leer comandos de consola -> encontrar el archivo que el usuario ingresa
    //esa ruta existe o no?
    //comprobar si es md 
    //leer el archivo md
    //encontrar links
    // texto de link
    // ruta de link


    function hola (file) {
        console.log("hola macaaaa");
    }
    return hola(); 
    
}
return mdLinks();*/
