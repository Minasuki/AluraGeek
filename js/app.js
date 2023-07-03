
document.addEventListener('DOMContentLoaded', ()=>{
fetchData();
})

const fetchData = async () => {
    try {
         const res = await fetch('./js/products.json');
         const data = await res.json();
         console.log(data);
    } catch (error) {
        console.log(error);
    }
}