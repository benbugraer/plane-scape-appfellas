import https from "https";

const options = {
  method: "GET",
  hostname: "localhost:3000",
  port: null,
  path: "/",
  headers: {
    resourceversion: "v4",
    app_id: "4b3b8aff",
    app_key: "4b11374519c4e7893130cdca97923492",
  },
};

const req = https.request(options, (res) => {
  const chunks: Uint8Array[] = [];

  res.on("data", (chunk: Uint8Array) => {
    chunks.push(chunk);
  });

  res.on("end", () => {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.on("error", (err: Error) => {
  console.error(`Request failed: ${err.message}`);
});

req.end();
