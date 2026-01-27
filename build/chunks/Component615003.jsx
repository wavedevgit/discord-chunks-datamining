/** Chunk was on 21738 **/
/** chunk id: 615003, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => ei,
  o: () => el
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
  Chunk164554 = require("./164554.jsx"),
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
let ei = e => {
    let {
      selected: t
    } = e, n = (0, s.bG)([b.default], () => b.default.getCurrentUser()), r = (0, s.bG)([E.A], () => E.A.getPremiumTypeSubscription()), i = (0, w.V)(), l = (0, P.O)(), a = (0, S.cg)(), o = (0, Z.H)(), c = (0, I.Of)(n, r), u = (0, s.bG)([v.A], () => v.A.getCreatedAtOverride()), d = t || null != i || null != l || a || null != o || c, p = null != u ? u : null == n ? true : n.createdAt;
    return d || null != n && null != p && Date.now() - p.getTime() > 12096e5
  },
  el = e => {
    var t, n, v;
    let el, ea, es, {
        selected: eo,
        nitroTabButtonRef: ec,
        route: eu,
        locationState: ed
      } = e,
      ep = function(e, t) {
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
      eh = (0, s.bG)([b.default], () => b.default.getCurrentUser()),
      eg = (0, s.bG)([E.A], () => E.A.getPremiumTypeSubscription()),
      {
        variant: ef,
        hasNitroTabBadgeOfferReminder: em
      } = (0, N.Ay)("PremiumDiscountEndingNotice"),
      eA = (0, I.Of)(eh, eg),
      e_ = (0, I.YE)(eh, ee.PremiumTypes.TIER_2),
      eb = (0, l.rm)("nitro"),
      eE = (0, w.V)(),
      eO = (0, P.O)(),
      ey = (0, x.p)(),
      eI = (0, C.d)(),
      ev = (0, S.cg)(),
      eS = (0, G.NF)({
        trialOffer: eE
      }),
      eC = (0, R.bf)(),
      eN = (0, Z.H)(),
      eT = (0, G.Tp)(),
      ej = (0, U.c7)(),
      {
        isInTreatment: ex
      } = (0, V.uX)("NitroTabButton"),
      eP = !(0, I.TW)(eh) && ex,
      ew = (0, s.bG)([A.A], () => A.A.getRewardForProgram(_.W.NITRO)),
      eL = null == ew ? true : ew.last_granted_reward,
      eR = null == ew ? true : ew.last_granted_reward_amount,
      eD = e_ && ex && null != eL && null != eR,
      eM = e_ && ex && null != ew,
      ek = (0, J.gr)(),
      eU = O.A.getAlmostExpiringTrialOffers([ee.pe.TIER_2]),
      eG = em && eU.length > 0 && null != eE && null != eE.expires_at,
      eV = O.A.getAlmostExpiringDiscountOffers([ee.pe.TIER_2]),
      eB = em && eV.length > 0 && null != eO && null != eO.expires_at,
      eH = null != ey && null != eg && eg.status === et.Dmq.CANCELED,
      {
        fractionalState: eF,
        startsAt: eY,
        endsAt: eK
      } = (0, h.A)({
        forceFetch: true
      }),
      [eW, eq] = (0, m.Wl)(eF !== ee.xc.NONE ? o.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
        showAfterTimestamp: eY.valueOf(),
        cooldownDurationMs: 0
      }),
      ez = (0, T.A)({
        location: "NitroTabButton"
      }),
      eQ = (null == eE ? true : eE.trial_id) === ee.Dw,
      eX = [],
      eZ = [];
    (0, g.Tc)() && ((eB || eG && !eQ) && eX.push(o.M.NITRO_TAB_BADGE_OFFER_REMINDER), ej && eX.push(o.M.RECURRING_3P_PROMOTION_POPOVER), ev && eX.push(o.M.BOGO_2025_NITRO_TAB_BADGE), ez && eX.push(o.M.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE), eI && eX.push(o.M.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2));
    let [eJ, e$] = (0, m.kn)(eX, true, true);
    eH && eZ.push(o.M.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK), eC && eZ.push(o.M.PREMIUM_GROUP_POPOVER), eP && eZ.push(o.M.PREMIUM_ORBS_UPSELL_POPOVER), eM && eZ.push(o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER);
    let [e0, e1] = (0, m.kn)(eZ, true, true), e6 = (0, L.c)(a.C.PREMIUM_TAB), e9 = (0, L.c)(a.C.PREMIUM_TAB_TOOLTIP), [e7, e5] = (0, m.Cc)(null != e6 && "premiumTab" === e6.properties.properties.oneofKind ? o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE : null, null != (t = null == e6 ? true : e6.promotionId) ? t : "", true, true), [e8, e2] = (0, m.Cc)(eD ? o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER : null, null != eL ? eL : "", true, true), e4 = null != e9 && "premiumTabTooltip" === e9.properties.properties.oneofKind && e7 === o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
    if (i.useEffect(() => {
        true === eo && null != eJ && e$(en.i.AUTO_DISMISS), true === eo && null != e0 && e1(en.i.AUTO_DISMISS), true === eo && null != e7 && e5(en.i.AUTO_DISMISS), true === eo && null != e8 && e2(en.i.AUTO_DISMISS)
      }, [e$, eo, eJ, e1, e0, e7, e5, e8, e2]), !ei({
        selected: eo
      })) return null;
    let e3 = () => {
      eW === o.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL && eq(en.i.TAKE_ACTION), y.default.track(et.HAw.NITRO_TAB_VISITED, {
        badge_decorator: es,
        has_premium: eA
      }), null != eJ && e$(en.i.USER_DISMISS), null != e7 && e5(en.i.USER_DISMISS), e0 === o.M.PREMIUM_GROUP_POPOVER && e1(en.i.USER_DISMISS)
    };
    eF === ee.xc.NONE || eI || (es = 7, ea = (0, r.jsx)(j.A, {
      className: "",
      startsAt: eY,
      endsAt: eK,
      messageStyle: p.yE.SHORT_TIME,
      upperCase: true
    }));
    let te = eC && e0 === o.M.PREMIUM_GROUP_POPOVER;
    if (te) ea = (0, r.jsx)(u.Exy, {
      type: "new",
      variant: "expressive"
    }), es = 10;
    else if (null != e6 && "premiumTab" === e6.properties.properties.oneofKind) ea = (0, r.jsx)(k.A, {
      componentId: e6.id,
      badgeCopy: e6.properties.properties.premiumTab.badgeLabel,
      acknowledgedBadgeCopy: e6.properties.properties.premiumTab.acknowledgedBadgeLabel,
      isDismissed: e7 !== o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE
    }), es = 9;
    else if (ev) ea = (0, r.jsx)(M.A, {}), es = 0;
    else if (eS) {
      let e = (0, G.ZR)();
      ea = (0, r.jsx)(W.MA, {
        isTabSelected: eo,
        badgeCopy: er.intl.string(er.t.OS9KPu),
        offerExpiresAt: true === e ? null == eE ? true : eE.expires_at : null
      }), es = 4
    } else eJ === o.M.RECURRING_3P_PROMOTION_POPOVER ? (ea = (0, r.jsx)(u.Exy, {
      type: "new",
      variant: "expressive"
    }), es = 4, e3 = () => {
      y.default.track(et.HAw.NITRO_TAB_VISITED, {
        badge_decorator: es,
        has_premium: eA
      }), e$(en.i.USER_DISMISS)
    }) : eJ === o.M.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE ? (ea = (0, r.jsx)(W.MA, {
      isTabSelected: eo,
      badgeCopy: er.intl.string(er.t.y2b7CA),
      offerExpiresAt: null
    }), es = 2) : eI ? (ea = (0, r.jsx)(X.d, {
      expiresAt: eK
    }), es = 4) : null != eN ? (ea = (0, r.jsx)($.A, {
      copy: eN,
      showStars: false
    }), es = 1) : null != eO ? (ea = ef === N.CJ.OFFER_COUNTDOWN && eB ? (0, r.jsx)(q.D, {
      discountOffer: eO
    }) : (0, r.jsx)(W.fY, {
      userDiscount: eO,
      isTabSelected: eo,
      includesAmountOff: false,
      shouldShowOfferReminder: eB
    }), es = 3) : null == eE || eQ ? ek ? (ea = (0, r.jsx)(z.F, {
      isSelected: eo,
      onSelect: () => (0, f.Dr)(o.M.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, {
        dismissAction: en.i.TAKE_ACTION
      })
    }), es = 6) : eH ? (ea = (0, r.jsx)(K.A, {
      isSelected: eo,
      discountOffer: ey
    }), es = 8) : eP && e0 === o.M.PREMIUM_ORBS_UPSELL_POPOVER || eM && e0 === o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER ? (ea = (0, r.jsx)(u.Exy, {
      type: "new",
      variant: "expressive"
    }), es = 2) : eD && e8 === o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER && (ea = (0, r.jsx)(u.Exy, {
      type: "new",
      variant: "expressive"
    }), es = 2) : (ea = ef === N.CJ.OFFER_COUNTDOWN && eG ? (0, r.jsx)(q.s, {
      trialOffer: eE
    }) : (0, r.jsx)(W.Ag, {
      trialOffer: eE,
      isTabSelected: eo,
      shouldShowOfferReminder: eG
    }), es = 4);
    eT && (ea = (0, r.jsx)(W.MA, {
      isTabSelected: eo,
      badgeCopy: er.intl.string(er.t.RDE0Sc),
      offerExpiresAt: null
    }), es = 4, e3 = () => {
      y.default.track(et.HAw.NITRO_TAB_VISITED, {
        badge_decorator: es,
        has_premium: eA
      }), (0, G.ne)()
    });
    let tt = (0, r.jsx)(d.z9, (n = function(e) {
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
      listItemRef: ec,
      selected: eo,
      route: eu,
      icon: u.tvc,
      text: (0, r.jsx)(c.A, {
        children: e_ ? er.intl.string(er.t["4gwVVn"]) : er.intl.string(er.t.Ipxkog)
      }),
      locationState: ed,
      onClick: e3
    }, ep, eb), v = v = {
      className: el,
      children: ea
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
    return ek ? (0, r.jsx)(z.T, {
      children: tt
    }) : eH && e0 === o.M.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK && 8 === es ? (0, r.jsx)(Y.A, {
      targetElementRef: ec,
      discountOffer: ey,
      premiumSubscription: eg,
      dismissCoachmark: e1,
      children: tt
    }) : te ? (0, r.jsx)(D.p, {
      targetElementRef: ec,
      dismissPopover: e1,
      children: tt
    }) : eP && e0 === o.M.PREMIUM_ORBS_UPSELL_POPOVER ? (0, r.jsx)(F.A, {
      targetElementRef: ec,
      dismissPopover: e1,
      children: tt
    }) : eM && e0 === o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER ? (0, r.jsx)(B.A, {
      targetElementRef: ec,
      dismissPopover: e1,
      children: tt
    }) : eD && e8 === o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER ? (0, r.jsx)(H.A, {
      targetElementRef: ec,
      dismissPopover: e2,
      lastGrantedRewardAmount: eR,
      children: tt
    }) : e4 ? (0, r.jsx)(Q.A, {
      children: tt
    }) : tt
  }