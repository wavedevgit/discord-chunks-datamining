/** Chunk was on 46290 **/
/** chunk id: 371467, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => eb
}), require("./539854.js"), require("./388685.js"), require("./642613.js"), require("./290780.js");
var i, Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk772848 = require("./772848.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk13245 = require("./13245.js"),
  Chunk435064 = require("./435064.js"),
  Chunk786761 = require("./786761.js"),
  Chunk864060 = require("./864060.js"),
  Chunk763624 = require("./763624.js"),
  Chunk695346 = require("./695346.js"),
  Chunk163612 = require("./163612.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk375954 = require("./375954.js"),
  Chunk292959 = require("./292959.js"),
  Chunk649974 = require("./649974.js"),
  Chunk158776 = require("./158776.js"),
  Chunk699516 = require("./699516.js"),
  Chunk944486 = require("./944486.js"),
  Chunk885110 = require("./885110.js"),
  Chunk246946 = require("./246946.js"),
  Chunk594174 = require("./594174.js"),
  Chunk979651 = require("./979651.js"),
  Chunk974180 = require("./974180.js"),
  Chunk70956 = require("./70956.js"),
  Chunk129724 = require("./129724.js"),
  Chunk145597 = require("./145597.js"),
  Chunk486016 = require("./486016.js"),
  Chunk32300 = require("./32300.js"),
  Chunk371651 = require("./371651.js"),
  Chunk624864 = require("./624864.js"),
  Chunk610394 = require("./610394.js"),
  Chunk340101 = require("./340101.js"),
  Chunk388627 = require("./388627.js"),
  Chunk996050 = require("./996050.js"),
  Chunk609626 = require("./609626.js"),
  Chunk421824 = require("./421824.jsx"),
  Chunk303286 = require("./303286.js"),
  Chunk955978 = require("./955978.jsx"),
  Chunk333727 = require("./333727.js"),
  Chunk672199 = require("./672199.js"),
  Chunk585708 = require("./585708.jsx"),
  Chunk588909 = require("./588909.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function X(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function q(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      X(e, t, n[t])
    })
  }
  return e
}

function J(e, t) {
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
let $ = 5 * Chunk70956.Z.Millis.SECOND,
  ee = 8 * Chunk70956.Z.Millis.SECOND,
  et = 30 * Chunk70956.Z.Millis.SECOND,
  en = 30 * Chunk70956.Z.Millis.SECOND,
  ei = Object.freeze({
    timestamp: 0,
    priority: Chunk340101.Tu.NORMAL,
    duration: $,
    expirationExternallyManaged: false,
    type: Chunk340101.kL.GENERIC
  }),
  er = [],
  eo = false,
  el = [],
  ea = {};

function es(e, t, n) {
  null == ea[e] && (ea[e] = {}), ea[e][t] = n
}
let ec = 30 * Chunk70956.Z.Millis.MINUTE,
  eu = 2 * Chunk70956.Z.Millis.MINUTE;

function ed() {
  if (eo && null == er.find(e => e.status === Q._1z.FOCUSED))
    for (let e of (eo = false, er = [...er, ...el], el = [], er.length > 40 && (er.length = 40), er)) module.timer.start()
}

function ep() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 3;
  er.filter(e => e.type === L.kL.TEXT && e.status === Q._1z.TIMED_OUT).sort((e, t) => t.timestamp - e.timestamp).forEach((t, n) => {
    (n >= e || t.timestamp < Date.now() - et) && ef(t.id, Q._1z.DISMISSED)
  })
}

function ef(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : Q._1z.DISMISSED;
  if (null == e) returnfalse;
  let n = er.findIndex(t => t.id === e);
  if (false === n) returnfalse;
  let i = er[n];
  if (i.timer.stop(), er = [...er], t === Q._1z.FOCUSED) {
    let [e] = er.splice(n, 1);
    e = J(q({}, e), {
      status: t
    }), er.unshift(e), eo = true;
    return
  }
  t === Q._1z.DISMISSED ? er.splice(n, 1) : er[n] = J(q({}, i), {
    status: t
  }), ed()
}

function eh(e) {
  let t = er.find(t => t.type === L.kL.INCOMING_CALL && t.channelId === e);
  return null != t ? t.id : null
}

function em(e, t) {
  let n = q(J(q({}, ei), {
      timestamp: Date.now()
    }), t),
    i = (0, l.Z)(),
    r = false,
    o = q({
      id: i,
      status: Q._1z.ACTIVE,
      timer: function(e) {
        let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
          n = arguments.length > 2 ? arguments[2] : true,
          i = false;
        return {
          start() {
            let r = arguments.length > 0 && true !== arguments[0] ? arguments[0] : t,
              o = r ? Q._1z.TIMED_OUT : Q._1z.DISMISSED;
            false === i && (i = setTimeout(() => c.Z.updateNotificationStatus(e, o), null != n ? n : $))
          },
          stop() {
            clearTimeout(i), i = false
          }
        }
      }(i, n.expirationExternallyManaged, n.duration),
      props: J(q({}, e), {
        onNotificationShow: () => {
          var t;
          r || (r = true, null == (t = e.onNotificationShow) || t.call(e, i))
        }
      })
    }, n),
    a = eo ? el : [...er],
    s = a.findIndex(e => e.priority <= n.priority);
  if (false === s ? a.push(o) : a.splice(s, 0, o), a.length > 40) {
    let e = a.pop();
    eo || e.timer.stop()
  }
  return eo || (er = a, o.timer.start()), i
}

function eg() {
  if (!(0, Chunk32300.Yo)("OverlayNotificationStore") || Chunk624864.Z.isNotificationDisabled(Chunk486016.OverlayNotificationDisabledSetting.NOW_PLAYING)) returnfalse;
  let e = Chunk649974.Z.usersPlaying,
    t = new Set,
    n = function() {
      let e = [];
      for (let t in ea) module.push(...Object.keys(ea[exports]).map(e => e));
      return module
    }(),
    i = false;
  for (let [n, r] of Object.entries(module)) i = i || function(e, t) {
    var n, i;
    if (!_.Z.isFriend(e)) returnfalse;
    let r = t.gameId;
    if (null == r) returnfalse;
    let o = null == (n = v.Z.getNowPlaying(r)[e]) ? true : n.activity;
    if (null == o || o.type !== Q.IIU.PLAYING || ! function(e) {
        var t;
        let n = (null == (t = e.timestamps) ? true : t.start) != null ? e.timestamps.start : e.created_at;
        return null != n && Date.now() - n < eu
      }(o)) returnfalse;
    let l = S.Z.getVoiceChannelId(),
      a = null == (i = C.Z.getDiscoverableVoiceStateForUser(e)) ? true : i.channelId;
    if (null != l && null != a && l === a) returnfalse;
    let s = (0, M.pL)();
    if (null == s || s.id !== r) returnfalse;
    if (! function(e, t) {
        var n, i;
        let r = null === (n = null == (i = ea[e]) ? true : i[t]) || true === n ? true : n.lastSentTimestamp;
        return null == r || Date.now() - r > ec
      }(r, e)) return es(r, e, {
      userId: e,
      gameId: r,
      lastSentTimestamp: Date.now()
    }), false;
    let c = (0, G.Z)(e, r, o);
    return null != c && (es(r, e, {
      userId: e,
      gameId: r,
      lastSentTimestamp: Date.now()
    }), em(c, {
      type: L.kL.GENERIC,
      priority: L.Tu.NORMAL
    })), true
  }(require, Chunk512722), exports.add(require);
  let r = new Set;
  for (let e of require) exports.has(module) || Chunk512722.add(module);
  let o = Chunk610394.ZP.isOverlayV3EnabledForPID((0, Chunk145597.getPID)()) || null != Chunk610394.ZP.getFocusedPID();
  for (let e of Chunk512722)
    if (! function(e) {
        let t = E.Z.getActivities(e);
        if (0 === t.length) returnfalse;
        let n = (0, M.pL)();
        return null != n && null != t.find(e => e.application_id === n.id)
      }(module) && !o) {
      for (let t in ea) {
        let n = ea[exports][module];
        null != require && (require.lastSentTimestamp = null)
      }
      i = true
    } return i
}

function ey(e) {
  let {
    channelId: t,
    ringing: n
  } = e, i = eh(t);
  if (!n.includes(g.default.getId())) return ef(i);
  if (null != i) returnfalse;
  let r = y.Z.getChannel(t);
  if (null == r || !r.isRingable() || "GUILD_RING_START" === e.type && !m.Z.getCurrentConfig({
      guildId: e.guildId,
      location: "OverlayV3StartRinging"
    }).enabled || I.Z.getStatus() === Q.Skl.DND || h.QZ.getSetting()) returnfalse;
  let o = er.find(e => e.type === L.kL.TEXT && e.channelId === t && e.messageType === Q.uaV.CALL);
  null != o && ef(o.id), em((0, W.Z)(r), {
    priority: L.Tu.HIGH,
    expirationExternallyManaged: true,
    type: L.kL.INCOMING_CALL,
    channelId: r.id
  })
}
class eO extends(i = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk592125.Z, Chunk594174.default, Chunk649974.Z, Chunk624864.Z), this.syncWith([Chunk649974.Z], eg)
  }
  getNotifications() {
    return er
  }
}
X(eO, "displayName", "OverlayNotificationsStore");
let eb = new eO(Chunk570140.Z, {
  OVERLAY_UPDATE_NOTIFICATION_STATUS: function(e) {
    let {
      notificationId: t,
      status: n
    } = e;
    ef(t, n)
  },
  OVERLAY_MOUNTED: function(e) {
    var t;
    let {
      nudges: n
    } = e;
    ep(0);
    let i = null != (t = R.ZP.getFocusedPID()) ? t : P.UNSET_PID;
    if (A.default.hasChangedRenderMode(i)) return;
    let r = (0, Y.Z)((0, M.pL)(), n);
    null != r && em(r, {
      priority: L.Tu.URGENT,
      type: L.kL.NUDGE,
      duration: ee
    })
  },
  OVERLAY_SET_INPUT_LOCKED: function(e) {
    let {
      locked: t
    } = e;
    if (t) {
      for (let e of er) e.status === Q._1z.FOCUSED && ef(e.id, Q._1z.ACTIVE);
      returntrue
    }
    for (let e of (ep(), er)) e.type === L.kL.NUDGE ? ef(e.id, Q._1z.DISMISSED) : e.status !== Q._1z.ACTIVE || e.expirationExternallyManaged || (e.timer.stop(), e.timer.start(e.expirationExternallyManaged));
    if (er.length > 0) {
      var n;
      return ef(null == (n = er.filter(e => e.type === L.kL.TEXT).sort((e, t) => t.timestamp - e.timestamp)[0]) ? true : n.id, Q._1z.FOCUSED)
    }
  },
  MESSAGE_CREATE: function(e) {
    var t, n, i;
    let {
      channelId: r,
      message: l
    } = e, a = y.Z.getChannel(r), s = j.default.getUser(null == (t = l.author) ? true : t.id);
    if (null == a || null == s) returnfalse;
    if ([Q.mFx.JOIN, Q.mFx.JOIN_REQUEST, Q.mFx.STREAM_REQUEST].includes(null == (n = l.activity) ? true : n.type)) {
      if (!(0, p.eF)(l, r, true, true)) returnfalse;
      let e = function(e, t, n) {
        var i;
        let r, l;
        if (o()(null != t.activity, "received null message activity"), n.id === g.default.getId()) returnfalse;
        let a = (0, M.pL)(),
          s = null != (i = null == a ? true : a.altId) ? i : null == a ? true : a.id;
        if (null == a || null == s) returnfalse;
        switch (t.activity.type) {
          case Q.mFx.JOIN:
            if (null == (r = E.Z.getApplicationActivity(n.id, s)) || null == r.party || r.party.id !== t.activity.party_id) returnfalse;
            l = (0, z.Z)(e, t, n, a, r);
            break;
          case Q.mFx.JOIN_REQUEST:
            if (null == (r = I.Z.getApplicationActivity(s)) || null == r.party || r.party.id !== t.activity.party_id) returnfalse;
            l = (0, F.Z)(e, n, a, r);
            break;
          case Q.mFx.STREAM_REQUEST:
            let {
              enableRequestToStreamOverlayNotification: c
            } = f.A.getCurrentConfig({
              guildId: e.guild_id,
              location: "showActivityNotification"
            }, {
              autoTrackExposure: false
            });
            if (!c || null == (r = I.Z.getApplicationActivity(s)) || r.application_id !== s) returnfalse;
            l = (0, B.Z)(e, n, a, r)
        }
        if (null == l) returnfalse;
        em(l, {
          priority: L.Tu.URGENT,
          expirationExternallyManaged: true,
          channelId: e.id,
          duration: en,
          uniqueKey: "activity-".concat(t.activity.type, "-").concat(n.id, "-").concat(e.id, "-").concat(s)
        });
        let u = new Set;
        return er.filter(e => null != e.uniqueKey).sort((e, t) => t.timestamp - e.timestamp).forEach(e => {
          null != e.uniqueKey && (u.has(e.uniqueKey) ? ef(e.id, Q._1z.DISMISSED) : u.add(e.uniqueKey))
        }), true
      }(a, l, s);
      if (false !== e) return e
    }
    if (D.Z.isNotificationDisabled(T.OverlayNotificationDisabledSetting.TEXT_CHAT) || x.Z.disableNotifications || !(0, p.eF)(l, r)) returnfalse;
    let c = !b.Z.isSoundDisabled(N.Ay),
      u = null != (i = O.Z.getMessage(r, l.id)) ? i : (0, d.e5)(l);
    em((0, H.Z)(a, u, s, c), {
      type: L.kL.TEXT,
      channelId: a.id,
      expirationExternallyManaged: true,
      messageType: l.type
    }), ep()
  },
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    return null != t && function(e) {
      let t = er.length,
        n = (er = er.filter(t => t.type !== L.kL.TEXT || t.channelId !== e)).length !== t;
      return n && ed(), n
    }(t)
  },
  MESSAGE_ACK: function() {},
  CALL_CREATE: ey,
  CALL_UPDATE: ey,
  CALL_DELETE: function(e) {
    let {
      channelId: t
    } = e;
    ef(eh(t))
  },
  GUILD_RING_START: ey,
  GUILD_RING_STOP: function(e) {
    let {
      channelId: t,
      guildId: n,
      ringing: i
    } = e;
    if (!m.Z.getCurrentConfig({
        guildId: n,
        location: "OverlayV3StopRinging"
      }).enabled) returnfalse;
    i.includes(g.default.getId()) && ef(eh(t))
  },
  ACTIVITY_USER_ACTION: function(e) {
    let t, {
        actionType: n,
        user: i,
        applicationId: r
      } = e,
      o = (0, M.pL)();
    return null != o && (null == o ? true : o.id) != null && (o.id === r || o.altId === r) && (n === Q.mFx.JOIN && (t = (0, U.Z)(i, o)), null != t && void em(t, {
      priority: L.Tu.URGENT,
      type: L.kL.GENERIC
    }))
  },
  CLIPS_SAVE_CLIP_START: function() {
    em((0, Chunk421824.f)(Chunk388032.intl.string(Chunk388032.t.NBMK9v)))
  },
  CLIPS_SAVE_CLIP: function() {
    em((0, Chunk421824.f)(Chunk388032.intl.format(Chunk388032.t.KLhk6u, {
      duration: (0, Chunk129724.A)(Chunk435064.Z.getSettings().clipsLength / 1e3, true)
    })))
  },
  CLIPS_SAVE_CLIP_ERROR: function() {
    em((0, Chunk421824.f)(Chunk388032.intl.string(Chunk388032.t["1ZbZur"])))
  },
  STREAM_START: function(e) {
    let t = (0, V.y)();
    null != t && em(t)
  }
})