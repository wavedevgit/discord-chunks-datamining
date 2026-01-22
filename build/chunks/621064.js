/** Chunk was on web.js **/
/** chunk id: 621064, original params: e (module,exports,re quire) **/
"use strict";
module.exports = function(e) {
  var t = e.getSelection(),
    n = t.getAnchorKey(),
    r = e.getBlockTree(n),
    i = t.getStartOffset(),
    a = false;
  return r.some(function(e) {
    return i === e.get("start") ? (a = true, true) : i < e.get("end") && e.get("leaves").some(function(e) {
      return i === e.get("start") && (a = true, true)
    })
  }), a
}