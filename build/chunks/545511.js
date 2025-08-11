/** Chunk was on web.js **/
/** chunk id: 545511, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => i
});
var Chunk399882 = require("./399882.js");
async function i(e) {
  return "Safari" !== platform.name || "audio/ogg" !== (await fetch(e, {
    method: "HEAD"
  })).headers.get("Content-Type") ? Audio : r.Z.OGVPlayer
}