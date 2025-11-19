/** Chunk was on 65354 **/
/** chunk id: 603274, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Z
}), require("./388685.js"), require("./361932.js"), require("./187205.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk456100 = require("./456100.js"),
  Chunk317381 = require("./317381.js"),
  Chunk884338 = require("./884338.jsx"),
  Chunk104505 = require("./104505.js"),
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
  Chunk132789 = require("./132789.js");

function I(e, t) {
  return 0 === t.length ? null : (0, r.jsxs)("div", {
    className: S.row,
    children: [(0, r.jsx)(e, {
      className: S.activityIcon,
      color: "currentColor"
    }), (0, r.jsx)(h.ZP, {
      guildId: true,
      users: t,
      max: 6
    })]
  })
}

function P() {
  let e = (0, Chunk442837.Wu)([Chunk853856.Z, Chunk592125.Z], () => Chunk709054.default.keys(Chunk853856.Z.getFavoriteChannels()).map(e => _.Z.getChannel(e)).filter(Chunk823379.lm)),
    t = module.map(e => e.id),
    n = module.filter(e => e.type === x.d4z.GUILD_VOICE),
    i = module.filter(e => e.type === x.d4z.GUILD_STAGE_VOICE).map(e => e.id),
    l = (0, Chunk442837.Wu)([Chunk938475.ZP], () => s().flatMap(require, e => O.ZP.getVoiceStatesForChannel(e).map(e => {
      let {
        user: t
      } = e;
      return t
    })), [require]),
    o = (0, Chunk442837.Wu)([Chunk565799.Z], () => s().flatMap(Chunk473749, e => g.Z.getMutableParticipants(e, m.pV.SPEAKER).filter(e => e.type === m.Ui.VOICE).map(e => {
      let {
        user: t
      } = e;
      return t
    }))),
    a = (0, Chunk442837.e7)([Chunk565799.Z], () => {
      let e = 0;
      for (let t of Chunk473749) e += Chunk565799.Z.getParticipantCount(exports, Chunk501655.pV.AUDIENCE);
      return module
    }),
    f = (0, Chunk442837.Wu)([Chunk199902.Z], () => Chunk199902.Z.getAllApplicationStreams().filter(e => t.includes(e.channelId)).map(e => e.ownerId), [exports]),
    E = (0, Chunk442837.Wu)([Chunk317381.ZP], () => {
      let e = Chunk317381.ZP.getEmbeddedActivitiesByChannel(),
        n = [];
      for (let l of exports) {
        var r, i;
        require.push(...null != (i = null == (r = module.get(Chunk120356)) ? true : Chunk54381.flatMap(e => Array.from(e.userIds))) ? Chunk473749 : [])
      }
      return require
    }, [exports]),
    P = (0, Chunk442837.Wu)([Chunk594174.default], () => Chunk388032.map(e => y.default.getUser(e)), [Chunk388032]),
    N = (0, Chunk442837.Wu)([Chunk594174.default], () => Chunk104505.map(e => y.default.getUser(e)), [Chunk104505]),
    Z = I(Chunk481060.gj8, Chunk120356.filter(e => !f.includes(e.id) && !E.includes(e.id))),
    w = 0 === o.length ? null : (0, Chunk54381.jsxs)("div", {
      className: Chunk132789.row,
      children: [(0, Chunk54381.jsx)(Chunk481060.ewx, {
        size: "lg",
        color: "currentColor",
        className: Chunk132789.activityIcon
      }), (0, Chunk54381.jsx)(Chunk884338.ZP, {
        guildId: true,
        users: o,
        max: 3
      }), (0, Chunk54381.jsxs)("div", {
        className: Chunk132789.stageListenerPill,
        children: [(0, Chunk54381.jsx)(Chunk481060.VWR, {
          size: "xs",
          color: "currentColor"
        }), (0, Chunk54381.jsx)(Chunk481060.Text, {
          className: Chunk132789.stageListenerCount,
          color: "text-default",
          variant: "text-xs/medium",
          children: Chunk392711
        })]
      })]
    }),
    T = I(Chunk481060.hGI, N.filter(e => null != e && !E.includes(e.id))),
    {
      enabled: A
    } = Chunk456100.c.useExperiment({
      location: "FavoritesTooltip"
    }, {
      autoTrackExposure: true
    }),
    R = I(A ? Chunk481060.iWm : Chunk481060.nG3, P);
  return (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
    children: [w, Z, T, R]
  })
}

function N() {
  return (0, Chunk54381.jsxs)("div", {
    className: Chunk132789.dialogWrapper,
    children: [(0, Chunk54381.jsx)("div", {
      className: o()(Chunk132789.row, Chunk132789.rowGuildName),
      children: (0, Chunk54381.jsx)("span", {
        className: o()(Chunk132789.guildNameText, Chunk132789.guildNameTextLimitedSize),
        children: Chunk388032.intl.string(Chunk388032.t.wMWyci)
      })
    }), (0, Chunk54381.jsx)(P, {})]
  })
}

function Z(e) {
  let {
    "aria-label": t = false,
    onShow: n,
    children: l
  } = e, [o, a] = i.useState(false), s = i.useRef(null), {
    isHoveringOrFocusing: c
  } = (0, f.Z)(s), d = i.useCallback(() => {
    a(false)
  }, []);
  return i.useEffect(() => {
    a(c)
  }, [c]), (0, r.jsx)(u.yRy, {
    targetElementRef: s,
    position: "right",
    spacing: 12,
    shouldShow: o,
    onRequestClose: d,
    renderPopout: () => (0, r.jsx)(N, {}),
    "aria-label": t,
    onRequestOpen: n,
    children: () => (0, r.jsx)("div", {
      ref: s,
      children: l
    })
  })
}