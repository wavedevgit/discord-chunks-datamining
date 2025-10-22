/** Chunk was on web.js **/
/** chunk id: 531643, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => v,
  openUploadError: () => I
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk952265 = require("./952265.js"),
  Chunk466377 = require("./466377.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk174609 = require("./174609.js"),
  Chunk283066 = require("./283066.js"),
  Chunk355314 = require("./355314.jsx"),
  Chunk911311 = require("./911311.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk626135 = require("./626135.js"),
  Chunk310752 = require("./310752.jsx"),
  Chunk731994 = require("./731994.js"),
  Chunk981631 = require("./981631.js"),
  Chunk374450 = require("./374450.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function O(e) {
  let {
    title: t,
    help: n,
    showPremiumUpsell: i,
    transitionState: o,
    icons: b,
    fileSize: y,
    onClose: O
  } = e, v = (0, l.Dt)(), I = null != b ? b : m.J6, T = (0, u.Z)({
    location: "UploadError"
  }), S = () => {
    (0, c.Z)(), O(), p.default.track(g.rMx.PREMIUM_PROMOTION_OPENED, {
      location_section: g.jXE.FILE_UPLOAD_UPSELL_MODAL,
      location_object: g.qAy.NAVIGATION_LINK
    }), (0, _.uL)(g.Z5c.APPLICATION_STORE)
  };
  return i ? T ? (0, r.jsx)(f.Z, {
    transitionState: o,
    onClose: O,
    handleLearnMore: S
  }) : (0, r.jsx)(d.Z, {
    transitionState: o,
    onClose: O,
    handleLearnMore: S,
    fileSize: y
  }) : (0, r.jsx)(s.Y0, {
    size: s.Cg.DYNAMIC,
    "aria-labelledby": v,
    transitionState: o,
    parentComponent: "UploadError",
    children: (0, r.jsx)("div", {
      className: a()(E.uploadDropModal, E.error),
      children: (0, r.jsxs)("div", {
        className: E.inner,
        children: [(0, r.jsx)(h.Z, {
          icons: I
        }), (0, r.jsx)("div", {
          id: v,
          className: E.title,
          children: t
        }), (0, r.jsx)("div", {
          className: E.instructions,
          children: n
        })]
      })
    })
  })
}
let v = "UPLOAD_ERROR_MODAL_KEY";

function I(e) {
  (0, o.h7)(t => (0, r.jsx)(O, y({}, t, e)), {
    modalKey: v
  })
}