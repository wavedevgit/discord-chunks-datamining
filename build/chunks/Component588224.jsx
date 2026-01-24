/** Chunk was on 97492 **/
/** chunk id: 588224, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => V
}), require("./896048.js"), require("./667532.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk451988 = require("./451988.js"),
  Chunk717558 = require("./717558.js"),
  Chunk933958 = require("./933958.js"),
  Chunk627363 = require("./627363.js"),
  Chunk429913 = require("./429913.js"),
  Chunk313961 = require("./313961.js"),
  Chunk532622 = require("./532622.js"),
  Chunk140547 = require("./140547.js"),
  Chunk242919 = require("./242919.js"),
  Chunk7054 = require("./7054.js"),
  Chunk220995 = require("./220995.jsx"),
  Chunk582904 = require("./582904.js"),
  Chunk551826 = require("./551826.jsx"),
  Chunk159426 = require("./159426.js"),
  Chunk25528 = require("./25528.js"),
  Chunk530804 = require("./530804.js"),
  Chunk481947 = require("./481947.jsx"),
  Chunk616356 = require("./616356.js"),
  Chunk961350 = require("./961350.js"),
  Chunk696451 = require("./696451.js"),
  Chunk430452 = require("./430452.js"),
  Chunk576705 = require("./576705.js"),
  Chunk290863 = require("./290863.js"),
  Chunk528767 = require("./528767.js"),
  Chunk485296 = require("./485296.js"),
  Chunk977997 = require("./977997.js"),
  Chunk427262 = require("./427262.js"),
  Chunk340851 = require("./340851.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk31408 = require("./31408.js"),
  Chunk50314 = require("./50314.js");
let U = Chunk64700.memo(e => {
  var t, n, l, i;
  let {
    mute: s,
    deaf: o,
    user: A,
    channel: y,
    sessionId: x,
    nick: N
  } = e, T = A.id, G = (0, a.bG)([C.default], () => C.default.getId() === T, [T]), [U, B, V] = (0, a.yK)([I.A], () => G ? [!I.A.isSupported() || I.A.isSelfMute() || I.A.isSelfMutedTemporarily(), I.A.isSelfDeaf(), false] : [!I.A.isSupported() || I.A.isLocalMute(T), false, I.A.isLocalVideoDisabled(T)], [G, T]), F = (0, a.bG)([w.A], () => w.A.isPrioritySpeaker(T)), H = (0, c.A)({
    userId: T,
    checkSoundSharing: true
  }), K = (0, a.bG)([w.A], () => w.A.isCurrentUserPTTLatched()), W = G && K, z = (0, a.bG)([S.Ay], () => S.Ay.isGuestOrLurker(y.guild_id, T)), Y = (0, a.bG)([h.A], () => h.A.getGuildRingingUsers(y.id).has(T)), q = (0, a.bG)([u.Ay], () => u.Ay.getEmbeddedActivitiesForChannel(y.id).find(e => {
    let {
      userIds: t
    } = e;
    return t.has(T)
  }), [T, y.id]), X = (0, p.A)(null != q ? [q.applicationId] : []), J = (0, j.A)(T, y.guild_id)[0], Q = null != (t = (0, d.YY)(null == J ? true : J.application_id).data) ? t : true, [Z, $] = (0, a.yK)([E.A], () => [E.A.getStreamForUser(T, y.getGuildId()), E.A.getActiveStreamForUser(T, y.getGuildId())], [y, T]), ee = (0, a.bG)([P.A], () => P.A.getSessionById(x)), et = D.Ay.useName(A), en = (0, a.bG)([R.A], () => R.A.getVoicePlatformForChannel(y.id, T), [y.id, T]), {
    enableHangStatus: er
  } = (0, g.$j)({
    guildId: y.guild_id,
    location: "VoiceUsers"
  }), el = (0, f.Ay)(y, true, A), ei = (0, a.bG)([m.A], () => G ? m.A.getHangStatusActivity() : null, [G]), es = (0, b.h)(T), ea = (0, v.uy)(y.id, T), {
    enableVCStatusIcons: eo,
    enableRequestToStream: ec
  } = O.m.useExperiment({
    guildId: y.guild_id,
    location: "VoiceUsers"
  }, {
    autoTrackExposure: (null == J ? true : J.session_id) != null
  });
  return (0, r.jsx)(_.A, {
    shakeLocation: k.uD.VOICE_USER,
    isShaking: H,
    children: (0, r.jsx)(M.Ay, (l = function(e) {
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
    }({}, e), i = i = {
      nick: null != N ? N : et,
      canDrag: e.canDrag && !z,
      disconnected: ea,
      otherClientSessionType: null == ee || null == (n = ee.clientInfo) ? true : n.os,
      voicePlatform: en,
      localMute: U && !G,
      localVideoDisabled: V,
      mute: s || U,
      deaf: o || B,
      speaking: H,
      latched: W,
      ringing: Y,
      priority: F,
      embeddedApplication: X[0],
      isStreaming: null != Z && Z.channelId === y.id,
      isWatching: null != $ && $.state !== L.XYD.ENDED,
      isGuest: z,
      isSelf: G,
      requestToStreamActivity: ec ? J : true,
      application: (eo || er) && (null == J ? true : J.session_id) != null ? Q : true,
      showHangStatus: el && er && (G || null != es),
      hangStatusActivity: G ? ei : es
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(i)).forEach(function(e) {
      Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e))
    }), l))
  })
});
U.displayName = "ConnectedVoiceUser";
let B = [],
  V = function(e) {
    let {
      allowPreviews: t = true,
      allowDragging: n = true,
      channel: i,
      voiceStates: c,
      collapsed: u,
      collapsedMax: d = 6,
      tabIndex: f,
      location: g,
      numAudience: m,
      withGuildIcon: b = false,
      className: _,
      children: O,
      isThread: j = false
    } = e, [E, S] = l.useState(null), [I, P] = l.useState(false), w = l.useRef(null), R = (0, v.$n)(i.id, null != c ? c : B), {
      shouldShow: D,
      dismiss: k
    } = (0, y.Z0)(i, {
      collapsed: u
    }), V = l.useRef(new o.J_(50, () => {
      S(w.current), w.current = null
    })), F = l.useRef(new o.J_(175, () => {
      S(null)
    })), H = l.useCallback(e => {
      t && (P(true), F.current.cancel(), w.current = e, V.current.delay())
    }, [t]), K = l.useCallback(e => {
      t && (V.current.cancel(), w.current = null, P(false), F.current.delay())
    }, [t]), W = (0, a.yK)([T.A], () => {
      if (u) return [];
      let e = new Set;
      return null == R || R.forEach(t => {
        let {
          user: n
        } = t;
        T.A.getActivities(n.id, i.guild_id).forEach(t => {
          null != t.application_id && e.add(t.application_id)
        })
      }), Array.from(e)
    });
    (0, p.A)(W);
    let z = (() => {
      if (null == R || 0 === R.length) return null;
      let e = u && R.length > d + 1 ? R.slice(0, d) : R,
        t = h.A.getGuildRingingUsers(i.id),
        l = e.map(e => {
          var l;
          let {
            user: s,
            nick: a,
            voiceState: o
          } = e, c = t.has(s.id);
          return (0, r.jsx)(U, {
            user: s,
            nick: a,
            isSelfOnOtherClient: C.default.getId() === s.id && o.sessionId !== C.default.getSessionId(),
            mute: o.isVoiceMuted(),
            deaf: o.isVoiceDeafened(),
            video: o.selfVideo,
            serverMute: o.mute,
            serverDeaf: o.deaf,
            sessionId: null != (l = o.sessionId) ? l : "",
            channel: i,
            collapsed: u,
            canDrag: n && N.A.can(L.xBc.MOVE_MEMBERS, i),
            showPreview: H,
            hidePreview: K,
            previewIsOpen: I,
            shouldShowHoverPopout: E === s.id,
            tabIndex: f,
            location: g
          }, "voice-user-".concat(s.id, "-").concat(c))
        });
      return D && l.unshift((0, r.jsx)(A.p, {
        channel: i,
        onClose: k
      }, "voice-invite-suggestions-button")), null != m && m > 0 ? l.push((0, r.jsx)(M.aI, {
        collapsed: u,
        numAudience: m
      })) : u && R.length > d + 1 && l.push((0, r.jsx)(M.LR, {
        numUsers: R.length - d
      })), l
    })();
    return null == z && null == O ? null : (0, r.jsxs)(x.Wr, {
      className: s()(_, G.p_, {
        [G.yZ]: u,
        [G.lY]: b,
        [G.fT]: j
      }),
      collapsed: u,
      children: [z, O]
    })
  }