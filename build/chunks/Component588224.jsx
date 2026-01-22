/** Chunk was on 97492 **/
/** chunk id: 588224, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => F
}), require("./896048.js"), require("./667532.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
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
    mute: a,
    deaf: o,
    user: A,
    channel: y,
    sessionId: E,
    nick: N
  } = e, T = A.id, k = (0, s.bG)([C.default], () => C.default.getId() === T, [T]), [U, V, F] = (0, s.yK)([I.A], () => k ? [!I.A.isSupported() || I.A.isSelfMute() || I.A.isSelfMutedTemporarily(), I.A.isSelfDeaf(), false] : [!I.A.isSupported() || I.A.isLocalMute(T), false, I.A.isLocalVideoDisabled(T)], [k, T]), H = (0, s.bG)([w.A], () => w.A.isPrioritySpeaker(T)), B = (0, c.A)({
    userId: T,
    checkSoundSharing: true
  }), K = (0, s.bG)([w.A], () => w.A.getVoiceVolume(T), [T]), W = (0, s.bG)([w.A], () => w.A.isCurrentUserPTTLatched()), z = k && W, Y = (0, s.bG)([S.Ay], () => S.Ay.isGuestOrLurker(y.guild_id, T)), q = (0, s.bG)([p.A], () => p.A.getGuildRingingUsers(y.id).has(T)), X = (0, s.bG)([u.Ay], () => u.Ay.getEmbeddedActivitiesForChannel(y.id).find(e => {
    let {
      userIds: t
    } = e;
    return t.has(T)
  }), [T, y.id]), J = (0, f.A)(null != X ? [X.applicationId] : []), Q = (0, v.A)(T, y.guild_id)[0], Z = null != (t = (0, d.YY)(null == Q ? true : Q.application_id).data) ? t : true, [$, ee] = (0, s.yK)([_.A], () => [_.A.getStreamForUser(T, y.getGuildId()), _.A.getActiveStreamForUser(T, y.getGuildId())], [y, T]), et = (0, s.bG)([P.A], () => P.A.getSessionById(E)), en = D.Ay.useName(A), er = (0, s.bG)([R.A], () => R.A.getVoicePlatformForChannel(y.id, T), [y.id, T]), {
    enableHangStatus: el
  } = (0, b.$j)({
    guildId: y.guild_id,
    location: "VoiceUsers"
  }), ei = (0, h.Ay)(y, true, A), ea = (0, s.bG)([g.A], () => k ? g.A.getHangStatusActivity() : null, [k]), es = (0, m.h)(T), eo = (0, x.uy)(y.id, T), {
    enableVCStatusIcons: ec,
    enableRequestToStream: eu
  } = j.m.useExperiment({
    guildId: y.guild_id,
    location: "VoiceUsers"
  }, {
    autoTrackExposure: (null == Q ? true : Q.session_id) != null
  });
  return (0, r.jsx)(O.A, {
    shakeLocation: G.uD.VOICE_USER,
    isShaking: B,
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
      nick: null != N ? N : en,
      canDrag: e.canDrag && !Y,
      disconnected: eo,
      otherClientSessionType: null == et || null == (n = et.clientInfo) ? true : n.os,
      voicePlatform: er,
      localMute: U && !k,
      localVideoDisabled: F,
      mute: a || U,
      deaf: o || V,
      speaking: B,
      voiceDb: K,
      latched: z,
      ringing: q,
      priority: H,
      embeddedApplication: J[0],
      isStreaming: null != $ && $.channelId === y.id,
      isWatching: null != ee && ee.state !== L.XYD.ENDED,
      isGuest: Y,
      isSelf: k,
      requestToStreamActivity: eu ? Q : true,
      application: (ec || el) && (null == Q ? true : Q.session_id) != null ? Z : true,
      showHangStatus: ei && el && (k || null != es),
      hangStatusActivity: k ? ea : es
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
  F = function(e) {
    let {
      allowPreviews: t = true,
      allowDragging: n = true,
      channel: i,
      voiceStates: c,
      collapsed: u,
      collapsedMax: d = 6,
      tabIndex: h,
      location: b,
      numAudience: g,
      withGuildIcon: m = false,
      className: O,
      children: j,
      isThread: v = false
    } = e, [_, S] = l.useState(null), [I, P] = l.useState(false), w = l.useRef(null), R = (0, x.$n)(i.id, null != c ? c : V), {
      shouldShow: D,
      dismiss: G
    } = (0, y.Z0)(i, {
      collapsed: u
    }), F = l.useRef(new o.J_(50, () => {
      S(w.current), w.current = null
    })), H = l.useRef(new o.J_(175, () => {
      S(null)
    })), B = l.useCallback(e => {
      t && (P(true), H.current.cancel(), w.current = e, F.current.delay())
    }, [t]), K = l.useCallback(e => {
      t && (F.current.cancel(), w.current = null, P(false), H.current.delay())
    }, [t]), W = (0, s.yK)([T.A], () => {
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
    (0, f.A)(W);
    let z = (() => {
      if (null == R || 0 === R.length) return null;
      let e = u && R.length > d + 1 ? R.slice(0, d) : R,
        t = p.A.getGuildRingingUsers(i.id),
        l = e.map(e => {
          var l;
          let {
            user: a,
            nick: s,
            voiceState: o
          } = e, c = t.has(a.id);
          return (0, r.jsx)(U, {
            user: a,
            nick: s,
            isSelfOnOtherClient: C.default.getId() === a.id && o.sessionId !== C.default.getSessionId(),
            mute: o.isVoiceMuted(),
            deaf: o.isVoiceDeafened(),
            video: o.selfVideo,
            serverMute: o.mute,
            serverDeaf: o.deaf,
            sessionId: null != (l = o.sessionId) ? l : "",
            channel: i,
            collapsed: u,
            canDrag: n && N.A.can(L.xBc.MOVE_MEMBERS, i),
            showPreview: B,
            hidePreview: K,
            previewIsOpen: I,
            shouldShowHoverPopout: _ === a.id,
            tabIndex: h,
            location: b
          }, "voice-user-".concat(a.id, "-").concat(c))
        });
      return D && l.unshift((0, r.jsx)(A.p, {
        channel: i,
        onClose: G
      }, "voice-invite-suggestions-button")), null != g && g > 0 ? l.push((0, r.jsx)(M.aI, {
        collapsed: u,
        numAudience: g
      })) : u && R.length > d + 1 && l.push((0, r.jsx)(M.LR, {
        numUsers: R.length - d
      })), l
    })();
    return null == z && null == j ? null : (0, r.jsxs)(E.Wr, {
      className: a()(O, k.p_, {
        [k.yZ]: u,
        [k.lY]: m,
        [k.fT]: v
      }),
      collapsed: u,
      children: [z, j]
    })
  }