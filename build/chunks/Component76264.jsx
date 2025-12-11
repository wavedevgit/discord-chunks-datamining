/** Chunk was on 54844 **/
/** chunk id: 76264, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk432877 = require("./432877.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk467171 = require("./467171.js"),
  Chunk110024 = require("./110024.js");
let m = e => {
    let {
      child: t,
      onClick: n,
      nodeMap: l
    } = e, [m, p] = t, b = (0, a.e7)([o.ZP], () => o.ZP.get("iar_show_report_sub_type_labels")), g = l[p], f = null == g ? true : g.report_type;
    return (0, r.jsxs)(s.P3F, {
      className: i()(u.childButton, c.listElement),
      onClick: () => n(t),
      children: [(0, r.jsxs)("div", {
        className: u.childContent,
        children: [(0, r.jsx)(s.Text, {
          className: u.childText,
          variant: "text-md/semibold",
          children: m
        }), b && null != f && (0, r.jsx)(s.Text, {
          className: u.debugText,
          variant: "text-xs/normal",
          color: "text-muted",
          children: f
        })]
      }), (0, r.jsx)(d.Z, {
        className: u.childIcon,
        direction: d.Z.Directions.RIGHT
      })]
    })
  },
  p = e => {
    let {
      node: {
        children: t
      },
      onSelectChild: n,
      nodeMap: l
    } = e;
    if (null == t || 0 === t.length) return null;
    let i = t.map(e => {
      let [t, i] = e;
      return (0, r.jsx)(m, {
        child: e,
        onClick: n,
        nodeMap: l
      }, "".concat(t, "+").concat(i))
    });
    return (0, r.jsx)("div", {
      className: c.listElementWrapper,
      children: i
    })
  }