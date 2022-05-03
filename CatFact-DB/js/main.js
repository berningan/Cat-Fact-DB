document.querySelector('button').addEventListener('click', getCatFact)

function getCatFact(){
    fetch(`https://cat-fact.herokuapp.com/facts`)
    .then (res => res.json())
    .then (data => {
        console.log(data)
        let catFacts = [];
        data.forEach(function(item, index, array){
            catFacts.push(item.text)
        })
        const randomNum = Math.floor(Math.random() * 5)
        console.log(randomNum)
        document.querySelector('.cat-fact').innerText = catFacts[`${randomNum}`]
         
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}