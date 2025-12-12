/** Chunk was on web.js **/
/** chunk id: 814011, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk327432 = require("./327432.js"),
  Chunk772096 = require("./772096.js"),
  Chunk925994 = require("./925994.js"),
  Chunk436660 = require("./436660.js"),
  Chunk887490 = require("./887490.js");

function l(e) {
  return e.setFragmentData = t => {
    if (null != e.selection && !s.Jz.equals(e.selection.anchor, e.selection.focus)) {
      let n = (0, a.sk)(s.bN.richValue(e), {
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
    if (null != e.selection && s.M8.isExpanded(e.selection)) {
      let t = r.ML.string(e, e.selection),
        a = (0, i.yw)(n),
        l = (0, i.yw)(t);
      if (null != a && null == l) {
        let [t, n] = s.M8.edges(e.selection);
        return s.bN.withoutNormalizing(e, () => {
          o.Q.select(e, t), e.insertText("["), o.Q.select(e, n), 0 === s.C0.compare(t.path, n.path) && o.Q.move(e, {
            distance: 1
          }), e.insertText("](".concat(a.target, ")"))
        }), true
      }
      if (null != a && null != l) return o.Q.delete(e, {
        at: e.selection
      }), e.insertText(a.target), true;
      o.Q.delete(e, {
        at: e.selection
      })
    }
    return e.insertText(n), true
  }, e
}