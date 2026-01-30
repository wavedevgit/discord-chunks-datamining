/** Chunk was on 1113 **/
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

function v(e) {
  let {
    icon: t,
    users: n
  } = e;
  return 0 === n.length ? null : (0, r.jsxs)("div", {
    className: x.nM,
    children: [(0, r.jsx)(t, {
      className: x.RI,
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
  }) : (0, r.jsx)(g.A, {
    muteConfig: t,
    className: n
  })
}

function C(e) {
  let t, n, i, o, d, p, g, j, C, S, I, N, T, {
      channel: P
    } = e,
    w = P.id,
    {
      activityUsers: R,
      streamUsers: D,
      voiceUsers: L
    } = (t = P.id, n = (0, a.yK)([A.A], () => A.A.getBlockedOrIgnoredIDs()), i = (0, a.bG)([f.A], () => f.A.getUserAffinitiesMap(), []), o = (0, a.yK)([u.Ay, O.default], () => u.Ay.getEmbeddedActivitiesForChannel(t).flatMap(e => Array.from(e.userIds)).map(e => O.default.getUser(e)), [t]), d = l.useMemo(() => (0, h.aw)(o, n), [o, n]), p = l.useMemo(() => (0, m.L)(d, i, "DirectMessageTooltip - activityUsers"), [d, i]), g = (0, a.yK)([b.A, O.default], () => {
      let e = b.A.getAllApplicationStreamsForChannel(t).map(e => e.ownerId).map(e => O.default.getUser(e));
      return (0, h.aw)(e, n)
    }, [t, n]), j = l.useMemo(() => (0, h.aw)(g, n), [g, n]), C = l.useMemo(() => (0, m.L)(j, i, "DirectMessageTooltip - activityUsers"), [j, i]), S = l.useMemo(() => C.filter(e => !p.some(t => t.id === e.id)), [C, p]), I = (0, a.yK)([_.Ay], () => {
      let e = _.Ay.getVoiceStatesForChannel(P).map(e => {
        let {
          user: t
        } = e;
        return t
      });
      return (0, h.aw)(e, n)
    }, [P, n]), N = l.useMemo(() => (0, h.aw)(I, n), [I, n]), T = l.useMemo(() => (0, m.L)(N, i, "DirectMessageTooltip - voiceUsers"), [N, i]), {
      voiceUsers: l.useMemo(() => T.filter(e => !p.some(t => t.id === e.id) && !C.some(t => t.id === e.id)), [T, p, C]),
      streamUsers: S,
      activityUsers: p
    }),
    M = (0, r.jsx)(v, {
      icon: c.HKD,
      users: L
    }),
    G = (0, r.jsx)(v, {
      icon: c.Fzq,
      users: D
    }),
    k = (0, r.jsx)(v, {
      icon: c.k9F,
      users: R
    }),
    {
      isMuted: U,
      muteConfig: V
    } = (0, a.cf)([y.Ay], () => ({
      isMuted: y.Ay.isChannelMuted(null, w),
      muteConfig: y.Ay.getChannelMuteConfig(null, w)
    }), [w]);
  return (0, r.jsxs)(r.Fragment, {
    children: [M, G, k, U ? (0, r.jsx)(E, {
      muteConfig: V,
      className: s()(x.LM, {
        [x.Sx]: null != M || null != G
      })
    }) : null]
  })
}

function S(e) {
  let {
    channel: t
  } = e, n = (0, p.Ay)(t);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: s()(x.nM, x.Dl),
      children: (0, r.jsx)("span", {
        className: s()(x.cN, x.NT),
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
  } = e, i = (0, p.Ay)(t), s = l.useMemo(() => (0, r.jsx)("div", {
    className: x.A_,
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