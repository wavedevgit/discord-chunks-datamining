/** Chunk was on 1272 **/
/** chunk id: 457396, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  g: () => F,
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
    } = e, n = (0, a.e7)([m.default], () => m.default.getCurrentUser()), r = (0, a.e7)([b.Z], () => b.Z.getPremiumTypeSubscription()), i = (0, j.N)(), l = (0, N.Ng)(), o = (0, y.Vi)(), s = (0, D.V)(), c = (0, O.Qo)(n, r), u = (0, a.e7)([E.Z], () => E.Z.getCreatedAtOverride()), d = t || null != i || null != l || o || null != s || c, p = null != u ? u : null == n ? true : n.createdAt;
    return d || null != n && null != p && Date.now() - p.getTime() > 12096e5
  },
  F = e => {
    let t, n, E;
    var F, z, {
        selected: W,
        nitroTabButtonRef: q,
        route: Y,
        locationState: K
      } = e,
      Q = function(e, t) {
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
    let X = (0, a.e7)([m.default], () => m.default.getCurrentUser()),
      J = (0, a.e7)([b.Z], () => b.Z.getPremiumTypeSubscription()),
      $ = (0, O.Qo)(X, J),
      ee = (0, O.M5)(X, U.p9.TIER_2),
      {
        enabled: et
      } = I.b.useConfig({
        location: "NitroTabButton"
      }),
      en = (0, l.JA)("nitro"),
      er = (0, j.N)(),
      ei = (0, N.Ng)(),
      el = (0, T.$)("nitro tab"),
      ea = (0, v.W)(),
      eo = (0, y.Vi)(),
      es = (0, x.HI)({
        trialOffer: er
      }),
      ec = (0, D.V)(),
      eu = (0, x.eW)(),
      ed = (0, k.Kn)(),
      ep = et && null != el && null != J && J.status === G.O0b.CANCELED,
      {
        fractionalState: ef,
        startsAt: eh,
        endsAt: eg
      } = (0, d.Z)({
        forceFetch: true
      }),
      [em, eb] = (0, g.bf)(ef !== U.a$.NONE ? o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, {
        showAfterTimestamp: eh.valueOf(),
        cooldownDurationMs: 0
      }),
      e_ = (0, S.Z)({
        location: "NitroTabButton"
      }),
      eO = (null == er ? true : er.trial_id) === U.a7,
      eE = (0, p.YZ)("NitroTabButton"),
      ey = [],
      ev = [];
    (0, f.Kl)() && (eo && ey.push(o.z.BOGO_2025_NITRO_TAB_BADGE), e_ && ey.push(o.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE), ea && ey.push(o.z.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2), eE && ey.push(o.z.CUSTOM_THEMES_PREMIUM_TAB_BADGE));
    let [eI, eS] = (0, g.US)(ey, true, true);
    ep && ev.push(o.z.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK);
    let [eC, eT] = (0, g.US)(ev, true, true);
    if (i.useEffect(() => {
        true === W && null != eI && eS(B.L.AUTO_DISMISS), true === W && null != eC && eT(B.L.AUTO_DISMISS)
      }, [eS, W, eI, eT, eC]), !V({
        selected: W
      })) return null;
    let eN = () => {
      em === o.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL && eb(B.L.TAKE_ACTION), _.default.track(G.rMx.NITRO_TAB_VISITED, {
        badge_decorator: E,
        has_premium: $
      }), null != eI && eS(B.L.USER_DISMISS)
    };
    if (ef === U.a$.NONE || ea || (E = 7, n = (0, r.jsx)(C.Z, {
        className: "",
        startsAt: eh,
        endsAt: eg,
        messageStyle: u.aj.SHORT_TIME,
        upperCase: true
      })), eo) n = (0, r.jsx)(P.Z, {}), E = 0;
    else if (es) {
      let e = (0, x.$q)();
      n = (0, r.jsx)(w._y, {
        isTabSelected: W,
        badgeCopy: H.intl.string(H.t.OS9KPj),
        offerExpiresAt: true === e ? null == er ? true : er.expires_at : null
      }), E = 4
    } else eI === o.z.VOICE_FILTER_EARLY_ACCESS_PREMIUM_TAB_BADGE || eI === o.z.CUSTOM_THEMES_PREMIUM_TAB_BADGE ? (n = (0, r.jsx)(w._y, {
      isTabSelected: W,
      badgeCopy: H.intl.string(H.t.y2b7CA),
      offerExpiresAt: null
    }), E = 2) : ea ? (n = (0, r.jsx)(R.S, {
      expiresAt: eg
    }), E = 4) : null != ec ? (n = (0, r.jsx)(M.Z, {
      copy: ec,
      showStars: false
    }), E = 1) : null != ei ? (n = (0, r.jsx)(w.GN, {
      userDiscount: ei,
      isTabSelected: W,
      includesAmountOff: false
    }), E = 3) : null == er || eO ? ed ? (n = (0, r.jsx)(L.l, {
      isSelected: W,
      onSelect: () => (0, h.Q3)(o.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, {
        dismissAction: B.L.TAKE_ACTION
      })
    }), E = 6) : ep && (n = (0, r.jsx)(Z.Z, {
      isSelected: W,
      discountOffer: el
    }), E = 8) : (n = (0, r.jsx)(w.$H, {
      trialOffer: er,
      isTabSelected: W
    }), E = 4);
    eu && (n = (0, r.jsx)(w._y, {
      isTabSelected: W,
      badgeCopy: H.intl.string(H.t.RDE0SU),
      offerExpiresAt: null
    }), E = 4, eN = () => {
      _.default.track(G.rMx.NITRO_TAB_VISITED, {
        badge_decorator: E,
        has_premium: $
      }), (0, x.ZL)()
    });
    let ej = (0, r.jsx)(c.Qj, (F = function(e) {
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
      selected: W,
      route: Y,
      icon: s.SrA,
      text: ee ? H.intl.string(H.t["4gwVVl"]) : H.intl.string(H.t.Ipxkoq),
      locationState: K,
      onClick: eN
    }, Q, en), z = z = {
      className: t,
      children: n
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(F, Object.getOwnPropertyDescriptors(z)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(z)).forEach(function(e) {
      Object.defineProperty(F, e, Object.getOwnPropertyDescriptor(z, e))
    }), F));
    return ed ? (0, r.jsx)(L.C, {
      children: ej
    }) : ep && eC === o.z.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK && 8 === E ? (0, r.jsx)(A.Z, {
      targetElementRef: q,
      discountOffer: el,
      premiumSubscription: J,
      dismissCoachmark: eT,
      children: ej
    }) : ej
  }