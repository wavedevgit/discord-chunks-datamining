/** Chunk was on 80448 **/
/** chunk id: 363157, original params: i,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js");

function a(i) {
  let {
    currentStep: t,
    totalSteps: r,
    className: a
  } = i;
  return (0, e.jsx)("div", {
    className: a,
    children: (0, e.jsxs)(n.Text, {
      variant: "display-sm",
      color: "text-primary",
      children: [t + 1, "/", r]
    })
  })
}