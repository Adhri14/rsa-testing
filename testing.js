'use strict'

const autocannon = require('autocannon')

const instance = autocannon({
    url: 'http://172.18.137.220:3005/api/v1/approval/approver/approve',
    setupClient: setupClient,
}, (err, result) => handleResults(result))

const body = JSON.stringify({
    "client_approval_id": "64532f612923736dabc4c09f",
    "pn_approver": "00001443",
    "approval_note": "oke siap",
    "deviceInfo": "{\"uniqueId\":\"8531650a6ab6aab6\",\"manufacturer\":\"Google\",\"deviceId\":\"goldfish_x86\",\"deviceModel\":\"sdk_gphone_x86\",\"deviceName\":\"Unknown\",\"deviceBrand\":\"google\",\"deviceSystemName\":\"Android\",\"deviceSystemVersion\":\"11\",\"networkOperator\":\"Android\",\"latitude\":\"-6.193125\",\"longitude\":\"106.821810\"}",
    "idSession": "5idapigzny",
    "deviceId": "0FB6B7B9-57A4-4C36-A349-B64533E9C151",
    "approval_status": 1,
    "message": "testing",
    "totp": "840163"
});
// results passed to the callback are the same as those emitted from the done events
instance.on('done', handleResults)

instance.on('tick', () => console.log('ticking'))

instance.on('response', handleResponse)

function setupClient(client) {
    client.on('body', console.log) // console.log a response body when its received
}

function handleResponse(client, statusCode, resBytes, responseTime) {
    console.log(`Got response with code ${statusCode} in ${responseTime} milliseconds`)
    console.log(`response: ${resBytes.toString()}`)

    //update the body or headers
    client.setHeaders({ authorization: 'Bearer 26daaa20e3549eb5432b78e1cc6db6784213554b' })
    client.setBody(body)
    // client.setHeadersAndBody({ new: 'header' }, 'new body')
}

function handleResults(result) {
    // ...
    console.table(result);
}

// const server = http.createServer(handle)

// server.listen(0, startBench)

// function handle(req, res) {
//     res.end('hello world')
// }

// function startBench() {
//     const url = 'http://172.18.137.220:3005'

//     const body = JSON.stringify({
//         "client_approval_id": "64532f612923736dabc4c09f",
//         "pn_approver": "00001443",
//         "approval_note": "oke siap",
//         "deviceInfo": "{\"uniqueId\":\"8531650a6ab6aab6\",\"manufacturer\":\"Google\",\"deviceId\":\"goldfish_x86\",\"deviceModel\":\"sdk_gphone_x86\",\"deviceName\":\"Unknown\",\"deviceBrand\":\"google\",\"deviceSystemName\":\"Android\",\"deviceSystemVersion\":\"11\",\"networkOperator\":\"Android\",\"latitude\":\"-6.193125\",\"longitude\":\"106.821810\"}",
//         "idSession": "5idapigzny",
//         "deviceId": "0FB6B7B9-57A4-4C36-A349-B64533E9C151",
//         "approval_status": 1,
//         "message": "testing",
//         "totp": "840163"
//     });

//     autocannon({
//         url,
//         connections: 2,
//         duration: 1,
//         headers: {
//             authorization: 'Bearer 26daaa20e3549eb5432b78e1cc6db6784213554b'
//         },
//         requests: [
//             {
//                 method: 'POST', // this should be a post for logging in
//                 path: '/api/v1/approval/approver/approve',
//                 body,
//                 // overwrite our default headers,
//                 // so we don't add an auth token
//                 // for this request
//                 headers: {
//                     Authorization: 'Bearer 26daaa20e3549eb5432b78e1cc6db6784213554b'
//                 }
//             },
//         ]
//     }, finishedBench)

//     function finishedBench(err, res) {
//         console.log('finished bench', err, res)
//     }
// }