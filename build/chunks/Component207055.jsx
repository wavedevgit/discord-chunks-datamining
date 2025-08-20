/** Chunk was on 5665 **/
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
let D = Chunk647438.memo(e => {
  var t, n, i, l;
  let {
    mute: a,
    deaf: s,
    user: x,
    channel: S,
    sessionId: k,
    nick: D
  } = e, L = x.id, U = (0, o.e7)([O.default], () => O.default.getId() === L, [L]), [B, F, H] = (0, o.Wu)([E.Z], () => U ? [!E.Z.isSupported() || E.Z.isSelfMute() || E.Z.isSelfMutedTemporarily(), E.Z.isSelfDeaf(), false] : [!E.Z.isSupported() || E.Z.isLocalMute(L), false, E.Z.isLocalVideoDisabled(L)], [U, L]), G = (0, o.e7)([T.Z], () => T.Z.isPrioritySpeaker(L)), V = (0, c.Z)({
    userId: L,
    checkSoundSharing: true
  }), z = (0, o.e7)([j.ZP], () => j.ZP.isGuestOrLurker(S.guild_id, L)), W = (0, o.e7)([h.Z], () => h.Z.getGuildRingingUsers(S.id).has(L)), q = (0, o.e7)([u.ZP], () => u.ZP.getEmbeddedActivitiesForChannel(S.id).find(e => {
    let {
      userIds: t
    } = e;
    return t.has(L)
  }), [L, S.id]), Y = (0, p.Z)(null != q ? [q.applicationId] : []), K = (0, o.e7)([P.Z, I.Z], () => U ? I.Z.getActivities() : P.Z.getActivities(L, S.guild_id)).find(e => null != e.application_id && e.type === R.IIU.PLAYING), X = null != (n = (0, d.IX)(null == K ? true : K.application_id).data) ? n : true, [Q, J] = (0, o.Wu)([v.Z], () => [v.Z.getStreamForUser(L, S.getGuildId()), v.Z.getActiveStreamForUser(L, S.getGuildId())], [S, L]), $ = (0, o.e7)([Z.Z], () => Z.Z.getSessionById(k)), ee = A.ZP.useName(x), et = (0, o.e7)([N.Z], () => N.Z.getVoicePlatformForChannel(S.id, L), [S.id, L]), {
    enableHangStatus: en
  } = m.n.useExperiment({
    guildId: S.guild_id,
    location: "VoiceUsers"
  }), er = (0, f.ZP)(S, true, x), ei = (0, o.e7)([g.Z], () => U ? g.Z.getHangStatusActivity() : null, [U]), el = (0, b.j)(L), ea = (0, C.Eu)(S.id, L), {
    enableVCStatusIcons: eo,
    enableRequestToStream: es
  } = _.A.useExperiment({
    guildId: S.guild_id,
    location: "VoiceUsers"
  });
  return (0, r.jsx)(y.Z, {
    shakeLocation: M.oZ.VOICE_USER,
    isShaking: V,
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
      nick: null != D ? D : ee,
      canDrag: e.canDrag && !z,
      disconnected: ea,
      otherClientSessionType: null == $ || null == (t = $.clientInfo) ? true : t.os,
      voicePlatform: et,
      localMute: B && !U,
      localVideoDisabled: H,
      mute: a || B,
      deaf: s || F,
      speaking: V,
      ringing: W,
      priority: G,
      embeddedApplication: Y[0],
      isStreaming: null != Q && Q.channelId === S.id,
      isWatching: null != J && J.state !== R.jm8.ENDED,
      isGuest: z,
      isSelf: U,
      requestToStreamActivity: es ? K : true,
      application: eo && (null == K ? true : K.session_id) != null ? X : true,
      showHangStatus: er && en && (U || null != el),
      hangStatusActivity: U ? ei : el
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
D.displayName = "ConnectedVoiceUser";
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
    } = e, [v, j] = i.useState(null), [E, I] = i.useState(false), Z = i.useRef(null), T = (0, C.Es)(l.id, null != c ? c : L), N = i.useRef(new s.sW(50, () => {
      j(Z.current), Z.current = null
    })), A = i.useRef(new s.sW(175, () => {
      j(null)
    })), M = i.useCallback(e => {
      t && (I(true), A.current.cancel(), Z.current = e, N.current.delay())
    }, [t]), U = i.useCallback(e => {
      t && (N.current.cancel(), v === e && (I(false), A.current.delay()))
    }, [t, v]), B = (0, o.Wu)([P.Z], () => {
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
    let F = (() => {
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
          return (0, r.jsx)(D, {
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
            canDrag: n && S.Z.can(R.Plq.MOVE_MEMBERS, l),
            showPreview: M,
            hidePreview: U,
            previewIsOpen: E,
            shouldShowHoverPopout: v === a.id,
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
    return null == F && null == _ ? null : (0, r.jsxs)(x.eJ, {
      className: a()(y, k.list, {
        [k.collapsed]: u,
        [k.withGuildIcon]: b
      }),
      collapsed: u,
      children: [F, _]
    })
  }