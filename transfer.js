
var birinci

document.querySelectorAll('.tabs h1').forEach(element => {
    element.addEventListener('click', function () {
        document.querySelectorAll('.tabs h1').forEach(x => {
            x.style.color='black'
        });
        element.style.color='green'
        birinci=element
    })
});

document.querySelector('.left').addEventListener('click',function(){
   
        birinci.style.color='black'
        document.querySelector('.tab2').append(birinci)
        console.log(birinci);
})  
document.querySelector('.right').addEventListener('click',function(){
   
    birinci.style.color='black'
    document.querySelector('.tab1').append(birinci)
    console.log(birinci);
})  