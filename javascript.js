const mes = '01101000 01100101 01101100 01101100 01101111 00100000 01110100 01101000 01100101 01110010 01100101 00100000 01101000 01101111 01110111 00100000 01100001 01110010 01100101 00100000 01111001 01101111 01110101 00100000 01100100 01101111 01101001 01101110 01100111 00100000 01100001 01101110 01100100 00100000 01101000 01100001 01110000 01110000 01111001 00100000 01100011 01101111 01100100 01101001 01101110 01100111';

const res = mes
.split('') //this will split the binary into 2 order
.map(b => parseInt(b,2))
.map(num => String.fromCharCode(num)) //this code will covert the binary to string
.join('');// this code will now join it into one single line
//this will ooutput the binary as a string
console.log(res);
//the string output should be "hello there how are you doing and happy coding"