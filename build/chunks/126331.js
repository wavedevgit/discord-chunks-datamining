/** Chunk was on 38939 **/
/** chunk id: 126331, original params: t,e,r (module,exports,require) **/
"use strict";
require("./945730.js"), module.exports = function(t, e) {
  var r, n = t.getSelection(),
    i = n.getStartKey(),
    o = n.getStartOffset(),
    a = t.getCurrentContent(),
    s = i;
  return e > a.getBlockForKey(i).getText().length - o ? (s = a.getKeyAfter(i), r = 0) : r = o + e, n.merge({
    focusKey: s,
    focusOffset: r
  })
}