/** Chunk was on 7384 **/
/** chunk id: 267717, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => h,
  y: () => g
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk490220 = require("./490220.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk98278 = require("./98278.js"),
  Chunk790527 = require("./790527.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk561870 = require("./561870.js");

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function g(e) {
  let {
    analyticsSource: t,
    onSubscribeFinish: s
  } = e, l = a.default.getCurrentUser();
  null != l && (0, r.ZDy)(async () => {
    let {
      default: e
    } = await Promise.resolve().then(n.bind(n, 267717));
    return n => (0, i.jsx)(e, p({
      user: l,
      analyticsSource: t,
      analyticsLocation: {
        section: d.jXE.USER_PROFILE,
        object: d.qAy.BUTTON_CTA
      },
      onSubscribeFinish: s
    }, n))
  })
}

function h(e) {
  var {
    user: t,
    onClose: n
  } = e, r = function(e, t) {
    if (null == e) return {};
    var n, i, r = function(e, t) {
      if (null == e) return {};
      var n, i, r = {},
        s = Object.keys(e);
      for (i = 0; i < s.length; i++) n = s[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
      return r
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(e);
      for (i = 0; i < s.length; i++) n = s[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
  }(e, ["user", "onClose"]);
  return (0, i.jsx)(o.Z, p({
    modalClassName: m.modal,
    modalContentClassName: m.modalContent,
    type: c.cd.TRY_IT_OUT_MODAL_UPSELL,
    title: u.intl.string(u.t.reVc0N),
    body: u.intl.string(u.t.KckEj4),
    glowUp: u.intl.string(u.t.reVc0N),
    onSecondaryClick: () => {
      (0, l.$)(n)
    },
    secondaryCTA: u.intl.string(u.t.PcTCBw),
    onClose: n,
    enableArtBoxShadow: false,
    hideBackButton: true,
    showEnhancedUpsell: true,
    LeadingComponent: (0, i.jsx)("div", {
      className: m.previewContainerParent,
      children: (0, i.jsx)(s.Z, {
        containerClassName: m.previewContainer,
        user: t,
        disabledInputs: true
      })
    })
  }, r))
}