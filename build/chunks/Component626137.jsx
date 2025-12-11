/** Chunk was on 9536 **/
/** chunk id: 626137, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => T
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk772848 = require("./772848.js"),
  Chunk640358 = require("./640358.js"),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk481060 = require("./481060.js"),
  Chunk497321 = require("./497321.jsx"),
  Chunk142497 = require("./142497.js"),
  Chunk706454 = require("./706454.js"),
  Chunk650774 = require("./650774.js"),
  Chunk430824 = require("./430824.js"),
  Chunk246946 = require("./246946.js"),
  Chunk626135 = require("./626135.js"),
  Chunk999382 = require("./999382.js"),
  Chunk798528 = require("./798528.js"),
  Chunk743676 = require("./743676.js"),
  Chunk795145 = require("./795145.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk190378 = require("./190378.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk700374 = require("./700374.js");

function E(e) {
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
}
let I = function(e, t, n) {
    let r = arguments.length > 3 && true !== arguments[3] && arguments[3],
      i = null;
    return null == t || Number.isNaN(t) ? (null == t || Number.isNaN(t)) && null != e && (i = y.intl.string(y.t.xO2msf)) : i = y.intl.formatToPlainString(y.t.nskeMw, {
      percentage: (0, a.o)(Math.abs(t), n)
    }), {
      localizedNumber: null != e ? "".concat((0, a.o)(e, n)).concat(r ? "%" : "") : y.intl.string(y.t.jHpxwo),
      subtext: i,
      isTrendingUp: t > 0,
      isTrendingDown: t < 0
    }
  },
  S = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
    return t || e === O.evJ.NOT_ENOUGH_GUILD_MEMBERS ? (0, r.jsx)("div", {
      className: N.notEnoughMembersError,
      children: (0, r.jsx)(c.M14, {
        type: "info",
        children: y.intl.string(y.t["FsgE/B"])
      })
    }) : null == e ? null : (0, r.jsx)(c.M14, {
      type: "critical",
      children: y.intl.string(y.t.Iju63e)
    })
  },
  _ = () => {
    let [e, t] = Chunk473749.useState(false), n = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuildId());
    return (0, Chunk54381.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: Chunk700374.developerPortalCta,
      children: (0, Chunk54381.jsx)(Chunk481060.Button, {
        variant: "primary",
        text: Chunk388032.intl.string(Chunk388032.t.Uskgxx),
        onClick: () => {
          exports(true), (function(e) {
            b.default.track(O.rMx.GUILD_INSIGHTS_SETTINGS_CTA_CLICKED, {
              guild_id: e
            });
            let t = null == e ? O.E07.DEVELOPER_PORTAL : O.E07.DEVELOPER_PORTAL_GUILD_ANALYTICS(e),
              n = (0, l.Z)();
            return o.tn.post({
              url: O.ANM.HANDOFF,
              body: {
                key: n
              },
              oldFormErrors: true,
              rejectWithError: true
            }).then(e => {
              let r = e.body.handoff_token;
              window.open(O.EYA.DEVELOPER_PORTAL_LOGIN_HANDOFF(n, r, t))
            }, () => {
              window.open(t)
            })
          })(require).then(() => {
            exports(false)
          })
        },
        loading: module
      })
    })
  },
  T = () => {
    let e = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuildId()),
      t = (0, Chunk442837.e7)([Chunk650774.Z], () => Chunk650774.Z.getMemberCount(module)),
      n = (0, Chunk442837.e7)([Chunk430824.Z], () => Chunk430824.Z.getGuild(module)),
      l = (0, Chunk442837.e7)([Chunk706454.default], () => Chunk706454.default.locale),
      {
        analytics: a,
        errorCode: o
      } = (0, Chunk442837.cj)([Chunk743676.Z], () => ({
        analytics: null != module ? Chunk743676.Z.getOverviewAnalytics(module) : null,
        errorCode: Chunk743676.Z.getError()
      })),
      b = (0, Chunk442837.e7)([Chunk246946.Z], () => Chunk246946.Z.getSettings().enabled),
      T = null == exports || null == require || null != exports && exports < 500 && null != require && !require.features.has(Chunk981631.GuildFeatures.PARTNERED) && !require.features.has(Chunk981631.GuildFeatures.VERIFIED);
    Chunk473749.useEffect(() => {
      null == module || T || ((0, Chunk798528.Vk)(module), (0, Chunk798528.SR)(module), (0, Chunk798528.xl)(module))
    }, [module, T]), Chunk473749.useEffect(() => {
      (0, Chunk142497.Kw)(Chunk190378.v.GUILD_ANALYTICS_GUILD_SETTINGS_MENU)
    }, []);
    let P = null != Chunk640358 ? (0, Chunk54381.jsx)("div", {
      className: Chunk700374.__invalid_guildAnalyticsOverviewWrapper,
      children: (0, Chunk54381.jsxs)("div", {
        className: Chunk700374.overviewData,
        children: [(0, Chunk54381.jsx)(Chunk795145.Z, E({
          title: Chunk388032.intl.string(Chunk388032.t.i0NorT),
          tooltipText: Chunk388032.intl.string(Chunk388032.t.KiRbLJ)
        }, I(Chunk640358.visitors, Chunk640358.visitorsChange, Chunk772848))), (0, Chunk54381.jsx)(Chunk795145.Z, E({
          title: Chunk388032.intl.string(Chunk388032.t.DDAHdQ),
          tooltipText: Chunk388032.intl.string(Chunk388032.t.HxWUkU)
        }, I(Chunk640358.communicators, Chunk640358.communicatorsChange, Chunk772848))), (0, Chunk54381.jsx)(Chunk795145.Z, E({
          title: Chunk388032.intl.string(Chunk388032.t.hYeOqC)
        }, I(Chunk640358.newMembers, Chunk640358.newMembersChange, Chunk772848))), (0, Chunk54381.jsx)(Chunk795145.Z, E({
          title: Chunk388032.intl.string(Chunk388032.t.jj7OPw),
          tooltipText: Chunk388032.intl.string(Chunk388032.t.MQCslz)
        }, I(Chunk640358.pctRetained, Chunk640358.pctRetainedChange, Chunk772848, true)))]
      })
    }) : null;
    return (0, Chunk54381.jsxs)("div", {
      children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
        variant: "heading-lg/semibold",
        children: Chunk388032.intl.string(Chunk388032.t["0wWfUG"])
      }), (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        children: Chunk388032.intl.format(Chunk388032.t.NIZ60a, {})
      }), S(Chunk544891, T), (0, Chunk54381.jsxs)("div", {
        className: Chunk700374.developerPortalCtaWrapper,
        children: [(0, Chunk54381.jsx)("div", {
          className: Chunk700374.placeholderImage
        }), (0, Chunk54381.jsx)(Chunk481060.Text, {
          className: Chunk700374.developerPortalCtaText,
          variant: "text-sm/normal",
          children: Chunk388032.intl.string(Chunk388032.t.A5vswv)
        }), (0, Chunk54381.jsx)(_, {})]
      }), Chunk626135 ? (0, Chunk54381.jsx)("div", {
        className: Chunk700374.streamerMode,
        children: (0, Chunk54381.jsx)(Chunk497321.Z, {})
      }) : P]
    })
  }