/** Chunk was on 34779 **/
/** chunk id: 603274, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
}), require("./388685.js"), require("./361932.js"), require("./187205.js"), require("./539854.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
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
  Chunk714509 = require("./714509.js"),
  Chunk375613 = require("./375613.js");

function x(e, t) {
  return 0 === t.length ? null : (0, r.jsxs)("div", {
    className: E.row,
    children: [(0, r.jsx)(e, {
      className: E.activityIcon,
      color: "currentColor"
    }), (0, r.jsx)(h.ZP, {
      guildId: true,
      users: t,
      max: 6
    })]
  })
}

function I() {
  let e = (0, Chunk442837.Wu)([Chunk853856.Z, Chunk592125.Z], () => Chunk709054.default.keys(Chunk853856.Z.getFavoriteChannels()).map(e => m.Z.getChannel(e)).filter(Chunk823379.lm)),
    t = module.map(e => e.id),
    n = module.filter(e => e.type === v.d4z.GUILD_VOICE),
    i = module.filter(e => e.type === v.d4z.GUILD_STAGE_VOICE).map(e => e.id),
    l = (0, Chunk442837.Wu)([Chunk938475.ZP], () => s().flatMap(require, e => O.ZP.getVoiceStatesForChannel(e).map(e => {
      let {
        user: t
      } = e;
      return t
    })), [require]),
    o = (0, Chunk442837.Wu)([Chunk565799.Z], () => s().flatMap(Chunk120356, e => p.Z.getMutableParticipants(e, f.pV.SPEAKER).filter(e => e.type === f.Ui.VOICE).map(e => {
      let {
        user: t
      } = e;
      return t
    }))),
    j = (0, Chunk442837.e7)([Chunk565799.Z], () => {
      let e = 0;
      for (let t of Chunk120356) e += Chunk565799.Z.getParticipantCount(exports, Chunk501655.pV.AUDIENCE);
      return module
    }),
    S = (0, Chunk442837.Wu)([Chunk199902.Z], () => Chunk199902.Z.getAllApplicationStreams().filter(e => t.includes(e.channelId)).map(e => e.ownerId), [exports]),
    I = (0, Chunk442837.Wu)([Chunk317381.ZP], () => {
      let e = Chunk317381.ZP.getEmbeddedActivitiesByChannel(),
        n = [];
      for (let l of exports) {
        var r, i;
        require.push(...null != (i = null == (r = module.get(l)) ? true : Chunk255367.flatMap(e => Array.from(e.userIds))) ? Chunk120356 : [])
      }
      return require
    }, [exports]),
    P = (0, Chunk442837.Wu)([Chunk594174.default], () => I.map(e => b.default.getUser(e)), [I]),
    N = (0, Chunk442837.Wu)([Chunk594174.default], () => Chunk375613.map(e => b.default.getUser(e)), [Chunk375613]),
    w = x(Chunk481060.gj8, l.filter(e => !S.includes(e.id) && !I.includes(e.id))),
    Z = 0 === Chunk392711.length ? null : (0, Chunk255367.jsxs)("div", {
      className: Chunk714509.row,
      children: [(0, Chunk255367.jsx)(Chunk481060.ewx, {
        size: "lg",
        color: "currentColor",
        className: Chunk714509.activityIcon
      }), (0, Chunk255367.jsx)(Chunk884338.ZP, {
        guildId: true,
        users: Chunk392711,
        max: 3
      }), (0, Chunk255367.jsxs)("div", {
        className: Chunk714509.stageListenerPill,
        children: [(0, Chunk255367.jsx)(Chunk481060.VWR, {
          size: "xs",
          color: "currentColor"
        }), (0, Chunk255367.jsx)(Chunk481060.Text, {
          className: Chunk714509.stageListenerCount,
          color: "text-default",
          variant: "text-xs/medium",
          children: Chunk388032
        })]
      })]
    }),
    T = x(Chunk481060.hGI, N.filter(e => null != e && !I.includes(e.id))),
    {
      enabled: A
    } = Chunk456100.c.useExperiment({
      location: "FavoritesTooltip"
    }, {
      autoTrackExposure: true
    }),
    R = x(A ? Chunk481060.iWm : Chunk481060.nG3, P);
  return (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
    children: [Z, w, T, R]
  })
}

function P() {
  return (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
    children: [(0, Chunk255367.jsx)("div", {
      className: l()(Chunk714509.row, Chunk714509.rowGuildName),
      children: (0, Chunk255367.jsx)("span", {
        className: l()(Chunk714509.guildNameText, Chunk714509.guildNameTextLimitedSize),
        children: Chunk388032.intl.string(Chunk388032.t.wMWycn)
      })
    }), (0, Chunk255367.jsx)(I, {})]
  })
}

function N(e) {
  let {
    "aria-label": t = false,
    onShow: n,
    children: i
  } = e;
  return (0, r.jsx)(c.ua7, {
    hideOnClick: true,
    spacing: 12,
    position: "right",
    text: (0, r.jsx)(P, {}),
    "aria-label": t,
    tooltipClassName: S.listItemTooltip,
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