/** Chunk was on 1272 **/
/** chunk id: 833484, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js"),
  Chunk793030 = require("./793030.js"),
  Chunk550385 = require("./550385.js"),
  Chunk665149 = require("./665149.jsx"),
  Chunk388032 = require("./388032.jsx");

function s(e) {
  let {
    className: t
  } = e, {
    activePanel: n
  } = (0, l.oq)(), s = n === l.wh.APPLICATION_TEST_MODE_DEBUG;
  return (0, r.jsx)(a.JO, {
    className: t,
    onClick: () => {
      s ? (0, l.Ll)() : (0, l.XO)(l.wh.APPLICATION_TEST_MODE_DEBUG)
    },
    icon: i.R0,
    "aria-label": o.intl.string(o.t["9Isknj"]),
    tooltip: s ? null : o.intl.string(o.t["9Isknj"]),
    selected: s
  })
}