/** Chunk was on 81985 **/
/** chunk id: 593618, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => H
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

function L(e, t, n) {
  return 0 === t.length ? null : (0, r.jsxs)("div", {
    className: k.row,
    children: [(0, r.jsx)(e, {
      className: k.activityIcon,
      color: "currentColor"
    }), (0, r.jsx)(f.ZP, {
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
  }) : (0, r.jsx)(x.Z, {
    muteConfig: t,
    className: n
  })
}

function G(e) {
  let {
    guild: t
  } = e, n = t.id, {
    voiceUsersToShow: l,
    stageSpeakers: o,
    numStageListeners: u,
    streamUsersToShow: g,
    embeddedActivitiesUsers: m
  } = function(e) {
    let t = e.id,
      n = (0, c.Wu)([N.ZP, _.Z], () => [...N.ZP.getChannels(t)[N.Zb].filter(e => {
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
      o = (0, c.Wu)([T.Z], () => T.Z.getBlockedOrIgnoredIDs()),
      u = s().flatMap(n, t => {
        var n;
        if (t === e.afkChannelId) return [];
        let r = (null != (n = a[t]) ? n : []).map(e => {
          let {
            user: t
          } = e;
          return t
        });
        return (0, h.dq)(r, o)
      }),
      d = (0, c.Wu)([C.Z], () => s().flatMap(l, t => {
        if (t === e.afkChannelId) return [];
        let n = C.Z.getMutableParticipants(t, E.pV.SPEAKER).filter(e => e.type === E.Ui.VOICE).map(e => {
          let {
            user: t
          } = e;
          return t
        });
        return (0, h.dq)(n, o)
      })),
      f = (0, c.e7)([C.Z], () => {
        let e = 0;
        for (let t of l) e += C.Z.getParticipantCount(t, E.pV.AUDIENCE);
        return e
      }),
      g = (0, c.Wu)([Z.Z], () => {
        let e = Z.Z.getAllApplicationStreams().filter(e => e.guildId === t).map(e => e.ownerId);
        return (0, h._j)(e, o)
      }, [o, t]),
      m = (0, c.Wu)([p.ZP], () => {
        let e = p.ZP.getEmbeddedActivitiesForGuild(t).flatMap(e => Array.from(e.userIds));
        return (0, h._j)(e, o)
      }, [t, o]),
      b = (0, c.Wu)([w.default], () => {
        let e = m.map(e => w.default.getUser(e));
        return (0, h.dq)(e)
      }, [m]),
      y = (0, c.Wu)([w.default], () => g.map(e => w.default.getUser(e)), [g]),
      v = u.filter(e => !g.includes(e.id) && !m.includes(e.id)),
      O = (0, h.dq)(v),
      j = y.filter(e => null != e && !m.includes(e.id)),
      x = (0, c.e7)([I.Z], () => I.Z.getUserAffinitiesMap(), []),
      A = i.useMemo(() => (0, P.C)(O, x, "GuildTooltip - nonBlockedUsers"), [O, x]),
      M = i.useMemo(() => (0, P.C)(d, x, "GuildTooltip - stageSpeakers"), [d, x]),
      k = i.useMemo(() => (0, P.C)(j, x, "GuildTooltip - streamUsers"), [j, x]);
    return {
      voiceUsersToShow: A,
      stageSpeakers: M,
      numStageListeners: f,
      streamUsersToShow: k,
      embeddedActivitiesUsers: i.useMemo(() => (0, P.C)(b, x, "GuildTooltip - embeddedActivitiesUsers"), [b, x]),
      hasActivity: d.length > 0 || v.length > 0 || j.length > 0 || b.length > 0
    }
  }(t), b = L(d.gj8, l, n), y = 0 === o.length ? null : (0, r.jsxs)("div", {
    className: k.row,
    children: [(0, r.jsx)(d.ewx, {
      size: "lg",
      color: "currentColor",
      className: k.activityIcon
    }), (0, r.jsx)(f.ZP, {
      guildId: n,
      users: o,
      max: 3
    }), (0, r.jsxs)("div", {
      className: k.stageListenerPill,
      children: [(0, r.jsx)(d.VWR, {
        size: "xs",
        color: "currentColor"
      }), (0, r.jsx)(d.Text, {
        className: k.stageListenerCount,
        color: "text-default",
        variant: "text-xs/normal",
        children: u
      })]
    })]
  }), v = L(d.hGI, g, n), O = L(d.nG3, m, n), {
    isMuted: j,
    muteConfig: x
  } = (0, c.cj)([A.ZP], () => ({
    isMuted: A.ZP.isMuted(n),
    muteConfig: A.ZP.getMuteConfig(n)
  }), [n]);
  return (0, r.jsxs)(r.Fragment, {
    children: [y, b, v, O, j ? (0, r.jsx)(U, {
      muteConfig: x,
      className: a()(k.muteText, {
        [k.muteTextWithActivity]: null != b || null != v
      })
    }) : null]
  })
}

function B(e) {
  let {
    guildJoinRequestStatus: t
  } = e;
  return (0, r.jsx)(d.Text, {
    className: k.viewAsRolesWarning,
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
  } = e, n = (0, g.Z)(t), i = (0, v.E)(t), l = null != i ? (0, r.jsx)(B, {
    guildJoinRequestStatus: i
  }) : null, o = (0, r.jsx)(G, {
    guild: t
  }), s = (0, c.e7)([j.Z], () => j.Z.isViewingRoles(t.id)), u = (0, O.Ij)(t);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: a()(k.row, k.rowGuildName),
      children: [n ? (0, r.jsx)(b.Z, {
        guild: t,
        className: k.rowIconV2
      }) : (0, r.jsx)(m.Z, {
        guild: t,
        size: 20,
        className: k.rowIcon
      }), (0, r.jsx)("span", {
        className: a()(k.guildNameText, k.guildNameTextLimitedSize),
        children: t.name
      })]
    }), u ? (0, r.jsx)(d.Text, {
      className: k.invitesDisabledTooltip,
      color: "text-default",
      variant: "text-sm/medium",
      children: M.intl.string(M.t["2n0/Fk"])
    }) : null, s ? (0, r.jsx)(d.Text, {
      className: k.viewAsRolesWarning,
      color: "text-default",
      variant: "text-xs/normal",
      children: M.intl.string(M.t["5LwN89"])
    }) : null != l ? l : o]
  })
}

function H(e) {
  let {
    guild: t,
    disabled: n = false,
    "aria-label": l = false,
    children: a
  } = e, o = i.useMemo(() => n ? null : (0, r.jsx)("div", {
    className: k.guildTooltipWrapper,
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