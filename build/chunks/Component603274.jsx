/** Chunk was on 81985 **/
/** chunk id: 603274, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Z
}), require("./388685.js"), require("./361932.js"), require("./187205.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
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
  Chunk998081 = require("./998081.js");

function _(e, t) {
  return 0 === t.length ? null : (0, r.jsxs)("div", {
    className: S.row,
    children: [(0, r.jsx)(e, {
      className: S.activityIcon,
      color: "currentColor"
    }), (0, r.jsx)(f.ZP, {
      guildId: true,
      users: t,
      max: 6
    })]
  })
}

function I() {
  let e = (0, c.Wu)([x.Z, b.Z], () => j.default.keys(x.Z.getFavoriteChannels()).map(e => b.Z.getChannel(e)).filter(O.lm)),
    t = e.map(e => e.id),
    n = e.filter(e => e.type === C.d4z.GUILD_VOICE),
    i = e.filter(e => e.type === C.d4z.GUILD_STAGE_VOICE).map(e => e.id),
    l = (0, c.Wu)([v.ZP], () => s().flatMap(n, e => v.ZP.getVoiceStatesForChannel(e).map(e => {
      let {
        user: t
      } = e;
      return t
    })), [n]),
    a = (0, c.Wu)([h.Z], () => s().flatMap(i, e => h.Z.getMutableParticipants(e, g.pV.SPEAKER).filter(e => e.type === g.Ui.VOICE).map(e => {
      let {
        user: t
      } = e;
      return t
    }))),
    o = (0, c.e7)([h.Z], () => {
      let e = 0;
      for (let t of i) e += h.Z.getParticipantCount(t, g.pV.AUDIENCE);
      return e
    }),
    u = (0, c.Wu)([m.Z], () => m.Z.getAllApplicationStreams().filter(e => t.includes(e.channelId)).map(e => e.ownerId), [t]),
    E = (0, c.Wu)([p.ZP], () => {
      let e = p.ZP.getEmbeddedActivitiesByChannel(),
        n = [];
      for (let l of t) {
        var r, i;
        n.push(...null != (i = null == (r = e.get(l)) ? true : r.flatMap(e => Array.from(e.userIds))) ? i : [])
      }
      return n
    }, [t]),
    I = (0, c.Wu)([y.default], () => E.map(e => y.default.getUser(e)), [E]),
    P = (0, c.Wu)([y.default], () => u.map(e => y.default.getUser(e)), [u]),
    Z = _(d.gj8, l.filter(e => !u.includes(e.id) && !E.includes(e.id))),
    N = 0 === a.length ? null : (0, r.jsxs)("div", {
      className: S.row,
      children: [(0, r.jsx)(d.ewx, {
        size: "lg",
        color: "currentColor",
        className: S.activityIcon
      }), (0, r.jsx)(f.ZP, {
        guildId: true,
        users: a,
        max: 3
      }), (0, r.jsxs)("div", {
        className: S.stageListenerPill,
        children: [(0, r.jsx)(d.VWR, {
          size: "xs",
          color: "currentColor"
        }), (0, r.jsx)(d.Text, {
          className: S.stageListenerCount,
          color: "text-default",
          variant: "text-xs/medium",
          children: o
        })]
      })]
    }),
    T = _(d.hGI, P.filter(e => null != e && !E.includes(e.id))),
    A = _(d.nG3, I);
  return (0, r.jsxs)(r.Fragment, {
    children: [N, Z, T, A]
  })
}

function P() {
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: a()(S.row, S.rowGuildName),
      children: (0, r.jsx)("span", {
        className: a()(S.guildNameText, S.guildNameTextLimitedSize),
        children: E.intl.string(E.t.wMWyci)
      })
    }), (0, r.jsx)(I, {})]
  })
}

function Z(e) {
  let {
    "aria-label": t = false,
    onShow: n,
    children: l
  } = e, a = i.useMemo(() => (0, r.jsx)("div", {
    className: S.guildTooltipWrapper,
    children: (0, r.jsx)(P, {})
  }), []);
  return (0, r.jsx)(u.u, {
    __unsupportedReactNodeAsText: a,
    hideOnClick: true,
    spacing: 12,
    position: "right",
    "aria-label": false === t ? true : t,
    onTooltipShow: n,
    asContainer: true,
    children: l
  })
}