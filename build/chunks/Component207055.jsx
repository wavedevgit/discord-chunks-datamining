/** Chunk was on 47840 **/
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
  } = e, D = x.id, k = (0, o.e7)([j.default], () => j.default.getId() === D, [D]), [U, B, H] = (0, o.Wu)([S.Z], () => k ? [!S.Z.isSupported() || S.Z.isSelfMute() || S.Z.isSelfMutedTemporarily(), S.Z.isSelfDeaf(), false] : [!S.Z.isSupported() || S.Z.isLocalMute(D), false, S.Z.isLocalVideoDisabled(D)], [k, D]), F = (0, o.e7)([T.Z], () => T.Z.isPrioritySpeaker(D)), V = (0, c.Z)({
    userId: D,
    checkSoundSharing: true
  }), G = (0, o.e7)([E.ZP], () => E.ZP.isGuestOrLurker(P.guild_id, D)), z = (0, o.e7)([h.Z], () => h.Z.getGuildRingingUsers(P.id).has(D)), W = (0, o.e7)([u.ZP], () => u.ZP.getEmbeddedActivitiesForChannel(P.id).find(e => {
    let {
      userIds: t
    } = e;
    return t.has(D)
  }), [D, P.id]), q = (0, p.Z)(null != W ? [W.applicationId] : []), Y = (0, _.Z)(D, P.guild_id)[0], K = null != (n = (0, d.IX)(null == Y ? true : Y.application_id).data) ? n : true, [X, J] = (0, o.Wu)([O.Z], () => [O.Z.getStreamForUser(D, P.getGuildId()), O.Z.getActiveStreamForUser(D, P.getGuildId())], [P, D]), Q = (0, o.e7)([Z.Z], () => Z.Z.getSessionById(I)), $ = A.ZP.useName(x), ee = (0, o.e7)([N.Z], () => N.Z.getVoicePlatformForChannel(P.id, D), [P.id, D]), {
    enableHangStatus: et
  } = (0, m.bN)({
    guildId: P.guild_id,
    location: "VoiceUsers"
  }), en = (0, f.ZP)(P, true, x), ei = (0, o.e7)([g.Z], () => k ? g.Z.getHangStatusActivity() : null, [k]), er = (0, b.j)(D), el = (0, v.Eu)(P.id, D), {
    enableVCStatusIcons: ea,
    enableRequestToStream: eo
  } = y.A.useExperiment({
    guildId: P.guild_id,
    location: "VoiceUsers"
  }, {
    autoTrackExposure: (null == Y ? true : Y.session_id) != null
  });
  return (0, i.jsx)(C.Z, {
    shakeLocation: R.oZ.VOICE_USER,
    isShaking: V,
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
      nick: null != L ? L : $,
      canDrag: e.canDrag && !G,
      disconnected: el,
      otherClientSessionType: null == Q || null == (t = Q.clientInfo) ? true : t.os,
      voicePlatform: ee,
      localMute: U && !k,
      localVideoDisabled: H,
      mute: a || U,
      deaf: s || B,
      speaking: V,
      ringing: z,
      priority: F,
      embeddedApplication: q[0],
      isStreaming: null != X && X.channelId === P.id,
      isWatching: null != J && J.state !== M.jm8.ENDED,
      isGuest: G,
      isSelf: k,
      requestToStreamActivity: eo ? Y : true,
      application: (ea || et) && (null == Y ? true : Y.session_id) != null ? K : true,
      showHangStatus: en && et && (k || null != er),
      hangStatusActivity: k ? ei : er
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
      className: C,
      children: y
    } = e, [_, O] = r.useState(null), [E, S] = r.useState(false), Z = r.useRef(null), T = (0, v.Es)(l.id, null != c ? c : k), N = r.useRef(new s.sW(50, () => {
      O(Z.current), Z.current = null
    })), A = r.useRef(new s.sW(175, () => {
      O(null)
    })), R = r.useCallback(e => {
      t && (S(true), A.current.cancel(), Z.current = e, N.current.delay())
    }, [t]), U = r.useCallback(e => {
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
            isSelfOnOtherClient: j.default.getId() === a.id && s.sessionId !== j.default.getSessionId(),
            mute: s.isVoiceMuted(),
            deaf: s.isVoiceDeafened(),
            video: s.selfVideo,
            serverMute: s.mute,
            serverDeaf: s.deaf,
            sessionId: null != (r = s.sessionId) ? r : "",
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
      return null != g && g > 0 ? r.push((0, i.jsx)(w.ul, {
        collapsed: u,
        numAudience: g
      })) : u && T.length > d + 1 && r.push((0, i.jsx)(w.XX, {
        numUsers: T.length - d
      })), r
    })();
    return null == H && null == y ? null : (0, i.jsxs)(x.eJ, {
      className: a()(C, L.list, {
        [L.collapsed]: u,
        [L.withGuildIcon]: b
      }),
      collapsed: u,
      children: [H, y]
    })
  }