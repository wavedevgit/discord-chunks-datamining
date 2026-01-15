/** Chunk was on web.js **/
/** chunk id: 168107, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk147829 = require("./147829.js"),
  Chunk481060 = require("./481060.js"),
  Chunk429142 = require("./429142.js"),
  Chunk681678 = require("./681678.js"),
  Chunk128064 = require("./128064.js"),
  Chunk312870 = require("./312870.js"),
  Chunk580222 = require("./580222.js"),
  Chunk240758 = require("./240758.js"),
  Chunk81643 = require("./81643.js"),
  Chunk469775 = require("./469775.js"),
  Chunk484710 = require("./484710.js");

function h(e, t, n) {
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
      h(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function b(e, t) {
  if (null == e) return {};
  var n, r, i = y(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function y(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function O(e) {
  if (null != e) return (0, f.AY)(e) ? a.fCB.LIGHTBOX : true
}
let v = {
  showAgeVerification: e => {
    var {
      onClose: t,
      entryPoint: l,
      shouldShowExpressiveModal: c = false,
      verificationVendorName: f,
      verificationRequestId: h,
      webviewUrl: g
    } = e, E = b(e, ["onClose", "entryPoint", "shouldShowExpressiveModal", "verificationVendorName", "verificationRequestId", "webviewUrl"]);
    if (f === p.Rh.PERSONA) {
      if (!(0, d.e)("AgeVerificationActionCreators") || null == h) return;
      new i.Client({
        inquiryId: h,
        onComplete: () => {
          E.onComplete(), null != t && t()
        },
        onError: e => {
          s.Z.showFailedToast(_.wQ.TIGGER_PAWTECT_ERROR), null != t && t()
        },
        onCancel: () => {
          null != t && t()
        }
      }).open();
      return
    }
    if (null == g) return;
    let y = {
      modalKey: p.zJ,
      onCloseCallback: t,
      backdropStyle: O(l),
      Layer: o.ZP
    };
    c || (0, u.v)(l) ? (0, a.ZDy)(async () => {
      let {
        default: e
      } = await n.e("67749").then(n.bind(n, 91175));
      return t => (0, r.jsx)(e, m({
        webviewUrl: g
      }, E, t))
    }, y) : (0, a.ZDy)(async () => {
      let {
        default: e
      } = await n.e("12014").then(n.bind(n, 879367));
      return t => (0, r.jsx)(e, m({
        webviewUrl: g
      }, E, t))
    }, y)
  },
  showAgeVerificationGetStartedModal: e => {
    let {
      onClose: t,
      entryPoint: i
    } = e;
    if ((0, f.kJ)() && ((0, l.c_)("age_verification_utils") || (0, c.U)("age_verification_utils"))) return void(0, a.ZDy)(async () => {
      let {
        default: e
      } = await n.e("22447").then(n.bind(n, 686768));
      return t => (0, r.jsx)(e, E(m({}, t), {
        entryPoint: i
      }))
    }, {
      modalKey: p.ux,
      backdropStyle: O(i),
      Layer: o.ZP,
      onCloseCallback: t
    });
    (0, u.v)(i) ? (0, a.ZDy)(async () => {
      let {
        default: e
      } = await n.e("50614").then(n.bind(n, 17597));
      return t => (0, r.jsx)(e, E(m({}, t), {
        entryPoint: i
      }))
    }, {
      modalKey: p.ux,
      backdropStyle: O(i),
      Layer: o.ZP,
      onCloseCallback: t
    }) : (0, a.ZDy)(async () => {
      let {
        default: e
      } = await n.e("80144").then(n.bind(n, 634997));
      return t => (0, r.jsx)(e, E(m({}, t), {
        entryPoint: i
      }))
    }, {
      modalKey: p.ux,
      backdropStyle: O(i),
      Layer: o.ZP,
      onCloseCallback: t
    })
  },
  openUrl: e => {
    window.open(e, "_blank")
  }
}