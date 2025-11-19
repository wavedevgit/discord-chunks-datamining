/** Chunk was on web.js **/
/** chunk id: 593618, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => W,
  Z: () => K
}), require("./361932.js"), require("./187205.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk456100 = require("./456100.js"),
  Chunk317381 = require("./317381.js"),
  Chunk884338 = require("./884338.jsx"),
  Chunk470883 = require("./470883.js"),
  Chunk104505 = require("./104505.js"),
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
  Chunk132789 = require("./132789.js");

function G(e) {
  let t = e.id,
    n = (0, c.Wu)([D.ZP, C.Z], () => [...D.ZP.getChannels(t)[D.Zb].filter(e => {
      let {
        channel: t
      } = e;
      return t.type === k.d4z.GUILD_VOICE
    }).map(e => {
      let {
        channel: t
      } = e;
      return t.id
    }), ...Object.values(C.Z.getThreadsForGuild(t)).flatMap(e => Object.keys(e))], [t]),
    r = (0, A.ZP)(t),
    a = i.useMemo(() => r.map(e => e.id), [r]),
    o = (0, c.e7)([M.ZP], () => M.ZP.getVoiceStates(t), [t]),
    s = (0, c.Wu)([w.Z], () => w.Z.getBlockedOrIgnoredIDs()),
    u = l().flatMap(n, t => {
      var n;
      if (t === e.afkChannelId) return [];
      let r = (null != (n = o[t]) ? n : []).map(e => {
        let {
          user: t
        } = e;
        return t
      });
      return (0, p.dq)(r, s)
    }),
    d = (0, c.Wu)([T.Z], () => l().flatMap(a, t => {
      if (t === e.afkChannelId) return [];
      let n = T.Z.getMutableParticipants(t, S.pV.SPEAKER).filter(e => e.type === S.Ui.VOICE).map(e => {
        let {
          user: t
        } = e;
        return t
      });
      return (0, p.dq)(n, s)
    })),
    _ = (0, c.e7)([T.Z], () => {
      let e = 0;
      for (let t of a) e += T.Z.getParticipantCount(t, S.pV.AUDIENCE);
      return e
    }),
    h = (0, c.Wu)([P.Z], () => {
      let e = P.Z.getAllApplicationStreams().filter(e => e.guildId === t).map(e => e.ownerId);
      return (0, p._j)(e, s)
    }, [s, t]),
    m = (0, c.Wu)([f.ZP], () => {
      let e = f.ZP.getEmbeddedActivitiesForGuild(t).flatMap(e => Array.from(e.userIds));
      return (0, p._j)(e, s)
    }, [t, s]),
    g = (0, c.Wu)([x.default], () => {
      let e = m.map(e => x.default.getUser(e));
      return (0, p.dq)(e)
    }, [m]),
    E = (0, c.Wu)([x.default], () => h.map(e => x.default.getUser(e)), [h]),
    b = u.filter(e => !h.includes(e.id) && !m.includes(e.id)),
    y = (0, p.dq)(b),
    O = E.filter(e => null != e && !m.includes(e.id)),
    v = (0, c.e7)([N.Z], () => N.Z.getUserAffinitiesMap(), []),
    I = i.useMemo(() => (0, R.C)(y, v, "GuildTooltip - nonBlockedUsers"), [y, v]),
    L = i.useMemo(() => (0, R.C)(d, v, "GuildTooltip - stageSpeakers"), [d, v]),
    j = i.useMemo(() => (0, R.C)(O, v, "GuildTooltip - streamUsers"), [O, v]);
  return {
    voiceUsersToShow: I,
    stageSpeakers: L,
    numStageListeners: _,
    streamUsersToShow: j,
    embeddedActivitiesUsers: i.useMemo(() => (0, R.C)(g, v, "GuildTooltip - embeddedActivitiesUsers"), [g, v]),
    hasActivity: d.length > 0 || b.length > 0 || O.length > 0 || g.length > 0
  }
}

function B(e, t, n) {
  return 0 === t.length ? null : (0, r.jsxs)("div", {
    className: U.row,
    children: [(0, r.jsx)(e, {
      className: U.activityIcon,
      color: "currentColor"
    }), (0, r.jsx)(_.ZP, {
      guildId: n,
      users: t,
      max: 6
    })]
  })
}

function Z(e, t, n) {
  return 0 === t.length ? null : (0, r.jsxs)("div", {
    className: U.row,
    children: [(0, r.jsx)(u.ewx, {
      size: "lg",
      color: "currentColor",
      className: U.activityIcon
    }), (0, r.jsx)(_.ZP, {
      guildId: e,
      users: t,
      max: 3
    }), (0, r.jsxs)("div", {
      className: U.stageListenerPill,
      children: [(0, r.jsx)(u.VWR, {
        size: "xs",
        color: "currentColor"
      }), (0, r.jsx)(u.Text, {
        className: U.stageListenerCount,
        color: "text-default",
        variant: "text-xs/normal",
        children: n
      })]
    })]
  })
}

function F(e) {
  let {
    muteConfig: t,
    className: n
  } = e;
  return (null == t ? true : t.end_time) == null ? (0, r.jsx)(u.Text, {
    variant: "text-xs/normal",
    color: "text-muted",
    className: n,
    children: j.intl.string(j.t.fpKdS1)
  }) : (0, r.jsx)(I.Z, {
    muteConfig: t,
    className: n
  })
}

function V(e) {
  let {
    guild: t
  } = e, n = t.id, {
    enabled: i
  } = d.c.useExperiment({
    location: "GuildTooltip"
  }, {
    autoTrackExposure: true
  }), {
    voiceUsersToShow: a,
    stageSpeakers: s,
    numStageListeners: l,
    streamUsersToShow: f,
    embeddedActivitiesUsers: _
  } = G(t), p = B(u.gj8, a, n), h = Z(n, s, l), m = B(u.hGI, f, n), g = B(i ? u.iWm : u.nG3, _, n), {
    isMuted: E,
    muteConfig: b
  } = (0, c.cj)([L.ZP], () => ({
    isMuted: L.ZP.isMuted(n),
    muteConfig: L.ZP.getMuteConfig(n)
  }), [n]), y = null != p || null != m;
  return (0, r.jsxs)(r.Fragment, {
    children: [h, p, m, g, E ? (0, r.jsx)(F, {
      muteConfig: b,
      className: o()(U.muteText, {
        [U.muteTextWithActivity]: y
      })
    }) : null]
  })
}

function H(e) {
  switch (e) {
    case b.wB.SUBMITTED:
      return j.intl.string(j.t["9KFC98"]);
    case b.wB.REJECTED:
      return j.intl.string(j.t["TQY/Rd"]);
    case b.wB.APPROVED:
      return j.intl.string(j.t.WXHcq5);
    default:
      return j.intl.string(j.t.fjHFC8)
  }
}

function Y(e) {
  let {
    guildJoinRequestStatus: t
  } = e;
  return (0, r.jsx)(u.Text, {
    className: U.viewAsRolesWarning,
    color: "text-default",
    variant: "text-xs/normal",
    children: H(t)
  })
}

function W(e) {
  let {
    guild: t,
    includeActivity: n = true
  } = e, i = (0, m.Z)(t), a = (0, y.E)(t), s = null != a ? (0, r.jsx)(Y, {
    guildJoinRequestStatus: a
  }) : null, l = n ? (0, r.jsx)(V, {
    guild: t
  }) : null, d = (0, c.e7)([v.Z], () => v.Z.isViewingRoles(t.id)), f = null != s ? s : l, _ = (0, O.Ij)(t);
  return (0, r.jsxs)("div", {
    className: U.dialogWrapper,
    children: [(0, r.jsxs)("div", {
      className: o()(U.row, U.rowGuildName),
      children: [i ? (0, r.jsx)(E.Z, {
        guild: t,
        className: U.rowIconV2
      }) : (0, r.jsx)(g.Z, {
        guild: t,
        size: 20,
        className: U.rowIcon
      }), (0, r.jsx)("span", {
        className: o()(U.guildNameText, {
          [U.guildNameTextLimitedSize]: null != l
        }),
        children: t.name
      })]
    }), _ ? (0, r.jsx)(u.Text, {
      className: U.invitesDisabledTooltip,
      color: "header-secondary",
      variant: "text-sm/medium",
      children: j.intl.string(j.t["2n0/Fk"])
    }) : null, d ? (0, r.jsx)(u.Text, {
      className: U.viewAsRolesWarning,
      color: "text-default",
      variant: "text-xs/normal",
      children: j.intl.string(j.t["5LwN89"])
    }) : f]
  })
}

function K(e) {
  let {
    guild: t,
    disabled: n = false,
    "aria-label": a = false,
    children: o,
    includeActivity: s = true
  } = e, [l, c] = i.useState(false), d = i.useRef(null), {
    isHoveringOrFocusing: f
  } = (0, h.Z)(d), _ = i.useCallback(() => {
    c(false)
  }, []);
  return (i.useEffect(() => {
    c(f)
  }, [f]), n) ? o : (0, r.jsx)(u.yRy, {
    targetElementRef: d,
    position: "right",
    spacing: 12,
    shouldShow: l,
    onRequestClose: _,
    renderPopout: () => (0, r.jsx)(W, {
      guild: t,
      includeActivity: s
    }),
    "aria-label": a,
    disablePointerEvents: true,
    clickTrap: false,
    children: () => (0, r.jsx)(u.P3F, {
      innerRef: d,
      onClick: _,
      children: i.cloneElement(i.Children.only(o))
    })
  })
}