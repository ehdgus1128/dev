#   stopSubmitForm

## 개요

SSR form 내부의 button 태그들이 무조건 submit 될 때의 이유와 해결법

## 이유
개요에 첨언하면 button type을 지정하지 않고 클릭 시 submit이 된다.   
button default type 이 submit으로 설정되어 있기 때문.(IE7 이하에서는 type이 button)   

## 해결법
1. button type="button". type을 button으로 지정 후 onclick event를 지정 후 function 내 submit.   
```html
<button  type="button"  submitForm">확인</button>
```
3. html 표준 input type="submit". (button은 내부 html콘텐츠, ::after/::before 등 여러 렌더링이 더 가능)
```html
<input  type="submit"  value="확인"  onclick="submitForm(); return  false;">
```
### 번외
- a 태그를 이용한 button을 만든다고 한다면,   
href="#" onclick="submitForm" -> href="javascript:void(0);" onclick="submitForm(); return false;" role="button"
href="#"은 onclick 후 이벤트 버블링으로 브라우저 상단으로 화면이 이동함.
```html
<a  href="javascript:void(0);"  onclick="submitForm(); return  false;"  role="button">확인</a>
```
- submit function 내에서는 form.submit을 지양한다.
	1. javascript가 동작하지 않았을 시 submit 불가
	2. form 내 input 태그 엔터 클릭 시 submit 불가(접근성에도 문제)
