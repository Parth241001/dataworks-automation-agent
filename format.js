<<<<<<< HEAD
const { exec } = require("child_process");
const path = require("path");

const filePath = path.resolve(process.cwd(), "data/format.md");

// Format the file using prettier
exec(`npx prettier@3.4.2 --write ${filePath}`, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error formatting file: ${error.message}`);
        process.exit(1);
    }
    if (stderr) {
        console.error(`stderr: ${stderr}`);
        process.exit(1);
    }
    console.log(`File formatted successfully: ${stdout}`);
});
=======
const { exec } = require("child_process");
const path = require("path");

const filePath = path.resolve(process.cwd(), "data/format.md");

// Format the file using prettier
exec(`npx prettier@3.4.2 --write ${filePath}`, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error formatting file: ${error.message}`);
        process.exit(1);
    }
    if (stderr) {
        console.error(`stderr: ${stderr}`);
        process.exit(1);
    }
    console.log(`File formatted successfully: ${stdout}`);
});
>>>>>>> 02646bbeef35a35e204113fe726514955ec8c706
