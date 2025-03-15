/** Chunk was on 88712 **/
r.d(t, {
  Z: () => U,
  k: () => R
}), r(47120), r(653041);
var n = r(200651),
  i = r(192379),
  l = r(120356),
  o = r.n(l),
  a = r(442837),
  s = r(481060),
  c = r(586902),
  u = r(835473),
  d = r(289823),
  p = r(933557),
  f = r(552282),
  b = r(763296),
  O = r(565799),
  g = r(501655),
  v = r(470956),
  y = r(199902),
  m = r(314897),
  j = r(592125),
  h = r(944486),
  P = r(606304),
  I = r(594174),
  w = r(979651),
  S = r(938475),
  x = r(237997),
  E = r(823379),
  Z = r(136015),
  C = r(145597),
  N = r(444295),
  V = r(804570),
  k = r(388627),
  D = r(532658),
  _ = r(981631),
  M = r(65154),
  A = r(388032),
  W = r(412974);

function L(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n
    })
  }
  return e
}

function T(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}

function G(e) {
  let {
    hiddenVoiceStates: t,
    voiceStateMap: r,
    size: i,
    locked: l
  } = e, c = (0, D.e5)(i), u = (0, a.Wu)([I.default, j.Z], () => t.map(e => {
    var t;
    let n = I.default.getUser(e);
    if (null == n) return;
    let i = j.Z.getChannel(null === (t = r.get(e)) || void 0 === t ? void 0 : t.voiceState.channelId);
    return n.getAvatarURL(null == i ? void 0 : i.getGuildId(), c, !1)
  }).filter(E.lm), [t, r, c]);
  return (0, n.jsxs)("div", {
    className: o()(W.hiddenVoiceStates, l && W.locked),
    children: [(0, n.jsx)("div", {
      className: W.hiddenVoiceStatesAvatar,
      children: (0, n.jsx)(d.Z, {
        size: i,
        backSrc: u[0],
        frontSrc: u[1],
        isTyping: !1
      })
    }), (0, n.jsx)("div", {
      className: W.hiddenVoiceStatesText,
      children: (0, n.jsxs)(s.Text, {
        variant: "text-xs/medium",
        children: ["+", t.length, " others in voice"]
      })
    })]
  })
}

function R(e) {
  var t, r, l;
  let {
    id: o,
    context: c = M.Yn.DEFAULT,
    channel: u,
    overlayVoiceStates: d,
    displayNameMode: p,
    displayUserMode: f,
    locked: b,
    pinned: O,
    guildId: g,
    showEmpty: v = !0,
    isPreviewingInGame: m,
    isSettingsPreview: j = !1,
    anchorLeft: h,
    avatarSizeMode: P,
    maxDisplayedVoiceStates: I = 8
  } = e, w = (0, N.ee)(() => (function(e) {
    let [t, r] = e;
    return new Set(r)
  })(d), [d]), [S, Z] = d, C = Z.length > 0 && null != c && null != u && (!b || O), k = (0, a.Wu)([y.Z], () => Array.from(w).map(e => y.Z.getStreamForUser(e, g)).filter(E.lm).map(e => e.ownerId), [g, w]);
  i.useEffect(() => {
    C && (0, N.zi)(_.Odu.VOICE_V3, {
      locked: x.default.isInstanceLocked(),
      shownUserIds: Array.from(w),
      liveUserIds: k,
      contentInventoryIds: []
    })
  }, [w, k, C]);
  let W = Z.slice(0, I),
    L = Z.slice(I);
  return C ? (0, n.jsxs)(n.Fragment, {
    children: [W.map(e => {
      let t = S.get(e);
      return null == t ? null : (0, n.jsx)(D.ZP, {
        user: t.user,
        voiceState: t.voiceState,
        member: t.member,
        channel: u,
        widgetId: o,
        flipped: !h,
        isPreviewingInGame: m,
        isSettingsPreview: j,
        context: c,
        size: P,
        displayNameMode: p,
        displayUserMode: f,
        locked: b
      }, e)
    }), 1 === L.length && (0, n.jsx)(D.ZP, {
      user: null === (t = S.get(L[0])) || void 0 === t ? void 0 : t.user,
      voiceState: null === (r = S.get(L[0])) || void 0 === r ? void 0 : r.voiceState,
      member: null === (l = S.get(L[0])) || void 0 === l ? void 0 : l.member,
      channel: u,
      widgetId: o,
      flipped: !h,
      isPreviewingInGame: m,
      isSettingsPreview: j,
      context: c,
      size: P,
      displayNameMode: p,
      displayUserMode: f,
      locked: b
    }, L[0]), L.length > 1 && (0, n.jsx)(G, {
      hiddenVoiceStates: L,
      voiceStateMap: S,
      size: (0, D.px)(P),
      locked: b
    })]
  }) : b || !v ? null : (0, n.jsx)(V.E, {
    emptyText: A.NW.string(A.t.hEh0l5),
    icon: s.gj8
  })
}

function U(e) {
  var t;
  let {
    isSettingsPreview: r
  } = e, l = (0, a.e7)([h.Z, j.Z], () => j.Z.getChannel(h.Z.getVoiceChannelId())), o = (0, p.ZP)(l), s = function(e) {
    let t = (0, a.e7)([h.Z, j.Z], () => j.Z.getChannel(h.Z.getVoiceChannelId())),
      [r] = (0, a.e7)([S.ZP, O.Z, h.Z, j.Z], () => {
        let e = j.Z.getChannel(h.Z.getVoiceChannelId());
        return null == e ? [
          [], -1
        ] : e.isGuildStageVoice() ? [O.Z.getMutableParticipants(e.id, g.pV.SPEAKER), O.Z.getParticipantsVersion(e.id)] : [S.ZP.getVoiceStatesForChannel(e), S.ZP.getVoiceStateVersion(e.getGuildId())]
      }, [], Z.Q),
      n = (0, v.Es)(null == t ? void 0 : t.id, r),
      l = i.useMemo(() => new Map(n.map(e => [e.user.id, e])), [n]),
      o = (0, a.e7)([m.default], () => m.default.getId());
    return [l, (0, a.Wu)([w.Z, h.Z, P.Z, b.Z], () => {
      let t = Array.from(n.map(e => {
        let {
          user: t
        } = e;
        return t.id
      }));
      if (t.length <= 8) return t;
      let r = new Map;
      for (let n of t) {
        let t = (0, c.O)({
            userId: n,
            checkSoundSharing: !0,
            checkSoundboardSounds: !1,
            checkIsMuted: !0,
            context: e
          }, [w.Z, h.Z, P.Z, b.Z]),
          i = n === o;
        (t || i) && r.set(n, {
          isSpeaking: t,
          isCurrentUser: i
        })
      }
      let i = [],
        l = [],
        a = [];
      for (let e = 0; e < t.length; e++) {
        let n = t[e],
          o = r.get(n);
        e < 8 ? i.push(n) : o && (o.isSpeaking || o.isCurrentUser) ? a.push(n) : l.push(n)
      }
      if (a.length > 0) {
        let e = i.slice(0, 8 - a.length),
          t = i.slice(8 - a.length);
        return [...e, ...a, ...t, ...l]
      }
      return t
    }, [n, e, o])]
  }(M.Yn.DEFAULT), d = (0, a.e7)([y.Z], () => y.Z.getStreamerActiveStreamMetadata()), I = (0, k.II)(), E = (0, u.q)(null == I ? void 0 : I.id), N = (0, a.cj)([y.Z, x.default], () => {
    let e = y.Z.getCurrentUserActiveStream();
    return {
      displayUserMode: x.default.getDisplayUserMode(),
      displayNameMode: x.default.getDisplayNameMode(),
      avatarSizeMode: x.default.getAvatarSizeMode(),
      streamApplication: (null == d ? void 0 : d.pid) === (0, C.getPID)() ? (0, f.Z)(I) : null,
      stream: e
    }
  });
  return (0, n.jsx)(R, T(L(T(L({}, N), {
    application: E
  }), e), {
    overlayVoiceStates: s,
    channel: l,
    guildId: null == l ? void 0 : l.guild_id,
    title: null != o ? o : "",
    streamMetadata: d,
    streamApplication: null !== (t = N.streamApplication) && void 0 !== t ? t : {
      id: null,
      name: null == d ? void 0 : d.sourceName
    },
    isSettingsPreview: r
  }))
}