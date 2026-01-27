/** Chunk was on 38939 **/
/** chunk id: 181621, original params: t,e,r (module,exports,require) **/
"use strict";
require("./945730.js"), module.exports = function(t, e) {
  var r = t.getSelection(),
    n = t.getCurrentContent(),
    i = r.getStartKey(),
    o = r.getStartOffset(),
    a = i,
    s = 0;
  if (e > o) {
    var u = n.getKeyBefore(i);
    null == u ? a = i : (a = u, s = n.getBlockForKey(u).getText().length)
  } else s = o - e;
  return r.merge({
    focusKey: a,
    focusOffset: s,
    isBackward: true
  })
}