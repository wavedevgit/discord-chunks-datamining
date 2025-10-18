/** Chunk was on web.js **/
/** chunk id: 267006, original params: e,t,n (module,exports,re quire) **/
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
  Chunk388032 = require("./388032.jsx");

function d() {
  let e = (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.getExperimentalEncoders());
  return (0, Chunk951288.jsx)(Chunk921801.F, {
    setting: Chunk726985.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_EXPERIMENTAL_ENCODERS,
    children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
      label: Chunk388032.intl.string(Chunk388032.t.AxnPm5),
      checked: module,
      onChange: Chunk846027.Z.setExperimentalEncoders
    })
  })
}

function f() {
  let {
    openH264: e
  } = (0, Chunk442837.cj)([Chunk131951.Z], () => ({
    openH264: Chunk131951.Z.getOpenH264()
  }));
  return (0, Chunk951288.jsx)(Chunk921801.F, {
    setting: Chunk726985.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
    children: (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
      gap: 24,
      children: [(0, Chunk951288.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_OPENH264,
        children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
          label: Chunk388032.intl.string(Chunk388032.t["71Ve19"]),
          checked: module,
          onChange: Chunk846027.Z.setOpenH264
        })
      }), (0, Chunk951288.jsx)(d, {})]
    })
  })
}