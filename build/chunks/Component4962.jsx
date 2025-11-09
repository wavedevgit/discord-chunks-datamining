/** Chunk was on 1272 **/
/** chunk id: 4962, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./415506.js");
var r, Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk700582 = require("./700582.jsx"),
  Chunk451478 = require("./451478.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk753778 = require("./753778.js"),
  f = ((r = f || {})[r.STAFF_NOTES = 1] = "STAFF_NOTES", r);
let h = Chunk442837.ZP.connectStores([Chunk451478.Z], () => ({
    animate: Chunk451478.Z.isFocused()
  }))(e => {
    let {
      user: t,
      className: n,
      animate: r
    } = e;
    return (0, i.jsxs)("div", {
      className: a()(p.staffReviewHeader, n),
      children: [(0, i.jsx)(c.Z, {
        size: o.EFr.SIZE_32,
        user: t,
        animate: r
      }), (0, i.jsxs)("div", {
        className: p.headerText,
        children: [(0, i.jsx)("div", {
          className: p.label,
          children: d.intl.string(d.t.vmzMZC)
        }), (0, i.jsx)("div", {
          className: p.username,
          children: t.username
        })]
      })]
    })
  }),
  g = e => {
    let {
      data: t,
      className: n
    } = e;
    if (1 === t.type) {
      if (null == t.staffNotes) return null;
      let {
        user: e,
        content: r
      } = t.staffNotes;
      return null == e ? null : (0, i.jsxs)("div", {
        className: n,
        children: [(0, i.jsx)(h, {
          user: e,
          className: p.header
        }), (0, i.jsx)("div", {
          className: p.notes,
          children: r
        })]
      })
    }
    throw Error("Unknown type")
  };
g.Types = f;
let m = g