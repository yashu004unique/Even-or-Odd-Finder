let inputUser = document.getElementById('input-user')
let res = document.getElementById(result)



function EvenOrOdd(){
    if(inputUser.value === ''){
        alert('PLEASE PROVIDE THE NUMBER')
        return false;
    }
    
    if(inputUser.value % 2 === 0){
        result.innerHTML = 'It is an Even Number'
    }
    else{
        result.innerHTML = 'It is a Odd Number'
    }
}