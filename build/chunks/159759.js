/** Chunk was on 8381 **/
/** chunk id: 159759, original params: t,e,r (module,exports,require) **/
"use strict";
require("./42547.js"), module.exports = function(t, e) {
  var r = t.getSelection(),
    n = t.getCurrentContent(),
    i = r.getStartKey(),
    o = r.getStartOffset(),
    a = i,
    u = 0;
  if (e > o) {
    var s = n.getKeyBefore(i);
    null == s ? a = i : (a = s, u = n.getBlockForKey(s).getText().length)
  } else u = o - e;
  return r.merge({
    focusKey: a,
    focusOffset: u,
    isBackward: true
  })
}