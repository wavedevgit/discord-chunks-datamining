/** Chunk was on web.js **/
/** chunk id: 17591, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => s
});
var Chunk287809 = require("./287809.js"),
  Chunk508675 = require("./508675.js"),
  Chunk354430 = require("./354430.js"),
  Chunk451731 = require("./451731.js");

function s(e) {
  if (null == e || null == r.default.getCurrentUser()) return;
  let t = i.Ay.getTopEmojisMetadata(e);
  if (null != t) {
    let {
      topEmojisTTL: e
    } = t;
    if (null == e || Date.now() < e) return
  }
  a.A.getIsFetching(e) || (0, o.l2)(e)
}