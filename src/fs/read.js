import fs from "fs";

const read = async () => {
  const path = `${process.cwd()}/src/fs/files/fileToRead.txt`;

  if (!fs.existsSync(path)) {
    throw new Error("FS operation failed");
  }

  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(data);
  });
};

await read();
