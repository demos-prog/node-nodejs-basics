import fs from "fs";

const rename = async () => {
  const path = `${process.cwd()}/src/fs/files/wrongFilename.txt`;
  const targetPath = `${process.cwd()}/src/fs/files/properFilename.md`;

  if (!fs.existsSync(path) || fs.existsSync(targetPath)) {
    throw new Error("FS operation failed");
  }

  fs.rename(path, targetPath, (err) => {
    if (err) {
      console.error(err);
    }

    console.log("renamed");
  });
};

await rename();
