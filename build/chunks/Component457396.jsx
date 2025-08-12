/** Chunk was on 1272 **/
/** chunk id: 457396, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  g: () => B,
  i: () => V
}), require("./388685.js"), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk515753 = require("./515753.jsx"),
  Chunk927359 = require("./927359.js"),
  Chunk975298 = require("./975298.js"),
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
    } = e, n = (0, a.e7)([g.default], () => g.default.getCurrentUser()), r = (0, a.e7)([m.Z], () => m.Z.getPremiumTypeSubscription()), i = (0, T.N)(), l = (0, N.Ng)(), o = (0, E.Vi)(), s = (0, L.V)(), c = (0, _.Qo)(n, r), u = (0, a.e7)([O.Z], () => O.Z.getCreatedAtOverride()), d = t || null != i || null != l || o || null != s || c, p = null != u ? u : null == n ? true : n.createdAt;
    return d || null != n && null != p && Date.now() - p.getTime() > 12096e5
  },
  B = e => {
    let t, n, O;
    var B, H, {
        selected: F,
        nitroTabButtonRef: z,
        route: W,
        locationState: Y
      } = e,
      K = function(e, t) {
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
    let q = (0, a.e7)([g.default], () => g.default.getCurrentUser()),
      X = (0, a.e7)([m.Z], () => m.Z.getPremiumTypeSubscription()),
      Q = (0, _.Qo)(q, X),
      {
        enabled: J,
        variant: $
      } = v.p1.useExperiment({
        location: "NitroTabButton"
      }),
      {
        enabled: ee
      } = v.pd.useExperiment({
        location: "NitroTabButton"
      });
    v.VL.useConfig({
      location: "NitroTabButton"
    }), v.CF.useConfig({
      location: "NitroTabButton"
    });
    let et = (0, l.JA)("nitro"),
      en = (0, T.N)(),
      er = (0, N.Ng)(),
      ei = (0, y.W)(),
      el = (0, E.Vi)(),
      ea = (0, j.HI)({
        trialOffer: en
      }),
      eo = (0, L.V)(),
      es = (0, j.eW)(),
      ec = I.ZP.useExperiment({
        location: "NitroTabButton"
      }),
      eu = (0, R.Kn)("NitroTabButton") && ec.cohort === I.xI.Control,
      {
        fractionalState: ed,
        startsAt: ep,
        endsAt: eh
      } = (0, d.Z)({
        forceFetch: true
      }),
      [ef, eg] = (0, f.bf)(ed !== k.a$.NONE ? o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
        showAfterTimestamp: ep.valueOf(),
        cooldownDurationMs: 0
      }),
      em = (0, C.Z)({
        location: "NitroTabButton"
      }),
      eb = (null == en ? true : en.trial_id) === k.a7,
      e_ = [];
    (0, p.Kl)() && (el && e_.push(o.z.BOGO_2025_NITRO_TAB_BADGE), em && e_.push(o.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE), ei && e_.push(o.z.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2));
    let [eO, eE] = (0, f.US)(e_, true, true);
    if (i.useEffect(() => {
        true === F && null != eO && eE(U.L.AUTO_DISMISS)
      }, [eE, F, eO]), !V({
        selected: F
      })) return null;
    let ey = () => {
      ef === o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL && eg(U.L.TAKE_ACTION), b.default.track(M.rMx.NITRO_TAB_VISITED, {
        badge_decorator: O,
        has_premium: Q
      }), null != eO && eE(U.L.USER_DISMISS)
    };
    if (ed === k.a$.NONE || ei || (O = 7, n = (0, r.jsx)(S.Z, {
        className: "",
        startsAt: ep,
        endsAt: eh,
        messageStyle: u.aj.SHORT_TIME,
        upperCase: true
      })), el) n = (0, r.jsx)(P.Z, {}), O = 0;
    else if (ea) {
      let e = (0, j.$q)();
      n = (0, r.jsx)(Z._y, {
        isTabSelected: F,
        badgeCopy: G.intl.string(G.t.OS9KPj),
        offerExpiresAt: true === e ? null == en ? true : en.expires_at : null
      }), O = 4
    } else eO === o.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE ? (n = (0, r.jsx)(Z._y, {
      isTabSelected: F,
      badgeCopy: G.intl.string(G.t.y2b7CA),
      offerExpiresAt: null
    }), O = 2) : ei ? (n = (0, r.jsx)(w.S, {
      expiresAt: eh
    }), O = 4) : null != eo ? (n = (0, r.jsx)(D.Z, {
      copy: eo,
      showStars: false
    }), O = 1) : null != er ? (n = (0, r.jsx)(Z.GN, {
      userDiscount: er,
      isTabSelected: F,
      includesAmountOff: false
    }), O = 3) : null == en || eb ? eu && (n = (0, r.jsx)(A.l, {
      isSelected: F,
      onSelect: () => (0, h.Q3)(o.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, {
        dismissAction: U.L.TAKE_ACTION
      })
    }), O = 6) : (n = (0, r.jsx)(Z.$H, {
      trialOffer: en,
      isTabSelected: F
    }), O = 4);
    let ev = G.intl.string(G.t.Ipxkoq);
    Q && ee && (ev = G.intl.string(G.t["4gwVVl"])), !Q && J && ($ === v.Rx.TRY_NITRO && null != en ? ev = G.intl.string(G.t["3O6A4e"]) : $ === v.Rx.JOIN_NITRO ? ev = G.intl.string(G.t.brBiOz) : $ === v.Rx.GET_NITRO && (ev = G.intl.string(G.t.GayC1t))), es && ec.cohort !== I.xI.Control && (n = (0, r.jsx)(Z._y, {
      isTabSelected: F,
      badgeCopy: G.intl.string(G.t.RDE0SU),
      offerExpiresAt: null
    }), O = 4, ey = () => {
      b.default.track(M.rMx.NITRO_TAB_VISITED, {
        badge_decorator: O,
        has_premium: Q
      }), (0, j.ZL)()
    });
    let eI = (0, r.jsx)(c.Qj, (B = function(e) {
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
      listItemRef: z,
      selected: F,
      route: W,
      icon: s.SrA,
      text: ev,
      locationState: Y,
      onClick: ey
    }, K, et), H = H = {
      className: t,
      children: n
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(B, Object.getOwnPropertyDescriptors(H)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(H)).forEach(function(e) {
      Object.defineProperty(B, e, Object.getOwnPropertyDescriptor(H, e))
    }), B));
    return es && ec.cohort === I.xI.Static ? (0, r.jsx)(x.X, {
      children: eI
    }) : eu ? (0, r.jsx)(A.C, {
      children: eI
    }) : eI
  }