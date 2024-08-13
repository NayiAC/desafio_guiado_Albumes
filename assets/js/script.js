//data ={albumId: number, thumbnailURL:STRING, TITLE:STRING. URL:STRING}
const timeout = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res("enviado 🚀");
    }, 3000);
  });
};

const mostrarMensje = async () => {
  const mensaje = await timeout();
  console.log(mensaje);
};

const albumsMusic = async () => {

try {
  const url = 'https://jsonplaceholder.typicode.com/photos ';
let response = await fetch(url);
const data = await response.json()

data.slice(0, 20).forEach(element => {
  console.log("🚀 ~ consumoAPI ~ id:", element.id, "title:", element.title)
});  
} catch (exception) {
  console.error(exception)
  console.error('No funciona y se fue a lav')
}

};


async function init (){
  await albumsMusic()
  await mostrarMensje()
}; 

init()