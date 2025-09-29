/** Chunk was on 63141 **/
/** chunk id: 261435, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => eo
}), require("./388685.js"), require("./539854.js");
var i, Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk772848 = require("./772848.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk13245 = require("./13245.js"),
  Chunk836932 = require("./836932.js"),
  Chunk175553 = require("./175553.js"),
  Chunk158979 = require("./158979.jsx"),
  Chunk181912 = require("./181912.js"),
  Chunk877183 = require("./877183.jsx"),
  Chunk194295 = require("./194295.js"),
  Chunk998033 = require("./998033.jsx"),
  Chunk181364 = require("./181364.jsx"),
  Chunk435064 = require("./435064.js"),
  Chunk668761 = require("./668761.jsx"),
  Chunk864060 = require("./864060.js"),
  Chunk486016 = require("./486016.js"),
  Chunk358446 = require("./358446.jsx"),
  Chunk371651 = require("./371651.js"),
  Chunk624864 = require("./624864.js"),
  Chunk695346 = require("./695346.js"),
  Chunk163612 = require("./163612.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk292959 = require("./292959.js"),
  Chunk158776 = require("./158776.js"),
  Chunk944486 = require("./944486.js"),
  Chunk885110 = require("./885110.js"),
  Chunk246946 = require("./246946.js"),
  Chunk594174 = require("./594174.js"),
  Chunk974180 = require("./974180.js"),
  Chunk808506 = require("./808506.js"),
  Chunk237997 = require("./237997.js"),
  Chunk70956 = require("./70956.js"),
  Chunk129724 = require("./129724.js"),
  Chunk145597 = require("./145597.js"),
  Chunk449224 = require("./449224.js"),
  Chunk981631 = require("./981631.js"),
  Chunk987650 = require("./987650.js"),
  Chunk388032 = require("./388032.jsx");

function H(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function F(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      H(e, t, n[t])
    })
  }
  return e
}

function Y(e, t) {
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
let K = 5 * Chunk70956.Z.Millis.SECOND,
  X = 8 * Chunk70956.Z.Millis.SECOND,
  q = 30 * Chunk70956.Z.Millis.SECOND,
  J = Object.freeze({
    priority: 0,
    duration: K,
    expirationExternallyManaged: false,
    type: 0
  }),
  Q = [],
  $ = (e, t, n) => {
    let i = t ? U._1z.TIMED_OUT : U._1z.DISMISSED;
    return setTimeout(() => c.Z.updateNotificationStatus(e, i), null != n ? n : K)
  };

function ee(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : U._1z.DISMISSED;
  if (null == e) returnfalse;
  let n = Q.findIndex(t => t.id === e);
  if (false === n) returnfalse;
  let i = Q[n];
  clearTimeout(i.timerId), Q = [...Q], t === U._1z.DISMISSED ? Q.splice(n, 1) : Q[n] = Y(F({}, i), {
    status: t
  })
}

function et(e) {
  let t = Q.length;
  return (Q = Q.filter(t => 1 !== t.type || t.channelId !== e)).length !== t
}

function en(e) {
  let t = Q.find(t => 2 === t.type && t.channelId === e);
  return null != t ? t.id : null
}

function ei(e, t) {
  let n = F({}, J, t);
  if (2 !== n.priority && !L.default.isInstanceFocused()) return null;
  let i = (0, o.Z)(),
    r = F({
      id: i,
      status: U._1z.ACTIVE,
      timerId: $(i, n.expirationExternallyManaged, n.duration),
      props: e
    }, n),
    s = (Q = [...Q]).findIndex(e => e.priority <= n.priority);
  return false === s ? Q.push(r) : Q.splice(s, 0, r), Q.length > 10 && clearTimeout(Q.pop().timerId), i
}

function er(e) {
  let {
    channelId: t,
    ringing: n
  } = e, i = en(t);
  if (!n.includes(j.default.getId())) return ee(i);
  if (null != i) returnfalse;
  let r = I.Z.getChannel(t);
  if (null == r || !r.isRingable() || "GUILD_RING_START" === e.type && !Z.Z.getCurrentConfig({
      guildId: e.guildId,
      location: "OverlayStartRinging"
    }).enabled || T.Z.getStatus() === U.Skl.DND || C.QZ.getSetting()) returnfalse;
  let s = Q.find(e => 1 === e.type && e.channelId === t && e.messageType === U.uaV.CALL);
  null != s && ee(s.id), ei((0, p.Z)(r), {
    priority: 1,
    expirationExternallyManaged: true,
    type: 2,
    channelId: r.id
  })
}
class es extends(i = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk237997.default, Chunk592125.Z, Chunk594174.default, Chunk624864.Z)
  }
  getNotifications() {
    return Q
  }
}
H(es, "displayName", "OverlayNotificationsStore");
let eo = new es(Chunk570140.Z, !__OVERLAY__ ? {} : {
  OVERLAY_UPDATE_NOTIFICATION_STATUS: function(e) {
    let {
      notificationId: t,
      status: n
    } = e;
    ee(t, n)
  },
  OVERLAY_MOUNTED: function(e) {
    var t;
    let {
      nudges: n
    } = e;
    if (x.default.hasChangedRenderMode(null != (t = A.default.getFocusedPID()) ? t : (0, V.getPID)())) return;
    let i = function(e) {
      switch (e.type) {
        case G.nc.OOP_WELCOME:
          return (0, f.Z)(e);
        case G.nc.GO_LIVE_VOICE:
        case G.nc.GO_LIVE_NON_VOICE:
          return (0, h.Z)(e);
        case G.nc.KEYBIND_INDICATORS:
          return (0, E.Z)(e);
        case G.nc.NEWS:
        default:
          return (0, y.Z)(e)
      }
    }(n[0]);
    null != i && ei(i, {
      priority: 2,
      duration: X
    })
  },
  OVERLAY_SET_INPUT_LOCKED: function(e) {
    let {
      locked: t
    } = e;
    if (t) returnfalse;
    Q = Q.map(e => e.status === U._1z.ACTIVE ? (clearTimeout(e.timerId), Y(F({}, e), {
      timerId: $(e.id, e.expirationExternallyManaged)
    })) : e)
  },
  MESSAGE_CREATE: function(e) {
    var t, n, i;
    let {
      channelId: r,
      message: o
    } = e, l = I.Z.getChannel(r), a = k.default.getUser(null == (t = o.author) ? true : t.id);
    if (null == l || null == a) returnfalse;
    if ((null == (n = o.activity) ? true : n.type) === U.mFx.JOIN || (null == (i = o.activity) ? true : i.type) === U.mFx.JOIN_REQUEST) {
      if (!(0, v.eF)(o, r, true, true)) returnfalse;
      let e = function(e, t, n) {
        let i, r;
        if (s()(null != t.activity, "received null message activity"), n.id === j.default.getId()) returnfalse;
        let o = W.Z.getGame();
        if (null == o) returnfalse;
        switch (t.activity.type) {
          case U.mFx.JOIN:
            if (null == (i = w.Z.getApplicationActivity(n.id, o.id)) || null == i.party || i.party.id !== t.activity.party_id) returnfalse;
            r = (0, d.Z)(e, t, n, o, i);
            break;
          case U.mFx.JOIN_REQUEST:
            if (null == (i = T.Z.getApplicationActivity(o.id)) || null == i.party || i.party.id !== t.activity.party_id) returnfalse;
            r = (0, g.Z)(e, n, o, i)
        }
        if (null == r) returnfalse;
        let l = ei(r, {
          priority: 2,
          expirationExternallyManaged: true,
          channelId: e.id
        });
        return null != l && $(l, false, q), true
      }(l, o, a);
      if (false !== e) return e
    }
    if ((!L.default.isInstanceLocked() || L.default.isPinned(U.Odu.TEXT)) && r === N.Z.getChannelId() || S.Z.isNotificationDisabled(_.OverlayNotificationDisabledSetting.TEXT_CHAT) || D.Z.disableNotifications || !(0, v.eF)(o, r)) returnfalse;
    let c = !P.Z.isSoundDisabled(R.Ay);
    ei((0, m.Z)(l, o, a, c), {
      type: 1,
      channelId: l.id,
      messageType: o.type
    })
  },
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    return null != t && et(t)
  },
  MESSAGE_ACK: function(e) {
    let {
      channelId: t
    } = e;
    return et(t)
  },
  CALL_CREATE: er,
  CALL_UPDATE: er,
  CALL_DELETE: function(e) {
    let {
      channelId: t
    } = e;
    ee(en(t))
  },
  GUILD_RING_START: er,
  GUILD_RING_STOP: function(e) {
    let {
      channelId: t,
      guildId: n,
      ringing: i
    } = e;
    if (!Z.Z.getCurrentConfig({
        guildId: n,
        location: "OverlayStopRinging"
      }).enabled) returnfalse;
    i.includes(j.default.getId()) && ee(en(t))
  },
  ACTIVITY_USER_ACTION: function(e) {
    let t, {
        actionType: n,
        user: i,
        applicationId: r
      } = e,
      s = W.Z.getGame();
    return null != s && s.id === r && (n === U.mFx.JOIN && (t = (0, u.Z)(i, s)), null != t && void ei(t, {
      priority: 2,
      type: 0
    }))
  },
  CLIPS_SAVE_CLIP_START: function() {
    ei((0, Chunk668761.f)(Chunk388032.intl.string(Chunk388032.t.NBMK9v)))
  },
  CLIPS_SAVE_CLIP: function() {
    ei((0, Chunk668761.f)(Chunk388032.intl.formatToPlainString(Chunk388032.t.KLhk6u, {
      duration: (0, Chunk129724.A)(Chunk435064.Z.getSettings().clipsLength / 1e3, true)
    })))
  },
  CLIPS_SAVE_CLIP_ERROR: function() {
    ei((0, Chunk668761.f)(Chunk388032.intl.string(Chunk388032.t["1ZbZur"])))
  },
  STREAM_START: function(e) {
    let t = (0, b.y)();
    null != t && ei(t)
  }
})