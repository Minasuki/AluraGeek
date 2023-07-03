
document.addEventListener('DOMContentLoaded', ()=>{

})

const fetchData = async () => {
    try {
         const res = await fetch('products.json');
         const data = await res.json();
         console.log(data);
    } catch (error) {
        console.log(error);
    }
}