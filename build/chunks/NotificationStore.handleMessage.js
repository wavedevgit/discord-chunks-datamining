/** Chunk was on 31748 **/
/** chunk id: 845618, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  cH: () => ee,
  pD: () => et
}), require("./896048.js"), require("./321073.js");
var l, Chunk136722 = require("./136722.js"),
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
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      Q(e, t, n[t])
    })
  }
  return e
}
let ee = "message1",
  et = .4,
  en = (null === Chunk77729.A || true === Chunk77729.A ? true : Chunk77729.A.features.supports("notifications")) ? 20 : 1,
  el = "discord_dismissed_notification_shown",
  er = document.hasFocus(),
  ei = null,
  ea = new Set,
  es = ["FR", "GF", "PF", "TF", "RE", "GP", "MQ", "YT", "NC", "PM", "WF"],
  eo = new class {
    track(e, t, n) {
      let l = this._channels[e];
      for (null == l && (l = [], this._channels[e] = l), l.push({
          notification: t,
          trackingProps: n
        }); l.length > en;) {
        var r;
        let e = l.shift();
        (null == e || null == (r = e.notification) ? true : r.close) != null && (e.notification.close(), B.default.track(X.HAw.NOTIFICATION_ACTION, $({
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
        t.close(), B.default.track(X.HAw.NOTIFICATION_ACTION, $({
          action: "ACK"
        }, n))
      }))
    }
    constructor() {
      Q(this, "_channels", {})
    }
  };

function ec() {
  return !!(D.A.getDesktopType() === X.nRU.NEVER || V.A.getStatus() === X.clD.DND || T.NO.getSetting())
}

function eu(e) {
  return null != H.A.getVoiceStateForChannel(e)
}
class ed extends(l = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(b.A, w.A, R.A, y.A, P.A, D.A, k.A, M.A, U.A, V.A, C.A, F.A, G.default, H.A)
  }
}
Q(ed, "displayName", "NotificationStore"), new ed(Chunk73153.h, __OVERLAY__ ? {} : {
  NOTIFICATIONS_SET_PERMISSION_STATE: function(e) {
    let {
      enabled: t
    } = e;
    t !== X.kCE.ENABLED || W.isPlatformEmbedded || K.A.showNotification(n(705194), q.intl.string(q.t.VSgOVg), q.intl.string(q.t["1UJvqc"]), {
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
      body: l,
      trackingProps: r,
      options: i
    } = e;
    return !ec() && (K.A.showNotification(t, n, l, r, i), false)
  },
  WINDOW_FOCUS: function(e) {
    if (er = e.focused) {
      let e = U.A.getChannelId();
      null != e && eo.clearChannel(e)
    }
  },
  MESSAGE_CREATE: function(e) {
    var t, l, r;
    let {
      channelId: i,
      message: a,
      optimistic: o
    } = e;
    if (o) returnfalse;
    let u = w.A.getChannel(i),
      f = G.default.getUser(null == (l = a.author) ? true : l.id),
      p = G.default.getCurrentUser();
    if (null == u || null == f || null == p) returnfalse;
    let g = (0, v.lx)(a, i, !er),
      m = D.A.getNotifyMessagesInSelectedChannel() && (0, v.kY)(a, i);
    if (!g && !m || a.type === X.lAJ.CHANGELOG && (null == a.changelog_id || b.A.latestChangelogId() !== a.changelog_id)) returnfalse;
    let h = !D.A.isSoundDisabled(ee);
    if (m && (h && K.A.playNotificationSound("message3", .4), !er) || !g) returnfalse;
    let A = n(242286).default,
      y = n(592598).A;
    if (null != A.getFocusedPID() && !y.isNotificationDisabled(J.KS.TextChat) && !F.A.disableNotifications) returnfalse;
    let {
      icon: x,
      title: N,
      body: C,
      emoji: j
    } = (0, v.TB)(u, a, f), T = !(0, O.Z)("NotificationStore.handleMessage", null == p ? true : p.id);
    if (s.h.dispatch({
        type: "RPC_NOTIFICATION_CREATE",
        channelId: u.id,
        message: a,
        icon: x,
        title: N,
        body: C
      }), (0, E.n)(a, u.guild_id), D.A.getDesktopType() === X.nRU.NEVER) return h && K.A.playNotificationSound(ee, et), false;
    let I = null != (t = P.A.getMessage(i, a.id)) ? t : (0, _.rh)(a);
    K.A.showNotification(x, N, C, {
      notif_type: "MESSAGE_CREATE",
      notif_user_id: null == (r = a.author) ? true : r.id,
      message_id: a.id,
      message_type: a.type,
      channel_id: u.id,
      channel_type: u.type,
      guild_id: u.guild_id,
      badge: (0, L.Wm)(I, p)
    }, {
      omitViewTracking: T,
      tag: a.id,
      sound: h ? ee : true,
      volume: et,
      onClick() {
        (0, S.iN)(u.id), (u.type === X.rbe.GUILD_VOICE || u.type === X.rbe.GUILD_STAGE_VOICE) && c.A.updateChatOpen(u.id, true), d.default.clickedNotification()
      },
      isUserAvatar: true,
      messageRecord: I,
      fallbackDeepLink: (0, K.I)(X.BVt.CHANNEL(u.guild_id, u.id, a.id)),
      emoji: j
    }).then(e => {
      null != e && eo.track(u.id, e.notification, e.trackingProps)
    })
  },
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    return null != t && eo.clearChannel(t), false
  },
  MESSAGE_ACK: function(e) {
    let {
      channelId: t
    } = e;
    return eo.clearChannel(t), false
  },
  ACTIVITY_START: function(e) {
    let {
      userId: t,
      activity: n
    } = e;
    if (ec() || n.type !== X.$pd.PLAYING) returnfalse;
    {
      let e = G.default.getUser(t);
      if (null == e) returnfalse;
      let l = z.Ay.getName(e),
        r = n.name,
        i = e.getAvatarURL(true, 128),
        a = q.intl.string(q.t.XoTWsI),
        s = q.intl.formatToPlainString(q.t.o4Aipn, {
          username: l,
          gameName: r
        });
      return K.A.showNotification(i, a, s, {
        notif_type: "ACTIVITY_START",
        activity_type: X.$pd.PLAYING,
        notif_user_id: t,
        activity_name: r
      }, {
        sound: "message2",
        playSoundIfDisabled: false,
        volume: .4,
        onClick() {
          o.A.openPrivateChannel({
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
    let l = t.find(e => e.userId === n.id);
    if (null == l) return;
    let {
      channelId: r,
      guildId: i,
      suppress: a,
      requestToSpeakTimestamp: s
    } = l;
    if (null == r || null == i || !(!a && null != s)) return;
    let o = R.A.getGuild(i),
      c = w.A.getChannel(r),
      u = C.A.getStageInstanceByChannel(r);
    null != o && null != c && null != u && K.A.showNotification((0, I.Iv)(o, 128), c.name, q.intl.formatToPlainString(q.t.sqnsSP, {
      channelName: (0, g.m1)(c, G.default, M.A),
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
      l = R.A.getGuild(t.guild_id),
      i = w.A.getChannel(t.channel_id),
      a = G.default.getUser(t.host_id);
    if (null == n || null == i || null == l || null == a || !(0, v.Wv)(n, a, i) || !k.A.can(r.kg(X.xBc.CONNECT, X.xBc.VIEW_CHANNEL), i) || ea.has(t.id)) returnfalse;
    ea.add(t.id), K.A.showNotification((0, I.Iv)(l, 128), q.intl.formatToPlainString(q.t.bZ4Okd, {
      guildName: l.name
    }), q.intl.formatToPlainString(q.t.qTelnO, {
      username: Y.Ay.getName(l.id, i.id, a),
      topic: t.topic
    }), {
      notif_type: "STAGE_INSTANCE_CREATE",
      guild_id: l.id,
      channel_id: i.id
    }, {
      onClick() {
        (0, N.av)(i)
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
    t.notification_type === Z.b8.EVENT_START && (t.entity_type === Z.Ps.STAGE_INSTANCE || t.entity_type === Z.Ps.VOICE ? function(e) {
      if (ec()) return;
      let t = e.channel_id;
      if (null == t || eu(t)) return;
      let n = G.default.getCurrentUser(),
        l = R.A.getGuild(e.guild_id),
        i = w.A.getChannel(e.channel_id),
        a = G.default.getUser(e.host_id);
      null != n && null != i && null != l && null != a && k.A.can(r.kg(X.xBc.CONNECT, X.xBc.VIEW_CHANNEL), i) && K.A.showNotification((0, I.Iv)(l, 128), q.intl.formatToPlainString(q.t.bOu6Wn, {
        guildName: l.name
      }), q.intl.formatToPlainString(q.t.GV9L8u, {
        topic: e.name,
        username: Y.Ay.getName(l.id, i.id, a)
      }), {
        notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
        guild_id: l.id,
        channel_id: i.id
      }, {
        onClick() {
          e.entity_type === Z.Ps.STAGE_INSTANCE && (0, N.av)(i), e.entity_type === Z.Ps.VOICE && f.default.selectVoiceChannel(i.id)
        },
        isUserAvatar: false
      })
    }(t) : t.entity_type === Z.Ps.EXTERNAL && function(e) {
      if (ec()) return;
      let t = G.default.getCurrentUser(),
        n = R.A.getGuild(e.guild_id);
      null == t || null == n || K.A.showNotification((0, I.Iv)(n, 128), q.intl.formatToPlainString(q.t.bOu6Wn, {
        guildName: n.name
      }), q.intl.formatToPlainString(q.t.mYyaRB, {
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
      isNewlyCreated: l
    } = e;
    if (ec()) returnfalse;
    let r = w.A.getChannel(n.parent_id);
    if (null == r || !X.kvI.GUILD_THREADS_ONLY.has(r.type) || !l || !(0, v.q1)(n, r, !er)) returnfalse;
    let {
      author: i,
      user: a
    } = (0, m.tY)(n);
    if (null == a) returnfalse;
    let s = R.A.getGuild(r.guild_id);
    if (null == s) returnfalse;
    let o = q.intl.formatToPlainString(q.t["2IGVl5"], {
        channelName: r.name,
        guildName: s.name
      }),
      c = q.intl.formatToPlainString(q.t.jPhTvT, {
        channelName: n.name,
        userUsername: null != (t = null == i ? true : i.nick) ? t : null == a ? true : a.username
      }),
      u = a.getAvatarURL(true, 128);
    K.A.showNotification(u, o, c, {
      notif_type: "THREAD_CREATE",
      notif_user_id: a.id
    }, {
      onClick() {
        (0, j.JA)(n)
      },
      isUserAvatar: true
    })
  },
  GENERIC_PUSH_NOTIFICATION_SENT: function(e) {
    let t, {
      icon: n,
      title: l,
      body: r,
      route: i,
      trackingType: a,
      tag: s
    } = e;
    if (ec() || null == l || null == r || null == a || "reactions_push_notification" === a.toLowerCase()) returnfalse;
    K.A.showNotification(n, l, r, {
      notif_type: a
    }, {
      onClick() {
        null != i && ((0, A.A)(i), d.default.clickedNotification())
      },
      tag: s,
      isUserAvatar: false
    }).then(e => {
      null != e && null != t && eo.track(t, e.notification, e.trackingProps)
    })
  },
  REACTION_NOTIFICATION_SENT: function(e) {
    let {
      icon: t,
      title: n,
      body: l,
      route: r,
      trackingType: i,
      message: a
    } = e;
    if (ec() || null == n || null == l || null == i) returnfalse;
    let s = a.channel_id;
    if (null == s || U.A.getCurrentlySelectedChannelId() === s && er) returnfalse;
    K.A.showNotification(t, n, l, {
      notif_type: i
    }, {
      onClick() {
        null != r && ((0, A.A)(r), d.default.clickedNotification())
      },
      isUserAvatar: true
    }).then(e => {
      null != e && null != s && eo.track(s, e.notification, e.trackingProps)
    })
  },
  WINDOW_HIDDEN: function() {
    let e = (0, W.isWindows)(),
      t = (0, W.isLinux)();
    if (!(!a.w.get(el, false) && W.isPlatformEmbedded && (e || t))) returnfalse;
    let l = false;
    return null != ei && (l = es.includes(ei)), !!l && (K.A.showNotification(n(608598), q.intl.string(q.t.VSgOVg), q.intl.string(q.t["+J/F66"]), {
      notif_type: "WINDOW_HIDDEN"
    }, {
      overrideStreamerMode: true,
      onClick: () => {
        (0, x.pX)(X.BVt.SETTINGS(e ? "windows" : "linux"))
      },
      onShown: () => {
        a.w.set(el, true)
      },
      isUserAvatar: false
    }), false)
  },
  LOGOUT: function() {
    return a.w.remove(el), false
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
    let l = w.A.getChannel(t.saveData.channelId);
    if (null == l) returnfalse;
    let {
      icon: r,
      body: i
    } = (0, v.TB)(l, n, n.author);
    K.A.showNotification(r, q.intl.string(q.t.IjZJB5), i, {
      notif_type: "MESSAGE_REMINDER_DUE"
    }, {
      onClick() {
        (0, A.A)(X.BVt.CHANNEL(null == l ? true : l.getGuildId(), l.id, n.id))
      },
      isUserAvatar: true
    })
  }
})