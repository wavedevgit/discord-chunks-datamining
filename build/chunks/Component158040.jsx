/** Chunk was on 76418 **/
/** chunk id: 158040, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  T: () => o
});
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk675853 = require("./675853.js");

function o(e) {
  let {
    rewardName: n
  } = e;
  return (0, a.jsx)(r.Text, {
    variant: "text-xs/medium",
    className: s.rewardPill,
    children: i.intl.format(i.t.loyTio, {
      rewardName: n,
      verticalDivider: () => (0, a.jsx)("div", {
        className: s.divider
      })
    })
  })
}