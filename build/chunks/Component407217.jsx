/** Chunk was on web.js **/
/** chunk id: 407217, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => g,
  default: () => E
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk253604 = require("./253604.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk87719 = require("./87719.js"),
  Chunk244975 = require("./244975.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk698290 = require("./698290.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = m(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function g(e) {
  let {
    analyticsSource: t,
    onSubscribeFinish: a
  } = e, o = s.default.getCurrentUser();
  null != o && (0, i.mMO)(async () => {
    let {
      default: e
    } = await Promise.resolve().then(n.bind(n, 407217));
    return n => (0, r.jsx)(e, _({
      user: o,
      analyticsSource: t,
      analyticsLocation: {
        section: u.JJy.USER_PROFILE,
        object: u.ZSU.BUTTON_CTA
      },
      onSubscribeFinish: a
    }, n))
  })
}

function E(e) {
  let {
    user: t,
    onClose: n
  } = e, i = h(e, ["user", "onClose"]);
  return (0, r.jsx)(l.A, _({
    modalClassName: f.yl,
    modalContentClassName: f.jE,
    type: c.e.TRY_IT_OUT_MODAL_UPSELL,
    title: d.intl.string(d.t.reVc0M),
    body: d.intl.string(d.t.KckEj7),
    glowUp: d.intl.string(d.t.reVc0M),
    onSecondaryClick: () => {
      (0, o.x)(n)
    },
    secondaryCTA: d.intl.string(d.t.PcTCB7),
    onClose: n,
    enableArtBoxShadow: false,
    hideBackButton: true,
    showEnhancedUpsell: true,
    LeadingComponent: (0, r.jsx)("div", {
      className: f.wC,
      children: (0, r.jsx)(a.A, {
        containerClassName: f.i1,
        user: t,
        disabledInputs: true
      })
    })
  }, i))
}