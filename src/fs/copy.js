import fs from "fs";

const copy = async () => {
  const path = `${process.cwd()}/src/fs/files`;
  const targetPath = `${process.cwd()}/src/fs/files_copy`;

  if (fs.existsSync(targetPath) || !fs.existsSync(path)) {
    throw new Error("FS operation failed");
  }

  fs.cp(path, targetPath, { recursive: true }, (err) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log("copyed");
  });
};

await copy();
