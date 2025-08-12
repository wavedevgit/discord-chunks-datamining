/** Chunk was on 88712 **/
/** chunk id: 243487, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => Y,
  kI: () => z
}), require("./388685.js"), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk145597 = require("./145597.js"),
  Chunk444295 = require("./444295.js"),
  Chunk804570 = require("./804570.jsx"),
  Chunk388627 = require("./388627.js"),
  Chunk532658 = require("./532658.jsx"),
  Chunk501787 = require("./501787.js"),
  Chunk981631 = require("./981631.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk993879 = require("./993879.js");

function G(e) {
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
}

function W(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let F = e => {
  let t = (null != e ? e : 0) % C.Z.DEFAULT_AVATARS.length;
  return C.Z.DEFAULT_AVATARS[t]
};

function U(e) {
  var t, n;
  let {
    hiddenVoiceStates: i,
    voiceStateMap: l,
    size: c,
    locked: u,
    flipped: f
  } = e, p = (0, A.e5)(c), g = (0, a.Wu)([x.default, y.Z], () => i.map(e => {
    var t;
    let n = x.default.getUser(e);
    if (null == n) return;
    let r = y.Z.getChannel(null == (t = l.get(e)) ? true : t.voiceState.channelId);
    return n.getAvatarURL(null == r ? true : r.getGuildId(), p, false)
  }).filter(E.lm), [i, l, p]), m = null != (t = g[0]) ? t : F(0), O = null != (n = g[1]) ? n : F(1);
  return (0, r.jsxs)("div", {
    className: o()(L.hiddenVoiceStates, u && L.locked, f && L.flipped),
    children: [(0, r.jsx)("div", {
      className: L.hiddenVoiceStatesAvatar,
      children: (0, r.jsx)(d.Z, {
        size: c,
        backSrc: m,
        frontSrc: O,
        isTyping: false
      })
    }), (0, r.jsx)("div", {
      className: L.hiddenVoiceStatesText,
      children: (0, r.jsxs)(s.Text, {
        variant: "text-xs/medium",
        children: ["+", i.length, " others in voice"]
      })
    })]
  })
}
let z = Chunk73800.memo(function(e) {
  let {
    id: t,
    context: n = T.Yn.DEFAULT,
    channel: l,
    overlayVoiceStates: o,
    displayNameMode: c,
    displayUserMode: u,
    locked: d,
    pinned: f,
    guildId: p,
    showEmpty: g = true,
    isPreviewingInGame: m,
    isSettingsPreview: O = false,
    anchorLeft: b,
    avatarSizeMode: h,
    maxDisplayedVoiceStates: y = _.At
  } = e, j = (0, k.ee)(() => (function(e) {
    let [t, n] = e;
    return new Set(n)
  })(o), [o]), [P, x] = o, S = x.length > 0 && null != n && null != l && (!d || f), w = (0, a.Wu)([v.Z], () => Array.from(j).map(e => v.Z.getStreamForUser(e, p)).filter(E.lm).map(e => e.ownerId), [p, j]);
  i.useEffect(() => {
    S && (0, k.zi)(M.Odu.VOICE_V3, {
      locked: I.default.isInstanceLocked(),
      shownUserIds: Array.from(j),
      liveUserIds: w,
      contentInventoryIds: []
    })
  }, [j, w, S]);
  let Z = y !== _.Og ? x.slice(0, y) : x,
    C = y !== _.Og ? x.slice(y) : [],
    V = P.get(C[0]),
    D = u === M.OYC.ALWAYS && y !== _.Og;
  return S ? (0, r.jsxs)("div", {
    className: L.voiceUserContainer,
    children: [Z.map(e => {
      let i = P.get(e);
      return null == i ? null : (0, r.jsx)(A.ZP, {
        sortedVoiceState: i,
        channel: l,
        widgetId: t,
        flipped: !b,
        isPreviewingInGame: m,
        isSettingsPreview: O,
        context: n,
        size: h,
        displayNameMode: c,
        displayUserMode: u,
        locked: d
      }, e)
    }), D && 1 === C.length && null != V && (0, r.jsx)(A.ZP, {
      sortedVoiceState: V,
      channel: l,
      widgetId: t,
      flipped: !b,
      isPreviewingInGame: m,
      isSettingsPreview: O,
      context: n,
      size: h,
      displayNameMode: c,
      displayUserMode: u,
      locked: d
    }, C[0]), D && C.length > 1 && (0, r.jsx)(U, {
      hiddenVoiceStates: C,
      voiceStateMap: P,
      size: (0, A.px)(h),
      locked: d,
      flipped: !b
    })]
  }) : d || !g ? null : (0, r.jsx)(N.E, {
    emptyText: R.intl.string(R.t.hEh0l5),
    icon: s.gj8
  })
});

function Y(e) {
  var t;
  let {
    isSettingsPreview: n
  } = e, l = (0, a.e7)([j.Z, y.Z], () => y.Z.getChannel(j.Z.getVoiceChannelId())), o = (0, f.ZP)(l), s = function(e, t) {
    let n = (0, a.e7)([j.Z, y.Z], () => y.Z.getChannel(j.Z.getVoiceChannelId())),
      [r] = (0, a.e7)([w.ZP, m.Z, j.Z, y.Z], () => {
        let e = y.Z.getChannel(j.Z.getVoiceChannelId());
        return null == e ? [
          [], false
        ] : e.isGuildStageVoice() ? [m.Z.getMutableParticipants(e.id, O.pV.SPEAKER), m.Z.getParticipantsVersion(e.id)] : [w.ZP.getVoiceStatesForChannel(e), w.ZP.getVoiceStateVersion(e.getGuildId())]
      }, [], Z.Q),
      l = (0, b.Es)(null == n ? true : n.id, r),
      o = i.useMemo(() => new Map(l.map(e => [e.user.id, e])), [l]),
      s = (0, a.e7)([h.default], () => h.default.getId());
    return [o, (0, a.Wu)([S.Z, j.Z, P.Z, g.Z], () => {
      let n = Array.from(l.map(e => {
        let {
          user: t
        } = e;
        return t.id
      }));
      if (t === _.Og || n.length <= t) return n;
      let r = new Map;
      for (let t of n) {
        let n = (0, c.O)({
            userId: t,
            checkSoundSharing: true,
            checkSoundboardSounds: false,
            checkIsMuted: true,
            context: e
          }, [S.Z, j.Z, P.Z, g.Z]),
          i = t === s;
        (n || i) && r.set(t, {
          isSpeaking: n,
          isCurrentUser: i
        })
      }
      let i = [],
        o = [],
        a = [];
      for (let e = 0; e < n.length; e++) {
        let l = n[e],
          s = r.get(l);
        e < t ? i.push(l) : s && (s.isSpeaking || s.isCurrentUser) ? a.push(l) : o.push(l)
      }
      if (a.length > 0) {
        let e = i.slice(0, t - a.length),
          n = i.slice(t - a.length);
        return [...e, ...a, ...n, ...o]
      }
      return n
    }, [l, e, s, t])]
  }(T.Yn.DEFAULT, e.maxDisplayedVoiceStates), d = (0, a.e7)([v.Z], () => v.Z.getStreamerActiveStreamMetadata()), x = (0, D.II)(), E = (0, u.q)(null == x ? true : x.id), C = (0, a.cj)([v.Z, I.default], () => {
    let e = v.Z.getCurrentUserActiveStream();
    return {
      displayUserMode: I.default.getDisplayUserMode(),
      displayNameMode: I.default.getDisplayNameMode(),
      avatarSizeMode: I.default.getAvatarSizeMode(),
      streamApplication: (null == d ? true : d.pid) === (0, V.getPID)() ? (0, p.Z)(x) : null,
      stream: e
    }
  });
  return (0, r.jsx)(z, W(G(W(G({}, C), {
    application: E
  }), e), {
    overlayVoiceStates: s,
    channel: l,
    guildId: null == l ? true : l.guild_id,
    title: null != o ? o : "",
    streamMetadata: d,
    streamApplication: null != (t = C.streamApplication) ? t : {
      id: null,
      name: null == d ? true : d.sourceName
    },
    isSettingsPreview: n
  }))
}