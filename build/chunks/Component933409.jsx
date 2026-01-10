/** Chunk was on 92524 **/
/** chunk id: 933409, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => A
}), require("./388685.js"), require("./997841.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk95015 = require("./95015.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk91176 = require("./91176.js"),
  Chunk749210 = require("./749210.js"),
  Chunk616780 = require("./616780.js"),
  Chunk251794 = require("./251794.jsx"),
  Chunk386696 = require("./386696.js"),
  Chunk71619 = require("./71619.js"),
  Chunk946273 = require("./946273.js"),
  Chunk910693 = require("./910693.js"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk979651 = require("./979651.js"),
  Chunk5192 = require("./5192.js"),
  Chunk813872 = require("./813872.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk590433 = require("./590433.js"),
  Chunk372897 = require("./372897.js"),
  Chunk388032 = require("./388032.jsx");

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

function _(e, t) {
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

function A(e, t, A, D, x) {
  let T = i.useMemo(() => ({
      [t]: [e.id]
    }), [t, e.id]),
    N = null != D ? [D] : [];
  (0, d.$)(T, "useAdminActionItems"), (0, a.e7)([E.Z], () => E.Z.getGuildVersion(t), [t]);
  let U = (0, a.e7)([p.Z], () => p.Z.getGuild(t), [t]),
    L = (0, a.e7)([O.default], () => {
      var t;
      return (null == (t = O.default.getCurrentUser()) ? true : t.id) === e.id
    }, [e.id]),
    w = (0, a.e7)([v.ZP], () => v.ZP.isGuestOrLurker(t, e.id), [t, e.id]),
    k = (0, a.e7)([Z.Z], () => Z.Z.getChannel(A), [A]),
    [, B] = (0, f.ZP)(e.id, t),
    R = null == k ? true : k.isGuildStageVoice(),
    {
      muted: q,
      deafened: V,
      suppressed: F,
      voiceChannelId: G
    } = (0, a.cj)([h.Z], () => {
      var n, l, i;
      let r = h.Z.getVoiceState(t, e.id);
      return {
        muted: null != (n = null == r ? true : r.mute) && n,
        deafened: null != (l = null == r ? true : r.deaf) && l,
        suppressed: null != (i = null == r ? true : r.suppress) && i,
        voiceChannelId: null == r ? true : r.channelId
      }
    }),
    K = (0, a.e7)([v.ZP], () => v.ZP.getMember(t, e.id)),
    W = (0, P.Z)({
      userId: e.id,
      guildId: t,
      channelId: A,
      location: D,
      appContext: x
    }),
    Y = (0, b.sE)(t, {
      location: D,
      targetUserId: e.id
    }),
    Q = (0, g.Z)(t, e.id),
    z = null != G && null != A && E.Z.canWithPartialContext(y.Plq.VIEW_CHANNEL, {
      channelId: G
    }) && !w ? [(!R || R && !F) && E.Z.canWithPartialContext(y.Plq.MUTE_MEMBERS, {
      channelId: A
    }) ? (0, l.jsx)(o.S89, {
      id: "voice-mute",
      label: M.intl.string(M.t.e9e9Ua),
      checked: q,
      color: "danger",
      action: () => {
        false === q && Y(b.jQ.MUTE), s.Z.setServerMute(t, e.id, !q)
      }
    }, "voice-mute") : null, (!R || R && !F) && E.Z.canWithPartialContext(y.Plq.DEAFEN_MEMBERS, {
      channelId: A
    }) ? (0, l.jsx)(o.S89, {
      id: "voice-deafen",
      label: M.intl.string(M.t.hMA2GE),
      checked: V,
      color: "danger",
      action: () => s.Z.setServerDeaf(t, e.id, !V)
    }, "voice-deafen") : null, !L && null != U && E.Z.canWithPartialContext(y.Plq.MOVE_MEMBERS, {
      channelId: A
    }) ? (0, l.jsx)(o.sNh, {
      id: "voice-disconnect",
      label: L ? M.intl.string(M.t["6vrfgt"]) : M.intl.string(M.t["/jERiG"]),
      color: "danger",
      action: () => s.Z.setChannel(t, e.id, null)
    }, "voice-disconnect") : null] : [],
    H = async (t, n, l) => {
      if (t.ctrlKey || t.metaKey) try {
        var i;
        await u.Z.setCommunicationDisabledDuration(n, l, j.DisableCommunicationDuration.DURATION_60_SEC, null, D), Y(b.jQ.TIMEOUT), (0, o.showToast)((0, o.createToast)(M.intl.formatToPlainString(M.t.O9C3Nt, {
          user: null != (i = S.ZP.getName(n, null, e)) ? i : ""
        }), o.ToastType.SUCCESS))
      } catch (e) {
        (0, o.showToast)((0, o.createToast)(M.intl.string(M.t.epyCuh), o.ToastType.FAILURE))
      }
    }, J = null, X = null != U && E.Z.canManageUser(y.Plq.MODERATE_MEMBERS, e, U) && E.Z.canManageUser(y.Plq.KICK_MEMBERS, e, U) && E.Z.canManageUser(y.Plq.BAN_MEMBERS, e, U), $ = null != U && (E.Z.canManageUser(y.Plq.MANAGE_GUILD, e, U) || E.Z.canManageUser(y.Plq.MANAGE_ROLES, e, U));
  if (!L && null != U && null != K && null != K.joinedAt && (X || $) && U.features.has(y.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED)) {
    var ee;
    J = (0, r.yE)(null != (ee = K.flags) ? ee : 0, I.q.BYPASSES_VERIFICATION) ? (0, l.jsx)(o.sNh, {
      id: "verify",
      label: M.intl.string(M.t.NbhSI7),
      action: () => {
        var t;
        return s.Z.setMemberFlags(U.id, e.id, (0, r.mB)(null != (t = K.flags) ? t : 0, I.q.BYPASSES_VERIFICATION, false))
      }
    }, "verify") : (0, l.jsx)(o.sNh, {
      id: "verify",
      label: M.intl.string(M.t["6QlTeK"]),
      action: () => {
        var t;
        return s.Z.setMemberFlags(U.id, e.id, (0, r.mB)(null != (t = K.flags) ? t : 0, I.q.BYPASSES_VERIFICATION, true))
      }
    }, "verify")
  }
  return [W, ...z, ...L || null == U ? [] : [J, Q && !w ? B ? (0, l.jsx)(o.sNh, {
    id: "removetimeout",
    label: M.intl.formatToPlainString(M.t.csKeta, {
      user: e.username
    }),
    color: "danger",
    action: () => {
      (0, c.q)({
        guildId: t,
        userId: e.id,
        anaylticsLocations: N
      })
    }
  }, "removetimeout") : (0, l.jsx)(o.sNh, {
    id: "timeout",
    label: M.intl.formatToPlainString(M.t.OhsOy0, {
      user: e.username
    }),
    color: "danger",
    action: n => {
      if (n.ctrlKey || n.metaKey) return H(n, t, e.id);
      (0, c.z)({
        guildId: t,
        userId: e.id,
        anaylticsLocations: N
      })
    }
  }, "timeout") : null, (0, m.BK)(e, U) ? (0, l.jsx)(o.sNh, {
    id: "kick",
    label: M.intl.formatToPlainString(M.t["9l/iTS"], {
      user: e.username
    }),
    color: "danger",
    action: () => (0, o.ZDy)(async () => {
      let {
        default: i
      } = await n.e("79939").then(n.bind(n, 495494));
      return n => (0, l.jsx)(i, _(C({}, n), {
        location: D,
        guildId: t,
        user: e
      }))
    })
  }, "kick") : null, (0, m.mm)(e, U) ? (0, l.jsx)(o.sNh, {
    id: "ban",
    label: M.intl.formatToPlainString(M.t.WnpUBi, {
      user: e.username
    }),
    color: "danger",
    action: () => (0, o.ZDy)(async () => {
      let {
        default: i
      } = await n.e("18910").then(n.bind(n, 497880));
      return n => (0, l.jsx)(i, _(C({}, n), {
        location: D,
        guildId: t,
        user: e
      }))
    })
  }, "ban") : null]]
}