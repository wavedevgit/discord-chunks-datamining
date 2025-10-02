/** Chunk was on web.js **/
/** chunk id: 429789, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk313201 = require("./313201.js"),
  Chunk921801 = require("./921801.js"),
  Chunk131951 = require("./131951.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk10198 = require("./10198.js");
let _ = (0, Chunk313201.hQ)();

function p() {
  let {
    attenuation: e,
    attenuateWhileSpeakingSelf: t,
    attenuateWhileSpeakingOthers: n
  } = (0, Chunk442837.cj)([Chunk131951.Z], () => ({
    attenuation: Chunk131951.Z.getAttenuation(),
    attenuateWhileSpeakingSelf: Chunk131951.Z.getAttenuateWhileSpeakingSelf(),
    attenuateWhileSpeakingOthers: Chunk131951.Z.getAttenuateWhileSpeakingOthers()
  }));
  return (0, Chunk951288.jsxs)(Chunk921801.F, {
    setting: Chunk726985.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION,
    children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
      id: _,
      className: Chunk10198.marginBottom8,
      children: Chunk388032.intl.string(Chunk388032.t.oSdBvb)
    }), (0, Chunk951288.jsx)(Chunk481060.iRW, {
      initialValue: module,
      onValueChange: e => {
        o.Z.setAttenuation(e, t, n)
      },
      "aria-labelledby": _
    }), (0, Chunk951288.jsx)(Chunk481060.R94, {
      type: Chunk481060.R94.Types.DESCRIPTION,
      children: Chunk388032.intl.string(Chunk388032.t["0A/8Rk"])
    }), (0, Chunk951288.jsx)(Chunk481060.rsf, {
      label: Chunk388032.intl.string(Chunk388032.t["9dHxRU"]),
      checked: exports,
      onChange: t => o.Z.setAttenuation(e, t, n)
    }), (0, Chunk951288.jsx)(Chunk481060.rsf, {
      label: Chunk388032.intl.string(Chunk388032.t.SMt0Gh),
      checked: require,
      onChange: n => o.Z.setAttenuation(e, t, n)
    })]
  })
}