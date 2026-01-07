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
  Chunk921801 = require("./921801.jsx"),
  Chunk131951 = require("./131951.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");

function f() {
  let {
    sidechainEnabled: e,
    sidechainStrength: t
  } = (0, i.cj)([c.Z], () => ({
    sidechainEnabled: c.Z.getSidechainCompression(),
    sidechainStrength: c.Z.getSidechainCompressionStrength()
  })), {
    analyticsLocations: n
  } = (0, s.ZP)();
  return (0, r.jsxs)(l.F, {
    setting: u.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_SIDECHAIN_COMPRESSION,
    children: [(0, r.jsx)(a.rsf, {
      label: d.intl.string(d.t["/jwMtn"]),
      description: d.intl.string(d.t.zlA23F),
      checked: e,
      onChange: e => o.Z.setSidechainCompression(e, {
        analyticsLocations: n
      })
    }), (0, r.jsx)(a.iRW, {
      label: d.intl.string(d.t.fhEzfj),
      initialValue: t,
      minValue: 1,
      onValueChange: e => o.Z.setSidechainCompressionStrength(e, {
        analyticsLocations: n
      })
    })]
  })
}