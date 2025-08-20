/** Chunk was on web.js **/
/** chunk id: 167540, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk921801 = require("./921801.js"),
  Chunk131951 = require("./131951.js"),
  Chunk962100 = require("./962100.jsx"),
  Chunk445817 = require("./445817.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk197571 = require("./197571.js");

function g() {
  return (0, Chunk951288.jsx)(Chunk481060.ToO, {
    type: Chunk481060.sje.PRIMARY,
    title: Chunk388032.intl.string(Chunk388032.t.XLw6FB),
    body: Chunk388032.intl.string(Chunk388032.t.wVjKGh),
    button: (0, Chunk951288.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: Chunk197571.marginTop20,
      children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
        variant: "primary",
        size: "sm",
        text: Chunk388032.intl.string(Chunk388032.t.BK8LKy),
        onClick: () => (0, Chunk962100.y)("Video unsupported browser")
      })
    })
  })
}

function E(e) {
  let {
    refreshStyles: t = false
  } = e, n = (0, s.e7)([u.Z], () => u.Z.supports(p.AN.VIDEO)), [a, d] = i.useState(false), E = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.F, {
      setting: _.s6.VOICE_AND_VIDEO_VIDEO_CAMERA,
      children: (0, r.jsx)(f.Z, {
        previewEnabled: a,
        onEnablePreview: () => d(true),
        onCancelPreview: () => d(false)
      })
    }), !n && (0, r.jsx)(g, {})]
  });
  return t ? E : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.y5t, {
      component: (0, r.jsx)(l.vwX, {
        tag: l.RB0.H1,
        className: m.marginBottom20,
        children: h.intl.string(h.t.LKzQSE)
      }),
      children: E
    }), (0, r.jsx)(l.$i$, {
      className: o()(m.marginBottom40, m.marginTop40)
    })]
  })
}