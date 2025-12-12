/** Chunk was on web.js **/
/** chunk id: 284955, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk127849 = require("./127849.js"),
  Chunk476078 = require("./476078.js"),
  Chunk796138 = require("./796138.js"),
  o = function(e) {
    return i.slice(0, e.length) === e
  };
module.exports = function() {
  return o("Bun/") ? "BUN" : o("Cloudflare-Workers") ? "CLOUDFLARE" : o("Deno/") ? "DENO" : o("Node.js/") ? "NODE" : Chunk127849.Bun && "string" == typeof Bun.version ? "BUN" : Chunk127849.Deno && "object" == typeof Deno.version ? "DENO" : "process" === Chunk796138(Chunk127849.process) ? "NODE" : Chunk127849.window && Chunk127849.document ? "BROWSER" : "REST"
}()