/** Chunk was on web.js **/
/** chunk id: 393172, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => q,
  DH: () => K
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk717558 = require("./717558.js"),
  Chunk429913 = require("./429913.js"),
  Chunk478063 = require("./478063.jsx"),
  Chunk47167 = require("./47167.js"),
  Chunk22705 = require("./22705.js"),
  Chunk209932 = require("./209932.js"),
  Chunk63995 = require("./63995.js"),
  Chunk69407 = require("./69407.js"),
  Chunk530804 = require("./530804.js"),
  Chunk616356 = require("./616356.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk309010 = require("./309010.js"),
  Chunk485296 = require("./485296.js"),
  Chunk287809 = require("./287809.js"),
  Chunk977997 = require("./977997.js"),
  Chunk607567 = require("./607567.js"),
  Chunk256415 = require("./256415.js"),
  Chunk403362 = require("./403362.js"),
  Chunk996439 = require("./996439.js"),
  Chunk820883 = require("./820883.js"),
  Chunk810412 = require("./810412.js"),
  Chunk412477 = require("./412477.jsx"),
  Chunk395011 = require("./395011.js"),
  Chunk243612 = require("./243612.js"),
  Chunk147905 = require("./147905.jsx");
require("./392164.js");
var Chunk652215 = require("./652215.js"),
  Chunk731854 = require("./731854.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk585990 = require("./585990.js");

function G(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function V(e) {
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

function B(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : F(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let H = e => {
  let t = (null != e ? e : 0) % R.A.DEFAULT_AVATARS.length;
  return R.A.DEFAULT_AVATARS[t]
};

function Y(e) {
  var t, n;
  let {
    hiddenVoiceStates: i,
    voiceStateMap: a,
    size: c,
    locked: u,
    flipped: f
  } = e, p = (0, L.Ob)(c), _ = (0, o.yK)([A.default, b.A], () => i.map(e => {
    var t;
    let n = A.default.getUser(e);
    if (null == n) return;
    let r = b.A.getChannel(null == (t = a.get(e)) ? true : t.voiceState.channelId);
    return n.getAvatarURL(null == r ? true : r.getGuildId(), p, false)
  }).filter(C.Vq), [i, a, p]), h = null != (t = _[0]) ? t : H(0), m = null != (n = _[1]) ? n : H(1);
  return (0, r.jsxs)("div", {
    className: s()(U.ZR, u && U.xt, f && U.zq),
    children: [(0, r.jsx)("div", {
      className: U.e5,
      children: (0, r.jsx)(d.A, {
        size: c,
        backSrc: h,
        frontSrc: m,
        isTyping: false
      })
    }), (0, r.jsx)("div", {
      className: U.AP,
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
let K = Chunk64700.memo(function(e) {
  let {
    id: t,
    context: n = M.x.DEFAULT,
    channel: a,
    overlayVoiceStates: s,
    displayNameMode: c,
    displayUserMode: u,
    locked: d,
    pinned: f,
    guildId: p,
    showEmpty: _ = true,
    isPreviewingInGame: h,
    isSettingsPreview: m = false,
    anchorLeft: g,
    avatarSizeMode: y,
    maxDisplayedVoiceStates: b = 8
  } = e, O = (0, w.Dk)(() => W(s), [s]), [v, A] = s, I = A.length > 0 && null != n && null != a && (!d || f), S = (0, o.yK)([E.A], () => Array.from(O).map(e => E.A.getStreamForUser(e, p)).filter(C.Vq).map(e => e.ownerId), [p, O]);
  i.useEffect(() => {
    I && (0, w.Y)(j.uss.VOICE_V3, {
      locked: T.default.isInstanceLocked(),
      shownUserIds: Array.from(O),
      liveUserIds: S,
      contentInventoryIds: []
    })
  }, [O, S, I]);
  let N = () => d || !_ ? null : (0, r.jsx)(P.g, {
      emptyText: k.intl.string(k.t.hEh0l1),
      icon: l.HKD
    }),
    R = false !== b ? A.slice(0, b) : A,
    D = false !== b ? A.slice(b) : [],
    x = v.get(D[0]),
    G = u === j.f5z.ALWAYS && false !== b;
  return I ? (0, r.jsxs)("div", {
    className: U.h8,
    children: [R.map(e => {
      let i = v.get(e);
      return null == i ? null : (0, r.jsx)(L.Ay, {
        sortedVoiceState: i,
        channel: a,
        widgetId: t,
        flipped: !g,
        isPreviewingInGame: h,
        isSettingsPreview: m,
        context: n,
        size: y,
        displayNameMode: c,
        displayUserMode: u,
        locked: d
      }, e)
    }), G && 1 === D.length && null != x && (0, r.jsx)(L.Ay, {
      sortedVoiceState: x,
      channel: a,
      widgetId: t,
      flipped: !g,
      isPreviewingInGame: h,
      isSettingsPreview: m,
      context: n,
      size: y,
      displayNameMode: c,
      displayUserMode: u,
      locked: d
    }, D[0]), G && D.length > 1 && (0, r.jsx)(Y, {
      hiddenVoiceStates: D,
      voiceStateMap: v,
      size: (0, L.FT)(y),
      locked: d,
      flipped: !g
    })]
  }) : N()
});

function z(e, t) {
  let n = (0, o.bG)([O.A, b.A], () => b.A.getChannel(O.A.getVoiceChannelId())),
    [r] = (0, o.bG)([S.Ay, h.A, O.A, b.A], () => {
      let e = b.A.getChannel(O.A.getVoiceChannelId());
      return null == e ? [
        [], false
      ] : e.isGuildStageVoice() ? [h.A.getMutableParticipants(e.id, m.ip.SPEAKER), h.A.getParticipantsVersion(e.id)] : [S.Ay.getVoiceStatesForChannel(e), S.Ay.getVoiceStateVersion(e.getGuildId())]
    }, [], N.D),
    a = (0, g.$n)(null == n ? true : n.id, r),
    s = i.useMemo(() => new Map(a.map(e => [e.user.id, e])), [a]),
    l = (0, o.bG)([y.default], () => y.default.getId());
  return [s, (0, o.yK)([I.A, O.A, v.A, _.A], () => {
    let n = Array.from(new Set(a.map(e => {
      let {
        user: t
      } = e;
      return t.id
    })));
    if (false === t || n.length <= t) return n;
    let r = new Map;
    for (let t of n) {
      let n = (0, c.R)({
          userId: t,
          checkSoundSharing: true,
          checkSoundboardSounds: false,
          checkIsMuted: true,
          context: e
        }, [I.A, O.A, v.A, _.A]),
        i = t === l;
      (n || i) && r.set(t, {
        isSpeaking: n,
        isCurrentUser: i
      })
    }
    let i = [],
      s = [],
      o = [];
    for (let e = 0; e < n.length; e++) {
      let a = n[e],
        l = r.get(a);
      e < t ? i.push(a) : l && (l.isSpeaking || l.isCurrentUser) ? o.push(a) : s.push(a)
    }
    if (o.length > 0) {
      let e = i.slice(0, t - o.length),
        n = i.slice(t - o.length);
      return [...e, ...o, ...n, ...s]
    }
    return n
  }, [a, e, l, t])]
}

function q(e) {
  var t;
  let {
    isSettingsPreview: n
  } = e, i = (0, o.bG)([O.A, b.A], () => b.A.getChannel(O.A.getVoiceChannelId())), a = (0, f.Ay)(i), s = z(M.x.DEFAULT, e.maxDisplayedVoiceStates), l = (0, o.bG)([E.A], () => E.A.getStreamerActiveStreamMetadata()), c = (0, x.b4)(), d = (0, u.h)(null == c ? true : c.id), _ = (0, o.cf)([E.A, T.default, D.A], () => {
    let e = E.A.getCurrentUserActiveStream();
    return {
      displayUserMode: T.default.getDisplayUserMode(),
      displayNameMode: T.default.getDisplayNameMode(),
      avatarSizeMode: T.default.getAvatarSizeMode(),
      streamApplication: (null == l ? true : l.pid) === D.A.getTargetPID() ? (0, p.A)(c) : null,
      stream: e
    }
  });
  return (0, r.jsx)(K, B(V(B(V({}, _), {
    application: d
  }), e), {
    overlayVoiceStates: s,
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