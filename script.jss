let btns = document.querySelectorAll('.btn')
let back = document.querySelector('.back')
let replay = document.querySelector('.replay')
let hod = 0
let player1 = document.querySelector('.player1')
let player2 = document.querySelector('.player2')
let firstscreen = document.querySelector('.firstscreen')
let list = document.querySelectorAll('.btn')
let startscreen = document.querySelector('.startscreen')
let krestik= document.querySelector('.krestik')
let nolik= document.querySelector('.nolik')
player1.style.display = 'none'
player2.style.display='none'
firstscreen.style.display = 'none'
startscreen.style.display = 'flex'
current = 0
counter = 0
krestik.addEventListener('click', function(){
    startscreen.style.display = 'none'
    firstscreen.style.display = 'flex'
    hod = 0
})
nolik.addEventListener('click', function(){
    startscreen.style.display = 'none'
    firstscreen.style.display = 'flex'
    hod = 1
})
btns.forEach(btn => {
    btn.addEventListener('click', function(){
        if (hod==0){
            if(btn.innerHTML == ''){
            btn.innerHTML = 'X'
            hod = 1
            btns.forEach(btn =>{
                btn.classList.remove('current')
            })
            btn.classList.add('current')

            }
        }
        else{
            if(btn.innerHTML == ''){
            btn.innerHTML = 'O'
            hod = 0     
            btns.forEach(btn =>{
                btn.classList.remove('current')
            })
            btn.classList.add('current')       

            }
        }
        if (btns[0].innerHTML=='X' && btns[1].innerHTML=='X' && btns[2].innerHTML=='X'){
            player1.style.display = 'flex'
            player2.style.display='none'
            firstscreen.style.display = 'none'}
        if (btns[3].innerHTML=='X' && btns[4].innerHTML=='X' && btns[5].innerHTML=='X'){
            player1.style.display = 'flex'
            player2.style.display='none'
            firstscreen.style.display = 'none'}
        if (btns[6].innerHTML=='X' && btns[7].innerHTML=='X' && btns[8].innerHTML=='X'){
            player1.style.display = 'flex'
            player2.style.display='none'
            firstscreen.style.display = 'none'} 
        if (btns[0].innerHTML=='X' && btns[3].innerHTML=='X' && btns[6].innerHTML=='X'){
            player1.style.display = 'flex'
            player2.style.display='none'
            firstscreen.style.display = 'none'}
        if (btns[1].innerHTML=='X' && btns[4].innerHTML=='X' && btns[7].innerHTML=='X'){
            player1.style.display = 'flex'
            player2.style.display='none'
            firstscreen.style.display = 'none'}
        if (btns[2].innerHTML=='X' && btns[5].innerHTML=='X' && btns[8].innerHTML=='X'){
            player1.style.display = 'flex'
            player2.style.display='none'
            firstscreen.style.display = 'none'}
        if (btns[0].innerHTML=='X' && btns[4].innerHTML=='X' && btns[8].innerHTML=='X'){
            player1.style.display = 'flex'
            player2.style.display='none'
            firstscreen.style.display = 'none'}
        if (btns[2].innerHTML=='X' && btns[4].innerHTML=='X' && btns[6].innerHTML=='X'){
            player1.style.display = 'flex'
            player2.style.display='none'
            firstscreen.style.display = 'none'}

        if (btns[0].innerHTML=='O' && btns[1].innerHTML=='O' && btns[2].innerHTML=='O'){
            player1.style.display = 'none'
            player2.style.display='flex'
            firstscreen.style.display = 'none'}
        if (btns[3].innerHTML=='O' && btns[4].innerHTML=='O' && btns[5].innerHTML=='O'){
            player1.style.display = 'none'
            player2.style.display='flex'
            firstscreen.style.display = 'none'}
        if (btns[6].innerHTML=='O' && btns[7].innerHTML=='O' && btns[8].innerHTML=='O'){
            player1.style.display = 'none'
            player2.style.display='flex'
            firstscreen.style.display = 'none'} 
        if (btns[0].innerHTML=='O' && btns[3].innerHTML=='O' && btns[6].innerHTML=='O'){
            player1.style.display = 'none'
            player2.style.display='flex'
            firstscreen.style.display = 'none'}
        if (btns[1].innerHTML=='O' && btns[4].innerHTML=='O' && btns[7].innerHTML=='O'){
            player1.style.display = 'none'
            player2.style.display='flex'
            firstscreen.style.display = 'none'}
        if (btns[2].innerHTML=='O' && btns[5].innerHTML=='O' && btns[8].innerHTML=='O'){
            player1.style.display = 'none'
            player2.style.display='flex'
            firstscreen.style.display = 'none'}
        if (btns[0].innerHTML=='O' && btns[4].innerHTML=='O' && btns[8].innerHTML=='O'){
            player1.style.display = 'none'
            player2.style.display='flex'
            firstscreen.style.display = 'none'}
        if (btns[2].innerHTML=='O' && btns[4].innerHTML=='O' && btns[6].innerHTML=='O'){
            player1.style.display = 'none'
            player2.style.display='flex'
            firstscreen.style.display = 'none'}
        counter += 1
        }
        )})

back.addEventListener('click', function(){
    btns.forEach(btn => {
        if (btn.classList.contains('current')){
            btn.innerHTML = ''
            if (hod == 1){
                hod -= 1
            }
            else{
                hod += 1
            }
        }})
})
replay.addEventListener('click', function(){
    btns.forEach(btn => {
        if (btn.innerHTML=='X' || btn.innerHTML=='O'){
            btn.innerHTML=''
            hod = 0
        }
    })
})
