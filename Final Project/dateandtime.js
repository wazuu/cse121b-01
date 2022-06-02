const z = new Date(document.lastModified);
let fullyear = ` ${z.getFullYear()}`;
document.getElementById("date").textContent = fullyear;
let time = `Last Updated: ${z.getMonth()}/${z.getDay()}/${z.getFullYear()} |${z.getHours()}:${z.getMinutes()}: ${z.getSeconds()}`;
document.getElementById("update").textContent = time;