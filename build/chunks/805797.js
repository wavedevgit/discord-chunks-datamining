/** Chunk was on web.js **/
/** chunk id: 805797, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk621796 = require("./621796.js"),
  Chunk172367 = require("./172367.js"),
  Chunk148727 = require("./148727.js"),
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
    s = o(t, l = a(l));
    var f = r.removeRange(t, l, "forward");
    return f === t ? e : i.push(e, f, "remove-range")
  },
  paste: function(e) {
    if (!s) return e;
    var t = r.replaceWithFragment(e.getCurrentContent(), e.getSelection(), s);
    return i.push(e, t, "insert-fragment")
  }
}