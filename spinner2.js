

let spinLogo = ['\r|  ', '\r/  ', '\r-  ', '\r\\  ', '\r|  ', '\r/  ', '\r-  ', '\r\\  ', '\r|  '];

for(let spinIndex in spinLogo) {
  setTimeout(() => {
    process.stdout.write(spinLogo[spinIndex])
  }, 100 + spinIndex * 200);
}


// let sentence = ('\r|  ', '\r/  ', '\r-  ', '\r|   ');

// for(let spinIndex in spinLogo) {
//   setTimeout(() => {
//     process.stdout.write(spinLogo[spinIndex])
//   }, 100 + spinIndex * 200);
// }

// for (const char in sentence) {
//   setTimeout(() => {
//   process.stdout.write(sentence[char]);
//   }, 100 + char * 100);
// };


// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

// setTimeout(() => { 
//   process.stdout.write('\r|   ');
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 1300);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 1500);

// setTimeout(() => { 
//   process.stdout.write('\r|   ');
// }, 1700);