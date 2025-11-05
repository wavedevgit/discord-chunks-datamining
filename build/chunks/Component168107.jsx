/** Chunk was on web.js **/
/** chunk id: 168107, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk429142 = require("./429142.js"),
  Chunk128064 = require("./128064.js"),
  Chunk312870 = require("./312870.js"),
  Chunk580222 = require("./580222.js"),
  Chunk81643 = require("./81643.js"),
  Chunk469775 = require("./469775.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = m(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function g(e) {
  if (null != e) return (0, c.AY)(e) ? i.fCB.LIGHTBOX : true
}
let E = {
  showAgeVerification: e => {
    var {
      onClose: t,
      entryPoint: o,
      shouldShowExpressiveModal: s = false
    } = e, c = h(e, ["onClose", "entryPoint", "shouldShowExpressiveModal"]);
    let d = {
      modalKey: u.zJ,
      onCloseCallback: t,
      backdropStyle: g(o),
      Layer: a.ZP
    };
    s || (0, l.v)(o) ? (0, i.ZDy)(async () => {
      let {
        default: e
      } = await n.e("67749").then(n.bind(n, 91175));
      return t => (0, r.jsx)(e, f({}, c, t))
    }, d) : (0, i.ZDy)(async () => {
      let {
        default: e
      } = await n.e("12014").then(n.bind(n, 879367));
      return t => (0, r.jsx)(e, f({}, c, t))
    }, d)
  },
  showAgeVerificationGetStartedModal: e => {
    let {
      onClose: t,
      entryPoint: l
    } = e;
    if ((0, c.kJ)() && ((0, o.c_)("age_verification_utils") || (0, s.U)("age_verification_utils"))) return void(0, i.ZDy)(async () => {
      let {
        default: e
      } = await n.e("22447").then(n.bind(n, 686768));
      return t => (0, r.jsx)(e, p(f({}, t), {
        entryPoint: l
      }))
    }, {
      modalKey: u.ux,
      backdropStyle: g(l),
      Layer: a.ZP,
      onCloseCallback: t
    });
    (0, i.ZDy)(async () => {
      let {
        default: e
      } = await n.e("80144").then(n.bind(n, 634997));
      return t => (0, r.jsx)(e, p(f({}, t), {
        entryPoint: l
      }))
    }, {
      modalKey: u.ux,
      backdropStyle: g(l),
      Layer: a.ZP,
      onCloseCallback: t
    })
  },
  openUrl: e => {
    window.open(e, "_blank")
  }
}