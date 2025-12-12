/** Chunk was on 50751 **/
/** chunk id: 371467, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => eI
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
  Chunk609626 = require("./609626.js"),
  Chunk421824 = require("./421824.jsx"),
  Chunk430169 = require("./430169.jsx"),
  Chunk303286 = require("./303286.js"),
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
  eo = Object.freeze({
    timestamp: 0,
    priority: Chunk340101.Tu.NORMAL,
    duration: en,
    expirationExternallyManaged: false,
    type: Chunk340101.kL.GENERIC
  }),
  ea = [],
  es = false,
  ec = [],
  eu = {};

function ed(e, t, n) {
  null == eu[e] && (eu[e] = {}), eu[e][t] = n
}
let eh = 30 * Chunk70956.Z.Millis.MINUTE,
  ep = 2 * Chunk70956.Z.Millis.MINUTE;

function ef() {
  if (es && null == ea.find(e => e.status === J._1z.FOCUSED))
    for (let e of (es = false, ea = [...ea, ...ec], ec = [], ea.length > 40 && (ea.length = 40), ea)) module.timer.start()
}

function em() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 3;
  ea.filter(e => e.type === M.kL.TEXT && e.status === J._1z.TIMED_OUT).sort((e, t) => t.timestamp - e.timestamp).forEach((t, n) => {
    (n >= e || t.timestamp < Date.now() - er) && eg(t.id, J._1z.DISMISSED)
  })
}

function eg(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : J._1z.DISMISSED;
  if (null == e) returnfalse;
  let n = ea.findIndex(t => t.id === e);
  if (false === n) returnfalse;
  let i = ea[n];
  if (i.timer.stop(), ea = [...ea], t === J._1z.FOCUSED) {
    let [e] = ea.splice(n, 1);
    e = et(ee({}, e), {
      status: t
    }), ea.unshift(e), es = true;
    return
  }
  t === J._1z.DISMISSED ? ea.splice(n, 1) : ea[n] = et(ee({}, i), {
    status: t
  }), ef()
}

function ey(e) {
  let t = ea.find(t => t.type === M.kL.INCOMING_CALL && t.channelId === e);
  return null != t ? t.id : null
}

function eO(e, t) {
  let n = ee(et(ee({}, eo), {
      timestamp: Date.now()
    }), t),
    i = (0, o.Z)(),
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
    a = es ? ec : [...ea],
    s = a.findIndex(e => e.priority <= n.priority);
  if (false === s ? a.push(l) : a.splice(s, 0, l), a.length > 40) {
    let e = a.pop();
    es || e.timer.stop()
  }
  return es || (ea = a, l.timer.start()), i
}

function ev(e) {
  var t;
  let n = _.Z.getUserGame(e);
  if (null == n) return null;
  let i = null == (t = _.Z.getNowPlaying(n.gameId)[e]) ? true : t.activity;
  return null == i || i.type !== J.IIU.PLAYING ? null : i
}

function eE() {
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
    if (!I.Z.isFriend(e)) returnfalse;
    let i = t.gameId;
    if (null == i) returnfalse;
    let r = ev(e);
    if (null == r || ! function(e) {
        var t;
        let n = (null == (t = e.timestamps) ? true : t.start) != null ? e.timestamps.start : e.created_at;
        return null != n && Date.now() - n < ep
      }(r)) returnfalse;
    let l = C.Z.getVoiceChannelId(),
      o = null == (n = w.Z.getDiscoverableVoiceStateForUser(e)) ? true : n.channelId;
    if (null != l && null != o && l === o) returnfalse;
    let a = (0, z.pL)();
    if (null == a || a.id !== i) returnfalse;
    if (! function(e, t) {
        var n, i;
        let r = null === (n = null == (i = eu[e]) ? true : i[t]) || true === n ? true : n.lastSentTimestamp;
        return null == r || Date.now() - r > eh
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
    }), eO(s, {
      type: M.kL.GENERIC,
      priority: M.Tu.NORMAL
    })), true
  }(require, Chunk512722), exports.add(require);
  let r = new Set;
  for (let e of require) exports.has(module) || Chunk512722.add(module);
  let l = Chunk610394.Z.isOverlayV3EnabledForPID(Chunk610394.Z.getTargetPID()) || null != Chunk610394.Z.getFocusedPID();
  for (let e of Chunk512722)
    if (! function(e) {
        let t = S.Z.getActivities(e);
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

function eb(e) {
  let {
    channelId: t,
    ringing: n
  } = e, i = ey(t);
  if (!n.includes(O.default.getId())) return eg(i);
  if (null != i) returnfalse;
  let r = v.Z.getChannel(t);
  if (null == r || !r.isRingable() || "GUILD_RING_START" === e.type && !g.Z.getCurrentConfig({
      guildId: e.guildId,
      location: "OverlayV3StartRinging"
    }).enabled || j.Z.getStatus() === J.Skl.DND || m.QZ.getSetting()) returnfalse;
  let l = ea.find(e => e.type === M.kL.TEXT && e.channelId === t && e.messageType === J.uaV.CALL);
  null != l && eg(l.id), eO((0, F.Z)(r), {
    priority: M.Tu.HIGH,
    expirationExternallyManaged: true,
    type: M.kL.INCOMING_CALL,
    channelId: r.id
  })
}
let e_ = {};

function eS(e, t) {
  return "".concat(e, "-").concat(t)
}
class ex extends(i = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk199902.Z, Chunk314897.default, Chunk358221.Z, Chunk592125.Z, Chunk435064.Z, Chunk375954.Z, Chunk292959.Z, Chunk649974.Z, Chunk371651.default, Chunk624864.Z, Chunk610394.Z, Chunk158776.Z, Chunk19780.Z, Chunk699516.Z, Chunk944486.Z, Chunk885110.Z, Chunk246946.Z, Chunk594174.default, Chunk979651.Z), this.syncWith([Chunk649974.Z], eE),
      function() {
        let e = Chunk944486.Z.getVoiceChannelId(),
          t = Chunk314897.default.getId(),
          n = Chunk19780.Z.getMediaSessionId();
        if (null != module && null != require)
          for (let i of Chunk358221.Z.getStreamParticipants(module)) i.user.id !== exports && (e_[eS(i.user.id, require)] = Date.now())
      }()
  }
  getNotifications() {
    return ea
  }
}
$(ex, "displayName", "OverlayNotificationsStore");
let eI = new ex(Chunk570140.Z, {
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
    null != r && eO(r, {
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
      for (let e of ea) e.status === J._1z.FOCUSED && eg(e.id, J._1z.ACTIVE);
      returntrue
    }
    for (let e of (em(), ea)) e.type === M.kL.NUDGE ? eg(e.id, J._1z.DISMISSED) : e.status !== J._1z.ACTIVE || e.expirationExternallyManaged || (e.timer.stop(), e.timer.start(e.expirationExternallyManaged));
    if (ea.length > 0) {
      var n;
      return eg(null == (n = ea.filter(e => e.type === M.kL.TEXT).sort((e, t) => t.timestamp - e.timestamp)[0]) ? true : n.id, J._1z.FOCUSED)
    }
  },
  MESSAGE_CREATE: function(e) {
    var t, n, i;
    let {
      channelId: r,
      message: o
    } = e, a = v.Z.getChannel(r), s = N.default.getUser(null == (t = o.author) ? true : t.id);
    if (null == a || null == s) returnfalse;
    if ([J.mFx.JOIN, J.mFx.JOIN_REQUEST, J.mFx.STREAM_REQUEST].includes(null == (n = o.activity) ? true : n.type)) {
      if (!(0, p.eF)(o, r, true, true)) returnfalse;
      let e = function(e, t, n) {
        var i;
        let r, o;
        if (l()(null != t.activity, "received null message activity"), n.id === O.default.getId()) returnfalse;
        let a = (0, z.pL)(),
          s = null != (i = null == a ? true : a.altId) ? i : null == a ? true : a.id;
        if (null == a || null == s) returnfalse;
        switch (t.activity.type) {
          case J.mFx.JOIN:
            if (null == (r = S.Z.getApplicationActivity(n.id, s)) || null == r.party || r.party.id !== t.activity.party_id) returnfalse;
            o = (0, V.Z)(e, t, n, a, r);
            break;
          case J.mFx.JOIN_REQUEST:
            if (null == (r = j.Z.getApplicationActivity(s)) || null == r.party || r.party.id !== t.activity.party_id) returnfalse;
            o = (0, B.Z)(e, n, a, r);
            break;
          case J.mFx.STREAM_REQUEST:
            let {
              enableRequestToStreamOverlayNotification: c
            } = f.A.getCurrentConfig({
              guildId: e.guild_id,
              location: "showActivityNotification"
            }, {
              autoTrackExposure: false
            });
            if (!c || null == (r = j.Z.getApplicationActivity(s)) || r.application_id !== s) returnfalse;
            o = (0, Y.Z)(e, n, a, r)
        }
        if (null == o) returnfalse;
        eO(o, {
          priority: M.Tu.URGENT,
          expirationExternallyManaged: true,
          channelId: e.id,
          duration: el,
          uniqueKey: "activity-".concat(t.activity.type, "-").concat(n.id, "-").concat(e.id, "-").concat(s)
        });
        let u = new Set;
        return ea.filter(e => null != e.uniqueKey).sort((e, t) => t.timestamp - e.timestamp).forEach(e => {
          null != e.uniqueKey && (u.has(e.uniqueKey) ? eg(e.id, J._1z.DISMISSED) : u.add(e.uniqueKey))
        }), true
      }(a, o, s);
      if (false !== e) return e
    }
    if (R.Z.isNotificationDisabled(X.n0.TextChat) || Z.Z.disableNotifications || !(0, p.eF)(o, r)) returnfalse;
    let c = !b.Z.isSoundDisabled(T.Ay),
      u = null != (i = E.Z.getMessage(r, o.id)) ? i : (0, h.e5)(o),
      d = (0, Q.Z)(a, u, s, c);
    if (null == d) returnfalse;
    eO(d, {
      type: M.kL.TEXT,
      channelId: a.id,
      expirationExternallyManaged: true,
      messageType: o.type
    }), em()
  },
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    return null != t && function(e) {
      let t = ea.length,
        n = (ea = ea.filter(t => t.type !== M.kL.TEXT || t.channelId !== e)).length !== t;
      return n && ef(), n
    }(t)
  },
  MESSAGE_ACK: function() {},
  CALL_CREATE: eb,
  CALL_UPDATE: eb,
  CALL_DELETE: function(e) {
    let {
      channelId: t
    } = e;
    eg(ey(t))
  },
  GUILD_RING_START: eb,
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
    i.includes(O.default.getId()) && eg(ey(t))
  },
  ACTIVITY_USER_ACTION: function(e) {
    let t, {
        actionType: n,
        user: i,
        applicationId: r
      } = e,
      l = (0, z.pL)();
    return null != l && (null == l ? true : l.id) != null && (l.id === r || l.altId === r) && (n === J.mFx.JOIN && (t = (0, U.Z)(i, l)), null != t && void eO(t, {
      priority: M.Tu.URGENT,
      type: M.kL.GENERIC
    }))
  },
  CLIPS_SAVE_CLIP_START: function(e) {
    "manual" === e.clipMethod && eO((0, W.f)(q.intl.string(q.t.NBMK9m)))
  },
  CLIPS_SAVE_CLIP_ERROR: function() {
    eO((0, Chunk421824.f)(Chunk388032.intl.string(Chunk388032.t["1ZbZuh"])))
  },
  STREAM_START: function(e) {
    let t = (0, W.y)();
    null != t && eO(t)
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    if (R.Z.isNotificationDisabled(X.n0.StreamWatchNudge)) returnfalse;
    let n = C.Z.getVoiceChannelId(),
      i = O.default.getId(),
      r = x.Z.getMediaSessionId();
    if (null != n && null != r)
      for (let e of t) {
        let {
          userId: t,
          channelId: o,
          guildId: a,
          selfStream: s
        } = e;
        if (t !== i && n === o && s && null != o && null != a) {
          var l;
          let {
            enabled: e
          } = (0, k.lj)("OverlayV3StreamWatchNudge");
          if (!e) return;
          let n = eS(t, r);
          if (null != e_[n]) continue;
          e_[n] = Date.now();
          let i = (0, G.Z)(t, o, null != (l = ev(t)) ? l : true);
          if (null == i) continue;
          eO(i, {
            priority: M.Tu.NORMAL,
            type: M.kL.NUDGE,
            duration: ei
          });
          return
        }
      }
  }
})