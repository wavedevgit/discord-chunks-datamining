/** Chunk was on 91584 **/
/** chunk id: 75660, original params: t,e,r (module,exports,require) **/
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
var Chunk179361 = require("./179361.js"),
  Chunk76466 = require("./76466.js"),
  Chunk988231 = require("./988231.js"),
  Chunk470427 = require("./470427.js"),
  Chunk309943 = require("./309943.js"),
  Chunk102736 = require("./102736.js"),
  Chunk656367 = require("./656367.js"),
  Chunk740336 = require("./740336.js"),
  Chunk65183 = require("./65183.js"),
  Chunk885105 = require("./885105.js"),
  d = Chunk740336("draft_tree_data_support"),
  g = d ? Chunk470427 : Chunk988231,
  y = Chunk65183.List,
  v = Chunk65183.Repeat;
module.exports = {
  insertAtomicBlock: function(t, e, r) {
    var a = t.getCurrentContent(),
      u = t.getSelection(),
      f = s.removeRange(a, u, "backward"),
      p = f.getSelectionAfter(),
      h = s.splitBlock(f, p),
      m = h.getSelectionAfter(),
      _ = s.setBlockType(h, m, "atomic"),
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
    var x = [new g(S), new g(w)],
      k = i.createFromArray(x),
      C = s.replaceWithFragment(_, m, k),
      E = C.merge({
        selectionBefore: u,
        selectionAfter: C.getSelectionAfter().set("hasFocus", true)
      });
    return c.push(t, E, "insert-fragment")
  },
  moveAtomicBlock: function(t, e, r, n) {
    var i, o = t.getCurrentContent(),
      a = t.getSelection();
    if ("before" === n || "after" === n) {
      var u = o.getBlockForKey("before" === n ? r.getStartKey() : r.getEndKey());
      i = h(o, e, u, n)
    } else {
      var l = s.removeRange(o, r, "backward"),
        f = l.getSelectionAfter(),
        p = l.getBlockForKey(f.getFocusKey());
      if (0 === f.getStartOffset()) i = h(l, e, p, "before");
      else if (f.getEndOffset() === p.getLength()) i = h(l, e, p, "after");
      else {
        var d = s.splitBlock(l, f),
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