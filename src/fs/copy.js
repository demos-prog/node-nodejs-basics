import fs from "fs";

const copy = async () => {
  const path = `${process.cwd()}/src/fs/files`;
  const targetPath = `${process.cwd()}/src/fs/files_copy`;

  if (fs.existsSync(targetPath) || !fs.existsSync(path)) {
    console.error("FS operation failed");
  } else {
    fs.cp(path, targetPath, { recursive: true }, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("copyed");
      }
    });
  }
};

await copy();
