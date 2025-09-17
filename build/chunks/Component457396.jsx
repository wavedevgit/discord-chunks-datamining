/** Chunk was on 1272 **/
/** chunk id: 457396, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  g: () => q,
  i: () => K
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
  Chunk266198 = require("./266198.js"),
  Chunk219673 = require("./219673.js"),
  Chunk870041 = require("./870041.js"),
  Chunk963590 = require("./963590.js"),
  Chunk767870 = require("./767870.jsx"),
  Chunk331972 = require("./331972.js"),
  Chunk104494 = require("./104494.js"),
  Chunk639119 = require("./639119.js"),
  Chunk655525 = require("./655525.jsx"),
  Chunk93237 = require("./93237.js"),
  Chunk138176 = require("./138176.jsx"),
  Chunk484605 = require("./484605.jsx"),
  Chunk961892 = require("./961892.jsx"),
  Chunk924540 = require("./924540.jsx"),
  Chunk474486 = require("./474486.jsx"),
  Chunk497334 = require("./497334.jsx"),
  Chunk190398 = require("./190398.jsx"),
  Chunk819573 = require("./819573.jsx"),
  Chunk119850 = require("./119850.js"),
  Chunk938736 = require("./938736.js"),
  Chunk227140 = require("./227140.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx");
let K = e => {
    let {
      selected: t
    } = e, n = (0, a.e7)([m.default], () => m.default.getCurrentUser()), r = (0, a.e7)([b.Z], () => b.Z.getPremiumTypeSubscription()), i = (0, x.N)(), l = (0, j.Ng)(), o = (0, y.Vi)(), s = (0, B.V)(), c = (0, O.Qo)(n, r), u = (0, a.e7)([E.Z], () => E.Z.getCreatedAtOverride()), d = t || null != i || null != l || o || null != s || c, p = null != u ? u : null == n ? true : n.createdAt;
    return d || null != n && null != p && Date.now() - p.getTime() > 12096e5
  },
  q = e => {
    let t, n, E;
    var q, Q, {
        selected: X,
        nitroTabButtonRef: J,
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
    let en = (0, a.e7)([m.default], () => m.default.getCurrentUser()),
      er = (0, a.e7)([b.Z], () => b.Z.getPremiumTypeSubscription()),
      ei = (0, O.Qo)(en, er),
      el = (0, O.M5)(en, F.p9.TIER_2),
      {
        enabled: ea
      } = C.b.useConfig({
        location: "NitroTabButton"
      }),
      eo = (0, l.JA)("nitro"),
      es = (0, x.N)(),
      ec = (0, j.Ng)(),
      eu = (0, P.$)("nitro tab"),
      ed = (0, v.W)(),
      ep = (0, y.Vi)(),
      {
        isEligible: ef,
        cohort: eh
      } = (0, I.Q1)(),
      eg = (0, Z.HI)({
        trialOffer: es
      }),
      em = (0, B.V)(),
      eb = (0, Z.eW)(),
      e_ = S.ZP.useExperiment({
        location: "NitroTabButton"
      }),
      eO = (0, V.Kn)() && e_.cohort === S.xI.Control,
      eE = ea && null != eu && null != er && er.status === z.O0b.CANCELED,
      {
        fractionalState: ey,
        startsAt: ev,
        endsAt: eI
      } = (0, d.Z)({
        forceFetch: true
      }),
      [eC, eS] = (0, g.bf)(ey !== F.a$.NONE ? o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
        showAfterTimestamp: ev.valueOf(),
        cooldownDurationMs: 0
      }),
      eT = (0, T.Z)({
        location: "NitroTabButton"
      }),
      eN = (null == es ? true : es.trial_id) === F.a7,
      eP = (0, p.YZ)("NitroTabButton"),
      ej = [],
      ex = [];
    (0, f.Kl)() && (ef && ej.push(o.z.SEPTEMBER_2025_MARKETING_MOMENT_NITRO_TAB_BADGE), ep && ej.push(o.z.BOGO_2025_NITRO_TAB_BADGE), eT && ej.push(o.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE), ed && ej.push(o.z.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2), eP && ej.push(o.z.CUSTOM_THEMES_PREMIUM_TAB_BADGE));
    let [eA, eZ] = (0, g.US)(ej, true, true);
    eE && ex.push(o.z.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK), ef && ex.push(o.z.SEPTEMBER_2025_MARKETING_MOMENT_NITRO_TAB_COACHMARK);
    let [ew, eL] = (0, g.US)(ex, true, true);
    if (i.useEffect(() => {
        true === X && null != eA && eZ(W.L.AUTO_DISMISS), true === X && null != ew && eL(W.L.AUTO_DISMISS)
      }, [eZ, X, eA, eL, ew]), !K({
        selected: X
      })) return null;
    let eR = () => {
      eC === o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL && eS(W.L.TAKE_ACTION), _.default.track(z.rMx.NITRO_TAB_VISITED, {
        badge_decorator: E,
        has_premium: ei
      }), null != eA && eZ(W.L.USER_DISMISS)
    };
    if (ey === F.a$.NONE || ed || (E = 7, n = (0, r.jsx)(N.Z, {
        className: "",
        startsAt: ev,
        endsAt: eI,
        messageStyle: u.aj.SHORT_TIME,
        upperCase: true
      })), ef) n = (0, r.jsx)(U.Z, {}), E = 9;
    else if (ep) n = (0, r.jsx)(A.Z, {}), E = 0;
    else if (eg) {
      let e = (0, Z.$q)();
      n = (0, r.jsx)(D._y, {
        isTabSelected: X,
        badgeCopy: Y.intl.string(Y.t.OS9KPj),
        offerExpiresAt: true === e ? null == es ? true : es.expires_at : null
      }), E = 4
    } else eA === o.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE || eA === o.z.CUSTOM_THEMES_PREMIUM_TAB_BADGE ? (n = (0, r.jsx)(D._y, {
      isTabSelected: X,
      badgeCopy: Y.intl.string(Y.t.y2b7CA),
      offerExpiresAt: null
    }), E = 2) : ed ? (n = (0, r.jsx)(M.S, {
      expiresAt: eI
    }), E = 4) : null != em ? (n = (0, r.jsx)(H.Z, {
      copy: em,
      showStars: false
    }), E = 1) : null != ec ? (n = (0, r.jsx)(D.GN, {
      userDiscount: ec,
      isTabSelected: X,
      includesAmountOff: false
    }), E = 3) : null == es || eN ? eO ? (n = (0, r.jsx)(k.l, {
      isSelected: X,
      onSelect: () => (0, h.Q3)(o.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, {
        dismissAction: W.L.TAKE_ACTION
      })
    }), E = 6) : eE && (n = (0, r.jsx)(R.Z, {
      isSelected: X,
      discountOffer: eu
    }), E = 8) : (n = (0, r.jsx)(D.$H, {
      trialOffer: es,
      isTabSelected: X
    }), E = 4);
    eb && e_.cohort !== S.xI.Control && (n = (0, r.jsx)(D._y, {
      isTabSelected: X,
      badgeCopy: Y.intl.string(Y.t.RDE0SU),
      offerExpiresAt: null
    }), E = 4, eR = () => {
      _.default.track(z.rMx.NITRO_TAB_VISITED, {
        badge_decorator: E,
        has_premium: ei
      }), (0, Z.ZL)()
    });
    let eD = (0, r.jsx)(c.Qj, (q = function(e) {
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
      selected: X,
      route: $,
      icon: s.SrA,
      text: el ? Y.intl.string(Y.t["4gwVVl"]) : Y.intl.string(Y.t.Ipxkoq),
      locationState: ee,
      onClick: eR
    }, et, eo), Q = Q = {
      className: t,
      children: n
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(q, Object.getOwnPropertyDescriptors(Q)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(Q)).forEach(function(e) {
      Object.defineProperty(q, e, Object.getOwnPropertyDescriptor(Q, e))
    }), q));
    return eb && e_.cohort === S.xI.Static ? (0, r.jsx)(w.X, {
      children: eD
    }) : eO ? (0, r.jsx)(k.C, {
      children: eD
    }) : eE && ew === o.z.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK && 8 === E ? (0, r.jsx)(L.Z, {
      targetElementRef: J,
      discountOffer: eu,
      premiumSubscription: er,
      dismissCoachmark: eL,
      children: eD
    }) : ef && (0, I.G2)() && ew === o.z.SEPTEMBER_2025_MARKETING_MOMENT_NITRO_TAB_COACHMARK && 9 === E ? (0, r.jsx)(G.Z, {
      targetElementRef: J,
      dismissCoachmark: eL,
      cohort: eh,
      children: eD
    }) : eD
  }