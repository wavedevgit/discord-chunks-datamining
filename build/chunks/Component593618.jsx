/** Chunk was on 82477 **/
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
  Chunk998081 = require("./998081.js"),
  Chunk66776 = require("./66776.js");

function k(e, t, n) {
  return 0 === t.length ? null : (0, r.jsxs)("div", {
    className: M.row,
    children: [(0, r.jsx)(e, {
      className: M.activityIcon,
      color: "currentColor"
    }), (0, r.jsx)(f.ZP, {
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
  return (null == t ? true : t.end_time) == null ? (0, r.jsx)(u.Text, {
    variant: "text-xs/normal",
    color: "text-muted",
    className: n,
    children: D.intl.string(D.t.fpKdS1)
  }) : (0, r.jsx)(j.Z, {
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
    numStageListeners: p,
    streamUsersToShow: g,
    embeddedActivitiesUsers: b
  } = function(e) {
    let t = e.id,
      n = (0, c.Wu)([N.ZP, S.Z], () => [...N.ZP.getChannels(t)[N.Zb].filter(e => {
        let {
          channel: t
        } = e;
        return t.type === R.d4z.GUILD_VOICE
      }).map(e => {
        let {
          channel: t
        } = e;
        return t.id
      }), ...Object.values(S.Z.getThreadsForGuild(t)).flatMap(e => Object.keys(e))], [t]),
      r = (0, E.ZP)(t),
      l = i.useMemo(() => r.map(e => e.id), [r]),
      a = (0, c.e7)([A.ZP], () => A.ZP.getVoiceStates(t), [t]),
      o = (0, c.Wu)([Z.Z], () => Z.Z.getBlockedOrIgnoredIDs()),
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
      f = (0, c.Wu)([C.Z], () => s().flatMap(l, t => {
        if (t === e.afkChannelId) return [];
        let n = C.Z.getMutableParticipants(t, x.pV.SPEAKER).filter(e => e.type === x.Ui.VOICE).map(e => {
          let {
            user: t
          } = e;
          return t
        });
        return (0, h.dq)(n, o)
      })),
      p = (0, c.e7)([C.Z], () => {
        let e = 0;
        for (let t of l) e += C.Z.getParticipantCount(t, x.pV.AUDIENCE);
        return e
      }),
      g = (0, c.Wu)([P.Z], () => {
        let e = P.Z.getAllApplicationStreams().filter(e => e.guildId === t).map(e => e.ownerId);
        return (0, h._j)(e, o)
      }, [o, t]),
      b = (0, c.Wu)([d.ZP], () => {
        let e = d.ZP.getEmbeddedActivitiesForGuild(t).flatMap(e => Array.from(e.userIds));
        return (0, h._j)(e, o)
      }, [t, o]),
      m = (0, c.Wu)([T.default], () => {
        let e = b.map(e => T.default.getUser(e));
        return (0, h.dq)(e)
      }, [b]),
      y = (0, c.Wu)([T.default], () => g.map(e => T.default.getUser(e)), [g]),
      O = u.filter(e => !g.includes(e.id) && !b.includes(e.id)),
      v = (0, h.dq)(O),
      j = y.filter(e => null != e && !b.includes(e.id)),
      w = (0, c.e7)([I.Z], () => I.Z.getUserAffinitiesMap(), []),
      D = i.useMemo(() => (0, _.C)(v, w, "GuildTooltip - nonBlockedUsers"), [v, w]),
      M = i.useMemo(() => (0, _.C)(f, w, "GuildTooltip - stageSpeakers"), [f, w]),
      L = i.useMemo(() => (0, _.C)(j, w, "GuildTooltip - streamUsers"), [j, w]);
    return {
      voiceUsersToShow: D,
      stageSpeakers: M,
      numStageListeners: p,
      streamUsersToShow: L,
      embeddedActivitiesUsers: i.useMemo(() => (0, _.C)(m, w, "GuildTooltip - embeddedActivitiesUsers"), [m, w]),
      hasActivity: f.length > 0 || O.length > 0 || j.length > 0 || m.length > 0
    }
  }(t), m = k(u.gj8, l, n), y = 0 === o.length ? null : (0, r.jsxs)("div", {
    className: M.row,
    children: [(0, r.jsx)(u.ewx, {
      size: "lg",
      color: "currentColor",
      className: M.activityIcon
    }), (0, r.jsx)(f.ZP, {
      guildId: n,
      users: o,
      max: 3
    }), (0, r.jsxs)("div", {
      className: M.stageListenerPill,
      children: [(0, r.jsx)(u.VWR, {
        size: "xs",
        color: "currentColor"
      }), (0, r.jsx)(u.Text, {
        className: M.stageListenerCount,
        color: "text-default",
        variant: "text-xs/normal",
        children: p
      })]
    })]
  }), O = k(u.hGI, g, n), v = k(u.nG3, b, n), {
    isMuted: j,
    muteConfig: D
  } = (0, c.cj)([w.ZP], () => ({
    isMuted: w.ZP.isMuted(n),
    muteConfig: w.ZP.getMuteConfig(n)
  }), [n]);
  return (0, r.jsxs)(r.Fragment, {
    children: [y, m, O, v, j ? (0, r.jsx)(G, {
      muteConfig: D,
      className: a()(M.muteText, {
        [M.muteTextWithActivity]: null != m || null != O
      })
    }) : null]
  })
}

function B(e) {
  let {
    guildJoinRequestStatus: t
  } = e;
  return (0, r.jsx)(u.Text, {
    className: M.viewAsRolesWarning,
    color: "text-default",
    variant: "text-xs/normal",
    children: function(e) {
      switch (e) {
        case m.wB.SUBMITTED:
          return D.intl.string(D.t["9KFC98"]);
        case m.wB.REJECTED:
          return D.intl.string(D.t["TQY/Rd"]);
        case m.wB.APPROVED:
          return D.intl.string(D.t.WXHcq5);
        default:
          return D.intl.string(D.t.fjHFC8)
      }
    }(t)
  })
}

function F(e) {
  let {
    guild: t
  } = e, n = (0, p.Z)(t), i = (0, y.E)(t), l = null != i ? (0, r.jsx)(B, {
    guildJoinRequestStatus: i
  }) : null, o = (0, r.jsx)(U, {
    guild: t
  }), s = (0, c.e7)([v.Z], () => v.Z.isViewingRoles(t.id)), d = (0, O.Ij)(t);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: a()(M.row, M.rowGuildName),
      children: [n ? (0, r.jsx)(b.Z, {
        guild: t,
        className: M.rowIconV2
      }) : (0, r.jsx)(g.Z, {
        guild: t,
        size: 20,
        className: M.rowIcon
      }), (0, r.jsx)("span", {
        className: a()(M.guildNameText, M.guildNameTextLimitedSize),
        children: t.name
      })]
    }), d ? (0, r.jsx)(u.Text, {
      className: M.invitesDisabledTooltip,
      color: "text-default",
      variant: "text-sm/medium",
      children: D.intl.string(D.t["2n0/Fk"])
    }) : null, s ? (0, r.jsx)(u.Text, {
      className: M.viewAsRolesWarning,
      color: "text-default",
      variant: "text-xs/normal",
      children: D.intl.string(D.t["5LwN89"])
    }) : null != l ? l : o]
  })
}

function V(e) {
  let {
    guild: t,
    disabled: n = false,
    "aria-label": l = false,
    children: a
  } = e;
  return (0, r.jsx)(u.aML, {
    "data-migration-pending": true,
    hideOnClick: true,
    spacing: 12,
    position: "right",
    text: n ? null : (0, r.jsx)(F, {
      guild: t
    }),
    "aria-label": l,
    tooltipClassName: L.listItemTooltip,
    tooltipContentClassName: L.listItemTooltipContent,
    children: e => {
      var {
        onFocus: t,
        onBlur: n
      } = e, l = function(e, t) {
        if (null == e) return {};
        var n, r, i = function(e, t) {
          if (null == e) return {};
          var n, r, i = {},
            l = Object.keys(e);
          for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
          return i
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
        }
        return i
      }(e, ["onFocus", "onBlur"]);
      return (0, r.jsx)("div", {
        onFocus: t,
        onBlur: n,
        children: i.cloneElement(i.Children.only(a), function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
              var r;
              r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = r
            })
          }
          return e
        }({}, l))
      })
    }
  })
}