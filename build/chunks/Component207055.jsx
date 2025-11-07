/** Chunk was on 13140 **/
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
let k = Chunk647438.memo(e => {
  var t, n, i, l;
  let {
    mute: a,
    deaf: s,
    user: O,
    channel: P,
    sessionId: I,
    nick: D
  } = e, k = O.id, L = (0, o.e7)([E.default], () => E.default.getId() === k, [k]), [U, B, F] = (0, o.Wu)([S.Z], () => L ? [!S.Z.isSupported() || S.Z.isSelfMute() || S.Z.isSelfMutedTemporarily(), S.Z.isSelfDeaf(), false] : [!S.Z.isSupported() || S.Z.isLocalMute(k), false, S.Z.isLocalVideoDisabled(k)], [L, k]), V = (0, o.e7)([T.Z], () => T.Z.isPrioritySpeaker(k)), H = (0, c.Z)({
    userId: k,
    checkSoundSharing: true
  }), G = (0, o.e7)([T.Z], () => T.Z.isCurrentUserPTTLatched()), W = L && G, z = (0, o.e7)([j.ZP], () => j.ZP.isGuestOrLurker(P.guild_id, k)), q = (0, o.e7)([f.Z], () => f.Z.getGuildRingingUsers(P.id).has(k)), Y = (0, o.e7)([u.ZP], () => u.ZP.getEmbeddedActivitiesForChannel(P.id).find(e => {
    let {
      userIds: t
    } = e;
    return t.has(k)
  }), [k, P.id]), K = (0, p.Z)(null != Y ? [Y.applicationId] : []), X = (0, C.Z)(k, P.guild_id)[0], J = null != (n = (0, d.IX)(null == X ? true : X.application_id).data) ? n : true, [Q, $] = (0, o.Wu)([x.Z], () => [x.Z.getStreamForUser(k, P.getGuildId()), x.Z.getActiveStreamForUser(k, P.getGuildId())], [P, k]), ee = (0, o.e7)([Z.Z], () => Z.Z.getSessionById(I)), et = A.ZP.useName(O), en = (0, o.e7)([N.Z], () => N.Z.getVoicePlatformForChannel(P.id, k), [P.id, k]), {
    enableHangStatus: er
  } = (0, m.bN)({
    guildId: P.guild_id,
    location: "VoiceUsers"
  }), ei = (0, h.ZP)(P, true, O), el = (0, o.e7)([g.Z], () => L ? g.Z.getHangStatusActivity() : null, [L]), ea = (0, b.j)(k), eo = (0, v.Eu)(P.id, k), {
    enableVCStatusIcons: es,
    enableRequestToStream: ec
  } = y.A.useExperiment({
    guildId: P.guild_id,
    location: "VoiceUsers"
  }, {
    autoTrackExposure: (null == X ? true : X.session_id) != null
  });
  return (0, r.jsx)(_.Z, {
    shakeLocation: R.oZ.VOICE_USER,
    isShaking: H,
    children: (0, r.jsx)(w.ZP, (i = function(e) {
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
    }({}, e), l = l = {
      nick: null != D ? D : et,
      canDrag: e.canDrag && !z,
      disconnected: eo,
      otherClientSessionType: null == ee || null == (t = ee.clientInfo) ? true : t.os,
      voicePlatform: en,
      localMute: U && !L,
      localVideoDisabled: F,
      mute: a || U,
      deaf: s || B,
      speaking: H,
      latched: W,
      ringing: q,
      priority: V,
      embeddedApplication: K[0],
      isStreaming: null != Q && Q.channelId === P.id,
      isWatching: null != $ && $.state !== M.jm8.ENDED,
      isGuest: z,
      isSelf: L,
      requestToStreamActivity: ec ? X : true,
      application: (es || er) && (null == X ? true : X.session_id) != null ? J : true,
      showHangStatus: ei && er && (L || null != ea),
      hangStatusActivity: L ? el : ea
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(l)).forEach(function(e) {
      Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
    }), i))
  })
});
k.displayName = "ConnectedVoiceUser";
let L = [],
  U = function(e) {
    let {
      allowPreviews: t = true,
      allowDragging: n = true,
      channel: l,
      voiceStates: c,
      collapsed: u,
      collapsedMax: d = 6,
      tabIndex: h,
      location: m,
      numAudience: g,
      withGuildIcon: b = false,
      className: _,
      children: y,
      isThread: C = false
    } = e, [x, j] = i.useState(null), [S, Z] = i.useState(false), T = i.useRef(null), N = (0, v.Es)(l.id, null != c ? c : L), A = i.useRef(new s.sW(50, () => {
      j(T.current), T.current = null
    })), R = i.useRef(new s.sW(175, () => {
      j(null)
    })), U = i.useCallback(e => {
      t && (Z(true), R.current.cancel(), T.current = e, A.current.delay())
    }, [t]), B = i.useCallback(e => {
      t && (A.current.cancel(), x === e && (Z(false), R.current.delay()))
    }, [t, x]), F = (0, o.Wu)([I.Z], () => {
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
    (0, p.Z)(F);
    let V = (() => {
      if (null == N || 0 === N.length) return null;
      let e = u && N.length > d + 1 ? N.slice(0, d) : N,
        t = f.Z.getGuildRingingUsers(l.id),
        i = e.map(e => {
          var i;
          let {
            user: a,
            nick: o,
            voiceState: s
          } = e, c = t.has(a.id);
          return (0, r.jsx)(k, {
            user: a,
            nick: o,
            isSelfOnOtherClient: E.default.getId() === a.id && s.sessionId !== E.default.getSessionId(),
            mute: s.isVoiceMuted(),
            deaf: s.isVoiceDeafened(),
            video: s.selfVideo,
            serverMute: s.mute,
            serverDeaf: s.deaf,
            sessionId: null != (i = s.sessionId) ? i : "",
            channel: l,
            collapsed: u,
            canDrag: n && P.Z.can(M.Plq.MOVE_MEMBERS, l),
            showPreview: U,
            hidePreview: B,
            previewIsOpen: S,
            shouldShowHoverPopout: x === a.id,
            tabIndex: h,
            location: m
          }, "voice-user-".concat(a.id, "-").concat(c))
        });
      return null != g && g > 0 ? i.push((0, r.jsx)(w.ul, {
        collapsed: u,
        numAudience: g
      })) : u && N.length > d + 1 && i.push((0, r.jsx)(w.XX, {
        numUsers: N.length - d
      })), i
    })();
    return null == V && null == y ? null : (0, r.jsxs)(O.eJ, {
      className: a()(_, D.list, {
        [D.collapsed]: u,
        [D.withGuildIcon]: b,
        [D.isThread]: C
      }),
      collapsed: u,
      children: [V, y]
    })
  }