/** Chunk was on 1272 **/
/** chunk id: 457396, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  g: () => X,
  i: () => J
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk79766 = require("./79766.js"),
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
  Chunk1844 = require("./1844.js"),
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
let J = e => {
    let {
      selected: t
    } = e, n = (0, s.e7)([E.default], () => E.default.getCurrentUser()), r = (0, s.e7)([O.Z], () => O.Z.getPremiumTypeSubscription()), i = (0, Z.N)(), l = (0, A.Ng)(), a = (0, S.Vi)(), o = (0, F.V)(), c = (0, I.Qo)(n, r), u = (0, s.e7)([C.Z], () => C.Z.getCreatedAtOverride()), d = t || null != i || null != l || a || null != o || c, p = null != u ? u : null == n ? true : n.createdAt;
    return d || null != n && null != p && Date.now() - p.getTime() > 12096e5
  },
  X = e => {
    let t, n, C;
    var X, $, ee, {
        selected: et,
        nitroTabButtonRef: en,
        route: er,
        locationState: ei
      } = e,
      el = function(e, t) {
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
    let ea = (0, s.e7)([E.default], () => E.default.getCurrentUser()),
      es = (0, s.e7)([O.Z], () => O.Z.getPremiumTypeSubscription()),
      {
        variant: eo,
        hasNitroTabBadgeOfferReminder: ec
      } = (0, N.ZP)("PremiumDiscountEndingNotice"),
      eu = (0, I.Qo)(ea, es),
      ed = (0, I.M5)(ea, W.PremiumTypes.TIER_2),
      ep = (0, l.JA)("nitro"),
      ef = (0, Z.N)(),
      eh = (0, A.Ng)(),
      eg = (0, x.$)(),
      em = (0, T.W)(),
      e_ = (0, S.Vi)(),
      eb = (0, M.HI)({
        trialOffer: ef
      }),
      eE = (0, F.V)(),
      eO = (0, M.eW)(),
      ey = (0, D._h)(),
      ev = (0, z.Kn)(),
      eI = y.Z.getAlmostExpiringTrialOffers([W.Si.TIER_2]),
      eC = ec && eI.length > 0 && null != ef && null != ef.expires_at,
      eS = y.Z.getAlmostExpiringDiscountOffers([W.Si.TIER_2]),
      eT = ec && eS.length > 0 && null != eh && null != eh.expires_at,
      eN = null != eg && null != es && es.status === q.O0b.CANCELED,
      {
        fractionalState: ej,
        startsAt: eP,
        endsAt: ex
      } = (0, f.Z)({
        forceFetch: true
      }),
      [eA, eZ] = (0, _.bf)(ej !== W.a$.NONE ? o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
        showAfterTimestamp: eP.valueOf(),
        cooldownDurationMs: 0
      }),
      ew = (0, j.Z)({
        location: "NitroTabButton"
      }),
      eL = (null == ef ? true : ef.trial_id) === W.a7,
      eR = (0, h.YZ)("NitroTabButton"),
      eD = (0, b.bg)({
        location: "NitroTabButton"
      }),
      eM = [],
      ek = [];
    (0, g.Kl)() && ((eT || eC && !eL) && eM.push(o.z.NITRO_TAB_BADGE_OFFER_REMINDER), ey && eM.push(o.z.RECURRING_3P_PROMOTION_POPOVER), e_ && eM.push(o.z.BOGO_2025_NITRO_TAB_BADGE), ew && eM.push(o.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE), em && eM.push(o.z.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2), eR && eM.push(o.z.CUSTOM_THEMES_PREMIUM_TAB_BADGE), eD && eM.push(o.z.GAME_WIDGETS_PREMIUM_TAB_BADGE));
    let [eU, eG] = (0, _.US)(eM, true, true);
    eN && ek.push(o.z.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK);
    let [eB, eH] = (0, _.US)(ek, true, true), eV = (0, s.e7)([w.Z], () => w.Z.getMarketingComponentByType(a.I.PREMIUM_TAB)), [eF, ez] = (0, _.TE)(null != eV && "premiumTab" === eV.properties.properties.oneofKind ? o.z.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE : null, null != (ee = null == eV ? true : eV.id) ? ee : "", true, true);
    if (i.useEffect(() => {
        true === et && null != eU && eG(K.L.AUTO_DISMISS), true === et && null != eB && eH(K.L.AUTO_DISMISS), true === et && null != eF && ez(K.L.AUTO_DISMISS)
      }, [eG, et, eU, eH, eB, eF, ez]), !J({
        selected: et
      })) return null;
    let eY = () => {
      eA === o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL && eZ(K.L.TAKE_ACTION), v.default.track(q.rMx.NITRO_TAB_VISITED, {
        badge_decorator: C,
        has_premium: eu
      }), null != eU && eG(K.L.USER_DISMISS), null != eF && ez(K.L.USER_DISMISS)
    };
    if (ej === W.a$.NONE || em || (C = 7, n = (0, r.jsx)(P.Z, {
        className: "",
        startsAt: eP,
        endsAt: ex,
        messageStyle: p.aj.SHORT_TIME,
        upperCase: true
      })), null != eV && "premiumTab" === eV.properties.properties.oneofKind) n = (0, r.jsx)(R.Z, {
      componentId: eV.id,
      badgeCopy: eV.properties.properties.premiumTab.badgeLabel,
      acknowledgedBadgeCopy: eV.properties.properties.premiumTab.acknowledgedBadgeLabel,
      isDismissed: eF !== o.z.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE
    }), C = 9;
    else if (e_) n = (0, r.jsx)(L.Z, {}), C = 0;
    else if (eb) {
      let e = (0, M.$q)();
      n = (0, r.jsx)(G._y, {
        isTabSelected: et,
        badgeCopy: Q.intl.string(Q.t.OS9KPu),
        offerExpiresAt: true === e ? null == ef ? true : ef.expires_at : null
      }), C = 4
    } else eU === o.z.RECURRING_3P_PROMOTION_POPOVER ? (n = (0, r.jsx)(u.Cts, {
      type: "new",
      variant: "expressive"
    }), C = 4, eY = () => {
      v.default.track(q.rMx.NITRO_TAB_VISITED, {
        badge_decorator: C,
        has_premium: eu
      }), eG(K.L.USER_DISMISS)
    }) : eU === o.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE || eU === o.z.CUSTOM_THEMES_PREMIUM_TAB_BADGE || eU === o.z.GAME_WIDGETS_PREMIUM_TAB_BADGE ? (n = (0, r.jsx)(G._y, {
      isTabSelected: et,
      badgeCopy: Q.intl.string(Q.t.y2b7CA),
      offerExpiresAt: null
    }), C = 2) : em ? (n = (0, r.jsx)(V.S, {
      expiresAt: ex
    }), C = 4) : null != eE ? (n = (0, r.jsx)(Y.Z, {
      copy: eE,
      showStars: false
    }), C = 1) : null != eh ? (n = eo === N.tE.OFFER_COUNTDOWN && eT ? (0, r.jsx)(B.a, {
      discountOffer: eh
    }) : (0, r.jsx)(G.GN, {
      userDiscount: eh,
      isTabSelected: et,
      includesAmountOff: false,
      shouldShowOfferReminder: eT
    }), C = 3) : null == ef || eL ? ev ? (n = (0, r.jsx)(H.l, {
      isSelected: et,
      onSelect: () => (0, m.Q3)(o.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, {
        dismissAction: K.L.TAKE_ACTION
      })
    }), C = 6) : eN && (n = (0, r.jsx)(U.Z, {
      isSelected: et,
      discountOffer: eg
    }), C = 8) : (n = eo === N.tE.OFFER_COUNTDOWN && eC ? (0, r.jsx)(B.F, {
      trialOffer: ef
    }) : (0, r.jsx)(G.$H, {
      trialOffer: ef,
      isTabSelected: et,
      shouldShowOfferReminder: eC
    }), C = 4);
    eO && (n = (0, r.jsx)(G._y, {
      isTabSelected: et,
      badgeCopy: Q.intl.string(Q.t.RDE0Sc),
      offerExpiresAt: null
    }), C = 4, eY = () => {
      v.default.track(q.rMx.NITRO_TAB_VISITED, {
        badge_decorator: C,
        has_premium: eu
      }), (0, M.ZL)()
    });
    let eW = (0, r.jsx)(d.Qj, (X = function(e) {
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
      listItemRef: en,
      selected: et,
      route: er,
      icon: u.SrA,
      text: (0, r.jsx)(c.Z, {
        children: ed ? Q.intl.string(Q.t["4gwVVn"]) : Q.intl.string(Q.t.Ipxkog)
      }),
      locationState: ei,
      onClick: eY
    }, el, ep), $ = $ = {
      className: t,
      children: n
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(X, Object.getOwnPropertyDescriptors($)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object($)).forEach(function(e) {
      Object.defineProperty(X, e, Object.getOwnPropertyDescriptor($, e))
    }), X));
    return ev ? (0, r.jsx)(H.C, {
      children: eW
    }) : eN && eB === o.z.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK && 8 === C ? (0, r.jsx)(k.Z, {
      targetElementRef: en,
      discountOffer: eg,
      premiumSubscription: es,
      dismissCoachmark: eH,
      children: eW
    }) : eW
  }