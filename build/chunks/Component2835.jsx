/** Chunk was on 80448 **/
/** chunk id: 2835, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk54381 = require("./54381.js"),
  Chunk481060 = require("./481060.js");

function l(t) {
  let {
    activeSlide: e,
    totalSlides: i,
    className: l
  } = t;
  return (0, r.jsx)("div", {
    className: l,
    children: (0, r.jsxs)(n.Text, {
      variant: "display-sm",
      color: "text-primary",
      children: [Number.parseInt(e, 10) + 1, "/", i]
    })
  })
}