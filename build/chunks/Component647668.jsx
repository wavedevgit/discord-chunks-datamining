/** Chunk was on 42402 **/
/** chunk id: 647668, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => F
}), require("./114821.js"), require("./339614.js"), require("./896048.js");
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
  Chunk297334 = require("./297334.js"),
  Chunk454938 = require("./454938.js"),
  Chunk714991 = require("./714991.jsx"),
  Chunk57991 = require("./57991.jsx"),
  Chunk513461 = require("./513461.js"),
  Chunk199285 = require("./199285.js"),
  Chunk347951 = require("./347951.js"),
  Chunk164956 = require("./164956.js"),
  Chunk392567 = require("./392567.jsx"),
  Chunk63995 = require("./63995.js"),
  Chunk69407 = require("./69407.js"),
  Chunk624265 = require("./624265.js"),
  Chunk970278 = require("./970278.js"),
  Chunk21119 = require("./21119.js"),
  Chunk907459 = require("./907459.js"),
  Chunk616356 = require("./616356.js"),
  Chunk808728 = require("./808728.js"),
  Chunk994500 = require("./994500.js"),
  Chunk543465 = require("./543465.js"),
  Chunk287809 = require("./287809.js"),
  Chunk607567 = require("./607567.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk653750 = require("./653750.js");

function k(e, t, n) {
  return 0 === t.length ? null : (0, r.jsxs)("div", {
    className: G.nM,
    children: [(0, r.jsx)(e, {
      className: G.RI,
      color: "currentColor"
    }), (0, r.jsx)(h.Ay, {
      guildId: n,
      users: t,
      max: 6
    })]
  })
}

function U(e) {
  let {
    muteConfig: t,
    className: n
  } = e;
  return (null == t ? true : t.end_time) == null ? (0, r.jsx)(d.Text, {
    variant: "text-xs/normal",
    color: "text-muted",
    className: n,
    children: M.intl.string(M.t.fpKdS1)
  }) : (0, r.jsx)(x.A, {
    muteConfig: t,
    className: n
  })
}

function V(e) {
  let t, n, i, a, u, f, m, b, A, y, O, j, x, M, V, B, H, F, Y, K, {
      guild: W
    } = e,
    z = W.id,
    {
      voiceUsersToShow: X,
      stageSpeakers: q,
      numStageListeners: J,
      streamUsersToShow: Q,
      embeddedActivitiesUsers: Z
    } = (t = W.id, n = (0, c.yK)([T.Ay, C.A], () => [...T.Ay.getChannels(t)[T.vM].filter(e => {
      let {
        channel: t
      } = e;
      return t.type === L.rbe.GUILD_VOICE
    }).map(e => {
      let {
        channel: t
      } = e;
      return t.id
    }), ...Object.values(C.A.getThreadsForGuild(t)).flatMap(e => Object.keys(e))], [t]), i = (0, E.Ay)(t), a = l.useMemo(() => i.map(e => e.id), [i]), u = (0, c.bG)([D.Ay], () => D.Ay.getVoiceStates(t), [t]), f = (0, c.yK)([P.A], () => P.A.getBlockedOrIgnoredIDs()), m = o().flatMap(n, e => {
      var t;
      if (e === W.afkChannelId) return [];
      let n = (null != (t = u[e]) ? t : []).map(e => {
        let {
          user: t
        } = e;
        return t
      });
      return (0, g.aw)(n, f)
    }), b = (0, c.yK)([_.A], () => o().flatMap(a, e => {
      if (e === W.afkChannelId) return [];
      let t = _.A.getMutableParticipants(e, v.ip.SPEAKER).filter(e => e.type === v.wY.VOICE).map(e => {
        let {
          user: t
        } = e;
        return t
      });
      return (0, g.aw)(t, f)
    })), A = (0, c.bG)([_.A], () => {
      let e = 0;
      for (let t of a) e += _.A.getParticipantCount(t, v.ip.AUDIENCE);
      return e
    }), y = (0, c.yK)([N.A], () => {
      let e = N.A.getAllApplicationStreams().filter(e => e.guildId === t).map(e => e.ownerId);
      return (0, g.F7)(e, f)
    }, [f, t]), O = (0, c.yK)([p.Ay], () => {
      let e = p.Ay.getEmbeddedActivitiesForGuild(t).flatMap(e => Array.from(e.userIds));
      return (0, g.F7)(e, f)
    }, [t, f]), j = (0, c.yK)([R.default], () => {
      let e = O.map(e => R.default.getUser(e));
      return (0, g.aw)(e)
    }, [O]), x = (0, c.yK)([R.default], () => y.map(e => R.default.getUser(e)), [y]), M = m.filter(e => !y.includes(e.id) && !O.includes(e.id)), V = (0, g.aw)(M), B = x.filter(e => null != e && !O.includes(e.id)), H = (0, c.bG)([S.A], () => S.A.getUserAffinitiesMap(), []), F = l.useMemo(() => (0, I.L)(V, H, "GuildTooltip - nonBlockedUsers"), [V, H]), Y = l.useMemo(() => (0, I.L)(b, H, "GuildTooltip - stageSpeakers"), [b, H]), K = l.useMemo(() => (0, I.L)(B, H, "GuildTooltip - streamUsers"), [B, H]), {
      voiceUsersToShow: F,
      stageSpeakers: Y,
      numStageListeners: A,
      streamUsersToShow: K,
      embeddedActivitiesUsers: l.useMemo(() => (0, I.L)(j, H, "GuildTooltip - embeddedActivitiesUsers"), [j, H]),
      hasActivity: b.length > 0 || M.length > 0 || B.length > 0 || j.length > 0
    }),
    $ = k(d.HKD, X, z),
    ee = 0 === q.length ? null : (0, r.jsxs)("div", {
      className: G.nM,
      children: [(0, r.jsx)(d.qux, {
        size: "lg",
        color: "currentColor",
        className: G.RI
      }), (0, r.jsx)(h.Ay, {
        guildId: z,
        users: q,
        max: 3
      }), (0, r.jsxs)("div", {
        className: G.GZ,
        children: [(0, r.jsx)(d.LoC, {
          size: "xs",
          color: "currentColor"
        }), (0, r.jsx)(d.Text, {
          className: G._I,
          color: "text-default",
          variant: "text-xs/normal",
          children: J
        })]
      })]
    }),
    et = k(d.Fzq, Q, z),
    en = k(d.k9F, Z, z),
    {
      isMuted: er,
      muteConfig: el
    } = (0, c.cf)([w.Ay], () => ({
      isMuted: w.Ay.isMuted(z),
      muteConfig: w.Ay.getMuteConfig(z)
    }), [z]);
  return (0, r.jsxs)(r.Fragment, {
    children: [ee, $, et, en, er ? (0, r.jsx)(U, {
      muteConfig: el,
      className: s()(G.LM, {
        [G.Sx]: null != $ || null != et
      })
    }) : null]
  })
}

function B(e) {
  let {
    guildJoinRequestStatus: t
  } = e;
  return (0, r.jsx)(d.Text, {
    className: G.BT,
    color: "text-default",
    variant: "text-xs/normal",
    children: function(e) {
      switch (e) {
        case A.B5.SUBMITTED:
          return M.intl.string(M.t["9KFC98"]);
        case A.B5.REJECTED:
          return M.intl.string(M.t["TQY/Rd"]);
        case A.B5.APPROVED:
          return M.intl.string(M.t.WXHcq5);
        default:
          return M.intl.string(M.t.fjHFC8)
      }
    }(t)
  })
}

function H(e) {
  let {
    guild: t
  } = e, n = (0, f.A)(t), l = (0, y.a)(t), i = null != l ? (0, r.jsx)(B, {
    guildJoinRequestStatus: l
  }) : null, a = (0, r.jsx)(V, {
    guild: t
  }), o = (0, c.bG)([j.A], () => j.A.isViewingRoles(t.id)), u = (0, O.Ig)(t);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: s()(G.nM, G.Dl),
      children: [n ? (0, r.jsx)(b.A, {
        guild: t,
        className: G.WX
      }) : (0, r.jsx)(m.A, {
        guild: t,
        size: 20,
        className: G.aL
      }), (0, r.jsx)("span", {
        className: s()(G.cN, G.NT),
        children: t.name
      })]
    }), u ? (0, r.jsx)(d.Text, {
      className: G.Ef,
      color: "text-default",
      variant: "text-sm/medium",
      children: M.intl.string(M.t["2n0/Fk"])
    }) : null, o ? (0, r.jsx)(d.Text, {
      className: G.BT,
      color: "text-default",
      variant: "text-xs/normal",
      children: M.intl.string(M.t["5LwN89"])
    }) : null != i ? i : a]
  })
}

function F(e) {
  let {
    guild: t,
    disabled: n = false,
    "aria-label": i = false,
    children: s
  } = e, a = l.useMemo(() => n ? null : (0, r.jsx)("div", {
    className: G.A_,
    children: (0, r.jsx)(H, {
      guild: t
    })
  }), [n, t]);
  return (0, r.jsx)(u.m_, {
    __unsupportedReactNodeAsText: a,
    hideOnClick: true,
    spacing: 12,
    position: "right",
    "aria-label": false === i ? true : i,
    asContainer: true,
    children: s
  })
}