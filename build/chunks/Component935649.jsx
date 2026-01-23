/** Chunk was on web.js **/
/** chunk id: 935649, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => v
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk551907 = require("./551907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk80556 = require("./80556.js"),
  Chunk207560 = require("./207560.js"),
  Chunk662502 = require("./662502.js"),
  Chunk64313 = require("./64313.js"),
  Chunk666176 = require("./666176.js"),
  Chunk81091 = require("./81091.js"),
  Chunk36149 = require("./36149.js"),
  Chunk40449 = require("./40449.js"),
  Chunk835002 = require("./835002.js");

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

function y(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = b(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function b(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function O(e) {
  if (null != e) return (0, f.Sr)(e) ? a.F2Z.LIGHTBOX : true
}
let v = {
  showAgeVerification: e => {
    let {
      onClose: t,
      entryPoint: o,
      shouldShowExpressiveModal: c = false,
      verificationVendorName: f,
      verificationRequestId: h,
      webviewUrl: g
    } = e, E = y(e, ["onClose", "entryPoint", "shouldShowExpressiveModal", "verificationVendorName", "verificationRequestId", "webviewUrl"]);
    if (f === p.XM.PERSONA) {
      if (!(0, d.g)("AgeVerificationActionCreators") || null == h) return;
      new i.Client({
        inquiryId: h,
        onComplete: () => {
          E.onComplete(), null != t && t()
        },
        onError: e => {
          l.A.showFailedToast(_.OB.TIGGER_PAWTECT_ERROR), null != t && t()
        },
        onCancel: () => {
          null != t && t()
        }
      }).open();
      return
    }
    if (null == g) return;
    let b = {
      modalKey: p.SW,
      onCloseCallback: t,
      backdropStyle: O(o),
      Layer: s.Ay
    };
    c || (0, u.v)(o) ? (0, a.mMO)(async () => {
      let {
        default: e
      } = await n.e("24947").then(n.bind(n, 662558));
      return t => (0, r.jsx)(e, m({
        webviewUrl: g
      }, E, t))
    }, b) : (0, a.mMO)(async () => {
      let {
        default: e
      } = await n.e("23425").then(n.bind(n, 745336));
      return t => (0, r.jsx)(e, m({
        webviewUrl: g
      }, E, t))
    }, b)
  },
  showAgeVerificationGetStartedModal: e => {
    let {
      onClose: t,
      entryPoint: i
    } = e;
    (0, f.Q9)() && ((0, o.u0)() || (0, c.o)("age_verification_utils")) ? (0, a.mMO)(async () => {
      let {
        default: e
      } = await n.e("18467").then(n.bind(n, 297102));
      return t => (0, r.jsx)(e, E(m({}, t), {
        entryPoint: i
      }))
    }, {
      modalKey: p.NC,
      backdropStyle: O(i),
      Layer: s.Ay,
      onCloseCallback: t
    }) : (0, u.v)(i) ? (0, a.mMO)(async () => {
      let {
        default: e
      } = await n.e("18128").then(n.bind(n, 767379));
      return t => (0, r.jsx)(e, E(m({}, t), {
        entryPoint: i
      }))
    }, {
      modalKey: p.NC,
      backdropStyle: O(i),
      Layer: s.Ay,
      onCloseCallback: t
    }) : (0, a.mMO)(async () => {
      let {
        default: e
      } = await n.e("42978").then(n.bind(n, 654041));
      return t => (0, r.jsx)(e, E(m({}, t), {
        entryPoint: i
      }))
    }, {
      modalKey: p.NC,
      backdropStyle: O(i),
      Layer: s.Ay,
      onCloseCallback: t
    })
  },
  openUrl: e => {
    window.open(e, "_blank")
  }
}