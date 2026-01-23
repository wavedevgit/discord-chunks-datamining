/** Chunk was on web.js **/
/** chunk id: 262670, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      i(e, t, n[t])
    })
  }
  return e
}

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var Chunk414501 = require("./414501.js"),
  Chunk387739 = require("./387739.js"),
  Chunk68055 = require("./68055.js"),
  Chunk617179 = require("./617179.js"),
  Chunk954055 = require("./954055.js"),
  Chunk869639 = require("./869639.js"),
  Chunk279998 = require("./279998.js"),
  Chunk661551 = require("./661551.js"),
  Chunk116740 = require("./116740.js"),
  Chunk311610 = require("./311610.js"),
  h = Chunk661551("draft_tree_data_support"),
  m = h ? Chunk617179 : Chunk68055,
  g = Chunk116740.List,
  E = Chunk116740.Repeat;
module.exports = {
  insertAtomicBlock: function(e, t, n) {
    var i = e.getCurrentContent(),
      o = e.getSelection(),
      l = c.removeRange(i, o, "backward"),
      f = l.getSelectionAfter(),
      p = c.splitBlock(l, f),
      _ = p.getSelectionAfter(),
      y = c.setBlockType(p, _, "atomic"),
      b = s.create({
        entity: t
      }),
      O = {
        key: d(),
        type: "atomic",
        text: n,
        characterList: g(E(b, n.length))
      },
      v = {
        key: d(),
        type: "unstyled"
      };
    h && (O = r({}, O, {
      nextSibling: v.key
    }), v = r({}, v, {
      prevSibling: O.key
    }));
    var A = [new m(O), new m(v)],
      I = a.createFromArray(A),
      S = c.replaceWithFragment(y, _, I),
      T = S.merge({
        selectionBefore: o,
        selectionAfter: S.getSelectionAfter().set("hasFocus", true)
      });
    return u.push(e, T, "insert-fragment")
  },
  moveAtomicBlock: function(e, t, n, r) {
    var i, a = e.getCurrentContent(),
      s = e.getSelection();
    if ("before" === r || "after" === r) {
      var o = a.getBlockForKey("before" === r ? n.getStartKey() : n.getEndKey());
      i = _(a, t, o, r)
    } else {
      var l = c.removeRange(a, n, "backward"),
        d = l.getSelectionAfter(),
        f = l.getBlockForKey(d.getFocusKey());
      if (0 === d.getStartOffset()) i = _(l, t, f, "before");
      else if (d.getEndOffset() === f.getLength()) i = _(l, t, f, "after");
      else {
        var p = c.splitBlock(l, d),
          h = p.getSelectionAfter(),
          m = p.getBlockForKey(h.getFocusKey());
        i = _(p, t, m, "before")
      }
    }
    var g = i.merge({
      selectionBefore: s,
      selectionAfter: i.getSelectionAfter().set("hasFocus", true)
    });
    return u.push(e, g, "move-block")
  }
}