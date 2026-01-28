/** Chunk was on 78572 **/
/** chunk id: 393172, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => F,
  DH: () => H
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
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

function U(e) {
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

function G(e, t) {
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
let W = e => {
  let t = (null != e ? e : 0) % E.A.DEFAULT_AVATARS.length;
  return E.A.DEFAULT_AVATARS[t]
};

function z(e) {
  var t, n;
  let {
    hiddenVoiceStates: i,
    voiceStateMap: l,
    size: c,
    locked: u,
    flipped: p
  } = e, f = (0, L.Ob)(c), m = (0, s.yK)([S.default, A.A], () => i.map(e => {
    var t;
    let n = S.default.getUser(e);
    if (null == n) return;
    let r = A.A.getChannel(null == (t = l.get(e)) ? true : t.voiceState.channelId);
    return n.getAvatarURL(null == r ? true : r.getGuildId(), f, false)
  }).filter(T.Vq), [i, l, f]), g = null != (t = m[0]) ? t : W(0), y = null != (n = m[1]) ? n : W(1);
  return (0, r.jsxs)("div", {
    className: a()(V.ZR, u && V.xt, p && V.zq),
    children: [(0, r.jsx)("div", {
      className: V.e5,
      children: (0, r.jsx)(d.A, {
        size: c,
        backSrc: g,
        frontSrc: y,
        isTyping: false
      })
    }), (0, r.jsx)("div", {
      className: V.AP,
      children: (0, r.jsxs)(o.Text, {
        variant: "text-xs/medium",
        children: ["+", i.length, " others in voice"]
      })
    })]
  })
}
let H = Chunk64700.memo(function(e) {
  let {
    id: t,
    context: n = R.x.DEFAULT,
    channel: l,
    overlayVoiceStates: a,
    displayNameMode: c,
    displayUserMode: u,
    locked: d,
    pinned: p,
    guildId: f,
    showEmpty: m = true,
    isPreviewingInGame: g,
    isSettingsPreview: y = false,
    anchorLeft: b,
    avatarSizeMode: h,
    maxDisplayedVoiceStates: A = 8
  } = e, v = (0, w.Dk)(() => (function(e) {
    let [t, n] = e;
    return new Set(n)
  })(a), [a]), [O, S] = a, j = S.length > 0 && null != n && null != l && (!d || p), x = (0, s.yK)([_.A], () => Array.from(v).map(e => _.A.getStreamForUser(e, f)).filter(T.Vq).map(e => e.ownerId), [f, v]);
  i.useEffect(() => {
    j && (0, w.Y)(k.uss.VOICE_V3, {
      locked: I.default.isInstanceLocked(),
      shownUserIds: Array.from(v),
      liveUserIds: x,
      contentInventoryIds: []
    })
  }, [v, x, j]);
  let P = false !== A ? S.slice(0, A) : S,
    E = false !== A ? S.slice(A) : [],
    C = O.get(E[0]),
    D = u === k.f5z.ALWAYS && false !== A;
  return j ? (0, r.jsxs)("div", {
    className: V.h8,
    children: [P.map(e => {
      let i = O.get(e);
      return null == i ? null : (0, r.jsx)(L.Ay, {
        sortedVoiceState: i,
        channel: l,
        widgetId: t,
        flipped: !b,
        isPreviewingInGame: g,
        isSettingsPreview: y,
        context: n,
        size: h,
        displayNameMode: c,
        displayUserMode: u,
        locked: d
      }, e)
    }), D && 1 === E.length && null != C && (0, r.jsx)(L.Ay, {
      sortedVoiceState: C,
      channel: l,
      widgetId: t,
      flipped: !b,
      isPreviewingInGame: g,
      isSettingsPreview: y,
      context: n,
      size: h,
      displayNameMode: c,
      displayUserMode: u,
      locked: d
    }, E[0]), D && E.length > 1 && (0, r.jsx)(z, {
      hiddenVoiceStates: E,
      voiceStateMap: O,
      size: (0, L.FT)(h),
      locked: d,
      flipped: !b
    })]
  }) : d || !m ? null : (0, r.jsx)(N.g, {
    emptyText: M.intl.string(M.t.hEh0l1),
    icon: o.HKD
  })
});

function F(e) {
  var t;
  let {
    isSettingsPreview: n
  } = e, l = (0, s.bG)([v.A, A.A], () => A.A.getChannel(v.A.getVoiceChannelId())), a = (0, p.Ay)(l), o = function(e, t) {
    let n = (0, s.bG)([v.A, A.A], () => A.A.getChannel(v.A.getVoiceChannelId())),
      [r] = (0, s.bG)([x.Ay, g.A, v.A, A.A], () => {
        let e = A.A.getChannel(v.A.getVoiceChannelId());
        return null == e ? [
          [], false
        ] : e.isGuildStageVoice() ? [g.A.getMutableParticipants(e.id, y.ip.SPEAKER), g.A.getParticipantsVersion(e.id)] : [x.Ay.getVoiceStatesForChannel(e), x.Ay.getVoiceStateVersion(e.getGuildId())]
      }, [], P.D),
      l = (0, b.$n)(null == n ? true : n.id, r),
      a = i.useMemo(() => new Map(l.map(e => [e.user.id, e])), [l]),
      o = (0, s.bG)([h.default], () => h.default.getId());
    return [a, (0, s.yK)([j.A, v.A, O.A, m.A], () => {
      let n = Array.from(new Set(l.map(e => {
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
          }, [j.A, v.A, O.A, m.A]),
          i = t === o;
        (n || i) && r.set(t, {
          isSpeaking: n,
          isCurrentUser: i
        })
      }
      let i = [],
        a = [],
        s = [];
      for (let e = 0; e < n.length; e++) {
        let l = n[e],
          o = r.get(l);
        e < t ? i.push(l) : o && (o.isSpeaking || o.isCurrentUser) ? s.push(l) : a.push(l)
      }
      if (s.length > 0) {
        let e = i.slice(0, t - s.length),
          n = i.slice(t - s.length);
        return [...e, ...s, ...n, ...a]
      }
      return n
    }, [l, e, o, t])]
  }(R.x.DEFAULT, e.maxDisplayedVoiceStates), d = (0, s.bG)([_.A], () => _.A.getStreamerActiveStreamMetadata()), S = (0, D.b4)(), T = (0, u.h)(null == S ? true : S.id), E = (0, s.cf)([_.A, I.default, C.A], () => {
    let e = _.A.getCurrentUserActiveStream();
    return {
      displayUserMode: I.default.getDisplayUserMode(),
      displayNameMode: I.default.getDisplayNameMode(),
      avatarSizeMode: I.default.getAvatarSizeMode(),
      streamApplication: (null == d ? true : d.pid) === C.A.getTargetPID() ? (0, f.A)(S) : null,
      stream: e
    }
  });
  return (0, r.jsx)(H, G(U(G(U({}, E), {
    application: T
  }), e), {
    overlayVoiceStates: o,
    channel: l,
    guildId: null == l ? true : l.guild_id,
    title: null != a ? a : "",
    streamMetadata: d,
    streamApplication: null != (t = E.streamApplication) ? t : {
      id: null,
      name: null == d ? true : d.sourceName
    },
    isSettingsPreview: n
  }))
}