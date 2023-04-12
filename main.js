class Lapiz {
    #marca
    constructor({color = "#fff7000", borrador = true, dimension = 19, marca = "mongol"})
    {
        this.color = color;
        this.borrador = borrador;
        this.dimension = dimension;
        this.marca = marca;
    }
    getData(){
        return this
    }
    setData({color, borrador, dimension, marca}){
        this.color = color;
        this.borrador = borrador;
        this.dimension = dimension;
        this.marca = marca;
    }
}

let obj = new Lapiz({})
let objData = obj.getData();
let colorDom = document.querySelector(`[name="color"]`);
colorDom.value = objData.color
console.log((objData.color));