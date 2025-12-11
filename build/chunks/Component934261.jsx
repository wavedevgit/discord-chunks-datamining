/** Chunk was on 55183 **/
/** chunk id: 934261, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
  Chunk138532 = require("./138532.js");

function I(e) {
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
    } = e, p = (0, l.e7)([y.default], () => y.default.getCurrentUser()), m = (0, l.e7)([s.Z], () => s.Z.getProduct(null == n ? true : n.skuId)), g = (0, l.e7)([h.default], () => h.default.locale), b = v.ZP.canUseCollectibles(p), x = (0, c.qS)(d), j = (0, c.G1)(u), P = !b && x, I = (null == d ? true : d.expiresAt) != null ? (0, O.TD)(Date.now(), d.expiresAt) : null, S = (0, a.ag)(d), _ = (0, a.kd)(m), A = (0, f.M)(!j || b), N = w(P, j, b, A);
    return null != n ? (0, r.jsx)("div", {
      className: t ? C.effectDescriptionNoGradient : C.effectDescriptionBorderWithGradient,
      children: (0, r.jsxs)("div", {
        className: C.effectDescriptionContainer,
        children: [(0, r.jsx)(o.Text, {
          color: "text-strong",
          variant: "text-sm/semibold",
          className: C.effectName,
          children: (0, i.isEmpty)(S) ? _ : S
        }), null != d ? null : (0, r.jsx)(o.Text, {
          color: "text-default",
          variant: "text-sm/normal",
          className: C.effectDescription,
          children: N
        }), null != I && (0, r.jsx)(o.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          className: C.effectPurchasedAt,
          children: E.intl.format(E.t.Io7ozn, {
            days: I.days.toString()
          })
        }), null != d && (0, r.jsxs)(o.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          className: C.effectPurchasedAt,
          children: [E.intl.format(E.t.gW9R4B, {
            date: d.purchasedAt.toLocaleDateString(g, {
              month: "long",
              year: "numeric"
            })
          }), null != d.expiresAt && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)("br", {}), E.intl.format(E.t.eZSTa5, {
              date: d.expiresAt.toLocaleDateString(g, {
                minute: "numeric",
                hour: "numeric",
                day: "numeric",
                month: "long",
                year: "numeric"
              })
            })]
          })]
        }), x && (0, r.jsx)(o.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          className: C.effectPurchasedAt,
          children: E.intl.string(E.t.nKdAlO)
        })]
      })
    }) : null
  },
  w = (e, t, n, r) => e ? E.intl.string(E.t["1UPza/"]) : t && n ? E.intl.string(E.t.hmyYK8) : t && !n ? r ? E.intl.string(E.t.melduy) : E.intl.string(E.t.JtAKwp) : E.intl.string(E.t.fEGjVQ),
  _ = e => {
    var t, n;
    let {
      user: i,
      pendingProfileEffectRecord: o,
      canApplySelectedChange: s,
      product: c,
      purchase: a,
      guild: f
    } = e, {
      pendingGlobalName: h,
      pendingNickname: y,
      pendingPronouns: O,
      pendingBio: E,
      pendingBanner: w,
      pendingAvatar: _,
      pendingAvatarDecoration: A,
      pendingThemeColors: N,
      pendingAccentColor: k
    } = (0, l.cj)([u.Z, P.Z], () => I({
      pendingNickname: true,
      pendingGlobalName: true,
      pendingAccentColor: true
    }, null != f ? u.Z.getAllPending() : P.Z.getAllPending())), Z = v.ZP.isPremium(i), D = v.ZP.canUsePremiumProfileCustomization(i), T = (0, b.ZP)(i.id), U = !!(null == T ? true : T.getPreviewBio(E)), B = {
      user: i,
      guild: f,
      pendingGlobalName: h,
      pendingNickname: y,
      pendingPronouns: O,
      pendingBio: x.dN.useSetting() && null != E ? d.ZP.parse(true, E).content : E,
      pendingBanner: w,
      useLargeBanner: true,
      pendingAvatar: (0, m.SD)({
        userId: i.id,
        image: _
      }),
      pendingAvatarDecoration: A,
      pendingThemeColors: N,
      pendingAccentColor: k,
      pendingProfileEffect: null != o ? o : null,
      hideFakeActivity: U,
      canUsePremiumCustomization: D,
      onUpsellClick: j.Z,
      onBannerChange: g.g_
    };
    return (0, r.jsxs)("div", {
      className: C.previewContainer,
      children: [(0, r.jsx)(p.Z, (t = I({}, B), n = n = {
        disabledInputs: true,
        hideCustomStatus: true
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }), t)), false, (0, r.jsx)(S, {
        effectIsOwned: s,
        pendingProfileEffectRecord: o,
        product: c,
        purchase: a,
        userIsPremium: Z
      })]
    })
  }