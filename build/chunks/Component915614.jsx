/** Chunk was on 50751 **/
/** chunk id: 915614, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk809357 = require("./809357.js"),
  Chunk795482 = require("./795482.js");

function c(e) {
  let {
    onClick: t,
    keybind: n,
    className: r,
    IconComponent: c
  } = e, u = (0, a.o)();
  return (0, i.jsxs)("div", {
    className: l()(s.buttonContainer, r),
    children: [(0, i.jsx)(o.P3F, {
      className: s.button,
      onClick: t,
      "aria-hidden": true,
      children: (0, i.jsx)(c, {
        size: "md",
        color: "currentColor",
        "aria-hidden": true
      })
    }), null != n && u ? (0, i.jsx)(o.Text, {
      className: s.keybind,
      "aria-hidden": true,
      variant: "text-xxs/bold",
      color: "interactive-text-default",
      children: n
    }) : null]
  })
}