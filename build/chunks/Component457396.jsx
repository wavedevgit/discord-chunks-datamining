/** Chunk was on 1272 **/
/** chunk id: 457396, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  g: () => q,
  i: () => W
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
let W = e => {
    let {
      selected: t
    } = e, n = (0, a.e7)([b.default], () => b.default.getCurrentUser()), r = (0, a.e7)([E.Z], () => E.Z.getPremiumTypeSubscription()), i = (0, A.N)(), l = (0, x.Ng)(), s = (0, C.Vi)(), o = (0, G.V)(), c = (0, v.Qo)(n, r), u = (0, a.e7)([y.Z], () => y.Z.getCreatedAtOverride()), d = t || null != i || null != l || s || null != o || c, p = null != u ? u : null == n ? true : n.createdAt;
    return d || null != n && null != p && Date.now() - p.getTime() > 12096e5
  },
  q = e => {
    let t, n, y;
    var q, K, {
        selected: Q,
        nitroTabButtonRef: J,
        route: X,
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
    let et = (0, a.e7)([b.default], () => b.default.getCurrentUser()),
      en = (0, a.e7)([E.Z], () => E.Z.getPremiumTypeSubscription()),
      {
        variant: er,
        hasNitroTabBadgeOfferReminder: ei
      } = (0, T.ZP)("PremiumDiscountEndingNotice"),
      el = (0, v.Qo)(et, en),
      ea = (0, v.M5)(et, V.PremiumTypes.TIER_2),
      es = (0, l.JA)("nitro"),
      eo = (0, A.N)(),
      ec = (0, x.Ng)(),
      eu = (0, P.$)(),
      ed = (0, S.W)(),
      ep = (0, C.Vi)(),
      ef = (0, w.HI)({
        trialOffer: eo
      }),
      eh = (0, G.V)(),
      em = (0, w.eW)(),
      eg = (0, B.Kn)(),
      e_ = O.Z.getAlmostExpiringTrialOffers([V.Si.TIER_2]),
      eb = ei && e_.length > 0 && null != eo && null != eo.expires_at,
      eE = O.Z.getAlmostExpiringDiscountOffers([V.Si.TIER_2]),
      eO = ei && eE.length > 0 && null != ec && null != ec.expires_at,
      eI = null != eu && null != en && en.status === F.O0b.CANCELED,
      {
        fractionalState: ev,
        startsAt: ey,
        endsAt: eC
      } = (0, d.Z)({
        forceFetch: true
      }),
      [eS, eT] = (0, g.bf)(ev !== V.a$.NONE ? s.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
        showAfterTimestamp: ey.valueOf(),
        cooldownDurationMs: 0
      }),
      eN = (0, N.Z)({
        location: "NitroTabButton"
      }),
      ej = (null == eo ? true : eo.trial_id) === V.a7,
      eP = (0, p.YZ)("NitroTabButton"),
      ex = (0, _.bg)({
        location: "NitroTabButton"
      }),
      eA = [],
      eZ = [];
    (0, h.Kl)() && ((eO || eb && !ej) && eA.push(s.z.NITRO_TAB_BADGE_OFFER_REMINDER), ep && eA.push(s.z.BOGO_2025_NITRO_TAB_BADGE), eN && eA.push(s.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE), ed && eA.push(s.z.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2), eP && eA.push(s.z.CUSTOM_THEMES_PREMIUM_TAB_BADGE), ex && eA.push(s.z.GAME_WIDGETS_PREMIUM_TAB_BADGE));
    let [ew, eL] = (0, g.US)(eA, true, true);
    eI && eZ.push(s.z.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK);
    let [eD, eR] = (0, g.US)(eZ, true, true);
    if (i.useEffect(() => {
        true === Q && null != ew && eL(z.L.AUTO_DISMISS), true === Q && null != eD && eR(z.L.AUTO_DISMISS)
      }, [eL, Q, ew, eR, eD]), !W({
        selected: Q
      })) return null;
    let eM = () => {
      eS === s.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL && eT(z.L.TAKE_ACTION), I.default.track(F.rMx.NITRO_TAB_VISITED, {
        badge_decorator: y,
        has_premium: el
      }), null != ew && eL(z.L.USER_DISMISS)
    };
    if (ev === V.a$.NONE || ed || (y = 7, n = (0, r.jsx)(j.Z, {
        className: "",
        startsAt: ey,
        endsAt: eC,
        messageStyle: u.aj.SHORT_TIME,
        upperCase: true
      })), ep) n = (0, r.jsx)(Z.Z, {}), y = 0;
    else if (ef) {
      let e = (0, w.$q)();
      n = (0, r.jsx)(R._y, {
        isTabSelected: Q,
        badgeCopy: Y.intl.string(Y.t.OS9KPu),
        offerExpiresAt: true === e ? null == eo ? true : eo.expires_at : null
      }), y = 4
    } else ew === s.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE || ew === s.z.CUSTOM_THEMES_PREMIUM_TAB_BADGE || ew === s.z.GAME_WIDGETS_PREMIUM_TAB_BADGE ? (n = (0, r.jsx)(R._y, {
      isTabSelected: Q,
      badgeCopy: Y.intl.string(Y.t.y2b7CA),
      offerExpiresAt: null
    }), y = 2) : ed ? (n = (0, r.jsx)(U.S, {
      expiresAt: eC
    }), y = 4) : null != eh ? (n = (0, r.jsx)(H.Z, {
      copy: eh,
      showStars: false
    }), y = 1) : null != ec ? (n = er === T.tE.OFFER_COUNTDOWN && eO ? (0, r.jsx)(M.a, {
      discountOffer: ec
    }) : (0, r.jsx)(R.GN, {
      userDiscount: ec,
      isTabSelected: Q,
      includesAmountOff: false,
      shouldShowOfferReminder: eO
    }), y = 3) : null == eo || ej ? eg ? (n = (0, r.jsx)(k.l, {
      isSelected: Q,
      onSelect: () => (0, m.Q3)(s.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, {
        dismissAction: z.L.TAKE_ACTION
      })
    }), y = 6) : eI && (n = (0, r.jsx)(D.Z, {
      isSelected: Q,
      discountOffer: eu
    }), y = 8) : (n = er === T.tE.OFFER_COUNTDOWN && eb ? (0, r.jsx)(M.F, {
      trialOffer: eo
    }) : (0, r.jsx)(R.$H, {
      trialOffer: eo,
      isTabSelected: Q,
      shouldShowOfferReminder: eb
    }), y = 4);
    em && (n = (0, r.jsx)(R._y, {
      isTabSelected: Q,
      badgeCopy: Y.intl.string(Y.t.RDE0Sc),
      offerExpiresAt: null
    }), y = 4, eM = () => {
      I.default.track(F.rMx.NITRO_TAB_VISITED, {
        badge_decorator: y,
        has_premium: el
      }), (0, w.ZL)()
    });
    let ek = (0, r.jsx)(c.Qj, (q = function(e) {
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
      listItemRef: J,
      selected: Q,
      route: X,
      icon: o.SrA,
      text: (0, r.jsx)(f.Z, {
        children: ea ? Y.intl.string(Y.t["4gwVVn"]) : Y.intl.string(Y.t.Ipxkog)
      }),
      locationState: $,
      onClick: eM
    }, ee, es), K = K = {
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
      children: ek
    }) : eI && eD === s.z.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK && 8 === y ? (0, r.jsx)(L.Z, {
      targetElementRef: J,
      discountOffer: eu,
      premiumSubscription: en,
      dismissCoachmark: eR,
      children: ek
    }) : ek
  }