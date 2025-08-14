/** Chunk was on 7384 **/
/** chunk id: 186934, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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
    sidechainStrength: r
  } = (0, a.cj)([u.Z], () => ({
    sidechainEnabled: u.Z.getSidechainCompression(),
    sidechainStrength: u.Z.getSidechainCompressionStrength()
  })), {
    analyticsLocations: h
  } = (0, c.ZP)(), f = (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(l.j7V, {
      className: t ? null : s()(g.marginTop8, g.marginBottom20),
      value: n,
      onChange: e => o.Z.setSidechainCompression(e, {
        analyticsLocations: h
      }),
      note: p.intl.string(p.t.zlA23N),
      hideBorder: t,
      children: p.intl.string(p.t["/jwMtr"])
    }), (0, i.jsx)(l.xJW, {
      title: p.intl.string(p.t.fhEzfn),
      children: (0, i.jsx)(l.iRW, {
        initialValue: r,
        minValue: 1,
        onValueChange: e => o.Z.setSidechainCompressionStrength(e, {
          analyticsLocations: h
        })
      })
    })]
  });
  return (0, i.jsx)(d.F, {
    setting: m.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_SIDECHAIN_COMPRESSION,
    children: t ? f : (0, i.jsx)(l.hjN, {
      className: g.marginBottom20,
      children: f
    })
  })
}