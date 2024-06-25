function fetchDataWithRetry(url, maxRetries, delay = 1000) {
    return new Promise((resolve, reject) => {
        let retries = 0;

        function fetchWithRetry() {
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    resolve(data); 
                })
                .catch(error => {
                    retries++;
                    if (retries < maxRetries) {
                        console.warn(`Retry ${retries} due to error:`, error);
                        setTimeout(fetchWithRetry, delay);
                    } else {
                        reject(`Failed after ${maxRetries} retries: ${error}`);
                    }
                });
        }

        fetchWithRetry(); 
    });
}