
let pali = 'ey'
const clean = (pali) =>  pali.toLowerCase().replace(/[^A-Za-z]/g, '');

const palindrome = (pali) => {
  const text = clean(pali);
  for (let i =0; i < text.length/2; i++) {
    if (text[i] !== text[text.length - 1 - i]) {
      return false;
    }
  }
return true;
}

console.log(palindrome(pali));


 // let palindrome = true;
 // text.split('').forEach((c, i) => {
  //  if (c !== text[text.length - 1 - i]){
  //    palindrome = false;  }
 // });
 // return palindrome;
//}
