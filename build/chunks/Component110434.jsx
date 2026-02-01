/** Chunk was on 21738 **/
/** chunk id: 110434, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
}), require("./65821.js");
var r, Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk966327 = require("./966327.jsx"),
  Chunk531685 = require("./531685.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk208744 = require("./208744.js"),
  h = ((r = h || {})[r.STAFF_NOTES = 1] = "STAFF_NOTES", r);
let g = Chunk311907.Ay.connectStores([Chunk531685.A], () => ({
    animate: u.A.isFocused()
  }))(e => {
    let {
      user: t,
      className: n,
      animate: r
    } = e;
    return (0, i.jsxs)("div", {
      className: a()(p.g7, n),
      children: [(0, i.jsx)(c.A, {
        size: o._3J.SIZE_32,
        user: t,
        animate: r
      }), (0, i.jsxs)("div", {
        className: p.TK,
        children: [(0, i.jsx)("div", {
          className: p.Pf,
          children: d.intl.string(d.t.vmzMZC)
        }), (0, i.jsx)("div", {
          className: p.Xh,
          children: t.username
        })]
      })]
    })
  }),
  m = e => {
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
        children: [(0, i.jsx)(g, {
          user: e,
          className: p.wx
        }), (0, i.jsx)("div", {
          className: p.Q2,
          children: r
        })]
      })
    }
    throw Error("Unknown type")
  };
m.Types = h;
let f = m