/** Chunk was on 1272 **/
/** chunk id: 457396, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  g: () => Q,
  i: () => q
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
  Chunk190398 = require("./190398.jsx"),
  Chunk819573 = require("./819573.jsx"),
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
    } = e, n = (0, a.e7)([m.default], () => m.default.getCurrentUser()), r = (0, a.e7)([b.Z], () => b.Z.getPremiumTypeSubscription()), i = (0, A.N)(), l = (0, x.Ng)(), o = (0, y.Vi)(), s = (0, V.V)(), c = (0, O.Qo)(n, r), u = (0, a.e7)([E.Z], () => E.Z.getCreatedAtOverride()), d = t || null != i || null != l || o || null != s || c, p = null != u ? u : null == n ? true : n.createdAt;
    return d || null != n && null != p && Date.now() - p.getTime() > 12096e5
  },
  Q = e => {
    let t, n, E;
    var Q, X, {
        selected: J,
        nitroTabButtonRef: $,
        route: ee,
        locationState: et
      } = e,
      en = function(e, t) {
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
    let er = (0, a.e7)([m.default], () => m.default.getCurrentUser()),
      ei = (0, a.e7)([b.Z], () => b.Z.getPremiumTypeSubscription()),
      el = (0, O.Qo)(er, ei),
      ea = (0, O.M5)(er, z.p9.TIER_2),
      {
        enabled: eo,
        variant: es
      } = S.p1.useExperiment({
        location: "NitroTabButton"
      }),
      {
        enabled: ec
      } = S.pd.useExperiment({
        location: "NitroTabButton"
      }),
      {
        enabled: eu
      } = C.b.useConfig({
        location: "NitroTabButton"
      });
    S.VL.useConfig({
      location: "NitroTabButton"
    }), S.CF.useConfig({
      location: "NitroTabButton"
    });
    let ed = (0, l.JA)("nitro"),
      ep = (0, A.N)(),
      ef = (0, x.Ng)(),
      eh = (0, j.$)("nitro tab"),
      eg = (0, v.W)(),
      em = (0, y.Vi)(),
      {
        isEligible: eb,
        cohort: e_
      } = (0, I.Q1)(),
      eO = (0, w.HI)({
        trialOffer: ep
      }),
      eE = (0, V.V)(),
      ey = (0, w.eW)(),
      ev = T.ZP.useExperiment({
        location: "NitroTabButton"
      }),
      eI = (0, H.Kn)() && ev.cohort === T.xI.Control,
      eC = eu && null != eh && null != ei && ei.status === W.O0b.CANCELED,
      {
        fractionalState: eS,
        startsAt: eT,
        endsAt: eN
      } = (0, d.Z)({
        forceFetch: true
      }),
      [eP, ej] = (0, g.bf)(eS !== z.a$.NONE ? o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
        showAfterTimestamp: eT.valueOf(),
        cooldownDurationMs: 0
      }),
      ex = (0, N.Z)({
        location: "NitroTabButton"
      }),
      eA = (null == ep ? true : ep.trial_id) === z.a7,
      eZ = (0, p.YZ)("NitroTabButton"),
      ew = [],
      eL = [];
    (0, f.Kl)() && (eb && ew.push(o.z.SEPTEMBER_2025_MARKETING_MOMENT_NITRO_TAB_BADGE), em && ew.push(o.z.BOGO_2025_NITRO_TAB_BADGE), ex && ew.push(o.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE), eg && ew.push(o.z.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2), eZ && ew.push(o.z.CUSTOM_THEMES_PREMIUM_TAB_BADGE));
    let [eR, eD] = (0, g.US)(ew, true, true);
    eC && eL.push(o.z.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK), eb && eL.push(o.z.SEPTEMBER_2025_MARKETING_MOMENT_NITRO_TAB_COACHMARK);
    let [ek, eM] = (0, g.US)(eL, true, true);
    if (i.useEffect(() => {
        true === J && null != eR && eD(Y.L.AUTO_DISMISS), true === J && null != ek && eM(Y.L.AUTO_DISMISS)
      }, [eD, J, eR, eM, ek]), !q({
        selected: J
      })) return null;
    let eU = () => {
      eP === o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL && ej(Y.L.TAKE_ACTION), _.default.track(W.rMx.NITRO_TAB_VISITED, {
        badge_decorator: E,
        has_premium: el
      }), null != eR && eD(Y.L.USER_DISMISS)
    };
    if (eS === z.a$.NONE || eg || (E = 7, n = (0, r.jsx)(P.Z, {
        className: "",
        startsAt: eT,
        endsAt: eN,
        messageStyle: u.aj.SHORT_TIME,
        upperCase: true
      })), eb) n = (0, r.jsx)(G.Z, {}), E = 9;
    else if (em) n = (0, r.jsx)(Z.Z, {}), E = 0;
    else if (eO) {
      let e = (0, w.$q)();
      n = (0, r.jsx)(k._y, {
        isTabSelected: J,
        badgeCopy: K.intl.string(K.t.OS9KPj),
        offerExpiresAt: true === e ? null == ep ? true : ep.expires_at : null
      }), E = 4
    } else eR === o.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE || eR === o.z.CUSTOM_THEMES_PREMIUM_TAB_BADGE ? (n = (0, r.jsx)(k._y, {
      isTabSelected: J,
      badgeCopy: K.intl.string(K.t.y2b7CA),
      offerExpiresAt: null
    }), E = 2) : eg ? (n = (0, r.jsx)(U.S, {
      expiresAt: eN
    }), E = 4) : null != eE ? (n = (0, r.jsx)(F.Z, {
      copy: eE,
      showStars: false
    }), E = 1) : null != ef ? (n = (0, r.jsx)(k.GN, {
      userDiscount: ef,
      isTabSelected: J,
      includesAmountOff: false
    }), E = 3) : null == ep || eA ? eI ? (n = (0, r.jsx)(M.l, {
      isSelected: J,
      onSelect: () => (0, h.Q3)(o.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, {
        dismissAction: Y.L.TAKE_ACTION
      })
    }), E = 6) : eC && (n = (0, r.jsx)(D.Z, {
      isSelected: J,
      discountOffer: eh
    }), E = 8) : (n = (0, r.jsx)(k.$H, {
      trialOffer: ep,
      isTabSelected: J
    }), E = 4);
    let eG = K.intl.string(K.t.Ipxkoq);
    ea && ec && (eG = K.intl.string(K.t["4gwVVl"])), !el && eo && (es === S.Rx.TRY_NITRO && null != ep ? eG = K.intl.string(K.t["3O6A4e"]) : es === S.Rx.JOIN_NITRO ? eG = K.intl.string(K.t.brBiOz) : es === S.Rx.GET_NITRO && (eG = K.intl.string(K.t.GayC1t))), ey && ev.cohort !== T.xI.Control && (n = (0, r.jsx)(k._y, {
      isTabSelected: J,
      badgeCopy: K.intl.string(K.t.RDE0SU),
      offerExpiresAt: null
    }), E = 4, eU = () => {
      _.default.track(W.rMx.NITRO_TAB_VISITED, {
        badge_decorator: E,
        has_premium: el
      }), (0, w.ZL)()
    });
    let eB = (0, r.jsx)(c.Qj, (Q = function(e) {
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
      listItemRef: $,
      selected: J,
      route: ee,
      icon: s.SrA,
      text: eG,
      locationState: et,
      onClick: eU
    }, en, ed), X = X = {
      className: t,
      children: n
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(Q, Object.getOwnPropertyDescriptors(X)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(X)).forEach(function(e) {
      Object.defineProperty(Q, e, Object.getOwnPropertyDescriptor(X, e))
    }), Q));
    return ey && ev.cohort === T.xI.Static ? (0, r.jsx)(L.X, {
      children: eB
    }) : eI ? (0, r.jsx)(M.C, {
      children: eB
    }) : eC && ek === o.z.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK && 8 === E ? (0, r.jsx)(R.Z, {
      targetElementRef: $,
      discountOffer: eh,
      premiumSubscription: ei,
      dismissCoachmark: eM,
      children: eB
    }) : eb && (0, I.G2)() && ek === o.z.SEPTEMBER_2025_MARKETING_MOMENT_NITRO_TAB_COACHMARK && 9 === E ? (0, r.jsx)(B.Z, {
      targetElementRef: $,
      dismissCoachmark: eM,
      cohort: e_,
      children: eB
    }) : eB
  }