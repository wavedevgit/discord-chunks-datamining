/** Chunk was on 29679 **/
/** chunk id: 217597, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk704210 = require("./704210.js");

function s(e) {
  let {
    label: t,
    sublabel: n,
    value: s,
    additionalContent: o,
    tooltip: c
  } = e;
  return (0, r.jsxs)("div", {
    className: a.metricCard,
    "aria-label": t,
    children: [(0, r.jsxs)("div", {
      className: a.metricCardLabelContainer,
      children: [(0, r.jsx)(l.Text, {
        className: a.metricCardLabel,
        variant: "text-xs/medium",
        color: "interactive-normal",
        "aria-hidden": true,
        children: t
      }), null != c && (0, r.jsx)(i.u, {
        text: c,
        children: (0, r.jsx)(l.d3s, {
          size: "xs",
          color: "currentColor",
          className: a.__invalid_labelTooltipIcon
        })
      }), null != n ? (0, r.jsx)(l.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: n
      }) : null]
    }), (0, r.jsx)(l.Text, {
      tag: "span",
      variant: "heading-xl/medium",
      color: "header-primary",
      children: s
    }), o]
  })
}