/** Chunk was on web.js **/
/** chunk id: 168107, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk429142 = require("./429142.js"),
  Chunk128064 = require("./128064.js"),
  Chunk81643 = require("./81643.js"),
  Chunk469775 = require("./469775.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function d(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i = p(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function p(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function h(e) {
  if (null != e) return (0, s.AY)(e) ? i.fCB.LIGHTBOX : true
}
let m = {
  showAgeVerification: e => {
    var {
      onClose: t,
      entryPoint: o
    } = e, s = _(e, ["onClose", "entryPoint"]);
    (0, i.ZDy)(async () => {
      let {
        default: e
      } = await n.e("67749").then(n.bind(n, 91175));
      return t => (0, r.jsx)(e, u({}, s, t))
    }, {
      modalKey: l.zJ,
      onCloseCallback: t,
      backdropStyle: h(o),
      Layer: a.ZP
    })
  },
  showAgeVerificationGetStartedModal: e => {
    let {
      onClose: t,
      entryPoint: c
    } = e;
    if ((0, s.kJ)() && (0, o.c_)("age_verification_utils")) return void(0, i.ZDy)(async () => {
      let {
        default: e
      } = await n.e("22447").then(n.bind(n, 686768));
      return t => (0, r.jsx)(e, f(u({}, t), {
        entryPoint: c
      }))
    }, {
      modalKey: l.ux,
      backdropStyle: h(c),
      Layer: a.ZP,
      onCloseCallback: t
    });
    (0, i.ZDy)(async () => {
      let {
        default: e
      } = await n.e("50614").then(n.bind(n, 17597));
      return t => (0, r.jsx)(e, f(u({}, t), {
        entryPoint: c
      }))
    }, {
      modalKey: l.ux,
      backdropStyle: h(c),
      Layer: a.ZP,
      onCloseCallback: t
    })
  },
  openUrl: e => {
    window.open(e, "_blank")
  }
}