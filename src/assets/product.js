const productos = [
    {id:"1", nombre:"14 Pro", descripcion:"holaa",categoria:"iphone", precio: 200,  calificacion: 4, 
    imgs:{img1:"https://www.cellularsales.com/wp-content/uploads/2023/02/iphone-14-pro-gold-fall22-a.png",img2:"https://comunicaplus.net/wp-content/uploads/2022/12/a32-5g.jpg",img3:"https://comunicaplus.net/wp-content/uploads/2022/12/a32-5g.jpg",}, 
    espesificaciones: { serie: "", fmp: 1, tmp:1, bateria: 1, pantalla: 1,}
    },
    {id:"2", nombre:"13 Pro Max", descripcion:"holaa",categoria:"iphone", precio: 200,  calificacion: 4, 
    imgs:{img1:"https://www.cellularsales.com/wp-content/uploads/2023/02/apple-iphone-13-pro-max-gold.png",img2:"https://comunicaplus.net/wp-content/uploads/2022/12/a32-5g.jpg",img3:"https://comunicaplus.net/wp-content/uploads/2022/12/a32-5g.jpg",}, 
    espesificaciones: { serie: "", fmp: 1, tmp:1, bateria: 1, pantalla: 1,}
    },
    {id:"3", nombre:"s22 Ultra", descripcion:"holaa",categoria:"samsung", precio: 200,  calificacion: 4, 
    imgs:{img1:"https://www.cellularsales.com/wp-content/uploads/2023/02/samsung-galaxy-s23-ultra-cream.png",img2:"https://comunicaplus.net/wp-content/uploads/2022/12/a32-5g.jpg",img3:"https://comunicaplus.net/wp-content/uploads/2022/12/a32-5g.jpg",}, 
    espesificaciones: { serie: "", fmp: 1, tmp:1, bateria: 1, pantalla: 1,}
    },
    {id:"4", nombre:"Note 13 Pro", descripcion:"holaa",categoria:"xiaomi", precio: 200,  calificacion: 4, 
    imgs:{img1:"https://www.giztop.com/media/catalog/product/cache/dc206057cdd42d7e34b9d36e347785ca/p/m/pms_1695211908.10235739.png",img2:"https://comunicaplus.net/wp-content/uploads/2022/12/a32-5g.jpg",img3:"https://comunicaplus.net/wp-content/uploads/2022/12/a32-5g.jpg",}, 
    espesificaciones: { serie: "", fmp: 1, tmp:1, bateria: 1, pantalla: 1,}
    }
]

function getProductsNew(){
    return new Promise((res, req)=>{
        setTimeout(() => {
            if(true){return res(productos)}
            else{console.log("Error al obtener los productos");}
        }, 0);
    })

}

function getProductsOff(){
    return new Promise((res, req)=>{
        setTimeout(() => {
            if(true){return res(productos)}
            else{console.log("Error al obtener los productos");}
        }, 0);
    })

}


function getProducts(){
        return new Promise((res, req)=>{
            setTimeout(() => {
                if(true){return res(productos)}
                else{console.log("Error al obtener los productos");}
            }, 0);
        })
   
}

export default getProducts                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               