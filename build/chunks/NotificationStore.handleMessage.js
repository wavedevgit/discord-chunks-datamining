/** Chunk was on 69813 **/
/** chunk id: 974180, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => ee,
  yk: () => et
}), require("./388685.js"), require("./539854.js");
var r, Chunk149765 = require("./149765.js"),
  Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk570140 = require("./570140.js"),
  Chunk493683 = require("./493683.js"),
  Chunk475179 = require("./475179.js"),
  Chunk749210 = require("./749210.js"),
  Chunk292556 = require("./292556.js"),
  Chunk287734 = require("./287734.js"),
  Chunk579806 = require("./579806.js"),
  Chunk802098 = require("./802098.js"),
  Chunk933557 = require("./933557.js"),
  Chunk456269 = require("./456269.js"),
  Chunk15274 = require("./15274.jsx"),
  Chunk336197 = require("./336197.js"),
  Chunk355298 = require("./355298.js"),
  Chunk786761 = require("./786761.js"),
  Chunk601992 = require("./601992.js"),
  Chunk864060 = require("./864060.js"),
  Chunk687272 = require("./687272.js"),
  Chunk703656 = require("./703656.js"),
  Chunk359110 = require("./359110.js"),
  Chunk922482 = require("./922482.js"),
  Chunk427679 = require("./427679.js"),
  Chunk488131 = require("./488131.js"),
  Chunk695346 = require("./695346.js"),
  Chunk601964 = require("./601964.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk375954 = require("./375954.js"),
  Chunk292959 = require("./292959.js"),
  Chunk496675 = require("./496675.js"),
  Chunk306680 = require("./306680.js"),
  Chunk699516 = require("./699516.js"),
  Chunk944486 = require("./944486.js"),
  Chunk885110 = require("./885110.js"),
  Chunk246946 = require("./246946.js"),
  Chunk594174 = require("./594174.js"),
  Chunk979651 = require("./979651.js"),
  Chunk626135 = require("./626135.js"),
  Chunk5192 = require("./5192.js"),
  Chunk358085 = require("./358085.js"),
  Chunk51144 = require("./51144.js"),
  Chunk654769 = require("./654769.js"),
  Chunk981631 = require("./981631.js"),
  Chunk765305 = require("./765305.js"),
  Chunk987650 = require("./987650.js"),
  Chunk388032 = require("./388032.jsx");

function J(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function $(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      J(e, t, n[t])
    })
  }
  return e
}
let ee = "message1",
  et = .4,
  en = (null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.features.supports("notifications")) ? 20 : 1,
  er = "discord_dismissed_notification_shown",
  el = document.hasFocus(),
  ei = null,
  ea = new Set,
  eo = ["FR", "GF", "PF", "TF", "RE", "GP", "MQ", "YT", "NC", "PM", "WF"],
  ec = new class {
    track(e, t, n) {
      let r = this._channels[e];
      for (null == r && (r = [], this._channels[e] = r), r.push({
          notification: t,
          trackingProps: n
        }); r.length > en;) {
        var l;
        let e = r.shift();
        (null == e || null == (l = e.notification) ? true : l.close) != null && (e.notification.close(), B.default.track(Y.rMx.NOTIFICATION_ACTION, $({
          action: "REMOVE"
        }, e.trackingProps)))
      }
    }
    clearChannel(e) {
      let t = this._channels[e];
      null != t && (delete this._channels[e], t.forEach(e => {
        let {
          notification: t,
          trackingProps: n
        } = e;
        t.close(), B.default.track(Y.rMx.NOTIFICATION_ACTION, $({
          action: "ACK"
        }, n))
      }))
    }
    constructor() {
      J(this, "_channels", {})
    }
  };

function es() {
  return !!(R.Z.getDesktopType() === Y.qrD.NEVER || U.Z.getStatus() === Y.Skl.DND || P.QZ.getSetting())
}

function eu(e) {
  return null != W.Z.getVoiceStateForChannel(e)
}
class ed extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(g.Z, j.Z, w.Z, _.Z, A.Z, R.Z, D.Z, k.Z, L.Z, U.Z, T.Z, F.Z, V.default, W.Z)
  }
}
J(ed, "displayName", "NotificationStore"), new ed(Chunk570140.Z, __OVERLAY__ ? {} : {
  NOTIFICATIONS_SET_PERMISSION_STATE: function(e) {
    let {
      enabled: t
    } = e;
    t !== Y.$Ab.ENABLED || H.isPlatformEmbedded || K.Z.showNotification(n(910653), X.intl.string(X.t.VSgOVg), X.intl.string(X.t["1UJvqc"]), {
      notif_type: "NOTIFICATIONS_SET_PERMISSION_STATE"
    }, {
      sound: ee,
      volume: et,
      tag: "hello",
      onClick: () => {
        window.focus()
      },
      isUserAvatar: false
    })
  },
  NOTIFICATION_CREATE: function(e) {
    let {
      icon: t,
      title: n,
      body: r,
      trackingProps: l,
      options: i
    } = e;
    return !es() && (K.Z.showNotification(t, n, r, l, i), false)
  },
  WINDOW_FOCUS: function(e) {
    if (el = e.focused) {
      let e = L.Z.getChannelId();
      null != e && ec.clearChannel(e)
    }
  },
  MESSAGE_CREATE: function(e) {
    var t, r, l;
    let {
      channelId: i,
      message: a,
      optimistic: c
    } = e;
    if (c) returnfalse;
    let u = j.Z.getChannel(i),
      f = V.default.getUser(null == (t = a.author) ? true : t.id),
      p = V.default.getCurrentUser();
    if (null == u || null == f || null == p) returnfalse;
    let b = (0, O.eF)(a, i, !el),
      m = R.Z.getNotifyMessagesInSelectedChannel() && (0, O.N_)(a, i);
    if (!b && !m || a.type === Y.uaV.CHANGELOG && (null == a.changelog_id || g.Z.latestChangelogId() !== a.changelog_id)) returnfalse;
    let h = !R.Z.isSoundDisabled(ee);
    if (m && (h && K.Z.playNotificationSound("message3", .4), !el) || !b) returnfalse;
    let E = n(808506).default,
      _ = n(624864).Z;
    if (null != E.getFocusedPID() && !_.isNotificationDisabled(Q.n0.TextChat) && !F.Z.disableNotifications) returnfalse;
    let {
      icon: C,
      title: N,
      body: T,
      emoji: x
    } = (0, O.Xi)(u, a, f), P = !(0, S._)("NotificationStore.handleMessage", null == p ? true : p.id);
    if (o.Z.dispatch({
        type: "RPC_NOTIFICATION_CREATE",
        channelId: u.id,
        message: a,
        icon: C,
        title: N,
        body: T
      }), (0, y.R)(a, u.guild_id), R.Z.getDesktopType() === Y.qrD.NEVER) return h && K.Z.playNotificationSound(ee, et), false;
    let Z = null != (l = A.Z.getMessage(i, a.id)) ? l : (0, v.e5)(a);
    K.Z.showNotification(C, N, T, {
      notif_type: "MESSAGE_CREATE",
      notif_user_id: null == (r = a.author) ? true : r.id,
      message_id: a.id,
      message_type: a.type,
      channel_id: u.id,
      channel_type: u.type,
      guild_id: u.guild_id,
      badge: (0, M.Ex)(Z, p)
    }, {
      omitViewTracking: P,
      tag: a.id,
      sound: h ? ee : true,
      volume: et,
      onClick() {
        (0, I.Kh)(u.id), (u.type === Y.d4z.GUILD_VOICE || u.type === Y.d4z.GUILD_STAGE_VOICE) && s.Z.updateChatOpen(u.id, true), d.default.clickedNotification()
      },
      isUserAvatar: true,
      messageRecord: Z,
      fallbackDeepLink: (0, K.W)(Y.Z5c.CHANNEL(u.guild_id, u.id, a.id)),
      emoji: x
    }).then(e => {
      null != e && ec.track(u.id, e.notification, e.trackingProps)
    })
  },
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    return null != t && ec.clearChannel(t), false
  },
  MESSAGE_ACK: function(e) {
    let {
      channelId: t
    } = e;
    return ec.clearChannel(t), false
  },
  ACTIVITY_START: function(e) {
    let {
      userId: t,
      activity: n
    } = e;
    if (es() || n.type !== Y.IIU.PLAYING) returnfalse;
    {
      let e = V.default.getUser(t);
      if (null == e) returnfalse;
      let r = z.ZP.getName(e),
        l = n.name,
        i = e.getAvatarURL(true, 128),
        a = X.intl.string(X.t.XoTWsI),
        o = X.intl.formatToPlainString(X.t.o4Aipn, {
          username: r,
          gameName: l
        });
      return K.Z.showNotification(i, a, o, {
        notif_type: "ACTIVITY_START",
        activity_type: Y.IIU.PLAYING,
        notif_user_id: t,
        activity_name: l
      }, {
        sound: "message2",
        playSoundIfDisabled: false,
        volume: .4,
        onClick() {
          c.Z.openPrivateChannel({
            recipientIds: t
          })
        },
        isUserAvatar: true
      }), false
    }
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    if (es()) return;
    let n = V.default.getCurrentUser();
    if (null == n) return;
    let r = t.find(e => e.userId === n.id);
    if (null == r) return;
    let {
      channelId: l,
      guildId: i,
      suppress: a,
      requestToSpeakTimestamp: o
    } = r;
    if (null == l || null == i || !(!a && null != o)) return;
    let c = w.Z.getGuild(i),
      s = j.Z.getChannel(l),
      u = T.Z.getStageInstanceByChannel(l);
    null != c && null != s && null != u && K.Z.showNotification((0, Z.EB)(c, 128), s.name, X.intl.formatToPlainString(X.t.sqnsSP, {
      channelName: (0, b.F6)(s, V.default, k.Z),
      channelTopic: null == u ? true : u.topic
    }), {
      notif_type: "Stage Speak Invite"
    }, {
      isUserAvatar: false
    })
  },
  STAGE_INSTANCE_UPDATE: function(e) {
    let {
      instance: t
    } = e;
    if (es() || !t.send_start_notification || eu(t.channel_id)) returnfalse;
    let n = V.default.getCurrentUser(),
      r = w.Z.getGuild(t.guild_id),
      i = j.Z.getChannel(t.channel_id),
      a = V.default.getUser(t.host_id);
    if (null == n || null == i || null == r || null == a || !(0, O.LL)(n, a, i) || !D.Z.can(l.$e(Y.Plq.CONNECT, Y.Plq.VIEW_CHANNEL), i) || ea.has(t.id)) returnfalse;
    ea.add(t.id), K.Z.showNotification((0, Z.EB)(r, 128), X.intl.formatToPlainString(X.t.bZ4Okd, {
      guildName: r.name
    }), X.intl.formatToPlainString(X.t.qTelnO, {
      username: G.ZP.getName(r.id, i.id, a),
      topic: t.topic
    }), {
      notif_type: "STAGE_INSTANCE_CREATE",
      guild_id: r.id,
      channel_id: i.id
    }, {
      onClick() {
        (0, N.Cq)(i)
      },
      isUserAvatar: false
    })
  },
  STAGE_INSTANCE_DELETE: function(e) {
    let {
      instance: t
    } = e;
    ea.delete(t.id)
  },
  GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
    let {
      guildScheduledEvent: t
    } = e;
    if (es() || null == t.notification_type) returnfalse;
    t.notification_type === q.sy.EVENT_START && (t.entity_type === q.WX.STAGE_INSTANCE || t.entity_type === q.WX.VOICE ? function(e) {
      if (es()) return;
      let t = e.channel_id;
      if (null == t || eu(t)) return;
      let n = V.default.getCurrentUser(),
        r = w.Z.getGuild(e.guild_id),
        i = j.Z.getChannel(e.channel_id),
        a = V.default.getUser(e.host_id);
      if (null != n && null != i && null != r && null != a && D.Z.can(l.$e(Y.Plq.CONNECT, Y.Plq.VIEW_CHANNEL), i)) K.Z.showNotification((0, Z.EB)(r, 128), X.intl.formatToPlainString(X.t.bOu6Wn, {
        guildName: r.name
      }), X.intl.formatToPlainString(X.t.GV9L8u, {
        topic: e.name,
        username: G.ZP.getName(r.id, i.id, a)
      }), {
        notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
        guild_id: r.id,
        channel_id: i.id
      }, {
        onClick() {
          e.entity_type === q.WX.STAGE_INSTANCE && (0, N.Cq)(i), e.entity_type === q.WX.VOICE && f.default.selectVoiceChannel(i.id)
        },
        isUserAvatar: false
      })
    }(t) : t.entity_type === q.WX.EXTERNAL && function(e) {
      if (es()) return;
      let t = V.default.getCurrentUser(),
        n = w.Z.getGuild(e.guild_id);
      if (null != t && null != n) K.Z.showNotification((0, Z.EB)(n, 128), X.intl.formatToPlainString(X.t.bOu6Wn, {
        guildName: n.name
      }), X.intl.formatToPlainString(X.t.mYyaRB, {
        topic: e.name
      }), {
        notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
        guild_id: n.id
      }, {
        onClick() {
          u.Z.transitionToGuildSync(e.guild_id), (0, h.bO)({
            eventId: e.id
          })
        },
        isUserAvatar: false
      })
    }(t))
  },
  THREAD_CREATE: function(e) {
    var t;
    let {
      channel: n,
      isNewlyCreated: r
    } = e;
    if (es()) returnfalse;
    let l = j.Z.getChannel(n.parent_id);
    if (null == l || !Y.TPd.GUILD_THREADS_ONLY.has(l.type) || !r || !(0, O.FI)(n, l, !el)) returnfalse;
    let {
      author: i,
      user: a
    } = (0, m.MC)(n);
    if (null == a) returnfalse;
    let o = w.Z.getGuild(l.guild_id);
    if (null == o) returnfalse;
    let c = X.intl.formatToPlainString(X.t["2IGVl5"], {
        channelName: l.name,
        guildName: o.name
      }),
      s = X.intl.formatToPlainString(X.t.jPhTvT, {
        channelName: n.name,
        userUsername: null != (t = null == i ? true : i.nick) ? t : null == a ? true : a.username
      }),
      u = a.getAvatarURL(true, 128);
    K.Z.showNotification(u, c, s, {
      notif_type: "THREAD_CREATE",
      notif_user_id: a.id
    }, {
      onClick() {
        (0, x.ok)(n)
      },
      isUserAvatar: true
    })
  },
  GENERIC_PUSH_NOTIFICATION_SENT: function(e) {
    let t, {
      icon: n,
      title: r,
      body: l,
      route: i,
      trackingType: a,
      tag: o
    } = e;
    if (es() || null == r || null == l || null == a || "reactions_push_notification" === a.toLowerCase()) returnfalse;
    K.Z.showNotification(n, r, l, {
      notif_type: a
    }, {
      onClick() {
        null != i && ((0, E.Z)(i), d.default.clickedNotification())
      },
      tag: o,
      isUserAvatar: false
    }).then(e => {
      null != e && null != t && ec.track(t, e.notification, e.trackingProps)
    })
  },
  REACTION_NOTIFICATION_SENT: function(e) {
    let {
      icon: t,
      title: n,
      body: r,
      route: l,
      trackingType: i,
      message: a
    } = e;
    if (es() || null == n || null == r || null == i) returnfalse;
    let o = a.channel_id;
    if (null == o || L.Z.getCurrentlySelectedChannelId() === o && el) returnfalse;
    K.Z.showNotification(t, n, r, {
      notif_type: i
    }, {
      onClick() {
        null != l && ((0, E.Z)(l), d.default.clickedNotification())
      },
      isUserAvatar: true
    }).then(e => {
      null != e && null != o && ec.track(o, e.notification, e.trackingProps)
    })
  },
  WINDOW_HIDDEN: function() {
    let e = (0, H.isWindows)(),
      t = (0, H.isLinux)();
    if (!(!a.K.get(er, false) && H.isPlatformEmbedded && (e || t))) returnfalse;
    let r = false;
    return null != ei && (r = eo.includes(ei)), !!r && (K.Z.showNotification(n(95045), X.intl.string(X.t.VSgOVg), X.intl.string(X.t["+J/F66"]), {
      notif_type: "WINDOW_HIDDEN"
    }, {
      overrideStreamerMode: true,
      onClick: () => {
        (0, C.uL)(Y.Z5c.SETTINGS(e ? "windows" : "linux"))
      },
      onShown: () => {
        a.K.set(er, true)
      },
      isUserAvatar: false
    }), false)
  },
  LOGOUT: function() {
    return a.K.remove(er), false
  },
  CONNECTION_OPEN: function(e) {
    let {
      countryCode: t,
      guilds: n
    } = e;
    ei = t, ea.clear(), n.forEach(e => e.stage_instances.forEach(e => ea.add(e.id)))
  },
  MESSAGE_REMINDER_DUE: function(e) {
    let {
      savedMessage: t
    } = e;
    if (es()) returnfalse;
    let n = t.message;
    if (null == n || null == n.author) returnfalse;
    let r = j.Z.getChannel(t.saveData.channelId);
    if (null == r) returnfalse;
    let {
      icon: l,
      body: i
    } = (0, O.Xi)(r, n, n.author);
    K.Z.showNotification(l, X.intl.string(X.t.IjZJB5), i, {
      notif_type: "MESSAGE_REMINDER_DUE"
    }, {
      onClick() {
        (0, E.Z)(Y.Z5c.CHANNEL(null == r ? true : r.getGuildId(), r.id, n.id))
      },
      isUserAvatar: true
    })
  }
})