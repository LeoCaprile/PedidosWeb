fetch('https://serverless-leocaprile.vercel.app/api/meals')
.then(res => res.json())
.then(data => {
    const mealList = document.getElementById('meals-list');
    const submit = document.getElementById('btn-enviar');

    const template = data.map(el => `<a>${el.name}</a>`).join(' ')
    mealList.innerHTML = template;

    submit.removeAttribute('disabled')
})


