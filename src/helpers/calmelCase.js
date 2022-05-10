export const toCamelCase = (string) => {
   let palabra = string;
   let stringArray = palabra.split('');
   let restoPalabra = stringArray.slice(1, stringArray.length).join('')   
   let primeraLetra = stringArray[0].toUpperCase();
   return `${primeraLetra}${restoPalabra}`;
};