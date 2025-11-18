/** Chunk was on web.js **/
/** chunk id: 593618, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => X,
  Z: () => Q
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
  Chunk132789 = require("./132789.js"),
  Chunk78480 = require("./78480.js");

function G(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function B(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      G(e, t, n[t])
    })
  }
  return e
}

function Z(e, t) {
  if (null == e) return {};
  var n, r, i = F(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function F(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function V(e) {
  let t = e.id,
    n = (0, c.Wu)([P.ZP, A.Z], () => [...P.ZP.getChannels(t)[P.Zb].filter(e => {
      let {
        channel: t
      } = e;
      return t.type === M.d4z.GUILD_VOICE
    }).map(e => {
      let {
        channel: t
      } = e;
      return t.id
    }), ...Object.values(A.Z.getThreadsForGuild(t)).flatMap(e => Object.keys(e))], [t]),
    r = (0, S.ZP)(t),
    a = i.useMemo(() => r.map(e => e.id), [r]),
    o = (0, c.e7)([x.ZP], () => x.ZP.getVoiceStates(t), [t]),
    s = (0, c.Wu)([D.Z], () => D.Z.getBlockedOrIgnoredIDs()),
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
    d = (0, c.Wu)([I.Z], () => l().flatMap(a, t => {
      if (t === e.afkChannelId) return [];
      let n = I.Z.getMutableParticipants(t, T.pV.SPEAKER).filter(e => e.type === T.Ui.VOICE).map(e => {
        let {
          user: t
        } = e;
        return t
      });
      return (0, p.dq)(n, s)
    })),
    _ = (0, c.e7)([I.Z], () => {
      let e = 0;
      for (let t of a) e += I.Z.getParticipantCount(t, T.pV.AUDIENCE);
      return e
    }),
    h = (0, c.Wu)([R.Z], () => {
      let e = R.Z.getAllApplicationStreams().filter(e => e.guildId === t).map(e => e.ownerId);
      return (0, p._j)(e, s)
    }, [s, t]),
    m = (0, c.Wu)([f.ZP], () => {
      let e = f.ZP.getEmbeddedActivitiesForGuild(t).flatMap(e => Array.from(e.userIds));
      return (0, p._j)(e, s)
    }, [t, s]),
    g = (0, c.Wu)([L.default], () => {
      let e = m.map(e => L.default.getUser(e));
      return (0, p.dq)(e)
    }, [m]),
    E = (0, c.Wu)([L.default], () => h.map(e => L.default.getUser(e)), [h]),
    b = u.filter(e => !h.includes(e.id) && !m.includes(e.id)),
    y = (0, p.dq)(b),
    O = E.filter(e => null != e && !m.includes(e.id)),
    v = (0, c.e7)([C.Z], () => C.Z.getUserAffinitiesMap(), []),
    w = i.useMemo(() => (0, N.C)(y, v, "GuildTooltip - nonBlockedUsers"), [y, v]),
    k = i.useMemo(() => (0, N.C)(d, v, "GuildTooltip - stageSpeakers"), [d, v]),
    j = i.useMemo(() => (0, N.C)(O, v, "GuildTooltip - streamUsers"), [O, v]);
  return {
    voiceUsersToShow: w,
    stageSpeakers: k,
    numStageListeners: _,
    streamUsersToShow: j,
    embeddedActivitiesUsers: i.useMemo(() => (0, N.C)(g, v, "GuildTooltip - embeddedActivitiesUsers"), [g, v]),
    hasActivity: d.length > 0 || b.length > 0 || O.length > 0 || g.length > 0
  }
}

function H(e, t, n) {
  return 0 === t.length ? null : (0, r.jsxs)("div", {
    className: j.row,
    children: [(0, r.jsx)(e, {
      className: j.activityIcon,
      color: "currentColor"
    }), (0, r.jsx)(_.ZP, {
      guildId: n,
      users: t,
      max: 6
    })]
  })
}

function Y(e, t, n) {
  return 0 === t.length ? null : (0, r.jsxs)("div", {
    className: j.row,
    children: [(0, r.jsx)(u.ewx, {
      size: "lg",
      color: "currentColor",
      className: j.activityIcon
    }), (0, r.jsx)(_.ZP, {
      guildId: e,
      users: t,
      max: 3
    }), (0, r.jsxs)("div", {
      className: j.stageListenerPill,
      children: [(0, r.jsx)(u.VWR, {
        size: "xs",
        color: "currentColor"
      }), (0, r.jsx)(u.Text, {
        className: j.stageListenerCount,
        color: "text-default",
        variant: "text-xs/normal",
        children: n
      })]
    })]
  })
}

function W(e) {
  let {
    muteConfig: t,
    className: n
  } = e;
  return (null == t ? true : t.end_time) == null ? (0, r.jsx)(u.Text, {
    variant: "text-xs/normal",
    color: "text-muted",
    className: n,
    children: k.intl.string(k.t.fpKdS1)
  }) : (0, r.jsx)(v.Z, {
    muteConfig: t,
    className: n
  })
}

function K(e) {
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
  } = V(t), p = H(u.gj8, a, n), h = Y(n, s, l), m = H(u.hGI, f, n), g = H(i ? u.iWm : u.nG3, _, n), {
    isMuted: E,
    muteConfig: b
  } = (0, c.cj)([w.ZP], () => ({
    isMuted: w.ZP.isMuted(n),
    muteConfig: w.ZP.getMuteConfig(n)
  }), [n]), y = null != p || null != m;
  return (0, r.jsxs)(r.Fragment, {
    children: [h, p, m, g, E ? (0, r.jsx)(W, {
      muteConfig: b,
      className: o()(j.muteText, {
        [j.muteTextWithActivity]: y
      })
    }) : null]
  })
}

function z(e) {
  switch (e) {
    case E.wB.SUBMITTED:
      return k.intl.string(k.t["9KFC98"]);
    case E.wB.REJECTED:
      return k.intl.string(k.t["TQY/Rd"]);
    case E.wB.APPROVED:
      return k.intl.string(k.t.WXHcq5);
    default:
      return k.intl.string(k.t.fjHFC8)
  }
}

function q(e) {
  let {
    guildJoinRequestStatus: t
  } = e;
  return (0, r.jsx)(u.Text, {
    className: j.viewAsRolesWarning,
    color: "text-default",
    variant: "text-xs/normal",
    children: z(t)
  })
}

function X(e) {
  let {
    guild: t,
    includeActivity: n = true
  } = e, i = (0, h.Z)(t), a = (0, b.E)(t), s = null != a ? (0, r.jsx)(q, {
    guildJoinRequestStatus: a
  }) : null, l = n ? (0, r.jsx)(K, {
    guild: t
  }) : null, d = (0, c.e7)([O.Z], () => O.Z.isViewingRoles(t.id)), f = null != s ? s : l, _ = (0, y.Ij)(t);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: o()(j.row, j.rowGuildName),
      children: [i ? (0, r.jsx)(g.Z, {
        guild: t,
        className: j.rowIconV2
      }) : (0, r.jsx)(m.Z, {
        guild: t,
        size: 20,
        className: j.rowIcon
      }), (0, r.jsx)("span", {
        className: o()(j.guildNameText, {
          [j.guildNameTextLimitedSize]: null != l
        }),
        children: t.name
      })]
    }), _ ? (0, r.jsx)(u.Text, {
      className: j.invitesDisabledTooltip,
      color: "header-secondary",
      variant: "text-sm/medium",
      children: k.intl.string(k.t["2n0/Fk"])
    }) : null, d ? (0, r.jsx)(u.Text, {
      className: j.viewAsRolesWarning,
      color: "text-default",
      variant: "text-xs/normal",
      children: k.intl.string(k.t["5LwN89"])
    }) : f]
  })
}

function Q(e) {
  let {
    guild: t,
    disabled: n = false,
    "aria-label": a = false,
    children: o,
    includeActivity: s = true
  } = e;
  return (0, r.jsx)(u.aML, {
    hideOnClick: true,
    spacing: 12,
    position: "right",
    text: n ? null : (0, r.jsx)(X, {
      guild: t,
      includeActivity: s
    }),
    "aria-label": a,
    tooltipClassName: U.listItemTooltip,
    tooltipContentClassName: U.listItemTooltipContent,
    children: e => {
      var {
        onFocus: t,
        onBlur: n
      } = e, a = Z(e, ["onFocus", "onBlur"]);
      return (0, r.jsx)("div", {
        onFocus: t,
        onBlur: n,
        children: i.cloneElement(i.Children.only(o), B({}, a))
      })
    }
  })
}