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
      pendingProfileEffectRecord: t,
      product: n,
      purchase: u
    } = e, d = (0, l.e7)([P.default], () => P.default.getCurrentUser()), p = (0, l.e7)([s.Z], () => s.Z.getProduct(null == t ? true : t.skuId)), m = (0, l.e7)([x.default], () => x.default.locale), g = O.ZP.canUseCollectibles(d), b = (0, c.qS)(u), h = (0, c.G1)(n), j = !g && b, y = (null == u ? true : u.expiresAt) != null ? (0, v.TD)(Date.now(), u.expiresAt) : null, I = (0, a.ag)(u), S = (0, a.kd)(p), _ = (0, f.M)(!h || g), A = w(j, h, g, _), k = null == u || j;
    return null != t ? (0, r.jsx)("div", {
      className: k ? C.effectDescriptionBorderWithGradient : C.effectDescriptionNoGradient,
      children: (0, r.jsxs)("div", {
        className: C.effectDescriptionContainer,
        children: [(0, r.jsx)(o.Text, {
          color: "text-strong",
          variant: "text-sm/semibold",
          children: (0, i.isEmpty)(I) ? S : I
        }), k ? (0, r.jsx)(o.Text, {
          color: "text-default",
          variant: "text-sm/normal",
          children: A
        }) : (0, r.jsxs)(r.Fragment, {
          children: [null != y && (0, r.jsx)(o.Text, {
            variant: "text-xxs/normal",
            color: "text-muted",
            children: E.intl.format(E.t.Io7ozn, {
              days: y.days.toString()
            })
          }), (0, r.jsxs)(o.Text, {
            variant: "text-xxs/normal",
            color: "text-muted",
            children: [E.intl.format(E.t.gW9R4B, {
              date: u.purchasedAt.toLocaleDateString(m, {
                month: "long",
                year: "numeric"
              })
            }), null != u.expiresAt && (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)("br", {}), E.intl.format(E.t.eZSTa5, {
                date: u.expiresAt.toLocaleDateString(m, {
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
            children: E.intl.string(E.t.nKdAlO)
          })]
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
      product: s,
      purchase: c,
      guild: a
    } = e, {
      pendingGlobalName: f,
      pendingNickname: x,
      pendingPronouns: P,
      pendingBio: v,
      pendingBanner: E,
      pendingAvatar: w,
      pendingAvatarDecoration: _,
      pendingThemeColors: A,
      pendingAccentColor: k
    } = (0, l.cj)([u.Z, y.Z], () => I({
      pendingNickname: true,
      pendingGlobalName: true,
      pendingAccentColor: true
    }, null != a ? u.Z.getAllPending() : y.Z.getAllPending())), N = O.ZP.isPremium(i), Z = O.ZP.canUsePremiumProfileCustomization(i), T = (0, b.ZP)(i.id), D = !!(null == T ? true : T.getPreviewBio(v)), U = {
      user: i,
      guild: a,
      pendingGlobalName: f,
      pendingNickname: x,
      pendingPronouns: P,
      pendingBio: h.dN.useSetting() && null != v ? d.ZP.parse(true, v).content : v,
      pendingBanner: E,
      useLargeBanner: true,
      pendingAvatar: (0, m.SD)({
        userId: i.id,
        image: w
      }),
      pendingAvatarDecoration: _,
      pendingThemeColors: A,
      pendingAccentColor: k,
      pendingProfileEffect: null != o ? o : null,
      hideFakeActivity: D,
      canUsePremiumCustomization: Z,
      onUpsellClick: j.Z,
      onBannerChange: g.g_
    };
    return (0, r.jsxs)("div", {
      className: C.previewContainer,
      children: [(0, r.jsx)(p.Z, (t = I({}, U), n = n = {
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
        pendingProfileEffectRecord: o,
        product: s,
        purchase: c,
        userIsPremium: N
      })]
    })
  }