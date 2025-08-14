/** Chunk was on web.js **/
/** chunk id: 246642, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk44315 = require("./44315.js"),
  Chunk641033 = require("./641033.js"),
  Chunk989830 = require("./989830.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk617296 = require("./617296.js");

function u(e) {
  let {
    channelId: t
  } = e, n = (0, s.Z)(t);
  if (!(null != n && (n.value > 0 || (null == n ? true : n.multiplier) > 1))) return null;
  let {
    multiplier: u
  } = n, {
    color: d
  } = (0, a.yz)(u);
  return (0, r.jsxs)("div", {
    className: c.container,
    children: [(0, r.jsx)(i.Text, {
      variant: "text-xs/normal",
      children: l.intl.string(l.t.Jr2519)
    }), (0, r.jsx)(i.Exd, {
      foregroundColor: (0, o.Lq)(d),
      className: c.progress,
      size: i.Exd.Sizes.LARGE,
      percent: 100 * (0, a.nc)(n),
      animate: true
    })]
  })
}