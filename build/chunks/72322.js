/** Chunk was on web.js **/
/** chunk id: 72322, original params: e,t,n (module,exports,re quire) **/
"use strict";
require("./42547.js"), module.exports = {
  isValidBlock: function(e, t) {
    var n = e.getKey(),
      r = e.getParentKey();
    if (null != r && !t.get(r).getChildKeys().includes(n) || !e.getChildKeys().map(function(e) {
        return t.get(e)
      }).every(function(e) {
        return e.getParentKey() === n
      })) returnfalse;
    var i = e.getPrevSiblingKey();
    if (null != i && t.get(i).getNextSiblingKey() !== n) returnfalse;
    var a = e.getNextSiblingKey();
    return (null == a || t.get(a).getPrevSiblingKey() === n) && (null === a || null === i || i !== a) && ("" == e.text || !(e.getChildKeys().size > 0))
  },
  isConnectedTree: function(e) {
    var t = e.toArray().filter(function(e) {
      return null == e.getParentKey() && null == e.getPrevSiblingKey()
    });
    if (1 !== t.length) returnfalse;
    for (var n = t.shift(), r = 0, i = n.getKey(), a = []; null != i;) {
      var o = e.get(i),
        s = o.getChildKeys(),
        l = o.getNextSiblingKey();
      if (s.size > 0) {
        null != l && a.unshift(l);
        var c = s.map(function(t) {
          return e.get(t)
        }).find(function(e) {
          return null == e.getPrevSiblingKey()
        });
        if (null == c) returnfalse;
        i = c.getKey()
      } else i = null != o.getNextSiblingKey() ? o.getNextSiblingKey() : a.shift();
      r++
    }
    return r === e.size
  },
  isValidTree: function(e) {
    var t = this;
    return !!e.toArray().every(function(n) {
      return t.isValidBlock(n, e)
    }) && this.isConnectedTree(e)
  }
}