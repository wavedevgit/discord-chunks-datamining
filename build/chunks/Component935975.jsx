/** Chunk was on 71447 **/
/** chunk id: 935975, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk994322 = require("./994322.js"),
  Chunk584111 = require("./584111.js");

function c(e) {
  let {
    onClick: t,
    keybind: n,
    className: r,
    IconComponent: c
  } = e, u = (0, o.F)();
  return (0, i.jsxs)("div", {
    className: l()(s.UD, r),
    children: [(0, i.jsx)(a.DUT, {
      className: s.x6,
      onClick: t,
      "aria-hidden": true,
      children: (0, i.jsx)(c, {
        size: "md",
        color: "currentColor",
        "aria-hidden": true
      })
    }), null != n && u ? (0, i.jsx)(a.Text, {
      className: s.P,
      "aria-hidden": true,
      variant: "text-xxs/bold",
      color: "interactive-text-default",
      children: n
    }) : null]
  })
}