import fs from "fs";

const list = async () => {
  const path = `${process.cwd()}/src/fs/files`;

  if (!fs.existsSync(path)) {
    throw new Error("FS operation failed");
  } else {
    fs.readdir(path, (err, files) => {
      if (err) {
        console.error(err);
        return;
      }
      files.forEach((file) => {
        console.log(file);
      });
    });
  }
};

await list();
