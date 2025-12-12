/** Chunk was on web.js **/
/** chunk id: 373539, original params: e,t,n (module,exports,re quire) **/
"use strict";
require("./42547.js"), module.exports = function(e, t) {
  var n = e.getSelection(),
    r = e.getCurrentContent(),
    i = n.getStartKey(),
    o = n.getStartOffset(),
    a = i,
    s = 0;
  if (t > o) {
    var l = r.getKeyBefore(i);
    null == l ? a = i : (a = l, s = r.getBlockForKey(l).getText().length)
  } else s = o - t;
  return n.merge({
    focusKey: a,
    focusOffset: s,
    isBackward: true
  })
}