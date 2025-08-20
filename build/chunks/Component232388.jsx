/** Chunk was on web.js **/
/** chunk id: 232388, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
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

function f(e) {
  let {
    refreshStyles: t = false
  } = e, n = (0, i.e7)([l.Z], () => l.Z.getQoS()), f = (0, r.jsx)(a.j7V, {
    value: n,
    onChange: e => o.Z.setQoS(e),
    note: u.intl.string(u.t.I1Eoqq),
    hideBorder: t,
    children: u.intl.string(u.t["3CqDxs"])
  });
  return (0, r.jsx)(s.F, {
    setting: c.s6.VOICE_AND_VIDEO_ADVANCED_QOS,
    children: t ? f : (0, r.jsx)(a.hjN, {
      className: d.marginBottom20,
      title: u.intl.string(u.t.uancuL),
      children: f
    })
  })
}