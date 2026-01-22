/** Chunk was on web.js **/
/** chunk id: 254160, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => s
});
var Chunk887924 = require("./887924.js");
let i = new(require("./626584.js")).A("codedLinkQueue"),
  a = new Chunk887924.default({
    concurrency: 5,
    intervalCap: 10,
    interval: 2e3
  });

function s(e) {
  a.add(e)
}
a.on("add", () => {
  a.size > 0 && i.warn("Message link fetch queue backlog:", a.size)
})