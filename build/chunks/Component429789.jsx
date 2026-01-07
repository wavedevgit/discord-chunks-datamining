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
  } = (0, i.cj)([l.Z], () => ({
    attenuation: l.Z.getAttenuation(),
    attenuateWhileSpeakingSelf: l.Z.getAttenuateWhileSpeakingSelf(),
    attenuateWhileSpeakingOthers: l.Z.getAttenuateWhileSpeakingOthers()
  }));
  return (0, r.jsxs)(s.F, {
    setting: c.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION,
    children: [(0, r.jsx)(a.iRW, {
      label: u.intl.string(u.t.oSdBvW),
      description: u.intl.string(u.t["0A/8Rt"]),
      initialValue: e,
      onValueChange: e => {
        o.Z.setAttenuation(e, t, n)
      }
    }), (0, r.jsx)(a.rsf, {
      label: u.intl.string(u.t["9dHxRY"]),
      checked: t,
      onChange: t => o.Z.setAttenuation(e, t, n)
    }), (0, r.jsx)(a.rsf, {
      label: u.intl.string(u.t.SMt0Gr),
      checked: n,
      onChange: n => o.Z.setAttenuation(e, t, n)
    })]
  })
}