class Lapiz {
    #marca
    constructor({color = "#fff700", borrador = true, dimension = 19, marca = "mongol", material= "madera"})
    {
        this.color = color;
        this.borrador = borrador;
        this.dimension = dimension;
        this.marca = marca;
        this.material = material;
    }
    getData(){
        return this
    }
    setData({color, borrador, dimension, marca, material}){
        this.color = color;
        this.borrador = borrador;
        this.dimension = dimension;
        this.marca = marca;
        this.material = material;
    }
}

let obj = new Lapiz({});
let objData = obj.getData();
let arr1 = document.querySelectorAll(`[name="marca"]`);
let arr2 = document.querySelectorAll(`[name="borrador"]`);
let arr3 = document.querySelectorAll(`[name="material"]`);
let colorDom = document.querySelector(`[name="color"]`);
let range = document.querySelector(`[name="dimension"]`);
let table = document.querySelector("#table");
let tableArr = new Array();
let i = 0;
const showData = (element)=>{
    // let tr = document.createElement("tr")
    // tr.classList.add(`tr${i++}`)
    // console.log(tr);
    // table.insertAdjacentElement("beforeend", tr);
    // let tableTr = document.querySelector(`.tr${i}`)
    // console.log(tableTr);
    // // tableArr.unshift()
    let tr = document.createElement("tr");
    tr.innerHTML = `
            <td bgcolor="${element.color}"></td>
            <td>${element.dimension}</td>
            <td>${element.marca}</td>
            <td>${element.borrador}</td>
            <td>${element.material}</td>
    `
    table.insertAdjacentElement("beforeend", tr)
}
(()=>{
 (
    (objData.borrador === true)? arr2[0].checked = true : arr2[1].checked = true
 );
 (
    arr1.forEach(element =>{
        (element.value === objData.marca)? element.checked = true : element.checked = false
    })
 );
 (
    arr3.forEach(element =>{
        (element.value === objData.material)? element.checked = true : element.checked = false
    })
 );
 (
    range.value = objData.dimension,
    colorDom.value = objData.color
 )
})();

const FORM = document.querySelector("#form1");
FORM.addEventListener("submit", (e)=>{
    let data = Object.fromEntries(new FormData(e.target))
    console.log(data);
    e.preventDefault();
    showData(data)
});