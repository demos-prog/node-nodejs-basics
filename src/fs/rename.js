import fs from "fs";

const rename = async () => {
  const path = `${process.cwd()}/src/fs/files/wrongFilename.txt`;
  const targetPath = `${process.cwd()}/src/fs/files/properFilename.md`;

  if (!fs.existsSync(path) || fs.existsSync(targetPath)) {
    console.error("FS operation failed");
  } else {
    fs.rename(path, targetPath, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("renamed");
      }
    });
  }
};

await rename();
