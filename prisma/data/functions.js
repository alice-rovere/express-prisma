export function randomYear(){
    return Math.floor(Math.random() * (2026 - 1900 + 1)) + 1900;
}
export function randomPrice(){
    return (Math.random() * 99).toFixed(2);
}
export function randIndex(length){
    return Math.floor(Math.random() * length);
}