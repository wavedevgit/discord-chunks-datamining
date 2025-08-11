/** Chunk was on 75708 **/
/** chunk id: 893996, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk921801 = require("./921801.js"),
  Chunk733750 = require("./733750.js");

function l(e) {
  let {
    children: t,
    title: n,
    description: l,
    webSetting: o
  } = e;
  return (0, i.jsx)(s.F, {
    setting: o,
    children: (0, i.jsxs)("div", {
      className: a.category,
      children: [(0, i.jsxs)("div", {
        className: a.categoryHeader,
        children: [(0, i.jsx)(r.X6q, {
          variant: "heading-lg/semibold",
          color: "header-primary",
          children: n
        }), null != l ? (0, i.jsx)(r.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: l
        }) : null]
      }), (0, i.jsx)("div", {
        className: a.categoryContent,
        children: t
      }), (0, i.jsx)(r.$i$, {
        className: a.categoryDivider
      })]
    })
  })
}