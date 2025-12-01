/** Chunk was on web.js **/
/** chunk id: 531643, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g,
  openUploadError: () => E
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk952265 = require("./952265.js"),
  Chunk159691 = require("./159691.js"),
  Chunk174609 = require("./174609.js"),
  Chunk283066 = require("./283066.js"),
  Chunk355314 = require("./355314.jsx"),
  Chunk911311 = require("./911311.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function h(e) {
  let {
    title: t,
    help: n,
    showPremiumUpsell: i,
    transitionState: _,
    fileSize: m,
    onClose: h
  } = e, g = (0, s.Z)({
    location: "UploadError"
  }), E = () => {
    (0, o.Z)(), h(), d.default.track(f.rMx.PREMIUM_PROMOTION_OPENED, {
      location_section: f.jXE.FILE_UPLOAD_UPSELL_MODAL,
      location_object: f.qAy.NAVIGATION_LINK
    }), (0, u.uL)(f.Z5c.APPLICATION_STORE)
  };
  return i ? g ? (0, r.jsx)(c.Z, {
    transitionState: _,
    onClose: h,
    handleLearnMore: E
  }) : (0, r.jsx)(l.Z, {
    transitionState: _,
    onClose: h,
    handleLearnMore: E,
    fileSize: m
  }) : (0, r.jsx)(a.u_l, {
    title: t,
    subtitle: n,
    transitionState: _,
    actions: [{
      text: p.intl.string(p.t["NX+WJN"]),
      onClick: h,
      variant: "primary"
    }],
    onClose: h
  })
}
let g = "UPLOAD_ERROR_MODAL_KEY";

function E(e) {
  (0, i.h7)(t => (0, r.jsx)(h, m({}, t, e)), {
    modalKey: g
  })
}