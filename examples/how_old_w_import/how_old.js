function fetchAndInstantiate(url, importObject) {
    return fetch(url).then(response =>
        response.arrayBuffer()
    ).then(bytes =>
        WebAssembly.instantiate(bytes, importObject)
    ).then(results =>
        results.instance
    );
}

async function betterFetchAndInstantiate(url, importObject) {
    const wasm = await WebAssembly.instantiateStreaming(fetch(url), importObject);
    return wasm.instance;
}
