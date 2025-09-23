/** Chunk was on 95546 **/
/** chunk id: 246642, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk44315 = require("./44315.js"),
  Chunk641033 = require("./641033.js"),
  Chunk989830 = require("./989830.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk361222 = require("./361222.js");

function u(e) {
  let {
    channelId: t
  } = e, n = (0, s.Z)(t);
  if (!(null != n && (n.value > 0 || (null == n ? true : n.multiplier) > 1))) return null;
  let {
    multiplier: u
  } = n, {
    color: d
  } = (0, l.yz)(u);
  return (0, r.jsxs)("div", {
    className: c.container,
    children: [(0, r.jsx)(i.Text, {
      variant: "text-xs/normal",
      children: a.intl.string(a.t.Jr2519)
    }), (0, r.jsx)(i.Exd, {
      foregroundColor: (0, o.Lq)(d),
      className: c.progress,
      size: i.Exd.Sizes.LARGE,
      percent: 100 * (0, l.nc)(n),
      animate: true
    })]
  })
}