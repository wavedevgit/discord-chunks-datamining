/** Chunk was on 97492 **/
/** chunk id: 375855, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => I
}), require("./114821.js"), require("./339614.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk933958 = require("./933958.js"),
  Chunk104171 = require("./104171.jsx"),
  Chunk297334 = require("./297334.js"),
  Chunk47167 = require("./47167.js"),
  Chunk392567 = require("./392567.jsx"),
  Chunk21119 = require("./21119.js"),
  Chunk907459 = require("./907459.js"),
  Chunk616356 = require("./616356.js"),
  Chunk994500 = require("./994500.js"),
  Chunk543465 = require("./543465.js"),
  Chunk287809 = require("./287809.js"),
  Chunk607567 = require("./607567.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk653750 = require("./653750.js");

function x(e) {
  let {
    icon: t,
    users: n
  } = e;
  return 0 === n.length ? null : (0, r.jsxs)("div", {
    className: v.nM,
    children: [(0, r.jsx)(t, {
      className: v.RI,
      color: "currentColor"
    }), (0, r.jsx)(d.Ay, {
      users: n,
      max: 6
    })]
  })
}

function E(e) {
  let {
    muteConfig: t,
    className: n
  } = e;
  return (null == t ? true : t.end_time) == null ? (0, r.jsx)(c.Text, {
    variant: "text-xs/normal",
    color: "text-muted",
    className: n,
    children: j.intl.string(j.t.fpKdS1)
  }) : (0, r.jsx)(f.A, {
    muteConfig: t,
    className: n
  })
}

function C(e) {
  let t, n, i, o, d, h, f, j, C, S, I, N, T, {
      channel: P
    } = e,
    w = P.id,
    {
      activityUsers: R,
      streamUsers: D,
      voiceUsers: M
    } = (t = P.id, n = (0, a.yK)([A.A], () => A.A.getBlockedOrIgnoredIDs()), i = (0, a.bG)([g.A], () => g.A.getUserAffinitiesMap(), []), o = (0, a.yK)([u.Ay, _.default], () => u.Ay.getEmbeddedActivitiesForChannel(t).flatMap(e => Array.from(e.userIds)).map(e => _.default.getUser(e)), [t]), d = l.useMemo(() => (0, p.aw)(o, n), [o, n]), h = l.useMemo(() => (0, m.L)(d, i, "DirectMessageTooltip - activityUsers"), [d, i]), f = (0, a.yK)([b.A, _.default], () => {
      let e = b.A.getAllApplicationStreamsForChannel(t).map(e => e.ownerId).map(e => _.default.getUser(e));
      return (0, p.aw)(e, n)
    }, [t, n]), j = l.useMemo(() => (0, p.aw)(f, n), [f, n]), C = l.useMemo(() => (0, m.L)(j, i, "DirectMessageTooltip - activityUsers"), [j, i]), S = l.useMemo(() => C.filter(e => !h.some(t => t.id === e.id)), [C, h]), I = (0, a.yK)([O.Ay], () => {
      let e = O.Ay.getVoiceStatesForChannel(P).map(e => {
        let {
          user: t
        } = e;
        return t
      });
      return (0, p.aw)(e, n)
    }, [P, n]), N = l.useMemo(() => (0, p.aw)(I, n), [I, n]), T = l.useMemo(() => (0, m.L)(N, i, "DirectMessageTooltip - voiceUsers"), [N, i]), {
      voiceUsers: l.useMemo(() => T.filter(e => !h.some(t => t.id === e.id) && !C.some(t => t.id === e.id)), [T, h, C]),
      streamUsers: S,
      activityUsers: h
    }),
    L = (0, r.jsx)(x, {
      icon: c.HKD,
      users: M
    }),
    k = (0, r.jsx)(x, {
      icon: c.Fzq,
      users: D
    }),
    G = (0, r.jsx)(x, {
      icon: c.bxf,
      users: R
    }),
    {
      isMuted: U,
      muteConfig: B
    } = (0, a.cf)([y.Ay], () => ({
      isMuted: y.Ay.isChannelMuted(null, w),
      muteConfig: y.Ay.getChannelMuteConfig(null, w)
    }), [w]);
  return (0, r.jsxs)(r.Fragment, {
    children: [L, k, G, U ? (0, r.jsx)(E, {
      muteConfig: B,
      className: s()(v.LM, {
        [v.Sx]: null != L || null != k
      })
    }) : null]
  })
}

function S(e) {
  let {
    channel: t
  } = e, n = (0, h.Ay)(t);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: s()(v.nM, v.Dl),
      children: (0, r.jsx)("span", {
        className: s()(v.cN, v.NT),
        children: n
      })
    }), (0, r.jsx)(C, {
      channel: t
    })]
  })
}

function I(e) {
  let {
    channel: t,
    children: n
  } = e, i = (0, h.Ay)(t), s = l.useMemo(() => (0, r.jsx)("div", {
    className: v.A_,
    children: (0, r.jsx)(S, {
      channel: t
    })
  }), [t]);
  return (0, r.jsx)(o.m_, {
    __unsupportedReactNodeAsText: s,
    hideOnClick: true,
    spacing: 12,
    position: "right",
    "aria-label": null != i ? i : true,
    asContainer: true,
    children: n
  })
}