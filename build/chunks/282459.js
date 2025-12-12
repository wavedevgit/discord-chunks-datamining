/** Chunk was on web.js **/
/** chunk id: 282459, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk309987 = require("./309987.js"),
  Chunk703579 = require("./703579.js"),
  o = require("./65183.js").OrderedMap,
  a = function(e) {
    var t, n = {};
    return o(e.withMutations(function(e) {
      e.forEach(function(r, o) {
        var a = r.getKey(),
          s = r.getNextSiblingKey(),
          l = r.getPrevSiblingKey(),
          c = r.getChildKeys(),
          u = r.getParentKey(),
          d = i();
        if (n[a] = d, s && (e.get(s) ? e.setIn([s, "prevSibling"], d) : e.setIn([a, "nextSibling"], null)), l && (e.get(l) ? e.setIn([l, "nextSibling"], d) : e.setIn([a, "prevSibling"], null)), u && e.get(u)) {
          var f = e.get(u).getChildKeys();
          e.setIn([u, "children"], f.set(f.indexOf(r.getKey()), d))
        } else e.setIn([a, "parent"], null), t && (e.setIn([t.getKey(), "nextSibling"], d), e.setIn([a, "prevSibling"], n[t.getKey()])), t = e.get(a);
        c.forEach(function(t) {
          e.get(t) ? e.setIn([t, "parent"], d) : e.setIn([a, "children"], r.getChildKeys().filter(function(e) {
            return e !== t
          }))
        })
      })
    }).toArray().map(function(e) {
      return [n[e.getKey()], e.set("key", n[e.getKey()])]
    }))
  },
  s = function(e) {
    return o(e.toArray().map(function(e) {
      var t = i();
      return [t, e.set("key", t)]
    }))
  };
module.exports = function(e) {
  return e.first() instanceof r ? a(e) : s(e)
}