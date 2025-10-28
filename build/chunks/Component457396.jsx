/** Chunk was on 1272 **/
/** chunk id: 457396, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  g: () => K,
  i: () => q
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk194983 = require("./194983.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk515753 = require("./515753.jsx"),
  Chunk927359 = require("./927359.js"),
  Chunk975298 = require("./975298.js"),
  Chunk866419 = require("./866419.js"),
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
  Chunk675957 = require("./675957.js"),
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
let q = e => {
    let {
      selected: t
    } = e, n = (0, a.e7)([b.default], () => b.default.getCurrentUser()), r = (0, a.e7)([E.Z], () => E.Z.getPremiumTypeSubscription()), i = (0, A.N)(), l = (0, x.Ng)(), s = (0, C.Vi)(), o = (0, B.V)(), c = (0, v.Qo)(n, r), u = (0, a.e7)([y.Z], () => y.Z.getCreatedAtOverride()), d = t || null != i || null != l || s || null != o || c, p = null != u ? u : null == n ? true : n.createdAt;
    return d || null != n && null != p && Date.now() - p.getTime() > 12096e5
  },
  K = e => {
    let t, n, y;
    var K, Q, {
        selected: J,
        nitroTabButtonRef: X,
        route: $,
        locationState: ee
      } = e,
      et = function(e, t) {
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
    let en = (0, a.e7)([b.default], () => b.default.getCurrentUser()),
      er = (0, a.e7)([E.Z], () => E.Z.getPremiumTypeSubscription()),
      {
        variant: ei,
        hasNitroTabBadgeOfferReminder: el
      } = (0, T.ZP)("PremiumDiscountEndingNotice"),
      ea = (0, v.Qo)(en, er),
      es = (0, v.M5)(en, F.PremiumTypes.TIER_2),
      eo = (0, l.JA)("nitro"),
      ec = (0, A.N)(),
      eu = (0, x.Ng)(),
      ed = (0, P.$)(),
      ep = (0, S.W)(),
      ef = (0, C.Vi)(),
      eh = (0, L.HI)({
        trialOffer: ec
      }),
      em = (0, B.V)(),
      eg = (0, L.eW)(),
      e_ = (0, w._h)(),
      eb = (0, H.Kn)(),
      eE = O.Z.getAlmostExpiringTrialOffers([F.Si.TIER_2]),
      eO = el && eE.length > 0 && null != ec && null != ec.expires_at,
      eI = O.Z.getAlmostExpiringDiscountOffers([F.Si.TIER_2]),
      ev = el && eI.length > 0 && null != eu && null != eu.expires_at,
      ey = null != ed && null != er && er.status === z.O0b.CANCELED,
      {
        fractionalState: eC,
        startsAt: eS,
        endsAt: eT
      } = (0, p.Z)({
        forceFetch: true
      }),
      [eN, ej] = (0, g.bf)(eC !== F.a$.NONE ? s.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
        showAfterTimestamp: eS.valueOf(),
        cooldownDurationMs: 0
      }),
      eP = (0, N.Z)({
        location: "NitroTabButton"
      }),
      ex = (null == ec ? true : ec.trial_id) === F.a7,
      eA = (0, f.YZ)("NitroTabButton"),
      eZ = (0, _.bg)({
        location: "NitroTabButton"
      }),
      ew = [],
      eL = [];
    (0, h.Kl)() && ((ev || eO && !ex) && ew.push(s.z.NITRO_TAB_BADGE_OFFER_REMINDER), e_ && ew.push(s.z.RECURRING_3P_PROMOTION_POPOVER), ef && ew.push(s.z.BOGO_2025_NITRO_TAB_BADGE), eP && ew.push(s.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE), ep && ew.push(s.z.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2), eA && ew.push(s.z.CUSTOM_THEMES_PREMIUM_TAB_BADGE), eZ && ew.push(s.z.GAME_WIDGETS_PREMIUM_TAB_BADGE));
    let [eR, eD] = (0, g.US)(ew, true, true);
    ey && eL.push(s.z.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK);
    let [eM, ek] = (0, g.US)(eL, true, true);
    if (i.useEffect(() => {
        true === J && null != eR && eD(Y.L.AUTO_DISMISS), true === J && null != eM && ek(Y.L.AUTO_DISMISS)
      }, [eD, J, eR, ek, eM]), !q({
        selected: J
      })) return null;
    let eU = () => {
      eN === s.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL && ej(Y.L.TAKE_ACTION), I.default.track(z.rMx.NITRO_TAB_VISITED, {
        badge_decorator: y,
        has_premium: ea
      }), null != eR && eD(Y.L.USER_DISMISS)
    };
    if (eC === F.a$.NONE || ep || (y = 7, n = (0, r.jsx)(j.Z, {
        className: "",
        startsAt: eS,
        endsAt: eT,
        messageStyle: d.aj.SHORT_TIME,
        upperCase: true
      })), ef) n = (0, r.jsx)(Z.Z, {}), y = 0;
    else if (eh) {
      let e = (0, L.$q)();
      n = (0, r.jsx)(M._y, {
        isTabSelected: J,
        badgeCopy: W.intl.string(W.t.OS9KPu),
        offerExpiresAt: true === e ? null == ec ? true : ec.expires_at : null
      }), y = 4
    } else eR === s.z.RECURRING_3P_PROMOTION_POPOVER ? (n = (0, r.jsx)(c.Cts, {
      type: "new",
      variant: "expressive"
    }), y = 4, eU = () => {
      I.default.track(z.rMx.NITRO_TAB_VISITED, {
        badge_decorator: y,
        has_premium: ea
      }), eD(Y.L.USER_DISMISS)
    }) : eR === s.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE || eR === s.z.CUSTOM_THEMES_PREMIUM_TAB_BADGE || eR === s.z.GAME_WIDGETS_PREMIUM_TAB_BADGE ? (n = (0, r.jsx)(M._y, {
      isTabSelected: J,
      badgeCopy: W.intl.string(W.t.y2b7CA),
      offerExpiresAt: null
    }), y = 2) : ep ? (n = (0, r.jsx)(G.S, {
      expiresAt: eT
    }), y = 4) : null != em ? (n = (0, r.jsx)(V.Z, {
      copy: em,
      showStars: false
    }), y = 1) : null != eu ? (n = ei === T.tE.OFFER_COUNTDOWN && ev ? (0, r.jsx)(k.a, {
      discountOffer: eu
    }) : (0, r.jsx)(M.GN, {
      userDiscount: eu,
      isTabSelected: J,
      includesAmountOff: false,
      shouldShowOfferReminder: ev
    }), y = 3) : null == ec || ex ? eb ? (n = (0, r.jsx)(U.l, {
      isSelected: J,
      onSelect: () => (0, m.Q3)(s.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, {
        dismissAction: Y.L.TAKE_ACTION
      })
    }), y = 6) : ey && (n = (0, r.jsx)(D.Z, {
      isSelected: J,
      discountOffer: ed
    }), y = 8) : (n = ei === T.tE.OFFER_COUNTDOWN && eO ? (0, r.jsx)(k.F, {
      trialOffer: ec
    }) : (0, r.jsx)(M.$H, {
      trialOffer: ec,
      isTabSelected: J,
      shouldShowOfferReminder: eO
    }), y = 4);
    eg && (n = (0, r.jsx)(M._y, {
      isTabSelected: J,
      badgeCopy: W.intl.string(W.t.RDE0Sc),
      offerExpiresAt: null
    }), y = 4, eU = () => {
      I.default.track(z.rMx.NITRO_TAB_VISITED, {
        badge_decorator: y,
        has_premium: ea
      }), (0, L.ZL)()
    });
    let eG = (0, r.jsx)(u.Qj, (K = function(e) {
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
      selected: J,
      route: $,
      icon: c.SrA,
      text: (0, r.jsx)(o.Z, {
        children: es ? W.intl.string(W.t["4gwVVn"]) : W.intl.string(W.t.Ipxkog)
      }),
      locationState: ee,
      onClick: eU
    }, et, eo), Q = Q = {
      className: t,
      children: n
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(K, Object.getOwnPropertyDescriptors(Q)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(Q)).forEach(function(e) {
      Object.defineProperty(K, e, Object.getOwnPropertyDescriptor(Q, e))
    }), K));
    return eb ? (0, r.jsx)(U.C, {
      children: eG
    }) : ey && eM === s.z.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK && 8 === y ? (0, r.jsx)(R.Z, {
      targetElementRef: X,
      discountOffer: ed,
      premiumSubscription: er,
      dismissCoachmark: ek,
      children: eG
    }) : eG
  }