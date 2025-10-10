/** Chunk was on 1272 **/
/** chunk id: 457396, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  g: () => z,
  i: () => F
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
  Chunk111028 = require("./111028.jsx"),
  Chunk211644 = require("./211644.js"),
  Chunk266454 = require("./266454.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk172416 = require("./172416.js"),
  Chunk594174 = require("./594174.js"),
  Chunk78839 = require("./78839.js"),
  Chunk626135 = require("./626135.js"),
  Chunk74538 = require("./74538.js"),
  Chunk502087 = require("./502087.js"),
  Chunk367074 = require("./367074.js"),
  Chunk695349 = require("./695349.js"),
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
  Chunk119850 = require("./119850.js"),
  Chunk938736 = require("./938736.js"),
  Chunk227140 = require("./227140.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx");
let F = e => {
    let {
      selected: t
    } = e, n = (0, a.e7)([_.default], () => _.default.getCurrentUser()), r = (0, a.e7)([O.Z], () => O.Z.getPremiumTypeSubscription()), i = (0, P.N)(), l = (0, j.Ng)(), o = (0, I.Vi)(), s = (0, k.V)(), c = (0, v.Qo)(n, r), u = (0, a.e7)([y.Z], () => y.Z.getCreatedAtOverride()), d = t || null != i || null != l || o || null != s || c, p = null != u ? u : null == n ? true : n.createdAt;
    return d || null != n && null != p && Date.now() - p.getTime() > 12096e5
  },
  z = e => {
    let t, n, y;
    var z, W, {
        selected: Y,
        nitroTabButtonRef: q,
        route: K,
        locationState: Q
      } = e,
      X = function(e, t) {
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
    let J = (0, a.e7)([_.default], () => _.default.getCurrentUser()),
      $ = (0, a.e7)([O.Z], () => O.Z.getPremiumTypeSubscription()),
      ee = (0, v.Qo)(J, $),
      et = (0, v.M5)(J, G.PremiumTypes.TIER_2),
      en = (0, l.JA)("nitro"),
      er = (0, P.N)(),
      ei = (0, j.Ng)(),
      el = (0, N.$)(),
      ea = (0, C.W)(),
      eo = (0, I.Vi)(),
      es = (0, A.HI)({
        trialOffer: er
      }),
      ec = (0, k.V)(),
      eu = (0, A.eW)(),
      ed = (0, M.Kn)(),
      ep = null != el && null != $ && $.status === B.O0b.CANCELED,
      {
        fractionalState: ef,
        startsAt: eh,
        endsAt: eg
      } = (0, d.Z)({
        forceFetch: true
      }),
      [em, eb] = (0, m.bf)(ef !== G.a$.NONE ? o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
        showAfterTimestamp: eh.valueOf(),
        cooldownDurationMs: 0
      }),
      e_ = (0, S.Z)({
        location: "NitroTabButton"
      }),
      eO = (null == er ? true : er.trial_id) === G.a7,
      eE = (0, p.YZ)("NitroTabButton"),
      ev = (0, b.bg)({
        location: "NitroTabButton"
      }),
      ey = [],
      eI = [];
    (0, h.Kl)() && (eo && ey.push(o.z.BOGO_2025_NITRO_TAB_BADGE), e_ && ey.push(o.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE), ea && ey.push(o.z.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2), eE && ey.push(o.z.CUSTOM_THEMES_PREMIUM_TAB_BADGE), ev && ey.push(o.z.GAME_WIDGETS_PREMIUM_TAB_BADGE));
    let [eC, eS] = (0, m.US)(ey, true, true);
    ep && eI.push(o.z.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK);
    let [eT, eN] = (0, m.US)(eI, true, true);
    if (i.useEffect(() => {
        true === Y && null != eC && eS(H.L.AUTO_DISMISS), true === Y && null != eT && eN(H.L.AUTO_DISMISS)
      }, [eS, Y, eC, eN, eT]), !F({
        selected: Y
      })) return null;
    let ej = () => {
      em === o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL && eb(H.L.TAKE_ACTION), E.default.track(B.rMx.NITRO_TAB_VISITED, {
        badge_decorator: y,
        has_premium: ee
      }), null != eC && eS(H.L.USER_DISMISS)
    };
    if (ef === G.a$.NONE || ea || (y = 7, n = (0, r.jsx)(T.Z, {
        className: "",
        startsAt: eh,
        endsAt: eg,
        messageStyle: u.aj.SHORT_TIME,
        upperCase: true
      })), eo) n = (0, r.jsx)(x.Z, {}), y = 0;
    else if (es) {
      let e = (0, A.$q)();
      n = (0, r.jsx)(L._y, {
        isTabSelected: Y,
        badgeCopy: V.intl.string(V.t.OS9KPj),
        offerExpiresAt: true === e ? null == er ? true : er.expires_at : null
      }), y = 4
    } else eC === o.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE || eC === o.z.CUSTOM_THEMES_PREMIUM_TAB_BADGE || eC === o.z.GAME_WIDGETS_PREMIUM_TAB_BADGE ? (n = (0, r.jsx)(L._y, {
      isTabSelected: Y,
      badgeCopy: V.intl.string(V.t.y2b7CA),
      offerExpiresAt: null
    }), y = 2) : ea ? (n = (0, r.jsx)(D.S, {
      expiresAt: eg
    }), y = 4) : null != ec ? (n = (0, r.jsx)(U.Z, {
      copy: ec,
      showStars: false
    }), y = 1) : null != ei ? (n = (0, r.jsx)(L.GN, {
      userDiscount: ei,
      isTabSelected: Y,
      includesAmountOff: false
    }), y = 3) : null == er || eO ? ed ? (n = (0, r.jsx)(R.l, {
      isSelected: Y,
      onSelect: () => (0, g.Q3)(o.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, {
        dismissAction: H.L.TAKE_ACTION
      })
    }), y = 6) : ep && (n = (0, r.jsx)(w.Z, {
      isSelected: Y,
      discountOffer: el
    }), y = 8) : (n = (0, r.jsx)(L.$H, {
      trialOffer: er,
      isTabSelected: Y
    }), y = 4);
    eu && (n = (0, r.jsx)(L._y, {
      isTabSelected: Y,
      badgeCopy: V.intl.string(V.t.RDE0SU),
      offerExpiresAt: null
    }), y = 4, ej = () => {
      E.default.track(B.rMx.NITRO_TAB_VISITED, {
        badge_decorator: y,
        has_premium: ee
      }), (0, A.ZL)()
    });
    let eP = (0, r.jsx)(c.Qj, (z = function(e) {
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
      listItemRef: q,
      selected: Y,
      route: K,
      icon: s.SrA,
      text: (0, r.jsx)(f.Z, {
        children: et ? V.intl.string(V.t["4gwVVl"]) : V.intl.string(V.t.Ipxkoq)
      }),
      locationState: Q,
      onClick: ej
    }, X, en), W = W = {
      className: t,
      children: n
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(z, Object.getOwnPropertyDescriptors(W)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(W)).forEach(function(e) {
      Object.defineProperty(z, e, Object.getOwnPropertyDescriptor(W, e))
    }), z));
    return ed ? (0, r.jsx)(R.C, {
      children: eP
    }) : ep && eT === o.z.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK && 8 === y ? (0, r.jsx)(Z.Z, {
      targetElementRef: q,
      discountOffer: el,
      premiumSubscription: $,
      dismissCoachmark: eN,
      children: eP
    }) : eP
  }