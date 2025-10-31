/** Chunk was on 26976 **/
/** chunk id: 933409, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
}), require("./388685.js"), require("./997841.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk630388 = require("./630388.js"),
  Chunk5192 = require("./5192.js"),
  Chunk813872 = require("./813872.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk590433 = require("./590433.js"),
  Chunk372897 = require("./372897.js"),
  Chunk388032 = require("./388032.jsx");

function M(e) {
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

function x(e, t) {
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

function N(e, t, N, _, A) {
  let T = i.useMemo(() => ({
      [t]: [e.id]
    }), [t, e.id]),
    D = null != _ ? [_] : [];
  (0, u.$)(T, "useAdminActionItems"), (0, r.e7)([h.Z], () => h.Z.getGuildVersion(t), [t]);
  let U = (0, r.e7)([O.Z], () => O.Z.getGuild(t), [t]),
    L = (0, r.e7)([E.default], () => {
      var t;
      return (null == (t = E.default.getCurrentUser()) ? true : t.id) === e.id
    }, [e.id]),
    w = (0, r.e7)([m.ZP], () => m.ZP.isGuestOrLurker(t, e.id), [t, e.id]),
    k = (0, r.e7)([b.Z], () => b.Z.getChannel(N), [N]),
    [, R] = (0, g.ZP)(e.id, t),
    B = null == k ? true : k.isGuildStageVoice(),
    {
      muted: V,
      deafened: q,
      suppressed: G,
      voiceChannelId: F
    } = (0, r.cj)([v.Z], () => {
      var n, l, i;
      let r = v.Z.getVoiceState(t, e.id);
      return {
        muted: null != (n = null == r ? true : r.mute) && n,
        deafened: null != (l = null == r ? true : r.deaf) && l,
        suppressed: null != (i = null == r ? true : r.suppress) && i,
        voiceChannelId: null == r ? true : r.channelId
      }
    }),
    Y = (0, r.e7)([m.ZP], () => m.ZP.getMember(t, e.id)),
    K = (0, p.Z)({
      userId: e.id,
      guildId: t,
      channelId: N,
      location: _,
      appContext: A
    }),
    Q = (0, f.sE)(t, {
      location: _,
      targetUserId: e.id
    }),
    H = (0, c.Z)(t, e.id),
    W = null != F && null != N && h.Z.canWithPartialContext(S.Plq.VIEW_CHANNEL, {
      channelId: F
    }) && !w ? [(!B || B && !G) && h.Z.canWithPartialContext(S.Plq.MUTE_MEMBERS, {
      channelId: N
    }) ? (0, l.jsx)(o.S89, {
      id: "voice-mute",
      label: I.intl.string(I.t.e9e9Ua),
      checked: V,
      color: "danger",
      action: () => {
        false === V && Q(f.jQ.MUTE), s.Z.setServerMute(t, e.id, !V)
      }
    }, "voice-mute") : null, (!B || B && !G) && h.Z.canWithPartialContext(S.Plq.DEAFEN_MEMBERS, {
      channelId: N
    }) ? (0, l.jsx)(o.S89, {
      id: "voice-deafen",
      label: I.intl.string(I.t.hMA2GE),
      checked: q,
      color: "danger",
      action: () => s.Z.setServerDeaf(t, e.id, !q)
    }, "voice-deafen") : null, !L && null != U && h.Z.canWithPartialContext(S.Plq.MOVE_MEMBERS, {
      channelId: N
    }) ? (0, l.jsx)(o.sNh, {
      id: "voice-disconnect",
      label: L ? I.intl.string(I.t["6vrfgt"]) : I.intl.string(I.t["/jERiG"]),
      color: "danger",
      action: () => s.Z.setChannel(t, e.id, null)
    }, "voice-disconnect") : null] : [],
    X = async (t, n, l) => {
      if (t.ctrlKey || t.metaKey) try {
        var i;
        await a.Z.setCommunicationDisabledDuration(n, l, y.DisableCommunicationDuration.DURATION_60_SEC, null, _), Q(f.jQ.TIMEOUT), (0, o.showToast)((0, o.createToast)(I.intl.formatToPlainString(I.t.O9C3Nt, {
          user: null != (i = P.ZP.getName(n, null, e)) ? i : ""
        }), o.ToastType.SUCCESS))
      } catch (e) {
        (0, o.showToast)((0, o.createToast)(I.intl.string(I.t.epyCuh), o.ToastType.FAILURE))
      }
    }, J = null, z = null != U && h.Z.canManageUser(S.Plq.MODERATE_MEMBERS, e, U) && h.Z.canManageUser(S.Plq.KICK_MEMBERS, e, U) && h.Z.canManageUser(S.Plq.BAN_MEMBERS, e, U), $ = null != U && (h.Z.canManageUser(S.Plq.MANAGE_GUILD, e, U) || h.Z.canManageUser(S.Plq.MANAGE_ROLES, e, U));
  if (!L && null != U && null != Y && null != Y.joinedAt && (z || $) && U.features.has(S.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED)) {
    var ee;
    J = (0, j.yE)(null != (ee = Y.flags) ? ee : 0, C.q.BYPASSES_VERIFICATION) ? (0, l.jsx)(o.sNh, {
      id: "verify",
      label: I.intl.string(I.t.NbhSI7),
      action: () => {
        var t;
        return s.Z.setMemberFlags(U.id, e.id, (0, j.mB)(null != (t = Y.flags) ? t : 0, C.q.BYPASSES_VERIFICATION, false))
      }
    }, "verify") : (0, l.jsx)(o.sNh, {
      id: "verify",
      label: I.intl.string(I.t["6QlTeK"]),
      action: () => {
        var t;
        return s.Z.setMemberFlags(U.id, e.id, (0, j.mB)(null != (t = Y.flags) ? t : 0, C.q.BYPASSES_VERIFICATION, true))
      }
    }, "verify")
  }
  return [K, ...W, ...L || null == U ? [] : [J, H && !w ? R ? (0, l.jsx)(o.sNh, {
    id: "removetimeout",
    label: I.intl.formatToPlainString(I.t.csKeta, {
      user: e.username
    }),
    color: "danger",
    action: () => {
      (0, d.q)({
        guildId: t,
        userId: e.id,
        anaylticsLocations: D
      })
    }
  }, "removetimeout") : (0, l.jsx)(o.sNh, {
    id: "timeout",
    label: I.intl.formatToPlainString(I.t.OhsOy0, {
      user: e.username
    }),
    color: "danger",
    action: n => {
      if (n.ctrlKey || n.metaKey) return X(n, t, e.id);
      (0, d.z)({
        guildId: t,
        userId: e.id,
        anaylticsLocations: D
      })
    }
  }, "timeout") : null, (0, Z.BK)(e, U) ? (0, l.jsx)(o.sNh, {
    id: "kick",
    label: I.intl.formatToPlainString(I.t["9l/iTS"], {
      user: e.username
    }),
    color: "danger",
    action: () => (0, o.ZDy)(async () => {
      let {
        default: i
      } = await n.e("5454").then(n.bind(n, 854360));
      return n => (0, l.jsx)(i, x(M({}, n), {
        location: _,
        guildId: t,
        user: e
      }))
    })
  }, "kick") : null, (0, Z.mm)(e, U) ? (0, l.jsx)(o.sNh, {
    id: "ban",
    label: I.intl.formatToPlainString(I.t.WnpUBi, {
      user: e.username
    }),
    color: "danger",
    action: () => (0, o.ZDy)(async () => {
      let {
        default: i
      } = await n.e("43350").then(n.bind(n, 98746));
      return n => (0, l.jsx)(i, x(M({}, n), {
        location: _,
        guildId: t,
        user: e
      }))
    })
  }, "ban") : null]]
}