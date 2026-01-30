/** Chunk was on 1113 **/
/** chunk id: 332396, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => N
}), require("./896048.js"), require("./114821.js"), require("./339614.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  o = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk933958 = require("./933958.js"),
  Chunk104171 = require("./104171.jsx"),
  Chunk63995 = require("./63995.js"),
  Chunk69407 = require("./69407.js"),
  Chunk616356 = require("./616356.js"),
  Chunk734057 = require("./734057.js"),
  Chunk287809 = require("./287809.js"),
  Chunk607567 = require("./607567.js"),
  Chunk403362 = require("./403362.js"),
  Chunk661191 = require("./661191.js"),
  Chunk181079 = require("./181079.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk653750 = require("./653750.js");

function C(e, t) {
  return 0 === t.length ? null : (0, r.jsxs)("div", {
    className: E.nM,
    children: [(0, r.jsx)(e, {
      className: E.RI,
      color: "currentColor"
    }), (0, r.jsx)(p.Ay, {
      guildId: true,
      users: t,
      max: 6
    })]
  })
}

function S() {
  let e = (0, c.yK)([j.A, b.A], () => _.default.keys(j.A.getFavoriteChannels()).map(e => b.A.getChannel(e)).filter(O.Vq)),
    t = e.map(e => e.id),
    n = e.filter(e => e.type === x.rbe.GUILD_VOICE),
    l = e.filter(e => e.type === x.rbe.GUILD_STAGE_VOICE).map(e => e.id),
    i = (0, c.yK)([y.Ay], () => o().flatMap(n, e => y.Ay.getVoiceStatesForChannel(e).map(e => {
      let {
        user: t
      } = e;
      return t
    })), [n]),
    s = (0, c.yK)([g.A], () => o().flatMap(l, e => g.A.getMutableParticipants(e, f.ip.SPEAKER).filter(e => e.type === f.wY.VOICE).map(e => {
      let {
        user: t
      } = e;
      return t
    }))),
    a = (0, c.bG)([g.A], () => {
      let e = 0;
      for (let t of l) e += g.A.getParticipantCount(t, f.ip.AUDIENCE);
      return e
    }),
    u = (0, c.yK)([m.A], () => m.A.getAllApplicationStreams().filter(e => t.includes(e.channelId)).map(e => e.ownerId), [t]),
    v = (0, c.yK)([h.Ay], () => {
      let e = h.Ay.getEmbeddedActivitiesByChannel(),
        n = [];
      for (let i of t) {
        var r, l;
        n.push(...null != (r = null == (l = e.get(i)) ? true : l.flatMap(e => Array.from(e.userIds))) ? r : [])
      }
      return n
    }, [t]),
    S = (0, c.yK)([A.default], () => v.map(e => A.default.getUser(e)), [v]),
    I = (0, c.yK)([A.default], () => u.map(e => A.default.getUser(e)), [u]),
    N = C(d.HKD, i.filter(e => !u.includes(e.id) && !v.includes(e.id))),
    T = 0 === s.length ? null : (0, r.jsxs)("div", {
      className: E.nM,
      children: [(0, r.jsx)(d.qux, {
        size: "lg",
        color: "currentColor",
        className: E.RI
      }), (0, r.jsx)(p.Ay, {
        guildId: true,
        users: s,
        max: 3
      }), (0, r.jsxs)("div", {
        className: E.GZ,
        children: [(0, r.jsx)(d.LoC, {
          size: "xs",
          color: "currentColor"
        }), (0, r.jsx)(d.Text, {
          className: E._I,
          color: "text-default",
          variant: "text-xs/medium",
          children: a
        })]
      })]
    }),
    P = C(d.Fzq, I.filter(e => null != e && !v.includes(e.id))),
    w = C(d.k9F, S);
  return (0, r.jsxs)(r.Fragment, {
    children: [T, N, P, w]
  })
}

function I() {
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: s()(E.nM, E.Dl),
      children: (0, r.jsx)("span", {
        className: s()(E.cN, E.NT),
        children: v.intl.string(v.t.wMWyci)
      })
    }), (0, r.jsx)(S, {})]
  })
}

function N(e) {
  let {
    "aria-label": t = false,
    onShow: n,
    children: i
  } = e, s = l.useMemo(() => (0, r.jsx)("div", {
    className: E.A_,
    children: (0, r.jsx)(I, {})
  }), []);
  return (0, r.jsx)(u.m_, {
    __unsupportedReactNodeAsText: s,
    hideOnClick: true,
    spacing: 12,
    position: "right",
    "aria-label": false === t ? true : t,
    onTooltipShow: n,
    asContainer: true,
    children: i
  })
}