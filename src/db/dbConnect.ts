
import mongoose from "mongoose";

async function dbConnect() {
  // check if we have a connection to the database or if it's currently
  // connecting or disconnecting (readyState 1, 2 and 3)
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  return mongoose.connect(mongodb+srv:grupocompet:n5C0KEayjak8rhLh@sitecompet.nk50e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
}

export default dbConnect;