/** Chunk was on 67000 **/
/** chunk id: 593618, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => V
}), require("./361932.js"), require("./187205.js"), require("./388685.js");
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
  Chunk470883 = require("./470883.js"),
  Chunk666188 = require("./666188.js"),
  Chunk372769 = require("./372769.jsx"),
  Chunk523751 = require("./523751.jsx"),
  Chunk246364 = require("./246364.js"),
  Chunk746916 = require("./746916.js"),
  Chunk634755 = require("./634755.js"),
  Chunk160404 = require("./160404.js"),
  Chunk777861 = require("./777861.jsx"),
  Chunk565799 = require("./565799.js"),
  Chunk501655 = require("./501655.js"),
  Chunk517334 = require("./517334.js"),
  Chunk344185 = require("./344185.js"),
  Chunk752048 = require("./752048.js"),
  Chunk439944 = require("./439944.js"),
  Chunk199902 = require("./199902.js"),
  Chunk984933 = require("./984933.js"),
  Chunk699516 = require("./699516.js"),
  Chunk9156 = require("./9156.js"),
  Chunk594174 = require("./594174.js"),
  Chunk938475 = require("./938475.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk998081 = require("./998081.js");

function k(e, t, n) {
  return 0 === t.length ? null : (0, r.jsxs)("div", {
    className: L.row,
    children: [(0, r.jsx)(e, {
      className: L.activityIcon,
      color: "currentColor"
    }), (0, r.jsx)(h.ZP, {
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
    children: M.intl.string(M.t.fpKdS1)
  }) : (0, r.jsx)(C.Z, {
    muteConfig: t,
    className: n
  })
}

function U(e) {
  let {
    guild: t
  } = e, n = t.id, {
    voiceUsersToShow: l,
    stageSpeakers: o,
    numStageListeners: u,
    streamUsersToShow: g,
    embeddedActivitiesUsers: b
  } = function(e) {
    let t = e.id,
      n = (0, c.Wu)([Z.ZP, _.Z], () => [...Z.ZP.getChannels(t)[Z.Zb].filter(e => {
        let {
          channel: t
        } = e;
        return t.type === D.d4z.GUILD_VOICE
      }).map(e => {
        let {
          channel: t
        } = e;
        return t.id
      }), ...Object.values(_.Z.getThreadsForGuild(t)).flatMap(e => Object.keys(e))], [t]),
      r = (0, S.ZP)(t),
      l = i.useMemo(() => r.map(e => e.id), [r]),
      a = (0, c.e7)([R.ZP], () => R.ZP.getVoiceStates(t), [t]),
      o = (0, c.Wu)([w.Z], () => w.Z.getBlockedOrIgnoredIDs()),
      u = s().flatMap(n, t => {
        var n;
        if (t === e.afkChannelId) return [];
        let r = (null != (n = a[t]) ? n : []).map(e => {
          let {
            user: t
          } = e;
          return t
        });
        return (0, p.dq)(r, o)
      }),
      d = (0, c.Wu)([x.Z], () => s().flatMap(l, t => {
        if (t === e.afkChannelId) return [];
        let n = x.Z.getMutableParticipants(t, E.pV.SPEAKER).filter(e => e.type === E.Ui.VOICE).map(e => {
          let {
            user: t
          } = e;
          return t
        });
        return (0, p.dq)(n, o)
      })),
      h = (0, c.e7)([x.Z], () => {
        let e = 0;
        for (let t of l) e += x.Z.getParticipantCount(t, E.pV.AUDIENCE);
        return e
      }),
      g = (0, c.Wu)([N.Z], () => {
        let e = N.Z.getAllApplicationStreams().filter(e => e.guildId === t).map(e => e.ownerId);
        return (0, p._j)(e, o)
      }, [o, t]),
      b = (0, c.Wu)([f.ZP], () => {
        let e = f.ZP.getEmbeddedActivitiesForGuild(t).flatMap(e => Array.from(e.userIds));
        return (0, p._j)(e, o)
      }, [t, o]),
      m = (0, c.Wu)([A.default], () => {
        let e = b.map(e => A.default.getUser(e));
        return (0, p.dq)(e)
      }, [b]),
      y = (0, c.Wu)([A.default], () => g.map(e => A.default.getUser(e)), [g]),
      O = u.filter(e => !g.includes(e.id) && !b.includes(e.id)),
      v = (0, p.dq)(O),
      j = y.filter(e => null != e && !b.includes(e.id)),
      C = (0, c.e7)([I.Z], () => I.Z.getUserAffinitiesMap(), []),
      T = i.useMemo(() => (0, P.C)(v, C, "GuildTooltip - nonBlockedUsers"), [v, C]),
      M = i.useMemo(() => (0, P.C)(d, C, "GuildTooltip - stageSpeakers"), [d, C]),
      L = i.useMemo(() => (0, P.C)(j, C, "GuildTooltip - streamUsers"), [j, C]);
    return {
      voiceUsersToShow: T,
      stageSpeakers: M,
      numStageListeners: h,
      streamUsersToShow: L,
      embeddedActivitiesUsers: i.useMemo(() => (0, P.C)(m, C, "GuildTooltip - embeddedActivitiesUsers"), [m, C]),
      hasActivity: d.length > 0 || O.length > 0 || j.length > 0 || m.length > 0
    }
  }(t), m = k(d.gj8, l, n), y = 0 === o.length ? null : (0, r.jsxs)("div", {
    className: L.row,
    children: [(0, r.jsx)(d.ewx, {
      size: "lg",
      color: "currentColor",
      className: L.activityIcon
    }), (0, r.jsx)(h.ZP, {
      guildId: n,
      users: o,
      max: 3
    }), (0, r.jsxs)("div", {
      className: L.stageListenerPill,
      children: [(0, r.jsx)(d.VWR, {
        size: "xs",
        color: "currentColor"
      }), (0, r.jsx)(d.Text, {
        className: L.stageListenerCount,
        color: "text-default",
        variant: "text-xs/normal",
        children: u
      })]
    })]
  }), O = k(d.hGI, g, n), v = k(d.nG3, b, n), {
    isMuted: j,
    muteConfig: C
  } = (0, c.cj)([T.ZP], () => ({
    isMuted: T.ZP.isMuted(n),
    muteConfig: T.ZP.getMuteConfig(n)
  }), [n]);
  return (0, r.jsxs)(r.Fragment, {
    children: [y, m, O, v, j ? (0, r.jsx)(G, {
      muteConfig: C,
      className: a()(L.muteText, {
        [L.muteTextWithActivity]: null != m || null != O
      })
    }) : null]
  })
}

function B(e) {
  let {
    guildJoinRequestStatus: t
  } = e;
  return (0, r.jsx)(d.Text, {
    className: L.viewAsRolesWarning,
    color: "text-default",
    variant: "text-xs/normal",
    children: function(e) {
      switch (e) {
        case y.wB.SUBMITTED:
          return M.intl.string(M.t["9KFC98"]);
        case y.wB.REJECTED:
          return M.intl.string(M.t["TQY/Rd"]);
        case y.wB.APPROVED:
          return M.intl.string(M.t.WXHcq5);
        default:
          return M.intl.string(M.t.fjHFC8)
      }
    }(t)
  })
}

function F(e) {
  let {
    guild: t
  } = e, n = (0, g.Z)(t), i = (0, O.E)(t), l = null != i ? (0, r.jsx)(B, {
    guildJoinRequestStatus: i
  }) : null, o = (0, r.jsx)(U, {
    guild: t
  }), s = (0, c.e7)([j.Z], () => j.Z.isViewingRoles(t.id)), u = (0, v.Ij)(t);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: a()(L.row, L.rowGuildName),
      children: [n ? (0, r.jsx)(m.Z, {
        guild: t,
        className: L.rowIconV2
      }) : (0, r.jsx)(b.Z, {
        guild: t,
        size: 20,
        className: L.rowIcon
      }), (0, r.jsx)("span", {
        className: a()(L.guildNameText, L.guildNameTextLimitedSize),
        children: t.name
      })]
    }), u ? (0, r.jsx)(d.Text, {
      className: L.invitesDisabledTooltip,
      color: "text-default",
      variant: "text-sm/medium",
      children: M.intl.string(M.t["2n0/Fk"])
    }) : null, s ? (0, r.jsx)(d.Text, {
      className: L.viewAsRolesWarning,
      color: "text-default",
      variant: "text-xs/normal",
      children: M.intl.string(M.t["5LwN89"])
    }) : null != l ? l : o]
  })
}

function V(e) {
  let {
    guild: t,
    disabled: n = false,
    "aria-label": l = false,
    children: a
  } = e, o = i.useMemo(() => n ? null : (0, r.jsx)("div", {
    className: L.guildTooltipWrapper,
    children: (0, r.jsx)(F, {
      guild: t
    })
  }), [n, t]);
  return (0, r.jsx)(u.u, {
    __unsupportedReactNodeAsText: o,
    hideOnClick: true,
    spacing: 12,
    position: "right",
    "aria-label": false === l ? true : l,
    asContainer: true,
    children: a
  })
}