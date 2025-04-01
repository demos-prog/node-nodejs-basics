import fs from "fs";

const remove = async () => {
  const path = `${process.cwd()}/src/fs/files/fileToRemove.txt`;

  if (!fs.existsSync(path)) {
    console.error("FS operation failed");
  } else {
    fs.unlink(path, (err) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log("deleted");
    });
  }
};

await remove();
