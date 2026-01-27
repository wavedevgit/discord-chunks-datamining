/** Chunk was on web.js **/
/** chunk id: 552046, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
}), require("./896048.js");
var Chunk719442 = require("./719442.js"),
  Chunk694403 = require("./694403.js"),
  Chunk323350 = require("./323350.js"),
  Chunk35277 = require("./35277.js"),
  Chunk711371 = require("./711371.js");

function l(e) {
  return e.setFragmentData = t => {
    if (null != e.selection && !s.Kh.equals(e.selection.anchor, e.selection.focus)) {
      let n = (0, a.WO)(s.VW.richValue(e), {
        mode: "plain",
        range: e.selection,
        preventEmojiSurrogates: true
      });
      t.setData("text/plain", n)
    }
  }, e.insertData = t => {
    e.insertTextData(t)
  }, e.insertFragmentData = e => false, e.insertTextData = t => {
    let n = t.getData("text/plain");
    if (0 === n.length) returnfalse;
    if (null != e.selection && s.ZF.isExpanded(e.selection)) {
      let t = r.KE.string(e, e.selection),
        a = (0, i.W1)(n),
        l = (0, i.W1)(t);
      if (null != a && null == l) {
        let [t, n] = s.ZF.edges(e.selection);
        return s.VW.withoutNormalizing(e, () => {
          o.b.select(e, t), e.insertText("["), o.b.select(e, n), 0 === s.PW.compare(t.path, n.path) && o.b.move(e, {
            distance: 1
          }), e.insertText("](".concat(a.target, ")"))
        }), true
      }
      if (null != a && null != l) return o.b.delete(e, {
        at: e.selection
      }), e.insertText(a.target), true;
      o.b.delete(e, {
        at: e.selection
      })
    }
    return e.insertText(n), true
  }, e
}