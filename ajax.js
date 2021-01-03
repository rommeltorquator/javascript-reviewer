document.getElementById('button').addEventListener('click', loadData);

function loadData() {
    // create an xhr object
    const xhr = new XMLHttpRequest();

    // open
    xhr.open('GET', 'data.txt', true); // true is for asynchronous

    xhr.onreadystatechange = function() {
        // http statuses
        // 200 = ok
        // 403 = forbidden
        // 404 = not found

        if(this.status === 200 && this.readyState === 4) {
            console.log(this.responseText);
        }
    }

    xhr.send();
}

// JSON syntax, must use double quote on key, https://jsonlint.com/ for json syntax validation

// {
//     "name": "Rommel",
//     "age": 30,
//     "job": "Engineer"
// }

// [
//     {
//         "name": "Rommel",
//         "age": 30,
//         "job": "Engineer"
//     },
//     {
//         "name": "Melo",
//         "age": 31,
//         "job": "Plumber"
//     },
//     {
//         "name": "Toshi",
//         "age": 22,
//         "job": "Merchant"
//     },
// ]

// function loadData() {
//     create an xhr object
//     const xhr = new XMLHttpRequest();

//     open
//     xhr.open('GET', 'customer.json', true); true is for asynchronous

//     xhr.onload = function() {
//         if(this.status === 200) {
//             const customer = JSON.parse(this.responseText);

//             console.log(customer.name);
//             console.log(customer.age);
//             console.log(customer.job);

//             you can loop multiple json objects inside an array
//         }
//     }

//     xhr.send();
// }

// rest  API
// callback functions, js timing events, setTimeout, setInterval

// promises, review more