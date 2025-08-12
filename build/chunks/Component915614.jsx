/** Chunk was on 9646 **/
/** chunk id: 915614, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk809357 = require("./809357.js"),
  Chunk788132 = require("./788132.js");

function c(e) {
  let {
    onClick: t,
    keybind: n,
    className: r,
    IconComponent: c
  } = e, u = (0, a.o)();
  return (0, i.jsxs)("div", {
    className: o()(s.buttonContainer, r),
    children: [(0, i.jsx)(l.P3F, {
      className: s.button,
      onClick: t,
      "aria-hidden": true,
      children: (0, i.jsx)(c, {
        size: "md",
        color: "currentColor",
        "aria-hidden": true
      })
    }), null != n && u ? (0, i.jsx)(l.Text, {
      className: s.keybind,
      "aria-hidden": true,
      variant: "text-xxs/bold",
      color: "interactive-normal",
      children: n
    }) : null]
  })
}