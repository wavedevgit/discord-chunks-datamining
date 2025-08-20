/** Chunk was on 55183 **/
/** chunk id: 934261, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Z
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
  Chunk71627 = require("./71627.js");

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
let I = e => {
    let {
      effectIsOwned: t,
      pendingProfileEffectRecord: n,
      product: u,
      purchase: d
    } = e, p = (0, l.e7)([P.default], () => P.default.getCurrentUser()), m = (0, l.e7)([o.Z], () => o.Z.getProduct(null == n ? true : n.skuId)), g = (0, l.e7)([x.default], () => x.default.locale), h = O.ZP.canUseCollectibles(p), b = (0, c.qS)(d), j = (0, c.G1)(u), v = !h && b, C = (null == d ? true : d.expiresAt) != null ? (0, y.TD)(Date.now(), d.expiresAt) : null, I = (0, a.ag)(d), Z = (0, a.kd)(m), w = (0, f.M)(!j || h), N = S(v, j, h, w);
    return null != n ? (0, r.jsx)("div", {
      className: t ? E.effectDescriptionNoGradient : E.effectDescriptionBorderWithGradient,
      children: (0, r.jsxs)("div", {
        className: E.effectDescriptionContainer,
        children: [(0, r.jsx)(s.Text, {
          color: "header-primary",
          variant: "text-sm/semibold",
          className: E.effectName,
          children: (0, i.isEmpty)(I) ? Z : I
        }), null != d ? null : (0, r.jsx)(s.Text, {
          color: "text-default",
          variant: "text-sm/normal",
          className: E.effectDescription,
          children: N
        }), null != C && (0, r.jsx)(s.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          className: E.effectPurchasedAt,
          children: _.intl.format(_.t.Io7ozs, {
            days: C.days.toString()
          })
        }), null != d && (0, r.jsxs)(s.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          className: E.effectPurchasedAt,
          children: [_.intl.format(_.t.gW9R4O, {
            date: d.purchasedAt.toLocaleDateString(g, {
              month: "long",
              year: "numeric"
            })
          }), null != d.expiresAt && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)("br", {}), _.intl.format(_.t.eZSTa2, {
              date: d.expiresAt.toLocaleDateString(g, {
                minute: "numeric",
                hour: "numeric",
                day: "numeric",
                month: "long",
                year: "numeric"
              })
            })]
          })]
        }), b && (0, r.jsx)(s.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          className: E.effectPurchasedAt,
          children: _.intl.string(_.t.nKdAlJ)
        })]
      })
    }) : null
  },
  S = (e, t, n, r) => e ? _.intl.string(_.t["1UPza2"]) : t && n ? _.intl.string(_.t.hmyYKy) : t && !n ? r ? _.intl.string(_.t.meldu7) : _.intl.string(_.t.JtAKws) : _.intl.string(_.t.fEGjVV),
  Z = e => {
    var t, n, i;
    let {
      user: s,
      pendingProfileEffectRecord: o,
      canApplySelectedChange: c,
      product: a,
      purchase: f,
      guild: x
    } = e, {
      pendingGlobalName: P,
      pendingNickname: y,
      pendingPronouns: _,
      pendingBio: S,
      pendingBanner: Z,
      pendingAvatar: w,
      pendingAvatarDecoration: N,
      pendingThemeColors: D,
      pendingAccentColor: k
    } = (0, l.cj)([u.Z, v.Z], () => C({
      pendingNickname: true,
      pendingGlobalName: true,
      pendingAccentColor: true
    }, null != x ? u.Z.getAllPending() : v.Z.getAllPending())), A = O.ZP.isPremium(s), G = O.ZP.canUsePremiumProfileCustomization(s), T = (0, h.ZP)(s.id), R = !!(null == T ? true : T.getPreviewBio(S).value), B = {
      user: s,
      guild: x,
      pendingGlobalName: P,
      pendingNickname: y,
      pendingPronouns: _,
      pendingBio: b.dN.useSetting() && null != S ? d.ZP.parse(true, S).content : S,
      pendingBanner: Z,
      useLargeBanner: true,
      pendingAvatar: (0, m.SD)({
        userId: s.id,
        image: w
      }),
      pendingAvatarDecoration: N,
      pendingThemeColors: D,
      pendingAccentColor: k,
      pendingProfileEffectId: null != (t = null == o ? true : o.id) ? t : null,
      hideFakeActivity: R,
      canUsePremiumCustomization: G,
      onUpsellClick: j.Z,
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
      }), n)), false, (0, r.jsx)(I, {
        effectIsOwned: c,
        pendingProfileEffectRecord: o,
        product: a,
        purchase: f,
        userIsPremium: A
      })]
    })
  }