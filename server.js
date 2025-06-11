// Add this to server.js
app.post('/submit-form', (req, res) => {
  const { name, email, age, message } = req.body;

  const row = `${name},${email},${age},"${message.replace(/"/g, '""')}"\n`;

  if (!fs.existsSync('form_data.csv')) {
    fs.writeFileSync('form_data.csv', 'name,email,age,message\n');
  }

  fs.appendFile('form_data.csv', row, err => {
    if (err) return res.status(500).send("Failed to save form.");
    res.send("Form submitted successfully!");
  });
});
