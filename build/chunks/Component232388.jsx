/** Chunk was on 7384 **/
/** chunk id: 232388, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
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
  } = e, n = (0, r.e7)([o.Z], () => o.Z.getQoS()), m = (0, i.jsx)(s.j7V, {
    value: n,
    onChange: e => a.Z.setQoS(e),
    note: d.intl.string(d.t.I1Eoqq),
    hideBorder: t,
    children: d.intl.string(d.t["3CqDxs"])
  });
  return (0, i.jsx)(l.F, {
    setting: c.s6.VOICE_AND_VIDEO_ADVANCED_QOS,
    children: t ? m : (0, i.jsx)(s.hjN, {
      className: u.marginBottom20,
      title: d.intl.string(d.t.uancuL),
      children: m
    })
  })
}