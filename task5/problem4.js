function downloadUrls(urls) {
    const downloadPromises = [];
    urls.forEach(url => {
        const promise = new Promise((resolve, reject) => {
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.text(); 
                })
                .then(data => {
                    resolve({ url: url, content: data }); 
                })
                .catch(error => {
                    reject(error); 
                });
        });
        downloadPromises.push(promise);
    });
    return Promise.all(downloadPromises);
}

