/** Chunk was on 1272 **/
/** chunk id: 457396, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  g: () => q,
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
  Chunk266198 = require("./266198.js"),
  Chunk219673 = require("./219673.js"),
  Chunk963590 = require("./963590.js"),
  Chunk767870 = require("./767870.jsx"),
  Chunk331972 = require("./331972.js"),
  Chunk104494 = require("./104494.js"),
  Chunk639119 = require("./639119.js"),
  Chunk655525 = require("./655525.jsx"),
  Chunk93237 = require("./93237.js"),
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
let W = e => {
    let {
      selected: t
    } = e, n = (0, a.e7)([m.default], () => m.default.getCurrentUser()), r = (0, a.e7)([b.Z], () => b.Z.getPremiumTypeSubscription()), i = (0, P.N)(), l = (0, j.Ng)(), o = (0, y.Vi)(), s = (0, U.V)(), c = (0, O.Qo)(n, r), u = (0, a.e7)([E.Z], () => E.Z.getCreatedAtOverride()), d = t || null != i || null != l || o || null != s || c, p = null != u ? u : null == n ? true : n.createdAt;
    return d || null != n && null != p && Date.now() - p.getTime() > 12096e5
  },
  q = e => {
    let t, n, E;
    var q, Y, {
        selected: K,
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
        enabled: ei
      } = S.b.useConfig({
        location: "NitroTabButton"
      }),
      el = (0, l.JA)("nitro"),
      ea = (0, P.N)(),
      eo = (0, j.Ng)(),
      es = (0, N.$)("nitro tab"),
      ec = (0, v.W)(),
      eu = (0, y.Vi)(),
      {
        isEligible: ed,
        cohort: ep
      } = (0, I.Q1)(),
      ef = (0, A.HI)({
        trialOffer: ea
      }),
      eh = (0, U.V)(),
      eg = (0, A.eW)(),
      em = (0, G.Kn)(),
      eb = ei && null != es && null != et && et.status === H.O0b.CANCELED,
      {
        fractionalState: e_,
        startsAt: eO,
        endsAt: eE
      } = (0, d.Z)({
        forceFetch: true
      }),
      [ey, ev] = (0, g.bf)(e_ !== V.a$.NONE ? o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
        showAfterTimestamp: eO.valueOf(),
        cooldownDurationMs: 0
      }),
      eI = (0, C.Z)({
        location: "NitroTabButton"
      }),
      eS = (null == ea ? true : ea.trial_id) === V.a7,
      eC = (0, p.YZ)("NitroTabButton"),
      eT = [],
      eN = [];
    (0, f.Kl)() && (ed && eT.push(o.z.SEPTEMBER_2025_MARKETING_MOMENT_NITRO_TAB_BADGE), eu && eT.push(o.z.BOGO_2025_NITRO_TAB_BADGE), eI && eT.push(o.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE), ec && eT.push(o.z.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2), eC && eT.push(o.z.CUSTOM_THEMES_PREMIUM_TAB_BADGE));
    let [ej, eP] = (0, g.US)(eT, true, true);
    eb && eN.push(o.z.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK), ed && (0, I.G2)() && eN.push(o.z.SEPTEMBER_2025_MARKETING_MOMENT_NITRO_TAB_COACHMARK);
    let [ex, eA] = (0, g.US)(eN, true, true);
    if (i.useEffect(() => {
        true === K && null != ej && eP(F.L.AUTO_DISMISS), true === K && null != ex && eA(F.L.AUTO_DISMISS)
      }, [eP, K, ej, eA, ex]), !W({
        selected: K
      })) return null;
    let eZ = () => {
      ey === o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL && ev(F.L.TAKE_ACTION), _.default.track(H.rMx.NITRO_TAB_VISITED, {
        badge_decorator: E,
        has_premium: en
      }), null != ej && eP(F.L.USER_DISMISS)
    };
    if (e_ === V.a$.NONE || ec || (E = 7, n = (0, r.jsx)(T.Z, {
        className: "",
        startsAt: eO,
        endsAt: eE,
        messageStyle: u.aj.SHORT_TIME,
        upperCase: true
      })), ed) n = (0, r.jsx)(k.Z, {}), E = 9;
    else if (eu) n = (0, r.jsx)(x.Z, {}), E = 0;
    else if (ef) {
      let e = (0, A.$q)();
      n = (0, r.jsx)(L._y, {
        isTabSelected: K,
        badgeCopy: z.intl.string(z.t.OS9KPj),
        offerExpiresAt: true === e ? null == ea ? true : ea.expires_at : null
      }), E = 4
    } else ej === o.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE || ej === o.z.CUSTOM_THEMES_PREMIUM_TAB_BADGE ? (n = (0, r.jsx)(L._y, {
      isTabSelected: K,
      badgeCopy: z.intl.string(z.t.y2b7CA),
      offerExpiresAt: null
    }), E = 2) : ec ? (n = (0, r.jsx)(D.S, {
      expiresAt: eE
    }), E = 4) : null != eh ? (n = (0, r.jsx)(B.Z, {
      copy: eh,
      showStars: false
    }), E = 1) : null != eo ? (n = (0, r.jsx)(L.GN, {
      userDiscount: eo,
      isTabSelected: K,
      includesAmountOff: false
    }), E = 3) : null == ea || eS ? em ? (n = (0, r.jsx)(R.l, {
      isSelected: K,
      onSelect: () => (0, h.Q3)(o.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, {
        dismissAction: F.L.TAKE_ACTION
      })
    }), E = 6) : eb && (n = (0, r.jsx)(w.Z, {
      isSelected: K,
      discountOffer: es
    }), E = 8) : (n = (0, r.jsx)(L.$H, {
      trialOffer: ea,
      isTabSelected: K
    }), E = 4);
    eg && (n = (0, r.jsx)(L._y, {
      isTabSelected: K,
      badgeCopy: z.intl.string(z.t.RDE0SU),
      offerExpiresAt: null
    }), E = 4, eZ = () => {
      _.default.track(H.rMx.NITRO_TAB_VISITED, {
        badge_decorator: E,
        has_premium: en
      }), (0, A.ZL)()
    });
    let ew = (0, r.jsx)(c.Qj, (q = function(e) {
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
      selected: K,
      route: X,
      icon: s.SrA,
      text: er ? z.intl.string(z.t["4gwVVl"]) : z.intl.string(z.t.Ipxkoq),
      locationState: J,
      onClick: eZ
    }, $, el), Y = Y = {
      className: t,
      children: n
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(q, Object.getOwnPropertyDescriptors(Y)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(Y)).forEach(function(e) {
      Object.defineProperty(q, e, Object.getOwnPropertyDescriptor(Y, e))
    }), q));
    return em ? (0, r.jsx)(R.C, {
      children: ew
    }) : eb && ex === o.z.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK && 8 === E ? (0, r.jsx)(Z.Z, {
      targetElementRef: Q,
      discountOffer: es,
      premiumSubscription: et,
      dismissCoachmark: eA,
      children: ew
    }) : ed && (0, I.G2)() && ex === o.z.SEPTEMBER_2025_MARKETING_MOMENT_NITRO_TAB_COACHMARK && 9 === E ? (0, r.jsx)(M.Z, {
      targetElementRef: Q,
      dismissCoachmark: eA,
      cohort: ep,
      children: ew
    }) : ew
  }