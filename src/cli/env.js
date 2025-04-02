const parseEnv = () => {
  const rssVars = [];

  for (const key in process.env) {
    if (key.startsWith("RSS_")) {
      rssVars.push(`${key}=${process.env[key]}`);
    }
  }

  if (rssVars.length > 0) {
    console.log(rssVars.reverse().join("; "));
  } else {
    console.log("No environment variables with prefix RSS_ found.");
  }
};

parseEnv();
