const express = require("express");
const app = express();
const userRouter = require("./routes/user");

const PORT = 8080;

// app.use(mylogger);

// app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // console.log("hello express");
  // res.send("<h1>こんにちは</h1>");
  // res.sendStatus(404);
  // res.status(500).send("エラーです。");
    // res.status(500).json({ msg: "エラーです"});
  res.render("index", { text: "NodeJsとExpress" });
});

// ルーティング設計
app.use("/user", userRouter);
// app.use("/auth", authRouter);
// app.use("/customer", customRouter);
// app.use("/product", productRouter);

app.listen(PORT, () => console.log("サーバーが起動しました。"));
