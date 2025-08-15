/** Chunk was on 91584 **/
/** chunk id: 885105, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk470427 = require("./470427.js"),
  Chunk900791 = require("./900791.js"),
  Chunk65183 = require("./65183.js"),
  Chunk581079 = require("./581079.js"),
  u = Chunk65183.OrderedMap,
  s = Chunk65183.List,
  c = function(t, e, r) {
    if (t) {
      var n = e.get(t);
      n && e.set(t, r(n))
    }
  },
  l = function(t, e, r, n, i) {
    if (!i) return t;
    var o = "after" === n,
      a = e.getKey(),
      u = r.getKey(),
      l = e.getParentKey(),
      f = e.getNextSiblingKey(),
      p = e.getPrevSiblingKey(),
      h = r.getParentKey(),
      d = o ? r.getNextSiblingKey() : u,
      g = o ? u : r.getPrevSiblingKey();
    return t.withMutations(function(t) {
      c(l, t, function(t) {
        var e = t.getChildKeys();
        return t.merge({
          children: e.delete(e.indexOf(a))
        })
      }), c(p, t, function(t) {
        return t.merge({
          nextSibling: f
        })
      }), c(f, t, function(t) {
        return t.merge({
          prevSibling: p
        })
      }), c(d, t, function(t) {
        return t.merge({
          prevSibling: a
        })
      }), c(g, t, function(t) {
        return t.merge({
          nextSibling: a
        })
      }), c(h, t, function(t) {
        var e = t.getChildKeys(),
          r = e.indexOf(u),
          n = e.toArray();
        return n.splice(o ? r + 1 : 0 !== r ? r - 1 : 0, 0, a), t.merge({
          children: s(n)
        })
      }), c(a, t, function(t) {
        return t.merge({
          nextSibling: d,
          prevSibling: g,
          parent: h
        })
      })
    })
  };
module.exports = function(t, e, r, o) {
  "replace" === o && a(false);
  var s = r.getKey(),
    c = e.getKey();
  c === s && a(false);
  var f = t.getBlockMap(),
    p = e instanceof n,
    h = [e],
    d = f.delete(c);
  p && (h = [], d = f.withMutations(function(t) {
    var r = e.getNextSiblingKey(),
      n = i(e, t);
    t.toSeq().skipUntil(function(t) {
      return t.getKey() === c
    }).takeWhile(function(t) {
      var e = t.getKey(),
        i = e === c,
        o = !r && t.getParentKey() && (!n || e !== n);
      return !!(i || r && e !== r || o)
    }).forEach(function(e) {
      h.push(e), t.delete(e.getKey())
    })
  }));
  var g = d.toSeq().takeUntil(function(t) {
      return t === r
    }),
    y = d.toSeq().skipUntil(function(t) {
      return t === r
    }).skip(1),
    v = h.map(function(t) {
      return [t.getKey(), t]
    }),
    m = u();
  if ("before" === o) {
    var _ = t.getBlockBefore(s);
    _ && _.getKey() === e.getKey() && a(false), m = g.concat([].concat(v, [
      [s, r]
    ]), y).toOrderedMap()
  } else if ("after" === o) {
    var b = t.getBlockAfter(s);
    b && b.getKey() === c && a(false), m = g.concat([
      [s, r]
    ].concat(v), y).toOrderedMap()
  }
  return t.merge({
    blockMap: l(m, e, r, o, p),
    selectionBefore: t.getSelectionAfter(),
    selectionAfter: t.getSelectionAfter().merge({
      anchorKey: c,
      focusKey: c
    })
  })
}