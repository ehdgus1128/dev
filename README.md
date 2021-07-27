# jsdev

## projects
* getUrlParams(#./getUrlParams)   
  - 주어진 URL에서(예:http://localhost:8080?a=1) 파라미터를 하나의 object로 변경하기.
  - split을 최소로 사용해보자. (split은 무조건 문자열의 모두를 읽어서 해당 문자열을 찾는다.)

## issues
1. [20210726] on인 상태를 계속 보내고 있는 echo 웹소캣 서버들이 있고 웹훅 웹소캣 서버에서 이를 모니터링한다.   
요구사항은 웹훅에서 웹소캣 서버들의 on/off 상태를 실시간 체크하고 싶다.   
echo 서버와 웹훅 서버를 구현하고 실시간 echo 서버 리스트를 화면에 표시.
  - echo 웹소캣 broadcast data format :   
    {   
    id : 0 , // 임의의 index id값 (0,1,2... 순차 증가 값으로 echo 서버들 임의값   
    status : 'on' , // 'on'   
    diagnotics : 'onoff' , // 'onoff'   
    tm : '2021-07-26 00:00:00' // echo 서버가 보낸 시간   
    }   
  - echo 서버는 10000대로 가정하고 'on'상태일 때는 대략 1초 정도의 간격으로 신호를 보내고 'off'상태일 때는 신호를 보내지 않는다.('off'라는 신호는 없고 'on'신호가 없으면 'off'로 판단)
