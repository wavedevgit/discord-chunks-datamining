/** Chunk was on 32923 **/
/** chunk id: 626137, original params: e,t,n (module,exports,require) **/
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
  Chunk461192 = require("./461192.js");

function N(e) {
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
let E = function(e, t, n) {
    let r = arguments.length > 3 && true !== arguments[3] && arguments[3],
      i = null;
    return null == t || Number.isNaN(t) ? (null == t || Number.isNaN(t)) && null != e && (i = C.intl.string(C.t.xO2msf)) : i = C.intl.formatToPlainString(C.t.nskeMw, {
      percentage: (0, a.o)(Math.abs(t), n)
    }), {
      localizedNumber: null != e ? "".concat((0, a.o)(e, n)).concat(r ? "%" : "") : C.intl.string(C.t.jHpxwo),
      subtext: i,
      isTrendingUp: t > 0,
      isTrendingDown: t < 0
    }
  },
  I = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
    return t || e === v.evJ.NOT_ENOUGH_GUILD_MEMBERS ? (0, r.jsx)("div", {
      className: y.notEnoughMembersError,
      children: (0, r.jsx)(c.M14, {
        type: "info",
        children: C.intl.string(C.t["FsgE/B"])
      })
    }) : null == e ? null : (0, r.jsx)(c.M14, {
      type: "critical",
      children: C.intl.string(C.t.Iju63e)
    })
  },
  S = () => {
    let [e, t] = Chunk473749.useState(false), n = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuildId());
    return (0, Chunk54381.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: Chunk461192.developerPortalCta,
      children: (0, Chunk54381.jsx)(Chunk481060.Button, {
        variant: "primary",
        text: Chunk388032.intl.string(Chunk388032.t.Uskgxx),
        onClick: () => {
          exports(true), (function(e) {
            h.default.track(v.rMx.GUILD_INSIGHTS_SETTINGS_CTA_CLICKED, {
              guild_id: e
            });
            let t = null == e ? v.E07.DEVELOPER_PORTAL : v.E07.DEVELOPER_PORTAL_GUILD_ANALYTICS(e),
              n = (0, l.Z)();
            return o.tn.post({
              url: v.ANM.HANDOFF,
              body: {
                key: n
              },
              oldFormErrors: true,
              rejectWithError: true
            }).then(e => {
              let r = e.body.handoff_token;
              window.open(v.EYA.DEVELOPER_PORTAL_LOGIN_HANDOFF(n, r, t))
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
      h = (0, Chunk442837.e7)([Chunk246946.Z], () => Chunk246946.Z.getSettings().enabled),
      T = null == exports || null == require || null != exports && exports < 500 && null != require && !require.features.has(Chunk981631.GuildFeatures.PARTNERED) && !require.features.has(Chunk981631.GuildFeatures.VERIFIED);
    Chunk473749.useEffect(() => {
      null == module || T || ((0, Chunk798528.Vk)(module), (0, Chunk798528.SR)(module), (0, Chunk798528.xl)(module))
    }, [module, T]), Chunk473749.useEffect(() => {
      (0, Chunk142497.Kw)(Chunk190378.v.GUILD_ANALYTICS_GUILD_SETTINGS_MENU)
    }, []);
    let P = null != Chunk640358 ? (0, Chunk54381.jsx)("div", {
      className: Chunk461192.__invalid_guildAnalyticsOverviewWrapper,
      children: (0, Chunk54381.jsxs)("div", {
        className: Chunk461192.overviewData,
        children: [(0, Chunk54381.jsx)(Chunk795145.Z, N({
          title: Chunk388032.intl.string(Chunk388032.t.i0NorT),
          tooltipText: Chunk388032.intl.string(Chunk388032.t.KiRbLJ)
        }, E(Chunk640358.visitors, Chunk640358.visitorsChange, Chunk772848))), (0, Chunk54381.jsx)(Chunk795145.Z, N({
          title: Chunk388032.intl.string(Chunk388032.t.DDAHdQ),
          tooltipText: Chunk388032.intl.string(Chunk388032.t.HxWUkU)
        }, E(Chunk640358.communicators, Chunk640358.communicatorsChange, Chunk772848))), (0, Chunk54381.jsx)(Chunk795145.Z, N({
          title: Chunk388032.intl.string(Chunk388032.t.hYeOqC)
        }, E(Chunk640358.newMembers, Chunk640358.newMembersChange, Chunk772848))), (0, Chunk54381.jsx)(Chunk795145.Z, N({
          title: Chunk388032.intl.string(Chunk388032.t.jj7OPw),
          tooltipText: Chunk388032.intl.string(Chunk388032.t.MQCslz)
        }, E(Chunk640358.pctRetained, Chunk640358.pctRetainedChange, Chunk772848, true)))]
      })
    }) : null;
    return (0, Chunk54381.jsxs)("div", {
      children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
        variant: "heading-lg/semibold",
        children: Chunk388032.intl.string(Chunk388032.t["0wWfUG"])
      }), (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        children: Chunk388032.intl.format(Chunk388032.t.NIZ60a, {})
      }), I(Chunk544891, T), (0, Chunk54381.jsxs)("div", {
        className: Chunk461192.developerPortalCtaWrapper,
        children: [(0, Chunk54381.jsx)("div", {
          className: Chunk461192.placeholderImage
        }), (0, Chunk54381.jsx)(Chunk481060.Text, {
          className: Chunk461192.developerPortalCtaText,
          variant: "text-sm/normal",
          children: Chunk388032.intl.string(Chunk388032.t.A5vswv)
        }), (0, Chunk54381.jsx)(S, {})]
      }), Chunk626135 ? (0, Chunk54381.jsx)("div", {
        className: Chunk461192.streamerMode,
        children: (0, Chunk54381.jsx)(Chunk497321.Z, {})
      }) : P]
    })
  }