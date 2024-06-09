const fs = require("fs");

console.log("READ START");

{
  // Asyncronous  way to read file
  fs.readFile("input.txt", function (err, data) {
    if (err) {
      console.log("Error->", err);
      return err;
    }
    console.log("Data->", data.toString());
    console.log("READ END");
    return data;
  });

  console.log("OTHER STUFF");

  //  output--  READ START
  // OTHER STUFF
  // Data-> Hello from SAGar
  // PW Skills
  // READ END
}

{
  // Synchronous way to read file

  let data = fs.readFileSync("input.txt");

  console.log("DATA->", data.toString());

  console.log("READ END");

  console.log("OTHER STUFF");

  // OUTPUT-READ START
  //       DATA-> Hello from SAGar
  //       PW Skills
  //       READ END
  //       OTHER STUFF
}

{
  // READ > Open + read

  const buf = new Buffer(1024);

  fs.open("input.txt", "r+", function (err, fd) {
    if (err) {
      console.log("Error:-", err);
    }
    console.log("File Open Successfully");

    fs.read(fd, buf, 0, buf.length, 0, function (er, bytes) {
      if (er) {
        console.log("Error in read file:-", er);
      }
      console.log("DATA:-", bytes);
      console.log("DATA:-", buf.slice(0, bytes).toString());
      fs.close(fd, function (err) {
        if (err) {
          console.log("Error in Closing", err);
        } else {
          console.log("Successfully Close");
        }
      });
    });
  });

  // (node:10544) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(),
  //  Buffer.allocUnsafe(), or Buffer.from() methods instead.
  // (Use `node --trace-deprecation ...` to show where the warning was created)
  // File Open Successfully
  // DATA:- 33
  // DATA:- NEW NINJA--SAGAR SURI--SAGAR SURI
  // Successfully Close
}

{
  // writin to file

  fs.writeFile("input.txt", "NEW NINJA", function (err) {
    if (err) {
      console.log("ERROR on written:-", err);
    } else {
      console.log("Successfully Write:-");
    }
  });
}

{
  // Append to file
  fs.appendFile("input.txt", "--SAGAR SURI", "utf8", function (err) {
    if (err) {
      console.log("ERROR on Append:-", err);
    } else {
      console.log("Successfully Append:-");
    }
  });
}

{
  //  Deleting File
  fs.unlink("input.txt", function (err) {
    if (err) {
      console.log("Error in deleting");
    } else {
      console.log("successfully deleting");
    }
  });
}
