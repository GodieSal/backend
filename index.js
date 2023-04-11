const getProducts = []

class ProductManager{
    static id = 1;
    
     constructor(title , descriptions , price , thumbnail , code , stock , id){
        this.title = title,
        this.descriptions= descriptions,
         this.price = price,
        this.thumbnail = thumbnail ,
        this.code =code ,
        this.stock = stock,
        ProductManager.id;
     }
   
    
addProduct(){

    const productos = {
       
        title : this.title,
        descriptions: this.descriptions,
        price : this.price ,
        thumbnail : this.thumbnail,
        code :  this.code,
        stock : this.stock,
        id : ProductManager.id,
        
        }
       
       



        const verificarCodigo = getProducts.find(elemento => elemento.code === productos.code) 
           
       if (verificarCodigo)
       {
        throw new Error('hay codes iguales')  }
        else{
            ProductManager.id ++ 
            getProducts.push(productos);
            
        }

       
    
    }

     getById(id){
        const getProducts =this.getAll()
        if(!this.checkLength(getProducts)){
            return
        }
        let productos = getProducts.find(element => element.id == id)
        return productos ? productos : null
    }
    guardaEnArchivo(){
        try{
            fs.writeFileSync('productos.json', JSON.stringify(getProducts));
    
        }catch(err){
            throw new Error (err);
    
        }
    
    }
    cargarElArchivo(){
        try{
            
            const obtenerproductos = JSON.parse(fs.readFileSync('productos.json', 'utf-8'));
            console.log(obtenerproductos);
        }catch(err){
            throw new Error(err);
        }
    }
    modificarArchivo(id , nuevosDatos){
        
        getProducts.map((element)=>{
            if(element.id == id ){
              element.title = nuevosDatos.title;
              element.description = nuevosDatos.description;
              element.price = nuevosDatos.price;
              element.thumbnail = nuevosDatos.thumbnail;
              element.code = nuevosDatos.code;
              element.stock = nuevosDatos.stock;
              element.id = id;

                console.log(id);
            }
            fs.writeFileSync('productos.json', JSON.stringify(getProducts));
            
        })
    }

        borrarProductos(id){
            const productoborrar = [];
            getProducts.map((element)=>{
                if(element.id !== id){
                    productoborrar.push(element);


                }
                fs.writeFileSync('productos.json', JSON.stringify(productoborrar));
            })

        }
        
     
    }




let producto1 = new ProductManager("regla" , "30 cm" , 50 , "www.regla.com" , 1100 , 23 );


producto1.addProduct();
let producto2 = new ProductManager("escuadra" , "triangular" , 12, "www.escuadra.com" , 100 , 12);
producto2.addProduct();
let producto3 = new ProductManager("lapiz" , "de color" , 11, "www.lapizdecolores.com" , 1200 , 6);
producto3.addProduct();
    



console.log(getProducts);