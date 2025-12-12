/** Chunk was on web.js **/
/** chunk id: 571785, original params: e,t,n (module,exports,re quire) **/
"use strict";
require("./42547.js"), module.exports = function(e, t) {
  var n, r = e.getSelection(),
    i = r.getStartKey(),
    a = r.getStartOffset(),
    o = e.getCurrentContent(),
    s = i;
  return t > o.getBlockForKey(i).getText().length - a ? (s = o.getKeyAfter(i), n = 0) : n = a + t, r.merge({
    focusKey: s,
    focusOffset: n
  })
}