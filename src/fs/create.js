import fs from "fs";

const create = async () => {
  const content = "I am fresh and young";
  const path = `${process.cwd()}/src/fs/files/fresh.txt`;

  if (fs.existsSync(path)) {
    throw new Error("FS operation failed");
  }
  
  fs.writeFile(path, content, (err) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log("written");
  });
};

await create();
