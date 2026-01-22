/** Chunk was on web.js **/
/** chunk id: 536184, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => i
});
var Chunk76788 = require("./76788.js");
async function i(e) {
  return "Safari" !== platform.name || "audio/ogg" !== (await fetch(e, {
    method: "HEAD"
  })).headers.get("Content-Type") ? Audio : r.A.OGVPlayer
}