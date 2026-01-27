/** Chunk was on 38939 **/
/** chunk id: 451865, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk617179 = require("./617179.js"),
  Chunk279998 = require("./279998.js"),
  Chunk116740 = require("./116740.js"),
  Chunk797686 = require("./797686.js"),
  Chunk728601 = require("./728601.js"),
  u = Chunk116740.List,
  c = Chunk116740.Map,
  l = function(t, e, r) {
    if (t) {
      var n = e.get(t);
      n && e.set(t, r(n))
    }
  };
module.exports = function(t, e) {
  e.isCollapsed() || a(false);
  var r = e.getAnchorKey(),
    o = t.getBlockMap(),
    f = o.get(r),
    p = f.getText();
  if (!p) {
    var h = f.getType();
    if ("unordered-list-item" === h || "ordered-list-item" === h) return s(t, e, function(t) {
      return t.merge({
        type: "unstyled",
        depth: 0
      })
    })
  }
  var d = e.getAnchorOffset(),
    g = f.getCharacterList(),
    y = i(),
    v = f instanceof n,
    m = f.merge({
      text: p.slice(0, d),
      characterList: g.slice(0, d)
    }),
    _ = m.merge({
      key: y,
      text: p.slice(d),
      characterList: g.slice(d),
      data: c()
    }),
    b = o.toSeq().takeUntil(function(t) {
      return t === f
    }),
    S = o.toSeq().skipUntil(function(t) {
      return t === f
    }).rest(),
    w = b.concat([
      [r, m],
      [y, _]
    ], S).toOrderedMap();
  return v && (f.getChildKeys().isEmpty() || a(false), w = w.withMutations(function(t) {
    var e = m.getKey(),
      r = _.getKey();
    l(m.getParentKey(), t, function(t) {
      var n = t.getChildKeys(),
        i = n.indexOf(e) + 1,
        o = n.toArray();
      return o.splice(i, 0, r), t.merge({
        children: u(o)
      })
    }), l(m.getNextSiblingKey(), t, function(t) {
      return t.merge({
        prevSibling: r
      })
    }), l(e, t, function(t) {
      return t.merge({
        nextSibling: r
      })
    }), l(r, t, function(t) {
      return t.merge({
        prevSibling: e
      })
    })
  })), t.merge({
    blockMap: w,
    selectionBefore: e,
    selectionAfter: e.merge({
      anchorKey: y,
      anchorOffset: 0,
      focusKey: y,
      focusOffset: 0,
      isBackward: false
    })
  })
}