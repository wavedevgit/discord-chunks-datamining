/** Chunk was on 54844 **/
/** chunk id: 76264, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk432877 = require("./432877.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk520310 = require("./520310.js"),
  Chunk452847 = require("./452847.js");
let m = e => {
    let {
      child: t,
      onClick: n,
      nodeMap: i
    } = e, [m, p] = t, g = (0, a.e7)([o.ZP], () => o.ZP.get("iar_show_report_sub_type_labels")), _ = i[p], h = null == _ ? true : _.report_type;
    return (0, r.jsxs)(s.P3F, {
      className: l()(u.childButton, c.listElement),
      onClick: () => n(t),
      children: [(0, r.jsxs)("div", {
        className: u.childContent,
        children: [(0, r.jsx)(s.Text, {
          className: u.childText,
          variant: "text-md/semibold",
          children: m
        }), g && null != h && (0, r.jsx)(s.Text, {
          className: u.debugText,
          variant: "text-xs/normal",
          color: "text-muted",
          children: h
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
      nodeMap: i
    } = e;
    if (null == t || 0 === t.length) return null;
    let l = t.map(e => {
      let [t, l] = e;
      return (0, r.jsx)(m, {
        child: e,
        onClick: n,
        nodeMap: i
      }, "".concat(t, "+").concat(l))
    });
    return (0, r.jsx)("div", {
      className: c.listElementWrapper,
      children: l
    })
  }