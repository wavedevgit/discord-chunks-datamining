/** Chunk was on 8381 **/
/** chunk id: 802801, original params: t,e,r (module,exports,require) **/
"use strict";
require("./42547.js"), module.exports = function(t, e) {
  var r, n = t.getSelection(),
    i = n.getStartKey(),
    o = n.getStartOffset(),
    a = t.getCurrentContent(),
    u = i;
  return e > a.getBlockForKey(i).getText().length - o ? (u = a.getKeyAfter(i), r = 0) : r = o + e, n.merge({
    focusKey: u,
    focusOffset: r
  })
}