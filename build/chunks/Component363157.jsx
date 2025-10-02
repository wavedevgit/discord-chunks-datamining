/** Chunk was on 80448 **/
/** chunk id: 363157, original params: t,i,r (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js");

function a(t) {
  let {
    currentStep: i,
    totalSteps: r,
    className: a
  } = t;
  return (0, e.jsx)("div", {
    className: a,
    children: (0, e.jsxs)(n.Text, {
      variant: "display-sm",
      color: "text-primary",
      children: [i + 1, "/", r]
    })
  })
}