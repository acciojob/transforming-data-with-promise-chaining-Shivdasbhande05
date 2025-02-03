//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("btn");


function result () {
    const input = document.getElementById("ip").value;

    return new Promise((resolve) => {
        setTimeout(() => {
            output.textContent = `Result: ${input}`
            resolve(input);
        },2000);
    }).then((input) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let multiply = 2 * input;
                output.textContent = `Result: ${multiply}`
                resolve(multiply);
            },1000);
        }).then ((multiply) => {
            return new Promise((resolve) => {
                setTimeout(()=>{
                    let subtract = multiply - 3;
                    output.textContent = `Result: ${subtract}`
                    resolve(subtract);
                },1000);
            }).then((subtract) =>{
                return new Promise((resolve) => {
                    setTimeout(() => {
                        let divide = subtract /2;
                        output.textContent = `Result: ${divide}`
                        resolve(divide);
                    },1000);
                }).then((divide) =>{
                    return new Promise((resolve, reject) => {
                        setTimeout(() =>{
                            let add = divide + 10;
                            output.textContent = `Result: ${add}`;
                            resolve(add);
                        },1000)
                    });
                }).then((add) => {
                    output.textContent = `Final Result: ${add}`;
                })
            })
        })
    })
}

btn.addEventListener("click", result);

