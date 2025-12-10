/** Chunk was on web.js **/
/** chunk id: 243487, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => q,
  kI: () => K
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk586902 = require("./586902.js"),
  Chunk835473 = require("./835473.js"),
  Chunk289823 = require("./289823.jsx"),
  Chunk933557 = require("./933557.js"),
  Chunk552282 = require("./552282.js"),
  Chunk763296 = require("./763296.js"),
  Chunk565799 = require("./565799.js"),
  Chunk501655 = require("./501655.js"),
  Chunk470956 = require("./470956.js"),
  Chunk199902 = require("./199902.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk606304 = require("./606304.js"),
  Chunk594174 = require("./594174.js"),
  Chunk979651 = require("./979651.js"),
  Chunk938475 = require("./938475.js"),
  Chunk237997 = require("./237997.js"),
  Chunk823379 = require("./823379.js"),
  Chunk136015 = require("./136015.js"),
  Chunk426563 = require("./426563.js"),
  Chunk444295 = require("./444295.js"),
  Chunk804570 = require("./804570.jsx"),
  Chunk610394 = require("./610394.js"),
  Chunk388627 = require("./388627.js"),
  Chunk532658 = require("./532658.jsx"),
  Chunk501787 = require("./501787.js"),
  Chunk981631 = require("./981631.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk213285 = require("./213285.js");

function Z(e, t, n) {
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
      Z(e, t, n[t])
    })
  }
  return e
}

function F(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function V(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : F(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let H = e => {
  let t = (null != e ? e : 0) % P.Z.DEFAULT_AVATARS.length;
  return P.Z.DEFAULT_AVATARS[t]
};

function Y(e) {
  var t, n;
  let {
    hiddenVoiceStates: i,
    voiceStateMap: a,
    size: c,
    locked: u,
    flipped: f
  } = e, p = (0, L.e5)(c), _ = (0, s.Wu)([S.default, y.Z], () => i.map(e => {
    var t;
    let n = S.default.getUser(e);
    if (null == n) return;
    let r = y.Z.getChannel(null == (t = a.get(e)) ? true : t.voiceState.channelId);
    return n.getAvatarURL(null == r ? true : r.getGuildId(), p, false)
  }).filter(A.lm), [i, a, p]), m = null != (t = _[0]) ? t : H(0), h = null != (n = _[1]) ? n : H(1);
  return (0, r.jsxs)("div", {
    className: o()(G.hiddenVoiceStates, u && G.locked, f && G.flipped),
    children: [(0, r.jsx)("div", {
      className: G.hiddenVoiceStatesAvatar,
      children: (0, r.jsx)(d.Z, {
        size: c,
        backSrc: m,
        frontSrc: h,
        isTyping: false
      })
    }), (0, r.jsx)("div", {
      className: G.hiddenVoiceStatesText,
      children: (0, r.jsxs)(l.Text, {
        variant: "text-xs/medium",
        children: ["+", i.length, " others in voice"]
      })
    })]
  })
}

function W(e) {
  let [t, n] = e;
  return new Set(n)
}
let K = Chunk473749.memo(function(e) {
  let {
    id: t,
    context: n = k.Yn.DEFAULT,
    channel: a,
    overlayVoiceStates: o,
    displayNameMode: c,
    displayUserMode: u,
    locked: d,
    pinned: f,
    guildId: p,
    showEmpty: _ = true,
    isPreviewingInGame: m,
    isSettingsPreview: h = false,
    anchorLeft: g,
    avatarSizeMode: b,
    maxDisplayedVoiceStates: y = j.At
  } = e, O = (0, R.ee)(() => W(o), [o]), [v, S] = o, I = S.length > 0 && null != n && null != a && (!d || f), T = (0, s.Wu)([E.Z], () => Array.from(O).map(e => E.Z.getStreamForUser(e, p)).filter(A.lm).map(e => e.ownerId), [p, O]);
  i.useEffect(() => {
    I && (0, R.zi)(M.Odu.VOICE_V3, {
      locked: C.default.isInstanceLocked(),
      shownUserIds: Array.from(O),
      liveUserIds: T,
      contentInventoryIds: []
    })
  }, [O, T, I]);
  let N = () => d || !_ ? null : (0, r.jsx)(w.E, {
      emptyText: U.intl.string(U.t.hEh0l1),
      icon: l.gj8
    }),
    P = y !== j.Og ? S.slice(0, y) : S,
    D = y !== j.Og ? S.slice(y) : [],
    x = v.get(D[0]),
    Z = u === M.OYC.ALWAYS && y !== j.Og;
  return I ? (0, r.jsxs)("div", {
    className: G.voiceUserContainer,
    children: [P.map(e => {
      let i = v.get(e);
      return null == i ? null : (0, r.jsx)(L.ZP, {
        sortedVoiceState: i,
        channel: a,
        widgetId: t,
        flipped: !g,
        isPreviewingInGame: m,
        isSettingsPreview: h,
        context: n,
        size: b,
        displayNameMode: c,
        displayUserMode: u,
        locked: d
      }, e)
    }), Z && 1 === D.length && null != x && (0, r.jsx)(L.ZP, {
      sortedVoiceState: x,
      channel: a,
      widgetId: t,
      flipped: !g,
      isPreviewingInGame: m,
      isSettingsPreview: h,
      context: n,
      size: b,
      displayNameMode: c,
      displayUserMode: u,
      locked: d
    }, D[0]), Z && D.length > 1 && (0, r.jsx)(Y, {
      hiddenVoiceStates: D,
      voiceStateMap: v,
      size: (0, L.px)(b),
      locked: d,
      flipped: !g
    })]
  }) : N()
});

function z(e, t) {
  let n = (0, s.e7)([O.Z, y.Z], () => y.Z.getChannel(O.Z.getVoiceChannelId())),
    [r] = (0, s.e7)([T.ZP, m.Z, O.Z, y.Z], () => {
      let e = y.Z.getChannel(O.Z.getVoiceChannelId());
      return null == e ? [
        [], false
      ] : e.isGuildStageVoice() ? [m.Z.getMutableParticipants(e.id, h.pV.SPEAKER), m.Z.getParticipantsVersion(e.id)] : [T.ZP.getVoiceStatesForChannel(e), T.ZP.getVoiceStateVersion(e.getGuildId())]
    }, [], N.Q),
    a = (0, g.Es)(null == n ? true : n.id, r),
    o = i.useMemo(() => new Map(a.map(e => [e.user.id, e])), [a]),
    l = (0, s.e7)([b.default], () => b.default.getId());
  return [o, (0, s.Wu)([I.Z, O.Z, v.Z, _.Z], () => {
    let n = Array.from(new Set(a.map(e => {
      let {
        user: t
      } = e;
      return t.id
    })));
    if (t === j.Og || n.length <= t) return n;
    let r = new Map;
    for (let t of n) {
      let n = (0, c.O)({
          userId: t,
          checkSoundSharing: true,
          checkSoundboardSounds: false,
          checkIsMuted: true,
          context: e
        }, [I.Z, O.Z, v.Z, _.Z]),
        i = t === l;
      (n || i) && r.set(t, {
        isSpeaking: n,
        isCurrentUser: i
      })
    }
    let i = [],
      o = [],
      s = [];
    for (let e = 0; e < n.length; e++) {
      let a = n[e],
        l = r.get(a);
      e < t ? i.push(a) : l && (l.isSpeaking || l.isCurrentUser) ? s.push(a) : o.push(a)
    }
    if (s.length > 0) {
      let e = i.slice(0, t - s.length),
        n = i.slice(t - s.length);
      return [...e, ...s, ...n, ...o]
    }
    return n
  }, [a, e, l, t])]
}

function q(e) {
  var t;
  let {
    isSettingsPreview: n
  } = e, i = (0, s.e7)([O.Z, y.Z], () => y.Z.getChannel(O.Z.getVoiceChannelId())), a = (0, f.ZP)(i), o = z(k.Yn.DEFAULT, e.maxDisplayedVoiceStates), l = (0, s.e7)([E.Z], () => E.Z.getStreamerActiveStreamMetadata()), c = (0, x.II)(), d = (0, u.q)(null == c ? true : c.id), _ = (0, s.cj)([E.Z, C.default, D.Z], () => {
    let e = E.Z.getCurrentUserActiveStream();
    return {
      displayUserMode: C.default.getDisplayUserMode(),
      displayNameMode: C.default.getDisplayNameMode(),
      avatarSizeMode: C.default.getAvatarSizeMode(),
      streamApplication: (null == l ? true : l.pid) === D.Z.getTargetPID() ? (0, p.Z)(c) : null,
      stream: e
    }
  });
  return (0, r.jsx)(K, V(B(V(B({}, _), {
    application: d
  }), e), {
    overlayVoiceStates: o,
    channel: i,
    guildId: null == i ? true : i.guild_id,
    title: null != a ? a : "",
    streamMetadata: l,
    streamApplication: null != (t = _.streamApplication) ? t : {
      id: null,
      name: null == l ? true : l.sourceName
    },
    isSettingsPreview: n
  }))
}