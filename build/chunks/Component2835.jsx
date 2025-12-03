/** Chunk was on 80448 **/
/** chunk id: 2835, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk54381 = require("./54381.js"),
  Chunk481060 = require("./481060.js");

function l(e) {
  let {
    activeSlide: t,
    totalSlides: n,
    className: l
  } = e;
  return (0, i.jsx)("div", {
    className: l,
    children: (0, i.jsxs)(r.Text, {
      variant: "display-sm",
      color: "text-primary",
      children: [Number.parseInt(t, 10) + 1, "/", n]
    })
  })
}