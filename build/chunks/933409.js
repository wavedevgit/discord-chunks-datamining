/** Chunk was on 97589 (76e74706900fe12a.js) **/
n.d(t, {
  Z: () => T
}), n(47120), n(789020);
var l = n(200651),
  i = n(192379),
  r = n(442837),
  a = n(481060),
  o = n(91176),
  u = n(749210),
  s = n(616780),
  d = n(251794),
  c = n(386696),
  g = n(71619),
  v = n(946273),
  f = n(910693),
  P = n(592125),
  E = n(271383),
  Z = n(430824),
  b = n(496675),
  m = n(594174),
  O = n(979651),
  h = n(630388),
  N = n(5192),
  y = n(813872),
  S = n(981631),
  p = n(590433),
  C = n(372897),
  j = n(388032);

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
        enumerable: !0,
        configurable: !0,
        writable: !0
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

function T(e, t, T, U, A) {
  let W = i.useMemo(() => ({
      [t]: [e.id]
    }), [t, e.id]),
    _ = null != U ? [U] : [];
  (0, s.$)(W), (0, r.e7)([b.Z], () => b.Z.getGuildVersion(t), [t]);
  let x = (0, r.e7)([Z.Z], () => Z.Z.getGuild(t), [t]),
    w = (0, r.e7)([m.default], () => {
      var t;
      return (null === (t = m.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.id
    }, [e.id]),
    B = (0, r.e7)([E.ZP], () => E.ZP.isGuestOrLurker(t, e.id), [t, e.id]),
    D = (0, r.e7)([P.Z], () => P.Z.getChannel(T), [T]),
    [, k] = (0, g.ZP)(e.id, t),
    R = null == D ? void 0 : D.isGuildStageVoice(),
    {
      muted: q,
      deafened: L,
      suppressed: V,
      voiceChannelId: F
    } = (0, r.cj)([O.Z], () => {
      var n, l, i;
      let r = O.Z.getVoiceState(t, e.id);
      return {
        muted: null !== (n = null == r ? void 0 : r.mute) && void 0 !== n && n,
        deafened: null !== (l = null == r ? void 0 : r.deaf) && void 0 !== l && l,
        suppressed: null !== (i = null == r ? void 0 : r.suppress) && void 0 !== i && i,
        voiceChannelId: null == r ? void 0 : r.channelId
      }
    }),
    G = (0, r.e7)([E.ZP], () => E.ZP.getMember(t, e.id)),
    K = (0, y.Z)({
      userId: e.id,
      guildId: t,
      channelId: T,
      location: U,
      appContext: A
    }),
    Q = (0, f.sE)(t, {
      location: U,
      targetUserId: e.id
    }),
    Y = (0, c.Z)(t, e.id),
    z = null != F && null != T && b.Z.canWithPartialContext(S.Plq.VIEW_CHANNEL, {
      channelId: F
    }) && !B ? [(!R || R && !V) && b.Z.canWithPartialContext(S.Plq.MUTE_MEMBERS, {
      channelId: T
    }) ? (0, l.jsx)(a.S89, {
      id: "voice-mute",
      label: j.NW.string(j.t.e9e9UV),
      checked: q,
      color: "danger",
      action: () => {
        !1 === q && Q(f.jQ.MUTE), u.Z.setServerMute(t, e.id, !q)
      }
    }, "voice-mute") : null, (!R || R && !V) && b.Z.canWithPartialContext(S.Plq.DEAFEN_MEMBERS, {
      channelId: T
    }) ? (0, l.jsx)(a.S89, {
      id: "voice-deafen",
      label: j.NW.string(j.t.hMA2GB),
      checked: L,
      color: "danger",
      action: () => u.Z.setServerDeaf(t, e.id, !L)
    }, "voice-deafen") : null, !w && null != x && b.Z.canWithPartialContext(S.Plq.MOVE_MEMBERS, {
      channelId: T
    }) ? (0, l.jsx)(a.sNh, {
      id: "voice-disconnect",
      label: w ? j.NW.string(j.t["6vrfgo"]) : j.NW.string(j.t["/jERiI"]),
      color: "danger",
      action: () => u.Z.setChannel(t, e.id, null)
    }, "voice-disconnect") : null] : [],
    H = async (t, n, l) => {
      if (t.ctrlKey || t.metaKey) try {
        var i;
        await o.Z.setCommunicationDisabledDuration(n, l, p.UK.DURATION_60_SEC, null, U), Q(f.jQ.TIMEOUT), (0, a.showToast)((0, a.createToast)(j.NW.formatToPlainString(j.t.O9C3Nj, {
          user: null !== (i = N.ZP.getName(n, null, e)) && void 0 !== i ? i : ""
        }), a.ToastType.SUCCESS))
      } catch (e) {
        (0, a.showToast)((0, a.createToast)(j.NW.string(j.t.epyCur), a.ToastType.FAILURE))
      }
    }, J = null, $ = null != x && b.Z.canManageUser(S.Plq.MODERATE_MEMBERS, e, x) && b.Z.canManageUser(S.Plq.KICK_MEMBERS, e, x) && b.Z.canManageUser(S.Plq.BAN_MEMBERS, e, x), X = null != x && (b.Z.canManageUser(S.Plq.MANAGE_GUILD, e, x) || b.Z.canManageUser(S.Plq.MANAGE_ROLES, e, x));
  if (!w && null != x && null != G && null != G.joinedAt && ($ || X) && x.hasFeature(S.oNc.GUILD_ONBOARDING_EVER_ENABLED)) {
    var ee;
    J = (0, h.yE)(null !== (ee = G.flags) && void 0 !== ee ? ee : 0, C.q.BYPASSES_VERIFICATION) ? (0, l.jsx)(a.sNh, {
      id: "verify",
      label: j.NW.string(j.t.NbhSIy),
      action: () => {
        var t;
        return u.Z.setMemberFlags(x.id, e.id, (0, h.mB)(null !== (t = G.flags) && void 0 !== t ? t : 0, C.q.BYPASSES_VERIFICATION, !1))
      }
    }, "verify") : (0, l.jsx)(a.sNh, {
      id: "verify",
      label: j.NW.string(j.t["6QlTeH"]),
      action: () => {
        var t;
        return u.Z.setMemberFlags(x.id, e.id, (0, h.mB)(null !== (t = G.flags) && void 0 !== t ? t : 0, C.q.BYPASSES_VERIFICATION, !0))
      }
    }, "verify")
  }
  return [...z, ...w || null == x ? [] : [K, J, Y && !B ? k ? (0, l.jsx)(a.sNh, {
    id: "removetimeout",
    label: j.NW.formatToPlainString(j.t.csKetb, {
      user: e.username
    }),
    color: "danger",
    action: () => {
      (0, d.q)({
        guildId: t,
        userId: e.id,
        anaylticsLocations: _
      })
    }
  }, "removetimeout") : (0, l.jsx)(a.sNh, {
    id: "timeout",
    label: j.NW.formatToPlainString(j.t.OhsOy8, {
      user: e.username
    }),
    color: "danger",
    action: n => {
      if (n.ctrlKey || n.metaKey) return H(n, t, e.id);
      (0, d.z)({
        guildId: t,
        userId: e.id,
        anaylticsLocations: _
      })
    }
  }, "timeout") : null, (0, v.BK)(e, x) ? (0, l.jsx)(a.sNh, {
    id: "kick",
    label: j.NW.formatToPlainString(j.t["9l/iTU"], {
      user: e.username
    }),
    color: "danger",
    action: () => (0, a.ZDy)(async () => {
      let {
        default: i
      } = await n.e("5454").then(n.bind(n, 854360));
      return n => (0, l.jsx)(i, I(M({}, n), {
        location: U,
        guildId: t,
        user: e
      }))
    })
  }, "kick") : null, (0, v.mm)(e, x) ? (0, l.jsx)(a.sNh, {
    id: "ban",
    label: j.NW.formatToPlainString(j.t.WnpUBg, {
      user: e.username
    }),
    color: "danger",
    action: () => (0, a.ZDy)(async () => {
      let {
        default: i
      } = await n.e("43350").then(n.bind(n, 98746));
      return n => (0, l.jsx)(i, I(M({}, n), {
        location: U,
        guildId: t,
        user: e
      }))
    })
  }, "ban") : null]]
}