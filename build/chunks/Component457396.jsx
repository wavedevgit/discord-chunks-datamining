/** Chunk was on 1272 **/
/** chunk id: 457396, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  g: () => J,
  i: () => Q
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
let Q = e => {
    let {
      selected: t
    } = e, n = (0, s.e7)([E.default], () => E.default.getCurrentUser()), r = (0, s.e7)([_.Z], () => _.Z.getPremiumTypeSubscription()), i = (0, A.N)(), l = (0, x.N)(), a = (0, C.Vi)(), o = (0, V.V)(), c = (0, y.Qo)(n, r), u = (0, s.e7)([I.Z], () => I.Z.getCreatedAtOverride()), d = t || null != i || null != l || a || null != o || c, p = null != u ? u : null == n ? true : n.createdAt;
    return d || null != n && null != p && Date.now() - p.getTime() > 12096e5
  },
  J = e => {
    let t, n, I;
    var J, X, $, {
        selected: ee,
        nitroTabButtonRef: et,
        route: en,
        locationState: er
      } = e,
      ei = function(e, t) {
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
    let el = (0, s.e7)([E.default], () => E.default.getCurrentUser()),
      ea = (0, s.e7)([_.Z], () => _.Z.getPremiumTypeSubscription()),
      {
        variant: es,
        hasNitroTabBadgeOfferReminder: eo
      } = (0, T.ZP)("PremiumDiscountEndingNotice"),
      ec = (0, y.Qo)(el, ea),
      eu = (0, y.M5)(el, Y.PremiumTypes.TIER_2),
      ed = (0, l.JA)("nitro"),
      ep = (0, A.N)(),
      ef = (0, x.N)(),
      eg = (0, P.$)(),
      eh = (0, S.W)(),
      em = (0, C.Vi)(),
      eb = (0, D.HI)({
        trialOffer: ep
      }),
      eE = (0, V.V)(),
      e_ = (0, D.eW)(),
      eO = (0, R._h)(),
      ev = (0, F.Kn)(),
      ey = O.Z.getAlmostExpiringTrialOffers([Y.Si.TIER_2]),
      eI = eo && ey.length > 0 && null != ep && null != ep.expires_at,
      eC = O.Z.getAlmostExpiringDiscountOffers([Y.Si.TIER_2]),
      eS = eo && eC.length > 0 && null != ef && null != ef.expires_at,
      eT = null != eg && null != ea && ea.status === W.O0b.CANCELED,
      {
        fractionalState: eN,
        startsAt: ej,
        endsAt: eP
      } = (0, f.Z)({
        forceFetch: true
      }),
      [ex, eA] = (0, m.bf)(eN !== Y.a$.NONE ? o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
        showAfterTimestamp: ej.valueOf(),
        cooldownDurationMs: 0
      }),
      eZ = (0, N.Z)({
        location: "NitroTabButton"
      }),
      ew = (null == ep ? true : ep.trial_id) === Y.a7,
      eL = (0, b.bg)({
        location: "NitroTabButton"
      }),
      eR = [],
      eD = [];
    (0, g.Kl)() && ((eS || eI && !ew) && eR.push(o.z.NITRO_TAB_BADGE_OFFER_REMINDER), eO && eR.push(o.z.RECURRING_3P_PROMOTION_POPOVER), em && eR.push(o.z.BOGO_2025_NITRO_TAB_BADGE), eZ && eR.push(o.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE), eh && eR.push(o.z.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2), eL && eR.push(o.z.GAME_WIDGETS_PREMIUM_TAB_BADGE));
    let [eM, ek] = (0, m.US)(eR, true, true);
    eT && eD.push(o.z.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK);
    let [eU, eG] = (0, m.US)(eD, true, true), eB = (0, Z.H)(a.I.PREMIUM_TAB), [eH, eV] = (0, m.TE)(null != eB && "premiumTab" === eB.properties.properties.oneofKind ? o.z.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE : null, null != ($ = null == eB ? true : eB.id) ? $ : "", true, true);
    if (i.useEffect(() => {
        true === ee && null != eM && ek(q.L.AUTO_DISMISS), true === ee && null != eU && eG(q.L.AUTO_DISMISS), true === ee && null != eH && eV(q.L.AUTO_DISMISS)
      }, [ek, ee, eM, eG, eU, eH, eV]), !Q({
        selected: ee
      })) return null;
    let eF = () => {
      ex === o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL && eA(q.L.TAKE_ACTION), v.default.track(W.rMx.NITRO_TAB_VISITED, {
        badge_decorator: I,
        has_premium: ec
      }), null != eM && ek(q.L.USER_DISMISS), null != eH && eV(q.L.USER_DISMISS)
    };
    if (eN === Y.a$.NONE || eh || (I = 7, n = (0, r.jsx)(j.Z, {
        className: "",
        startsAt: ej,
        endsAt: eP,
        messageStyle: p.aj.SHORT_TIME,
        upperCase: true
      })), null != eB && "premiumTab" === eB.properties.properties.oneofKind) n = (0, r.jsx)(L.Z, {
      componentId: eB.id,
      badgeCopy: eB.properties.properties.premiumTab.badgeLabel,
      acknowledgedBadgeCopy: eB.properties.properties.premiumTab.acknowledgedBadgeLabel,
      isDismissed: eH !== o.z.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE
    }), I = 9;
    else if (em) n = (0, r.jsx)(w.Z, {}), I = 0;
    else if (eb) {
      let e = (0, D.$q)();
      n = (0, r.jsx)(U._y, {
        isTabSelected: ee,
        badgeCopy: K.intl.string(K.t.OS9KPu),
        offerExpiresAt: true === e ? null == ep ? true : ep.expires_at : null
      }), I = 4
    } else eM === o.z.RECURRING_3P_PROMOTION_POPOVER ? (n = (0, r.jsx)(u.Cts, {
      type: "new",
      variant: "expressive"
    }), I = 4, eF = () => {
      v.default.track(W.rMx.NITRO_TAB_VISITED, {
        badge_decorator: I,
        has_premium: ec
      }), ek(q.L.USER_DISMISS)
    }) : eM === o.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE || eM === o.z.GAME_WIDGETS_PREMIUM_TAB_BADGE ? (n = (0, r.jsx)(U._y, {
      isTabSelected: ee,
      badgeCopy: K.intl.string(K.t.y2b7CA),
      offerExpiresAt: null
    }), I = 2) : eh ? (n = (0, r.jsx)(H.S, {
      expiresAt: eP
    }), I = 4) : null != eE ? (n = (0, r.jsx)(z.Z, {
      copy: eE,
      showStars: false
    }), I = 1) : null != ef ? (n = es === T.tE.OFFER_COUNTDOWN && eS ? (0, r.jsx)(G.a, {
      discountOffer: ef
    }) : (0, r.jsx)(U.GN, {
      userDiscount: ef,
      isTabSelected: ee,
      includesAmountOff: false,
      shouldShowOfferReminder: eS
    }), I = 3) : null == ep || ew ? ev ? (n = (0, r.jsx)(B.l, {
      isSelected: ee,
      onSelect: () => (0, h.Q3)(o.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, {
        dismissAction: q.L.TAKE_ACTION
      })
    }), I = 6) : eT && (n = (0, r.jsx)(k.Z, {
      isSelected: ee,
      discountOffer: eg
    }), I = 8) : (n = es === T.tE.OFFER_COUNTDOWN && eI ? (0, r.jsx)(G.F, {
      trialOffer: ep
    }) : (0, r.jsx)(U.$H, {
      trialOffer: ep,
      isTabSelected: ee,
      shouldShowOfferReminder: eI
    }), I = 4);
    e_ && (n = (0, r.jsx)(U._y, {
      isTabSelected: ee,
      badgeCopy: K.intl.string(K.t.RDE0Sc),
      offerExpiresAt: null
    }), I = 4, eF = () => {
      v.default.track(W.rMx.NITRO_TAB_VISITED, {
        badge_decorator: I,
        has_premium: ec
      }), (0, D.ZL)()
    });
    let ez = (0, r.jsx)(d.Qj, (J = function(e) {
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
      listItemRef: et,
      selected: ee,
      route: en,
      icon: u.SrA,
      text: (0, r.jsx)(c.Z, {
        children: eu ? K.intl.string(K.t["4gwVVn"]) : K.intl.string(K.t.Ipxkog)
      }),
      locationState: er,
      onClick: eF
    }, ei, ed), X = X = {
      className: t,
      children: n
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(J, Object.getOwnPropertyDescriptors(X)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(X)).forEach(function(e) {
      Object.defineProperty(J, e, Object.getOwnPropertyDescriptor(X, e))
    }), J));
    return ev ? (0, r.jsx)(B.C, {
      children: ez
    }) : eT && eU === o.z.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK && 8 === I ? (0, r.jsx)(M.Z, {
      targetElementRef: et,
      discountOffer: eg,
      premiumSubscription: ea,
      dismissCoachmark: eG,
      children: ez
    }) : ez
  }