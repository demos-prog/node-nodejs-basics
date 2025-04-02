const parseArgs = () => {
  const args = process.argv.slice(2);
  const buffer = [];

  for (let i = 0; i < args.length; i++) {
    const el = args[i];
    if (el.startsWith("--")) {
      buffer.push(`${el.slice(2)} is ${args[i + 1]}`);
    }
  }

  if (args.length === 0) {
    console.log("There are no args passed");
    return;
  }

  console.log(buffer.join("; "));
};

parseArgs();
