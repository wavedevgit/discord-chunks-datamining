/** Chunk was on web.js **/
/** chunk id: 451865, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk617179 = require("./617179.js"),
  Chunk279998 = require("./279998.js"),
  Chunk116740 = require("./116740.js"),
  Chunk797686 = require("./797686.js"),
  Chunk728601 = require("./728601.js"),
  l = Chunk116740.List,
  c = Chunk116740.Map,
  u = function(e, t, n) {
    if (e) {
      var r = t.get(e);
      r && t.set(e, n(r))
    }
  },
  d = function(e, t, n) {
    return e.withMutations(function(e) {
      var r = t.getKey(),
        i = n.getKey();
      u(t.getParentKey(), e, function(e) {
        var t = e.getChildKeys(),
          n = t.indexOf(r) + 1,
          a = t.toArray();
        return a.splice(n, 0, i), e.merge({
          children: l(a)
        })
      }), u(t.getNextSiblingKey(), e, function(e) {
        return e.merge({
          prevSibling: i
        })
      }), u(r, e, function(e) {
        return e.merge({
          nextSibling: i
        })
      }), u(i, e, function(e) {
        return e.merge({
          prevSibling: r
        })
      })
    })
  };
module.exports = function(e, t) {
  t.isCollapsed() || s(false);
  var n = t.getAnchorKey(),
    a = e.getBlockMap(),
    l = a.get(n),
    u = l.getText();
  if (!u) {
    var f = l.getType();
    if ("unordered-list-item" === f || "ordered-list-item" === f) return o(e, t, function(e) {
      return e.merge({
        type: "unstyled",
        depth: 0
      })
    })
  }
  var p = t.getAnchorOffset(),
    _ = l.getCharacterList(),
    h = i(),
    m = l instanceof r,
    g = l.merge({
      text: u.slice(0, p),
      characterList: _.slice(0, p)
    }),
    E = g.merge({
      key: h,
      text: u.slice(p),
      characterList: _.slice(p),
      data: c()
    }),
    b = a.toSeq().takeUntil(function(e) {
      return e === l
    }),
    y = a.toSeq().skipUntil(function(e) {
      return e === l
    }).rest(),
    O = b.concat([
      [n, g],
      [h, E]
    ], y).toOrderedMap();
  return m && (l.getChildKeys().isEmpty() || s(false), O = d(O, g, E)), e.merge({
    blockMap: O,
    selectionBefore: t,
    selectionAfter: t.merge({
      anchorKey: h,
      anchorOffset: 0,
      focusKey: h,
      focusOffset: 0,
      isBackward: false
    })
  })
}