//with callbacks

function fetchData(callback) {
    setTimeout(() => {
      // Simulate a successful response
      callback(null, { data: 'Some data' });
    }, 1000);
  }
  
  function handleError(error) {
    console.error('Error:', error);
  }
  
  function processData(data, callback) {
    setTimeout(() => {
      // Simulate data processing
      callback(null, `Processed ${data.data}`);
    }, 1000);
  }
  
  fetchData((error, data) => {
    if (error) {
      handleError(error);
    } else {
      processData(data, (error, processedData) => {
        if (error) {
          handleError(error);
        } else {
          console.log(processedData);
        }
      });
    }
  });

  
  //with promises
  function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate a successful response
        resolve({ data: 'Some data' });
      }, 1000);
    });
  }
  
  function processData(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate data processing
        resolve(`Processed ${data.data}`);
      }, 1000);
    });
  }
  
  function handleError(error) {
    console.error('Error:', error);
  }
  
  // Using Promises
  fetchData()
    .then(data => processData(data))
    .then(processedData => console.log(processedData))
    .catch(error => handleError(error));

    
    //using async-await

    function fetchData() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            // Simulate a successful response
            resolve({ data: 'Some data' });
          }, 1000);
        });
      }
      
      function processData(data) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            // Simulate data processing
            resolve(`Processed ${data.data}`);
          }, 1000);
        });
      }
      
      function handleError(error) {
        console.error('Error:', error);
      }
      
      async function main() {
        try {
          const data = await fetchData();
          const processedData = await processData(data);
          console.log(processedData);
        } catch (error) {
          handleError(error);
        }
      }
      
      main();
      