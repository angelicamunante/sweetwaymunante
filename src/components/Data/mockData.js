const Data = [
  {
    id:1,
    tittle:"Cupcakes",
    price:8,
    img:"https://natashaskitchen.com/wp-content/uploads/2020/05/Vanilla-Cupcakes-3.jpg",
    stock:15
  },
  {
    id:2,
    tittle:"Torta doña pepa",
    price:60,
    img:"https://decomidaperuana.com/wp-content/uploads/2020/09/torta-candy-cake-receta.jpg",
    stock:5
  },
  {
    id:3,
    tittle:"Torta de zanahoria",
    price:80,
    img:"https://comeryrascar.com/wp-content/uploads/2021/10/cake-with-piped-carrots.jpg",
    stock:4
  }
]

const getFetch = new Promise((res, rej) => {
  let condition = true

  if(condition){
      setTimeout(() => {
          res(Data)
      }, 2000);
  }
  else{
      rej(console.log("No hay datos de productos"))
  }

})

export default getFetch;