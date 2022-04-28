import { default as wasm } from "./pkg/hello_world.js"
import { sortRandomArray } from "./src/sorting.js"

window.onload = () => {
    const btn = document.getElementById("inputConfirmation");
    addListeners(Array(btn), runTestAndPrintResult);
}

async function runWasmModule(sortRandomArray, arraySize) {
    return new Promise(() => {
        const time = parseFloat(sortRandomArray(arraySize));
        const n = document.createElement("h1");
        n.textContent = `WASM done in ${time}s.`;
        document.body.appendChild(n);
    });
}

async function runJSAlgo(sortRandomArray, arraySize) {
    return new Promise(() => {
        const time = sortRandomArray(arraySize) / 1000;
        const n = document.createElement("h1");
        n.textContent = `JS done in ${time}s.`;
        document.body.appendChild(n);
    });
}

function addListeners(elements, fun) {
    for (const element of elements) {
        element.addEventListener("click", fun);
    }

    document.addEventListener("keypress", event => {
        if (event.key === "Enter") {
            fun();
        }
    })
}

const runTestAndPrintResult = async () => {
    let arraySize = document.getElementById("arraySizeInput").value;
    if (arraySize === "") {
        return;
    }

    arraySize = parseInt(arraySize);
    if (arraySize <= 1) {
        const n = document.createElement("h1");
        n.textContent = "Nice try :)";
        document.body.appendChild(n);
        return;
    }

    const wasmInstance = wasm();
    wasmInstance.then(async (module) => {
        await Promise.all([
            runWasmModule(module.sort_random_array, arraySize),
            runJSAlgo(sortRandomArray, arraySize),
        ]);
    }).catch(err => {
        console.error(err);
    })
}