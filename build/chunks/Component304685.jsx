/** Chunk was on 37220 **/
/** chunk id: 304685, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk156077 = require("./156077.js"),
  Chunk240452 = require("./240452.js"),
  Chunk406432 = require("./406432.js");

function u(e, t) {
  var n;
  let u = null != (n = null == e ? true : e.url) ? n : "",
    d = (0, l.e7)([a.ZP], () => a.ZP.isVideoStatsEnabled(u)),
    f = i.useCallback(() => {
      "" !== u && (0, a.jL)(u)
    }, [u]);
  if (null == e || !(0, c.X2)(e.contentType) || (null == t ? true : t.shouldHideMediaOptions) === true) return null;
  let {
    enableVideoStatsForNerds: g
  } = (0, s.w)({
    location: "useVideoStatsMenuItem"
  });
  return g ? (0, r.jsx)(o.S89, {
    id: "video-stats-for-nerds",
    label: "Stats for Nerds",
    checked: d,
    action: f
  }) : null
}