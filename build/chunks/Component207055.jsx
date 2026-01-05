/** Chunk was on 40184 **/
/** chunk id: 207055, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => F
}), require("./388685.js"), require("./290780.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk819349 = require("./819349.jsx"),
  Chunk771027 = require("./771027.js"),
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
  Chunk362472 = require("./362472.js");
let U = Chunk473749.memo(e => {
  var t, n, r, l;
  let {
    mute: a,
    deaf: s,
    user: C,
    channel: y,
    sessionId: j,
    nick: Z
  } = e, T = C.id, k = (0, o.e7)([_.default], () => _.default.getId() === T, [T]), [U, V, F] = (0, o.Wu)([I.Z], () => k ? [!I.Z.isSupported() || I.Z.isSelfMute() || I.Z.isSelfMutedTemporarily(), I.Z.isSelfDeaf(), false] : [!I.Z.isSupported() || I.Z.isLocalMute(T), false, I.Z.isLocalVideoDisabled(T)], [k, T]), H = (0, o.e7)([A.Z], () => A.Z.isPrioritySpeaker(T)), B = (0, c.Z)({
    userId: T,
    checkSoundSharing: true
  }), G = (0, o.e7)([A.Z], () => A.Z.getVoiceVolume(T), [T]), W = (0, o.e7)([A.Z], () => A.Z.isCurrentUserPTTLatched()), z = k && W, q = (0, o.e7)([P.ZP], () => P.ZP.isGuestOrLurker(y.guild_id, T)), K = (0, o.e7)([f.Z], () => f.Z.getGuildRingingUsers(y.id).has(T)), Y = (0, o.e7)([u.ZP], () => u.ZP.getEmbeddedActivitiesForChannel(y.id).find(e => {
    let {
      userIds: t
    } = e;
    return t.has(T)
  }), [T, y.id]), X = (0, p.Z)(null != Y ? [Y.applicationId] : []), J = (0, O.Z)(T, y.guild_id)[0], Q = null != (n = (0, d.IX)(null == J ? true : J.application_id).data) ? n : true, [$, ee] = (0, o.Wu)([S.Z], () => [S.Z.getStreamForUser(T, y.getGuildId()), S.Z.getActiveStreamForUser(T, y.getGuildId())], [y, T]), et = (0, o.e7)([N.Z], () => N.Z.getSessionById(j)), en = M.ZP.useName(C), ei = (0, o.e7)([w.Z], () => w.Z.getVoicePlatformForChannel(y.id, T), [y.id, T]), {
    enableHangStatus: er
  } = (0, m.bN)({
    guildId: y.guild_id,
    location: "VoiceUsers"
  }), el = (0, h.ZP)(y, true, C), ea = (0, o.e7)([g.Z], () => k ? g.Z.getHangStatusActivity() : null, [k]), eo = (0, b.j)(T), es = (0, E.Eu)(y.id, T), {
    enableVCStatusIcons: ec,
    enableRequestToStream: eu
  } = x.A.useExperiment({
    guildId: y.guild_id,
    location: "VoiceUsers"
  }, {
    autoTrackExposure: (null == J ? true : J.session_id) != null
  });
  return (0, i.jsx)(v.Z, {
    shakeLocation: L.oZ.VOICE_USER,
    isShaking: B,
    children: (0, i.jsx)(R.ZP, (r = function(e) {
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
      nick: null != Z ? Z : en,
      canDrag: e.canDrag && !q,
      disconnected: es,
      otherClientSessionType: null == et || null == (t = et.clientInfo) ? true : t.os,
      voicePlatform: ei,
      localMute: U && !k,
      localVideoDisabled: F,
      mute: a || U,
      deaf: s || V,
      speaking: B,
      voiceDb: G,
      latched: z,
      ringing: K,
      priority: H,
      embeddedApplication: X[0],
      isStreaming: null != $ && $.channelId === y.id,
      isWatching: null != ee && ee.state !== D.jm8.ENDED,
      isGuest: q,
      isSelf: k,
      requestToStreamActivity: eu ? J : true,
      application: (ec || er) && (null == J ? true : J.session_id) != null ? Q : true,
      showHangStatus: el && er && (k || null != eo),
      hangStatusActivity: k ? ea : eo
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
U.displayName = "ConnectedVoiceUser";
let V = [],
  F = function(e) {
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
      className: v,
      children: x,
      isThread: O = false
    } = e, [S, P] = r.useState(null), [I, N] = r.useState(false), A = r.useRef(null), w = (0, E.Es)(l.id, null != c ? c : V), {
      shouldShow: M,
      dismiss: L
    } = (0, y.UM)(l, {
      collapsed: u
    }), F = r.useRef(new s.sW(50, () => {
      P(A.current), A.current = null
    })), H = r.useRef(new s.sW(175, () => {
      P(null)
    })), B = r.useCallback(e => {
      t && (N(true), H.current.cancel(), A.current = e, F.current.delay())
    }, [t]), G = r.useCallback(e => {
      t && (F.current.cancel(), A.current = null, N(false), H.current.delay())
    }, [t]), W = (0, o.Wu)([T.Z], () => {
      if (u) return [];
      let e = new Set;
      return null == w || w.forEach(t => {
        let {
          user: n
        } = t;
        T.Z.getActivities(n.id, l.guild_id).forEach(t => {
          null != t.application_id && e.add(t.application_id)
        })
      }), Array.from(e)
    });
    (0, p.Z)(W);
    let z = (() => {
      if (null == w || 0 === w.length) return null;
      let e = u && w.length > d + 1 ? w.slice(0, d) : w,
        t = f.Z.getGuildRingingUsers(l.id),
        r = e.map(e => {
          var r;
          let {
            user: a,
            nick: o,
            voiceState: s
          } = e, c = t.has(a.id);
          return (0, i.jsx)(U, {
            user: a,
            nick: o,
            isSelfOnOtherClient: _.default.getId() === a.id && s.sessionId !== _.default.getSessionId(),
            mute: s.isVoiceMuted(),
            deaf: s.isVoiceDeafened(),
            video: s.selfVideo,
            serverMute: s.mute,
            serverDeaf: s.deaf,
            sessionId: null != (r = s.sessionId) ? r : "",
            channel: l,
            collapsed: u,
            canDrag: n && Z.Z.can(D.Plq.MOVE_MEMBERS, l),
            showPreview: B,
            hidePreview: G,
            previewIsOpen: I,
            shouldShowHoverPopout: S === a.id,
            tabIndex: h,
            location: m
          }, "voice-user-".concat(a.id, "-").concat(c))
        });
      return M && r.unshift((0, i.jsx)(C.S, {
        channel: l,
        onClose: L
      }, "voice-invite-suggestions-button")), null != g && g > 0 ? r.push((0, i.jsx)(R.ul, {
        collapsed: u,
        numAudience: g
      })) : u && w.length > d + 1 && r.push((0, i.jsx)(R.XX, {
        numUsers: w.length - d
      })), r
    })();
    return null == z && null == x ? null : (0, i.jsxs)(j.eJ, {
      className: a()(v, k.list, {
        [k.collapsed]: u,
        [k.withGuildIcon]: b,
        [k.isThread]: O
      }),
      collapsed: u,
      children: [z, x]
    })
  }