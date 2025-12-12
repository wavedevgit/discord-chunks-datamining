/** Chunk was on web.js **/
/** chunk id: 186934, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk921801 = require("./921801.js"),
  Chunk131951 = require("./131951.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");

function f() {
  let {
    sidechainEnabled: e,
    sidechainStrength: t
  } = (0, Chunk442837.cj)([Chunk131951.Z], () => ({
    sidechainEnabled: Chunk131951.Z.getSidechainCompression(),
    sidechainStrength: Chunk131951.Z.getSidechainCompressionStrength()
  })), {
    analyticsLocations: n
  } = (0, Chunk906732.ZP)();
  return (0, Chunk54381.jsxs)(Chunk921801.F, {
    setting: Chunk726985.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_SIDECHAIN_COMPRESSION,
    children: [(0, Chunk54381.jsx)(Chunk481060.rsf, {
      label: Chunk388032.intl.string(Chunk388032.t["/jwMtn"]),
      description: Chunk388032.intl.string(Chunk388032.t.zlA23F),
      checked: module,
      onChange: e => a.Z.setSidechainCompression(e, {
        analyticsLocations: n
      })
    }), (0, Chunk54381.jsx)(Chunk481060.iRW, {
      label: Chunk388032.intl.string(Chunk388032.t.fhEzfj),
      initialValue: exports,
      minValue: 1,
      onValueChange: e => a.Z.setSidechainCompressionStrength(e, {
        analyticsLocations: n
      })
    })]
  })
}