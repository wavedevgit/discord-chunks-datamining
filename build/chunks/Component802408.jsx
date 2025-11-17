/** Chunk was on web.js **/
/** chunk id: 802408, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk907862 = require("./907862.js"),
  Chunk780384 = require("./780384.js"),
  Chunk410030 = require("./410030.js"),
  Chunk607070 = require("./607070.js"),
  Chunk921944 = require("./921944.js");

function d(e) {
  let {
    onComplete: t,
    onCheckItOutClick: n,
    markAsDismissed: d,
    config: f,
    children: _
  } = e, p = (0, a.e7)([c.Z], () => c.Z.useReducedMotion), h = (0, l.ZP)(), m = i.useRef(null), g = {
    text: f.cta(),
    onClick: () => {
      n(), t(), d(u.L.TAKE_ACTION)
    }
  }, E = () => {
    t(), d(u.L.USER_DISMISS)
  };
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      ref: m,
      children: _
    }), (0, r.jsx)(o.Mb, {
      targetElementRef: m,
      shouldShow: true,
      position: "top",
      align: "center",
      title: f.title(),
      body: f.description(),
      assetUrl: f.getImageUrl((0, s.wj)(h), p),
      action: g,
      caretConfig: {
        position: "bottom",
        align: "center"
      },
      onRequestClose: E
    })]
  })
}