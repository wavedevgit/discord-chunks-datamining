/** Chunk was on web.js **/
/** chunk id: 352954, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
}), require("./415506.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk248514 = require("./248514.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}
let u = {
  openSecureFramesStreamVerification: function(e, t) {
    (0, o.ZDy)(async () => {
      let i = (await n.e("94904").then(n.bind(n, 660250))).default;
      return n => (0, r.jsx)(i, c({
        streamKey: e,
        channelId: t
      }, n))
    })
  },
  openSecureFramesUserVerificationModal: function(e, t, i, s) {
    i() && (0, o.ZDy)(async () => {
      let i = (await n.e("33397").then(n.bind(n, 963410))).default;
      return n => (0, r.jsx)(i, c({
        userId: e,
        channelId: t
      }, n))
    }, {
      contextKey: s === a.IlC.POPOUT ? o.u1M : o.z1l
    })
  },
  openSecureFramesUpdateConfirmation: function(e) {
    let {
      title: t,
      subtitle: n,
      confirmText: r = s.intl.string(s.t["cY+Oob"]),
      onConfirm: o
    } = e;
    (0, i.Z)({
      title: t,
      subtitle: n,
      confirmText: r,
      onConfirm: o
    })
  },
  handleSecureFramesUserVerificationLink: function(e) {
    throw Error("handleSecureFramesUserVerificationLink not implemented")
  }
}