/** Chunk was on 55183 **/
/** chunk id: 934261, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => A
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk597688 = require("./597688.js"),
  Chunk884697 = require("./884697.js"),
  Chunk29121 = require("./29121.js"),
  Chunk778825 = require("./778825.js"),
  Chunk957730 = require("./957730.js"),
  Chunk222062 = require("./222062.js"),
  Chunk678135 = require("./678135.jsx"),
  Chunk643879 = require("./643879.js"),
  Chunk350327 = require("./350327.js"),
  Chunk687158 = require("./687158.js"),
  Chunk706454 = require("./706454.js"),
  Chunk695346 = require("./695346.js"),
  Chunk265159 = require("./265159.jsx"),
  Chunk25990 = require("./25990.js"),
  Chunk594174 = require("./594174.js"),
  Chunk55935 = require("./55935.js"),
  Chunk74538 = require("./74538.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk219299 = require("./219299.js");

function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}
let S = e => {
    let {
      effectIsOwned: t,
      pendingProfileEffectRecord: n,
      product: u,
      purchase: d
    } = e, p = (0, l.e7)([j.default], () => j.default.getCurrentUser()), m = (0, l.e7)([s.Z], () => s.Z.getProduct(null == n ? true : n.skuId)), g = (0, l.e7)([x.default], () => x.default.locale), h = _.ZP.canUseCollectibles(p), b = (0, c.qS)(d), y = (0, c.G1)(u), P = !h && b, C = (null == d ? true : d.expiresAt) != null ? (0, O.TD)(Date.now(), d.expiresAt) : null, S = (0, a.ag)(d), A = (0, a.kd)(m), I = (0, f.M)(!y || h), Z = w(P, y, h, I);
    return null != n ? (0, r.jsx)("div", {
      className: t ? E.effectDescriptionNoGradient : E.effectDescriptionBorderWithGradient,
      children: (0, r.jsxs)("div", {
        className: E.effectDescriptionContainer,
        children: [(0, r.jsx)(o.Text, {
          color: "header-primary",
          variant: "text-sm/semibold",
          className: E.effectName,
          children: (0, i.isEmpty)(S) ? A : S
        }), null != d ? null : (0, r.jsx)(o.Text, {
          color: "text-default",
          variant: "text-sm/normal",
          className: E.effectDescription,
          children: Z
        }), null != C && (0, r.jsx)(o.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          className: E.effectPurchasedAt,
          children: v.intl.format(v.t.Io7ozs, {
            days: C.days.toString()
          })
        }), null != d && (0, r.jsxs)(o.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          className: E.effectPurchasedAt,
          children: [v.intl.format(v.t.gW9R4O, {
            date: d.purchasedAt.toLocaleDateString(g, {
              month: "long",
              year: "numeric"
            })
          }), null != d.expiresAt && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)("br", {}), v.intl.format(v.t.eZSTa2, {
              date: d.expiresAt.toLocaleDateString(g, {
                minute: "numeric",
                hour: "numeric",
                day: "numeric",
                month: "long",
                year: "numeric"
              })
            })]
          })]
        }), b && (0, r.jsx)(o.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          className: E.effectPurchasedAt,
          children: v.intl.string(v.t.nKdAlJ)
        })]
      })
    }) : null
  },
  w = (e, t, n, r) => e ? v.intl.string(v.t["1UPza2"]) : t && n ? v.intl.string(v.t.hmyYKy) : t && !n ? r ? v.intl.string(v.t.meldu7) : v.intl.string(v.t.JtAKws) : v.intl.string(v.t.fEGjVV),
  A = e => {
    var t, n, i;
    let {
      user: o,
      pendingProfileEffectRecord: s,
      canApplySelectedChange: c,
      product: a,
      purchase: f,
      guild: x
    } = e, {
      pendingGlobalName: j,
      pendingNickname: O,
      pendingPronouns: v,
      pendingBio: w,
      pendingBanner: A,
      pendingAvatar: I,
      pendingAvatarDecoration: Z,
      pendingThemeColors: N,
      pendingAccentColor: D
    } = (0, l.cj)([u.Z, P.Z], () => C({
      pendingNickname: true,
      pendingGlobalName: true,
      pendingAccentColor: true
    }, null != x ? u.Z.getAllPending() : P.Z.getAllPending())), T = _.ZP.isPremium(o), k = _.ZP.canUsePremiumProfileCustomization(o), L = (0, h.ZP)(o.id), U = !!(null == L ? true : L.getPreviewBio(w).value), B = {
      user: o,
      guild: x,
      pendingGlobalName: j,
      pendingNickname: O,
      pendingPronouns: v,
      pendingBio: b.dN.useSetting() && null != w ? d.ZP.parse(true, w).content : w,
      pendingBanner: A,
      useLargeBanner: true,
      pendingAvatar: (0, m.SD)({
        userId: o.id,
        image: I
      }),
      pendingAvatarDecoration: Z,
      pendingThemeColors: N,
      pendingAccentColor: D,
      pendingProfileEffectId: null != (t = null == s ? true : s.id) ? t : null,
      hideFakeActivity: U,
      canUsePremiumCustomization: k,
      onUpsellClick: y.Z,
      onBannerChange: g.g_
    };
    return (0, r.jsxs)("div", {
      className: E.previewContainer,
      children: [(0, r.jsx)(p.Z, (n = C({}, B), i = i = {
        disabledInputs: true,
        hideCustomStatus: true
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
      }), n)), false, (0, r.jsx)(S, {
        effectIsOwned: c,
        pendingProfileEffectRecord: s,
        product: a,
        purchase: f,
        userIsPremium: T
      })]
    })
  }