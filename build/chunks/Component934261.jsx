/** Chunk was on 55183 **/
/** chunk id: 934261, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
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

function E(e) {
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
let w = e => {
    let {
      effectIsOwned: t,
      pendingProfileEffectRecord: n,
      product: u,
      purchase: d
    } = e, p = (0, l.e7)([v.default], () => v.default.getCurrentUser()), m = (0, l.e7)([s.Z], () => s.Z.getProduct(null == n ? true : n.skuId)), g = (0, l.e7)([x.default], () => x.default.locale), h = O.ZP.canUseCollectibles(p), b = (0, c.qS)(d), j = (0, c.G1)(u), y = !h && b, E = (null == d ? true : d.expiresAt) != null ? (0, P.TD)(Date.now(), d.expiresAt) : null, w = (0, a.ag)(d), S = (0, a.kd)(m), Z = (0, f.M)(!j || h), N = I(y, j, h, Z);
    return null != n ? (0, r.jsx)("div", {
      className: t ? C.effectDescriptionNoGradient : C.effectDescriptionBorderWithGradient,
      children: (0, r.jsxs)("div", {
        className: C.effectDescriptionContainer,
        children: [(0, r.jsx)(o.Text, {
          color: "header-primary",
          variant: "text-sm/semibold",
          className: C.effectName,
          children: (0, i.isEmpty)(w) ? S : w
        }), null != d ? null : (0, r.jsx)(o.Text, {
          color: "text-default",
          variant: "text-sm/normal",
          className: C.effectDescription,
          children: N
        }), null != E && (0, r.jsx)(o.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          className: C.effectPurchasedAt,
          children: _.intl.format(_.t.Io7ozs, {
            days: E.days.toString()
          })
        }), null != d && (0, r.jsxs)(o.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          className: C.effectPurchasedAt,
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
        }), b && (0, r.jsx)(o.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          className: C.effectPurchasedAt,
          children: _.intl.string(_.t.nKdAlJ)
        })]
      })
    }) : null
  },
  I = (e, t, n, r) => e ? _.intl.string(_.t["1UPza2"]) : t && n ? _.intl.string(_.t.hmyYKy) : t && !n ? r ? _.intl.string(_.t.meldu7) : _.intl.string(_.t.JtAKws) : _.intl.string(_.t.fEGjVV),
  S = e => {
    var t, n, i;
    let {
      user: o,
      pendingProfileEffectRecord: s,
      canApplySelectedChange: c,
      product: a,
      purchase: f,
      guild: x
    } = e, {
      pendingGlobalName: v,
      pendingNickname: P,
      pendingPronouns: _,
      pendingBio: I,
      pendingBanner: S,
      pendingAvatar: Z,
      pendingAvatarDecoration: N,
      pendingThemeColors: A,
      pendingAccentColor: k
    } = (0, l.cj)([u.Z, y.Z], () => E({
      pendingNickname: true,
      pendingGlobalName: true,
      pendingAccentColor: true
    }, null != x ? u.Z.getAllPending() : y.Z.getAllPending())), D = O.ZP.isPremium(o), T = O.ZP.canUsePremiumProfileCustomization(o), B = (0, h.ZP)(o.id), R = !!(null == B ? true : B.getPreviewBio(I).value), G = {
      user: o,
      guild: x,
      pendingGlobalName: v,
      pendingNickname: P,
      pendingPronouns: _,
      pendingBio: b.dN.useSetting() && null != I ? d.ZP.parse(true, I).content : I,
      pendingBanner: S,
      useLargeBanner: true,
      pendingAvatar: (0, m.SD)({
        userId: o.id,
        image: Z
      }),
      pendingAvatarDecoration: N,
      pendingThemeColors: A,
      pendingAccentColor: k,
      pendingProfileEffectId: null != (t = null == s ? true : s.id) ? t : null,
      hideFakeActivity: R,
      canUsePremiumCustomization: T,
      onUpsellClick: j.Z,
      onBannerChange: g.g_
    };
    return (0, r.jsxs)("div", {
      className: C.previewContainer,
      children: [(0, r.jsx)(p.Z, (n = E({}, G), i = i = {
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
      }), n)), false, (0, r.jsx)(w, {
        effectIsOwned: c,
        pendingProfileEffectRecord: s,
        product: a,
        purchase: f,
        userIsPremium: D
      })]
    })
  }