/** Chunk was on 91689 **/
/** chunk id: 378879, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => g,
  s: () => Z
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk678135 = require("./678135.jsx"),
  Chunk687158 = require("./687158.js"),
  Chunk576635 = require("./576635.js"),
  Chunk594174 = require("./594174.js"),
  Chunk98278 = require("./98278.js"),
  Chunk792254 = require("./792254.js"),
  Chunk790527 = require("./790527.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk486324 = require("./486324.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk561870 = require("./561870.js");

function L(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      c = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (c = c.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), c.forEach(function(t) {
      var c;
      c = n[t], t in e ? Object.defineProperty(e, t, {
        value: c,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = c
    })
  }
  return e
}

function Z(e) {
  let {
    uploadType: t,
    imageSrc: d,
    analyticsSource: o
  } = e, s = r.default.getCurrentUser();
  return null != s && ((0, a.ZDy)(async () => {
    let {
      default: e
    } = await Promise.resolve().then(n.bind(n, 378879));
    return n => (0, c.jsx)(e, L({
      user: s,
      imageSrc: d,
      uploadType: t,
      analyticsSource: o,
      analyticsLocation: {
        section: l.jXE.USER_PROFILE,
        object: l.qAy.BUTTON_CTA
      },
      onSecondaryClick: a.pTH
    }, n))
  }), true)
}

function g(e) {
  var {
    user: t,
    uploadType: n,
    imageSrc: a,
    onClose: r,
    analyticsSource: l,
    analyticsLocation: Z,
    onSecondaryClick: g
  } = e, E = function(e, t) {
    if (null == e) return {};
    var n, c, a = function(e, t) {
      if (null == e) return {};
      var n, c, a = {},
        d = Object.keys(e);
      for (c = 0; c < d.length; c++) n = d[c], t.indexOf(n) >= 0 || (a[n] = e[n]);
      return a
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(e);
      for (c = 0; c < d.length; c++) n = d[c], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
    }
    return a
  }(e, ["user", "uploadType", "imageSrc", "onClose", "analyticsSource", "analyticsLocation", "onSecondaryClick"]);
  let _ = (0, o.ZP)(t.id),
    {
      primaryColor: m,
      secondaryColor: C
    } = (0, s.Z)({
      user: t,
      displayProfile: _,
      pendingAvatarSrc: n === b.pC.AVATAR ? a : true,
      isPreview: true
    }),
    O = n === b.pC.AVATAR || n === b.pC.BANNER,
    h = null != a,
    T = (0, f.Z)(n === b.pC.AVATAR ? A.cd.ANIMATED_AVATAR_MODAL_UPSELL : A.cd.ANIMATED_BANNER_MODAL_UPSELL);
  return O ? (0, c.jsx)(p.Z, L({
    artURL: h ? true : T,
    modalClassName: h ? R.modal : true,
    modalContentClassName: h ? R.modalContent : true,
    type: n === b.pC.AVATAR ? A.cd.ANIMATED_AVATAR_MODAL_UPSELL : A.cd.ANIMATED_BANNER_MODAL_UPSELL,
    title: n === b.pC.AVATAR ? u.intl.string(u.t["X7tO6+"]) : u.intl.string(u.t.zXPa2N),
    body: n === b.pC.AVATAR ? u.intl.string(u.t.ifCRdH) : u.intl.string(u.t.yQAnf3),
    glowUp: n === b.pC.AVATAR ? u.intl.string(u.t.ifCRdH) : u.intl.string(u.t.yQAnf3),
    onSecondaryClick: () => {
      null == g || g(), (0, i.$)(r)
    },
    secondaryCTA: u.intl.string(u.t.PcTCBw),
    onClose: r,
    enableArtBoxShadow: false,
    analyticsSource: l,
    analyticsLocation: Z,
    hideBackButton: true,
    showEnhancedUpsell: true,
    LeadingComponent: h ? (0, c.jsx)("div", {
      className: R.previewContainerParent,
      children: (0, c.jsx)(d.Z, {
        containerClassName: R.previewContainer,
        user: t,
        canUsePremiumCustomization: true,
        disabledInputs: true,
        pendingAvatar: n === b.pC.AVATAR ? a : true,
        pendingBanner: n === b.pC.BANNER ? a : true,
        pendingThemeColors: [m, C],
        hideViewFullProfileButton: true
      })
    }) : true
  }, E)) : null
}