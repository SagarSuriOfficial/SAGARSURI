const app = require("./app");

// const PORT = process.env.PORT || 3000;
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`server.js running http://localhost:${PORT}`);
});
