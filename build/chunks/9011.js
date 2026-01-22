/** Chunk was on web.js **/
/** chunk id: 9011, original params: e,t,n (module,exports,re quire) **/
"use strict";
require("./945730.js"), module.exports = {
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
      var s = e.get(i),
        o = s.getChildKeys(),
        l = s.getNextSiblingKey();
      if (o.size > 0) {
        null != l && a.unshift(l);
        var c = o.map(function(t) {
          return e.get(t)
        }).find(function(e) {
          return null == e.getPrevSiblingKey()
        });
        if (null == c) returnfalse;
        i = c.getKey()
      } else i = null != s.getNextSiblingKey() ? s.getNextSiblingKey() : a.shift();
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