/** Chunk was on 96861 **/
/** chunk id: 158040, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  T: () => s
});
var Chunk54381 = require("./54381.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk675853 = require("./675853.js");

function s(e) {
  let {
    rewardName: t
  } = e;
  return (0, r.jsx)(a.Text, {
    variant: "text-xs/medium",
    className: o.rewardPill,
    children: i.intl.format(i.t.loyTil, {
      rewardName: (e, n) => (0, r.jsx)(a.Text, {
        variant: "text-xs/medium",
        className: o.rewardName,
        children: t
      }, n),
      verticalDivider: (e, t) => (0, r.jsx)("div", {
        className: o.divider
      }, t)
    })
  })
}