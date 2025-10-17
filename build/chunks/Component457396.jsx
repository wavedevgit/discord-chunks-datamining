/** Chunk was on 1272 **/
/** chunk id: 457396, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  g: () => q,
  i: () => Y
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
  Chunk172416 = require("./172416.js"),
  Chunk594174 = require("./594174.js"),
  Chunk78839 = require("./78839.js"),
  Chunk431 = require("./431.js"),
  Chunk626135 = require("./626135.js"),
  Chunk74538 = require("./74538.js"),
  Chunk502087 = require("./502087.js"),
  Chunk367074 = require("./367074.js"),
  Chunk695349 = require("./695349.js"),
  Chunk931118 = require("./931118.js"),
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
  Chunk467460 = require("./467460.jsx"),
  Chunk474486 = require("./474486.jsx"),
  Chunk497334 = require("./497334.jsx"),
  Chunk119850 = require("./119850.js"),
  Chunk938736 = require("./938736.js"),
  Chunk227140 = require("./227140.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx");
let Y = e => {
    let {
      selected: t
    } = e, n = (0, a.e7)([_.default], () => _.default.getCurrentUser()), r = (0, a.e7)([E.Z], () => E.Z.getPremiumTypeSubscription()), i = (0, A.N)(), l = (0, x.Ng)(), o = (0, C.Vi)(), s = (0, G.V)(), c = (0, y.Qo)(n, r), u = (0, a.e7)([I.Z], () => I.Z.getCreatedAtOverride()), d = t || null != i || null != l || o || null != s || c, p = null != u ? u : null == n ? true : n.createdAt;
    return d || null != n && null != p && Date.now() - p.getTime() > 12096e5
  },
  q = e => {
    let t, n, I;
    var q, K, {
        selected: Q,
        nitroTabButtonRef: X,
        route: J,
        locationState: $
      } = e,
      ee = function(e, t) {
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
    let et = (0, a.e7)([_.default], () => _.default.getCurrentUser()),
      en = (0, a.e7)([E.Z], () => E.Z.getPremiumTypeSubscription()),
      {
        variant: er
      } = (0, N.ZP)("PremiumDiscountEndingNotice"),
      ei = (0, y.Qo)(et, en),
      el = (0, y.M5)(et, V.PremiumTypes.TIER_2),
      ea = (0, l.JA)("nitro"),
      eo = (0, A.N)(),
      es = (0, x.Ng)(),
      ec = (0, j.$)(),
      eu = (0, S.W)(),
      ed = (0, C.Vi)(),
      ep = (0, w.HI)({
        trialOffer: eo
      }),
      ef = (0, G.V)(),
      eh = (0, w.eW)(),
      eg = (0, B.Kn)(),
      em = O.Z.getAlmostExpiringTrialOffers([V.Si.TIER_2]).length > 0 && null != eo && null != eo.expires_at,
      eb = O.Z.getAlmostExpiringDiscountOffers([V.Si.TIER_2]).length > 0 && null != es && null != es.expires_at,
      e_ = null != ec && null != en && en.status === F.O0b.CANCELED,
      {
        fractionalState: eE,
        startsAt: eO,
        endsAt: ev
      } = (0, d.Z)({
        forceFetch: true
      }),
      [ey, eI] = (0, m.bf)(eE !== V.a$.NONE ? o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
        showAfterTimestamp: eO.valueOf(),
        cooldownDurationMs: 0
      }),
      eC = (0, T.Z)({
        location: "NitroTabButton"
      }),
      eS = (null == eo ? true : eo.trial_id) === V.a7,
      eN = (0, p.YZ)("NitroTabButton"),
      eT = (0, b.bg)({
        location: "NitroTabButton"
      }),
      eP = [],
      ej = [];
    (0, h.Kl)() && (ed && eP.push(o.z.BOGO_2025_NITRO_TAB_BADGE), eC && eP.push(o.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE), eu && eP.push(o.z.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2), eN && eP.push(o.z.CUSTOM_THEMES_PREMIUM_TAB_BADGE), eT && eP.push(o.z.GAME_WIDGETS_PREMIUM_TAB_BADGE));
    let [ex, eA] = (0, m.US)(eP, true, true);
    e_ && ej.push(o.z.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK);
    let [eZ, ew] = (0, m.US)(ej, true, true);
    if (i.useEffect(() => {
        true === Q && null != ex && eA(z.L.AUTO_DISMISS), true === Q && null != eZ && ew(z.L.AUTO_DISMISS)
      }, [eA, Q, ex, ew, eZ]), !Y({
        selected: Q
      })) return null;
    let eL = () => {
      ey === o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL && eI(z.L.TAKE_ACTION), v.default.track(F.rMx.NITRO_TAB_VISITED, {
        badge_decorator: I,
        has_premium: ei
      }), null != ex && eA(z.L.USER_DISMISS)
    };
    if (eE === V.a$.NONE || eu || (I = 7, n = (0, r.jsx)(P.Z, {
        className: "",
        startsAt: eO,
        endsAt: ev,
        messageStyle: u.aj.SHORT_TIME,
        upperCase: true
      })), ed) n = (0, r.jsx)(Z.Z, {}), I = 0;
    else if (ep) {
      let e = (0, w.$q)();
      n = (0, r.jsx)(D._y, {
        isTabSelected: Q,
        badgeCopy: W.intl.string(W.t.OS9KPj),
        offerExpiresAt: true === e ? null == eo ? true : eo.expires_at : null
      }), I = 4
    } else ex === o.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE || ex === o.z.CUSTOM_THEMES_PREMIUM_TAB_BADGE || ex === o.z.GAME_WIDGETS_PREMIUM_TAB_BADGE ? (n = (0, r.jsx)(D._y, {
      isTabSelected: Q,
      badgeCopy: W.intl.string(W.t.y2b7CA),
      offerExpiresAt: null
    }), I = 2) : eu ? (n = (0, r.jsx)(U.S, {
      expiresAt: ev
    }), I = 4) : null != ef ? (n = (0, r.jsx)(H.Z, {
      copy: ef,
      showStars: false
    }), I = 1) : null != es ? (n = er === N.tE.OFFER_COUNTDOWN && eb ? (0, r.jsx)(M.a, {
      discountOffer: es
    }) : (0, r.jsx)(D.GN, {
      userDiscount: es,
      isTabSelected: Q,
      includesAmountOff: false
    }), I = 3) : null == eo || eS ? eg ? (n = (0, r.jsx)(k.l, {
      isSelected: Q,
      onSelect: () => (0, g.Q3)(o.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, {
        dismissAction: z.L.TAKE_ACTION
      })
    }), I = 6) : e_ && (n = (0, r.jsx)(R.Z, {
      isSelected: Q,
      discountOffer: ec
    }), I = 8) : (n = er === N.tE.OFFER_COUNTDOWN && em ? (0, r.jsx)(M.F, {
      trialOffer: eo
    }) : (0, r.jsx)(D.$H, {
      trialOffer: eo,
      isTabSelected: Q
    }), I = 4);
    eh && (n = (0, r.jsx)(D._y, {
      isTabSelected: Q,
      badgeCopy: W.intl.string(W.t.RDE0SU),
      offerExpiresAt: null
    }), I = 4, eL = () => {
      v.default.track(F.rMx.NITRO_TAB_VISITED, {
        badge_decorator: I,
        has_premium: ei
      }), (0, w.ZL)()
    });
    let eR = (0, r.jsx)(c.Qj, (q = function(e) {
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
      listItemRef: X,
      selected: Q,
      route: J,
      icon: s.SrA,
      text: (0, r.jsx)(f.Z, {
        children: el ? W.intl.string(W.t["4gwVVl"]) : W.intl.string(W.t.Ipxkoq)
      }),
      locationState: $,
      onClick: eL
    }, ee, ea), K = K = {
      className: t,
      children: n
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(q, Object.getOwnPropertyDescriptors(K)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(K)).forEach(function(e) {
      Object.defineProperty(q, e, Object.getOwnPropertyDescriptor(K, e))
    }), q));
    return eg ? (0, r.jsx)(k.C, {
      children: eR
    }) : e_ && eZ === o.z.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK && 8 === I ? (0, r.jsx)(L.Z, {
      targetElementRef: X,
      discountOffer: ec,
      premiumSubscription: en,
      dismissCoachmark: ew,
      children: eR
    }) : eR
  }