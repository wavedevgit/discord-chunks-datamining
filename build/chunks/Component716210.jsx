/** Chunk was on 66181 **/
/** chunk id: 716210, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk921801 = require("./921801.js"),
  Chunk131951 = require("./131951.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk197571 = require("./197571.js");

function m(e) {
  let {
    refreshStyles: t = false
  } = e, n = (0, r.e7)([o.Z], () => o.Z.getEnableSilenceWarning()), m = (0, i.jsx)(s.j7V, {
    value: n,
    onChange: e => a.Z.setSilenceWarning(e),
    hideBorder: t,
    children: d.intl.string(d.t.jtiiCw)
  });
  return (0, i.jsx)(l.F, {
    setting: c.s6.VOICE_AND_VIDEO_ADVANCED_SILENCE_WARNING,
    children: t ? m : (0, i.jsx)(s.hjN, {
      className: u.marginBottom20,
      title: d.intl.string(d.t["aP1N/v"]),
      children: m
    })
  })
}