/** Chunk was on web.js **/
/** chunk id: 207055, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => Y
}), require("./388685.js"), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk846519 = require("./846519.js"),
  Chunk586902 = require("./586902.js"),
  Chunk317381 = require("./317381.js"),
  Chunk728345 = require("./728345.js"),
  Chunk835473 = require("./835473.js"),
  Chunk358221 = require("./358221.js"),
  Chunk362721 = require("./362721.js"),
  Chunk574176 = require("./574176.js"),
  Chunk106301 = require("./106301.js"),
  Chunk882522 = require("./882522.js"),
  Chunk512384 = require("./512384.jsx"),
  Chunk763624 = require("./763624.js"),
  Chunk470956 = require("./470956.js"),
  Chunk597998 = require("./597998.jsx"),
  Chunk199902 = require("./199902.js"),
  Chunk314897 = require("./314897.js"),
  Chunk271383 = require("./271383.js"),
  Chunk131951 = require("./131951.js"),
  Chunk496675 = require("./496675.js"),
  Chunk158776 = require("./158776.js"),
  Chunk885110 = require("./885110.js"),
  Chunk797258 = require("./797258.js"),
  Chunk606304 = require("./606304.js"),
  Chunk979651 = require("./979651.js"),
  Chunk51144 = require("./51144.js"),
  Chunk262317 = require("./262317.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk524484 = require("./524484.js"),
  Chunk541675 = require("./541675.js");

function j(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function U(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      j(e, t, n[t])
    })
  }
  return e
}

function G(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : G(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let Z = Chunk73800.memo(e => {
  var t, n;
  let {
    mute: i,
    deaf: o,
    user: a,
    channel: l,
    sessionId: O,
    nick: A
  } = e, k = a.id, j = (0, s.e7)([I.default], () => I.default.getId() === k, [k]), [G, Z, F] = (0, s.Wu)([S.Z], () => j ? [!S.Z.isSupported() || S.Z.isSelfMute() || S.Z.isSelfMutedTemporarily(), S.Z.isSelfDeaf(), false] : [!S.Z.isSupported() || S.Z.isLocalMute(k), false, S.Z.isLocalVideoDisabled(k)], [j, k]), V = (0, s.e7)([P.Z], () => P.Z.isPrioritySpeaker(k)), H = (0, c.Z)({
    userId: k,
    checkSoundSharing: true
  }), Y = (0, s.e7)([T.ZP], () => T.ZP.isGuestOrLurker(l.guild_id, k)), W = (0, s.e7)([_.Z], () => _.Z.getGuildRingingUsers(l.id).has(k)), K = (0, s.e7)([u.ZP], () => u.ZP.getEmbeddedActivitiesForChannel(l.id).find(e => {
    let {
      userIds: t
    } = e;
    return t.has(k)
  }), [k, l.id]), z = (0, f.Z)(null != K ? [K.applicationId] : []), q = (0, s.e7)([N.Z, C.Z], () => j ? C.Z.getActivities() : N.Z.getActivities(k, l.guild_id)).find(e => null != e.application_id && e.type === x.IIU.PLAYING), X = null != (n = (0, d.IX)(null == q ? true : q.application_id).data) ? n : true, [Q, J] = (0, s.Wu)([v.Z], () => [v.Z.getStreamForUser(k, l.getGuildId()), v.Z.getActiveStreamForUser(k, l.getGuildId())], [l, k]), $ = (0, s.e7)([R.Z], () => R.Z.getSessionById(O)), ee = D.ZP.useName(a), et = (0, s.e7)([w.Z], () => w.Z.getVoicePlatformForChannel(l.id, k), [l.id, k]), {
    enableHangStatus: en
  } = h.n.useExperiment({
    guildId: l.guild_id,
    location: "VoiceUsers"
  }), er = (0, p.ZP)(l, true, a), ei = (0, s.e7)([m.Z], () => j ? m.Z.getHangStatusActivity() : null, [j]), eo = (0, g.j)(k), ea = (0, y.Eu)(l.id, k), {
    enableVCStatusIcons: es,
    enableRequestToStream: el
  } = b.A.useExperiment({
    guildId: l.guild_id,
    location: "VoiceUsers"
  });
  return (0, r.jsx)(E.Z, {
    shakeLocation: M.oZ.VOICE_USER,
    isShaking: H,
    children: (0, r.jsx)(L.ZP, B(U({}, e), {
      nick: null != A ? A : ee,
      canDrag: e.canDrag && !Y,
      disconnected: ea,
      otherClientSessionType: null == $ || null == (t = $.clientInfo) ? true : t.os,
      voicePlatform: et,
      localMute: G && !j,
      localVideoDisabled: F,
      mute: i || G,
      deaf: o || Z,
      speaking: H,
      ringing: W,
      priority: V,
      embeddedApplication: z[0],
      isStreaming: null != Q && Q.channelId === l.id,
      isWatching: null != J && J.state !== x.jm8.ENDED,
      isGuest: Y,
      isSelf: j,
      requestToStreamActivity: el ? q : true,
      application: es && (null == q ? true : q.session_id) != null ? X : true,
      showHangStatus: er && en && (j || null != eo),
      hangStatusActivity: j ? ei : eo
    }))
  })
});
Z.displayName = "ConnectedVoiceUser";
let F = 50,
  V = 175,
  H = [],
  Y = function(e) {
    let {
      allowPreviews: t = true,
      allowDragging: n = true,
      channel: o,
      voiceStates: c,
      collapsed: u,
      collapsedMax: d = 6,
      tabIndex: p,
      location: h,
      numAudience: m,
      withGuildIcon: g = false,
      className: E,
      children: b
    } = e, [v, T] = i.useState(null), [S, C] = i.useState(false), R = i.useRef(null), P = (0, y.Es)(o.id, null != c ? c : H), w = i.useRef(new l.sW(F, () => {
      T(R.current), R.current = null
    })), D = i.useRef(new l.sW(V, () => {
      T(null)
    })), M = i.useCallback(e => {
      t && (C(true), D.current.cancel(), R.current = e, w.current.delay())
    }, [t]), j = i.useCallback(e => {
      t && (w.current.cancel(), v === e && (C(false), D.current.delay()))
    }, [t, v]), U = () => {
      if (null == P || 0 === P.length) return null;
      let e = u && P.length > d + 1 ? P.slice(0, d) : P,
        t = _.Z.getGuildRingingUsers(o.id),
        i = e.map(e => {
          var i;
          let {
            user: a,
            nick: s,
            voiceState: l
          } = e, c = t.has(a.id);
          return (0, r.jsx)(Z, {
            user: a,
            nick: s,
            isSelfOnOtherClient: I.default.getId() === a.id && l.sessionId !== I.default.getSessionId(),
            mute: l.isVoiceMuted(),
            deaf: l.isVoiceDeafened(),
            video: l.selfVideo,
            serverMute: l.mute,
            serverDeaf: l.deaf,
            sessionId: null != (i = l.sessionId) ? i : "",
            channel: o,
            collapsed: u,
            canDrag: n && A.Z.can(x.Plq.MOVE_MEMBERS, o),
            showPreview: M,
            hidePreview: j,
            previewIsOpen: S,
            shouldShowHoverPopout: v === a.id,
            tabIndex: p,
            location: h
          }, "voice-user-".concat(a.id, "-").concat(c))
        });
      return null != m && m > 0 ? i.push((0, r.jsx)(L.ul, {
        collapsed: u,
        numAudience: m
      })) : u && P.length > d + 1 && i.push((0, r.jsx)(L.XX, {
        numUsers: P.length - d
      })), i
    }, G = (0, s.Wu)([N.Z], () => {
      if (u) return [];
      let e = new Set;
      return null == P || P.forEach(t => {
        let {
          user: n
        } = t;
        N.Z.getActivities(n.id, o.guild_id).forEach(t => {
          null != t.application_id && e.add(t.application_id)
        })
      }), Array.from(e)
    });
    (0, f.Z)(G);
    let B = U();
    return null == B && null == b ? null : (0, r.jsxs)(O.eJ, {
      className: a()(E, k.list, {
        [k.collapsed]: u,
        [k.withGuildIcon]: g
      }),
      collapsed: u,
      children: [B, b]
    })
  }