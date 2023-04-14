let rating = document.querySelectorAll('li');
let Submit = document.querySelector('button');


let rateHandler = 0;

let thankYou = ()=>{
  let rateCard = document.querySelector('.rating');
  let thankYouCard = document.querySelector('.thankyou');
  let rate = document.getElementById('rate');

  let rateText = rate.textContent;
  rate.textContent = rateText.replace('0',`${rateHandler}`);

  if(!thankYouCard.classList.contains('active') && rateHandler > 0){
    thankYouCard.classList.add('active');
    rateCard.classList.remove('active');
  }
}
rating.forEach(r =>{
  r.addEventListener('click',()=>{
    rating.forEach(rs =>{
      rs.classList.remove('active');
    })
    r.classList.add('active');  
    rateHandler = r.dataset.value;  
    console.log(rateHandler);
  })
})

Submit.addEventListener('click',thankYou);