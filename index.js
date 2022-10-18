const users = require('./users.json');

// https://developer.mozilla.org/fr/docs/Learn/JavaScript/Asynchronous/Introducing

// Don't modify this function. You must use it and work with what this function returns.
function getPhoneNumbers(size) {
    const createPhoneNumber = function() {
        let format = "(xxx) xxx-xxxx";
        const numberToGenerate = [...format].filter((x) => x === "x").length;
        for (var i = 0; i < numberToGenerate; i++) {
            format = format.replace("x", (Math.random() * 10).toFixed(0));
        }
        return format;
    }

    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Using_promises
    return new Promise((resolve, reject) => {
        try {
            const length = Math.min(10, size);
            const phones = Array(length)
                .fill(null)
                .map((x, i) => {
                    return createPhoneNumber();
                });
            return resolve({
                success: {
                    total: length
                },
                contents: {
                    phonenumbers: phones
                }
            });
        } catch (error) {
            return reject(error);
        }
    });
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
async function assignPhoneToUsers() {
    
    let n = 0;
    const array=[];
while (n < users.length) {
    const results = await getPhoneNumbers(1);
    array.push(results.contents.phonenumbers[0]);
      n++;
  }
return console.log(users.map((user,index) => ({...user,phone : array[index]})));
   // fill me with the necessary logic to add phone for each users.
}



(async () => {
    await assignPhoneToUsers();
})();