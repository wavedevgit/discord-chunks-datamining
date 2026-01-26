/** Chunk was on 91042 **/
/** chunk id: 291247, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => P
}), require("./896048.js"), require("./938796.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk665260 = require("./665260.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk262577 = require("./262577.js"),
  Chunk686956 = require("./686956.js"),
  Chunk80682 = require("./80682.js"),
  Chunk991982 = require("./991982.jsx"),
  Chunk838111 = require("./838111.js"),
  Chunk870136 = require("./870136.js"),
  Chunk351001 = require("./351001.js"),
  Chunk504049 = require("./504049.js"),
  Chunk734057 = require("./734057.js"),
  Chunk696451 = require("./696451.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk287809 = require("./287809.js"),
  Chunk977997 = require("./977997.js"),
  Chunk562153 = require("./562153.js"),
  Chunk121127 = require("./121127.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk200700 = require("./200700.js"),
  Chunk340837 = require("./340837.js"),
  Chunk985018 = require("./985018.jsx");

function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function P(e, t, P, T, _) {
  let L = r.useMemo(() => ({
      [t]: [e.id]
    }), [t, e.id]),
    U = null != T ? [T] : [];
  (0, u.E)(L, "useAdminActionItems"), (0, a.bG)([y.A], () => y.A.getGuildVersion(t), [t]);
  let N = (0, a.bG)([O.A], () => O.A.getGuild(t), [t]),
    G = (0, a.bG)([v.default], () => {
      var t;
      return (null == (t = v.default.getCurrentUser()) ? true : t.id) === e.id
    }, [e.id]),
    R = (0, a.bG)([p.Ay], () => p.Ay.isGuestOrLurker(t, e.id), [t, e.id]),
    B = (0, a.bG)([m.A], () => m.A.getChannel(P), [P]),
    [, w] = (0, b.Ay)(e.id, t),
    V = null == B ? true : B.isGuildStageVoice(),
    {
      muted: k,
      deafened: F,
      suppressed: K,
      voiceChannelId: X
    } = (0, a.cf)([E.A], () => {
      var n, l, r;
      let i = E.A.getVoiceState(t, e.id);
      return {
        muted: null != (n = null == i ? true : i.mute) && n,
        deafened: null != (l = null == i ? true : i.deaf) && l,
        suppressed: null != (r = null == i ? true : i.suppress) && r,
        voiceChannelId: null == i ? true : i.channelId
      }
    }),
    W = (0, a.bG)([p.Ay], () => p.Ay.getMember(t, e.id)),
    H = (0, j.A)({
      userId: e.id,
      guildId: t,
      channelId: P,
      location: T,
      appContext: _
    }),
    Y = (0, f.$9)(t, {
      location: T,
      targetUserId: e.id
    }),
    J = (0, A.A)(t, e.id),
    q = null != X && null != P && y.A.canWithPartialContext(x.xBc.VIEW_CHANNEL, {
      channelId: X
    }) && !R ? [(!V || V && !K) && y.A.canWithPartialContext(x.xBc.MUTE_MEMBERS, {
      channelId: P
    }) ? (0, l.jsx)(o.sLh, {
      id: "voice-mute",
      label: D.intl.string(D.t.e9e9Ua),
      checked: k,
      color: "danger",
      action: () => {
        false === k && Y(f.Nj.MUTE), d.A.setServerMute(t, e.id, !k)
      }
    }, "voice-mute") : null, (!V || V && !K) && y.A.canWithPartialContext(x.xBc.DEAFEN_MEMBERS, {
      channelId: P
    }) ? (0, l.jsx)(o.sLh, {
      id: "voice-deafen",
      label: D.intl.string(D.t.hMA2GE),
      checked: F,
      color: "danger",
      action: () => d.A.setServerDeaf(t, e.id, !F)
    }, "voice-deafen") : null, !G && null != N && y.A.canWithPartialContext(x.xBc.MOVE_MEMBERS, {
      channelId: P
    }) ? (0, l.jsx)(o.Drp, {
      id: "voice-disconnect",
      label: G ? D.intl.string(D.t["6vrfgt"]) : D.intl.string(D.t["/jERiG"]),
      color: "danger",
      action: () => d.A.setChannel(t, e.id, null)
    }, "voice-disconnect") : null] : [],
    Z = async (t, n, l) => {
      if (t.ctrlKey || t.metaKey) try {
        var r;
        await s.A.setCommunicationDisabledDuration(n, l, S.DisableCommunicationDuration.DURATION_60_SEC, null, T), Y(f.Nj.TIMEOUT), (0, o.showToast)((0, o.createToast)(D.intl.formatToPlainString(D.t.O9C3Nt, {
          user: null != (r = h.Ay.getName(n, null, e)) ? r : ""
        }), o.ToastType.SUCCESS))
      } catch (e) {
        (0, o.showToast)((0, o.createToast)(D.intl.string(D.t.epyCuh), o.ToastType.FAILURE))
      }
    }, z = null, $ = null != N && y.A.canManageUser(x.xBc.MODERATE_MEMBERS, e, N) && y.A.canManageUser(x.xBc.KICK_MEMBERS, e, N) && y.A.canManageUser(x.xBc.BAN_MEMBERS, e, N), Q = null != N && (y.A.canManageUser(x.xBc.MANAGE_GUILD, e, N) || y.A.canManageUser(x.xBc.MANAGE_ROLES, e, N));
  if (!G && null != N && null != W && null != W.joinedAt && ($ || Q) && N.features.has(x.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED)) {
    var ee;
    z = (0, i.Lt)(null != (ee = W.flags) ? ee : 0, M.D.BYPASSES_VERIFICATION) ? (0, l.jsx)(o.Drp, {
      id: "verify",
      label: D.intl.string(D.t.NbhSI7),
      action: () => {
        var t;
        return d.A.setMemberFlags(N.id, e.id, (0, i.lA)(null != (t = W.flags) ? t : 0, M.D.BYPASSES_VERIFICATION, false))
      }
    }, "verify") : (0, l.jsx)(o.Drp, {
      id: "verify",
      label: D.intl.string(D.t["6QlTeK"]),
      action: () => {
        var t;
        return d.A.setMemberFlags(N.id, e.id, (0, i.lA)(null != (t = W.flags) ? t : 0, M.D.BYPASSES_VERIFICATION, true))
      }
    }, "verify")
  }
  return [H, ...q, ...G || null == N ? [] : [z, J && !R ? w ? (0, l.jsx)(o.Drp, {
    id: "removetimeout",
    label: D.intl.formatToPlainString(D.t.csKeta, {
      user: e.username
    }),
    color: "danger",
    action: () => {
      (0, c.Y)({
        guildId: t,
        userId: e.id,
        anaylticsLocations: U
      })
    }
  }, "removetimeout") : (0, l.jsx)(o.Drp, {
    id: "timeout",
    label: D.intl.formatToPlainString(D.t.OhsOy0, {
      user: e.username
    }),
    color: "danger",
    action: n => {
      if (n.ctrlKey || n.metaKey) return Z(n, t, e.id);
      (0, c.R)({
        guildId: t,
        userId: e.id,
        anaylticsLocations: U
      })
    }
  }, "timeout") : null, (0, g.L7)(e, N) ? (0, l.jsx)(o.Drp, {
    id: "kick",
    label: D.intl.formatToPlainString(D.t["9l/iTS"], {
      user: e.username
    }),
    color: "danger",
    action: () => (0, o.mMO)(async () => {
      let {
        default: r
      } = await n.e("40243").then(n.bind(n, 324785));
      return n => (0, l.jsx)(r, I(C({}, n), {
        location: T,
        guildId: t,
        user: e
      }))
    })
  }, "kick") : null, (0, g.EZ)(e, N) ? (0, l.jsx)(o.Drp, {
    id: "ban",
    label: D.intl.formatToPlainString(D.t.WnpUBi, {
      user: e.username
    }),
    color: "danger",
    action: () => (0, o.mMO)(async () => {
      let {
        default: r
      } = await n.e("2504").then(n.bind(n, 333179));
      return n => (0, l.jsx)(r, I(C({}, n), {
        location: T,
        guildId: t,
        user: e
      }))
    })
  }, "ban") : null]]
}