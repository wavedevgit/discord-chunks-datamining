/** Chunk was on web.js **/
/** chunk id: 531643, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => I,
  openUploadError: () => T
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk952265 = require("./952265.js"),
  Chunk466377 = require("./466377.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk174609 = require("./174609.js"),
  Chunk47280 = require("./47280.js"),
  Chunk998076 = require("./998076.js"),
  Chunk355314 = require("./355314.jsx"),
  Chunk911311 = require("./911311.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk626135 = require("./626135.js"),
  Chunk310752 = require("./310752.jsx"),
  Chunk731994 = require("./731994.js"),
  Chunk981631 = require("./981631.js"),
  Chunk311795 = require("./311795.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
    })
  }
  return e
}

function v(e) {
  let {
    title: t,
    help: n,
    showPremiumUpsell: i,
    transitionState: o,
    icons: y,
    fileSize: O,
    onClose: v
  } = e, I = (0, l.Dt)(), T = null != y ? y : g.J6, S = (0, u.ZP)({
    location: "UploadError"
  }), A = (0, d.Z)({
    location: "UploadError"
  }), C = S || A, N = () => {
    (0, c.Z)(), v(), h.default.track(E.rMx.PREMIUM_PROMOTION_OPENED, {
      location_section: E.jXE.FILE_UPLOAD_UPSELL_MODAL,
      location_object: E.qAy.NAVIGATION_LINK
    }), (0, p.uL)(E.Z5c.APPLICATION_STORE)
  };
  return i ? C ? (0, r.jsx)(_.Z, {
    transitionState: o,
    onClose: v,
    handleLearnMore: N
  }) : (0, r.jsx)(f.Z, {
    transitionState: o,
    onClose: v,
    handleLearnMore: N,
    fileSize: O
  }) : (0, r.jsx)(s.Y0, {
    size: s.Cg.DYNAMIC,
    "aria-labelledby": I,
    transitionState: o,
    parentComponent: "UploadError",
    children: (0, r.jsx)("div", {
      className: a()(b.uploadDropModal, b.error),
      children: (0, r.jsxs)("div", {
        className: b.inner,
        children: [(0, r.jsx)(m.Z, {
          icons: T
        }), (0, r.jsx)("div", {
          id: I,
          className: b.title,
          children: t
        }), (0, r.jsx)("div", {
          className: b.instructions,
          children: n
        })]
      })
    })
  })
}
let I = "UPLOAD_ERROR_MODAL_KEY";

function T(e) {
  (0, o.h7)(t => (0, r.jsx)(v, O({}, t, e)), {
    modalKey: I
  })
}