/** Chunk was on 91584 **/
/** chunk id: 602915, original params: t,e,r (module,exports,require) **/
"use strict";
require("./42547.js"), module.exports = {
  isValidBlock: function(t, e) {
    var r = t.getKey(),
      n = t.getParentKey();
    if (null != n && !e.get(n).getChildKeys().includes(r) || !t.getChildKeys().map(function(t) {
        return e.get(t)
      }).every(function(t) {
        return t.getParentKey() === r
      })) returnfalse;
    var i = t.getPrevSiblingKey();
    if (null != i && e.get(i).getNextSiblingKey() !== r) returnfalse;
    var o = t.getNextSiblingKey();
    return (null == o || e.get(o).getPrevSiblingKey() === r) && (null === o || null === i || i !== o) && ("" == t.text || !(t.getChildKeys().size > 0))
  },
  isConnectedTree: function(t) {
    var e = t.toArray().filter(function(t) {
      return null == t.getParentKey() && null == t.getPrevSiblingKey()
    });
    if (1 !== e.length) returnfalse;
    for (var r = e.shift(), n = 0, i = r.getKey(), o = []; null != i;) {
      var a = t.get(i),
        u = a.getChildKeys(),
        s = a.getNextSiblingKey();
      if (u.size > 0) {
        null != s && o.unshift(s);
        var c = u.map(function(e) {
          return t.get(e)
        }).find(function(t) {
          return null == t.getPrevSiblingKey()
        });
        if (null == c) returnfalse;
        i = c.getKey()
      } else i = null != a.getNextSiblingKey() ? a.getNextSiblingKey() : o.shift();
      n++
    }
    return n === t.size
  },
  isValidTree: function(t) {
    var e = this;
    return !!t.toArray().every(function(r) {
      return e.isValidBlock(r, t)
    }) && this.isConnectedTree(t)
  }
}