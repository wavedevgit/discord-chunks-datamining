/** Chunk was on 60831 **/
/** chunk id: 974180, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => ee,
  yk: () => et
}), require("./388685.js"), require("./539854.js");
var l, Chunk149765 = require("./149765.js"),
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
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      J(e, t, n[t])
    })
  }
  return e
}
let ee = "message1",
  et = .4,
  en = (null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.features.supports("notifications")) ? 20 : 1,
  el = "discord_dismissed_notification_shown",
  ei = document.hasFocus(),
  er = null,
  ea = new Set,
  eo = ["FR", "GF", "PF", "TF", "RE", "GP", "MQ", "YT", "NC", "PM", "WF"],
  es = new class {
    track(e, t, n) {
      let l = this._channels[e];
      for (null == l && (l = [], this._channels[e] = l), l.push({
          notification: t,
          trackingProps: n
        }); l.length > en;) {
        var i;
        let e = l.shift();
        (null == e || null == (i = e.notification) ? true : i.close) != null && (e.notification.close(), B.default.track(Y.rMx.NOTIFICATION_ACTION, $({
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

function eu() {
  return !!(R.Z.getDesktopType() === Y.qrD.NEVER || L.Z.getStatus() === Y.Skl.DND || P.QZ.getSetting())
}

function ec(e) {
  return null != V.Z.getVoiceStateForChannel(e)
}
class ed extends(l = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(h.Z, A.Z, j.Z, y.Z, D.Z, R.Z, w.Z, U.Z, M.Z, L.Z, v.Z, G.Z, F.default, V.Z)
  }
}
J(ed, "displayName", "NotificationStore"), new ed(Chunk570140.Z, __OVERLAY__ ? {} : {
  NOTIFICATIONS_SET_PERMISSION_STATE: function(e) {
    let {
      enabled: t
    } = e;
    if (t === Y.$Ab.ENABLED && !H.isPlatformEmbedded) {
      let e = !(0, m.QU)("NotificationStore.handleSetHavePermission");
      Q.Z.showNotification(n(910653), q.intl.string(q.t.VSgOVg), q.intl.string(q.t["1UJvqc"]), {
        notif_type: "NOTIFICATIONS_SET_PERMISSION_STATE"
      }, {
        omitViewTracking: e,
        sound: ee,
        volume: et,
        tag: "hello",
        onClick: () => {
          window.focus()
        },
        isUserAvatar: false
      })
    }
  },
  NOTIFICATION_CREATE: function(e) {
    let {
      icon: t,
      title: n,
      body: l,
      trackingProps: i,
      options: r
    } = e;
    return !eu() && (Q.Z.showNotification(t, n, l, i, r), false)
  },
  WINDOW_FOCUS: function(e) {
    if (ei = e.focused) {
      let e = M.Z.getChannelId();
      null != e && es.clearChannel(e)
    }
  },
  MESSAGE_CREATE: function(e) {
    var t, l, i;
    let {
      channelId: r,
      message: a,
      optimistic: s
    } = e;
    if (s) returnfalse;
    let c = A.Z.getChannel(r),
      f = F.default.getUser(null == (t = a.author) ? true : t.id),
      g = F.default.getCurrentUser();
    if (null == c || null == f || null == g) returnfalse;
    let p = (0, _.eF)(a, r, !ei),
      E = R.Z.getNotifyMessagesInSelectedChannel() && (0, _.N_)(a, r);
    if (!p && !E || a.type === Y.uaV.CHANGELOG && (null == a.changelog_id || h.Z.latestChangelogId() !== a.changelog_id)) returnfalse;
    let N = !R.Z.isSoundDisabled(ee);
    if (E && (N && Q.Z.playNotificationSound("message3", .4), !ei) || !p) returnfalse;
    let O = n(808506).default,
      y = n(624864).Z;
    if (null != O.getFocusedPID() && !y.isNotificationDisabled(X.n0.TextChat) && !G.Z.disableNotifications) returnfalse;
    let {
      icon: I,
      title: b,
      body: v,
      emoji: x
    } = (0, _.Xi)(c, a, f), P = !(0, m._x)("NotificationStore.handleMessage", null == g ? true : g.id);
    if (o.Z.dispatch({
        type: "RPC_NOTIFICATION_CREATE",
        channelId: c.id,
        message: a,
        icon: I,
        title: b,
        body: v
      }), (0, T.R)(a, c.guild_id), R.Z.getDesktopType() === Y.qrD.NEVER) return N && Q.Z.playNotificationSound(ee, et), false;
    let Z = null != (i = D.Z.getMessage(r, a.id)) ? i : (0, C.e5)(a);
    Q.Z.showNotification(I, b, v, {
      notif_type: "MESSAGE_CREATE",
      notif_user_id: null == (l = a.author) ? true : l.id,
      message_id: a.id,
      message_type: a.type,
      channel_id: c.id,
      channel_type: c.type,
      guild_id: c.guild_id,
      badge: (0, k.Ex)(Z, g)
    }, {
      omitViewTracking: P,
      tag: a.id,
      sound: N ? ee : true,
      volume: et,
      onClick() {
        (0, S.Kh)(c.id), (c.type === Y.d4z.GUILD_VOICE || c.type === Y.d4z.GUILD_STAGE_VOICE) && u.Z.updateChatOpen(c.id, true), d.default.clickedNotification()
      },
      isUserAvatar: true,
      messageRecord: Z,
      fallbackDeepLink: (0, Q.W)(Y.Z5c.CHANNEL(c.guild_id, c.id, a.id)),
      emoji: x
    }).then(e => {
      null != e && es.track(c.id, e.notification, e.trackingProps)
    })
  },
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    return null != t && es.clearChannel(t), false
  },
  MESSAGE_ACK: function(e) {
    let {
      channelId: t
    } = e;
    return es.clearChannel(t), false
  },
  ACTIVITY_START: function(e) {
    let {
      userId: t,
      activity: n
    } = e;
    if (eu() || n.type !== Y.IIU.PLAYING) returnfalse;
    {
      let e = F.default.getUser(t);
      if (null == e) returnfalse;
      let l = K.ZP.getName(e),
        i = n.name,
        r = e.getAvatarURL(true, 128),
        a = q.intl.string(q.t.XoTWsI),
        o = q.intl.formatToPlainString(q.t.o4Aipn, {
          username: l,
          gameName: i
        });
      return Q.Z.showNotification(r, a, o, {
        notif_type: "ACTIVITY_START",
        activity_type: Y.IIU.PLAYING,
        notif_user_id: t,
        activity_name: i
      }, {
        sound: "message2",
        playSoundIfDisabled: false,
        volume: .4,
        onClick() {
          s.Z.openPrivateChannel({
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
    if (eu()) return;
    let n = F.default.getCurrentUser();
    if (null == n) return;
    let l = t.find(e => e.userId === n.id);
    if (null == l) return;
    let {
      channelId: i,
      guildId: r,
      suppress: a,
      requestToSpeakTimestamp: o
    } = l;
    if (null == i || null == r || !(!a && null != o)) return;
    let s = j.Z.getGuild(r),
      u = A.Z.getChannel(i),
      c = v.Z.getStageInstanceByChannel(i);
    null != s && null != u && null != c && Q.Z.showNotification((0, Z.EB)(s, 128), u.name, q.intl.formatToPlainString(q.t.sqnsSP, {
      channelName: (0, p.F6)(u, F.default, U.Z),
      channelTopic: null == c ? true : c.topic
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
    if (eu() || !t.send_start_notification || ec(t.channel_id)) returnfalse;
    let n = F.default.getCurrentUser(),
      l = j.Z.getGuild(t.guild_id),
      r = A.Z.getChannel(t.channel_id),
      a = F.default.getUser(t.host_id);
    if (null == n || null == r || null == l || null == a || !(0, _.LL)(n, a, r) || !w.Z.can(i.$e(Y.Plq.CONNECT, Y.Plq.VIEW_CHANNEL), r) || ea.has(t.id)) returnfalse;
    ea.add(t.id), Q.Z.showNotification((0, Z.EB)(l, 128), q.intl.formatToPlainString(q.t.bZ4Okd, {
      guildName: l.name
    }), q.intl.formatToPlainString(q.t.qTelnO, {
      username: W.ZP.getName(l.id, r.id, a),
      topic: t.topic
    }), {
      notif_type: "STAGE_INSTANCE_CREATE",
      guild_id: l.id,
      channel_id: r.id
    }, {
      onClick() {
        (0, b.Cq)(r)
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
    if (eu() || null == t.notification_type) returnfalse;
    t.notification_type === z.sy.EVENT_START && (t.entity_type === z.WX.STAGE_INSTANCE || t.entity_type === z.WX.VOICE ? function(e) {
      if (eu()) return;
      let t = e.channel_id;
      if (null == t || ec(t)) return;
      let n = F.default.getCurrentUser(),
        l = j.Z.getGuild(e.guild_id),
        r = A.Z.getChannel(e.channel_id),
        a = F.default.getUser(e.host_id);
      if (null != n && null != r && null != l && null != a && w.Z.can(i.$e(Y.Plq.CONNECT, Y.Plq.VIEW_CHANNEL), r)) Q.Z.showNotification((0, Z.EB)(l, 128), q.intl.formatToPlainString(q.t.bOu6Wn, {
        guildName: l.name
      }), q.intl.formatToPlainString(q.t.GV9L8u, {
        topic: e.name,
        username: W.ZP.getName(l.id, r.id, a)
      }), {
        notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
        guild_id: l.id,
        channel_id: r.id
      }, {
        onClick() {
          e.entity_type === z.WX.STAGE_INSTANCE && (0, b.Cq)(r), e.entity_type === z.WX.VOICE && f.default.selectVoiceChannel(r.id)
        },
        isUserAvatar: false
      })
    }(t) : t.entity_type === z.WX.EXTERNAL && function(e) {
      if (eu()) return;
      let t = F.default.getCurrentUser(),
        n = j.Z.getGuild(e.guild_id);
      if (null != t && null != n) Q.Z.showNotification((0, Z.EB)(n, 128), q.intl.formatToPlainString(q.t.bOu6Wn, {
        guildName: n.name
      }), q.intl.formatToPlainString(q.t.mYyaRB, {
        topic: e.name
      }), {
        notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
        guild_id: n.id
      }, {
        onClick() {
          c.Z.transitionToGuildSync(e.guild_id), (0, N.bO)({
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
      isNewlyCreated: l
    } = e;
    if (eu()) returnfalse;
    let i = A.Z.getChannel(n.parent_id);
    if (null == i || !Y.TPd.GUILD_THREADS_ONLY.has(i.type) || !l || !(0, _.FI)(n, i, !ei)) returnfalse;
    let {
      author: r,
      user: a
    } = (0, E.MC)(n);
    if (null == a) returnfalse;
    let o = j.Z.getGuild(i.guild_id);
    if (null == o) returnfalse;
    let s = q.intl.formatToPlainString(q.t["2IGVl5"], {
        channelName: i.name,
        guildName: o.name
      }),
      u = q.intl.formatToPlainString(q.t.jPhTvT, {
        channelName: n.name,
        userUsername: null != (t = null == r ? true : r.nick) ? t : null == a ? true : a.username
      }),
      c = a.getAvatarURL(true, 128);
    Q.Z.showNotification(c, s, u, {
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
      title: l,
      body: i,
      route: r,
      trackingType: a,
      tag: o
    } = e;
    if (eu() || null == l || null == i || null == a || "reactions_push_notification" === a.toLowerCase()) returnfalse;
    Q.Z.showNotification(n, l, i, {
      notif_type: a
    }, {
      onClick() {
        null != r && ((0, O.Z)(r), d.default.clickedNotification())
      },
      tag: o,
      isUserAvatar: false
    }).then(e => {
      null != e && null != t && es.track(t, e.notification, e.trackingProps)
    })
  },
  REACTION_NOTIFICATION_SENT: function(e) {
    let {
      icon: t,
      title: n,
      body: l,
      route: i,
      trackingType: r,
      message: a
    } = e;
    if (eu() || null == n || null == l || null == r) returnfalse;
    let o = a.channel_id;
    if (null == o || M.Z.getCurrentlySelectedChannelId() === o && ei) returnfalse;
    Q.Z.showNotification(t, n, l, {
      notif_type: r
    }, {
      onClick() {
        null != i && ((0, O.Z)(i), d.default.clickedNotification())
      },
      isUserAvatar: true
    }).then(e => {
      null != e && null != o && es.track(o, e.notification, e.trackingProps)
    })
  },
  WINDOW_HIDDEN: function() {
    let e = (0, H.isWindows)(),
      t = (0, H.isLinux)();
    if (!(!a.K.get(el, false) && H.isPlatformEmbedded && (e || t))) returnfalse;
    let l = false;
    return null != er && (l = eo.includes(er)), !!l && (Q.Z.showNotification(n(95045), q.intl.string(q.t.VSgOVg), q.intl.string(q.t["+J/F66"]), {
      notif_type: "WINDOW_HIDDEN"
    }, {
      overrideStreamerMode: true,
      onClick: () => {
        (0, I.uL)(Y.Z5c.SETTINGS(e ? "windows" : "linux"))
      },
      onShown: () => {
        a.K.set(el, true)
      },
      isUserAvatar: false
    }), false)
  },
  LOGOUT: function() {
    return a.K.remove(el), false
  },
  CONNECTION_OPEN: function(e) {
    let {
      countryCode: t,
      guilds: n
    } = e;
    er = t, ea.clear(), n.forEach(e => e.stage_instances.forEach(e => ea.add(e.id)))
  },
  MESSAGE_REMINDER_DUE: function(e) {
    let {
      savedMessage: t
    } = e;
    if (eu()) returnfalse;
    let n = t.message;
    if (null == n || null == n.author) returnfalse;
    let l = A.Z.getChannel(t.saveData.channelId);
    if (null == l) returnfalse;
    let {
      icon: i,
      body: r
    } = (0, _.Xi)(l, n, n.author);
    Q.Z.showNotification(i, q.intl.string(q.t.IjZJB5), r, {
      notif_type: "MESSAGE_REMINDER_DUE"
    }, {
      onClick() {
        (0, O.Z)(Y.Z5c.CHANNEL(null == l ? true : l.getGuildId(), l.id, n.id))
      },
      isUserAvatar: true
    })
  }
})