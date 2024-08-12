const express = require('express');
const child_process = require('child_process');
const app = express();
const port = 3000;

app.get('/run/:command', (req, res) => {
  const command = req.params.command;
  const process = child_process.exec(command, (error, stdout, stderr) => {
    if (error) {
      res.send(`Error: ${error}`);
      return;
    }
    res.send(`Free VPS output: ${stdout}`);
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
