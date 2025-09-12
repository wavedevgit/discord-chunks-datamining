/** Chunk was on 41023 **/
/** chunk id: 158040, original params: e,n,a (module,exports,require) **/
require.d(exports, {
  T: () => l
});
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk675853 = require("./675853.js");

function l(e) {
  let {
    rewardName: n
  } = e;
  return (0, t.jsx)(i.Text, {
    variant: "text-xs/medium",
    className: s.rewardPill,
    children: r.intl.format(r.t.loyTio, {
      rewardName: n,
      verticalDivider: () => (0, t.jsx)("div", {
        className: s.divider
      })
    })
  })
}