/** Chunk was on web.js **/
/** chunk id: 429789, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk313201 = require("./313201.js"),
  Chunk921801 = require("./921801.js"),
  Chunk131951 = require("./131951.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk197571 = require("./197571.js");
let h = (0, Chunk313201.hQ)();

function m(e) {
  let {
    refreshStyles: t
  } = e, {
    attenuation: n,
    attenuateWhileSpeakingSelf: i,
    attenuateWhileSpeakingOthers: c
  } = (0, o.cj)([d.Z], () => ({
    attenuation: d.Z.getAttenuation(),
    attenuateWhileSpeakingSelf: d.Z.getAttenuateWhileSpeakingSelf(),
    attenuateWhileSpeakingOthers: d.Z.getAttenuateWhileSpeakingOthers()
  })), m = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.vwX, {
      id: h,
      tag: s.RB0.H5,
      className: p.marginBottom8,
      children: _.intl.string(_.t.oSdBvb)
    }), (0, r.jsx)(s.iRW, {
      initialValue: n,
      onValueChange: e => {
        l.Z.setAttenuation(e, i, c)
      },
      "aria-labelledby": h
    }), (0, r.jsx)(s.R94, {
      className: a()({
        [p.marginBottom20]: !t
      }),
      type: s.R94.Types.DESCRIPTION,
      children: _.intl.string(_.t["0A/8Rk"])
    }), !t && (0, r.jsx)(s.$i$, {
      className: p.marginBottom20
    }), (0, r.jsx)(s.j7V, {
      value: i,
      onChange: e => l.Z.setAttenuation(n, e, c),
      hideBorder: t,
      children: _.intl.string(_.t["9dHxRU"])
    }), (0, r.jsx)(s.j7V, {
      value: c,
      onChange: e => l.Z.setAttenuation(n, i, e),
      hideBorder: t,
      children: _.intl.string(_.t.SMt0Gh)
    })]
  });
  return (0, r.jsx)(u.F, {
    setting: f.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION,
    children: t ? m : (0, r.jsx)(s.hjN, {
      className: p.marginBottom20,
      children: m
    })
  })
}