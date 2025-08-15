/** Chunk was on web.js **/
/** chunk id: 213753, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => o
});
var Chunk846903 = require("./846903.js");
let i = new(require("./710845.js")).Z("codedLinkQueue"),
  a = new Chunk846903.default({
    concurrency: 5,
    intervalCap: 10,
    interval: 2e3
  });

function o(e) {
  a.add(e)
}
a.on("add", () => {
  a.size > 0 && i.warn("Message link fetch queue backlog:", a.size)
})