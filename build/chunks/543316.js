/** Chunk was on web.js **/
/** chunk id: 543316, original params: e,t,n (module,exports,re quire) **/
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
var Chunk126182 = require("./126182.js"),
  Chunk50153 = require("./50153.js"),
  Chunk117242 = require("./117242.js"),
  Chunk309987 = require("./309987.js"),
  Chunk720218 = require("./720218.js"),
  Chunk384404 = require("./384404.js"),
  Chunk703579 = require("./703579.js"),
  Chunk40375 = require("./40375.js"),
  Chunk65183 = require("./65183.js"),
  Chunk423331 = require("./423331.js"),
  m = Chunk40375("draft_tree_data_support"),
  h = m ? Chunk309987 : Chunk117242,
  g = Chunk65183.List,
  E = Chunk65183.Repeat;
module.exports = {
  insertAtomicBlock: function(e, t, n) {
    var i = e.getCurrentContent(),
      s = e.getSelection(),
      l = c.removeRange(i, s, "backward"),
      f = l.getSelectionAfter(),
      p = c.splitBlock(l, f),
      _ = p.getSelectionAfter(),
      b = c.setBlockType(p, _, "atomic"),
      y = o.create({
        entity: t
      }),
      O = {
        key: d(),
        type: "atomic",
        text: n,
        characterList: g(E(y, n.length))
      },
      v = {
        key: d(),
        type: "unstyled"
      };
    m && (O = r({}, O, {
      nextSibling: v.key
    }), v = r({}, v, {
      prevSibling: O.key
    }));
    var S = [new h(O), new h(v)],
      I = a.createFromArray(S),
      T = c.replaceWithFragment(b, _, I),
      A = T.merge({
        selectionBefore: s,
        selectionAfter: T.getSelectionAfter().set("hasFocus", true)
      });
    return u.push(e, A, "insert-fragment")
  },
  moveAtomicBlock: function(e, t, n, r) {
    var i, a = e.getCurrentContent(),
      o = e.getSelection();
    if ("before" === r || "after" === r) {
      var s = a.getBlockForKey("before" === r ? n.getStartKey() : n.getEndKey());
      i = _(a, t, s, r)
    } else {
      var l = c.removeRange(a, n, "backward"),
        d = l.getSelectionAfter(),
        f = l.getBlockForKey(d.getFocusKey());
      if (0 === d.getStartOffset()) i = _(l, t, f, "before");
      else if (d.getEndOffset() === f.getLength()) i = _(l, t, f, "after");
      else {
        var p = c.splitBlock(l, d),
          m = p.getSelectionAfter(),
          h = p.getBlockForKey(m.getFocusKey());
        i = _(p, t, h, "before")
      }
    }
    var g = i.merge({
      selectionBefore: o,
      selectionAfter: i.getSelectionAfter().set("hasFocus", true)
    });
    return u.push(e, g, "move-block")
  }
}