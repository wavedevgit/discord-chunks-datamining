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
    } = e, n = (0, a.e7)([m.default], () => m.default.getCurrentUser()), r = (0, a.e7)([b.Z], () => b.Z.getPremiumTypeSubscription()), i = (0, x.N)(), l = (0, j.Ng)(), o = (0, y.Vi)(), s = (0, U.V)(), c = (0, O.Qo)(n, r), u = (0, a.e7)([E.Z], () => E.Z.getCreatedAtOverride()), d = t || null != i || null != l || o || null != s || c, p = null != u ? u : null == n ? true : n.createdAt;
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
      {
        enabled: er,
        variant: ei
      } = C.p1.useExperiment({
        location: "NitroTabButton"
      }),
      {
        enabled: el
      } = C.pd.useExperiment({
        location: "NitroTabButton"
      }),
      {
        enabled: ea
      } = I.b.useConfig({
        location: "NitroTabButton"
      });
    C.VL.useConfig({
      location: "NitroTabButton"
    }), C.CF.useConfig({
      location: "NitroTabButton"
    });
    let eo = (0, l.JA)("nitro"),
      es = (0, x.N)(),
      ec = (0, j.Ng)(),
      eu = (0, P.$)("nitro tab"),
      ed = (0, v.W)(),
      ep = (0, y.Vi)(),
      ef = (0, Z.HI)({
        trialOffer: es
      }),
      eh = (0, U.V)(),
      eg = (0, Z.eW)(),
      em = S.ZP.useExperiment({
        location: "NitroTabButton"
      }),
      eb = (0, G.Kn)("NitroTabButton") && em.cohort === S.xI.Control,
      e_ = ea && null != eu && null != et && et.status === H.O0b.CANCELED,
      {
        fractionalState: eO,
        startsAt: eE,
        endsAt: ey
      } = (0, d.Z)({
        forceFetch: true
      }),
      [ev, eI] = (0, g.bf)(eO !== V.a$.NONE ? o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
        showAfterTimestamp: eE.valueOf(),
        cooldownDurationMs: 0
      }),
      eC = (0, N.Z)({
        location: "NitroTabButton"
      }),
      eS = (null == es ? true : es.trial_id) === V.a7,
      eN = (0, p.YZ)("NitroTabButton"),
      eT = [];
    (0, f.Kl)() && (ep && eT.push(o.z.BOGO_2025_NITRO_TAB_BADGE), eC && eT.push(o.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE), ed && eT.push(o.z.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2), eN && eT.push(o.z.CUSTOM_THEMES_PREMIUM_TAB_BADGE));
    let [eP, ej] = (0, g.US)(eT, true, true);
    if (i.useEffect(() => {
        true === q && null != eP && ej(F.L.AUTO_DISMISS)
      }, [ej, q, eP]), !W({
        selected: q
      })) return null;
    let ex = () => {
      ev === o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL && eI(F.L.TAKE_ACTION), _.default.track(H.rMx.NITRO_TAB_VISITED, {
        badge_decorator: E,
        has_premium: en
      }), null != eP && ej(F.L.USER_DISMISS)
    };
    if (eO === V.a$.NONE || ed || (E = 7, n = (0, r.jsx)(T.Z, {
        className: "",
        startsAt: eE,
        endsAt: ey,
        messageStyle: u.aj.SHORT_TIME,
        upperCase: true
      })), ep) n = (0, r.jsx)(A.Z, {}), E = 0;
    else if (ef) {
      let e = (0, Z.$q)();
      n = (0, r.jsx)(D._y, {
        isTabSelected: q,
        badgeCopy: z.intl.string(z.t.OS9KPj),
        offerExpiresAt: true === e ? null == es ? true : es.expires_at : null
      }), E = 4
    } else eP === o.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE || eP === o.z.CUSTOM_THEMES_PREMIUM_TAB_BADGE ? (n = (0, r.jsx)(D._y, {
      isTabSelected: q,
      badgeCopy: z.intl.string(z.t.y2b7CA),
      offerExpiresAt: null
    }), E = 2) : ed ? (n = (0, r.jsx)(M.S, {
      expiresAt: ey
    }), E = 4) : null != eh ? (n = (0, r.jsx)(B.Z, {
      copy: eh,
      showStars: false
    }), E = 1) : null != ec ? (n = (0, r.jsx)(D.GN, {
      userDiscount: ec,
      isTabSelected: q,
      includesAmountOff: false
    }), E = 3) : null == es || eS ? eb ? (n = (0, r.jsx)(k.l, {
      isSelected: q,
      onSelect: () => (0, h.Q3)(o.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, {
        dismissAction: F.L.TAKE_ACTION
      })
    }), E = 6) : e_ && (n = (0, r.jsx)(R.Z, {
      isSelected: q,
      discountOffer: eu
    }), E = 8) : (n = (0, r.jsx)(D.$H, {
      trialOffer: es,
      isTabSelected: q
    }), E = 4);
    let eA = z.intl.string(z.t.Ipxkoq);
    en && el && (eA = z.intl.string(z.t["4gwVVl"])), !en && er && (ei === C.Rx.TRY_NITRO && null != es ? eA = z.intl.string(z.t["3O6A4e"]) : ei === C.Rx.JOIN_NITRO ? eA = z.intl.string(z.t.brBiOz) : ei === C.Rx.GET_NITRO && (eA = z.intl.string(z.t.GayC1t))), eg && em.cohort !== S.xI.Control && (n = (0, r.jsx)(D._y, {
      isTabSelected: q,
      badgeCopy: z.intl.string(z.t.RDE0SU),
      offerExpiresAt: null
    }), E = 4, ex = () => {
      _.default.track(H.rMx.NITRO_TAB_VISITED, {
        badge_decorator: E,
        has_premium: en
      }), (0, Z.ZL)()
    });
    let eZ = (0, r.jsx)(c.Qj, (Y = function(e) {
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
      text: eA,
      locationState: J,
      onClick: ex
    }, $, eo), K = K = {
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
    return eg && em.cohort === S.xI.Static ? (0, r.jsx)(w.X, {
      children: eZ
    }) : eb ? (0, r.jsx)(k.C, {
      children: eZ
    }) : e_ && 8 === E ? (0, r.jsx)(L.Z, {
      targetElementRef: Q,
      discountOffer: eu,
      premiumSubscription: et,
      children: eZ
    }) : eZ
  }