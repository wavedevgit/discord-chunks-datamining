/** Chunk was on web.js **/
/** chunk id: 267717, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  default: () => E,
  y: () => g
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk490220 = require("./490220.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk98278 = require("./98278.js"),
  Chunk790527 = require("./790527.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk677710 = require("./677710.js");

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

function m(e, t) {
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

function g(e) {
  let {
    analyticsSource: t,
    onSubscribeFinish: a
  } = e, s = o.default.getCurrentUser();
  null != s && (0, i.ZDy)(async () => {
    let {
      default: e
    } = await Promise.resolve().then(n.bind(n, 267717));
    return n => (0, r.jsx)(e, _({
      user: s,
      analyticsSource: t,
      analyticsLocation: {
        section: u.jXE.USER_PROFILE,
        object: u.qAy.BUTTON_CTA
      },
      onSubscribeFinish: a
    }, n))
  })
}

function E(e) {
  var {
    user: t,
    onClose: n
  } = e, i = m(e, ["user", "onClose"]);
  return (0, r.jsx)(l.Z, _({
    modalClassName: f.modal,
    modalContentClassName: f.modalContent,
    type: c.cd.TRY_IT_OUT_MODAL_UPSELL,
    title: d.intl.string(d.t.reVc0M),
    body: d.intl.string(d.t.KckEj7),
    glowUp: d.intl.string(d.t.reVc0M),
    onSecondaryClick: () => {
      (0, s.$)(n)
    },
    secondaryCTA: d.intl.string(d.t.PcTCB7),
    onClose: n,
    enableArtBoxShadow: false,
    hideBackButton: true,
    showEnhancedUpsell: true,
    LeadingComponent: (0, r.jsx)("div", {
      className: f.previewContainerParent,
      children: (0, r.jsx)(a.Z, {
        containerClassName: f.previewContainer,
        user: t,
        disabledInputs: true
      })
    })
  }, i))
}