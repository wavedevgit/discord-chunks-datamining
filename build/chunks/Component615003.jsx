/** Chunk was on 21738 **/
/** chunk id: 615003, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => er,
  o: () => ei
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk837381 = require("./837381.jsx"),
  Chunk877624 = require("./877624.js"),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk3026 = require("./3026.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk701363 = require("./701363.jsx"),
  Chunk366999 = require("./366999.js"),
  Chunk531260 = require("./531260.js"),
  Chunk771781 = require("./771781.js"),
  Chunk826673 = require("./826673.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk895944 = require("./895944.js"),
  Chunk649032 = require("./649032.js"),
  Chunk287809 = require("./287809.js"),
  Chunk166403 = require("./166403.js"),
  Chunk816733 = require("./816733.js"),
  Chunk954571 = require("./954571.js"),
  Chunk927578 = require("./927578.js"),
  Chunk683760 = require("./683760.js"),
  Chunk40185 = require("./40185.js"),
  Chunk637073 = require("./637073.js"),
  Chunk804412 = require("./804412.js"),
  Chunk377168 = require("./377168.js"),
  Chunk288349 = require("./288349.jsx"),
  Chunk131168 = require("./131168.js"),
  Chunk422936 = require("./422936.js"),
  Chunk234419 = require("./234419.js"),
  Chunk549996 = require("./549996.js"),
  Chunk612669 = require("./612669.js"),
  Chunk768569 = require("./768569.jsx"),
  Chunk603488 = require("./603488.jsx"),
  Chunk282077 = require("./282077.jsx"),
  Chunk385327 = require("./385327.js"),
  Chunk727949 = require("./727949.js"),
  Chunk84483 = require("./84483.js"),
  Chunk305498 = require("./305498.jsx"),
  Chunk909255 = require("./909255.jsx"),
  Chunk328717 = require("./328717.jsx"),
  Chunk953062 = require("./953062.jsx"),
  Chunk105390 = require("./105390.jsx"),
  Chunk965966 = require("./965966.jsx"),
  Chunk173522 = require("./173522.jsx"),
  Chunk796878 = require("./796878.jsx"),
  Chunk156393 = require("./156393.jsx"),
  Chunk513570 = require("./513570.js"),
  Chunk221688 = require("./221688.js"),
  Chunk622037 = require("./622037.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk985018 = require("./985018.jsx");
let er = e => {
    let {
      selected: t
    } = e, n = (0, s.bG)([b.default], () => b.default.getCurrentUser()), r = (0, s.bG)([E.A], () => E.A.getPremiumTypeSubscription()), i = (0, w.V)(), l = (0, P.O)(), a = (0, S.cg)(), o = (0, X.H)(), c = (0, I.Of)(n, r), u = (0, s.bG)([v.A], () => v.A.getCreatedAtOverride()), d = t || null != i || null != l || a || null != o || c, p = null != u ? u : null == n ? true : n.createdAt;
    return d || null != n && null != p && Date.now() - p.getTime() > 12096e5
  },
  ei = e => {
    var t, n, v;
    let ei, el, ea, {
        selected: es,
        nitroTabButtonRef: eo,
        route: ec,
        locationState: eu
      } = e,
      ed = function(e, t) {
        if (null == e) return {};
        var n, r, i, l = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
          for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
          return l
        }
        if (l = function(e, t) {
            if (null == e) return {};
            var n, r, i = {},
              l = Object.getOwnPropertyNames(e);
            for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            return i
          }(e, t), Object.getOwnPropertySymbols)
          for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
        return l
      }(e, ["selected", "nitroTabButtonRef", "route", "locationState"]),
      ep = (0, s.bG)([b.default], () => b.default.getCurrentUser()),
      eh = (0, s.bG)([E.A], () => E.A.getPremiumTypeSubscription()),
      {
        variant: eg,
        hasNitroTabBadgeOfferReminder: ef
      } = (0, N.Ay)("PremiumDiscountEndingNotice"),
      em = (0, I.Of)(ep, eh),
      eA = (0, I.YE)(ep, $.PremiumTypes.TIER_2),
      e_ = (0, l.rm)("nitro"),
      eb = (0, w.V)(),
      eE = (0, P.O)(),
      eO = (0, x.p)(),
      ey = (0, C.d)(),
      eI = (0, S.cg)(),
      ev = (0, G.NF)({
        trialOffer: eb
      }),
      eS = (0, R.bf)(),
      eC = (0, X.H)(),
      eN = (0, G.Tp)(),
      eT = (0, U.c7)(),
      {
        isInTreatment: ej
      } = (0, V.uX)("NitroTabButton"),
      ex = !(0, I.TW)(ep) && ej,
      eP = (0, s.bG)([A.A], () => A.A.getRewardForProgram(_.W.NITRO)),
      ew = null == eP ? true : eP.last_granted_reward,
      eL = null == eP ? true : eP.last_granted_reward_amount,
      eR = eA && ej && null != ew && null != eL,
      eD = (0, Z.gr)(),
      eM = O.A.getAlmostExpiringTrialOffers([$.pe.TIER_2]),
      ek = ef && eM.length > 0 && null != eb && null != eb.expires_at,
      eU = O.A.getAlmostExpiringDiscountOffers([$.pe.TIER_2]),
      eG = ef && eU.length > 0 && null != eE && null != eE.expires_at,
      eV = null != eO && null != eh && eh.status === ee.Dmq.CANCELED,
      {
        fractionalState: eB,
        startsAt: eH,
        endsAt: eF
      } = (0, h.A)({
        forceFetch: true
      }),
      [eY, eK] = (0, m.Wl)(eB !== $.xc.NONE ? o.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
        showAfterTimestamp: eH.valueOf(),
        cooldownDurationMs: 0
      }),
      eW = (0, T.A)({
        location: "NitroTabButton"
      }),
      eq = (null == eb ? true : eb.trial_id) === $.Dw,
      ez = [],
      eQ = [];
    (0, g.Tc)() && ((eG || ek && !eq) && ez.push(o.M.NITRO_TAB_BADGE_OFFER_REMINDER), eT && ez.push(o.M.RECURRING_3P_PROMOTION_POPOVER), eI && ez.push(o.M.BOGO_2025_NITRO_TAB_BADGE), eW && ez.push(o.M.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE), ey && ez.push(o.M.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2));
    let [eX, eZ] = (0, m.kn)(ez, true, true);
    eV && eQ.push(o.M.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK), eS && eQ.push(o.M.PREMIUM_GROUP_POPOVER), ex && eQ.push(o.M.PREMIUM_ORBS_UPSELL_POPOVER);
    let [eJ, e$] = (0, m.kn)(eQ, true, true), e0 = (0, L.c)(a.C.PREMIUM_TAB), e1 = (0, L.c)(a.C.PREMIUM_TAB_TOOLTIP), [e6, e9] = (0, m.Cc)(null != e0 && "premiumTab" === e0.properties.properties.oneofKind ? o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE : null, null != (t = null == e0 ? true : e0.promotionId) ? t : "", true, true), [e7, e5] = (0, m.Cc)(eR ? o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER : null, null != ew ? ew : "", true, true), e8 = null != e1 && "premiumTabTooltip" === e1.properties.properties.oneofKind && e6 === o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
    if (i.useEffect(() => {
        true === es && null != eX && eZ(et.i.AUTO_DISMISS), true === es && null != eJ && e$(et.i.AUTO_DISMISS), true === es && null != e6 && e9(et.i.AUTO_DISMISS), true === es && null != e7 && e5(et.i.AUTO_DISMISS)
      }, [eZ, es, eX, e$, eJ, e6, e9, e7, e5]), !er({
        selected: es
      })) return null;
    let e2 = () => {
      eY === o.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL && eK(et.i.TAKE_ACTION), y.default.track(ee.HAw.NITRO_TAB_VISITED, {
        badge_decorator: ea,
        has_premium: em
      }), null != eX && eZ(et.i.USER_DISMISS), null != e6 && e9(et.i.USER_DISMISS), eJ === o.M.PREMIUM_GROUP_POPOVER && e$(et.i.USER_DISMISS)
    };
    eB === $.xc.NONE || ey || (ea = 7, el = (0, r.jsx)(j.A, {
      className: "",
      startsAt: eH,
      endsAt: eF,
      messageStyle: p.yE.SHORT_TIME,
      upperCase: true
    }));
    let e4 = eS && eJ === o.M.PREMIUM_GROUP_POPOVER;
    if (e4) el = (0, r.jsx)(u.Exy, {
      type: "new",
      variant: "expressive"
    }), ea = 10;
    else if (null != e0 && "premiumTab" === e0.properties.properties.oneofKind) el = (0, r.jsx)(k.A, {
      componentId: e0.id,
      badgeCopy: e0.properties.properties.premiumTab.badgeLabel,
      acknowledgedBadgeCopy: e0.properties.properties.premiumTab.acknowledgedBadgeLabel,
      isDismissed: e6 !== o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE
    }), ea = 9;
    else if (eI) el = (0, r.jsx)(M.A, {}), ea = 0;
    else if (ev) {
      let e = (0, G.ZR)();
      el = (0, r.jsx)(K.MA, {
        isTabSelected: es,
        badgeCopy: en.intl.string(en.t.OS9KPu),
        offerExpiresAt: true === e ? null == eb ? true : eb.expires_at : null
      }), ea = 4
    } else eX === o.M.RECURRING_3P_PROMOTION_POPOVER ? (el = (0, r.jsx)(u.Exy, {
      type: "new",
      variant: "expressive"
    }), ea = 4, e2 = () => {
      y.default.track(ee.HAw.NITRO_TAB_VISITED, {
        badge_decorator: ea,
        has_premium: em
      }), eZ(et.i.USER_DISMISS)
    }) : eX === o.M.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE ? (el = (0, r.jsx)(K.MA, {
      isTabSelected: es,
      badgeCopy: en.intl.string(en.t.y2b7CA),
      offerExpiresAt: null
    }), ea = 2) : ey ? (el = (0, r.jsx)(Q.d, {
      expiresAt: eF
    }), ea = 4) : null != eC ? (el = (0, r.jsx)(J.A, {
      copy: eC,
      showStars: false
    }), ea = 1) : null != eE ? (el = eg === N.CJ.OFFER_COUNTDOWN && eG ? (0, r.jsx)(W.D, {
      discountOffer: eE
    }) : (0, r.jsx)(K.fY, {
      userDiscount: eE,
      isTabSelected: es,
      includesAmountOff: false,
      shouldShowOfferReminder: eG
    }), ea = 3) : null == eb || eq ? eD ? (el = (0, r.jsx)(q.F, {
      isSelected: es,
      onSelect: () => (0, f.Dr)(o.M.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, {
        dismissAction: et.i.TAKE_ACTION
      })
    }), ea = 6) : eV ? (el = (0, r.jsx)(Y.A, {
      isSelected: es,
      discountOffer: eO
    }), ea = 8) : ex && eJ === o.M.PREMIUM_ORBS_UPSELL_POPOVER ? (el = (0, r.jsx)(u.Exy, {
      type: "new",
      variant: "expressive"
    }), ea = 2) : eR && e7 === o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER && (el = (0, r.jsx)(u.Exy, {
      type: "new",
      variant: "expressive"
    }), ea = 2) : (el = eg === N.CJ.OFFER_COUNTDOWN && ek ? (0, r.jsx)(W.s, {
      trialOffer: eb
    }) : (0, r.jsx)(K.Ag, {
      trialOffer: eb,
      isTabSelected: es,
      shouldShowOfferReminder: ek
    }), ea = 4);
    eN && (el = (0, r.jsx)(K.MA, {
      isTabSelected: es,
      badgeCopy: en.intl.string(en.t.RDE0Sc),
      offerExpiresAt: null
    }), ea = 4, e2 = () => {
      y.default.track(ee.HAw.NITRO_TAB_VISITED, {
        badge_decorator: ea,
        has_premium: em
      }), (0, G.ne)()
    });
    let e3 = (0, r.jsx)(d.z9, (n = function(e) {
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
      listItemRef: eo,
      selected: es,
      route: ec,
      icon: u.tvc,
      text: (0, r.jsx)(c.A, {
        children: eA ? en.intl.string(en.t["4gwVVn"]) : en.intl.string(en.t.Ipxkog)
      }),
      locationState: eu,
      onClick: e2
    }, ed, e_), v = v = {
      className: ei,
      children: el
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(v)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(v)).forEach(function(e) {
      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(v, e))
    }), n));
    return eD ? (0, r.jsx)(q.T, {
      children: e3
    }) : eV && eJ === o.M.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK && 8 === ea ? (0, r.jsx)(F.A, {
      targetElementRef: eo,
      discountOffer: eO,
      premiumSubscription: eh,
      dismissCoachmark: e$,
      children: e3
    }) : e4 ? (0, r.jsx)(D.p, {
      targetElementRef: eo,
      dismissPopover: e$,
      children: e3
    }) : ex && eJ === o.M.PREMIUM_ORBS_UPSELL_POPOVER ? (0, r.jsx)(H.A, {
      targetElementRef: eo,
      dismissPopover: e$,
      children: e3
    }) : eR && e7 === o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER ? (0, r.jsx)(B.A, {
      targetElementRef: eo,
      dismissPopover: e5,
      lastGrantedRewardAmount: eL,
      children: e3
    }) : e8 ? (0, r.jsx)(z.A, {
      children: e3
    }) : e3
  }