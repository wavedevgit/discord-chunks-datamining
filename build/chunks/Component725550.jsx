/** Chunk was on 92818 **/
/** chunk id: 725550, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => S
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk735438 = require("./735438.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk590180 = require("./590180.js"),
  Chunk993408 = require("./993408.js"),
  Chunk764999 = require("./764999.js"),
  Chunk833336 = require("./833336.js"),
  Chunk451909 = require("./451909.js"),
  Chunk702211 = require("./702211.js"),
  Chunk287070 = require("./287070.jsx"),
  Chunk101058 = require("./101058.js"),
  Chunk207803 = require("./207803.js"),
  Chunk950191 = require("./950191.js"),
  Chunk814390 = require("./814390.js"),
  Chunk773669 = require("./773669.js"),
  Chunk606532 = require("./606532.jsx"),
  Chunk752319 = require("./752319.js"),
  Chunk287809 = require("./287809.js"),
  Chunk405269 = require("./405269.js"),
  Chunk927578 = require("./927578.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk645052 = require("./645052.js");

function _(e) {
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
let C = e => {
    let {
      pendingProfileEffectRecord: t,
      product: n,
      purchase: u
    } = e, d = (0, i.bG)([O.default], () => O.default.getCurrentUser()), f = (0, i.bG)([c.A], () => c.A.getProduct(null == t ? true : t.skuId)), m = (0, i.bG)([x.default], () => x.default.locale), b = v.Ay.canUseCollectibles(d), g = (0, o.gA)(u), y = (0, o.G0)(n), h = !b && g, j = (null == u ? true : u.expiresAt) != null ? (0, A.Tf)(Date.now(), u.expiresAt) : null, _ = (0, a.Tk)(u), C = (0, a.o7)(f), S = (0, p.b)(!y || b), w = I(h, y, b, S), k = null == u || h;
    return null != t ? (0, r.jsx)("div", {
      className: k ? E.Mf : E.zf,
      children: (0, r.jsxs)("div", {
        className: E.RQ,
        children: [(0, r.jsx)(s.Text, {
          color: "text-strong",
          variant: "text-sm/semibold",
          children: (0, l.isEmpty)(_) ? C : _
        }), k ? (0, r.jsx)(s.Text, {
          color: "text-default",
          variant: "text-sm/normal",
          children: w
        }) : (0, r.jsxs)(r.Fragment, {
          children: [null != j && (0, r.jsx)(s.Text, {
            variant: "text-xxs/normal",
            color: "text-muted",
            children: P.intl.format(P.t.Io7ozn, {
              days: j.days.toString()
            })
          }), (0, r.jsxs)(s.Text, {
            variant: "text-xxs/normal",
            color: "text-muted",
            children: [P.intl.format(P.t.gW9R4B, {
              date: u.purchasedAt.toLocaleDateString(m, {
                month: "long",
                year: "numeric"
              })
            }), null != u.expiresAt && (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)("br", {}), P.intl.format(P.t.eZSTa5, {
                date: u.expiresAt.toLocaleDateString(m, {
                  minute: "numeric",
                  hour: "numeric",
                  day: "numeric",
                  month: "long",
                  year: "numeric"
                })
              })]
            })]
          }), g && (0, r.jsx)(s.Text, {
            variant: "text-xxs/normal",
            color: "text-muted",
            children: P.intl.string(P.t.nKdAlO)
          })]
        })]
      })
    }) : null
  },
  I = (e, t, n, r) => e ? P.intl.string(P.t["1UPza/"]) : t && n ? P.intl.string(P.t.hmyYK8) : t && !n ? r ? P.intl.string(P.t.melduy) : P.intl.string(P.t.JtAKwp) : P.intl.string(P.t.fEGjVQ),
  S = e => {
    var t, n;
    let {
      user: l,
      pendingProfileEffectRecord: s,
      product: c,
      purchase: o,
      guild: a
    } = e, {
      pendingGlobalName: p,
      pendingNickname: x,
      pendingPronouns: O,
      pendingBio: A,
      pendingBanner: P,
      pendingAvatar: I,
      pendingAvatarDecoration: S,
      pendingThemeColors: w,
      pendingAccentColor: k
    } = (0, i.cf)([u.A, j.A], () => _({
      pendingNickname: true,
      pendingGlobalName: true,
      pendingAccentColor: true
    }, null != a ? u.A.getAllPending() : j.A.getAllPending())), N = v.Ay.isPremium(l), T = v.Ay.canUsePremiumProfileCustomization(l), R = (0, g.Ay)(l.id), L = !!(null == R ? true : R.getPreviewBio(A)), U = {
      user: l,
      guild: a,
      pendingGlobalName: p,
      pendingNickname: x,
      pendingPronouns: O,
      pendingBio: (0, y.A)() && null != A ? d.Ay.parse(true, A).content : A,
      pendingBanner: P,
      useLargeBanner: true,
      pendingAvatar: (0, m.V7)({
        userId: l.id,
        image: I
      }),
      pendingAvatarDecoration: S,
      pendingThemeColors: w,
      pendingAccentColor: k,
      pendingProfileEffect: null != s ? s : null,
      hideFakeActivity: L,
      canUsePremiumCustomization: T,
      onUpsellClick: h.A,
      onBannerChange: b.Iz
    };
    return (0, r.jsxs)("div", {
      className: E.i1,
      children: [(0, r.jsx)(f.A, (t = _({}, U), n = n = {
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
      }), t)), false, (0, r.jsx)(C, {
        pendingProfileEffectRecord: s,
        product: c,
        purchase: o,
        userIsPremium: N
      })]
    })
  }