/** Chunk was on 81985 **/
/** chunk id: 207055, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => B
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
  var t, n, i, l;
  let {
    mute: a,
    deaf: s,
    user: y,
    channel: v,
    sessionId: E,
    nick: Z
  } = e, N = y.id, L = (0, o.e7)([_.default], () => _.default.getId() === N, [N]), [U, G, B] = (0, o.Wu)([P.Z], () => L ? [!P.Z.isSupported() || P.Z.isSelfMute() || P.Z.isSelfMutedTemporarily(), P.Z.isSelfDeaf(), false] : [!P.Z.isSupported() || P.Z.isLocalMute(N), false, P.Z.isLocalVideoDisabled(N)], [L, N]), F = (0, o.e7)([A.Z], () => A.Z.isPrioritySpeaker(N)), H = (0, c.Z)({
    userId: N,
    checkSoundSharing: true
  }), V = (0, o.e7)([A.Z], () => A.Z.getVoiceVolume(N), [N]), z = (0, o.e7)([A.Z], () => A.Z.isCurrentUserPTTLatched()), W = L && z, K = (0, o.e7)([I.ZP], () => I.ZP.isGuestOrLurker(v.guild_id, N)), Y = (0, o.e7)([f.Z], () => f.Z.getGuildRingingUsers(v.id).has(N)), q = (0, o.e7)([u.ZP], () => u.ZP.getEmbeddedActivitiesForChannel(v.id).find(e => {
    let {
      userIds: t
    } = e;
    return t.has(N)
  }), [N, v.id]), X = (0, p.Z)(null != q ? [q.applicationId] : []), Q = (0, x.Z)(N, v.guild_id)[0], J = null != (n = (0, d.IX)(null == Q ? true : Q.application_id).data) ? n : true, [$, ee] = (0, o.Wu)([S.Z], () => [S.Z.getStreamForUser(N, v.getGuildId()), S.Z.getActiveStreamForUser(N, v.getGuildId())], [v, N]), et = (0, o.e7)([T.Z], () => T.Z.getSessionById(E)), en = R.ZP.useName(y), er = (0, o.e7)([w.Z], () => w.Z.getVoicePlatformForChannel(v.id, N), [v.id, N]), {
    enableHangStatus: ei
  } = (0, g.bN)({
    guildId: v.guild_id,
    location: "VoiceUsers"
  }), el = (0, h.ZP)(v, true, y), ea = (0, o.e7)([m.Z], () => L ? m.Z.getHangStatusActivity() : null, [L]), eo = (0, b.j)(N), es = (0, C.Eu)(v.id, N), {
    enableVCStatusIcons: ec,
    enableRequestToStream: eu
  } = j.A.useExperiment({
    guildId: v.guild_id,
    location: "VoiceUsers"
  }, {
    autoTrackExposure: (null == Q ? true : Q.session_id) != null
  });
  return (0, r.jsx)(O.Z, {
    shakeLocation: k.oZ.VOICE_USER,
    isShaking: H,
    children: (0, r.jsx)(D.ZP, (i = function(e) {
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
      nick: null != Z ? Z : en,
      canDrag: e.canDrag && !K,
      disconnected: es,
      otherClientSessionType: null == et || null == (t = et.clientInfo) ? true : t.os,
      voicePlatform: er,
      localMute: U && !L,
      localVideoDisabled: B,
      mute: a || U,
      deaf: s || G,
      speaking: H,
      voiceDb: V,
      latched: W,
      ringing: Y,
      priority: F,
      embeddedApplication: X[0],
      isStreaming: null != $ && $.channelId === v.id,
      isWatching: null != ee && ee.state !== M.jm8.ENDED,
      isGuest: K,
      isSelf: L,
      requestToStreamActivity: eu ? Q : true,
      application: (ec || ei) && (null == Q ? true : Q.session_id) != null ? J : true,
      showHangStatus: el && ei && (L || null != eo),
      hangStatusActivity: L ? ea : eo
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
U.displayName = "ConnectedVoiceUser";
let G = [],
  B = function(e) {
    let {
      allowPreviews: t = true,
      allowDragging: n = true,
      channel: l,
      voiceStates: c,
      collapsed: u,
      collapsedMax: d = 6,
      tabIndex: h,
      location: g,
      numAudience: m,
      withGuildIcon: b = false,
      className: O,
      children: j,
      isThread: x = false
    } = e, [S, I] = i.useState(null), [P, T] = i.useState(false), A = i.useRef(null), w = (0, C.Es)(l.id, null != c ? c : G), {
      shouldShow: R,
      dismiss: k
    } = (0, v.UM)(l, {
      collapsed: u
    }), B = i.useRef(new s.sW(50, () => {
      I(A.current), A.current = null
    })), F = i.useRef(new s.sW(175, () => {
      I(null)
    })), H = i.useCallback(e => {
      t && (T(true), F.current.cancel(), A.current = e, B.current.delay())
    }, [t]), V = i.useCallback(e => {
      t && (B.current.cancel(), A.current = null, T(false), F.current.delay())
    }, [t]), z = (0, o.Wu)([N.Z], () => {
      if (u) return [];
      let e = new Set;
      return null == w || w.forEach(t => {
        let {
          user: n
        } = t;
        N.Z.getActivities(n.id, l.guild_id).forEach(t => {
          null != t.application_id && e.add(t.application_id)
        })
      }), Array.from(e)
    });
    (0, p.Z)(z);
    let W = (() => {
      if (null == w || 0 === w.length) return null;
      let e = u && w.length > d + 1 ? w.slice(0, d) : w,
        t = f.Z.getGuildRingingUsers(l.id),
        i = e.map(e => {
          var i;
          let {
            user: a,
            nick: o,
            voiceState: s
          } = e, c = t.has(a.id);
          return (0, r.jsx)(U, {
            user: a,
            nick: o,
            isSelfOnOtherClient: _.default.getId() === a.id && s.sessionId !== _.default.getSessionId(),
            mute: s.isVoiceMuted(),
            deaf: s.isVoiceDeafened(),
            video: s.selfVideo,
            serverMute: s.mute,
            serverDeaf: s.deaf,
            sessionId: null != (i = s.sessionId) ? i : "",
            channel: l,
            collapsed: u,
            canDrag: n && Z.Z.can(M.Plq.MOVE_MEMBERS, l),
            showPreview: H,
            hidePreview: V,
            previewIsOpen: P,
            shouldShowHoverPopout: S === a.id,
            tabIndex: h,
            location: g
          }, "voice-user-".concat(a.id, "-").concat(c))
        });
      return R && i.unshift((0, r.jsx)(y.S, {
        channel: l,
        onClose: k
      }, "voice-invite-suggestions-button")), null != m && m > 0 ? i.push((0, r.jsx)(D.ul, {
        collapsed: u,
        numAudience: m
      })) : u && w.length > d + 1 && i.push((0, r.jsx)(D.XX, {
        numUsers: w.length - d
      })), i
    })();
    return null == W && null == j ? null : (0, r.jsxs)(E.eJ, {
      className: a()(O, L.list, {
        [L.collapsed]: u,
        [L.withGuildIcon]: b,
        [L.isThread]: x
      }),
      collapsed: u,
      children: [W, j]
    })
  }