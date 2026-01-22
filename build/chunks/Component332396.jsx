/** Chunk was on 97492 **/
/** chunk id: 332396, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => N
}), require("./896048.js"), require("./114821.js"), require("./339614.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
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
    className: _.nM,
    children: [(0, r.jsx)(e, {
      className: _.RI,
      color: "currentColor"
    }), (0, r.jsx)(p.Ay, {
      guildId: true,
      users: t,
      max: 6
    })]
  })
}

function S() {
  let e = (0, c.yK)([v.A, m.A], () => j.default.keys(v.A.getFavoriteChannels()).map(e => m.A.getChannel(e)).filter(O.Vq)),
    t = e.map(e => e.id),
    n = e.filter(e => e.type === x.rbe.GUILD_VOICE),
    l = e.filter(e => e.type === x.rbe.GUILD_STAGE_VOICE).map(e => e.id),
    i = (0, c.yK)([y.Ay], () => o().flatMap(n, e => y.Ay.getVoiceStatesForChannel(e).map(e => {
      let {
        user: t
      } = e;
      return t
    })), [n]),
    a = (0, c.yK)([h.A], () => o().flatMap(l, e => h.A.getMutableParticipants(e, b.ip.SPEAKER).filter(e => e.type === b.wY.VOICE).map(e => {
      let {
        user: t
      } = e;
      return t
    }))),
    s = (0, c.bG)([h.A], () => {
      let e = 0;
      for (let t of l) e += h.A.getParticipantCount(t, b.ip.AUDIENCE);
      return e
    }),
    u = (0, c.yK)([g.A], () => g.A.getAllApplicationStreams().filter(e => t.includes(e.channelId)).map(e => e.ownerId), [t]),
    E = (0, c.yK)([f.Ay], () => {
      let e = f.Ay.getEmbeddedActivitiesByChannel(),
        n = [];
      for (let i of t) {
        var r, l;
        n.push(...null != (r = null == (l = e.get(i)) ? true : l.flatMap(e => Array.from(e.userIds))) ? r : [])
      }
      return n
    }, [t]),
    S = (0, c.yK)([A.default], () => E.map(e => A.default.getUser(e)), [E]),
    I = (0, c.yK)([A.default], () => u.map(e => A.default.getUser(e)), [u]),
    N = C(d.HKD, i.filter(e => !u.includes(e.id) && !E.includes(e.id))),
    T = 0 === a.length ? null : (0, r.jsxs)("div", {
      className: _.nM,
      children: [(0, r.jsx)(d.qux, {
        size: "lg",
        color: "currentColor",
        className: _.RI
      }), (0, r.jsx)(p.Ay, {
        guildId: true,
        users: a,
        max: 3
      }), (0, r.jsxs)("div", {
        className: _.GZ,
        children: [(0, r.jsx)(d.LoC, {
          size: "xs",
          color: "currentColor"
        }), (0, r.jsx)(d.Text, {
          className: _._I,
          color: "text-default",
          variant: "text-xs/medium",
          children: s
        })]
      })]
    }),
    P = C(d.Fzq, I.filter(e => null != e && !E.includes(e.id))),
    w = C(d.bxf, S);
  return (0, r.jsxs)(r.Fragment, {
    children: [T, N, P, w]
  })
}

function I() {
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: a()(_.nM, _.Dl),
      children: (0, r.jsx)("span", {
        className: a()(_.cN, _.NT),
        children: E.intl.string(E.t.wMWyci)
      })
    }), (0, r.jsx)(S, {})]
  })
}

function N(e) {
  let {
    "aria-label": t = false,
    onShow: n,
    children: i
  } = e, a = l.useMemo(() => (0, r.jsx)("div", {
    className: _.A_,
    children: (0, r.jsx)(I, {})
  }), []);
  return (0, r.jsx)(u.m_, {
    __unsupportedReactNodeAsText: a,
    hideOnClick: true,
    spacing: 12,
    position: "right",
    "aria-label": false === t ? true : t,
    onTooltipShow: n,
    asContainer: true,
    children: i
  })
}