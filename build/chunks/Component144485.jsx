/** Chunk was on web.js **/
/** chunk id: 144485, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
}), require("./65821.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk314116 = require("./314116.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

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
    (0, a.mMO)(async () => {
      let i = (await n.e("46115").then(n.bind(n, 773262))).default;
      return n => (0, r.jsx)(i, c({
        streamKey: e,
        channelId: t
      }, n))
    })
  },
  openSecureFramesUserVerificationModal: function(e, t, i, o) {
    i() && (0, a.mMO)(async () => {
      let i = (await n.e("16674").then(n.bind(n, 632441))).default;
      return n => (0, r.jsx)(i, c({
        userId: e,
        channelId: t
      }, n))
    }, {
      contextKey: o === s.BRT.POPOUT ? a.KX8 : a.SYi
    })
  },
  openSecureFramesUpdateConfirmation: function(e) {
    let {
      title: t,
      subtitle: n,
      confirmText: r = o.intl.string(o.t["cY+Oob"]),
      onConfirm: a
    } = e;
    (0, i.A)({
      title: t,
      subtitle: n,
      confirmText: r,
      onConfirm: a
    })
  },
  handleSecureFramesUserVerificationLink: function(e) {
    throw Error("handleSecureFramesUserVerificationLink not implemented")
  }
}