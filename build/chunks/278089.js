/** Chunk was on web.js **/
/** chunk id: 278089, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk954055 = require("./954055.js"),
  Chunk869639 = require("./869639.js"),
  Chunk410475 = require("./410475.js"),
  Chunk670200 = require("./670200.js"),
  o = null;
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
    o = a(t, l = s(l));
    var f = r.removeRange(t, l, "forward");
    return f === t ? e : i.push(e, f, "remove-range")
  },
  paste: function(e) {
    if (!o) return e;
    var t = r.replaceWithFragment(e.getCurrentContent(), e.getSelection(), o);
    return i.push(e, t, "insert-fragment")
  }
}