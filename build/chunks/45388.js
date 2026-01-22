/** Chunk was on 35511 **/
/** chunk id: 45388, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk308227 = require("./308227.js"),
  Chunk791553 = require("./791553.js"),
  Chunk459547 = require("./459547.js"),
  i = function(e) {
    return a.slice(0, e.length) === e
  };
module.exports = i("Bun/") ? "BUN" : i("Cloudflare-Workers") ? "CLOUDFLARE" : i("Deno/") ? "DENO" : i("Node.js/") ? "NODE" : Chunk308227.Bun && "string" == typeof Bun.version ? "BUN" : Chunk308227.Deno && "object" == typeof Deno.version ? "DENO" : "process" === Chunk459547(Chunk308227.process) ? "NODE" : Chunk308227.window && Chunk308227.document ? "BROWSER" : "REST"