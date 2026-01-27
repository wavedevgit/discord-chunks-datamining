/** Chunk was on 38939 **/
/** chunk id: 448567, original params: t,e,r (module,exports,require) **/
"use strict";

function n(t, e) {
  var r = i.get(t, e);
  return "auto" === r || "scroll" === r
}
var i = {
  get: require("./907116.js"),
  getScrollParent: function(t) {
    if (!t) return null;
    for (var e = t.ownerDocument; t && t !== e.body;) {
      if (n(t, "overflow") || n(t, "overflowY") || n(t, "overflowX")) return t;
      t = t.parentNode
    }
    return e.defaultView || e.parentWindow
  }
};
module.exports = i