/** Chunk was on web.js **/
/** chunk id: 373539, original params: e,t,n (module,exports,re quire) **/
"use strict";
require("./42547.js"), module.exports = function(e, t) {
  var n = e.getSelection(),
    r = e.getCurrentContent(),
    i = n.getStartKey(),
    a = n.getStartOffset(),
    o = i,
    s = 0;
  if (t > a) {
    var l = r.getKeyBefore(i);
    null == l ? o = i : (o = l, s = r.getBlockForKey(l).getText().length)
  } else s = a - t;
  return n.merge({
    focusKey: o,
    focusOffset: s,
    isBackward: true
  })
}