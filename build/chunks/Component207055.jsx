/** Chunk was on 37384 **/
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
  Chunk106252 = require("./106252.js");
let L = Chunk647438.memo(e => {
  var t, n, i, l;
  let {
    mute: a,
    deaf: s,
    user: x,
    channel: P,
    sessionId: I,
    nick: k
  } = e, L = x.id, D = (0, o.e7)([j.default], () => j.default.getId() === L, [L]), [U, B, H] = (0, o.Wu)([S.Z], () => D ? [!S.Z.isSupported() || S.Z.isSelfMute() || S.Z.isSelfMutedTemporarily(), S.Z.isSelfDeaf(), false] : [!S.Z.isSupported() || S.Z.isLocalMute(L), false, S.Z.isLocalVideoDisabled(L)], [D, L]), V = (0, o.e7)([T.Z], () => T.Z.isPrioritySpeaker(L)), F = (0, c.Z)({
    userId: L,
    checkSoundSharing: true
  }), G = (0, o.e7)([E.ZP], () => E.ZP.isGuestOrLurker(P.guild_id, L)), z = (0, o.e7)([h.Z], () => h.Z.getGuildRingingUsers(P.id).has(L)), W = (0, o.e7)([u.ZP], () => u.ZP.getEmbeddedActivitiesForChannel(P.id).find(e => {
    let {
      userIds: t
    } = e;
    return t.has(L)
  }), [L, P.id]), q = (0, p.Z)(null != W ? [W.applicationId] : []), Y = (0, _.Z)(L, P.guild_id)[0], K = null != (n = (0, d.IX)(null == Y ? true : Y.application_id).data) ? n : true, [X, J] = (0, o.Wu)([O.Z], () => [O.Z.getStreamForUser(L, P.getGuildId()), O.Z.getActiveStreamForUser(L, P.getGuildId())], [P, L]), Q = (0, o.e7)([Z.Z], () => Z.Z.getSessionById(I)), $ = A.ZP.useName(x), ee = (0, o.e7)([N.Z], () => N.Z.getVoicePlatformForChannel(P.id, L), [P.id, L]), {
    enableHangStatus: et
  } = (0, m.bN)({
    guildId: P.guild_id,
    location: "VoiceUsers"
  }), en = (0, f.ZP)(P, true, x), er = (0, o.e7)([g.Z], () => D ? g.Z.getHangStatusActivity() : null, [D]), ei = (0, b.j)(L), el = (0, v.Eu)(P.id, L), {
    enableVCStatusIcons: ea,
    enableRequestToStream: eo
  } = C.A.useExperiment({
    guildId: P.guild_id,
    location: "VoiceUsers"
  }, {
    autoTrackExposure: (null == Y ? true : Y.session_id) != null
  });
  return (0, r.jsx)(y.Z, {
    shakeLocation: R.oZ.VOICE_USER,
    isShaking: F,
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
      nick: null != k ? k : $,
      canDrag: e.canDrag && !G,
      disconnected: el,
      otherClientSessionType: null == Q || null == (t = Q.clientInfo) ? true : t.os,
      voicePlatform: ee,
      localMute: U && !D,
      localVideoDisabled: H,
      mute: a || U,
      deaf: s || B,
      speaking: F,
      ringing: z,
      priority: V,
      embeddedApplication: q[0],
      isStreaming: null != X && X.channelId === P.id,
      isWatching: null != J && J.state !== M.jm8.ENDED,
      isGuest: G,
      isSelf: D,
      requestToStreamActivity: eo ? Y : true,
      application: (ea || et) && (null == Y ? true : Y.session_id) != null ? K : true,
      showHangStatus: en && et && (D || null != ei),
      hangStatusActivity: D ? er : ei
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
L.displayName = "ConnectedVoiceUser";
let D = [],
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
      children: C
    } = e, [_, O] = i.useState(null), [E, S] = i.useState(false), Z = i.useRef(null), T = (0, v.Es)(l.id, null != c ? c : D), N = i.useRef(new s.sW(50, () => {
      O(Z.current), Z.current = null
    })), A = i.useRef(new s.sW(175, () => {
      O(null)
    })), R = i.useCallback(e => {
      t && (S(true), A.current.cancel(), Z.current = e, N.current.delay())
    }, [t]), U = i.useCallback(e => {
      t && (N.current.cancel(), _ === e && (S(false), A.current.delay()))
    }, [t, _]), B = (0, o.Wu)([I.Z], () => {
      if (u) return [];
      let e = new Set;
      return null == T || T.forEach(t => {
        let {
          user: n
        } = t;
        I.Z.getActivities(n.id, l.guild_id).forEach(t => {
          null != t.application_id && e.add(t.application_id)
        })
      }), Array.from(e)
    });
    (0, p.Z)(B);
    let H = (() => {
      if (null == T || 0 === T.length) return null;
      let e = u && T.length > d + 1 ? T.slice(0, d) : T,
        t = h.Z.getGuildRingingUsers(l.id),
        i = e.map(e => {
          var i;
          let {
            user: a,
            nick: o,
            voiceState: s
          } = e, c = t.has(a.id);
          return (0, r.jsx)(L, {
            user: a,
            nick: o,
            isSelfOnOtherClient: j.default.getId() === a.id && s.sessionId !== j.default.getSessionId(),
            mute: s.isVoiceMuted(),
            deaf: s.isVoiceDeafened(),
            video: s.selfVideo,
            serverMute: s.mute,
            serverDeaf: s.deaf,
            sessionId: null != (i = s.sessionId) ? i : "",
            channel: l,
            collapsed: u,
            canDrag: n && P.Z.can(M.Plq.MOVE_MEMBERS, l),
            showPreview: R,
            hidePreview: U,
            previewIsOpen: E,
            shouldShowHoverPopout: _ === a.id,
            tabIndex: f,
            location: m
          }, "voice-user-".concat(a.id, "-").concat(c))
        });
      return null != g && g > 0 ? i.push((0, r.jsx)(w.ul, {
        collapsed: u,
        numAudience: g
      })) : u && T.length > d + 1 && i.push((0, r.jsx)(w.XX, {
        numUsers: T.length - d
      })), i
    })();
    return null == H && null == C ? null : (0, r.jsxs)(x.eJ, {
      className: a()(y, k.list, {
        [k.collapsed]: u,
        [k.withGuildIcon]: b
      }),
      collapsed: u,
      children: [H, C]
    })
  }