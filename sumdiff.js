function sumdiff(x,y){
	
	if(x%2==0 && y%2==0){
		sum(x,y);
	}
	else{
		diff(x,y);
	}

}
function sum(a,b){
	var plus=a+b;
	console.log(plus);
}
function diff(a,b){
	var minus=a-b;
	console.log(minus);
}
sumdiff(2,4);
sumdiff(3,7);