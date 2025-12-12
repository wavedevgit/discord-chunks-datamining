/** Chunk was on web.js **/
/** chunk id: 262068, original params: e,t,n (module,exports,re quire) **/
"use strict";
require("./961742.js"), require("./295415.js"), require("./27273.js");
let r = /url\((['"]?)([^'"]+?)\1\)/g,
  i = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,
  a = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;

function o(e) {
  let t = e.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
  return RegExp(`(url\\(['"]?)(${t})(['"]?\\))`, "g")
}