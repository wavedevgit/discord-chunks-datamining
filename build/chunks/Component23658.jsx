/** Chunk was on web.js **/
/** chunk id: 23658, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D: () => g,
  openUploadError: () => E
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk192308 = require("./192308.js"),
  Chunk732955 = require("./732955.js"),
  Chunk523527 = require("./523527.js"),
  Chunk170887 = require("./170887.js"),
  Chunk997351 = require("./997351.jsx"),
  Chunk218252 = require("./218252.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
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

function m(e) {
  let {
    title: t,
    help: n,
    showPremiumUpsell: i,
    transitionState: _,
    fileSize: h,
    onClose: m
  } = e, g = (0, o.A)({
    location: "UploadError"
  }), E = () => {
    (0, s.A)(), m(), d.default.track(f.HAw.PREMIUM_PROMOTION_OPENED, {
      location_section: f.JJy.FILE_UPLOAD_UPSELL_MODAL,
      location_object: f.ZSU.NAVIGATION_LINK
    }), (0, u.pX)(f.BVt.APPLICATION_STORE)
  };
  return i ? g ? (0, r.jsx)(c.A, {
    transitionState: _,
    onClose: m,
    handleLearnMore: E
  }) : (0, r.jsx)(l.A, {
    transitionState: _,
    onClose: m,
    handleLearnMore: E,
    fileSize: h
  }) : (0, r.jsx)(a.aFV, {
    title: t,
    subtitle: n,
    transitionState: _,
    actions: [{
      text: p.intl.string(p.t["NX+WJN"]),
      onClick: m,
      variant: "primary"
    }],
    onClose: m
  })
}
let g = "UPLOAD_ERROR_MODAL_KEY";

function E(e) {
  (0, i.openModal)(t => (0, r.jsx)(m, h({}, t, e)), {
    modalKey: g
  })
}