/** Chunk was on 78528 **/
/** chunk id: 647668, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => H
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

function U(e, t, n) {
  return 0 === t.length ? null : (0, r.jsxs)("div", {
    className: k.nM,
    children: [(0, r.jsx)(e, {
      className: k.RI,
      color: "currentColor"
    }), (0, r.jsx)(h.Ay, {
      guildId: n,
      users: t,
      max: 6
    })]
  })
}

function G(e) {
  let {
    muteConfig: t,
    className: n
  } = e;
  return (null == t ? true : t.end_time) == null ? (0, r.jsx)(d.Text, {
    variant: "text-xs/normal",
    color: "text-muted",
    className: n,
    children: L.intl.string(L.t.fpKdS1)
  }) : (0, r.jsx)(j.A, {
    muteConfig: t,
    className: n
  })
}

function B(e) {
  let t, n, i, a, u, g, m, b, A, y, _, O, j, L, B, V, F, H, K, W, {
      guild: z
    } = e,
    Y = z.id,
    {
      voiceUsersToShow: q,
      stageSpeakers: X,
      numStageListeners: J,
      streamUsersToShow: Q,
      embeddedActivitiesUsers: Z
    } = (t = z.id, n = (0, c.yK)([T.Ay, C.A], () => [...T.Ay.getChannels(t)[T.vM].filter(e => {
      let {
        channel: t
      } = e;
      return t.type === M.rbe.GUILD_VOICE
    }).map(e => {
      let {
        channel: t
      } = e;
      return t.id
    }), ...Object.values(C.A.getThreadsForGuild(t)).flatMap(e => Object.keys(e))], [t]), i = (0, E.Ay)(t), a = l.useMemo(() => i.map(e => e.id), [i]), u = (0, c.bG)([D.Ay], () => D.Ay.getVoiceStates(t), [t]), g = (0, c.yK)([P.A], () => P.A.getBlockedOrIgnoredIDs()), m = o().flatMap(n, e => {
      var t;
      if (e === z.afkChannelId) return [];
      let n = (null != (t = u[e]) ? t : []).map(e => {
        let {
          user: t
        } = e;
        return t
      });
      return (0, f.aw)(n, g)
    }), b = (0, c.yK)([v.A], () => o().flatMap(a, e => {
      if (e === z.afkChannelId) return [];
      let t = v.A.getMutableParticipants(e, x.ip.SPEAKER).filter(e => e.type === x.wY.VOICE).map(e => {
        let {
          user: t
        } = e;
        return t
      });
      return (0, f.aw)(t, g)
    })), A = (0, c.bG)([v.A], () => {
      let e = 0;
      for (let t of a) e += v.A.getParticipantCount(t, x.ip.AUDIENCE);
      return e
    }), y = (0, c.yK)([N.A], () => {
      let e = N.A.getAllApplicationStreams().filter(e => e.guildId === t).map(e => e.ownerId);
      return (0, f.F7)(e, g)
    }, [g, t]), _ = (0, c.yK)([p.Ay], () => {
      let e = p.Ay.getEmbeddedActivitiesForGuild(t).flatMap(e => Array.from(e.userIds));
      return (0, f.F7)(e, g)
    }, [t, g]), O = (0, c.yK)([R.default], () => {
      let e = _.map(e => R.default.getUser(e));
      return (0, f.aw)(e)
    }, [_]), j = (0, c.yK)([R.default], () => y.map(e => R.default.getUser(e)), [y]), L = m.filter(e => !y.includes(e.id) && !_.includes(e.id)), B = (0, f.aw)(L), V = j.filter(e => null != e && !_.includes(e.id)), F = (0, c.bG)([S.A], () => S.A.getUserAffinitiesMap(), []), H = l.useMemo(() => (0, I.L)(B, F, "GuildTooltip - nonBlockedUsers"), [B, F]), K = l.useMemo(() => (0, I.L)(b, F, "GuildTooltip - stageSpeakers"), [b, F]), W = l.useMemo(() => (0, I.L)(V, F, "GuildTooltip - streamUsers"), [V, F]), {
      voiceUsersToShow: H,
      stageSpeakers: K,
      numStageListeners: A,
      streamUsersToShow: W,
      embeddedActivitiesUsers: l.useMemo(() => (0, I.L)(O, F, "GuildTooltip - embeddedActivitiesUsers"), [O, F]),
      hasActivity: b.length > 0 || L.length > 0 || V.length > 0 || O.length > 0
    }),
    $ = U(d.HKD, q, Y),
    ee = 0 === X.length ? null : (0, r.jsxs)("div", {
      className: k.nM,
      children: [(0, r.jsx)(d.qux, {
        size: "lg",
        color: "currentColor",
        className: k.RI
      }), (0, r.jsx)(h.Ay, {
        guildId: Y,
        users: X,
        max: 3
      }), (0, r.jsxs)("div", {
        className: k.GZ,
        children: [(0, r.jsx)(d.LoC, {
          size: "xs",
          color: "currentColor"
        }), (0, r.jsx)(d.Text, {
          className: k._I,
          color: "text-default",
          variant: "text-xs/normal",
          children: J
        })]
      })]
    }),
    et = U(d.Fzq, Q, Y),
    en = U(d.k9F, Z, Y),
    {
      isMuted: er,
      muteConfig: el
    } = (0, c.cf)([w.Ay], () => ({
      isMuted: w.Ay.isMuted(Y),
      muteConfig: w.Ay.getMuteConfig(Y)
    }), [Y]);
  return (0, r.jsxs)(r.Fragment, {
    children: [ee, $, et, en, er ? (0, r.jsx)(G, {
      muteConfig: el,
      className: s()(k.LM, {
        [k.Sx]: null != $ || null != et
      })
    }) : null]
  })
}

function V(e) {
  let {
    guildJoinRequestStatus: t
  } = e;
  return (0, r.jsx)(d.Text, {
    className: k.BT,
    color: "text-default",
    variant: "text-xs/normal",
    children: function(e) {
      switch (e) {
        case A.B5.SUBMITTED:
          return L.intl.string(L.t["9KFC98"]);
        case A.B5.REJECTED:
          return L.intl.string(L.t["TQY/Rd"]);
        case A.B5.APPROVED:
          return L.intl.string(L.t.WXHcq5);
        default:
          return L.intl.string(L.t.fjHFC8)
      }
    }(t)
  })
}

function F(e) {
  let {
    guild: t
  } = e, n = (0, g.A)(t), l = (0, y.a)(t), i = null != l ? (0, r.jsx)(V, {
    guildJoinRequestStatus: l
  }) : null, a = (0, r.jsx)(B, {
    guild: t
  }), o = (0, c.bG)([O.A], () => O.A.isViewingRoles(t.id)), u = (0, _.Ig)(t);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: s()(k.nM, k.Dl),
      children: [n ? (0, r.jsx)(b.A, {
        guild: t,
        className: k.WX
      }) : (0, r.jsx)(m.A, {
        guild: t,
        size: 20,
        className: k.aL
      }), (0, r.jsx)("span", {
        className: s()(k.cN, k.NT),
        children: t.name
      })]
    }), u ? (0, r.jsx)(d.Text, {
      className: k.Ef,
      color: "text-default",
      variant: "text-sm/medium",
      children: L.intl.string(L.t["2n0/Fk"])
    }) : null, o ? (0, r.jsx)(d.Text, {
      className: k.BT,
      color: "text-default",
      variant: "text-xs/normal",
      children: L.intl.string(L.t["5LwN89"])
    }) : null != i ? i : a]
  })
}

function H(e) {
  let {
    guild: t,
    disabled: n = false,
    "aria-label": i = false,
    children: s
  } = e, a = l.useMemo(() => n ? null : (0, r.jsx)("div", {
    className: k.A_,
    children: (0, r.jsx)(F, {
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