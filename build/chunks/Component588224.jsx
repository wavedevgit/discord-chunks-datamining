/** Chunk was on 42402 **/
/** chunk id: 588224, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => B
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
    sessionId: v,
    nick: N
  } = e, T = A.id, k = (0, a.bG)([C.default], () => C.default.getId() === T, [T]), [U, V, B] = (0, a.yK)([I.A], () => k ? [!I.A.isSupported() || I.A.isSelfMute() || I.A.isSelfMutedTemporarily(), I.A.isSelfDeaf(), false] : [!I.A.isSupported() || I.A.isLocalMute(T), false, I.A.isLocalVideoDisabled(T)], [k, T]), H = (0, a.bG)([w.A], () => w.A.isPrioritySpeaker(T)), F = (0, c.A)({
    userId: T,
    checkSoundSharing: true
  }), Y = (0, a.bG)([w.A], () => w.A.isCurrentUserPTTLatched()), K = k && Y, W = (0, a.bG)([S.Ay], () => S.Ay.isGuestOrLurker(y.guild_id, T)), z = (0, a.bG)([h.A], () => h.A.getGuildRingingUsers(y.id).has(T)), X = (0, a.bG)([u.Ay], () => u.Ay.getEmbeddedActivitiesForChannel(y.id).find(e => {
    let {
      userIds: t
    } = e;
    return t.has(T)
  }), [T, y.id]), q = (0, p.A)(null != X ? [X.applicationId] : []), J = (0, x.A)(T, y.guild_id)[0], Q = null != (t = (0, d.YY)(null == J ? true : J.application_id).data) ? t : true, [Z, $] = (0, a.yK)([E.A], () => [E.A.getStreamForUser(T, y.getGuildId()), E.A.getActiveStreamForUser(T, y.getGuildId())], [y, T]), ee = (0, a.bG)([P.A], () => P.A.getSessionById(v)), et = D.Ay.useName(A), en = (0, a.bG)([R.A], () => R.A.getVoicePlatformForChannel(y.id, T), [y.id, T]), {
    enableHangStatus: er
  } = (0, f.$j)({
    guildId: y.guild_id,
    location: "VoiceUsers"
  }), el = (0, g.Ay)(y, true, A), ei = (0, a.bG)([m.A], () => k ? m.A.getHangStatusActivity() : null, [k]), es = (0, b.h)(T), ea = (0, _.uy)(y.id, T), {
    enableVCStatusIcons: eo,
    enableRequestToStream: ec
  } = j.m.useExperiment({
    guildId: y.guild_id,
    location: "VoiceUsers"
  }, {
    autoTrackExposure: (null == J ? true : J.session_id) != null
  });
  return (0, r.jsx)(O.A, {
    shakeLocation: G.uD.VOICE_USER,
    isShaking: F,
    children: (0, r.jsx)(L.Ay, (l = function(e) {
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
      canDrag: e.canDrag && !W,
      disconnected: ea,
      otherClientSessionType: null == ee || null == (n = ee.clientInfo) ? true : n.os,
      voicePlatform: en,
      localMute: U && !k,
      localVideoDisabled: B,
      mute: s || U,
      deaf: o || V,
      speaking: F,
      latched: K,
      ringing: z,
      priority: H,
      embeddedApplication: q[0],
      isStreaming: null != Z && Z.channelId === y.id,
      isWatching: null != $ && $.state !== M.XYD.ENDED,
      isGuest: W,
      isSelf: k,
      requestToStreamActivity: ec ? J : true,
      application: (eo || er) && (null == J ? true : J.session_id) != null ? Q : true,
      showHangStatus: el && er && (k || null != es),
      hangStatusActivity: k ? ei : es
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
let V = [],
  B = function(e) {
    let {
      allowPreviews: t = true,
      allowDragging: n = true,
      channel: i,
      voiceStates: c,
      collapsed: u,
      collapsedMax: d = 6,
      tabIndex: g,
      location: f,
      numAudience: m,
      withGuildIcon: b = false,
      className: O,
      children: j,
      isThread: x = false
    } = e, [E, S] = l.useState(null), [I, P] = l.useState(false), w = l.useRef(null), R = (0, _.$n)(i.id, null != c ? c : V), {
      shouldShow: D,
      dismiss: G
    } = (0, y.Z0)(i, {
      collapsed: u
    }), B = l.useRef(new o.J_(50, () => {
      S(w.current), w.current = null
    })), H = l.useRef(new o.J_(175, () => {
      S(null)
    })), F = l.useCallback(e => {
      t && (P(true), H.current.cancel(), w.current = e, B.current.delay())
    }, [t]), Y = l.useCallback(e => {
      t && (B.current.cancel(), w.current = null, P(false), H.current.delay())
    }, [t]), K = (0, a.yK)([T.A], () => {
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
    (0, p.A)(K);
    let W = (() => {
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
            canDrag: n && N.A.can(M.xBc.MOVE_MEMBERS, i),
            showPreview: F,
            hidePreview: Y,
            previewIsOpen: I,
            shouldShowHoverPopout: E === s.id,
            tabIndex: g,
            location: f
          }, "voice-user-".concat(s.id, "-").concat(c))
        });
      return D && l.unshift((0, r.jsx)(A.p, {
        channel: i,
        onClose: G
      }, "voice-invite-suggestions-button")), null != m && m > 0 ? l.push((0, r.jsx)(L.aI, {
        collapsed: u,
        numAudience: m
      })) : u && R.length > d + 1 && l.push((0, r.jsx)(L.LR, {
        numUsers: R.length - d
      })), l
    })();
    return null == W && null == j ? null : (0, r.jsxs)(v.Wr, {
      className: s()(O, k.p_, {
        [k.yZ]: u,
        [k.lY]: b,
        [k.fT]: x
      }),
      collapsed: u,
      children: [W, j]
    })
  }