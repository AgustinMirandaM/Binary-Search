// Funcion para realizar una busqueda binaria en un arreglo 
function binarySearch (arr, l, r, x) { 
if (l > r) return -1;

const m = Math.floor( (l+r) /2 );

if (arr[m] == x) return m;

if (arr[m] < x) {
    return binarySearch (arr, m + 1, r, x)
} 
else {
    return binarySearch (arr, l, m - 1, x);  
 }
}

const arr = [11,22,33,44];
console.log (binarySearch (arr, 0, arr.length-1, 22)); 
