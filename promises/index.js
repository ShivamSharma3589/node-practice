const fs = require("fs");
const superagent = require("superagent");

fs.readFile(`${__dirname}/doc.txt`, (err, data) => {
  console.log(`Breed: ${data}`);

  superagent
    .get(`https://dog.ceo/api/breed/${data}/images/random`)
    .end((err, res) => {
      console.log(res.body.message);

      fs.writeFile("test-dog.txt", res.body.message, (err, res) => {
        if (err) return console.log(err);

        console.log("File has been written!");
      });
    });
});
