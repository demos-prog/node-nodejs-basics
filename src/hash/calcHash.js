import fs from "fs";
import crypto from "crypto";

const calculateHash = async () => {
  return new Promise((resolve, reject) => {
    const path = `${process.cwd()}/src/hash/files/fileToCalculateHashFor.txt`;

    const fileStream = fs.createReadStream(path);
    const hashStream = crypto.createHash("sha256");
    hashStream.setEncoding("hex");

    fileStream.on("error", (err) => {
      console.error(`Error reading file: ${path}`, err);
      reject(err);
    });

    hashStream.on("error", (err) => {
      console.error(`Error during hashing: ${path}`, err);
      reject(err);
    });

    fileStream.pipe(hashStream);

    hashStream.on("finish", () => {
      try {
        const hexHash = hashStream.read();
        console.log(`SHA256 Hash: ${hexHash}`);
        resolve();
      } catch (err) {
        console.error(`Error finalizing hash: `, err);
        reject(err);
      }
    });
  });
};

await calculateHash();
