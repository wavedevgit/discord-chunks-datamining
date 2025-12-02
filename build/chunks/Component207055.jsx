/** Chunk was on 34740 **/
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
  Chunk968080 = require("./968080.js");
let U = Chunk473749.memo(e => {
  var t, n, r, l;
  let {
    mute: a,
    deaf: s,
    user: y,
    channel: C,
    sessionId: E,
    nick: Z
  } = e, T = y.id, k = (0, o.e7)([S.default], () => S.default.getId() === T, [T]), [U, V, F] = (0, o.Wu)([I.Z], () => k ? [!I.Z.isSupported() || I.Z.isSelfMute() || I.Z.isSelfMutedTemporarily(), I.Z.isSelfDeaf(), false] : [!I.Z.isSupported() || I.Z.isLocalMute(T), false, I.Z.isLocalVideoDisabled(T)], [k, T]), B = (0, o.e7)([A.Z], () => A.Z.isPrioritySpeaker(T)), H = (0, c.Z)({
    userId: T,
    checkSoundSharing: true
  }), G = (0, o.e7)([A.Z], () => A.Z.isCurrentUserPTTLatched()), z = k && G, W = (0, o.e7)([P.ZP], () => P.ZP.isGuestOrLurker(C.guild_id, T)), q = (0, o.e7)([h.Z], () => h.Z.getGuildRingingUsers(C.id).has(T)), K = (0, o.e7)([u.ZP], () => u.ZP.getEmbeddedActivitiesForChannel(C.id).find(e => {
    let {
      userIds: t
    } = e;
    return t.has(T)
  }), [T, C.id]), Y = (0, p.Z)(null != K ? [K.applicationId] : []), X = (0, O.Z)(T, C.guild_id)[0], J = null != (n = (0, d.IX)(null == X ? true : X.application_id).data) ? n : true, [Q, $] = (0, o.Wu)([j.Z], () => [j.Z.getStreamForUser(T, C.getGuildId()), j.Z.getActiveStreamForUser(T, C.getGuildId())], [C, T]), ee = (0, o.e7)([N.Z], () => N.Z.getSessionById(E)), et = M.ZP.useName(y), en = (0, o.e7)([w.Z], () => w.Z.getVoicePlatformForChannel(C.id, T), [C.id, T]), {
    enableHangStatus: ei
  } = (0, m.bN)({
    guildId: C.guild_id,
    location: "VoiceUsers"
  }), er = (0, f.ZP)(C, true, y), el = (0, o.e7)([g.Z], () => k ? g.Z.getHangStatusActivity() : null, [k]), ea = (0, b.j)(T), eo = (0, x.Eu)(C.id, T), {
    enableVCStatusIcons: es,
    enableRequestToStream: ec
  } = _.A.useExperiment({
    guildId: C.guild_id,
    location: "VoiceUsers"
  }, {
    autoTrackExposure: (null == X ? true : X.session_id) != null
  });
  return (0, i.jsx)(v.Z, {
    shakeLocation: D.oZ.VOICE_USER,
    isShaking: H,
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
      nick: null != Z ? Z : et,
      canDrag: e.canDrag && !W,
      disconnected: eo,
      otherClientSessionType: null == ee || null == (t = ee.clientInfo) ? true : t.os,
      voicePlatform: en,
      localMute: U && !k,
      localVideoDisabled: F,
      mute: a || U,
      deaf: s || V,
      speaking: H,
      latched: z,
      ringing: q,
      priority: B,
      embeddedApplication: Y[0],
      isStreaming: null != Q && Q.channelId === C.id,
      isWatching: null != $ && $.state !== L.jm8.ENDED,
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
      tabIndex: f,
      location: m,
      numAudience: g,
      withGuildIcon: b = false,
      className: v,
      children: _,
      isThread: O = false
    } = e, [j, P] = r.useState(null), [I, N] = r.useState(false), A = r.useRef(null), w = (0, x.Es)(l.id, null != c ? c : V), {
      shouldShow: M,
      dismiss: D
    } = (0, C.UM)(l), F = r.useRef(new s.sW(50, () => {
      P(A.current), A.current = null
    })), B = r.useRef(new s.sW(175, () => {
      P(null)
    })), H = r.useCallback(e => {
      t && (N(true), B.current.cancel(), A.current = e, F.current.delay())
    }, [t]), G = r.useCallback(e => {
      t && (F.current.cancel(), A.current = null, N(false), B.current.delay())
    }, [t]), z = (0, o.Wu)([T.Z], () => {
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
    (0, p.Z)(z);
    let W = (() => {
      if (null == w || 0 === w.length) return null;
      let e = u && w.length > d + 1 ? w.slice(0, d) : w,
        t = h.Z.getGuildRingingUsers(l.id),
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
            isSelfOnOtherClient: S.default.getId() === a.id && s.sessionId !== S.default.getSessionId(),
            mute: s.isVoiceMuted(),
            deaf: s.isVoiceDeafened(),
            video: s.selfVideo,
            serverMute: s.mute,
            serverDeaf: s.deaf,
            sessionId: null != (r = s.sessionId) ? r : "",
            channel: l,
            collapsed: u,
            canDrag: n && Z.Z.can(L.Plq.MOVE_MEMBERS, l),
            showPreview: H,
            hidePreview: G,
            previewIsOpen: I,
            shouldShowHoverPopout: j === a.id,
            tabIndex: f,
            location: m
          }, "voice-user-".concat(a.id, "-").concat(c))
        });
      return M && r.unshift((0, i.jsx)(y.S, {
        channel: l,
        onClose: D
      }, "voice-invite-suggestions-button")), null != g && g > 0 ? r.push((0, i.jsx)(R.ul, {
        collapsed: u,
        numAudience: g
      })) : u && w.length > d + 1 && r.push((0, i.jsx)(R.XX, {
        numUsers: w.length - d
      })), r
    })();
    return null == W && null == _ ? null : (0, i.jsxs)(E.eJ, {
      className: a()(v, k.list, {
        [k.collapsed]: u,
        [k.withGuildIcon]: b,
        [k.isThread]: O
      }),
      collapsed: u,
      children: [W, _]
    })
  }