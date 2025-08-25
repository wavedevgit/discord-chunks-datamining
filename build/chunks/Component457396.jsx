/** Chunk was on 1272 **/
/** chunk id: 457396, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  g: () => H,
  i: () => V
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
  Chunk532245 = require("./532245.js"),
  Chunk870041 = require("./870041.js"),
  Chunk963590 = require("./963590.js"),
  Chunk767870 = require("./767870.jsx"),
  Chunk104494 = require("./104494.js"),
  Chunk639119 = require("./639119.js"),
  Chunk655525 = require("./655525.jsx"),
  Chunk93237 = require("./93237.js"),
  Chunk138176 = require("./138176.jsx"),
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
let V = e => {
    let {
      selected: t
    } = e, n = (0, a.e7)([m.default], () => m.default.getCurrentUser()), r = (0, a.e7)([b.Z], () => b.Z.getPremiumTypeSubscription()), i = (0, P.N)(), l = (0, T.Ng)(), o = (0, y.Vi)(), s = (0, R.V)(), c = (0, O.Qo)(n, r), u = (0, a.e7)([E.Z], () => E.Z.getCreatedAtOverride()), d = t || null != i || null != l || o || null != s || c, p = null != u ? u : null == n ? true : n.createdAt;
    return d || null != n && null != p && Date.now() - p.getTime() > 12096e5
  },
  H = e => {
    let t, n, E;
    var H, F, {
        selected: z,
        nitroTabButtonRef: W,
        route: Y,
        locationState: K
      } = e,
      q = function(e, t) {
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
    let Q = (0, a.e7)([m.default], () => m.default.getCurrentUser()),
      X = (0, a.e7)([b.Z], () => b.Z.getPremiumTypeSubscription()),
      J = (0, O.Qo)(Q, X),
      {
        enabled: $,
        variant: ee
      } = I.p1.useExperiment({
        location: "NitroTabButton"
      }),
      {
        enabled: et
      } = I.pd.useExperiment({
        location: "NitroTabButton"
      });
    I.VL.useConfig({
      location: "NitroTabButton"
    }), I.CF.useConfig({
      location: "NitroTabButton"
    });
    let en = (0, l.JA)("nitro"),
      er = (0, P.N)(),
      ei = (0, T.Ng)(),
      el = (0, v.W)(),
      ea = (0, y.Vi)(),
      eo = (0, x.HI)({
        trialOffer: er
      }),
      es = (0, R.V)(),
      ec = (0, x.eW)(),
      eu = C.ZP.useExperiment({
        location: "NitroTabButton"
      }),
      ed = (0, D.Kn)("NitroTabButton") && eu.cohort === C.xI.Control,
      {
        fractionalState: ep,
        startsAt: ef,
        endsAt: eh
      } = (0, d.Z)({
        forceFetch: true
      }),
      [eg, em] = (0, g.bf)(ep !== M.a$.NONE ? o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
        showAfterTimestamp: ef.valueOf(),
        cooldownDurationMs: 0
      }),
      eb = (0, S.Z)({
        location: "NitroTabButton"
      }),
      e_ = (null == er ? true : er.trial_id) === M.a7,
      eO = (0, p.YZ)(),
      eE = [];
    (0, f.Kl)() && (ea && eE.push(o.z.BOGO_2025_NITRO_TAB_BADGE), eb && eE.push(o.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE), el && eE.push(o.z.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2), eO && eE.push(o.z.CUSTOM_THEMES_PREMIUM_TAB_BADGE));
    let [ey, ev] = (0, g.US)(eE, true, true);
    if (i.useEffect(() => {
        true === z && null != ey && ev(G.L.AUTO_DISMISS)
      }, [ev, z, ey]), !V({
        selected: z
      })) return null;
    let eI = () => {
      eg === o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL && em(G.L.TAKE_ACTION), _.default.track(U.rMx.NITRO_TAB_VISITED, {
        badge_decorator: E,
        has_premium: J
      }), null != ey && ev(G.L.USER_DISMISS)
    };
    if (ep === M.a$.NONE || el || (E = 7, n = (0, r.jsx)(N.Z, {
        className: "",
        startsAt: ef,
        endsAt: eh,
        messageStyle: u.aj.SHORT_TIME,
        upperCase: true
      })), ea) n = (0, r.jsx)(j.Z, {}), E = 0;
    else if (eo) {
      let e = (0, x.$q)();
      n = (0, r.jsx)(Z._y, {
        isTabSelected: z,
        badgeCopy: B.intl.string(B.t.OS9KPj),
        offerExpiresAt: true === e ? null == er ? true : er.expires_at : null
      }), E = 4
    } else ey === o.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE || ey === o.z.CUSTOM_THEMES_PREMIUM_TAB_BADGE ? (n = (0, r.jsx)(Z._y, {
      isTabSelected: z,
      badgeCopy: B.intl.string(B.t.y2b7CA),
      offerExpiresAt: null
    }), E = 2) : el ? (n = (0, r.jsx)(L.S, {
      expiresAt: eh
    }), E = 4) : null != es ? (n = (0, r.jsx)(k.Z, {
      copy: es,
      showStars: false
    }), E = 1) : null != ei ? (n = (0, r.jsx)(Z.GN, {
      userDiscount: ei,
      isTabSelected: z,
      includesAmountOff: false
    }), E = 3) : null == er || e_ ? ed && (n = (0, r.jsx)(w.l, {
      isSelected: z,
      onSelect: () => (0, h.Q3)(o.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, {
        dismissAction: G.L.TAKE_ACTION
      })
    }), E = 6) : (n = (0, r.jsx)(Z.$H, {
      trialOffer: er,
      isTabSelected: z
    }), E = 4);
    let eC = B.intl.string(B.t.Ipxkoq);
    J && et && (eC = B.intl.string(B.t["4gwVVl"])), !J && $ && (ee === I.Rx.TRY_NITRO && null != er ? eC = B.intl.string(B.t["3O6A4e"]) : ee === I.Rx.JOIN_NITRO ? eC = B.intl.string(B.t.brBiOz) : ee === I.Rx.GET_NITRO && (eC = B.intl.string(B.t.GayC1t))), ec && eu.cohort !== C.xI.Control && (n = (0, r.jsx)(Z._y, {
      isTabSelected: z,
      badgeCopy: B.intl.string(B.t.RDE0SU),
      offerExpiresAt: null
    }), E = 4, eI = () => {
      _.default.track(U.rMx.NITRO_TAB_VISITED, {
        badge_decorator: E,
        has_premium: J
      }), (0, x.ZL)()
    });
    let eS = (0, r.jsx)(c.Qj, (H = function(e) {
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
      listItemRef: W,
      selected: z,
      route: Y,
      icon: s.SrA,
      text: eC,
      locationState: K,
      onClick: eI
    }, q, en), F = F = {
      className: t,
      children: n
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(H, Object.getOwnPropertyDescriptors(F)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(F)).forEach(function(e) {
      Object.defineProperty(H, e, Object.getOwnPropertyDescriptor(F, e))
    }), H));
    return ec && eu.cohort === C.xI.Static ? (0, r.jsx)(A.X, {
      children: eS
    }) : ed ? (0, r.jsx)(w.C, {
      children: eS
    }) : eS
  }