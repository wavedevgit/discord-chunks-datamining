/** Chunk was on web.js **/
/** chunk id: 429789, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk921801 = require("./921801.jsx"),
  Chunk131951 = require("./131951.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");

function d() {
  let {
    attenuation: e,
    attenuateWhileSpeakingSelf: t,
    attenuateWhileSpeakingOthers: n
  } = (0, Chunk442837.cj)([Chunk131951.Z], () => ({
    attenuation: Chunk131951.Z.getAttenuation(),
    attenuateWhileSpeakingSelf: Chunk131951.Z.getAttenuateWhileSpeakingSelf(),
    attenuateWhileSpeakingOthers: Chunk131951.Z.getAttenuateWhileSpeakingOthers()
  }));
  return (0, Chunk54381.jsxs)(Chunk921801.F, {
    setting: Chunk726985.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION,
    children: [(0, Chunk54381.jsx)(Chunk481060.iRW, {
      label: Chunk388032.intl.string(Chunk388032.t.oSdBvW),
      description: Chunk388032.intl.string(Chunk388032.t["0A/8Rt"]),
      initialValue: module,
      onValueChange: e => {
        o.Z.setAttenuation(e, t, n)
      }
    }), (0, Chunk54381.jsx)(Chunk481060.rsf, {
      label: Chunk388032.intl.string(Chunk388032.t["9dHxRY"]),
      checked: exports,
      onChange: t => o.Z.setAttenuation(e, t, n)
    }), (0, Chunk54381.jsx)(Chunk481060.rsf, {
      label: Chunk388032.intl.string(Chunk388032.t.SMt0Gr),
      checked: require,
      onChange: n => o.Z.setAttenuation(e, t, n)
    })]
  })
}