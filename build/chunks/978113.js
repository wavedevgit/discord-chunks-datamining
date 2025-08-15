/** Chunk was on 91584 **/
/** chunk id: 978113, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk470427 = require("./470427.js"),
  Chunk656367 = require("./656367.js"),
  Chunk65183 = require("./65183.js"),
  Chunk581079 = require("./581079.js"),
  Chunk140207 = require("./140207.js"),
  s = Chunk65183.List,
  c = Chunk65183.Map,
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
    if ("unordered-list-item" === h || "ordered-list-item" === h) return u(t, e, function(t) {
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
        children: s(o)
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