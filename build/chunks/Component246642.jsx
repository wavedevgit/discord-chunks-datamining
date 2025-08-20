/** Chunk was on 46653 **/
/** chunk id: 246642, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk44315 = require("./44315.js"),
  Chunk641033 = require("./641033.js"),
  Chunk989830 = require("./989830.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk617296 = require("./617296.js");

function c(t) {
  let {
    channelId: e
  } = t, i = (0, l.Z)(e);
  if (!(null != i && (i.value > 0 || (null == i ? true : i.multiplier) > 1))) return null;
  let {
    multiplier: c
  } = i, {
    color: u
  } = (0, o.yz)(c);
  return (0, n.jsxs)("div", {
    className: d.container,
    children: [(0, n.jsx)(r.Text, {
      variant: "text-xs/normal",
      children: a.intl.string(a.t.Jr2519)
    }), (0, n.jsx)(r.Exd, {
      foregroundColor: (0, s.Lq)(u),
      className: d.progress,
      size: r.Exd.Sizes.LARGE,
      percent: 100 * (0, o.nc)(i),
      animate: true
    })]
  })
}