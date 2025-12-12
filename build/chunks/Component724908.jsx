/** Chunk was on 97158 **/
/** chunk id: 724908, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk54381 = require("./54381.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk724825 = require("./724825.js");

function s(e) {
  let {
    rewardName: t
  } = e;
  return (0, r.jsx)(i.Text, {
    variant: "text-xs/medium",
    className: o.rewardPill,
    children: a.intl.format(a.t.loyTil, {
      rewardName: (e, n) => (0, r.jsx)(i.Text, {
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