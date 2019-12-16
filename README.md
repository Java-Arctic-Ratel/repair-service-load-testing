# repair-service-load-testing
Load Testing for Repair service REST application

## Usage

**Install**:

Globally, and preferably using [nvm](https://github.com/creationix/nvm) (at least on Unix/Linux systems to avoid filesystem permission issues when using sudo):
```shell
npm install -g postman-to-k6
```

Locally, into `./node_modules`:
```shell
npm install postman-to-k6
```

Copy converted javascipt file k6-script.js to 
```shell
./node_modules/postman-to-k6/bin
```

Run load test from ./node_modules/postman-to-k6/bin with
```shell
k6 run k6-script.js 
```

Current test settings (may be changed in k6-script.js):
```shell
maxRedirects: 4, 
vus: 1000,     // quantitiy of virtual users which run scripts - they're essentially glorified, parallel while(true) loops
duration: "30s" // duration of test

+ added 4 requests:
    - GET order page #1
    - POST new order
    - PUT update order
    - GET one order
```

Results
![alt text](https://github.com/Java-Arctic-Ratel/repair-service-load-testing/blob/init-project/k6_test_result.jpg "Screen 1")  
