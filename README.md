## 로또번호추첨

### 오류
1. 6개의 번호를 각각 반환하려면 6개의 코드가 필요, 일일이 입력하지 않는 방법은?   

>- paint 함수 추가. 추첨된 번호를 인자로 사용.
>
>- createElement 메소드로 div 요소 생성, 이름을 eachNum 으로 함.
>
>- eachNum 요소에 각각의 스타일시트를 적용하기 위해 class 'each' 생성.
>
>- colorIndex 변수 추가. colors 배열의 인덱스 번호로 사용해서 번호의 10의자리수마다 다른 배경색을 지정함.
>
>- textContent로 추첨번호 표시.
>
>- appendChild 메소드로 생성한 div 를 lottoBox에 추가

2. 숫자중복발생

>- indexOf 메소드는 배열에서 주어진 값과 일치하지 않으면 -1 반환해줌. 반환값이 -1 일 때 1~45 사이의 값을 반환하게 하니 해결됨.

3. button 가운데정렬이 안됨.

>- 상위 div 생성했더니 가운데정렬됨.

4. 추첨 버튼을 눌렀을 때 번호가 무한히 생성됨. 

>- randomNum 배열을 paint 함수 밖으로 빼자 해결.

### 수정사항
1. 추첨버튼 for문 -> while문

>- for문으로는 6개 미만의 수가 반환되는걸 방지하기 위해 else문 추가.
>
>- while문으로는 배열 요소의 갯수가 6개가 될 때까지 값을 반환해서 따로 else문을 추가할 필요가 없음.

### 결과
![](https://velog.velcdn.com/images/miracle-21/post/da91b273-f69d-4a20-b222-7c1ef95b0e27/image.gif)


### 참조
[인프런 - 입문자를 위한 자바스크립트 기초 강의](https://www.inflearn.com/course/%EC%9E%85%EB%AC%B8%EC%9E%90-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EA%B8%B0%EC%B4%88%EA%B0%95%EC%9D%98)

