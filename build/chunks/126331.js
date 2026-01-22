/** Chunk was on web.js **/
/** chunk id: 126331, original params: e,t,n (module,exports,re quire) **/
"use strict";
require("./945730.js"), module.exports = function(e, t) {
  var n, r = e.getSelection(),
    i = r.getStartKey(),
    a = r.getStartOffset(),
    s = e.getCurrentContent(),
    o = i;
  return t > s.getBlockForKey(i).getText().length - a ? (o = s.getKeyAfter(i), n = 0) : n = a + t, r.merge({
    focusKey: o,
    focusOffset: n
  })
}