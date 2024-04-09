//const http = require("http");
//const gfName = require("./feature");
import http from "http";
import defName from "./feature.js";
import { gfName2 } from "./feature.js";
import * as obj from "./feature.js";
import fs from "fs";
import path from "path";

console.log(path.extname("/home/random/index.html"));
console.log(path.dirname("/home/random/index.html"));

console.log(defName);
console.log(gfName2);

console.log(obj);
console.log(obj.default);
console.log(obj.gfName2);

//console.log(obj.generateLovePercent());

const home = fs.readFileSync("./index.html");

const server = http.createServer((req, res) => {
    console.log("Servered");
    console.log(req.url);
    //res.end("<h1>Rohit</h1>");

    if(req.url === "/")
    {
        // fs.readFile("./index.html", (err, data) => {
        //     res.end(data);
        // })
        //res.end("<h1>Home Page</h1>");
        res.end(home);
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