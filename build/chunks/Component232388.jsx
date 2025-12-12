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
  Chunk921801 = require("./921801.js"),
  Chunk131951 = require("./131951.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");

function d() {
  let e = (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.getQoS());
  return (0, Chunk54381.jsx)(Chunk921801.F, {
    setting: Chunk726985.s6.VOICE_AND_VIDEO_ADVANCED_QOS,
    children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
      label: Chunk388032.intl.string(Chunk388032.t["3CqDxp"]),
      description: Chunk388032.intl.string(Chunk388032.t.I1Eoqq),
      checked: module,
      onChange: e => a.Z.setQoS(e)
    })
  })
}