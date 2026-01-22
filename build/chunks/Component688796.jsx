/** Chunk was on 79149 **/
/** chunk id: 688796, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G: () => y,
  default: () => E
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk287070 = require("./287070.jsx"),
  Chunk950191 = require("./950191.js"),
  Chunk101928 = require("./101928.js"),
  Chunk287809 = require("./287809.js"),
  Chunk87719 = require("./87719.js"),
  Chunk377108 = require("./377108.js"),
  Chunk244975 = require("./244975.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk339984 = require("./339984.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk698290 = require("./698290.js");

function g(e) {
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

function y(e) {
  let {
    uploadType: t,
    imageSrc: d,
    analyticsSource: s
  } = e, o = r.default.getCurrentUser();
  return null != o && ((0, a.mMO)(async () => {
    let {
      default: e
    } = await Promise.resolve().then(n.bind(n, 688796));
    return n => (0, c.jsx)(e, g({
      user: o,
      imageSrc: d,
      uploadType: t,
      analyticsSource: s,
      analyticsLocation: {
        section: l.JJy.USER_PROFILE,
        object: l.ZSU.BUTTON_CTA
      },
      onSecondaryClick: a.s7G
    }, n))
  }), true)
}

function E(e) {
  let {
    user: t,
    uploadType: n,
    imageSrc: a,
    onClose: r,
    analyticsSource: l,
    analyticsLocation: y,
    onSecondaryClick: E
  } = e, m = function(e, t) {
    if (null == e) return {};
    var n, c, a, d = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (a = 0, n = Reflect.ownKeys(e); a < n.length; a++) c = n[a], !(t.indexOf(c) >= 0) && Object.prototype.propertyIsEnumerable.call(e, c) && (d[c] = e[c]);
      return d
    }
    if (d = function(e, t) {
        if (null == e) return {};
        var n, c, a = {},
          d = Object.getOwnPropertyNames(e);
        for (c = 0; c < d.length; c++) n = d[c], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
        return a
      }(e, t), Object.getOwnPropertySymbols)
      for (a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++) c = n[a], !(t.indexOf(c) >= 0) && Object.prototype.propertyIsEnumerable.call(e, c) && (d[c] = e[c]);
    return d
  }(e, ["user", "uploadType", "imageSrc", "onClose", "analyticsSource", "analyticsLocation", "onSecondaryClick"]), O = (0, s.Ay)(t.id), {
    primaryColor: R,
    secondaryColor: _
  } = (0, o.A)({
    user: t,
    displayProfile: O,
    pendingAvatarSrc: n === b.HL.AVATAR ? a : true,
    isPreview: true
  }), h = n === b.HL.AVATAR || n === b.HL.BANNER, N = null != a, T = (0, i.A)(n === b.HL.AVATAR ? p.e.ANIMATED_AVATAR_MODAL_UPSELL : p.e.ANIMATED_BANNER_MODAL_UPSELL);
  return h ? (0, c.jsx)(f.A, g({
    artURL: N ? true : T,
    modalClassName: N ? L.yl : true,
    modalContentClassName: N ? L.jE : true,
    type: n === b.HL.AVATAR ? p.e.ANIMATED_AVATAR_MODAL_UPSELL : p.e.ANIMATED_BANNER_MODAL_UPSELL,
    title: n === b.HL.AVATAR ? u.intl.string(u.t.X7tO60) : u.intl.string(u.t.zXPa2C),
    body: n === b.HL.AVATAR ? u.intl.string(u.t.ifCRdB) : u.intl.string(u.t.yQAnf4),
    glowUp: n === b.HL.AVATAR ? u.intl.string(u.t.ifCRdB) : u.intl.string(u.t.yQAnf4),
    onSecondaryClick: () => {
      null == E || E(), (0, A.x)(r)
    },
    secondaryCTA: u.intl.string(u.t.PcTCB7),
    onClose: r,
    enableArtBoxShadow: false,
    analyticsSource: l,
    analyticsLocation: y,
    hideBackButton: true,
    showEnhancedUpsell: true,
    LeadingComponent: N ? (0, c.jsx)("div", {
      className: L.wC,
      children: (0, c.jsx)(d.A, {
        containerClassName: L.i1,
        user: t,
        canUsePremiumCustomization: true,
        disabledInputs: true,
        pendingAvatar: n === b.HL.AVATAR ? a : true,
        pendingBanner: n === b.HL.BANNER ? a : true,
        pendingThemeColors: [R, _],
        hideExampleButton: true
      })
    }) : true
  }, m)) : null
}