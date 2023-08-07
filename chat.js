
let username1=document.querySelector('.user1name')
let username2=document.querySelector('.user2name')
let lefm=document.querySelector('.leftm')
let rightm=document.querySelector('.rightm')

let saveuser1=localStorage.getItem('user1')
let saveuser2=localStorage.getItem('user2')
let lic=document.querySelector('.le')
let ric=document.querySelector('.ri')

let change1=document.querySelector('.change-1')
let change2=document.querySelector('.change-2')


let img1=document.querySelector('.img-1')
let img2=document.querySelector('.img-2')
let img3=document.querySelector('.img-3')
let img4=document.querySelector('.img-4')
let img5=document.querySelector('.img-5')
let defaultButton=document.querySelector('.defualt')
let defaultButton2=document.querySelector('.defualt2')

let img6=document.querySelector('.img-6')
let img7=document.querySelector('.img-7')
let img8=document.querySelector('.img-8')
let img9=document.querySelector('.img-9')
let img10=document.querySelector('.img-10')


change1.addEventListener('click',function(){
  let class1=document.querySelector('.visibele1')
  class1.classList.toggle('hide1')
  console.log('jdj')
})

change2.addEventListener('click',function(){
  let class1=document.querySelector('.visible')
  class1.classList.toggle('hide')
  console.log('jdj')
})




defaultButton.addEventListener('click',function(){
  lic.style.background='url(439038.jpg)'
lic.style.backgroundPosition='center'
lic.style.backgroundAttachment='scroll'
lic.style.backgroundRepeat='no-repeat'
 lic.style.backgroundSize='cover'
 localStorage.setItem('style',lic.style.background)

})

defaultButton2.addEventListener('click',function(){
  ric.style.background='url(439038.jpg)'
ric.style.backgroundPosition='center'
ric.style.backgroundAttachment='scroll'
ric.style.backgroundRepeat='no-repeat'
 ric.style.backgroundSize='cover'
 localStorage.setItem('stylee',ric.style.background)

})



img1.addEventListener('click',function(){
lic.style.background='url(Mercedes-AMG-C63-Coupe-Edition-1-front-view.jpg)'
 lic.style.backgroundPosition='center'
 lic.style.backgroundAttachment='scroll'
 lic.style.backgroundRepeat='no-repeat'
  lic.style.backgroundSize='cover'
localStorage.setItem('style',lic.style.background)

  
})

img2.addEventListener('click',function(){
  lic.style.background='url(zmercamg-001.jpg)'
   lic.style.backgroundPosition='center'
   lic.style.backgroundAttachment='scroll'
   lic.style.backgroundRepeat='no-repeat'
    lic.style.backgroundSize='cover'
localStorage.setItem('style',lic.style.background)
    
  })

  img3.addEventListener('click',function(){
    lic.style.background='url(mercedes-amg-c63-coupe-1.jpg)'
     lic.style.backgroundPosition='center'
     lic.style.backgroundAttachment='scroll'
     lic.style.backgroundRepeat='no-repeat'
      lic.style.backgroundSize='cover'
localStorage.setItem('style',lic.style.background)
      
    })
  
    img4.addEventListener('click',function(){
      lic.style.background='url(mercedes-benz-c63-amg-black-series-by-domanig-02.jpg)'
       lic.style.backgroundPosition='center'
       lic.style.backgroundAttachment='scroll'
       lic.style.backgroundRepeat='no-repeat'
        lic.style.backgroundSize='cover'
localStorage.setItem('style',lic.style.background)
        
      })

      img5.addEventListener('click',function(){
        lic.style.background='url(Mercedes-C63s-AMG-sedan-6.jpeg)'
         lic.style.backgroundPosition='center'
         lic.style.backgroundAttachment='scroll'
         lic.style.backgroundRepeat='no-repeat'
          lic.style.backgroundSize='cover'
          
        })


        let ds=localStorage.getItem('style')
        lic.style.background=ds

localStorage.setItem('style',lic.style.background)


img6.addEventListener('click',function(){
  ric.style.background='url(Mercedes-AMG-C63-Coupe-Edition-1-front-view.jpg)'
   ric.style.backgroundPosition='center'
   ric.style.backgroundAttachment='scroll'
   ric.style.backgroundRepeat='no-repeat'
    ric.style.backgroundSize='cover'
  localStorage.setItem('stylee',ric.style.background)
  
    
  })
  
  img7.addEventListener('click',function(){
    ric.style.background='url(zmercamg-001.jpg)'
     ric.style.backgroundPosition='center'
     ric.style.backgroundAttachment='scroll'
     ric.style.backgroundRepeat='no-repeat'
      ric.style.backgroundSize='cover'
  localStorage.setItem('stylee',ric.style.background)
      
    })
  
    img8.addEventListener('click',function(){
      ric.style.background='url(mercedes-amg-c63-coupe-1.jpg)'
       ric.style.backgroundPosition='center'
       ric.style.backgroundAttachment='scroll'
       ric.style.backgroundRepeat='no-repeat'
        ric.style.backgroundSize='cover'
  localStorage.setItem('stylee',ric.style.background)
        
      })
    
      img9.addEventListener('click',function(){
        ric.style.background='url(mercedes-benz-c63-amg-black-series-by-domanig-02.jpg)'
         ric.style.backgroundPosition='center'
         ric.style.backgroundAttachment='scroll'
         ric.style.backgroundRepeat='no-repeat'
          ric.style.backgroundSize='cover'
  localStorage.setItem('stylee',ric.style.background)
          
        })
  
        img10.addEventListener('click',function(){
          ric.style.background='url(19678.jpg)'
           ric.style.backgroundPosition='center'
           ric.style.backgroundAttachment='scroll'
           ric.style.backgroundRepeat='no-repeat'
            ric.style.backgroundSize='cover'
  localStorage.setItem('stylee',ric.style.background)
            
          })
          let ds2=localStorage.getItem('stylee')
          ric.style.background=ds2
  

          localStorage.setItem('stylee',ric.style.background)



if(saveuser1){
    username1.innerHTML=saveuser1
}

localStorage.setItem('user1',username1.innerHTML)



if(saveuser2){
    username2.innerHTML=saveuser2
}

localStorage.setItem('user2',username2.innerHTML)




let changename=document.querySelector('.changename')
let clear=document.querySelector('.clear')
clear.addEventListener('click',function(){
    localStorage.clear('leftpara')
})
let changename2=document.querySelector('.changename2')

let ok1=document.querySelector('.ok1')
let ok2=document.querySelector('.ok2')
let please1=document.querySelector('.please1')
let please2=document.querySelector('.please2')
// let one1=document.querySelector('.one1')
// let one2=document.querySelector('.one2')

let user1=document.querySelector('.user1')
let user2=document.querySelector('.user2')

let leftButton=document.querySelector('.leftclass')
let rightButton=document.querySelector('.rightclass')


let leftinput=document.querySelector('.leftinput')
let rightinput=document.querySelector('.rightinput')


let leftpara=document.querySelector('.leftpara')
let rightpara=document.querySelector('.rightpara')

leftButton.disabled=true
rightButton.disabled=true

  
let leftsave=localStorage.getItem('leftpara')
let rightsave=localStorage.getItem('rightpara')

function addDeleteButtonListeners() {
    let deleteButtons = document.querySelectorAll('span');
    deleteButtons.forEach((button) => {
      button.addEventListener('click', function () {
        let parentDiv = button.parentElement;
        parentDiv.remove();
        
localStorage.setItem('leftpara',leftpara.innerHTML)
        localStorage.setItem('rightpara',rightpara.innerHTML)

       
      });
    });
  }

  


if(leftsave){
    leftpara.innerHTML=leftsave
}

if(rightsave){
    rightpara.innerHTML=rightsave
}


window.onload = function () {
addDeleteButtonListeners()   


};

//         // Additional event listener for window.onbeforeunload to save chat history before the page reloads
//         window.onbeforeunload = function () {
// addDeleteButtonListeners()         };
    


ok1.addEventListener('click',function(){
    if(user1.value){
lefm.style.visibility='visible'
ok1.style.visibility='hidden'
user1.style.visibility='hidden'
changename.style.visibility='visible'
username1.innerHTML=`${user1.value} 'S chatting screen `
localStorage.setItem('user1',username1.innerHTML)

    }
localStorage.setItem('user1',username1.innerHTML)

})


changename.addEventListener('click',function(){
    ok1.style.visibility='visible'
user1.style.visibility='visible'
changename.style.visibility='hidden'
})


ok2.addEventListener('click',function(){
    if(user2.value){
rightm.style.visibility='visible'
ok2.style.visibility='hidden'
user2.style.visibility='hidden'
changename2.style.visibility='visible'

username2.innerHTML=`${user2.value} 'S chatting screen ` 
localStorage.setItem('user2',username2.innerHTML)

    }
localStorage.setItem('user2',username2.innerHTML)

})


changename2.addEventListener('click',function(){
    ok2.style.visibility='visible'
user2.style.visibility='visible'
changename2.style.visibility='hidden'
})

document.addEventListener("DOMContentLoaded",function(){
    leftpara.style.visibility='visible'
rightpara.style.visibility='visible'
})

rightinput.addEventListener('input',function(){
if(rightinput.value){

rightButton.disabled=false


}
})
// function deck(){
leftButton.addEventListener('click',function(){
if(leftinput.value && user1.value){

    let datepara=document.createElement('h3')
    let datepara2=document.createElement('h3')

  

    
    let para2=document.createElement('p')
    let para=document.createElement('p')
let one1=document.createElement('div')
let one2=document.createElement('div')
    let para3=document.createElement('span')
    let para4=document.createElement('span')
    let timee=document.createElement('p')
    let timeee=document.createElement('p')
    // let para5=document.createElement('span')
    
    para3.innerHTML='&#xf014;'
    para3.classList.add('fa')
    
    para4.innerHTML='&#xf014;'
    para4.classList.add('fa')    // para5.innerHTML='delete for all'
    para2.style.color='white'
    para2.style.background='#25D366'
   timee.style.background='none'
   timee.style.color='white'

    
   timeee.style.background='none'
   timeee.style.color='white'
    one1.style.display='flex'
    one2.style.display='flex'
localStorage.setItem('rightpara',rightpara.innerHTML)
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

let options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Asia/Karachi' // Set the timeZone to Pakistan (Asia/Karachi)
  };


  function getPakistaniTime() {
    const now = new Date();
    return now.toLocaleString('en-PK', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
      timeZone: 'Asia/Karachi'
    });
  }

  function getPakistaniDate() {
    const now = new Date();
    const options = {
      day: 'numeric',
      month: 'long',
      timeZone: 'Asia/Karachi'
    };
    return now.toLocaleDateString('en-PK', options);
  }
let hours =new Date()
let hour =hours.toLocaleString('en-PK');
let minutes =hours.toLocaleString('en-PK');
let day=hours.getDay()
// var days=hours.get

let ampm = (hours >= 12) ? "PM" : "AM";

datepara.innerHTML=getPakistaniDate()
datepara2.innerHTML=getPakistaniDate()


// leftpara.appendChild(datepara)

leftpara.appendChild(one1)


timee.innerHTML=getPakistaniTime()    
timeee.innerHTML=getPakistaniTime()  


// rightpara.appendChild(datepara2)

rightpara.appendChild(one2)
one1.appendChild(datepara)

one1.appendChild(para2)
    // one1.appendChild(para5)
    one1.appendChild(para3)
    one1.appendChild(timee)

    one2.appendChild(datepara2)

    one2.appendChild(para)
    one2.appendChild(para4)
    one2.appendChild(timeee)
   







// })

    
    
    para.style.color='white'
    para.style.background='black'
    
    para2.innerHTML=`${user1.value}:   ${leftinput.value}` 
      para.innerHTML =`${user1.value}:   ${leftinput.value} ` 
    leftinput.value=''
    please1.innerHTML=''
    localStorage.setItem('leftpara',leftpara.innerHTML)

    if(leftinput.value==='') {

leftButton.disabled=true

 }
//  user1.value=''


        console.log(leftinput.value)
        

        
    }

    

    else if(user1.value===''){
     
        please1.innerHTML='please enter your name'
    }
// }
localStorage.setItem('leftpara',leftpara.innerHTML)
localStorage.setItem('rightpara',rightpara.innerHTML)

addDeleteButtonListeners()

})
localStorage.setItem('leftpara',leftpara.innerHTML)

rightButton.addEventListener('click',function(){

if(rightinput.value && user2.value){

    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
    let para2=document.createElement('p')
    let datepara=document.createElement('h3')
    let datepara2=document.createElement('h3')
    let para=document.createElement('p')
    let one1=document.createElement('div')
    let one2=document.createElement('div')
    let timee=document.createElement('p')
    let timeee=document.createElement('p')

    let para3=document.createElement('span')
    let para4=document.createElement('span')
    // let para5=document.createElement('span')
    timee.style.background='none'
   timee.style.color='white'

   timeee.style.background='none'
   timeee.style.color='white'

   para3.innerHTML='&#xf014;'
    para3.classList.add('fa')
    
    para4.innerHTML='&#xf014;'
    para4.classList.add('fa')
    // para5.innerHTML='delete For All'

    para2.style.color='white'
    one1.style.display='flex'
    one2.style.display='flex'
    para2.style.background='#25D366'

   

    function getPakistaniTime() {
        const now = new Date();
        return now.toLocaleString('en-PK', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
          timeZone: 'Asia/Karachi'
        });
      }
    
      function getPakistaniDate() {
        const now = new Date();
        const options = {
          day: 'numeric',
          month: 'long',
          timeZone: 'Asia/Karachi'
        };
        return now.toLocaleDateString('en-PK', options);
      }
    let hours =new Date()
    let hour =hours.toLocaleString('en-PK');
    let minutes =hours.toLocaleString('en-PK');
    let day=hours.getDay()
    // var days=hours.get
    
    let ampm = (hours >= 12) ? "PM" : "AM";
    
    datepara.innerHTML=getPakistaniDate()
    datepara2.innerHTML=getPakistaniDate()
    
    
    // leftpara.appendChild(datepara)
    
    
    
    timee.innerHTML=getPakistaniTime()    
    timeee.innerHTML=getPakistaniTime()  


rightpara.appendChild(datepara)

    rightpara.appendChild(one1)
    
localStorage.setItem('leftpara',leftpara.innerHTML)

one1.appendChild(datepara)


one1.appendChild(para2)
one1.appendChild(para3)
one1.appendChild(timee)
// one1.appendChild(para5)
leftpara.appendChild(datepara2)

leftpara.appendChild(one2)

datepara2.innerHTML=`${day} ${monthNames[hours.getMonth()]}`

// one2.appendChild(datepara2)

one2.appendChild(datepara2)

one2.appendChild(para)

    one2.appendChild(para4)
    one2.appendChild(timeee)

para2.innerHTML=`${user2.value}:   ${rightinput.value}` 
      para.innerHTML =`${user2.value}:   ${rightinput.value} ` 

    para.style.color='white'
    para.style.background='black'
  rightinput.value=''
  please2.innerHTML=''

  localStorage.setItem('rightpara',rightpara.innerHTML)
  localStorage.setItem('leftpara',leftpara.innerHTML)


  




localStorage.setItem('rightpara',rightpara.innerHTML)
localStorage.setItem('leftpara',leftpara.innerHTML)

    if(rightinput.value==='') {

rightButton.disabled=true

 }
    console.log(leftinput.value)
}

else  if(user2.value===''){
     
        please2.innerHTML='please enter your name'
    }
addDeleteButtonListeners()

})
localStorage.setItem('rightpara',rightpara.innerHTML)
localStorage.setItem('leftpara',leftpara.innerHTML)

