const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/bacheca', (req, res) => {
    const posts = [
        {
          titolo: "Introduzione a JavaScript",
          contenuto: "JavaScript è un linguaggio di programmazione versatile usato per lo sviluppo web.",
          immagine: "https://example.com/javascript.jpg",
          tags: ["programmazione", "javascript", "web development"]
        },
        {
          titolo: "Guida ai CSS Flexbox",
          contenuto: "Flexbox è un potente metodo di layout per allineare e distribuire gli elementi.",
          immagine: "https://example.com/flexbox.jpg",
          tags: ["css", "design", "layout"]
        },
        {
          titolo: "I migliori framework frontend",
          contenuto: "React, Vue e Angular sono tra i framework più usati per lo sviluppo frontend.",
          immagine: "https://example.com/frontend-frameworks.jpg",
          tags: ["frontend", "framework", "javascript"]
        },
        {
          titolo: "Ottimizzazione SEO per il tuo sito",
          contenuto: "Impara le tecniche per migliorare il posizionamento del tuo sito nei motori di ricerca.",
          immagine: "https://example.com/seo.jpg",
          tags: ["seo", "marketing", "web"]
        },
        {
          titolo: "Python per Data Science",
          contenuto: "Scopri come Python viene utilizzato per analizzare dati e costruire modelli predittivi.",
          immagine: "https://example.com/python-datascience.jpg",
          tags: ["python", "data science", "machine learning"]
        }
      ];
    res.json(posts);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});