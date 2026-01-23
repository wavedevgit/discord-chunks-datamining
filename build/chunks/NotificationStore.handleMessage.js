/** Chunk was on 31748 **/
/** chunk id: 845618, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  cH: () => ee,
  pD: () => et
}), require("./896048.js"), require("./321073.js");
var r, Chunk136722 = require("./136722.js"),
  Chunk311907 = require("./311907.js"),
  Chunk506774 = require("./506774.js"),
  Chunk73153 = require("./73153.js"),
  Chunk308528 = require("./308528.js"),
  Chunk367513 = require("./367513.js"),
  Chunk686956 = require("./686956.js"),
  Chunk264686 = require("./264686.js"),
  Chunk956793 = require("./956793.js"),
  Chunk77729 = require("./77729.js"),
  Chunk883600 = require("./883600.js"),
  Chunk47167 = require("./47167.js"),
  Chunk435470 = require("./435470.js"),
  Chunk707592 = require("./707592.jsx"),
  Chunk22007 = require("./22007.js"),
  Chunk380335 = require("./380335.js"),
  Chunk141468 = require("./141468.js"),
  Chunk535586 = require("./535586.js"),
  Chunk742984 = require("./742984.js"),
  Chunk277628 = require("./277628.js"),
  Chunk976860 = require("./976860.js"),
  Chunk378570 = require("./378570.js"),
  Chunk323443 = require("./323443.js"),
  Chunk446600 = require("./446600.js"),
  Chunk747926 = require("./747926.js"),
  Chunk253932 = require("./253932.js"),
  Chunk260509 = require("./260509.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk320501 = require("./320501.js"),
  Chunk803224 = require("./803224.js"),
  Chunk576705 = require("./576705.js"),
  Chunk222823 = require("./222823.js"),
  Chunk994500 = require("./994500.js"),
  Chunk309010 = require("./309010.js"),
  Chunk461213 = require("./461213.js"),
  Chunk351906 = require("./351906.js"),
  Chunk287809 = require("./287809.js"),
  Chunk977997 = require("./977997.js"),
  Chunk954571 = require("./954571.js"),
  Chunk562153 = require("./562153.js"),
  Chunk723702 = require("./723702.js"),
  Chunk427262 = require("./427262.js"),
  Chunk970061 = require("./970061.js"),
  Chunk652215 = require("./652215.js"),
  Chunk988794 = require("./988794.js"),
  Chunk672396 = require("./672396.js"),
  Chunk985018 = require("./985018.jsx");

function Q(e, t, n) {
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
      Q(e, t, n[t])
    })
  }
  return e
}
let ee = "message1",
  et = .4,
  en = (null === Chunk77729.A || true === Chunk77729.A ? true : Chunk77729.A.features.supports("notifications")) ? 20 : 1,
  er = "discord_dismissed_notification_shown",
  el = document.hasFocus(),
  ei = null,
  ea = new Set,
  eo = ["FR", "GF", "PF", "TF", "RE", "GP", "MQ", "YT", "NC", "PM", "WF"],
  es = new class {
    track(e, t, n) {
      let r = this._channels[e];
      for (null == r && (r = [], this._channels[e] = r), r.push({
          notification: t,
          trackingProps: n
        }); r.length > en;) {
        var l;
        let e = r.shift();
        (null == e || null == (l = e.notification) ? true : l.close) != null && (e.notification.close(), H.default.track(Z.HAw.NOTIFICATION_ACTION, $({
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
        t.close(), H.default.track(Z.HAw.NOTIFICATION_ACTION, $({
          action: "ACK"
        }, n))
      }))
    }
    constructor() {
      Q(this, "_channels", {})
    }
  };

function ec() {
  return !!(D.A.getDesktopType() === Z.nRU.NEVER || V.A.getStatus() === Z.clD.DND || j.NO.getSetting())
}

function eu(e) {
  return null != B.A.getVoiceStateForChannel(e)
}
class ed extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(g.A, w.A, P.A, A.A, R.A, D.A, k.A, M.A, U.A, V.A, N.A, F.A, G.default, B.A)
  }
}
Q(ed, "displayName", "NotificationStore"), new ed(Chunk73153.h, __OVERLAY__ ? {} : {
  NOTIFICATIONS_SET_PERMISSION_STATE: function(e) {
    let {
      enabled: t
    } = e;
    t !== Z.kCE.ENABLED || z.isPlatformEmbedded || K.A.showNotification(n(705194), J.intl.string(J.t.VSgOVg), J.intl.string(J.t["1UJvqc"]), {
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
    return !ec() && (K.A.showNotification(t, n, r, l, i), false)
  },
  WINDOW_FOCUS: function(e) {
    if (el = e.focused) {
      let e = U.A.getChannelId();
      null != e && es.clearChannel(e)
    }
  },
  MESSAGE_CREATE: function(e) {
    var t, r, l;
    let {
      channelId: i,
      message: a,
      optimistic: s
    } = e;
    if (s) returnfalse;
    let u = w.A.getChannel(i),
      f = G.default.getUser(null == (r = a.author) ? true : r.id),
      p = G.default.getCurrentUser();
    if (null == u || null == f || null == p) returnfalse;
    let m = (0, v.lx)(a, i, !el),
      _ = D.A.getNotifyMessagesInSelectedChannel() && (0, v.kY)(a, i);
    if (!m && !_ || a.type === Z.lAJ.CHANGELOG && (null == a.changelog_id || g.A.latestChangelogId() !== a.changelog_id)) returnfalse;
    let h = !D.A.isSoundDisabled(ee);
    if (_ && (h && K.A.playNotificationSound("message3", .4), !el) || !m) returnfalse;
    let y = n(242286).default,
      A = n(592598).A;
    if (null != y.getFocusedPID() && !A.isNotificationDisabled(X.KS.TextChat) && !F.A.disableNotifications) returnfalse;
    let {
      icon: x,
      title: C,
      body: N,
      emoji: I
    } = (0, v.TB)(u, a, f), j = !(0, O.Z)("NotificationStore.handleMessage", null == p ? true : p.id);
    if (o.h.dispatch({
        type: "RPC_NOTIFICATION_CREATE",
        channelId: u.id,
        message: a,
        icon: x,
        title: C,
        body: N
      }), (0, E.n)(a, u.guild_id), D.A.getDesktopType() === Z.nRU.NEVER) return h && K.A.playNotificationSound(ee, et), false;
    let T = null != (t = R.A.getMessage(i, a.id)) ? t : (0, b.rh)(a);
    K.A.showNotification(x, C, N, {
      notif_type: "MESSAGE_CREATE",
      notif_user_id: null == (l = a.author) ? true : l.id,
      message_id: a.id,
      message_type: a.type,
      channel_id: u.id,
      channel_type: u.type,
      guild_id: u.guild_id,
      badge: (0, L.Wm)(T, p)
    }, {
      omitViewTracking: j,
      tag: a.id,
      sound: h ? ee : true,
      volume: et,
      onClick() {
        (0, S.iN)(u.id), (u.type === Z.rbe.GUILD_VOICE || u.type === Z.rbe.GUILD_STAGE_VOICE) && c.A.updateChatOpen(u.id, true), d.default.clickedNotification()
      },
      isUserAvatar: true,
      messageRecord: T,
      fallbackDeepLink: (0, K.I)(Z.BVt.CHANNEL(u.guild_id, u.id, a.id)),
      emoji: I
    }).then(e => {
      null != e && es.track(u.id, e.notification, e.trackingProps)
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
    if (ec() || n.type !== Z.$pd.PLAYING) returnfalse;
    {
      let e = G.default.getUser(t);
      if (null == e) returnfalse;
      let r = Y.Ay.getName(e),
        l = n.name,
        i = e.getAvatarURL(true, 128),
        a = J.intl.string(J.t.XoTWsI),
        o = J.intl.formatToPlainString(J.t.o4Aipn, {
          username: r,
          gameName: l
        });
      return K.A.showNotification(i, a, o, {
        notif_type: "ACTIVITY_START",
        activity_type: Z.$pd.PLAYING,
        notif_user_id: t,
        activity_name: l
      }, {
        sound: "message2",
        playSoundIfDisabled: false,
        volume: .4,
        onClick() {
          s.A.openPrivateChannel({
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
    if (ec()) return;
    let n = G.default.getCurrentUser();
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
    let s = P.A.getGuild(i),
      c = w.A.getChannel(l),
      u = N.A.getStageInstanceByChannel(l);
    null != s && null != c && null != u && K.A.showNotification((0, T.Iv)(s, 128), c.name, J.intl.formatToPlainString(J.t.sqnsSP, {
      channelName: (0, m.m1)(c, G.default, M.A),
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
    if (ec() || !t.send_start_notification || eu(t.channel_id)) returnfalse;
    let n = G.default.getCurrentUser(),
      r = P.A.getGuild(t.guild_id),
      i = w.A.getChannel(t.channel_id),
      a = G.default.getUser(t.host_id);
    if (null == n || null == i || null == r || null == a || !(0, v.Wv)(n, a, i) || !k.A.can(l.kg(Z.xBc.CONNECT, Z.xBc.VIEW_CHANNEL), i) || ea.has(t.id)) returnfalse;
    ea.add(t.id), K.A.showNotification((0, T.Iv)(r, 128), J.intl.formatToPlainString(J.t.bZ4Okd, {
      guildName: r.name
    }), J.intl.formatToPlainString(J.t.qTelnO, {
      username: W.Ay.getName(r.id, i.id, a),
      topic: t.topic
    }), {
      notif_type: "STAGE_INSTANCE_CREATE",
      guild_id: r.id,
      channel_id: i.id
    }, {
      onClick() {
        (0, C.av)(i)
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
    if (ec() || null == t.notification_type) returnfalse;
    t.notification_type === q.b8.EVENT_START && (t.entity_type === q.Ps.STAGE_INSTANCE || t.entity_type === q.Ps.VOICE ? function(e) {
      if (ec()) return;
      let t = e.channel_id;
      if (null == t || eu(t)) return;
      let n = G.default.getCurrentUser(),
        r = P.A.getGuild(e.guild_id),
        i = w.A.getChannel(e.channel_id),
        a = G.default.getUser(e.host_id);
      null != n && null != i && null != r && null != a && k.A.can(l.kg(Z.xBc.CONNECT, Z.xBc.VIEW_CHANNEL), i) && K.A.showNotification((0, T.Iv)(r, 128), J.intl.formatToPlainString(J.t.bOu6Wn, {
        guildName: r.name
      }), J.intl.formatToPlainString(J.t.GV9L8u, {
        topic: e.name,
        username: W.Ay.getName(r.id, i.id, a)
      }), {
        notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
        guild_id: r.id,
        channel_id: i.id
      }, {
        onClick() {
          e.entity_type === q.Ps.STAGE_INSTANCE && (0, C.av)(i), e.entity_type === q.Ps.VOICE && f.default.selectVoiceChannel(i.id)
        },
        isUserAvatar: false
      })
    }(t) : t.entity_type === q.Ps.EXTERNAL && function(e) {
      if (ec()) return;
      let t = G.default.getCurrentUser(),
        n = P.A.getGuild(e.guild_id);
      null == t || null == n || K.A.showNotification((0, T.Iv)(n, 128), J.intl.formatToPlainString(J.t.bOu6Wn, {
        guildName: n.name
      }), J.intl.formatToPlainString(J.t.mYyaRB, {
        topic: e.name
      }), {
        notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
        guild_id: n.id
      }, {
        onClick() {
          u.A.transitionToGuildSync(e.guild_id), (0, h.uR)({
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
    if (ec()) returnfalse;
    let l = w.A.getChannel(n.parent_id);
    if (null == l || !Z.kvI.GUILD_THREADS_ONLY.has(l.type) || !r || !(0, v.q1)(n, l, !el)) returnfalse;
    let {
      author: i,
      user: a
    } = (0, _.tY)(n);
    if (null == a) returnfalse;
    let o = P.A.getGuild(l.guild_id);
    if (null == o) returnfalse;
    let s = J.intl.formatToPlainString(J.t["2IGVl5"], {
        channelName: l.name,
        guildName: o.name
      }),
      c = J.intl.formatToPlainString(J.t.jPhTvT, {
        channelName: n.name,
        userUsername: null != (t = null == i ? true : i.nick) ? t : null == a ? true : a.username
      }),
      u = a.getAvatarURL(true, 128);
    K.A.showNotification(u, s, c, {
      notif_type: "THREAD_CREATE",
      notif_user_id: a.id
    }, {
      onClick() {
        (0, I.JA)(n)
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
    if (ec() || null == r || null == l || null == a || "reactions_push_notification" === a.toLowerCase()) returnfalse;
    K.A.showNotification(n, r, l, {
      notif_type: a
    }, {
      onClick() {
        null != i && ((0, y.A)(i), d.default.clickedNotification())
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
      body: r,
      route: l,
      trackingType: i,
      message: a
    } = e;
    if (ec() || null == n || null == r || null == i) returnfalse;
    let o = a.channel_id;
    if (null == o || U.A.getCurrentlySelectedChannelId() === o && el) returnfalse;
    K.A.showNotification(t, n, r, {
      notif_type: i
    }, {
      onClick() {
        null != l && ((0, y.A)(l), d.default.clickedNotification())
      },
      isUserAvatar: true
    }).then(e => {
      null != e && null != o && es.track(o, e.notification, e.trackingProps)
    })
  },
  WINDOW_HIDDEN: function() {
    let e = (0, z.isWindows)(),
      t = (0, z.isLinux)();
    if (!(!a.w.get(er, false) && z.isPlatformEmbedded && (e || t))) returnfalse;
    let r = false;
    return null != ei && (r = eo.includes(ei)), !!r && (K.A.showNotification(n(608598), J.intl.string(J.t.VSgOVg), J.intl.string(J.t["+J/F66"]), {
      notif_type: "WINDOW_HIDDEN"
    }, {
      overrideStreamerMode: true,
      onClick: () => {
        (0, x.pX)(Z.BVt.SETTINGS(e ? "windows" : "linux"))
      },
      onShown: () => {
        a.w.set(er, true)
      },
      isUserAvatar: false
    }), false)
  },
  LOGOUT: function() {
    return a.w.remove(er), false
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
    if (ec()) returnfalse;
    let n = t.message;
    if (null == n || null == n.author) returnfalse;
    let r = w.A.getChannel(t.saveData.channelId);
    if (null == r) returnfalse;
    let {
      icon: l,
      body: i
    } = (0, v.TB)(r, n, n.author);
    K.A.showNotification(l, J.intl.string(J.t.IjZJB5), i, {
      notif_type: "MESSAGE_REMINDER_DUE"
    }, {
      onClick() {
        (0, y.A)(Z.BVt.CHANNEL(null == r ? true : r.getGuildId(), r.id, n.id))
      },
      isUserAvatar: true
    })
  }
})