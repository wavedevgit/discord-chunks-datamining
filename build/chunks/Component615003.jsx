/** Chunk was on 21738 **/
/** chunk id: 615003, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => et,
  o: () => en
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
  Chunk954571 = require("./954571.js"),
  Chunk927578 = require("./927578.js"),
  Chunk683760 = require("./683760.js"),
  Chunk40185 = require("./40185.js"),
  Chunk637073 = require("./637073.js"),
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
let et = e => {
    let {
      selected: t
    } = e, n = (0, s.bG)([b.default], () => b.default.getCurrentUser()), r = (0, s.bG)([E.A], () => E.A.getPremiumTypeSubscription()), i = (0, x.V)(), l = (0, j.O)(), a = (0, v.cg)(), o = (0, z.H)(), c = (0, y.Of)(n, r), u = (0, s.bG)([I.A], () => I.A.getCreatedAtOverride()), d = t || null != i || null != l || a || null != o || c, p = null != u ? u : null == n ? true : n.createdAt;
    return d || null != n && null != p && Date.now() - p.getTime() > 12096e5
  },
  en = e => {
    var t, n, I;
    let en, er, ei, {
        selected: el,
        nitroTabButtonRef: ea,
        route: es,
        locationState: eo
      } = e,
      ec = function(e, t) {
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
      eu = (0, s.bG)([b.default], () => b.default.getCurrentUser()),
      ed = (0, s.bG)([E.A], () => E.A.getPremiumTypeSubscription()),
      ep = (0, y.Of)(eu, ed),
      eh = (0, y.YE)(eu, Z.PremiumTypes.TIER_2),
      eg = (0, l.rm)("nitro"),
      em = (0, x.V)(),
      ef = (0, j.O)(),
      eA = (0, T.p)(),
      e_ = (0, S.d)(),
      eb = (0, v.cg)(),
      eE = (0, k.NF)({
        trialOffer: em
      }),
      eO = (0, w.bf)(),
      ey = (0, z.H)(),
      eI = (0, k.Tp)(),
      ev = (0, M.c7)(),
      {
        isInTreatment: eS
      } = (0, U.uX)("NitroTabButton"),
      eC = !(0, y.TW)(eu) && eS,
      eN = (0, s.bG)([A.A], () => A.A.getRewardForProgram(_.W.NITRO)),
      eT = null == eN ? true : eN.last_granted_reward,
      ej = null == eN ? true : eN.last_granted_reward_amount,
      ex = eh && eS && null != eT && null != ej,
      eP = eh && eS && !ex && null != eN,
      ew = (0, Q.gr)(),
      eL = null != eA && null != ed && ed.status === J.Dmq.CANCELED,
      {
        fractionalState: eR,
        startsAt: eD,
        endsAt: eM
      } = (0, h.A)({
        forceFetch: true
      }),
      [ek, eU] = (0, f.Wl)(eR !== Z.xc.NONE ? o.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
        showAfterTimestamp: eD.valueOf(),
        cooldownDurationMs: 0
      }),
      eG = (0, C.A)({
        location: "NitroTabButton"
      }),
      eV = (null == em ? true : em.trial_id) === Z.Dw,
      eB = [],
      eH = [];
    (0, g.Tc)() && (ev && eB.push(o.M.RECURRING_3P_PROMOTION_POPOVER), eb && eB.push(o.M.BOGO_2025_NITRO_TAB_BADGE), eG && eB.push(o.M.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE), e_ && eB.push(o.M.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2));
    let [eF, eY] = (0, f.kn)(eB, true, true);
    eL && eH.push(o.M.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK), eO && eH.push(o.M.PREMIUM_GROUP_POPOVER), eC && eH.push(o.M.PREMIUM_ORBS_UPSELL_POPOVER), eP && eH.push(o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER);
    let [eK, eW] = (0, f.kn)(eH, true, true), eq = (0, P.c)(a.C.PREMIUM_TAB), ez = (0, P.c)(a.C.PREMIUM_TAB_TOOLTIP), [eQ, eX] = (0, f.Cc)(null != eq && "premiumTab" === eq.properties.properties.oneofKind ? o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE : null, null != (t = null == eq ? true : eq.promotionId) ? t : "", true, true), [eZ, eJ] = (0, f.Cc)(ex ? o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER : null, null != eT ? eT : "", true, true), e$ = null != ez && "premiumTabTooltip" === ez.properties.properties.oneofKind && eQ === o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
    if (i.useEffect(() => {
        true === el && null != eF && eY($.i.AUTO_DISMISS), true === el && null != eK && eW($.i.AUTO_DISMISS), true === el && null != eQ && eX($.i.AUTO_DISMISS), true === el && null != eZ && eJ($.i.AUTO_DISMISS)
      }, [eY, el, eF, eW, eK, eQ, eX, eZ, eJ]), !et({
        selected: el
      })) return null;
    let e0 = () => {
      ek === o.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL && eU($.i.TAKE_ACTION), O.default.track(J.HAw.NITRO_TAB_VISITED, {
        badge_decorator: ei,
        has_premium: ep
      }), null != eF && eY($.i.USER_DISMISS), null != eQ && eX($.i.USER_DISMISS), eK === o.M.PREMIUM_GROUP_POPOVER && eW($.i.USER_DISMISS)
    };
    eR === Z.xc.NONE || e_ || (ei = 7, er = (0, r.jsx)(N.A, {
      className: "",
      startsAt: eD,
      endsAt: eM,
      messageStyle: p.yE.SHORT_TIME,
      upperCase: true
    }));
    let e1 = eO && eK === o.M.PREMIUM_GROUP_POPOVER;
    if (e1) er = (0, r.jsx)(u.Exy, {
      type: "new",
      variant: "expressive"
    }), ei = 10;
    else if (null != eq && "premiumTab" === eq.properties.properties.oneofKind) er = (0, r.jsx)(D.A, {
      componentId: eq.id,
      badgeCopy: eq.properties.properties.premiumTab.badgeLabel,
      acknowledgedBadgeCopy: eq.properties.properties.premiumTab.acknowledgedBadgeLabel,
      isDismissed: eQ !== o.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE
    }), ei = 9;
    else if (eb) er = (0, r.jsx)(R.A, {}), ei = 0;
    else if (eE) {
      let e = (0, k.ZR)();
      er = (0, r.jsx)(Y.MA, {
        isTabSelected: el,
        badgeCopy: ee.intl.string(ee.t.OS9KPu),
        offerExpiresAt: true === e ? null == em ? true : em.expires_at : null
      }), ei = 4
    } else eF === o.M.RECURRING_3P_PROMOTION_POPOVER ? (er = (0, r.jsx)(u.Exy, {
      type: "new",
      variant: "expressive"
    }), ei = 4, e0 = () => {
      O.default.track(J.HAw.NITRO_TAB_VISITED, {
        badge_decorator: ei,
        has_premium: ep
      }), eY($.i.USER_DISMISS)
    }) : eF === o.M.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE ? (er = (0, r.jsx)(Y.MA, {
      isTabSelected: el,
      badgeCopy: ee.intl.string(ee.t.y2b7CA),
      offerExpiresAt: null
    }), ei = 2) : e_ ? (er = (0, r.jsx)(q.d, {
      expiresAt: eM
    }), ei = 4) : null != ey ? (er = (0, r.jsx)(X.A, {
      copy: ey,
      showStars: false
    }), ei = 1) : null != ef ? (er = (0, r.jsx)(Y.fY, {
      userDiscount: ef,
      isTabSelected: el,
      includesAmountOff: false
    }), ei = 3) : null == em || eV ? ew ? (er = (0, r.jsx)(K.F, {
      isSelected: el,
      onSelect: () => (0, m.Dr)(o.M.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, {
        dismissAction: $.i.TAKE_ACTION
      })
    }), ei = 6) : eL ? (er = (0, r.jsx)(F.A, {
      isSelected: el,
      discountOffer: eA
    }), ei = 8) : eC && eK === o.M.PREMIUM_ORBS_UPSELL_POPOVER || eP && eK === o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER ? (er = (0, r.jsx)(u.Exy, {
      type: "new",
      variant: "expressive"
    }), ei = 2) : ex && eZ === o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER && (er = (0, r.jsx)(u.Exy, {
      type: "new",
      variant: "expressive"
    }), ei = 2) : (er = (0, r.jsx)(Y.Ag, {
      trialOffer: em,
      isTabSelected: el
    }), ei = 4);
    eI && (er = (0, r.jsx)(Y.MA, {
      isTabSelected: el,
      badgeCopy: ee.intl.string(ee.t.RDE0Sc),
      offerExpiresAt: null
    }), ei = 4, e0 = () => {
      O.default.track(J.HAw.NITRO_TAB_VISITED, {
        badge_decorator: ei,
        has_premium: ep
      }), (0, k.ne)()
    });
    let e6 = (0, r.jsx)(d.z9, (n = function(e) {
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
      listItemRef: ea,
      selected: el,
      route: es,
      icon: u.tvc,
      text: (0, r.jsx)(c.A, {
        children: eh ? ee.intl.string(ee.t["4gwVVn"]) : ee.intl.string(ee.t.Ipxkog)
      }),
      locationState: eo,
      onClick: e0
    }, ec, eg), I = I = {
      className: en,
      children: er
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(I)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(I)).forEach(function(e) {
      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(I, e))
    }), n));
    return ew ? (0, r.jsx)(K.T, {
      children: e6
    }) : eL && eK === o.M.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK && 8 === ei ? (0, r.jsx)(H.A, {
      targetElementRef: ea,
      discountOffer: eA,
      premiumSubscription: ed,
      dismissCoachmark: eW,
      children: e6
    }) : e1 ? (0, r.jsx)(L.p, {
      targetElementRef: ea,
      dismissPopover: eW,
      children: e6
    }) : eC && eK === o.M.PREMIUM_ORBS_UPSELL_POPOVER ? (0, r.jsx)(B.A, {
      targetElementRef: ea,
      dismissPopover: eW,
      children: e6
    }) : eP && eK === o.M.PREMIUM_ORBS_REWARDS_INTRO_POPOVER ? (0, r.jsx)(G.A, {
      targetElementRef: ea,
      dismissPopover: eW,
      children: e6
    }) : ex && eZ === o.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER ? (0, r.jsx)(V.A, {
      targetElementRef: ea,
      dismissPopover: eJ,
      lastGrantedRewardAmount: ej,
      children: e6
    }) : e$ ? (0, r.jsx)(W.A, {
      children: e6
    }) : e6
  }