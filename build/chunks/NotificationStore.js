/** Chunk was on 70205 **/
/** chunk id: 974180, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Ay: () => tg,
  yk: () => t_
}), require("./388685.js"), require("./539854.js");
var i, Chunk392711 = require("./392711.js"),
  Chunk149765 = require("./149765.js"),
  Chunk442837 = require("./442837.js"),
  Chunk524437 = require("./524437.js"),
  Chunk433517 = require("./433517.js"),
  Chunk570140 = require("./570140.js"),
  Chunk493683 = require("./493683.js"),
  Chunk475179 = require("./475179.js"),
  Chunk749210 = require("./749210.js"),
  Chunk292556 = require("./292556.js"),
  Chunk287734 = require("./287734.js"),
  Chunk232567 = require("./232567.js"),
  Chunk579806 = require("./579806.js"),
  Chunk761781 = require("./761781.js"),
  Chunk728345 = require("./728345.js"),
  Chunk812206 = require("./812206.js"),
  Chunk802098 = require("./802098.js"),
  Chunk933557 = require("./933557.js"),
  Chunk456269 = require("./456269.js"),
  Chunk890022 = require("./890022.js"),
  Chunk688907 = require("./688907.js"),
  Chunk15274 = require("./15274.jsx"),
  Chunk336197 = require("./336197.js"),
  Chunk355298 = require("./355298.js"),
  Chunk786761 = require("./786761.js"),
  Chunk601992 = require("./601992.js"),
  Chunk864060 = require("./864060.js"),
  Chunk687272 = require("./687272.js"),
  Chunk691294 = require("./691294.js"),
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
  Chunk70956 = require("./70956.js"),
  Chunk5192 = require("./5192.js"),
  Chunk358085 = require("./358085.js"),
  Chunk74538 = require("./74538.js"),
  Chunk51144 = require("./51144.js"),
  Chunk654769 = require("./654769.js"),
  Chunk981631 = require("./981631.js"),
  Chunk765305 = require("./765305.js"),
  Chunk388032 = require("./388032.jsx");

function tc(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = n, t
}

function tf(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = null != arguments[e] ? arguments[e] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
      return Object.getOwnPropertyDescriptor(n, t).enumerable
    }))), i.forEach(function(e) {
      tc(t, e, n[e])
    })
  }
  return t
}
let tg = "message1",
  t_ = .4,
  tE = (null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.features.supports("notifications")) ? 20 : 1,
  tp = "discord_dismissed_notification_shown",
  tN = document.hasFocus(),
  tT = null,
  tS = new Set,
  tI = {},
  th = {},
  tC = ["FR", "GF", "PF", "TF", "RE", "GP", "MQ", "YT", "NC", "PM", "WF"],
  tZ = new class {
    track(t, e, n) {
      let i = this._channels[t];
      for (null == i && (i = [], this._channels[t] = i), i.push({
          notification: e,
          trackingProps: n
        }); i.length > tE;) {
        var l;
        let t = i.shift();
        (null == t || null == (l = t.notification) ? true : l.close) != null && (t.notification.close(), te.default.track(tu.rMx.NOTIFICATION_ACTION, tf({
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
        e.close(), te.default.track(tu.rMx.NOTIFICATION_ACTION, tf({
          action: "ACK"
        }, n))
      }))
    }
    constructor() {
      tc(this, "_channels", {})
    }
  };

function tA(t, e) {
  let {
    gameActivityNotificationType: n,
    excludeSteamGames: i
  } = e, l = t;
  i && (l = t.filter(t => {
    var e;
    return null == (e = t.metadata) || !e.distributor || t.metadata.distributor !== tu.GQo.STEAM
  }));
  let a = l.filter(t => t.type === tu.IIU.PLAYING && null != t.application_id).map(t => t.application_id);
  return n === o.Tv.ONLY_GAMES_PLAYED && (a = a.filter(t => N.Z.currentUserApplicationIds.has(t))), a
}
async function tv(t) {
  let e = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    n = (0, A.MH)(),
    i = (0, A.j4)(),
    a = (0, Z.dm)(t);
  if (e) {
    let t = new Set;
    a.forEach(e => {
      let {
        activities: l,
        user: a
      } = e;
      if (0 === l.length || j.Z.isIgnored(a.id)) return;
      let r = tA(l, {
        gameActivityNotificationType: n,
        excludeSteamGames: i
      });
      0 !== r.length && (t = new Set([...t, ...r]))
    }), await T.ZP.fetchApplications([...t], false)
  }
  a.forEach(t => {
    let {
      activities: a,
      user: r,
      guildId: o
    } = t;
    ! function(t, e, n, i) {
      let a = tm(e);
      if (0 === t.length && 0 === a.length) return;
      let r = (0, l.difference)(t, a).filter(t => {
        var n;
        return null != t && (null == (n = tI[e]) ? true : n[t]) == null
      });
      (0, l.difference)(a, t).filter(t => {
        var n;
        return null != t && (null == (n = tI[e]) ? true : n[t]) === i
      }).forEach(t => {
        delete tI[e][t]
      }), r.forEach(t => {
        var l, a;
        if (null == tI[e] ? tI[e] = {
            [t]: i
          } : null == tI[e][t] && (tI[e][t] = i), !n || tP()) return;
        let r = null != (a = null == (l = th[e]) ? true : l[t]) ? a : 0;
        if (Date.now() - r < tn.Z.Millis.HOUR) return;
        let o = S.Z.getApplication(t);
        null != o && (null == th[e] && (th[e] = {}), th[e][t] = Date.now(), ty(o, e))
      }), 0 === tm(e).length && delete tI[e]
    }(tA(a, {
      gameActivityNotificationType: n,
      excludeSteamGames: i
    }), r.id, e, null != o ? o : 0)
  })
}

function tm(t) {
  var e;
  return Object.keys(null != (e = tI[t]) ? e : {})
}
async function ty(t, e) {
  var n;
  let i = await (0, E.PR)(e),
    l = await (0, R.m)(i.getAvatarURL(null, 64), null != (n = t.getIconURL(64)) ? n : null);
  to.Z.showNotification(l, td.intl.formatToPlainString(td.t.kO0pfX, {
    name: ti.ZP.getName(null, null, i),
    activity: t.name
  }), "", {
    notif_type: "game_notif",
    application_id: t.id,
    affine_user_id: e
  }, {
    onClick: t => {
      d.Z.openPrivateChannel({
        recipientIds: e
      })
    },
    isUserAvatar: false,
    actions: [{
      content: td.intl.string(td.t["E+yYpq"]),
      args: "open_message_action"
    }]
  })
}

function tP() {
  return !!(Chunk292959.Z.getDesktopType() === Chunk981631.qrD.NEVER || Chunk885110.Z.getStatus() === Chunk981631.Skl.DND || Chunk695346.QZ.getSetting())
}

function tO(t) {
  return null != tt.Z.getVoiceStateForChannel(t)
}
class tD extends(i = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk594174.default, Chunk592125.Z, Chunk292959.Z, Chunk430824.Z, Chunk427679.Z, Chunk699516.Z, Chunk496675.Z, Chunk979651.Z, Chunk355298.Z)
  }
}
tc(tD, "displayName", "NotificationStore"), new tD(Chunk570140.Z, __OVERLAY__ ? {} : {
  NOTIFICATIONS_SET_PERMISSION_STATE: function(t) {
    let {
      enabled: e
    } = t;
    if (e === tu.$Ab.ENABLED && !tl.isPlatformEmbedded) {
      let t = !(0, U.QU)("NotificationStore.handleSetHavePermission");
      to.Z.showNotification(n(910653), td.intl.string(td.t.VSgOVl), td.intl.string(td.t["1UJvqa"]), {
        notif_type: "NOTIFICATIONS_SET_PERMISSION_STATE"
      }, {
        omitViewTracking: t,
        sound: tg,
        volume: t_,
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
    return !tP() && (to.Z.showNotification(e, n, i, l, a), false)
  },
  WINDOW_FOCUS: function(t) {
    if (tN = t.focused) {
      let t = J.Z.getChannelId();
      null != t && tZ.clearChannel(t)
    }
  },
  MESSAGE_CREATE: function(t) {
    var e, i, l, a, r;
    let {
      channelId: o,
      message: u,
      optimistic: d
    } = t;
    if (d) returnfalse;
    let f = x.Z.getChannel(o),
      _ = $.default.getUser(null == (e = u.author) ? true : e.id),
      E = $.default.getCurrentUser();
    if (null == f || null == _ || null == E) returnfalse;
    let p = (0, D.eF)(u, o, !tN),
      N = z.Z.getNotifyMessagesInSelectedChannel() && (0, D.N_)(u, o);
    if (!p && !N || u.type === tu.uaV.CHANGELOG && (null == u.changelog_id || I.Z.latestChangelogId() !== u.changelog_id)) returnfalse;
    let T = !z.Z.isSoundDisabled(tg),
      S = ta.ZP.canUseCustomNotificationSounds(E),
      h = b.Y.getCurrentConfig({
        location: "NotificationStore"
      }).enabled,
      C = S && h && T ? null != (a = (0, k.bb)(null != (l = f.guild_id) ? l : tu.aIL, o)) ? a : (0, k.iD)(f.guild_id) : true;
    if (N && (T && to.Z.playNotificationSound("message3", .4, C), !tN) || !p) returnfalse;
    let Z = n(808506).default,
      A = n(624864).Z,
      {
        OverlayNotificationDisabledSetting: v
      } = n(486016);
    if (null != Z.getFocusedPID() && !A.isNotificationDisabled(v.TEXT_CHAT) && !Q.Z.disableNotifications) returnfalse;
    let {
      icon: m,
      title: y,
      body: R
    } = (0, D.Xi)(f, u, _), L = !(0, U._x)("NotificationStore.handleMessage", null == E ? true : E.id);
    if (s.Z.dispatch({
        type: "RPC_NOTIFICATION_CREATE",
        channelId: f.id,
        message: u,
        icon: m,
        title: y,
        body: R
      }), (0, O.R)(u, f.guild_id), z.Z.getDesktopType() === tu.qrD.NEVER) return T && to.Z.playNotificationSound(tg, t_, C), false;
    let w = null != (r = q.Z.getMessage(o, u.id)) ? r : (0, P.e5)(u);
    to.Z.showNotification(m, y, R, {
      notif_type: "MESSAGE_CREATE",
      notif_user_id: null == (i = u.author) ? true : i.id,
      message_id: u.id,
      message_type: u.type,
      channel_id: f.id,
      channel_type: f.type,
      guild_id: f.guild_id,
      badge: (0, X.Ex)(w, E)
    }, {
      omitViewTracking: L,
      tag: u.id,
      sound: T ? tg : true,
      soundpack: C,
      volume: t_,
      onClick() {
        (0, M.Kh)(f.id), (f.type === tu.d4z.GUILD_VOICE || f.type === tu.d4z.GUILD_STAGE_VOICE) && c.Z.updateChatOpen(f.id, true), g.default.clickedNotification()
      },
      isUserAvatar: true,
      messageRecord: w,
      fallbackDeepLink: (0, to.W)(tu.Z5c.CHANNEL(f.guild_id, f.id, u.id))
    }).then(t => {
      null != t && tZ.track(f.id, t.notification, t.trackingProps)
    })
  },
  CHANNEL_SELECT: function(t) {
    let {
      channelId: e
    } = t;
    return null != e && tZ.clearChannel(e), false
  },
  MESSAGE_ACK: function(t) {
    let {
      channelId: e
    } = t;
    return tZ.clearChannel(e), false
  },
  ACTIVITY_START: function(t) {
    let {
      userId: e,
      activity: n
    } = t;
    if (tP() || n.type !== tu.IIU.PLAYING) returnfalse;
    {
      let t = $.default.getUser(e);
      if (null == t) returnfalse;
      let i = tr.ZP.getName(t),
        l = n.name,
        a = t.getAvatarURL(true, 128),
        r = td.intl.string(td.t.XoTWsL),
        o = td.intl.formatToPlainString(td.t.o4Aipq, {
          username: i,
          gameName: l
        });
      return to.Z.showNotification(a, r, o, {
        notif_type: "ACTIVITY_START",
        activity_type: tu.IIU.PLAYING,
        notif_user_id: e,
        activity_name: l
      }, {
        sound: "message2",
        playSoundIfDisabled: false,
        volume: .4,
        onClick() {
          d.Z.openPrivateChannel({
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
    if (tP()) return;
    let n = $.default.getCurrentUser();
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
    let u = Y.Z.getGuild(a),
      s = x.Z.getChannel(l),
      d = V.Z.getStageInstanceByChannel(l);
    null != u && null != s && null != d && to.Z.showNotification((0, W.EB)(u, 128), s.name, td.intl.formatToPlainString(td.t.sqnsSE, {
      channelName: (0, h.F6)(s, $.default, j.Z),
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
    if (tP() || !e.send_start_notification || tO(e.channel_id)) returnfalse;
    let n = $.default.getCurrentUser(),
      i = Y.Z.getGuild(e.guild_id),
      l = x.Z.getChannel(e.channel_id),
      r = $.default.getUser(e.host_id);
    if (null == n || null == l || null == i || null == r || !(0, D.LL)(n, r, l) || !B.Z.can(a.$e(tu.Plq.CONNECT, tu.Plq.VIEW_CHANNEL), l) || tS.has(e.id)) returnfalse;
    tS.add(e.id), to.Z.showNotification((0, W.EB)(i, 128), td.intl.formatToPlainString(td.t.bZ4OkZ, {
      guildName: i.name
    }), td.intl.formatToPlainString(td.t.qTelnJ, {
      username: ti.ZP.getName(i.id, l.id, r),
      topic: e.topic
    }), {
      notif_type: "STAGE_INSTANCE_CREATE",
      guild_id: i.id,
      channel_id: l.id
    }, {
      onClick() {
        (0, G.Cq)(l)
      },
      isUserAvatar: false
    })
  },
  STAGE_INSTANCE_DELETE: function(t) {
    let {
      instance: e
    } = t;
    tS.delete(e.id)
  },
  GUILD_SCHEDULED_EVENT_UPDATE: function(t) {
    let {
      guildScheduledEvent: e
    } = t;
    if (tP() || null == e.notification_type) returnfalse;
    e.notification_type === ts.sy.EVENT_START && (e.entity_type === ts.WX.STAGE_INSTANCE || e.entity_type === ts.WX.VOICE ? function(t) {
      if (tP()) return;
      let e = t.channel_id;
      if (null == e || tO(e)) return;
      let n = $.default.getCurrentUser(),
        i = Y.Z.getGuild(t.guild_id),
        l = x.Z.getChannel(t.channel_id),
        r = $.default.getUser(t.host_id);
      if (null != n && null != l && null != i && null != r && B.Z.can(a.$e(tu.Plq.CONNECT, tu.Plq.VIEW_CHANNEL), l)) to.Z.showNotification((0, W.EB)(i, 128), td.intl.formatToPlainString(td.t.bOu6Wl, {
        guildName: i.name
      }), td.intl.formatToPlainString(td.t.GV9L8v, {
        topic: t.name,
        username: ti.ZP.getName(i.id, l.id, r)
      }), {
        notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
        guild_id: i.id,
        channel_id: l.id
      }, {
        onClick() {
          t.entity_type === ts.WX.STAGE_INSTANCE && (0, G.Cq)(l), t.entity_type === ts.WX.VOICE && _.default.selectVoiceChannel(l.id)
        },
        isUserAvatar: false
      })
    }(e) : e.entity_type === ts.WX.EXTERNAL && function(t) {
      if (tP()) return;
      let e = $.default.getCurrentUser(),
        n = Y.Z.getGuild(t.guild_id);
      if (null != e && null != n) to.Z.showNotification((0, W.EB)(n, 128), td.intl.formatToPlainString(td.t.bOu6Wl, {
        guildName: n.name
      }), td.intl.formatToPlainString(td.t.mYyaRE, {
        topic: t.name
      }), {
        notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
        guild_id: n.id
      }, {
        onClick() {
          f.Z.transitionToGuildSync(t.guild_id), (0, v.bO)({
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
    if (tP()) returnfalse;
    let l = x.Z.getChannel(n.parent_id);
    if (null == l || !tu.TPd.GUILD_THREADS_ONLY.has(l.type) || !i || !(0, D.FI)(n, l, !tN)) returnfalse;
    let {
      author: a,
      user: r
    } = (0, C.MC)(n);
    if (null == r) returnfalse;
    let o = Y.Z.getGuild(l.guild_id);
    if (null == o) returnfalse;
    let u = td.intl.formatToPlainString(td.t["2IGVl5"], {
        channelName: l.name,
        guildName: o.name
      }),
      s = td.intl.formatToPlainString(td.t.jPhTvb, {
        channelName: n.name,
        userUsername: null != (e = null == a ? true : a.nick) ? e : null == r ? true : r.username
      }),
      d = r.getAvatarURL(true, 128);
    to.Z.showNotification(d, u, s, {
      notif_type: "THREAD_CREATE",
      notif_user_id: r.id
    }, {
      onClick() {
        (0, F.ok)(n)
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
    if (tP() || null == i || null == l || null == r || "reactions_push_notification" === r) returnfalse;
    to.Z.showNotification(n, i, l, {
      notif_type: r
    }, {
      onClick() {
        null != a && ((0, m.Z)(a), g.default.clickedNotification())
      },
      tag: o,
      isUserAvatar: false
    }).then(t => {
      null != t && null != e && tZ.track(e, t.notification, t.trackingProps)
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
    if (tP() || null == n || null == i || null == a) returnfalse;
    let {
      enableInAppNotifications: o
    } = L.Z.getCurrentConfig({
      location: "desktopNotification"
    }, {
      autoTrackExposure: true
    });
    if (!o) returnfalse;
    let u = r.channel_id;
    if (null == u || J.Z.getCurrentlySelectedChannelId() === u && tN) returnfalse;
    to.Z.showNotification(e, n, i, {
      notif_type: a
    }, {
      onClick() {
        null != l && ((0, m.Z)(l), g.default.clickedNotification())
      },
      isUserAvatar: true
    }).then(t => {
      null != t && null != u && tZ.track(u, t.notification, t.trackingProps)
    })
  },
  WINDOW_HIDDEN: function() {
    let t = (0, Chunk358085.isWindows)(),
      e = (0, Chunk358085.isLinux)();
    if (!(!Chunk433517.K.get(tp, false) && Chunk358085.isPlatformEmbedded && (module || exports))) returnfalse;
    let i = false;
    return null != tT && (i = tC.includes(tT)), !!i && (Chunk654769.Z.showNotification(require("./95045.js"), Chunk388032.intl.string(Chunk388032.t.VSgOVl), Chunk388032.intl.string(Chunk388032.t["+J/F6+"]), {
      notif_type: "WINDOW_HIDDEN"
    }, {
      overrideStreamerMode: true,
      onClick: () => {
        (0, Chunk703656.uL)(Chunk981631.Z5c.SETTINGS(module ? "windows" : "linux"))
      },
      onShown: () => {
        Chunk433517.K.set(tp, true)
      },
      isUserAvatar: false
    }), false)
  },
  LOGOUT: function() {
    return Chunk433517.K.remove(tp), false
  },
  CONNECTION_OPEN: function(t) {
    let {
      countryCode: e,
      guilds: n,
      presences: i
    } = t;
    tT = e, tS.clear(), n.forEach(t => t.stage_instances.forEach(t => tS.add(t.id))), (0, Z.uw)("NotificationStore") && (0, A.MH)() !== o.Tv.ACTIVITY_NOTIFICATIONS_DISABLED && tv(i, false)
  },
  MESSAGE_REMINDER_DUE: function(t) {
    let {
      savedMessage: e
    } = t;
    if (tP()) returnfalse;
    let n = e.message;
    if (null == n || null == n.author) returnfalse;
    let i = x.Z.getChannel(e.saveData.channelId);
    if (null == i) returnfalse;
    let {
      icon: l,
      body: a
    } = (0, D.Xi)(i, n, n.author);
    to.Z.showNotification(l, td.intl.string(td.t.IjZJBw), a, {
      notif_type: "MESSAGE_REMINDER_DUE"
    }, {
      onClick() {
        (0, m.Z)(tu.Z5c.CHANNEL(null == i ? true : i.getGuildId(), i.id, n.id))
      },
      isUserAvatar: true
    })
  },
  PRESENCE_UPDATES: function(t) {
    let {
      updates: e
    } = t;
    (0, Z.uw)("handlePresenceUpdates") && (0, A.MH)() !== o.Tv.ACTIVITY_NOTIFICATIONS_DISABLED && tv(e)
  }
})