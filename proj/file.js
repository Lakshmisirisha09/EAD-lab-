const fs = require('fs');

fs.writeFileSync('data.txt', 'Name: John Doe\nRoll No: 101\nCourse: CSE\n');
console.log('File created and data written successfully.');
const data = fs.readFileSync('data.txt', 'utf8');
console.log('\nFile Content:\n' + data);
fs.appendFile('data.txt', 'Grade: A\n', (err) => {
    if (err) throw err;
    console.log('\nNew data appended successfully.');
    fs.readFile('data.txt', 'utf8', (err, updatedData) => {
        if (err) throw err;
        console.log('\nUpdated File Content:\n' + updatedData);
    });
});