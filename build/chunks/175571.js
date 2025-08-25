/** Chunk was on web.js **/
/** chunk id: 175571, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk309943 = require("./309943.js"),
  Chunk102736 = require("./102736.js"),
  Chunk361788 = require("./361788.js"),
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