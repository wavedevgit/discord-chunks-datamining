/** Chunk was on 58652 **/
/** chunk id: 803957, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk865116 = require("./865116.js"),
  Chunk147925 = require("./147925.jsx"),
  Chunk212335 = require("./212335.js"),
  Chunk357905 = require("./357905.js");
let m = e => {
    let {
      child: t,
      onClick: n,
      nodeMap: r
    } = e, [m, b] = t, p = (0, i.bG)([o.Ay], () => o.Ay.get("iar_show_report_sub_type_labels")), x = r[b], g = null == x ? true : x.report_type;
    return (0, l.jsxs)(s.DUT, {
      className: a()(u.Zm, d.lD),
      onClick: () => n(t),
      children: [(0, l.jsxs)("div", {
        className: u.OH,
        children: [(0, l.jsx)(s.Text, {
          className: u.ix,
          variant: "text-md/semibold",
          children: m
        }), p && null != g && (0, l.jsx)(s.Text, {
          className: u.Z$,
          variant: "text-xs/normal",
          color: "text-muted",
          children: g
        })]
      }), (0, l.jsx)(c.A, {
        className: u._2,
        direction: c.A.Directions.RIGHT
      })]
    })
  },
  b = e => {
    let {
      node: {
        children: t
      },
      onSelectChild: n,
      nodeMap: r
    } = e;
    if (null == t || 0 === t.length) return null;
    let a = t.map(e => {
      let [t, a] = e;
      return (0, l.jsx)(m, {
        child: e,
        onClick: n,
        nodeMap: r
      }, "".concat(t, "+").concat(a))
    });
    return (0, l.jsx)("div", {
      className: d.E8,
      children: a
    })
  }