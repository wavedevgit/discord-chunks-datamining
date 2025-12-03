/** Chunk was on 80448 **/
/** chunk id: 2835, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => r
});
var Chunk54381 = require("./54381.js"),
  Chunk481060 = require("./481060.js");

function r(e) {
  let {
    activeSlide: t,
    totalSlides: n,
    className: r
  } = e;
  return (0, i.jsx)("div", {
    className: r,
    children: (0, i.jsxs)(s.Text, {
      variant: "display-sm",
      color: "text-strong",
      children: [Number.parseInt(t, 10) + 1, "/", n]
    })
  })
}