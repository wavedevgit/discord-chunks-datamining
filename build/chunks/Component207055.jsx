/** Chunk was on 57336 **/
/** chunk id: 207055, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => U
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk463421 = require("./463421.js"),
  Chunk470956 = require("./470956.js"),
  Chunk597998 = require("./597998.jsx"),
  Chunk199902 = require("./199902.js"),
  Chunk314897 = require("./314897.js"),
  Chunk271383 = require("./271383.js"),
  Chunk131951 = require("./131951.js"),
  Chunk496675 = require("./496675.js"),
  Chunk158776 = require("./158776.js"),
  Chunk797258 = require("./797258.js"),
  Chunk606304 = require("./606304.js"),
  Chunk979651 = require("./979651.js"),
  Chunk51144 = require("./51144.js"),
  Chunk262317 = require("./262317.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk524484 = require("./524484.js"),
  Chunk968080 = require("./968080.js");
let D = Chunk647438.memo(e => {
  var t, n, r, l;
  let {
    mute: a,
    deaf: s,
    user: x,
    channel: P,
    sessionId: I,
    nick: L
  } = e, D = x.id, k = (0, o.e7)([O.default], () => O.default.getId() === D, [D]), [U, B, H] = (0, o.Wu)([S.Z], () => k ? [!S.Z.isSupported() || S.Z.isSelfMute() || S.Z.isSelfMutedTemporarily(), S.Z.isSelfDeaf(), false] : [!S.Z.isSupported() || S.Z.isLocalMute(D), false, S.Z.isLocalVideoDisabled(D)], [k, D]), V = (0, o.e7)([T.Z], () => T.Z.isPrioritySpeaker(D)), F = (0, c.Z)({
    userId: D,
    checkSoundSharing: true
  }), G = (0, o.e7)([T.Z], () => T.Z.isCurrentUserPTTLatched()), z = k && G, W = (0, o.e7)([E.ZP], () => E.ZP.isGuestOrLurker(P.guild_id, D)), q = (0, o.e7)([h.Z], () => h.Z.getGuildRingingUsers(P.id).has(D)), K = (0, o.e7)([u.ZP], () => u.ZP.getEmbeddedActivitiesForChannel(P.id).find(e => {
    let {
      userIds: t
    } = e;
    return t.has(D)
  }), [D, P.id]), Y = (0, p.Z)(null != K ? [K.applicationId] : []), X = (0, v.Z)(D, P.guild_id)[0], J = null != (n = (0, d.IX)(null == X ? true : X.application_id).data) ? n : true, [Q, $] = (0, o.Wu)([j.Z], () => [j.Z.getStreamForUser(D, P.getGuildId()), j.Z.getActiveStreamForUser(D, P.getGuildId())], [P, D]), ee = (0, o.e7)([Z.Z], () => Z.Z.getSessionById(I)), et = A.ZP.useName(x), en = (0, o.e7)([N.Z], () => N.Z.getVoicePlatformForChannel(P.id, D), [P.id, D]), {
    enableHangStatus: ei
  } = (0, m.bN)({
    guildId: P.guild_id,
    location: "VoiceUsers"
  }), er = (0, f.ZP)(P, true, x), el = (0, o.e7)([g.Z], () => k ? g.Z.getHangStatusActivity() : null, [k]), ea = (0, b.j)(D), eo = (0, _.Eu)(P.id, D), {
    enableVCStatusIcons: es,
    enableRequestToStream: ec
  } = C.A.useExperiment({
    guildId: P.guild_id,
    location: "VoiceUsers"
  }, {
    autoTrackExposure: (null == X ? true : X.session_id) != null
  });
  return (0, i.jsx)(y.Z, {
    shakeLocation: R.oZ.VOICE_USER,
    isShaking: F,
    children: (0, i.jsx)(w.ZP, (r = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
          var i;
          i = n[t], t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = i
        })
      }
      return e
    }({}, e), l = l = {
      nick: null != L ? L : et,
      canDrag: e.canDrag && !W,
      disconnected: eo,
      otherClientSessionType: null == ee || null == (t = ee.clientInfo) ? true : t.os,
      voicePlatform: en,
      localMute: U && !k,
      localVideoDisabled: H,
      mute: a || U,
      deaf: s || B,
      speaking: F,
      latched: z,
      ringing: q,
      priority: V,
      embeddedApplication: Y[0],
      isStreaming: null != Q && Q.channelId === P.id,
      isWatching: null != $ && $.state !== M.jm8.ENDED,
      isGuest: W,
      isSelf: k,
      requestToStreamActivity: ec ? X : true,
      application: (es || ei) && (null == X ? true : X.session_id) != null ? J : true,
      showHangStatus: er && ei && (k || null != ea),
      hangStatusActivity: k ? el : ea
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        n.push.apply(n, i)
      }
      return n
    })(Object(l)).forEach(function(e) {
      Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e))
    }), r))
  })
});
D.displayName = "ConnectedVoiceUser";
let k = [],
  U = function(e) {
    let {
      allowPreviews: t = true,
      allowDragging: n = true,
      channel: l,
      voiceStates: c,
      collapsed: u,
      collapsedMax: d = 6,
      tabIndex: f,
      location: m,
      numAudience: g,
      withGuildIcon: b = false,
      className: y,
      children: C,
      isThread: v = false
    } = e, [j, E] = r.useState(null), [S, Z] = r.useState(false), T = r.useRef(null), N = (0, _.Es)(l.id, null != c ? c : k), A = r.useRef(new s.sW(50, () => {
      E(T.current), T.current = null
    })), R = r.useRef(new s.sW(175, () => {
      E(null)
    })), U = r.useCallback(e => {
      t && (Z(true), R.current.cancel(), T.current = e, A.current.delay())
    }, [t]), B = r.useCallback(e => {
      t && (A.current.cancel(), j === e && (Z(false), R.current.delay()))
    }, [t, j]), H = (0, o.Wu)([I.Z], () => {
      if (u) return [];
      let e = new Set;
      return null == N || N.forEach(t => {
        let {
          user: n
        } = t;
        I.Z.getActivities(n.id, l.guild_id).forEach(t => {
          null != t.application_id && e.add(t.application_id)
        })
      }), Array.from(e)
    });
    (0, p.Z)(H);
    let V = (() => {
      if (null == N || 0 === N.length) return null;
      let e = u && N.length > d + 1 ? N.slice(0, d) : N,
        t = h.Z.getGuildRingingUsers(l.id),
        r = e.map(e => {
          var r;
          let {
            user: a,
            nick: o,
            voiceState: s
          } = e, c = t.has(a.id);
          return (0, i.jsx)(D, {
            user: a,
            nick: o,
            isSelfOnOtherClient: O.default.getId() === a.id && s.sessionId !== O.default.getSessionId(),
            mute: s.isVoiceMuted(),
            deaf: s.isVoiceDeafened(),
            video: s.selfVideo,
            serverMute: s.mute,
            serverDeaf: s.deaf,
            sessionId: null != (r = s.sessionId) ? r : "",
            channel: l,
            collapsed: u,
            canDrag: n && P.Z.can(M.Plq.MOVE_MEMBERS, l),
            showPreview: U,
            hidePreview: B,
            previewIsOpen: S,
            shouldShowHoverPopout: j === a.id,
            tabIndex: f,
            location: m
          }, "voice-user-".concat(a.id, "-").concat(c))
        });
      return null != g && g > 0 ? r.push((0, i.jsx)(w.ul, {
        collapsed: u,
        numAudience: g
      })) : u && N.length > d + 1 && r.push((0, i.jsx)(w.XX, {
        numUsers: N.length - d
      })), r
    })();
    return null == V && null == C ? null : (0, i.jsxs)(x.eJ, {
      className: a()(y, L.list, {
        [L.collapsed]: u,
        [L.withGuildIcon]: b,
        [L.isThread]: v
      }),
      collapsed: u,
      children: [V, C]
    })
  }