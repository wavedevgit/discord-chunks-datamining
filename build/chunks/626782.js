/** Chunk was on web.js **/
/** chunk id: 626782, original params: e,t,n (module,exports,re quire) **/
"use strict";
require("./186659.js"), require("./104074.js"), require("./340818.js");
let r = /url\((['"]?)([^'"]+?)\1\)/g,
  i = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,
  a = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;

function s(e) {
  let t = e.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
  return RegExp(`(url\\(['"]?)(${t})(['"]?\\))`, "g")
}