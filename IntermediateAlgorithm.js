//!EJERCICIO NUMERO 1

function sumAll(arr) {

    if(arr[0] > arr[1]){
    
    let aux = 0;
    for(let i = arr[0]; i >= arr[1]; i--){
      aux+=i;
    }
    console.log("Me ejecuto porque A > B y su suma es: " + aux);
    return aux;
    
    }else{
    let aux2 = 0;
    
    for(let i = arr[1]; i >= arr[0]; i--){
       aux2+= i;
    }
    console.log("Me ejecuto porque A < B y su suma es: " + aux2);
    return aux2;
    }
    
}
    
sumAll([8, 4]);

//!EJERCICIO NUMERO 2