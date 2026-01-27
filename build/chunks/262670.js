/** Chunk was on 38939 **/
/** chunk id: 262670, original params: t,e,r (module,exports,require) **/
"use strict";

function n(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = null != arguments[e] ? arguments[e] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
      return Object.getOwnPropertyDescriptor(r, t).enumerable
    }))), n.forEach(function(e) {
      var n, i, o;
      n = t, i = e, o = r[e], i in n ? Object.defineProperty(n, i, {
        value: o,
        enumerable: true,
        configurable: true,
        writable: true
      }) : n[i] = o
    })
  }
  return t
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
  d = Chunk661551("draft_tree_data_support"),
  g = d ? Chunk617179 : Chunk68055,
  y = Chunk116740.List,
  v = Chunk116740.Repeat;
module.exports = {
  insertAtomicBlock: function(t, e, r) {
    var a = t.getCurrentContent(),
      s = t.getSelection(),
      f = u.removeRange(a, s, "backward"),
      p = f.getSelectionAfter(),
      h = u.splitBlock(f, p),
      m = h.getSelectionAfter(),
      _ = u.setBlockType(h, m, "atomic"),
      b = o.create({
        entity: e
      }),
      S = {
        key: l(),
        type: "atomic",
        text: r,
        characterList: y(v(b, r.length))
      },
      w = {
        key: l(),
        type: "unstyled"
      };
    d && (S = n({}, S, {
      nextSibling: w.key
    }), w = n({}, w, {
      prevSibling: S.key
    }));
    var k = [new g(S), new g(w)],
      x = i.createFromArray(k),
      C = u.replaceWithFragment(_, m, x),
      E = C.merge({
        selectionBefore: s,
        selectionAfter: C.getSelectionAfter().set("hasFocus", true)
      });
    return c.push(t, E, "insert-fragment")
  },
  moveAtomicBlock: function(t, e, r, n) {
    var i, o = t.getCurrentContent(),
      a = t.getSelection();
    if ("before" === n || "after" === n) {
      var s = o.getBlockForKey("before" === n ? r.getStartKey() : r.getEndKey());
      i = h(o, e, s, n)
    } else {
      var l = u.removeRange(o, r, "backward"),
        f = l.getSelectionAfter(),
        p = l.getBlockForKey(f.getFocusKey());
      if (0 === f.getStartOffset()) i = h(l, e, p, "before");
      else if (f.getEndOffset() === p.getLength()) i = h(l, e, p, "after");
      else {
        var d = u.splitBlock(l, f),
          g = d.getSelectionAfter(),
          y = d.getBlockForKey(g.getFocusKey());
        i = h(d, e, y, "before")
      }
    }
    var v = i.merge({
      selectionBefore: a,
      selectionAfter: i.getSelectionAfter().set("hasFocus", true)
    });
    return c.push(t, v, "move-block")
  }
}