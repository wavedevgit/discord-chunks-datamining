/** Chunk was on 10023 **/
/** chunk id: 603274, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
}), require("./388685.js"), require("./361932.js"), require("./187205.js"), require("./539854.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk456100 = require("./456100.js"),
  Chunk317381 = require("./317381.js"),
  Chunk884338 = require("./884338.jsx"),
  Chunk565799 = require("./565799.js"),
  Chunk501655 = require("./501655.js"),
  Chunk199902 = require("./199902.js"),
  Chunk592125 = require("./592125.js"),
  Chunk594174 = require("./594174.js"),
  Chunk938475 = require("./938475.js"),
  Chunk823379 = require("./823379.js"),
  Chunk709054 = require("./709054.js"),
  Chunk853856 = require("./853856.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk102647 = require("./102647.js"),
  Chunk395530 = require("./395530.js");

function S(e, t) {
  return 0 === t.length ? null : (0, r.jsxs)("div", {
    className: C.row,
    children: [(0, r.jsx)(e, {
      className: C.activityIcon,
      color: "currentColor"
    }), (0, r.jsx)(p.ZP, {
      guildId: true,
      users: t,
      max: 6
    })]
  })
}

function I() {
  let e = (0, Chunk442837.Wu)([Chunk853856.Z, Chunk592125.Z], () => Chunk709054.default.keys(Chunk853856.Z.getFavoriteChannels()).map(e => m.Z.getChannel(e)).filter(Chunk823379.lm)),
    t = module.map(e => e.id),
    n = module.filter(e => e.type === j.d4z.GUILD_VOICE),
    i = module.filter(e => e.type === j.d4z.GUILD_STAGE_VOICE).map(e => e.id),
    l = (0, Chunk442837.Wu)([Chunk938475.ZP], () => a().flatMap(require, e => _.ZP.getVoiceStatesForChannel(e).map(e => {
      let {
        user: t
      } = e;
      return t
    })), [require]),
    o = (0, Chunk442837.Wu)([Chunk565799.Z], () => a().flatMap(Chunk120356, e => f.Z.getMutableParticipants(e, h.pV.SPEAKER).filter(e => e.type === h.Ui.VOICE).map(e => {
      let {
        user: t
      } = e;
      return t
    }))),
    x = (0, Chunk442837.e7)([Chunk565799.Z], () => {
      let e = 0;
      for (let t of Chunk120356) e += Chunk565799.Z.getParticipantCount(exports, Chunk501655.pV.AUDIENCE);
      return module
    }),
    E = (0, Chunk442837.Wu)([Chunk199902.Z], () => Chunk199902.Z.getAllApplicationStreams().filter(e => t.includes(e.channelId)).map(e => e.ownerId), [exports]),
    I = (0, Chunk442837.Wu)([Chunk317381.ZP], () => {
      let e = Chunk317381.ZP.getEmbeddedActivitiesByChannel(),
        n = [];
      for (let l of exports) {
        var r, i;
        require.push(...null != (i = null == (r = module.get(l)) ? true : Chunk54381.flatMap(e => Array.from(e.userIds))) ? Chunk120356 : [])
      }
      return require
    }, [exports]),
    P = (0, Chunk442837.Wu)([Chunk594174.default], () => I.map(e => b.default.getUser(e)), [I]),
    N = (0, Chunk442837.Wu)([Chunk594174.default], () => Chunk395530.map(e => b.default.getUser(e)), [Chunk395530]),
    Z = S(Chunk481060.gj8, l.filter(e => !E.includes(e.id) && !I.includes(e.id))),
    w = 0 === Chunk392711.length ? null : (0, Chunk54381.jsxs)("div", {
      className: Chunk102647.row,
      children: [(0, Chunk54381.jsx)(Chunk481060.ewx, {
        size: "lg",
        color: "currentColor",
        className: Chunk102647.activityIcon
      }), (0, Chunk54381.jsx)(Chunk884338.ZP, {
        guildId: true,
        users: Chunk392711,
        max: 3
      }), (0, Chunk54381.jsxs)("div", {
        className: Chunk102647.stageListenerPill,
        children: [(0, Chunk54381.jsx)(Chunk481060.VWR, {
          size: "xs",
          color: "currentColor"
        }), (0, Chunk54381.jsx)(Chunk481060.Text, {
          className: Chunk102647.stageListenerCount,
          color: "text-default",
          variant: "text-xs/medium",
          children: Chunk388032
        })]
      })]
    }),
    T = S(Chunk481060.hGI, N.filter(e => null != e && !I.includes(e.id))),
    {
      enabled: A
    } = Chunk456100.c.useExperiment({
      location: "FavoritesTooltip"
    }, {
      autoTrackExposure: true
    }),
    R = S(A ? Chunk481060.iWm : Chunk481060.nG3, P);
  return (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
    children: [w, Z, T, R]
  })
}

function P() {
  return (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
    children: [(0, Chunk54381.jsx)("div", {
      className: l()(Chunk102647.row, Chunk102647.rowGuildName),
      children: (0, Chunk54381.jsx)("span", {
        className: l()(Chunk102647.guildNameText, Chunk102647.guildNameTextLimitedSize),
        children: Chunk388032.intl.string(Chunk388032.t.wMWyci)
      })
    }), (0, Chunk54381.jsx)(I, {})]
  })
}

function N(e) {
  let {
    "aria-label": t = false,
    onShow: n,
    children: i
  } = e;
  return (0, r.jsx)(c.aML, {
    hideOnClick: true,
    spacing: 12,
    position: "right",
    text: (0, r.jsx)(P, {}),
    "aria-label": t,
    tooltipClassName: E.listItemTooltip,
    onTooltipShow: n,
    children: e => {
      var t, n;
      return (0, r.jsx)("div", (t = function(e) {
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
      }({}, e), n = n = {
        children: i
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }), t))
    }
  })
}