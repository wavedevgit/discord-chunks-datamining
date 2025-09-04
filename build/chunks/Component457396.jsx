/** Chunk was on 1272 **/
/** chunk id: 457396, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  g: () => Y,
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
  Chunk219673 = require("./219673.js"),
  Chunk532245 = require("./532245.js"),
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
    } = e, n = (0, a.e7)([m.default], () => m.default.getCurrentUser()), r = (0, a.e7)([b.Z], () => b.Z.getPremiumTypeSubscription()), i = (0, x.N)(), l = (0, P.Ng)(), o = (0, y.Vi)(), s = (0, U.V)(), c = (0, O.Qo)(n, r), u = (0, a.e7)([E.Z], () => E.Z.getCreatedAtOverride()), d = t || null != i || null != l || o || null != s || c, p = null != u ? u : null == n ? true : n.createdAt;
    return d || null != n && null != p && Date.now() - p.getTime() > 12096e5
  },
  Y = e => {
    let t, n, E;
    var Y, K, {
        selected: q,
        nitroTabButtonRef: Q,
        route: X,
        locationState: J
      } = e,
      $ = function(e, t) {
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
    let ee = (0, a.e7)([m.default], () => m.default.getCurrentUser()),
      et = (0, a.e7)([b.Z], () => b.Z.getPremiumTypeSubscription()),
      en = (0, O.Qo)(ee, et),
      er = (0, O.M5)(ee, V.p9.TIER_2),
      {
        enabled: ei,
        variant: el
      } = C.p1.useExperiment({
        location: "NitroTabButton"
      }),
      {
        enabled: ea
      } = C.pd.useExperiment({
        location: "NitroTabButton"
      }),
      {
        enabled: eo
      } = I.b.useConfig({
        location: "NitroTabButton"
      });
    C.VL.useConfig({
      location: "NitroTabButton"
    }), C.CF.useConfig({
      location: "NitroTabButton"
    });
    let es = (0, l.JA)("nitro"),
      ec = (0, x.N)(),
      eu = (0, P.Ng)(),
      ed = (0, j.$)("nitro tab"),
      ep = (0, v.W)(),
      ef = (0, y.Vi)(),
      eh = (0, Z.HI)({
        trialOffer: ec
      }),
      eg = (0, U.V)(),
      em = (0, Z.eW)(),
      eb = S.ZP.useExperiment({
        location: "NitroTabButton"
      }),
      e_ = (0, G.Kn)() && eb.cohort === S.xI.Control,
      eO = eo && null != ed && null != et && et.status === H.O0b.CANCELED,
      {
        fractionalState: eE,
        startsAt: ey,
        endsAt: ev
      } = (0, d.Z)({
        forceFetch: true
      }),
      [eI, eC] = (0, g.bf)(eE !== V.a$.NONE ? o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
        showAfterTimestamp: ey.valueOf(),
        cooldownDurationMs: 0
      }),
      eS = (0, N.Z)({
        location: "NitroTabButton"
      }),
      eN = (null == ec ? true : ec.trial_id) === V.a7,
      eT = (0, p.YZ)("NitroTabButton"),
      ej = [],
      eP = [];
    (0, f.Kl)() && (ef && ej.push(o.z.BOGO_2025_NITRO_TAB_BADGE), eS && ej.push(o.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE), ep && ej.push(o.z.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2), eT && ej.push(o.z.CUSTOM_THEMES_PREMIUM_TAB_BADGE));
    let [ex, eA] = (0, g.US)(ej, true, true);
    eO && eP.push(o.z.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK);
    let [eZ, ew] = (0, g.US)(eP, true, true);
    if (i.useEffect(() => {
        true === q && null != ex && eA(F.L.AUTO_DISMISS)
      }, [eA, q, ex]), !W({
        selected: q
      })) return null;
    let eL = () => {
      eI === o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL && eC(F.L.TAKE_ACTION), _.default.track(H.rMx.NITRO_TAB_VISITED, {
        badge_decorator: E,
        has_premium: en
      }), null != ex && eA(F.L.USER_DISMISS)
    };
    if (eE === V.a$.NONE || ep || (E = 7, n = (0, r.jsx)(T.Z, {
        className: "",
        startsAt: ey,
        endsAt: ev,
        messageStyle: u.aj.SHORT_TIME,
        upperCase: true
      })), ef) n = (0, r.jsx)(A.Z, {}), E = 0;
    else if (eh) {
      let e = (0, Z.$q)();
      n = (0, r.jsx)(D._y, {
        isTabSelected: q,
        badgeCopy: z.intl.string(z.t.OS9KPj),
        offerExpiresAt: true === e ? null == ec ? true : ec.expires_at : null
      }), E = 4
    } else ex === o.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE || ex === o.z.CUSTOM_THEMES_PREMIUM_TAB_BADGE ? (n = (0, r.jsx)(D._y, {
      isTabSelected: q,
      badgeCopy: z.intl.string(z.t.y2b7CA),
      offerExpiresAt: null
    }), E = 2) : ep ? (n = (0, r.jsx)(M.S, {
      expiresAt: ev
    }), E = 4) : null != eg ? (n = (0, r.jsx)(B.Z, {
      copy: eg,
      showStars: false
    }), E = 1) : null != eu ? (n = (0, r.jsx)(D.GN, {
      userDiscount: eu,
      isTabSelected: q,
      includesAmountOff: false
    }), E = 3) : null == ec || eN ? e_ ? (n = (0, r.jsx)(k.l, {
      isSelected: q,
      onSelect: () => (0, h.Q3)(o.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, {
        dismissAction: F.L.TAKE_ACTION
      })
    }), E = 6) : eO && (n = (0, r.jsx)(R.Z, {
      isSelected: q,
      discountOffer: ed
    }), E = 8) : (n = (0, r.jsx)(D.$H, {
      trialOffer: ec,
      isTabSelected: q
    }), E = 4);
    let eR = z.intl.string(z.t.Ipxkoq);
    er && ea && (eR = z.intl.string(z.t["4gwVVl"])), !en && ei && (el === C.Rx.TRY_NITRO && null != ec ? eR = z.intl.string(z.t["3O6A4e"]) : el === C.Rx.JOIN_NITRO ? eR = z.intl.string(z.t.brBiOz) : el === C.Rx.GET_NITRO && (eR = z.intl.string(z.t.GayC1t))), em && eb.cohort !== S.xI.Control && (n = (0, r.jsx)(D._y, {
      isTabSelected: q,
      badgeCopy: z.intl.string(z.t.RDE0SU),
      offerExpiresAt: null
    }), E = 4, eL = () => {
      _.default.track(H.rMx.NITRO_TAB_VISITED, {
        badge_decorator: E,
        has_premium: en
      }), (0, Z.ZL)()
    });
    let eD = (0, r.jsx)(c.Qj, (Y = function(e) {
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
      listItemRef: Q,
      selected: q,
      route: X,
      icon: s.SrA,
      text: eR,
      locationState: J,
      onClick: eL
    }, $, es), K = K = {
      className: t,
      children: n
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(Y, Object.getOwnPropertyDescriptors(K)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(K)).forEach(function(e) {
      Object.defineProperty(Y, e, Object.getOwnPropertyDescriptor(K, e))
    }), Y));
    return em && eb.cohort === S.xI.Static ? (0, r.jsx)(w.X, {
      children: eD
    }) : e_ ? (0, r.jsx)(k.C, {
      children: eD
    }) : eO && eZ === o.z.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK && 8 === E ? (0, r.jsx)(L.Z, {
      targetElementRef: Q,
      discountOffer: ed,
      premiumSubscription: et,
      dismissCoachmark: ew,
      children: eD
    }) : eD
  }