/** Chunk was on 80448 **/
/** chunk id: 2835, original params: i,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js");

function a(i) {
  let {
    activeSlide: t,
    totalSlides: r,
    className: a
  } = i;
  return (0, n.jsx)("div", {
    className: a,
    children: (0, n.jsxs)(e.Text, {
      variant: "display-sm",
      color: "text-primary",
      children: [Number.parseInt(t, 10) + 1, "/", r]
    })
  })
}