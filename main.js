fetch('https://serverless-leocaprile.vercel.app/api/meals')
.then(res => res.json())
.then(data => {
    const mealList = document.getElementById('meals-list');
    const submit = document.getElementById('btn-enviar');

    const template = data.map(el => 
    `<li><a>${el.name}<button class="button is-small desc">Informacion</button></a>
    <ul class="is-hidden">
        <li><a>Descripcion: ${el.desc}</a></li>
        <li><a>ID: ${el._id}</a></li>
    </ul>
    
    </li>`).join(' ')

    mealList.innerHTML = template;
    btnInfoAccion();
    submit.removeAttribute('disabled')
})



function btnInfoAccion(){

    const infoBtn = document.querySelectorAll('.desc');

    infoBtn.forEach(elem => {
        elem.addEventListener('click', ()=>{
            const li = elem.parentElement.parentElement;
            const info = li.lastElementChild;
    
            info.classList.toggle('is-hidden')
        })
    })

}