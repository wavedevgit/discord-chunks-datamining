/** Chunk was on web.js **/
/** chunk id: 282459, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk309987 = require("./309987.js"),
  Chunk703579 = require("./703579.js"),
  a = require("./65183.js").OrderedMap,
  o = function(e) {
    var t, n = {};
    return a(e.withMutations(function(e) {
      e.forEach(function(r, a) {
        var o = r.getKey(),
          s = r.getNextSiblingKey(),
          l = r.getPrevSiblingKey(),
          c = r.getChildKeys(),
          u = r.getParentKey(),
          d = i();
        if (n[o] = d, s && (e.get(s) ? e.setIn([s, "prevSibling"], d) : e.setIn([o, "nextSibling"], null)), l && (e.get(l) ? e.setIn([l, "nextSibling"], d) : e.setIn([o, "prevSibling"], null)), u && e.get(u)) {
          var f = e.get(u).getChildKeys();
          e.setIn([u, "children"], f.set(f.indexOf(r.getKey()), d))
        } else e.setIn([o, "parent"], null), t && (e.setIn([t.getKey(), "nextSibling"], d), e.setIn([o, "prevSibling"], n[t.getKey()])), t = e.get(o);
        c.forEach(function(t) {
          e.get(t) ? e.setIn([t, "parent"], d) : e.setIn([o, "children"], r.getChildKeys().filter(function(e) {
            return e !== t
          }))
        })
      })
    }).toArray().map(function(e) {
      return [n[e.getKey()], e.set("key", n[e.getKey()])]
    }))
  },
  s = function(e) {
    return a(e.toArray().map(function(e) {
      var t = i();
      return [t, e.set("key", t)]
    }))
  };
module.exports = function(e) {
  return e.first() instanceof r ? o(e) : s(e)
}