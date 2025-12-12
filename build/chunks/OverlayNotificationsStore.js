/** Chunk was on 50751 **/
/** chunk id: 371467, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => eC
}), require("./539854.js"), require("./388685.js"), require("./642613.js"), require("./290780.js");
var i, Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk772848 = require("./772848.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk13245 = require("./13245.js"),
  Chunk358221 = require("./358221.js"),
  Chunk435064 = require("./435064.js"),
  Chunk786761 = require("./786761.js"),
  Chunk864060 = require("./864060.js"),
  Chunk763624 = require("./763624.js"),
  Chunk695346 = require("./695346.js"),
  Chunk163612 = require("./163612.js"),
  Chunk199902 = require("./199902.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk375954 = require("./375954.js"),
  Chunk292959 = require("./292959.js"),
  Chunk649974 = require("./649974.js"),
  Chunk158776 = require("./158776.js"),
  Chunk19780 = require("./19780.js"),
  Chunk699516 = require("./699516.js"),
  Chunk944486 = require("./944486.js"),
  Chunk885110 = require("./885110.js"),
  Chunk246946 = require("./246946.js"),
  Chunk594174 = require("./594174.js"),
  Chunk979651 = require("./979651.js"),
  Chunk974180 = require("./974180.js"),
  Chunk70956 = require("./70956.js"),
  Chunk145597 = require("./145597.js"),
  Chunk32300 = require("./32300.js"),
  Chunk371651 = require("./371651.js"),
  Chunk624864 = require("./624864.js"),
  Chunk610394 = require("./610394.js"),
  Chunk340101 = require("./340101.js"),
  Chunk388627 = require("./388627.js"),
  Chunk996050 = require("./996050.js"),
  Chunk550055 = require("./550055.js"),
  Chunk421824 = require("./421824.jsx"),
  Chunk430169 = require("./430169.jsx"),
  Chunk777036 = require("./777036.js"),
  Chunk955978 = require("./955978.jsx"),
  Chunk333727 = require("./333727.js"),
  Chunk672199 = require("./672199.js"),
  Chunk585708 = require("./585708.jsx"),
  Chunk588909 = require("./588909.jsx"),
  Chunk987650 = require("./987650.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function $(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function ee(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      $(e, t, n[t])
    })
  }
  return e
}

function et(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let en = 5 * Chunk70956.Z.Millis.SECOND,
  ei = 8 * Chunk70956.Z.Millis.SECOND,
  er = 30 * Chunk70956.Z.Millis.SECOND,
  el = 30 * Chunk70956.Z.Millis.SECOND,
  ea = Object.freeze({
    timestamp: 0,
    priority: Chunk340101.Tu.NORMAL,
    duration: en,
    expirationExternallyManaged: false,
    type: Chunk340101.kL.GENERIC
  }),
  eo = [],
  es = false,
  ec = [],
  eu = {};

function ed(e, t, n) {
  null == eu[e] && (eu[e] = {}), eu[e][t] = n
}
let ef = 30 * Chunk70956.Z.Millis.MINUTE,
  eh = 2 * Chunk70956.Z.Millis.MINUTE;

function ep() {
  if (es && null == eo.find(e => e.status === J._1z.FOCUSED))
    for (let e of (es = false, eo = [...eo, ...ec], ec = [], eo.length > 40 && (eo.length = 40), eo)) module.timer.start()
}

function em() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 3;
  eo.filter(e => e.type === M.kL.TEXT && e.status === J._1z.TIMED_OUT).sort((e, t) => t.timestamp - e.timestamp).forEach((t, n) => {
    (n >= e || t.timestamp < Date.now() - er) && eg(t.id, J._1z.DISMISSED)
  })
}

function eg(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : J._1z.DISMISSED;
  if (null == e) returnfalse;
  let n = eo.findIndex(t => t.id === e);
  if (false === n) returnfalse;
  let i = eo[n];
  if (i.timer.stop(), eo = [...eo], t === J._1z.FOCUSED) {
    let [e] = eo.splice(n, 1);
    e = et(ee({}, e), {
      status: t
    }), eo.unshift(e), es = true;
    return
  }
  t === J._1z.DISMISSED ? eo.splice(n, 1) : eo[n] = et(ee({}, i), {
    status: t
  }), ep()
}

function eb(e) {
  let t = eo.find(t => t.type === M.kL.INCOMING_CALL && t.channelId === e);
  return null != t ? t.id : null
}

function ey(e, t) {
  let n = ee(et(ee({}, ea), {
      timestamp: Date.now()
    }), t),
    i = (0, a.Z)(),
    r = false,
    l = ee({
      id: i,
      status: J._1z.ACTIVE,
      timer: function(e) {
        let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
          n = arguments.length > 2 ? arguments[2] : true,
          i = false;
        return {
          start() {
            let r = arguments.length > 0 && true !== arguments[0] ? arguments[0] : t,
              l = r ? J._1z.TIMED_OUT : J._1z.DISMISSED;
            false === i && (i = setTimeout(() => c.Z.updateNotificationStatus(e, l), null != n ? n : en))
          },
          stop() {
            clearTimeout(i), i = false
          }
        }
      }(i, n.expirationExternallyManaged, n.duration),
      props: et(ee({}, e), {
        onNotificationShow: () => {
          var t;
          r || (r = true, null == (t = e.onNotificationShow) || t.call(e, i))
        }
      })
    }, n),
    o = es ? ec : [...eo],
    s = o.findIndex(e => e.priority <= n.priority);
  if (false === s ? o.push(l) : o.splice(s, 0, l), o.length > 40) {
    let e = o.pop();
    es || e.timer.stop()
  }
  return es || (eo = o, l.timer.start()), i
}

function eO(e) {
  var t;
  let n = S.Z.getUserGame(e);
  if (null == n) return null;
  let i = null == (t = S.Z.getNowPlaying(n.gameId)[e]) ? true : t.activity;
  return null == i || i.type !== J.IIU.PLAYING ? null : i
}

function ev() {
  if (Chunk624864.Z.isNotificationDisabled(Chunk987650.n0.NowPlayingNotification)) returnfalse;
  let e = Chunk649974.Z.usersPlaying,
    t = new Set,
    n = function() {
      let e = [];
      for (let t in eu) module.push(...Object.keys(eu[exports]).map(e => e));
      return module
    }(),
    i = false;
  for (let [n, r] of Object.entries(module)) i = i || function(e, t) {
    var n;
    if (!C.Z.isFriend(e)) returnfalse;
    let i = t.gameId;
    if (null == i) returnfalse;
    let r = eO(e);
    if (null == r || ! function(e) {
        var t;
        let n = (null == (t = e.timestamps) ? true : t.start) != null ? e.timestamps.start : e.created_at;
        return null != n && Date.now() - n < eh
      }(r)) returnfalse;
    let l = j.Z.getVoiceChannelId(),
      a = null == (n = w.Z.getDiscoverableVoiceStateForUser(e)) ? true : n.channelId;
    if (null != l && null != a && l === a) returnfalse;
    let o = (0, z.pL)();
    if (null == o || o.id !== i) returnfalse;
    if (! function(e, t) {
        var n, i;
        let r = null === (n = null == (i = eu[e]) ? true : i[t]) || true === n ? true : n.lastSentTimestamp;
        return null == r || Date.now() - r > ef
      }(i, e)) return ed(i, e, {
      userId: e,
      gameId: i,
      lastSentTimestamp: Date.now()
    }), false;
    let s = (0, H.Z)(e, i, r);
    return null != s && (ed(i, e, {
      userId: e,
      gameId: i,
      lastSentTimestamp: Date.now()
    }), ey(s, {
      type: M.kL.GENERIC,
      priority: M.Tu.NORMAL
    })), true
  }(require, Chunk512722), exports.add(require);
  let r = new Set;
  for (let e of require) exports.has(module) || Chunk512722.add(module);
  let l = Chunk610394.Z.isOverlayV3EnabledForPID(Chunk610394.Z.getTargetPID()) || null != Chunk610394.Z.getFocusedPID();
  for (let e of Chunk512722)
    if (! function(e) {
        let t = x.Z.getActivities(e);
        if (0 === t.length) returnfalse;
        let n = (0, z.pL)();
        return null != n && null != t.find(e => e.application_id === n.id)
      }(module) && !l) {
      for (let t in eu) {
        let n = eu[exports][module];
        null != require && (require.lastSentTimestamp = null)
      }
      i = true
    } return i
}

function eE(e) {
  let {
    channelId: t,
    ringing: n
  } = e, i = eb(t);
  if (!n.includes(y.default.getId())) return eg(i);
  if (null != i) returnfalse;
  let r = O.Z.getChannel(t);
  if (null == r || !r.isRingable() || "GUILD_RING_START" === e.type && !g.Z.getCurrentConfig({
      guildId: e.guildId,
      location: "OverlayV3StartRinging"
    }).enabled || _.Z.getStatus() === J.Skl.DND || m.QZ.getSetting()) returnfalse;
  let l = eo.find(e => e.type === M.kL.TEXT && e.channelId === t && e.messageType === J.uaV.CALL);
  null != l && eg(l.id), ey((0, F.Z)(r), {
    priority: M.Tu.HIGH,
    expirationExternallyManaged: true,
    type: M.kL.INCOMING_CALL,
    channelId: r.id
  })
}
let eS = {};

function ex(e, t) {
  return "".concat(e, "-").concat(t)
}
class eI extends(i = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk199902.Z, Chunk314897.default, Chunk358221.Z, Chunk592125.Z, Chunk435064.Z, Chunk375954.Z, Chunk292959.Z, Chunk649974.Z, Chunk371651.default, Chunk624864.Z, Chunk610394.Z, Chunk158776.Z, Chunk19780.Z, Chunk699516.Z, Chunk944486.Z, Chunk885110.Z, Chunk246946.Z, Chunk594174.default, Chunk979651.Z), this.syncWith([Chunk649974.Z], ev),
      function() {
        let e = Chunk944486.Z.getVoiceChannelId(),
          t = Chunk314897.default.getId(),
          n = Chunk19780.Z.getMediaSessionId();
        if (null != module && null != require)
          for (let i of Chunk358221.Z.getStreamParticipants(module)) i.user.id !== exports && (eS[ex(i.user.id, require)] = Date.now())
      }()
  }
  getNotifications() {
    return eo
  }
}
$(eI, "displayName", "OverlayNotificationsStore");
let eC = new eI(Chunk570140.Z, {
  OVERLAY_UPDATE_NOTIFICATION_STATUS: function(e) {
    let {
      notificationId: t,
      status: n
    } = e;
    eg(t, n)
  },
  OVERLAY_MOUNTED: function(e) {
    var t;
    let {
      nudges: n
    } = e;
    em(0);
    let i = null != (t = L.Z.getFocusedPID()) ? t : A.UNSET_PID;
    if (D.default.hasChangedRenderMode(i)) return;
    let r = (0, K.Z)((0, z.pL)(), n);
    null != r && ey(r, {
      priority: M.Tu.URGENT,
      type: M.kL.NUDGE,
      duration: ei
    })
  },
  OVERLAY_SET_INPUT_LOCKED: function(e) {
    let {
      locked: t
    } = e;
    if (t) {
      for (let e of eo) e.status === J._1z.FOCUSED && eg(e.id, J._1z.ACTIVE);
      returntrue
    }
    for (let e of (em(), eo)) e.type === M.kL.NUDGE ? eg(e.id, J._1z.DISMISSED) : e.status !== J._1z.ACTIVE || e.expirationExternallyManaged || (e.timer.stop(), e.timer.start(e.expirationExternallyManaged));
    if (eo.length > 0) {
      var n;
      return eg(null == (n = eo.filter(e => e.type === M.kL.TEXT).sort((e, t) => t.timestamp - e.timestamp)[0]) ? true : n.id, J._1z.FOCUSED)
    }
  },
  MESSAGE_CREATE: function(e) {
    var t, n, i;
    let {
      channelId: r,
      message: a
    } = e, o = O.Z.getChannel(r), s = N.default.getUser(null == (t = a.author) ? true : t.id);
    if (null == o || null == s) returnfalse;
    if ([J.mFx.JOIN, J.mFx.JOIN_REQUEST, J.mFx.STREAM_REQUEST].includes(null == (n = a.activity) ? true : n.type)) {
      if (!(0, h.eF)(a, r, true, true)) returnfalse;
      let e = function(e, t, n) {
        var i;
        let r, a;
        if (l()(null != t.activity, "received null message activity"), n.id === y.default.getId()) returnfalse;
        let o = (0, z.pL)(),
          s = null != (i = null == o ? true : o.altId) ? i : null == o ? true : o.id;
        if (null == o || null == s) returnfalse;
        switch (t.activity.type) {
          case J.mFx.JOIN:
            if (null == (r = x.Z.getApplicationActivity(n.id, s)) || null == r.party || r.party.id !== t.activity.party_id) returnfalse;
            a = (0, V.Z)(e, t, n, o, r);
            break;
          case J.mFx.JOIN_REQUEST:
            if (null == (r = _.Z.getApplicationActivity(s)) || null == r.party || r.party.id !== t.activity.party_id) returnfalse;
            a = (0, B.Z)(e, n, o, r);
            break;
          case J.mFx.STREAM_REQUEST:
            let {
              enableRequestToStreamOverlayNotification: c
            } = p.A.getCurrentConfig({
              guildId: e.guild_id,
              location: "showActivityNotification"
            }, {
              autoTrackExposure: false
            });
            if (!c || null == (r = _.Z.getApplicationActivity(s)) || r.application_id !== s) returnfalse;
            a = (0, Y.Z)(e, n, o, r)
        }
        if (null == a) returnfalse;
        ey(a, {
          priority: M.Tu.URGENT,
          expirationExternallyManaged: true,
          channelId: e.id,
          duration: el,
          uniqueKey: "activity-".concat(t.activity.type, "-").concat(n.id, "-").concat(e.id, "-").concat(s)
        });
        let u = new Set;
        return eo.filter(e => null != e.uniqueKey).sort((e, t) => t.timestamp - e.timestamp).forEach(e => {
          null != e.uniqueKey && (u.has(e.uniqueKey) ? eg(e.id, J._1z.DISMISSED) : u.add(e.uniqueKey))
        }), true
      }(o, a, s);
      if (false !== e) return e
    }
    if (R.Z.isNotificationDisabled(X.n0.TextChat) || Z.Z.disableNotifications || !(0, h.eF)(a, r)) returnfalse;
    let c = !E.Z.isSoundDisabled(T.Ay),
      u = null != (i = v.Z.getMessage(r, a.id)) ? i : (0, f.e5)(a),
      d = (0, Q.Z)(o, u, s, c);
    if (null == d) returnfalse;
    ey(d, {
      type: M.kL.TEXT,
      channelId: o.id,
      expirationExternallyManaged: true,
      messageType: a.type
    }), em()
  },
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    return null != t && function(e) {
      let t = eo.length,
        n = (eo = eo.filter(t => t.type !== M.kL.TEXT || t.channelId !== e)).length !== t;
      return n && ep(), n
    }(t)
  },
  MESSAGE_ACK: function() {},
  CALL_CREATE: eE,
  CALL_UPDATE: eE,
  CALL_DELETE: function(e) {
    let {
      channelId: t
    } = e;
    eg(eb(t))
  },
  GUILD_RING_START: eE,
  GUILD_RING_STOP: function(e) {
    let {
      channelId: t,
      guildId: n,
      ringing: i
    } = e;
    if (!g.Z.getCurrentConfig({
        guildId: n,
        location: "OverlayV3StopRinging"
      }).enabled) returnfalse;
    i.includes(y.default.getId()) && eg(eb(t))
  },
  ACTIVITY_USER_ACTION: function(e) {
    let t, {
        actionType: n,
        user: i,
        applicationId: r
      } = e,
      l = (0, z.pL)();
    return null != l && (null == l ? true : l.id) != null && (l.id === r || l.altId === r) && (n === J.mFx.JOIN && (t = (0, U.Z)(i, l)), null != t && void ey(t, {
      priority: M.Tu.URGENT,
      type: M.kL.GENERIC
    }))
  },
  CLIPS_SAVE_CLIP_START: function(e) {
    "manual" === e.clipMethod && ey((0, W.f)(q.intl.string(q.t.NBMK9m)))
  },
  CLIPS_SAVE_CLIP_ERROR: function() {
    ey((0, Chunk421824.f)(Chunk388032.intl.string(Chunk388032.t["1ZbZuh"])))
  },
  STREAM_START: function(e) {
    let t = (0, W.y)();
    null != t && ey(t)
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    if (R.Z.isNotificationDisabled(X.n0.StreamWatchNudge)) returnfalse;
    let n = j.Z.getVoiceChannelId(),
      i = y.default.getId(),
      r = I.Z.getMediaSessionId();
    if (null != n && null != r)
      for (let e of t) {
        let {
          userId: t,
          channelId: a,
          guildId: o,
          selfStream: s
        } = e;
        if (t !== i && n === a && s && null != a && null != o) {
          var l;
          let {
            enabled: e
          } = (0, k.lj)("OverlayV3StreamWatchNudge");
          if (!e) return;
          let n = ex(t, r);
          if (null != eS[n]) continue;
          eS[n] = Date.now();
          let i = (0, G.Z)(t, a, null != (l = eO(t)) ? l : true);
          if (null == i) continue;
          ey(i, {
            priority: M.Tu.NORMAL,
            type: M.kL.NUDGE,
            duration: ei
          });
          return
        }
      }
  }
})