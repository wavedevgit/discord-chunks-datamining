/** Chunk was on 9646 **/
/** chunk id: 371467, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => eO
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
  Chunk777036 = require("./777036.js"),
  Chunk955978 = require("./955978.jsx"),
  Chunk333727 = require("./333727.js"),
  Chunk672199 = require("./672199.js"),
  Chunk585708 = require("./585708.jsx"),
  Chunk588909 = require("./588909.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function K(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function X(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      K(e, t, n[t])
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
let q = 5 * Chunk70956.Z.Millis.SECOND,
  $ = 8 * Chunk70956.Z.Millis.SECOND,
  ee = 30 * Chunk70956.Z.Millis.SECOND,
  et = 30 * Chunk70956.Z.Millis.SECOND,
  en = Object.freeze({
    timestamp: 0,
    priority: Chunk340101.Tu.NORMAL,
    duration: q,
    expirationExternallyManaged: false,
    type: Chunk340101.kL.GENERIC
  }),
  ei = [],
  er = false,
  eo = [],
  el = {};

function ea(e, t, n) {
  null == el[e] && (el[e] = {}), el[e][t] = n
}
let es = 30 * Chunk70956.Z.Millis.MINUTE,
  ec = 2 * Chunk70956.Z.Millis.MINUTE;

function eu() {
  if (er && null == ei.find(e => e.status === Y._1z.FOCUSED))
    for (let e of (er = false, ei = [...ei, ...eo], eo = [], ei.length > 40 && (ei.length = 40), ei)) module.timer.start()
}

function ed() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 3;
  ei.filter(e => e.type === R.kL.TEXT && e.status === Y._1z.TIMED_OUT).sort((e, t) => t.timestamp - e.timestamp).forEach((t, n) => {
    (n >= e || t.timestamp < Date.now() - ee) && ep(t.id, Y._1z.DISMISSED)
  })
}

function ep(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : Y._1z.DISMISSED;
  if (null == e) returnfalse;
  let n = ei.findIndex(t => t.id === e);
  if (false === n) returnfalse;
  let i = ei[n];
  if (i.timer.stop(), ei = [...ei], t === Y._1z.FOCUSED) {
    let [e] = ei.splice(n, 1);
    e = J(X({}, e), {
      status: t
    }), ei.unshift(e), er = true;
    return
  }
  t === Y._1z.DISMISSED ? ei.splice(n, 1) : ei[n] = J(X({}, i), {
    status: t
  }), eu()
}

function ef(e) {
  let t = ei.find(t => t.type === R.kL.INCOMING_CALL && t.channelId === e);
  return null != t ? t.id : null
}

function eh(e, t) {
  let n = X(J(X({}, en), {
      timestamp: Date.now()
    }), t),
    i = (0, l.Z)(),
    r = false,
    o = X({
      id: i,
      status: Y._1z.ACTIVE,
      timer: function(e) {
        let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
          n = arguments.length > 2 ? arguments[2] : true,
          i = false;
        return {
          start() {
            let r = arguments.length > 0 && true !== arguments[0] ? arguments[0] : t,
              o = r ? Y._1z.TIMED_OUT : Y._1z.DISMISSED;
            false === i && (i = setTimeout(() => c.Z.updateNotificationStatus(e, o), null != n ? n : q))
          },
          stop() {
            clearTimeout(i), i = false
          }
        }
      }(i, n.expirationExternallyManaged, n.duration),
      props: J(X({}, e), {
        onNotificationShow: () => {
          var t;
          r || (r = true, null == (t = e.onNotificationShow) || t.call(e, i))
        }
      })
    }, n),
    a = er ? eo : [...ei],
    s = a.findIndex(e => e.priority <= n.priority);
  if (false === s ? a.push(o) : a.splice(s, 0, o), a.length > 40) {
    let e = a.pop();
    er || e.timer.stop()
  }
  return er || (ei = a, o.timer.start()), i
}

function em() {
  if (!(0, Chunk32300.Yo)("OverlayNotificationStore") || Chunk624864.Z.isNotificationDisabled(Chunk486016.OverlayNotificationDisabledSetting.NOW_PLAYING)) returnfalse;
  let e = Chunk649974.Z.usersPlaying,
    t = new Set,
    n = function() {
      let e = [];
      for (let t in el) module.push(...Object.keys(el[exports]).map(e => e));
      return module
    }(),
    i = false;
  for (let [n, r] of Object.entries(module)) i = i || function(e, t) {
    var n, i;
    if (!E.Z.isFriend(e)) returnfalse;
    let r = t.gameId;
    if (null == r) returnfalse;
    let o = null == (n = b.Z.getNowPlaying(r)[e]) ? true : n.activity;
    if (null == o || o.type !== Y.IIU.PLAYING || ! function(e) {
        var t;
        let n = (null == (t = e.timestamps) ? true : t.start) != null ? e.timestamps.start : e.created_at;
        return null != n && Date.now() - n < ec
      }(o)) returnfalse;
    let l = _.Z.getVoiceChannelId(),
      a = null == (i = j.Z.getDiscoverableVoiceStateForUser(e)) ? true : i.channelId;
    if (null != l && null != a && l === a) returnfalse;
    let s = (0, L.pL)();
    if (null == s || s.id !== r) returnfalse;
    if (! function(e, t) {
        var n, i;
        let r = null === (n = null == (i = el[e]) ? true : i[t]) || true === n ? true : n.lastSentTimestamp;
        return null == r || Date.now() - r > es
      }(r, e)) return ea(r, e, {
      userId: e,
      gameId: r,
      lastSentTimestamp: Date.now()
    }), false;
    let c = (0, W.Z)(e, r, o);
    return null != c && (ea(r, e, {
      userId: e,
      gameId: r,
      lastSentTimestamp: Date.now()
    }), eh(c, {
      type: R.kL.GENERIC,
      priority: R.Tu.NORMAL
    })), true
  }(require, Chunk512722), exports.add(require);
  let r = new Set;
  for (let e of require) exports.has(module) || Chunk512722.add(module);
  let o = Chunk610394.ZP.isOverlayV3EnabledForPID((0, Chunk145597.getPID)()) || null != Chunk610394.ZP.getFocusedPID();
  for (let e of Chunk512722)
    if (! function(e) {
        let t = v.Z.getActivities(e);
        if (0 === t.length) returnfalse;
        let n = (0, L.pL)();
        return null != n && null != t.find(e => e.application_id === n.id)
      }(module) && !o) {
      for (let t in el) {
        let n = el[exports][module];
        null != require && (require.lastSentTimestamp = null)
      }
      i = true
    } return i
}

function eg(e) {
  let {
    channelId: t,
    ringing: n
  } = e, i = ef(t);
  if (!n.includes(m.default.getId())) return ep(i);
  if (null != i) returnfalse;
  let r = g.Z.getChannel(t);
  if (null == r || !r.isRingable() || "GUILD_RING_START" === e.type && !h.Z.getCurrentConfig({
      guildId: e.guildId,
      location: "OverlayV3StartRinging"
    }).enabled || x.Z.getStatus() === Y.Skl.DND || f.QZ.getSetting()) returnfalse;
  let o = ei.find(e => e.type === R.kL.TEXT && e.channelId === t && e.messageType === Y.uaV.CALL);
  null != o && ep(o.id), eh((0, V.Z)(r), {
    priority: R.Tu.HIGH,
    expirationExternallyManaged: true,
    type: R.kL.INCOMING_CALL,
    channelId: r.id
  })
}
class ey extends(i = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk592125.Z, Chunk594174.default, Chunk649974.Z, Chunk624864.Z), this.syncWith([Chunk649974.Z], em)
  }
  getNotifications() {
    return ei
  }
}
K(ey, "displayName", "OverlayNotificationsStore");
let eO = new ey(Chunk570140.Z, {
  OVERLAY_UPDATE_NOTIFICATION_STATUS: function(e) {
    let {
      notificationId: t,
      status: n
    } = e;
    ep(t, n)
  },
  OVERLAY_MOUNTED: function(e) {
    var t;
    let {
      nudges: n
    } = e;
    ed(0);
    let i = null != (t = D.ZP.getFocusedPID()) ? t : Z.UNSET_PID;
    if (A.default.hasChangedRenderMode(i)) return;
    let r = (0, H.Z)((0, L.pL)(), n);
    null != r && eh(r, {
      priority: R.Tu.URGENT,
      type: R.kL.NUDGE,
      duration: $
    })
  },
  OVERLAY_SET_INPUT_LOCKED: function(e) {
    let {
      locked: t
    } = e;
    if (t) {
      for (let e of ei) e.status === Y._1z.FOCUSED && ep(e.id, Y._1z.ACTIVE);
      returntrue
    }
    for (let e of (ed(), ei)) e.type === R.kL.NUDGE ? ep(e.id, Y._1z.DISMISSED) : e.status !== Y._1z.ACTIVE || e.expirationExternallyManaged || (e.timer.stop(), e.timer.start(e.expirationExternallyManaged));
    if (ei.length > 0) {
      var n;
      return ep(null == (n = ei.filter(e => e.type === R.kL.TEXT).sort((e, t) => t.timestamp - e.timestamp)[0]) ? true : n.id, Y._1z.FOCUSED)
    }
  },
  MESSAGE_CREATE: function(e) {
    var t, n, i;
    let {
      channelId: r,
      message: l
    } = e, a = g.Z.getChannel(r), s = I.default.getUser(null == (t = l.author) ? true : t.id);
    if (null == a || null == s) returnfalse;
    if ([Y.mFx.JOIN, Y.mFx.JOIN_REQUEST, Y.mFx.STREAM_REQUEST].includes(null == (n = l.activity) ? true : n.type)) {
      if (!(0, p.eF)(l, r, true, true)) returnfalse;
      let e = function(e, t, n) {
        var i;
        let r, l;
        if (o()(null != t.activity, "received null message activity"), n.id === m.default.getId()) returnfalse;
        let a = (0, L.pL)(),
          s = null != (i = null == a ? true : a.altId) ? i : null == a ? true : a.id;
        if (null == a || null == s) returnfalse;
        switch (t.activity.type) {
          case Y.mFx.JOIN:
            if (null == (r = v.Z.getApplicationActivity(n.id, s)) || null == r.party || r.party.id !== t.activity.party_id) returnfalse;
            l = (0, M.Z)(e, t, n, a, r);
            break;
          case Y.mFx.JOIN_REQUEST:
            if (null == (r = x.Z.getApplicationActivity(s)) || null == r.party || r.party.id !== t.activity.party_id) returnfalse;
            l = (0, F.Z)(e, n, a, r);
            break;
          case Y.mFx.STREAM_REQUEST:
            if (null == (r = x.Z.getApplicationActivity(s)) || r.application_id !== s) returnfalse;
            l = (0, G.Z)(e, n, a, r)
        }
        return null != l && (eh(l, {
          priority: R.Tu.URGENT,
          expirationExternallyManaged: true,
          channelId: e.id,
          duration: et
        }), true)
      }(a, l, s);
      if (false !== e) return e
    }
    if (k.Z.isNotificationDisabled(P.OverlayNotificationDisabledSetting.TEXT_CHAT) || S.Z.disableNotifications || !(0, p.eF)(l, r)) returnfalse;
    let c = !O.Z.isSoundDisabled(C.Ay),
      u = null != (i = y.Z.getMessage(r, l.id)) ? i : (0, d.e5)(l);
    eh((0, B.Z)(a, u, s, c), {
      type: R.kL.TEXT,
      channelId: a.id,
      expirationExternallyManaged: true,
      messageType: l.type
    }), ed()
  },
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    return null != t && function(e) {
      let t = ei.length,
        n = (ei = ei.filter(t => t.type !== R.kL.TEXT || t.channelId !== e)).length !== t;
      return n && eu(), n
    }(t)
  },
  MESSAGE_ACK: function() {},
  CALL_CREATE: eg,
  CALL_UPDATE: eg,
  CALL_DELETE: function(e) {
    let {
      channelId: t
    } = e;
    ep(ef(t))
  },
  GUILD_RING_START: eg,
  GUILD_RING_STOP: function(e) {
    let {
      channelId: t,
      guildId: n,
      ringing: i
    } = e;
    if (!h.Z.getCurrentConfig({
        guildId: n,
        location: "OverlayV3StopRinging"
      }).enabled) returnfalse;
    i.includes(m.default.getId()) && ep(ef(t))
  },
  ACTIVITY_USER_ACTION: function(e) {
    let t, {
        actionType: n,
        user: i,
        applicationId: r
      } = e,
      o = (0, L.pL)();
    return null != o && (null == o ? true : o.id) != null && (o.id === r || o.altId === r) && (n === Y.mFx.JOIN && (t = (0, z.Z)(i, o)), null != t && void eh(t, {
      priority: R.Tu.URGENT,
      type: R.kL.GENERIC
    }))
  },
  CLIPS_SAVE_CLIP_START: function() {
    eh((0, Chunk421824.f)(Chunk388032.intl.string(Chunk388032.t.NBMK9v)))
  },
  CLIPS_SAVE_CLIP: function() {
    eh((0, Chunk421824.f)(Chunk388032.intl.format(Chunk388032.t.KLhk6u, {
      duration: (0, Chunk129724.A)(Chunk435064.Z.getSettings().clipsLength / 1e3, true)
    })))
  },
  CLIPS_SAVE_CLIP_ERROR: function() {
    eh((0, Chunk421824.f)(Chunk388032.intl.string(Chunk388032.t["1ZbZur"])))
  },
  STREAM_START: function(e) {
    let t = (0, U.y)();
    null != t && eh(t)
  }
})