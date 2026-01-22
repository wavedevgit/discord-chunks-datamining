/** Chunk was on web.js **/
/** chunk id: 448567, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t) {
  var n = i.get(e, t);
  return "auto" === n || "scroll" === n
}
var i = {
  get: require("./907116.js"),
  getScrollParent: function(e) {
    if (!e) return null;
    for (var t = e.ownerDocument; e && e !== t.body;) {
      if (r(e, "overflow") || r(e, "overflowY") || r(e, "overflowX")) return e;
      e = e.parentNode
    }
    return t.defaultView || t.parentWindow
  }
};
module.exports = i