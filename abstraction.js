//FOR Loop

// for (i = 0; i < 10; i++) {
//   console.log(i);
// }

//Hide the internal loop by ABSTRACTION

// function repeatLog(n, action) {
//   for (i = 0; i < n; i++) {
//     action(i);
//   }
// }

// repeatLog(5, console.log);

//Passing two function with abstraction

function repeatLog(n, action) {
  for (i = 0; i < n; i++) {
    action(i);
  }
}

let labels = [];
repeatLog(15, (i) => {
  labels.push(`unit ${i + 1}`);
});

console.log(labels);
