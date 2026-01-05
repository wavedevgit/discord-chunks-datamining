/** Chunk was on 1272 **/
/** chunk id: 457396, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  g: () => $,
  i: () => X
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk79766 = require("./79766.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk194983 = require("./194983.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk515753 = require("./515753.jsx"),
  Chunk927359 = require("./927359.js"),
  Chunk975298 = require("./975298.js"),
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
  Chunk622909 = require("./622909.js"),
  Chunk639119 = require("./639119.js"),
  Chunk715130 = require("./715130.js"),
  Chunk260720 = require("./260720.js"),
  Chunk498920 = require("./498920.jsx"),
  Chunk655525 = require("./655525.jsx"),
  Chunk244989 = require("./244989.jsx"),
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
let X = e => {
    let {
      selected: t
    } = e, n = (0, o.e7)([_.default], () => _.default.getCurrentUser()), r = (0, o.e7)([E.Z], () => E.Z.getPremiumTypeSubscription()), i = (0, A.N)(), l = (0, x.N)(), a = (0, C.Vi)(), s = (0, z.V)(), c = (0, y.Qo)(n, r), u = (0, o.e7)([I.Z], () => I.Z.getCreatedAtOverride()), d = t || null != i || null != l || a || null != s || c, p = null != u ? u : null == n ? true : n.createdAt;
    return d || null != n && null != p && Date.now() - p.getTime() > 12096e5
  },
  $ = e => {
    let t, n, I;
    var $, ee, et, {
        selected: en,
        nitroTabButtonRef: er,
        route: ei,
        locationState: el
      } = e,
      ea = function(e, t) {
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
    let eo = (0, o.e7)([_.default], () => _.default.getCurrentUser()),
      es = (0, o.e7)([E.Z], () => E.Z.getPremiumTypeSubscription()),
      {
        variant: ec,
        hasNitroTabBadgeOfferReminder: eu
      } = (0, T.ZP)("PremiumDiscountEndingNotice"),
      ed = (0, y.Qo)(eo, es),
      ep = (0, y.M5)(eo, q.PremiumTypes.TIER_2),
      ef = (0, l.JA)("nitro"),
      eg = (0, A.N)(),
      em = (0, x.N)(),
      eh = (0, P.$)(),
      eb = (0, S.W)(),
      e_ = (0, C.Vi)(),
      eE = (0, k.HI)({
        trialOffer: eg
      }),
      eO = (0, w.QL)(),
      ev = (0, z.V)(),
      ey = (0, k.eW)(),
      eI = (0, M._h)(),
      eC = (0, Y.Kn)(),
      eS = O.Z.getAlmostExpiringTrialOffers([q.Si.TIER_2]),
      eT = eu && eS.length > 0 && null != eg && null != eg.expires_at,
      eN = O.Z.getAlmostExpiringDiscountOffers([q.Si.TIER_2]),
      ej = eu && eN.length > 0 && null != em && null != em.expires_at,
      eP = null != eh && null != es && es.status === K.O0b.CANCELED,
      {
        fractionalState: ex,
        startsAt: eA,
        endsAt: eZ
      } = (0, f.Z)({
        forceFetch: true
      }),
      [ew, eL] = (0, h.bf)(ex !== q.a$.NONE ? s.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
        showAfterTimestamp: eA.valueOf(),
        cooldownDurationMs: 0
      }),
      eR = (0, N.Z)({
        location: "NitroTabButton"
      }),
      eD = (null == eg ? true : eg.trial_id) === q.a7,
      eM = (0, b.bg)({
        location: "NitroTabButton"
      }),
      ek = [],
      eU = [];
    (0, g.Kl)() && ((ej || eT && !eD) && ek.push(s.z.NITRO_TAB_BADGE_OFFER_REMINDER), eI && ek.push(s.z.RECURRING_3P_PROMOTION_POPOVER), e_ && ek.push(s.z.BOGO_2025_NITRO_TAB_BADGE), eR && ek.push(s.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE), eb && ek.push(s.z.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2), eM && ek.push(s.z.GAME_WIDGETS_PREMIUM_TAB_BADGE));
    let [eG, eB] = (0, h.US)(ek, true, true);
    eP && eU.push(s.z.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK), eO && eU.push(s.z.PREMIUM_GROUP_POPOVER);
    let [eH, eV] = (0, h.US)(eU, true, true), eF = (0, Z.H)(a.I.PREMIUM_TAB), [ez, eY] = (0, h.TE)(null != eF && "premiumTab" === eF.properties.properties.oneofKind ? s.z.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE : null, null != (et = null == eF ? true : eF.id) ? et : "", true, true);
    if (i.useEffect(() => {
        true === en && null != eG && eB(Q.L.AUTO_DISMISS), true === en && null != eH && eV(Q.L.AUTO_DISMISS), true === en && null != ez && eY(Q.L.AUTO_DISMISS)
      }, [eB, en, eG, eV, eH, ez, eY]), !X({
        selected: en
      })) return null;
    let eW = () => {
      ew === s.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL && eL(Q.L.TAKE_ACTION), v.default.track(K.rMx.NITRO_TAB_VISITED, {
        badge_decorator: I,
        has_premium: ed
      }), null != eG && eB(Q.L.USER_DISMISS), null != ez && eY(Q.L.USER_DISMISS)
    };
    if (ex === q.a$.NONE || eb || (I = 7, n = (0, r.jsx)(j.Z, {
        className: "",
        startsAt: eA,
        endsAt: eZ,
        messageStyle: p.aj.SHORT_TIME,
        upperCase: true
      })), null != eF && "premiumTab" === eF.properties.properties.oneofKind) n = (0, r.jsx)(D.Z, {
      componentId: eF.id,
      badgeCopy: eF.properties.properties.premiumTab.badgeLabel,
      acknowledgedBadgeCopy: eF.properties.properties.premiumTab.acknowledgedBadgeLabel,
      isDismissed: ez !== s.z.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE
    }), I = 9;
    else if (e_) n = (0, r.jsx)(R.Z, {}), I = 0;
    else if (eE) {
      let e = (0, k.$q)();
      n = (0, r.jsx)(B._y, {
        isTabSelected: en,
        badgeCopy: J.intl.string(J.t.OS9KPu),
        offerExpiresAt: true === e ? null == eg ? true : eg.expires_at : null
      }), I = 4
    } else eG === s.z.RECURRING_3P_PROMOTION_POPOVER ? (n = (0, r.jsx)(u.Cts, {
      type: "new",
      variant: "expressive"
    }), I = 4, eW = () => {
      v.default.track(K.rMx.NITRO_TAB_VISITED, {
        badge_decorator: I,
        has_premium: ed
      }), eB(Q.L.USER_DISMISS)
    }) : eG === s.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE || eG === s.z.GAME_WIDGETS_PREMIUM_TAB_BADGE ? (n = (0, r.jsx)(B._y, {
      isTabSelected: en,
      badgeCopy: J.intl.string(J.t.y2b7CA),
      offerExpiresAt: null
    }), I = 2) : eb ? (n = (0, r.jsx)(F.S, {
      expiresAt: eZ
    }), I = 4) : null != ev ? (n = (0, r.jsx)(W.Z, {
      copy: ev,
      showStars: false
    }), I = 1) : null != em ? (n = ec === T.tE.OFFER_COUNTDOWN && ej ? (0, r.jsx)(H.a, {
      discountOffer: em
    }) : (0, r.jsx)(B.GN, {
      userDiscount: em,
      isTabSelected: en,
      includesAmountOff: false,
      shouldShowOfferReminder: ej
    }), I = 3) : null == eg || eD ? eC ? (n = (0, r.jsx)(V.l, {
      isSelected: en,
      onSelect: () => (0, m.Q3)(s.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, {
        dismissAction: Q.L.TAKE_ACTION
      })
    }), I = 6) : eP && (n = (0, r.jsx)(G.Z, {
      isSelected: en,
      discountOffer: eh
    }), I = 8) : (n = ec === T.tE.OFFER_COUNTDOWN && eT ? (0, r.jsx)(H.F, {
      trialOffer: eg
    }) : (0, r.jsx)(B.$H, {
      trialOffer: eg,
      isTabSelected: en,
      shouldShowOfferReminder: eT
    }), I = 4);
    ey && (n = (0, r.jsx)(B._y, {
      isTabSelected: en,
      badgeCopy: J.intl.string(J.t.RDE0Sc),
      offerExpiresAt: null
    }), I = 4, eW = () => {
      v.default.track(K.rMx.NITRO_TAB_VISITED, {
        badge_decorator: I,
        has_premium: ed
      }), (0, k.ZL)()
    });
    let eq = (0, r.jsx)(d.Qj, ($ = function(e) {
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
      listItemRef: er,
      selected: en,
      route: ei,
      icon: u.SrA,
      text: (0, r.jsx)(c.Z, {
        children: ep ? J.intl.string(J.t["4gwVVn"]) : J.intl.string(J.t.Ipxkog)
      }),
      locationState: el,
      onClick: eW
    }, ea, ef), ee = ee = {
      className: t,
      children: n
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties($, Object.getOwnPropertyDescriptors(ee)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(ee)).forEach(function(e) {
      Object.defineProperty($, e, Object.getOwnPropertyDescriptor(ee, e))
    }), $));
    return eC ? (0, r.jsx)(V.C, {
      children: eq
    }) : eP && eH === s.z.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK && 8 === I ? (0, r.jsx)(U.Z, {
      targetElementRef: er,
      discountOffer: eh,
      premiumSubscription: es,
      dismissCoachmark: eV,
      children: eq
    }) : eO && eH === s.z.PREMIUM_GROUP_POPOVER ? (0, r.jsx)(L.x, {
      targetElementRef: er,
      dismissPopover: eV,
      children: eq
    }) : eq
  }