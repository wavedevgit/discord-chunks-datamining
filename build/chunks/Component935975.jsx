/** Chunk was on 71447 **/
/** chunk id: 935975, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk994322 = require("./994322.js"),
  Chunk584111 = require("./584111.js");

function u(e) {
  let {
    onClick: t,
    keybind: n,
    className: r,
    IconComponent: u
  } = e, c = (0, s.F)();
  return (0, i.jsxs)("div", {
    className: l()(o.UD, r),
    children: [(0, i.jsx)(a.DUT, {
      className: o.x6,
      onClick: t,
      "aria-hidden": true,
      children: (0, i.jsx)(u, {
        size: "md",
        color: "currentColor",
        "aria-hidden": true
      })
    }), null != n && c ? (0, i.jsx)(a.Text, {
      className: o.P,
      "aria-hidden": true,
      variant: "text-xxs/bold",
      color: "interactive-text-default",
      children: n
    }) : null]
  })
}