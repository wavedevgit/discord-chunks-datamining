/** Chunk was on web.js **/
/** chunk id: 213753, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => a
});
var Chunk846903 = require("./846903.js");
let i = new(require("./710845.js")).Z("codedLinkQueue"),
  o = new Chunk846903.default({
    concurrency: 5,
    intervalCap: 10,
    interval: 2e3
  });

function a(e) {
  o.add(e)
}
o.on("add", () => {
  o.size > 0 && i.warn("Message link fetch queue backlog:", o.size)
})