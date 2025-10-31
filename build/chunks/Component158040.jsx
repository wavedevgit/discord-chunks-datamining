/** Chunk was on 76418 **/
/** chunk id: 158040, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  T: () => o
});
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk675853 = require("./675853.js");

function o(e) {
  let {
    rewardName: t
  } = e;
  return (0, r.jsx)(a.Text, {
    variant: "text-xs/medium",
    className: s.rewardPill,
    children: i.intl.format(i.t.loyTil, {
      rewardName: (e, n) => (0, r.jsx)(a.Text, {
        variant: "text-xs/medium",
        className: s.rewardName,
        children: t
      }, n),
      verticalDivider: (e, t) => (0, r.jsx)("div", {
        className: s.divider
      }, t)
    })
  })
}