/** Chunk was on web.js **/
/** chunk id: 186934, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk921801 = require("./921801.js"),
  Chunk131951 = require("./131951.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk197571 = require("./197571.js");

function h(e) {
  let {
    refreshStyles: t = false
  } = e, {
    sidechainEnabled: n,
    sidechainStrength: i
  } = (0, o.cj)([d.Z], () => ({
    sidechainEnabled: d.Z.getSidechainCompression(),
    sidechainStrength: d.Z.getSidechainCompressionStrength()
  })), {
    analyticsLocations: h
  } = (0, c.ZP)(), m = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.j7V, {
      className: t ? null : a()(p.marginTop8, p.marginBottom20),
      value: n,
      onChange: e => l.Z.setSidechainCompression(e, {
        analyticsLocations: h
      }),
      note: _.intl.string(_.t.zlA23N),
      hideBorder: t,
      children: _.intl.string(_.t["/jwMtr"])
    }), (0, r.jsx)(s.xJW, {
      title: _.intl.string(_.t.fhEzfn),
      children: (0, r.jsx)(s.iRW, {
        initialValue: i,
        minValue: 1,
        onValueChange: e => l.Z.setSidechainCompressionStrength(e, {
          analyticsLocations: h
        })
      })
    })]
  });
  return (0, r.jsx)(u.F, {
    setting: f.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_SIDECHAIN_COMPRESSION,
    children: t ? m : (0, r.jsx)(s.hjN, {
      className: p.marginBottom20,
      children: m
    })
  })
}