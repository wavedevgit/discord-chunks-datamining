/** Chunk was on 91584 **/
/** chunk id: 175571, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk309943 = require("./309943.js"),
  Chunk102736 = require("./102736.js"),
  Chunk361788 = require("./361788.js"),
  Chunk467159 = require("./467159.js"),
  u = null;
module.exports = {
  cut: function(t) {
    var e = t.getCurrentContent(),
      r = t.getSelection(),
      s = null;
    if (r.isCollapsed()) {
      var c = r.getAnchorKey(),
        l = e.getBlockForKey(c).getLength();
      if (l === r.getAnchorOffset()) {
        var f = e.getKeyAfter(c);
        if (null == f) return t;
        s = r.set("focusKey", f).set("focusOffset", 0)
      } else s = r.set("focusOffset", l)
    } else s = r;
    u = o(e, s = a(s));
    var p = n.removeRange(e, s, "forward");
    return p === e ? t : i.push(t, p, "remove-range")
  },
  paste: function(t) {
    if (!u) return t;
    var e = n.replaceWithFragment(t.getCurrentContent(), t.getSelection(), u);
    return i.push(t, e, "insert-fragment")
  }
}