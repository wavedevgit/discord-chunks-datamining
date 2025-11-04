/** Chunk was on web.js **/
/** chunk id: 168107, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk429142 = require("./429142.js"),
  Chunk128064 = require("./128064.js"),
  Chunk580222 = require("./580222.js"),
  Chunk81643 = require("./81643.js"),
  Chunk469775 = require("./469775.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function p(e, t) {
  if (null == e) return {};
  var n, r, i = h(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function m(e) {
  if (null != e) return (0, l.AY)(e) ? i.fCB.LIGHTBOX : true
}
let g = {
  showAgeVerification: e => {
    var {
      onClose: t,
      entryPoint: o,
      shouldShowExpressiveModal: l = false
    } = e, u = p(e, ["onClose", "entryPoint", "shouldShowExpressiveModal"]);
    let f = {
      modalKey: c.zJ,
      onCloseCallback: t,
      backdropStyle: m(o),
      Layer: a.ZP
    };
    l || (0, s.v)(o) ? (0, i.ZDy)(async () => {
      let {
        default: e
      } = await n.e("67749").then(n.bind(n, 91175));
      return t => (0, r.jsx)(e, d({}, u, t))
    }, f) : (0, i.ZDy)(async () => {
      let {
        default: e
      } = await n.e("12014").then(n.bind(n, 879367));
      return t => (0, r.jsx)(e, d({}, u, t))
    }, f)
  },
  showAgeVerificationGetStartedModal: e => {
    let {
      onClose: t,
      entryPoint: s
    } = e;
    if ((0, l.kJ)() && (0, o.c_)("age_verification_utils")) return void(0, i.ZDy)(async () => {
      let {
        default: e
      } = await n.e("22447").then(n.bind(n, 686768));
      return t => (0, r.jsx)(e, _(d({}, t), {
        entryPoint: s
      }))
    }, {
      modalKey: c.ux,
      backdropStyle: m(s),
      Layer: a.ZP,
      onCloseCallback: t
    });
    (0, i.ZDy)(async () => {
      let {
        default: e
      } = await n.e("80144").then(n.bind(n, 634997));
      return t => (0, r.jsx)(e, _(d({}, t), {
        entryPoint: s
      }))
    }, {
      modalKey: c.ux,
      backdropStyle: m(s),
      Layer: a.ZP,
      onCloseCallback: t
    })
  },
  openUrl: e => {
    window.open(e, "_blank")
  }
}