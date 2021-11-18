const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const OrderRoutes = require("./routes/order");
const GetDetailsRoutes = require("./routes/get_userdetails");
// const jwt = require("jsonwebtoken");
const jwt = require("jsonwebtoken");

const app = express();
const db =
  "mongodb+srv://Ashutosh:LaundryPassword@cluster0.qd20p.mongodb.net/LaundryServices?retryWrites=true&w=majority";

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connection Successful");
  })
  .catch((err) => {
    console.log("MongoDB Connection Error", err);
  });

app.use(cors());
require("./models/user");
require("./models/order");

// app.use("/orders", function (req, res, next) {
//   try {
//     const token = req.headers.authorization?.split(" ")[1];
//     console.log(token);
//     if (!token) {
//       return res.status(401).json({
//         status: "failed",
//         message: "Not Authenticated",
//       });
//     }
//     const decoded = jwt.verify(token, "");

//     if (!decoded) {
//       return res.status(401).json({
//         status: "failed",
//         message: "Invalid Token",
//       });
//     }
//     req.user = decoded.data;
//   } catch (e) {
//     return res.status(500).json({
//       status: "failed",
//       message: e.message,
//     });
//   }

//   next();
// });

// app.use("/get", function (req, res, next) {
//   try {
//     const token = req.headers.authorization?.split(" ")[1];
//     console.log(token);
//     if (!token) {
//       return res.status(401).json({
//         status: "failed",
//         message: "Not Authenticated",
//       });
//     }
//     const decoded = jwt.verify(token, "Insta-Secret-123");

//     if (!decoded) {
//       return res.status(401).json({
//         status: "failed",
//         message: "Invalid Token",
//       });
//     }
//     req.user = decoded.data;
//   } catch (e) {
//     return res.status(500).json({
//       status: "failed",
//       message: e.message,
//     });
//   }

//   next();
// });

app.use(express.json());
app.use(require("./routes/auth"));
app.use("/orders", OrderRoutes);
app.use("/get", GetDetailsRoutes);

app.use(cors());

require("./models/user");

app.use(express.json());
app.use(require("./routes/auth"));

app.listen(port, () => {
  console.log(`Server is running on Port :: ${port}`);
});
