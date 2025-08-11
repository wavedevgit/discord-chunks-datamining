/** Chunk was on web.js **/
/** chunk id: 558217, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => s
});
var Chunk594174 = require("./594174.js"),
  Chunk339085 = require("./339085.js"),
  Chunk396352 = require("./396352.js"),
  Chunk664437 = require("./664437.js");

function s(e) {
  if (null == e || null == r.default.getCurrentUser()) return;
  let t = i.ZP.getTopEmojisMetadata(e);
  if (null != t) {
    let {
      topEmojisTTL: e
    } = t;
    if (null == e || Date.now() < e) return
  }
  o.Z.getIsFetching(e) || (0, a.pj)(e)
}