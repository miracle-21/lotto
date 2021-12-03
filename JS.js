const onClick = document.querySelector('#onClick')
const offClick = document.querySelector('#offClick')
const lottoBox = document.querySelector('#lottoBox')
const colors = ['orange', 'skyblue', 'red', 'purple', 'green']
let randomNum=[]

//번호와 색을 각각 부여하기 힘든코드, 수정
// onClick.addEventListener('click', function(){
//     lottoBox.classList.add('newLottoNum')
//     let randomNum=[]
//     for (i=0; i<6; i++) {
//         num = Math.floor(Math.random() * 45) + 1
//         if(randomNum.indexOf(num) === -1 ) {
//             randomNum.push(num)
//         } else {
//             i = i-1
//         }
//     }
//     lottoBox.textContent=randomNum;
// })
// offClick.addEventListener('click', function(){
//     lottoBox.classList.remove('newLottoNum');
//     lottoBox.textContent="";
// })

function paint(num){
    const eachNum = document.createElement('div')
    eachNum.classList.add('each')
    let colorIndex = Math.floor(num / 10)
    eachNum.style.backgroundColor = colors[colorIndex]
    eachNum.textContent = num
    lottoBox.appendChild(eachNum)
}

//아래에 더 짧게 수정
// onClick.addEventListener('click', function(){
//     for (i=0; i<6; i++) {
//         num = Math.floor(Math.random() * 45) + 1
//         if(randomNum.indexOf(num) === -1 ) {
//             randomNum.push(num)
//             paint(num)}
//         } else {
//             i = i-1
//         }
//     }
// })

onClick.addEventListener('click', function(){
    while (randomNum.length < 6) {
        num = Math.floor(Math.random() * 45) + 1
        if(randomNum.indexOf(num) === -1 ) {
            randomNum.push(num)
            paint(num)
        }
    }
})

offClick.addEventListener('click', function(){
    randomNum.splice(0,6)
    lottoBox.textContent = ""
})