/** Chunk was on 1272 **/
/** chunk id: 457396, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  g: () => z,
  i: () => F
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk515753 = require("./515753.jsx"),
  Chunk927359 = require("./927359.js"),
  Chunk975298 = require("./975298.js"),
  Chunk866419 = require("./866419.js"),
  Chunk111028 = require("./111028.jsx"),
  Chunk211644 = require("./211644.js"),
  Chunk266454 = require("./266454.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk78839 = require("./78839.js"),
  Chunk626135 = require("./626135.js"),
  Chunk74538 = require("./74538.js"),
  Chunk502087 = require("./502087.js"),
  Chunk367074 = require("./367074.js"),
  Chunk695349 = require("./695349.js"),
  Chunk219673 = require("./219673.js"),
  Chunk963590 = require("./963590.js"),
  Chunk767870 = require("./767870.jsx"),
  Chunk331972 = require("./331972.js"),
  Chunk104494 = require("./104494.js"),
  Chunk639119 = require("./639119.js"),
  Chunk655525 = require("./655525.jsx"),
  Chunk93237 = require("./93237.js"),
  Chunk484605 = require("./484605.jsx"),
  Chunk961892 = require("./961892.jsx"),
  Chunk924540 = require("./924540.jsx"),
  Chunk474486 = require("./474486.jsx"),
  Chunk497334 = require("./497334.jsx"),
  Chunk119850 = require("./119850.js"),
  Chunk938736 = require("./938736.js"),
  Chunk227140 = require("./227140.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx");
let F = e => {
    let {
      selected: t
    } = e, n = (0, a.e7)([b.default], () => b.default.getCurrentUser()), r = (0, a.e7)([_.Z], () => _.Z.getPremiumTypeSubscription()), i = (0, P.N)(), l = (0, j.Ng)(), o = (0, y.Vi)(), s = (0, k.V)(), c = (0, E.Qo)(n, r), u = (0, a.e7)([v.Z], () => v.Z.getCreatedAtOverride()), d = t || null != i || null != l || o || null != s || c, p = null != u ? u : null == n ? true : n.createdAt;
    return d || null != n && null != p && Date.now() - p.getTime() > 12096e5
  },
  z = e => {
    let t, n, v;
    var z, W, {
        selected: q,
        nitroTabButtonRef: Y,
        route: K,
        locationState: Q
      } = e,
      X = function(e, t) {
        if (null == e) return {};
        var n, r, i = function(e, t) {
          if (null == e) return {};
          var n, r, i = {},
            l = Object.keys(e);
          for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
          return i
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
        }
        return i
      }(e, ["selected", "nitroTabButtonRef", "route", "locationState"]);
    let J = (0, a.e7)([b.default], () => b.default.getCurrentUser()),
      $ = (0, a.e7)([_.Z], () => _.Z.getPremiumTypeSubscription()),
      ee = (0, E.Qo)(J, $),
      et = (0, E.M5)(J, G.p9.TIER_2),
      {
        enabled: en
      } = S.b.useConfig({
        location: "NitroTabButton"
      }),
      er = (0, l.JA)("nitro"),
      ei = (0, P.N)(),
      el = (0, j.Ng)(),
      ea = (0, N.$)("nitro tab"),
      eo = (0, I.W)(),
      es = (0, y.Vi)(),
      ec = (0, A.HI)({
        trialOffer: ei
      }),
      eu = (0, k.V)(),
      ed = (0, A.eW)(),
      ep = (0, M.Kn)(),
      ef = en && null != ea && null != $ && $.status === B.O0b.CANCELED,
      {
        fractionalState: eh,
        startsAt: eg,
        endsAt: em
      } = (0, d.Z)({
        forceFetch: true
      }),
      [eb, e_] = (0, m.bf)(eh !== G.a$.NONE ? o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
        showAfterTimestamp: eg.valueOf(),
        cooldownDurationMs: 0
      }),
      eO = (0, C.Z)({
        location: "NitroTabButton"
      }),
      eE = (null == ei ? true : ei.trial_id) === G.a7,
      ev = (0, p.YZ)("NitroTabButton"),
      ey = [],
      eI = [];
    (0, h.Kl)() && (es && ey.push(o.z.BOGO_2025_NITRO_TAB_BADGE), eO && ey.push(o.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE), eo && ey.push(o.z.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2), ev && ey.push(o.z.CUSTOM_THEMES_PREMIUM_TAB_BADGE));
    let [eS, eC] = (0, m.US)(ey, true, true);
    ef && eI.push(o.z.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK);
    let [eT, eN] = (0, m.US)(eI, true, true);
    if (i.useEffect(() => {
        true === q && null != eS && eC(H.L.AUTO_DISMISS), true === q && null != eT && eN(H.L.AUTO_DISMISS)
      }, [eC, q, eS, eN, eT]), !F({
        selected: q
      })) return null;
    let ej = () => {
      eb === o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL && e_(H.L.TAKE_ACTION), O.default.track(B.rMx.NITRO_TAB_VISITED, {
        badge_decorator: v,
        has_premium: ee
      }), null != eS && eC(H.L.USER_DISMISS)
    };
    if (eh === G.a$.NONE || eo || (v = 7, n = (0, r.jsx)(T.Z, {
        className: "",
        startsAt: eg,
        endsAt: em,
        messageStyle: u.aj.SHORT_TIME,
        upperCase: true
      })), es) n = (0, r.jsx)(x.Z, {}), v = 0;
    else if (ec) {
      let e = (0, A.$q)();
      n = (0, r.jsx)(L._y, {
        isTabSelected: q,
        badgeCopy: V.intl.string(V.t.OS9KPj),
        offerExpiresAt: true === e ? null == ei ? true : ei.expires_at : null
      }), v = 4
    } else eS === o.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE || eS === o.z.CUSTOM_THEMES_PREMIUM_TAB_BADGE ? (n = (0, r.jsx)(L._y, {
      isTabSelected: q,
      badgeCopy: V.intl.string(V.t.y2b7CA),
      offerExpiresAt: null
    }), v = 2) : eo ? (n = (0, r.jsx)(D.S, {
      expiresAt: em
    }), v = 4) : null != eu ? (n = (0, r.jsx)(U.Z, {
      copy: eu,
      showStars: false
    }), v = 1) : null != el ? (n = (0, r.jsx)(L.GN, {
      userDiscount: el,
      isTabSelected: q,
      includesAmountOff: false
    }), v = 3) : null == ei || eE ? ep ? (n = (0, r.jsx)(R.l, {
      isSelected: q,
      onSelect: () => (0, g.Q3)(o.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, {
        dismissAction: H.L.TAKE_ACTION
      })
    }), v = 6) : ef && (n = (0, r.jsx)(w.Z, {
      isSelected: q,
      discountOffer: ea
    }), v = 8) : (n = (0, r.jsx)(L.$H, {
      trialOffer: ei,
      isTabSelected: q
    }), v = 4);
    ed && (n = (0, r.jsx)(L._y, {
      isTabSelected: q,
      badgeCopy: V.intl.string(V.t.RDE0SU),
      offerExpiresAt: null
    }), v = 4, ej = () => {
      O.default.track(B.rMx.NITRO_TAB_VISITED, {
        badge_decorator: v,
        has_premium: ee
      }), (0, A.ZL)()
    });
    let eP = (0, r.jsx)(c.Qj, (z = function(e) {
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
    }({
      listItemRef: Y,
      selected: q,
      route: K,
      icon: s.SrA,
      text: (0, r.jsx)(f.Z, {
        children: et ? V.intl.string(V.t["4gwVVl"]) : V.intl.string(V.t.Ipxkoq)
      }),
      locationState: Q,
      onClick: ej
    }, X, er), W = W = {
      className: t,
      children: n
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(z, Object.getOwnPropertyDescriptors(W)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(W)).forEach(function(e) {
      Object.defineProperty(z, e, Object.getOwnPropertyDescriptor(W, e))
    }), z));
    return ep ? (0, r.jsx)(R.C, {
      children: eP
    }) : ef && eT === o.z.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK && 8 === v ? (0, r.jsx)(Z.Z, {
      targetElementRef: Y,
      discountOffer: ea,
      premiumSubscription: $,
      dismissCoachmark: eN,
      children: eP
    }) : eP
  }