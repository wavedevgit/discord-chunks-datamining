/** Chunk was on 80448 **/
/** chunk id: 2835, original params: t,r,e (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js");

function l(t) {
  let {
    activeSlide: r,
    totalSlides: e,
    className: l
  } = t;
  return (0, i.jsx)("div", {
    className: l,
    children: (0, i.jsxs)(n.Text, {
      variant: "display-sm",
      color: "text-primary",
      children: [Number.parseInt(r, 10) + 1, "/", e]
    })
  })
}