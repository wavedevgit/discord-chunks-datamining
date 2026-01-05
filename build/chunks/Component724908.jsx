/** Chunk was on 97158 **/
/** chunk id: 724908, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk54381 = require("./54381.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk571069 = require("./571069.js");

function o(e) {
  let {
    rewardName: t
  } = e;
  return (0, a.jsx)(r.Text, {
    variant: "text-xs/medium",
    className: s.rewardPill,
    children: i.intl.format(i.t.loyTil, {
      rewardName: (e, n) => (0, a.jsx)(r.Text, {
        variant: "text-xs/medium",
        className: s.rewardName,
        children: t
      }, n),
      verticalDivider: (e, t) => (0, a.jsx)("div", {
        className: s.divider
      }, t)
    })
  })
}