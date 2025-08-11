/** Chunk was on 23357 **/
/** chunk id: 560103, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk424353 = require("./424353.js"),
  Chunk673574 = require("./673574.js"),
  Chunk6837 = require("./6837.js"),
  i = function(e) {
    return o.slice(0, e.length) === e
  };
module.exports = i("Bun/") ? "BUN" : i("Cloudflare-Workers") ? "CLOUDFLARE" : i("Deno/") ? "DENO" : i("Node.js/") ? "NODE" : Chunk424353.Bun && "string" == typeof Bun.version ? "BUN" : Chunk424353.Deno && "object" == typeof Deno.version ? "DENO" : "process" === Chunk6837(Chunk424353.process) ? "NODE" : Chunk424353.window && Chunk424353.document ? "BROWSER" : "REST"