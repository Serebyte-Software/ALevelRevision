//createHeader.js

//get filepath
var rootPath = window.location.href;
rootPath = rootPath.substr(0, rootPath.lastIndexOf(".html"));
rootPath = rootPath.substr(0, rootPath.lastIndexOf("/"));

//check for Notes folder
if(rootPath.indexOf("notes") != -1){
	rootPath = rootPath.substr(0, rootPath.lastIndexOf("/"));
};

//add file to path
rootPath += "/index.html";

//write header to document
var headerStr = "<header><a href=\"" + rootPath + "\"><h1>Revision Program</h1></a></header>";
document.body.innerHTML += headerStr;