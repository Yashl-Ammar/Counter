let count = 0

const val = document.getElementById('value')

const btns = document.querySelectorAll('.btn')

btns.forEach(function (button){
    button.addEventListener("click" , function(e) {
        const v = e.currentTarget.classList
        if(v.contains('increase'))
        {
            count++;
        }
        else if (v.contains('decrease'))
        {
            count--;
        }
        else{
            count = 0;
        }
        let color;
        if(count > 0)
        {
            color = 'green'
        }
        else if (count < 0)
        {
            color = 'red'
        }
        else{
            color = 'black'
        }

        val.style.color = color
        val.textContent = count
    
    } )
})