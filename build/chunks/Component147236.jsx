/** Chunk was on 470 **/
/** chunk id: 147236, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk796762 = require("./796762.js"),
  Chunk695346 = require("./695346.js"),
  Chunk572004 = require("./572004.js"),
  Chunk924301 = require("./924301.js"),
  Chunk405613 = require("./405613.js"),
  Chunk388032 = require("./388032.jsx");

function f(t, e) {
  let n = c.Sb.useSetting(),
    {
      tidaWebformEnabled: f
    } = o.Z.useExperiment({
      location: "useCopyEventImageLinkItem"
    }, {
      autoTrackExposure: false
    }),
    v = (0, r.e7)([s.ZP], () => s.ZP.getGuildScheduledEvent(t)),
    b = null != v ? (0, d.Z)(v) : null,
    E = "event-image" === e.getAttribute("data-type"),
    p = i.useCallback(() => {
      null != b && (0, a.JG)(b)
    }, [b]);
  return a.wS && n && f && null != b && E ? (0, l.jsx)(u.sNh, {
    id: "copy-event-image-link",
    label: g.intl.string(g.t["8xHmxo"]),
    action: p,
    icon: u.xPt
  }) : null
}