const promise = new Promise((resolve, reject) => {
  // Generate random number between 0 and 9
  const randomInt = Math.floor(Math.random() * 10);

  if (randomInt % 2 === 0) {
    // Success
    setTimeout(() => resolve("done"), 2000);
  } else {
    // Failure
    setTimeout(() => reject("error"), 2000);
  }
});

// Using then().catch()
// promise
//   .then((data) => {
//     console.log(`Yay! Promise resolved with response: ${data}`);
//   })
//   .catch((error) => {
//     console.log(`Boo! Promise rejected with response: ${error}`);
//   });

// Using async await
async function getPromiseResponse() {
  try {
    const data = await promise;
    console.log(`Yay! Promise resolved with response: ${data}`);
  } catch (error) {
    console.log(`Boo! Promise rejected with response: ${error}`);
  }
}

getPromiseResponse();
