/** Chunk was on 70205 **/
/** chunk id: 974180, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Ay: () => ti,
  yk: () => tl
}), require("./388685.js"), require("./539854.js");
var i, Chunk149765 = require("./149765.js"),
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
  Chunk11352 = require("./11352.js"),
  Chunk671105 = require("./671105.js"),
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
  Chunk74538 = require("./74538.js"),
  Chunk51144 = require("./51144.js"),
  Chunk654769 = require("./654769.js"),
  Chunk981631 = require("./981631.js"),
  Chunk765305 = require("./765305.js"),
  Chunk388032 = require("./388032.jsx");

function te(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = n, t
}

function tn(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = null != arguments[e] ? arguments[e] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
      return Object.getOwnPropertyDescriptor(n, t).enumerable
    }))), i.forEach(function(e) {
      te(t, e, n[e])
    })
  }
  return t
}
let ti = "message1",
  tl = .4,
  ta = (null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.features.supports("notifications")) ? 20 : 1,
  tr = "discord_dismissed_notification_shown",
  to = document.hasFocus(),
  tu = null,
  ts = new Set,
  td = ["FR", "GF", "PF", "TF", "RE", "GP", "MQ", "YT", "NC", "PM", "WF"],
  tc = new class {
    track(t, e, n) {
      let i = this._channels[t];
      for (null == i && (i = [], this._channels[t] = i), i.push({
          notification: e,
          trackingProps: n
        }); i.length > ta;) {
        var l;
        let t = i.shift();
        (null == t || null == (l = t.notification) ? true : l.close) != null && (t.notification.close(), B.default.track(Q.rMx.NOTIFICATION_ACTION, tn({
          action: "REMOVE"
        }, t.trackingProps)))
      }
    }
    clearChannel(t) {
      let e = this._channels[t];
      null != e && (delete this._channels[t], e.forEach(t => {
        let {
          notification: e,
          trackingProps: n
        } = t;
        e.close(), B.default.track(Q.rMx.NOTIFICATION_ACTION, tn({
          action: "ACK"
        }, n))
      }))
    }
    constructor() {
      te(this, "_channels", {})
    }
  };

function tf() {
  return !!(Chunk292959.Z.getDesktopType() === Chunk981631.qrD.NEVER || Chunk885110.Z.getStatus() === Chunk981631.Skl.DND || Chunk695346.QZ.getSetting())
}

function tg(t) {
  return null != q.Z.getVoiceStateForChannel(t)
}
class tE extends(i = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk594174.default, Chunk592125.Z, Chunk292959.Z, Chunk430824.Z, Chunk427679.Z, Chunk699516.Z, Chunk496675.Z, Chunk979651.Z, Chunk355298.Z)
  }
}
te(tE, "displayName", "NotificationStore"), new tE(Chunk570140.Z, __OVERLAY__ ? {} : {
  NOTIFICATIONS_SET_PERMISSION_STATE: function(t) {
    let {
      enabled: e
    } = t;
    if (e === Q.$Ab.ENABLED && !X.isPlatformEmbedded) {
      let t = !(0, Z.QU)("NotificationStore.handleSetHavePermission");
      K.Z.showNotification(n(910653), tt.intl.string(tt.t.VSgOVl), tt.intl.string(tt.t["1UJvqa"]), {
        notif_type: "NOTIFICATIONS_SET_PERMISSION_STATE"
      }, {
        omitViewTracking: t,
        sound: ti,
        volume: tl,
        tag: "hello",
        onClick: () => {
          window.focus()
        },
        isUserAvatar: false
      })
    }
  },
  NOTIFICATION_CREATE: function(t) {
    let {
      icon: e,
      title: n,
      body: i,
      trackingProps: l,
      options: a
    } = t;
    return !tf() && (K.Z.showNotification(e, n, i, l, a), false)
  },
  WINDOW_FOCUS: function(t) {
    if (to = t.focused) {
      let t = H.Z.getChannelId();
      null != t && tc.clearChannel(t)
    }
  },
  MESSAGE_CREATE: function(t) {
    var e, i, l, a, r;
    let {
      channelId: u,
      message: d,
      optimistic: f
    } = t;
    if (f) returnfalse;
    let g = k.Z.getChannel(u),
      _ = z.default.getUser(null == (e = d.author) ? true : e.id),
      N = z.default.getCurrentUser();
    if (null == g || null == _ || null == N) returnfalse;
    let T = (0, h.eF)(d, u, !to),
      S = G.Z.getNotifyMessagesInSelectedChannel() && (0, h.N_)(d, u);
    if (!T && !S || d.type === Q.uaV.CHANGELOG && (null == d.changelog_id || E.Z.latestChangelogId() !== d.changelog_id)) returnfalse;
    let p = !G.Z.isSoundDisabled(ti),
      v = j.ZP.canUseCustomNotificationSounds(N),
      y = A.Y.getCurrentConfig({
        location: "NotificationStore"
      }).enabled,
      O = v && y && p ? null != (a = (0, m.bb)(null != (l = g.guild_id) ? l : Q.aIL, u)) ? a : (0, m.iD)(g.guild_id) : true;
    if (S && (p && K.Z.playNotificationSound("message3", .4, O), !to) || !T) returnfalse;
    let D = n(808506).default,
      U = n(624864).Z,
      {
        OverlayNotificationDisabledSetting: b
      } = n(486016);
    if (null != D.getFocusedPID() && !U.isNotificationDisabled(b.TEXT_CHAT) && !x.Z.disableNotifications) returnfalse;
    let {
      icon: R,
      title: L,
      body: w
    } = (0, h.Xi)(g, d, _), F = !(0, Z._x)("NotificationStore.handleMessage", null == N ? true : N.id);
    if (o.Z.dispatch({
        type: "RPC_NOTIFICATION_CREATE",
        channelId: g.id,
        message: d,
        icon: R,
        title: L,
        body: w
      }), (0, I.R)(d, g.guild_id), G.Z.getDesktopType() === Q.qrD.NEVER) return p && K.Z.playNotificationSound(ti, tl, O), false;
    let H = null != (r = M.Z.getMessage(u, d.id)) ? r : (0, C.e5)(d);
    K.Z.showNotification(R, L, w, {
      notif_type: "MESSAGE_CREATE",
      notif_user_id: null == (i = d.author) ? true : i.id,
      message_id: d.id,
      message_type: d.type,
      channel_id: g.id,
      channel_type: g.type,
      guild_id: g.guild_id,
      badge: (0, V.Ex)(H, N)
    }, {
      omitViewTracking: F,
      tag: d.id,
      sound: p ? ti : true,
      soundpack: O,
      volume: tl,
      onClick() {
        (0, P.Kh)(g.id), (g.type === Q.d4z.GUILD_VOICE || g.type === Q.d4z.GUILD_STAGE_VOICE) && s.Z.updateChatOpen(g.id, true), c.default.clickedNotification()
      },
      isUserAvatar: true,
      messageRecord: H,
      fallbackDeepLink: (0, K.W)(Q.Z5c.CHANNEL(g.guild_id, g.id, d.id))
    }).then(t => {
      null != t && tc.track(g.id, t.notification, t.trackingProps)
    })
  },
  CHANNEL_SELECT: function(t) {
    let {
      channelId: e
    } = t;
    return null != e && tc.clearChannel(e), false
  },
  MESSAGE_ACK: function(t) {
    let {
      channelId: e
    } = t;
    return tc.clearChannel(e), false
  },
  ACTIVITY_START: function(t) {
    let {
      userId: e,
      activity: n
    } = t;
    if (tf() || n.type !== Q.IIU.PLAYING) returnfalse;
    {
      let t = z.default.getUser(e);
      if (null == t) returnfalse;
      let i = J.ZP.getName(t),
        l = n.name,
        a = t.getAvatarURL(true, 128),
        r = tt.intl.string(tt.t.XoTWsL),
        o = tt.intl.formatToPlainString(tt.t.o4Aipq, {
          username: i,
          gameName: l
        });
      return K.Z.showNotification(a, r, o, {
        notif_type: "ACTIVITY_START",
        activity_type: Q.IIU.PLAYING,
        notif_user_id: e,
        activity_name: l
      }, {
        sound: "message2",
        playSoundIfDisabled: false,
        volume: .4,
        onClick() {
          u.Z.openPrivateChannel({
            recipientIds: e
          })
        },
        isUserAvatar: true
      }), false
    }
  },
  VOICE_STATE_UPDATES: function(t) {
    let {
      voiceStates: e
    } = t;
    if (tf()) return;
    let n = z.default.getCurrentUser();
    if (null == n) return;
    let i = e.find(t => t.userId === n.id);
    if (null == i) return;
    let {
      channelId: l,
      guildId: a,
      suppress: r,
      requestToSpeakTimestamp: o
    } = i;
    if (null == l || null == a || !(!r && null != o)) return;
    let u = L.Z.getGuild(a),
      s = k.Z.getChannel(l),
      d = D.Z.getStageInstanceByChannel(l);
    null != u && null != s && null != d && K.Z.showNotification((0, R.EB)(u, 128), s.name, tt.intl.formatToPlainString(tt.t.sqnsSE, {
      channelName: (0, _.F6)(s, z.default, F.Z),
      channelTopic: null == d ? true : d.topic
    }), {
      notif_type: "Stage Speak Invite"
    }, {
      isUserAvatar: false
    })
  },
  STAGE_INSTANCE_UPDATE: function(t) {
    let {
      instance: e
    } = t;
    if (tf() || !e.send_start_notification || tg(e.channel_id)) returnfalse;
    let n = z.default.getCurrentUser(),
      i = L.Z.getGuild(e.guild_id),
      a = k.Z.getChannel(e.channel_id),
      r = z.default.getUser(e.host_id);
    if (null == n || null == a || null == i || null == r || !(0, h.LL)(n, r, a) || !w.Z.can(l.$e(Q.Plq.CONNECT, Q.Plq.VIEW_CHANNEL), a) || ts.has(e.id)) returnfalse;
    ts.add(e.id), K.Z.showNotification((0, R.EB)(i, 128), tt.intl.formatToPlainString(tt.t.bZ4OkZ, {
      guildName: i.name
    }), tt.intl.formatToPlainString(tt.t.qTelnJ, {
      username: Y.ZP.getName(i.id, a.id, r),
      topic: e.topic
    }), {
      notif_type: "STAGE_INSTANCE_CREATE",
      guild_id: i.id,
      channel_id: a.id
    }, {
      onClick() {
        (0, O.Cq)(a)
      },
      isUserAvatar: false
    })
  },
  STAGE_INSTANCE_DELETE: function(t) {
    let {
      instance: e
    } = t;
    ts.delete(e.id)
  },
  GUILD_SCHEDULED_EVENT_UPDATE: function(t) {
    let {
      guildScheduledEvent: e
    } = t;
    if (tf() || null == e.notification_type) returnfalse;
    e.notification_type === $.sy.EVENT_START && (e.entity_type === $.WX.STAGE_INSTANCE || e.entity_type === $.WX.VOICE ? function(t) {
      if (tf()) return;
      let e = t.channel_id;
      if (null == e || tg(e)) return;
      let n = z.default.getCurrentUser(),
        i = L.Z.getGuild(t.guild_id),
        a = k.Z.getChannel(t.channel_id),
        r = z.default.getUser(t.host_id);
      if (null != n && null != a && null != i && null != r && w.Z.can(l.$e(Q.Plq.CONNECT, Q.Plq.VIEW_CHANNEL), a)) K.Z.showNotification((0, R.EB)(i, 128), tt.intl.formatToPlainString(tt.t.bOu6Wl, {
        guildName: i.name
      }), tt.intl.formatToPlainString(tt.t.GV9L8v, {
        topic: t.name,
        username: Y.ZP.getName(i.id, a.id, r)
      }), {
        notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
        guild_id: i.id,
        channel_id: a.id
      }, {
        onClick() {
          t.entity_type === $.WX.STAGE_INSTANCE && (0, O.Cq)(a), t.entity_type === $.WX.VOICE && f.default.selectVoiceChannel(a.id)
        },
        isUserAvatar: false
      })
    }(e) : e.entity_type === $.WX.EXTERNAL && function(t) {
      if (tf()) return;
      let e = z.default.getCurrentUser(),
        n = L.Z.getGuild(t.guild_id);
      if (null != e && null != n) K.Z.showNotification((0, R.EB)(n, 128), tt.intl.formatToPlainString(tt.t.bOu6Wl, {
        guildName: n.name
      }), tt.intl.formatToPlainString(tt.t.mYyaRE, {
        topic: t.name
      }), {
        notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
        guild_id: n.id
      }, {
        onClick() {
          d.Z.transitionToGuildSync(t.guild_id), (0, T.bO)({
            eventId: t.id
          })
        },
        isUserAvatar: false
      })
    }(e))
  },
  THREAD_CREATE: function(t) {
    var e;
    let {
      channel: n,
      isNewlyCreated: i
    } = t;
    if (tf()) returnfalse;
    let l = k.Z.getChannel(n.parent_id);
    if (null == l || !Q.TPd.GUILD_THREADS_ONLY.has(l.type) || !i || !(0, h.FI)(n, l, !to)) returnfalse;
    let {
      author: a,
      user: r
    } = (0, N.MC)(n);
    if (null == r) returnfalse;
    let o = L.Z.getGuild(l.guild_id);
    if (null == o) returnfalse;
    let u = tt.intl.formatToPlainString(tt.t["2IGVl5"], {
        channelName: l.name,
        guildName: o.name
      }),
      s = tt.intl.formatToPlainString(tt.t.jPhTvb, {
        channelName: n.name,
        userUsername: null != (e = null == a ? true : a.nick) ? e : null == r ? true : r.username
      }),
      d = r.getAvatarURL(true, 128);
    K.Z.showNotification(d, u, s, {
      notif_type: "THREAD_CREATE",
      notif_user_id: r.id
    }, {
      onClick() {
        (0, U.ok)(n)
      },
      isUserAvatar: true
    })
  },
  GENERIC_PUSH_NOTIFICATION_SENT: function(t) {
    let e, {
      icon: n,
      title: i,
      body: l,
      route: a,
      trackingType: r,
      tag: o
    } = t;
    if (tf() || null == i || null == l || null == r || "reactions_push_notification" === r) returnfalse;
    K.Z.showNotification(n, i, l, {
      notif_type: r
    }, {
      onClick() {
        null != a && ((0, S.Z)(a), c.default.clickedNotification())
      },
      tag: o,
      isUserAvatar: false
    }).then(t => {
      null != t && null != e && tc.track(e, t.notification, t.trackingProps)
    })
  },
  REACTION_NOTIFICATION_SENT: function(t) {
    let {
      icon: e,
      title: n,
      body: i,
      route: l,
      trackingType: a,
      message: r
    } = t;
    if (tf() || null == n || null == i || null == a) returnfalse;
    let {
      enableInAppNotifications: o
    } = v.Z.getCurrentConfig({
      location: "desktopNotification"
    }, {
      autoTrackExposure: true
    });
    if (!o) returnfalse;
    let u = r.channel_id;
    if (null == u || H.Z.getCurrentlySelectedChannelId() === u && to) returnfalse;
    K.Z.showNotification(e, n, i, {
      notif_type: a
    }, {
      onClick() {
        null != l && ((0, S.Z)(l), c.default.clickedNotification())
      },
      isUserAvatar: true
    }).then(t => {
      null != t && null != u && tc.track(u, t.notification, t.trackingProps)
    })
  },
  WINDOW_HIDDEN: function() {
    let t = (0, Chunk358085.isWindows)(),
      e = (0, Chunk358085.isLinux)();
    if (!(!Chunk433517.K.get(tr, false) && Chunk358085.isPlatformEmbedded && (module || exports))) returnfalse;
    let i = false;
    return null != tu && (i = td.includes(tu)), !!i && (Chunk654769.Z.showNotification(require("./95045.js"), Chunk388032.intl.string(Chunk388032.t.VSgOVl), Chunk388032.intl.string(Chunk388032.t["+J/F6+"]), {
      notif_type: "WINDOW_HIDDEN"
    }, {
      overrideStreamerMode: true,
      onClick: () => {
        (0, Chunk703656.uL)(Chunk981631.Z5c.SETTINGS(module ? "windows" : "linux"))
      },
      onShown: () => {
        Chunk433517.K.set(tr, true)
      },
      isUserAvatar: false
    }), false)
  },
  LOGOUT: function() {
    return Chunk433517.K.remove(tr), false
  },
  CONNECTION_OPEN: function(t) {
    let {
      countryCode: e,
      guilds: n
    } = t;
    tu = e, ts.clear(), n.forEach(t => t.stage_instances.forEach(t => ts.add(t.id)))
  },
  MESSAGE_REMINDER_DUE: function(t) {
    let {
      savedMessage: e
    } = t;
    if (tf()) returnfalse;
    let n = e.message;
    if (null == n || null == n.author) returnfalse;
    let i = k.Z.getChannel(e.saveData.channelId);
    if (null == i) returnfalse;
    let {
      icon: l,
      body: a
    } = (0, h.Xi)(i, n, n.author);
    K.Z.showNotification(l, tt.intl.string(tt.t.IjZJBw), a, {
      notif_type: "MESSAGE_REMINDER_DUE"
    }, {
      onClick() {
        (0, S.Z)(Q.Z5c.CHANNEL(null == i ? true : i.getGuildId(), i.id, n.id))
      },
      isUserAvatar: true
    })
  }
})