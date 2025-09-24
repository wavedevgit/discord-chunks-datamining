/** Chunk was on 41023 **/
/** chunk id: 158040, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  T: () => s
});
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk675853 = require("./675853.js");

function s(e) {
  let {
    rewardName: n
  } = e;
  return (0, a.jsx)(r.Text, {
    variant: "text-xs/medium",
    className: l.rewardPill,
    children: i.intl.format(i.t.loyTio, {
      rewardName: n,
      verticalDivider: () => (0, a.jsx)("div", {
        className: l.divider
      })
    })
  })
}