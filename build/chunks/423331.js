/** Chunk was on web.js **/
/** chunk id: 423331, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk309987 = require("./309987.js"),
  Chunk44135 = require("./44135.js"),
  Chunk65183 = require("./65183.js"),
  Chunk581079 = require("./581079.js"),
  s = Chunk65183.OrderedMap,
  l = Chunk65183.List,
  c = function(e, t, n) {
    if (e) {
      var r = t.get(e);
      r && t.set(e, n(r))
    }
  },
  u = function(e, t, n, r, i) {
    if (!i) return e;
    var a = "after" === r,
      o = t.getKey(),
      s = n.getKey(),
      u = t.getParentKey(),
      d = t.getNextSiblingKey(),
      f = t.getPrevSiblingKey(),
      p = n.getParentKey(),
      _ = a ? n.getNextSiblingKey() : s,
      m = a ? s : n.getPrevSiblingKey();
    return e.withMutations(function(e) {
      c(u, e, function(e) {
        var t = e.getChildKeys();
        return e.merge({
          children: t.delete(t.indexOf(o))
        })
      }), c(f, e, function(e) {
        return e.merge({
          nextSibling: d
        })
      }), c(d, e, function(e) {
        return e.merge({
          prevSibling: f
        })
      }), c(_, e, function(e) {
        return e.merge({
          prevSibling: o
        })
      }), c(m, e, function(e) {
        return e.merge({
          nextSibling: o
        })
      }), c(p, e, function(e) {
        var t = e.getChildKeys(),
          n = t.indexOf(s),
          r = a ? n + 1 : 0 !== n ? n - 1 : 0,
          i = t.toArray();
        return i.splice(r, 0, o), e.merge({
          children: l(i)
        })
      }), c(o, e, function(e) {
        return e.merge({
          nextSibling: _,
          prevSibling: m,
          parent: p
        })
      })
    })
  };
module.exports = function(e, t, n, a) {
  "replace" === a && o(false);
  var l = n.getKey(),
    c = t.getKey();
  c === l && o(false);
  var d = e.getBlockMap(),
    f = t instanceof r,
    p = [t],
    _ = d.delete(c);
  f && (p = [], _ = d.withMutations(function(e) {
    var n = t.getNextSiblingKey(),
      r = i(t, e);
    e.toSeq().skipUntil(function(e) {
      return e.getKey() === c
    }).takeWhile(function(e) {
      var t = e.getKey(),
        i = t === c,
        a = n && t !== n,
        o = !n && e.getParentKey() && (!r || t !== r);
      return !!(i || a || o)
    }).forEach(function(t) {
      p.push(t), e.delete(t.getKey())
    })
  }));
  var m = _.toSeq().takeUntil(function(e) {
      return e === n
    }),
    h = _.toSeq().skipUntil(function(e) {
      return e === n
    }).skip(1),
    g = p.map(function(e) {
      return [e.getKey(), e]
    }),
    E = s();
  if ("before" === a) {
    var b = e.getBlockBefore(l);
    b && b.getKey() === t.getKey() && o(false), E = m.concat([].concat(g, [
      [l, n]
    ]), h).toOrderedMap()
  } else if ("after" === a) {
    var y = e.getBlockAfter(l);
    y && y.getKey() === c && o(false), E = m.concat([
      [l, n]
    ].concat(g), h).toOrderedMap()
  }
  return e.merge({
    blockMap: u(E, t, n, a, f),
    selectionBefore: e.getSelectionAfter(),
    selectionAfter: e.getSelectionAfter().merge({
      anchorKey: c,
      focusKey: c
    })
  })
}