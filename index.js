const users = require('./users.json');

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
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
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
    const results = await getPhoneNumbers(1);
    // fill me with the necessary logic to add phone for each users.
}

(async () => {
    await assignPhoneToUsers();
})();

