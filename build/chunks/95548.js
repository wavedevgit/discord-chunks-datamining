/** Chunk was on 68880 (5dfa49b29bd374d8.js) **/
"use strict";
r(42547), t.exports = function(t, e) {
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
    isBackward: !0
  })
}