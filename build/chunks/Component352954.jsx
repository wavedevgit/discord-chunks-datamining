/** Chunk was on web.js **/
/** chunk id: 352954, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./415506.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      s(e, t, n[t])
    })
  }
  return e
}

function c(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function u(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let d = {
  openSecureFramesStreamVerification: function(e, t) {
    (0, i.ZDy)(async () => {
      let i = (await n.e("94904").then(n.bind(n, 660250))).default;
      return n => (0, r.jsx)(i, l({
        streamKey: e,
        channelId: t
      }, n))
    })
  },
  openSecureFramesUserVerificationModal: function(e, t, o, s) {
    o() && (0, i.ZDy)(async () => {
      let i = (await n.e("33397").then(n.bind(n, 963410))).default;
      return n => (0, r.jsx)(i, l({
        userId: e,
        channelId: t
      }, n))
    }, {
      contextKey: s === a.IlC.POPOUT ? i.u1M : i.z1l
    })
  },
  openSecureFramesUpdateConfirmation: function(e) {
    let {
      title: t,
      subtitle: a,
      confirmText: s = o.intl.string(o.t["cY+Oob"]),
      onConfirm: c
    } = e;
    (0, i.ZDy)(async () => {
      let {
        ConfirmModal: e
      } = await Promise.resolve().then(n.bind(n, 481060));
      return n => (0, r.jsx)(e, u(l({
        header: t,
        confirmText: s,
        cancelText: o.intl.string(o.t["ETE/oC"]),
        onConfirm: c
      }, n), {
        children: (0, r.jsx)(i.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: a
        })
      }))
    })
  },
  handleSecureFramesUserVerificationLink: function(e) {
    throw Error("handleSecureFramesUserVerificationLink not implemented")
  }
}