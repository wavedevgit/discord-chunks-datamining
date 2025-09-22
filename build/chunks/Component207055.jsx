/** Chunk was on 62987 **/
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
    user: x,
    channel: I,
    sessionId: P,
    nick: D
  } = e, k = x.id, L = (0, o.e7)([O.default], () => O.default.getId() === k, [k]), [U, B, G] = (0, o.Wu)([S.Z], () => L ? [!S.Z.isSupported() || S.Z.isSelfMute() || S.Z.isSelfMutedTemporarily(), S.Z.isSelfDeaf(), false] : [!S.Z.isSupported() || S.Z.isLocalMute(k), false, S.Z.isLocalVideoDisabled(k)], [L, k]), H = (0, o.e7)([T.Z], () => T.Z.isPrioritySpeaker(k)), F = (0, c.Z)({
    userId: k,
    checkSoundSharing: true
  }), V = (0, o.e7)([E.ZP], () => E.ZP.isGuestOrLurker(I.guild_id, k)), z = (0, o.e7)([h.Z], () => h.Z.getGuildRingingUsers(I.id).has(k)), W = (0, o.e7)([u.ZP], () => u.ZP.getEmbeddedActivitiesForChannel(I.id).find(e => {
    let {
      userIds: t
    } = e;
    return t.has(k)
  }), [k, I.id]), q = (0, p.Z)(null != W ? [W.applicationId] : []), Y = (0, C.Z)(k, I.guild_id)[0], K = null != (n = (0, d.IX)(null == Y ? true : Y.application_id).data) ? n : true, [X, Q] = (0, o.Wu)([j.Z], () => [j.Z.getStreamForUser(k, I.getGuildId()), j.Z.getActiveStreamForUser(k, I.getGuildId())], [I, k]), J = (0, o.e7)([Z.Z], () => Z.Z.getSessionById(P)), $ = A.ZP.useName(x), ee = (0, o.e7)([N.Z], () => N.Z.getVoicePlatformForChannel(I.id, k), [I.id, k]), {
    enableHangStatus: et
  } = m.n.useExperiment({
    guildId: I.guild_id,
    location: "VoiceUsers"
  }), en = (0, f.ZP)(I, true, x), er = (0, o.e7)([g.Z], () => L ? g.Z.getHangStatusActivity() : null, [L]), ei = (0, b.j)(k), el = (0, v.Eu)(I.id, k), {
    enableVCStatusIcons: ea,
    enableRequestToStream: eo
  } = _.A.useExperiment({
    guildId: I.guild_id,
    location: "VoiceUsers"
  }, {
    autoTrackExposure: (null == Y ? true : Y.session_id) != null
  });
  return (0, r.jsx)(y.Z, {
    shakeLocation: M.oZ.VOICE_USER,
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
      nick: null != D ? D : $,
      canDrag: e.canDrag && !V,
      disconnected: el,
      otherClientSessionType: null == J || null == (t = J.clientInfo) ? true : t.os,
      voicePlatform: ee,
      localMute: U && !L,
      localVideoDisabled: G,
      mute: a || U,
      deaf: s || B,
      speaking: F,
      ringing: z,
      priority: H,
      embeddedApplication: q[0],
      isStreaming: null != X && X.channelId === I.id,
      isWatching: null != Q && Q.state !== R.jm8.ENDED,
      isGuest: V,
      isSelf: L,
      requestToStreamActivity: eo ? Y : true,
      application: (ea || et) && (null == Y ? true : Y.session_id) != null ? K : true,
      showHangStatus: en && et && (L || null != ei),
      hangStatusActivity: L ? er : ei
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
      tabIndex: f,
      location: m,
      numAudience: g,
      withGuildIcon: b = false,
      className: y,
      children: _
    } = e, [C, j] = i.useState(null), [E, S] = i.useState(false), Z = i.useRef(null), T = (0, v.Es)(l.id, null != c ? c : L), N = i.useRef(new s.sW(50, () => {
      j(Z.current), Z.current = null
    })), A = i.useRef(new s.sW(175, () => {
      j(null)
    })), M = i.useCallback(e => {
      t && (S(true), A.current.cancel(), Z.current = e, N.current.delay())
    }, [t]), U = i.useCallback(e => {
      t && (N.current.cancel(), C === e && (S(false), A.current.delay()))
    }, [t, C]), B = (0, o.Wu)([P.Z], () => {
      if (u) return [];
      let e = new Set;
      return null == T || T.forEach(t => {
        let {
          user: n
        } = t;
        P.Z.getActivities(n.id, l.guild_id).forEach(t => {
          null != t.application_id && e.add(t.application_id)
        })
      }), Array.from(e)
    });
    (0, p.Z)(B);
    let G = (() => {
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
          return (0, r.jsx)(k, {
            user: a,
            nick: o,
            isSelfOnOtherClient: O.default.getId() === a.id && s.sessionId !== O.default.getSessionId(),
            mute: s.isVoiceMuted(),
            deaf: s.isVoiceDeafened(),
            video: s.selfVideo,
            serverMute: s.mute,
            serverDeaf: s.deaf,
            sessionId: null != (i = s.sessionId) ? i : "",
            channel: l,
            collapsed: u,
            canDrag: n && I.Z.can(R.Plq.MOVE_MEMBERS, l),
            showPreview: M,
            hidePreview: U,
            previewIsOpen: E,
            shouldShowHoverPopout: C === a.id,
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
    return null == G && null == _ ? null : (0, r.jsxs)(x.eJ, {
      className: a()(y, D.list, {
        [D.collapsed]: u,
        [D.withGuildIcon]: b
      }),
      collapsed: u,
      children: [G, _]
    })
  }