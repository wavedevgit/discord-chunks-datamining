/** Chunk was on 38939 **/
/** chunk id: 278089, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk954055 = require("./954055.js"),
  Chunk869639 = require("./869639.js"),
  Chunk410475 = require("./410475.js"),
  Chunk670200 = require("./670200.js"),
  s = null;
module.exports = {
  cut: function(t) {
    var e = t.getCurrentContent(),
      r = t.getSelection(),
      u = null;
    if (r.isCollapsed()) {
      var c = r.getAnchorKey(),
        l = e.getBlockForKey(c).getLength();
      if (l === r.getAnchorOffset()) {
        var f = e.getKeyAfter(c);
        if (null == f) return t;
        u = r.set("focusKey", f).set("focusOffset", 0)
      } else u = r.set("focusOffset", l)
    } else u = r;
    s = o(e, u = a(u));
    var p = n.removeRange(e, u, "forward");
    return p === e ? t : i.push(t, p, "remove-range")
  },
  paste: function(t) {
    if (!s) return t;
    var e = n.replaceWithFragment(t.getCurrentContent(), t.getSelection(), s);
    return i.push(t, e, "insert-fragment")
  }
}