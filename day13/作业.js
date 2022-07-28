let toPay = document.querySelector('.toPay')
toPay.addEventListener('click', function (){
    document.querySelector('.mask').classList.add('visible')
    document.querySelector('.pay').classList.remove('closePay')
    document.querySelector('.pay').classList.add('openPay')
})

// 关闭支付界面
function closePay(){
    let pay = document.querySelector('.pay')
    pay.classList.remove('closePay')
    document.querySelector('.pay').classList.remove('openPay')
    document.querySelector('.pay').classList.add('closePay')
    setTimeout(() => {
        document.querySelector('.mask').classList.remove('visible')
    },500)
}
let close = document.querySelector('#close')
let mask = document.querySelector('.mask')
mask.addEventListener('click', closePay)
close.addEventListener('click', closePay)

