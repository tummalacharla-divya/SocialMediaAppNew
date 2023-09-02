const mongoose = require("mongoose");
// Middleware
const db = 'mongodb+srv://SocialMediaApp:SocialMediaApp@cluster0.jq67hqe.mongodb.net/SocialMediaApp?retryWrites=true&w=majority'
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log(`Connection successful`);
}).catch((e) => {
  console.log(`No connection: ${e}`);
});

// mongodb://localhost:27017