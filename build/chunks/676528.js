/** Chunk was on web.js **/
/** chunk id: 676528, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk860511 = require("./860511.js"),
  Chunk65978 = require("./65978.js"),
  Chunk647055 = require("./647055.js"),
  o = function(e) {
    return i.slice(0, e.length) === e
  };
module.exports = function() {
  return o("Bun/") ? "BUN" : o("Cloudflare-Workers") ? "CLOUDFLARE" : o("Deno/") ? "DENO" : o("Node.js/") ? "NODE" : r.Bun && "string" == typeof Bun.version ? "BUN" : r.Deno && "object" == typeof Deno.version ? "DENO" : "process" === a(r.process) ? "NODE" : r.window && r.document ? "BROWSER" : "REST"
}()