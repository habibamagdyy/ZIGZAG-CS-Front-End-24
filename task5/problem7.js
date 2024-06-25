function fetchDataWithTimeout(url, timeout) {
    const controller = new AbortController();
    const signal = controller.signal;

    const time_out = setTimeout(() => {
        controller.abort();
    }, timeout);

    return new Promise((resolve, reject) => {
        fetch(url, { signal })
            .then(response => {
                clearTimeout(time_out); 
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json(); 
            })
            .then(data => {
                resolve(data); 
            })
            .catch(error => {
                if (error.name === 'AbortError') {
                    reject(`Request timed out after ${timeout} milliseconds`);
                } else {
                    reject(`Error in fetching data: ${error}`);
                }
            });
    });
}
