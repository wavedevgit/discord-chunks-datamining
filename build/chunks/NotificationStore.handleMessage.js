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
  Chunk106371 = require("./106371.js"),
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
        (null == e || null == (i = e.notification) ? true : i.close) != null && (e.notification.close(), W.default.track(z.rMx.NOTIFICATION_ACTION, $({
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
        t.close(), W.default.track(z.rMx.NOTIFICATION_ACTION, $({
          action: "ACK"
        }, n))
      }))
    }
    constructor() {
      J(this, "_channels", {})
    }
  };

function eu() {
  return !!(Chunk292959.Z.getDesktopType() === Chunk981631.qrD.NEVER || Chunk885110.Z.getStatus() === Chunk981631.Skl.DND || Chunk695346.QZ.getSetting())
}

function ec(e) {
  return null != B.Z.getVoiceStateForChannel(e)
}
class ed extends(l = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk594174.default, Chunk592125.Z, Chunk292959.Z, Chunk430824.Z, Chunk427679.Z, Chunk699516.Z, Chunk496675.Z, Chunk979651.Z, Chunk355298.Z)
  }
}
J(ed, "displayName", "NotificationStore"), new ed(Chunk570140.Z, __OVERLAY__ ? {} : {
  NOTIFICATIONS_SET_PERMISSION_STATE: function(e) {
    let {
      enabled: t
    } = e;
    if (t === z.$Ab.ENABLED && !K.isPlatformEmbedded) {
      let e = !(0, m.QU)("NotificationStore.handleSetHavePermission");
      Y.Z.showNotification(n(910653), q.intl.string(q.t.VSgOVl), q.intl.string(q.t["1UJvqa"]), {
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
    return !eu() && (Y.Z.showNotification(t, n, l, i, r), false)
  },
  WINDOW_FOCUS: function(e) {
    if (ei = e.focused) {
      let e = L.Z.getChannelId();
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
    let c = j.Z.getChannel(r),
      f = F.default.getUser(null == (t = a.author) ? true : t.id),
      g = F.default.getCurrentUser();
    if (null == c || null == f || null == g) returnfalse;
    let p = (0, T.eF)(a, r, !ei),
      E = w.Z.getNotifyMessagesInSelectedChannel() && (0, T.N_)(a, r);
    if (!p && !E || a.type === z.uaV.CHANGELOG && (null == a.changelog_id || h.Z.latestChangelogId() !== a.changelog_id)) returnfalse;
    let N = !w.Z.isSoundDisabled(ee);
    if (E && (N && Y.Z.playNotificationSound("message3", .4), !ei) || !p) returnfalse;
    let y = n(808506).default,
      O = n(624864).Z,
      {
        OverlayNotificationDisabledSetting: I
      } = n(486016);
    if (null != y.getFocusedPID() && !O.isNotificationDisabled(I.TEXT_CHAT) && !V.Z.disableNotifications) returnfalse;
    let {
      icon: S,
      title: v,
      body: x
    } = (0, T.Xi)(c, a, f), P = !(0, m._x)("NotificationStore.handleMessage", null == g ? true : g.id);
    if (o.Z.dispatch({
        type: "RPC_NOTIFICATION_CREATE",
        channelId: c.id,
        message: a,
        icon: S,
        title: v,
        body: x
      }), (0, C.R)(a, c.guild_id), w.Z.getDesktopType() === z.qrD.NEVER) return N && Y.Z.playNotificationSound(ee, et), false;
    let A = null != (i = D.Z.getMessage(r, a.id)) ? i : (0, _.e5)(a);
    Y.Z.showNotification(S, v, x, {
      notif_type: "MESSAGE_CREATE",
      notif_user_id: null == (l = a.author) ? true : l.id,
      message_id: a.id,
      message_type: a.type,
      channel_id: c.id,
      channel_type: c.type,
      guild_id: c.guild_id,
      badge: (0, U.Ex)(A, g)
    }, {
      omitViewTracking: P,
      tag: a.id,
      sound: N ? ee : true,
      volume: et,
      onClick() {
        (0, b.Kh)(c.id), (c.type === z.d4z.GUILD_VOICE || c.type === z.d4z.GUILD_STAGE_VOICE) && u.Z.updateChatOpen(c.id, true), d.default.clickedNotification()
      },
      isUserAvatar: true,
      messageRecord: A,
      fallbackDeepLink: (0, Y.W)(z.Z5c.CHANNEL(c.guild_id, c.id, a.id))
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
    if (eu() || n.type !== z.IIU.PLAYING) returnfalse;
    {
      let e = F.default.getUser(t);
      if (null == e) returnfalse;
      let l = Q.ZP.getName(e),
        i = n.name,
        r = e.getAvatarURL(true, 128),
        a = q.intl.string(q.t.XoTWsL),
        o = q.intl.formatToPlainString(q.t.o4Aipq, {
          username: l,
          gameName: i
        });
      return Y.Z.showNotification(r, a, o, {
        notif_type: "ACTIVITY_START",
        activity_type: z.IIU.PLAYING,
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
    let s = R.Z.getGuild(r),
      u = j.Z.getChannel(i),
      c = x.Z.getStageInstanceByChannel(i);
    null != s && null != u && null != c && Y.Z.showNotification((0, Z.EB)(s, 128), u.name, q.intl.formatToPlainString(q.t.sqnsSE, {
      channelName: (0, p.F6)(u, F.default, M.Z),
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
      l = R.Z.getGuild(t.guild_id),
      r = j.Z.getChannel(t.channel_id),
      a = F.default.getUser(t.host_id);
    if (null == n || null == r || null == l || null == a || !(0, T.LL)(n, a, r) || !k.Z.can(i.$e(z.Plq.CONNECT, z.Plq.VIEW_CHANNEL), r) || ea.has(t.id)) returnfalse;
    ea.add(t.id), Y.Z.showNotification((0, Z.EB)(l, 128), q.intl.formatToPlainString(q.t.bZ4OkZ, {
      guildName: l.name
    }), q.intl.formatToPlainString(q.t.qTelnJ, {
      username: H.ZP.getName(l.id, r.id, a),
      topic: t.topic
    }), {
      notif_type: "STAGE_INSTANCE_CREATE",
      guild_id: l.id,
      channel_id: r.id
    }, {
      onClick() {
        (0, v.Cq)(r)
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
    t.notification_type === X.sy.EVENT_START && (t.entity_type === X.WX.STAGE_INSTANCE || t.entity_type === X.WX.VOICE ? function(e) {
      if (eu()) return;
      let t = e.channel_id;
      if (null == t || ec(t)) return;
      let n = F.default.getCurrentUser(),
        l = R.Z.getGuild(e.guild_id),
        r = j.Z.getChannel(e.channel_id),
        a = F.default.getUser(e.host_id);
      if (null != n && null != r && null != l && null != a && k.Z.can(i.$e(z.Plq.CONNECT, z.Plq.VIEW_CHANNEL), r)) Y.Z.showNotification((0, Z.EB)(l, 128), q.intl.formatToPlainString(q.t.bOu6Wl, {
        guildName: l.name
      }), q.intl.formatToPlainString(q.t.GV9L8v, {
        topic: e.name,
        username: H.ZP.getName(l.id, r.id, a)
      }), {
        notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
        guild_id: l.id,
        channel_id: r.id
      }, {
        onClick() {
          e.entity_type === X.WX.STAGE_INSTANCE && (0, v.Cq)(r), e.entity_type === X.WX.VOICE && f.default.selectVoiceChannel(r.id)
        },
        isUserAvatar: false
      })
    }(t) : t.entity_type === X.WX.EXTERNAL && function(e) {
      if (eu()) return;
      let t = F.default.getCurrentUser(),
        n = R.Z.getGuild(e.guild_id);
      if (null != t && null != n) Y.Z.showNotification((0, Z.EB)(n, 128), q.intl.formatToPlainString(q.t.bOu6Wl, {
        guildName: n.name
      }), q.intl.formatToPlainString(q.t.mYyaRE, {
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
    let i = j.Z.getChannel(n.parent_id);
    if (null == i || !z.TPd.GUILD_THREADS_ONLY.has(i.type) || !l || !(0, T.FI)(n, i, !ei)) returnfalse;
    let {
      author: r,
      user: a
    } = (0, E.MC)(n);
    if (null == a) returnfalse;
    let o = R.Z.getGuild(i.guild_id);
    if (null == o) returnfalse;
    let s = q.intl.formatToPlainString(q.t["2IGVl5"], {
        channelName: i.name,
        guildName: o.name
      }),
      u = q.intl.formatToPlainString(q.t.jPhTvb, {
        channelName: n.name,
        userUsername: null != (t = null == r ? true : r.nick) ? t : null == a ? true : a.username
      }),
      c = a.getAvatarURL(true, 128);
    Y.Z.showNotification(c, s, u, {
      notif_type: "THREAD_CREATE",
      notif_user_id: a.id
    }, {
      onClick() {
        (0, P.ok)(n)
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
    if (eu() || null == l || null == i || null == a || "reactions_push_notification" === a) returnfalse;
    Y.Z.showNotification(n, l, i, {
      notif_type: a
    }, {
      onClick() {
        null != r && ((0, y.Z)(r), d.default.clickedNotification())
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
    let {
      enableInAppNotifications: o
    } = I.Z.getCurrentConfig({
      location: "desktopNotification"
    }, {
      autoTrackExposure: true
    });
    if (!o) returnfalse;
    let s = a.channel_id;
    if (null == s || L.Z.getCurrentlySelectedChannelId() === s && ei) returnfalse;
    Y.Z.showNotification(t, n, l, {
      notif_type: r
    }, {
      onClick() {
        null != i && ((0, y.Z)(i), d.default.clickedNotification())
      },
      isUserAvatar: true
    }).then(e => {
      null != e && null != s && es.track(s, e.notification, e.trackingProps)
    })
  },
  WINDOW_HIDDEN: function() {
    let e = (0, Chunk358085.isWindows)(),
      t = (0, Chunk358085.isLinux)();
    if (!(!Chunk433517.K.get(el, false) && Chunk358085.isPlatformEmbedded && (module || exports))) returnfalse;
    let l = false;
    return null != er && (l = eo.includes(er)), !!l && (Chunk654769.Z.showNotification(require("./95045.js"), Chunk388032.intl.string(Chunk388032.t.VSgOVl), Chunk388032.intl.string(Chunk388032.t["+J/F6+"]), {
      notif_type: "WINDOW_HIDDEN"
    }, {
      overrideStreamerMode: true,
      onClick: () => {
        (0, Chunk703656.uL)(Chunk981631.Z5c.SETTINGS(module ? "windows" : "linux"))
      },
      onShown: () => {
        Chunk433517.K.set(el, true)
      },
      isUserAvatar: false
    }), false)
  },
  LOGOUT: function() {
    return Chunk433517.K.remove(el), false
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
    let l = j.Z.getChannel(t.saveData.channelId);
    if (null == l) returnfalse;
    let {
      icon: i,
      body: r
    } = (0, T.Xi)(l, n, n.author);
    Y.Z.showNotification(i, q.intl.string(q.t.IjZJBw), r, {
      notif_type: "MESSAGE_REMINDER_DUE"
    }, {
      onClick() {
        (0, y.Z)(z.Z5c.CHANNEL(null == l ? true : l.getGuildId(), l.id, n.id))
      },
      isUserAvatar: true
    })
  }
})