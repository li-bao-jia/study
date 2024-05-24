const express = require('express');
const bodyParser = require('body-parser');
const { JSONRPCServer } = require('json-rpc-2.0');

const app = express();
const server = new JSONRPCServer();

// Method to handle file upload
server.addMethod('upload', ({ filename, data }) => {
    // Implement upload logic here
    console.log(`Uploading file ${filename}...`);
    console.log('Data:', data);
    return `File ${filename} uploaded successfully!`;
});

// Method to handle preview
server.addMethod('preview', ({ filename }) => {
    // Implement preview logic here
    console.log(`Previewing file ${filename}...`);
    return `Previewing file ${filename}`;
});

// Use body-parser to parse JSON bodies
app.use(bodyParser.json());

// Endpoint for JSON-RPC requests
app.post('/json-rpc', (req, res) => {
    server.receive(req.body).then((jsonRPCResponse) => {
        if (jsonRPCResponse) {
            res.json(jsonRPCResponse);
        } else {
            res.sendStatus(204);
        }
    });
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
