/*
* tools/_serve.js
*
* Serve 'dist/*' statistically, at 'localhost:{PORT}/Kotka/'
*
* Usage:
*   <<
*     $ PORT=3101 node tools/_serve.js
*   <<
*
* Resources:
*   - "HTTP" (node docs)
*     -> https://nodejs.org/api/http.html#http_http
*/
import http from 'http'
import { readFile } from 'fs/promises'
import { fileURLToPath } from 'url';
import path from 'path';

const port = process.env["PORT"] || (_ => {
  process.stderr.write("Please specify 'PORT' env.var.\n");
  process.exit(-3);
})();

const source = "./dist";
const pathRE = /^\/Kotka\/(.*)$/;       // captures the sub-path

// tbd. is this suitable way of using promises with Node? #review
//
http.createServer( async (req, res) => {
  const { url } = req;

  if (req.method === 'GET') {          // POST /<level>    ; level = debug|info|warn|error|fatal

    // Check path to be '/Kotka/[...]'      tbd. could allow 'Kotka' but did this fast-and-drity
    //
    const arr = url.match(pathRE);

    if (arr) {
      const subPath = arr[1] || "index.html";

      try {
        const s = await readFile(`${source}/${subPath}`);
        res.write(s);
      }
      catch(err) {
        console.error( `Error serving '${url}'`, err);

        res.statusCode = (err.code == 'ENOENT') ? 404
          : 500;    // other
      }
      res.end();

    } else {
      res.statusCode = 404;
      res.end();
    }

  } else if (req.method === 'HEAD') {    // 'wait-on' pings with the 'HEAD' method (needed if we add automated tests, ever..)
    res.write("OK");
    res.end();
  }
})
  .listen(port);

//process.stdout.write(`Listening on port: ${port}\n`);
