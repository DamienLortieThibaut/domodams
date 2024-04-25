const express = require('express');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors({ origin: '*'}));
app.use(bodyParser.json());

app.post('/writeInstructions', (req, res) => {
    const instruction = req.body.instructions.instruction;
  
    // Ajouter les instructions dans le fichier instructions.json, en gardant les anciennes instructions, le fichier peut etre vide
    fs.readFile('instructions.json', 'utf8', (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
  
      let instructions = [];
      if (data) {
        try {
          instructions = JSON.parse(data);
        } catch (parseError) {
          console.error('Erreur lors de la lecture des instructions JSON:', parseError);
          return res.status(500).send('Erreur lors de la lecture des instructions.');
        }
      }
  
      instructions.push(instruction);
      fs.writeFile('instructions.json', JSON.stringify(instructions), (err) => {
        if (err) {
          console.log(err);
          return res.status(500).send('Erreur lors de l\'écriture des instructions.');
        }
        res.send('Instructions ajoutées avec succès');
      });
    });
  });

    // instructions.json ressemble à ['instruction1', 'instruction2', ...]
app.get('/getInstructions', (req, res) => {
    fs.readFile('instructions.json', 'utf8', (err, data) => {
      if (err) {
        console.log(err);
        return res.status(500).send('Erreur lors de la lecture des instructions.');
      }
  
      let instructions = [];
      if (data) {
        try {
          instructions = JSON.parse(data);
        } catch (parseError) {
          console.error('Erreur lors de la lecture des instructions JSON:', parseError);
          return res.status(500).send('Erreur lors de la lecture des instructions.');
        }
      }
  
      res.send({ instructions });
    });
  });

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
