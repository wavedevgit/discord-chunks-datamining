/** Chunk was on web.js **/
/** chunk id: 283558, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk720218 = require("./720218.js"),
  Chunk384404 = require("./384404.js"),
  Chunk511076 = require("./511076.js"),
  Chunk467159 = require("./467159.js"),
  s = null;
module.exports = {
  cut: function(e) {
    var t = e.getCurrentContent(),
      n = e.getSelection(),
      l = null;
    if (n.isCollapsed()) {
      var c = n.getAnchorKey(),
        u = t.getBlockForKey(c).getLength();
      if (u === n.getAnchorOffset()) {
        var d = t.getKeyAfter(c);
        if (null == d) return e;
        l = n.set("focusKey", d).set("focusOffset", 0)
      } else l = n.set("focusOffset", u)
    } else l = n;
    s = a(t, l = o(l));
    var f = r.removeRange(t, l, "forward");
    return f === t ? e : i.push(e, f, "remove-range")
  },
  paste: function(e) {
    if (!s) return e;
    var t = r.replaceWithFragment(e.getCurrentContent(), e.getSelection(), s);
    return i.push(e, t, "insert-fragment")
  }
}