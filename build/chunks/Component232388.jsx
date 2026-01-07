/** Chunk was on web.js **/
/** chunk id: 232388, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk921801 = require("./921801.jsx"),
  Chunk131951 = require("./131951.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");

function d() {
  let e = (0, i.e7)([l.Z], () => l.Z.getQoS());
  return (0, r.jsx)(s.F, {
    setting: c.s6.VOICE_AND_VIDEO_ADVANCED_QOS,
    children: (0, r.jsx)(a.rsf, {
      label: u.intl.string(u.t["3CqDxp"]),
      description: u.intl.string(u.t.I1Eoqq),
      checked: e,
      onChange: e => o.Z.setQoS(e)
    })
  })
}