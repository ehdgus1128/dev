function isPrime(num){
    // 1이하 거르기
    if(num <= 1) return false;
    // 짝수 중 2 빼고 거르기
    if(num % 2 === 0) return num === 2 ? true : false;
    // 3 이상 루프를 돌리기 위해 제곱근3 (9) 아래인 소수 세개 거르기
    if(num === 3 || num === 5 || num === 7) return true;    
    // 3 이상 제곱근 이하 홀수 중 약수 거르기
    for(let i = 3; i <= Math.sqrt(num); i+=2){
        if(num % i === 0) return false;
    }

    return true;
}