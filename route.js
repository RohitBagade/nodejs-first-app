//const http = require("http");
//const gfName = require("./feature");
import http from "http";
import defName from "./feature.js";
import { gfName2 } from "./feature.js";
import * as obj from "./feature.js";

console.log(defName);
console.log(gfName2);

console.log(obj);
console.log(obj.default);
console.log(obj.gfName2);

//console.log(obj.generateLovePercent());

const server = http.createServer((req, res) => {
    console.log("Servered");
    console.log(req.url);
    //res.end("<h1>Rohit</h1>");

    if(req.url === "/")
    {
        res.end("<h1>Home Page</h1>");
    }
    else if(req.url === "/about")
    {
        res.end("<h1>About Page</h1>");
    }
    else if(req.url === "/contact")
    {
        res.end("<h1>Contact Page</h1>");
    }
    else if(req.url === "/love")
    {
        res.end(`<h1>Love is ${obj.generateLovePercent()} </h1>`);
    }
    else
    {
        res.end("<h1>Page Not Found</h1>");
    }
});

server.listen(5000, () => {
    console.log("server is working");
});