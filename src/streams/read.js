import fs from "fs";
import { stdout } from "process";

const read = async () => {
  const path = `${process.cwd()}/src/streams/files/fileToRead.txt`;
  const readStream = fs.createReadStream(path);
  const chunks = [];

  readStream.on("data", (chunk) => {
    chunks.push(chunk);
  });

  readStream.on("end", () => {
    const data = Buffer.concat(chunks).toString();
    stdout.write(data + "\n");
    readStream.close();
  });
};

await read();
