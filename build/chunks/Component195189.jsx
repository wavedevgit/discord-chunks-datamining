/** Chunk was on 6049 **/
/** chunk id: 195189, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk449226 = require("./449226.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk824804 = require("./824804.js");

function c(e) {
  let {
    title: t,
    details: n
  } = e;
  return (0, r.jsxs)("div", {
    className: o.simpleItemWrapper,
    children: [(0, r.jsxs)("div", {
      className: o.itemContent,
      children: [(0, r.jsx)(i.X6q, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: t
      }), "string" == typeof n ? (0, r.jsx)(i.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: n
      }) : n]
    }), (0, r.jsx)(i.ua7, {
      tooltipContentClassName: o.tooltip,
      text: s.intl.string(s.t.NQ4nCg),
      children: e => (0, r.jsx)(l.Z, {
        checked: true,
        disabled: true,
        onChange: a.dG,
        className: o.bringToFront,
        tooltipProps: e
      })
    })]
  })
}