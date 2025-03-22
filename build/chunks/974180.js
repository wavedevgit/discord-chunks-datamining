/** Chunk was on 70205 **/
n.d(t, {
  Ay: () => $,
  yk: () => j
}), n(47120), n(653041);
var i, l = n(149765),
  a = n(442837),
  o = n(433517),
  r = n(570140),
  u = n(493683),
  s = n(475179),
  d = n(749210),
  c = n(292556),
  f = n(287734),
  g = n(579806),
  E = n(802098),
  _ = n(933557),
  N = n(456269),
  S = n(15274),
  T = n(754688),
  p = n(336197),
  C = n(355298),
  I = n(601992),
  v = n(864060),
  h = n(11352),
  Z = n(671105),
  m = n(106371),
  y = n(703656),
  A = n(359110),
  P = n(922482),
  U = n(427679),
  D = n(488131),
  O = n(695346),
  R = n(592125),
  b = n(430824),
  G = n(292959),
  k = n(496675),
  L = n(699516),
  M = n(944486),
  w = n(885110),
  W = n(246946),
  F = n(594174),
  V = n(979651),
  H = n(5192),
  x = n(912101),
  z = n(358085),
  q = n(74538),
  Y = n(51144),
  X = n(981631),
  B = n(765305),
  J = n(388032);

function K(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let $ = "message1",
  j = .4,
  Q = (null === g.Z || void 0 === g.Z ? void 0 : g.Z.features.supports("notifications")) ? 20 : 1,
  ee = "discord_dismissed_notification_shown",
  et = document.hasFocus(),
  en = null,
  ei = new Set,
  el = ["FR", "GF", "PF", "TF", "RE", "GP", "MQ", "YT", "NC", "PM", "WF"],
  ea = new class {
    track(e, t) {
      let n = this._channels[e];
      for (null == n && (n = [], this._channels[e] = n), n.push(t); n.length > Q;) {
        let e = n.shift();
        null != e && null != e.close && e.close()
      }
    }
    clearChannel(e) {
      let t = this._channels[e];
      null != t && (delete this._channels[e], t.forEach(e => e.close()))
    }
    constructor() {
      K(this, "_channels", {})
    }
  };

function eo() {
  return !!(G.Z.getDesktopType() === X.qrD.NEVER || w.Z.getStatus() === X.Skl.DND || O.QZ.getSetting())
}

function er(e) {
  return null != V.Z.getVoiceStateForChannel(e)
}
class eu extends(i = a.ZP.Store) {
  initialize() {
    this.waitFor(F.default, R.Z, G.Z, b.Z, U.Z, L.Z, k.Z, V.Z, C.Z)
  }
}
K(eu, "displayName", "NotificationStore"), new eu(r.Z, __OVERLAY__ ? {} : {
  NOTIFICATIONS_SET_PERMISSION_STATE: function(e) {
    let {
      enabled: t
    } = e;
    t !== X.$Ab.ENABLED || z.isPlatformEmbedded || x.Z.showNotification(n(185672), J.NW.string(J.t.VSgOVl), J.NW.string(J.t["1UJvqa"]), {
      notif_type: "NOTIFICATIONS_SET_PERMISSION_STATE"
    }, {
      omitViewTracking: !0,
      sound: $,
      volume: j,
      tag: "hello",
      onClick: () => {
        window.focus()
      },
      isUserAvatar: !1
    })
  },
  NOTIFICATION_CREATE: function(e) {
    let {
      icon: t,
      title: n,
      body: i,
      trackingProps: l,
      options: a
    } = e;
    return !eo() && (x.Z.showNotification(t, n, i, l, a), !1)
  },
  WINDOW_FOCUS: function(e) {
    if (et = e.focused) {
      let e = M.Z.getChannelId();
      null != e && ea.clearChannel(e)
    }
  },
  MESSAGE_CREATE: function(e) {
    var t, i, l, a;
    let {
      channelId: o,
      message: u,
      optimistic: d
    } = e;
    if (d) return !1;
    let f = R.Z.getChannel(o),
      g = F.default.getUser(null === (t = u.author) || void 0 === t ? void 0 : t.id),
      _ = F.default.getCurrentUser();
    if (null == f || null == g) return !1;
    let N = (0, v.eF)(u, o, !et),
      S = G.Z.getNotifyMessagesInSelectedChannel() && (0, v.N_)(u, o);
    if (!N && !S || u.type === X.uaV.CHANGELOG && (null == u.changelog_id || E.Z.latestChangelogId() !== u.changelog_id)) return !1;
    let T = !G.Z.isSoundDisabled($),
      p = q.ZP.canUseCustomNotificationSounds(_),
      C = h.Y.getCurrentConfig({
        location: "NotificationStore"
      }).enabled,
      m = p && C && T ? null !== (a = (0, Z.bb)(null !== (l = f.guild_id) && void 0 !== l ? l : X.aIL, o)) && void 0 !== a ? a : (0, Z.iD)(f.guild_id) : void 0;
    if (S && (T && x.Z.playNotificationSound("message3", .4, m), !et) || !N) return !1;
    let y = n(808506).default,
      P = n(624864).Z,
      {
        OverlayNotificationDisabledSetting: U
      } = n(486016);
    if (null != y.getFocusedPID() && !P.isNotificationDisabled(U.TEXT_CHAT) && !W.Z.disableNotifications) return !1;
    let {
      icon: D,
      title: O,
      body: b
    } = (0, v.Xi)(f, u, g);
    if (r.Z.dispatch({
        type: "RPC_NOTIFICATION_CREATE",
        channelId: f.id,
        message: u,
        icon: D,
        title: O,
        body: b
      }), (0, I.R)(u, f.guild_id), G.Z.getDesktopType() === X.qrD.NEVER) return T && x.Z.playNotificationSound($, j, m), !1;
    x.Z.showNotification(D, O, b, {
      notif_type: "MESSAGE_CREATE",
      notif_user_id: null === (i = u.author) || void 0 === i ? void 0 : i.id,
      message_id: u.id,
      message_type: u.type,
      channel_id: f.id,
      channel_type: f.type,
      guild_id: f.guild_id
    }, {
      omitViewTracking: !0,
      tag: u.id,
      sound: T ? $ : void 0,
      soundpack: m,
      volume: j,
      onClick() {
        (0, A.Kh)(f.id), (f.type === X.d4z.GUILD_VOICE || f.type === X.d4z.GUILD_STAGE_VOICE) && s.Z.updateChatOpen(f.id, !0), c.default.clickedNotification()
      },
      isUserAvatar: !0
    }).then(e => {
      null != e && ea.track(f.id, e)
    })
  },
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    return null != t && ea.clearChannel(t), !1
  },
  MESSAGE_ACK: function(e) {
    let {
      channelId: t
    } = e;
    return ea.clearChannel(t), !1
  },
  ACTIVITY_START: function(e) {
    let {
      userId: t,
      activity: n
    } = e;
    if (eo()) return !1;
    if (n.type === X.IIU.PLAYING) {
      let e = F.default.getUser(t);
      if (null == e) return !1;
      let i = Y.ZP.getName(e),
        l = n.name,
        a = e.getAvatarURL(void 0, 128),
        o = J.NW.string(J.t.XoTWsL),
        r = J.NW.formatToPlainString(J.t.o4Aipq, {
          username: i,
          gameName: l
        });
      return x.Z.showNotification(a, o, r, {
        notif_type: "ACTIVITY_START",
        activity_type: X.IIU.PLAYING,
        notif_user_id: t,
        activity_name: l
      }, {
        sound: "message2",
        playSoundIfDisabled: !1,
        volume: .4,
        onClick() {
          u.Z.openPrivateChannel(t)
        },
        isUserAvatar: !0
      }), !1
    }
    return !1
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    if (eo()) return;
    let n = F.default.getCurrentUser();
    if (null == n) return;
    let i = t.find(e => e.userId === n.id);
    if (null == i) return;
    let {
      channelId: l,
      guildId: a,
      suppress: o,
      requestToSpeakTimestamp: r
    } = i;
    if (null == l || null == a || !(!o && null != r)) return;
    let u = b.Z.getGuild(a),
      s = R.Z.getChannel(l),
      d = U.Z.getStageInstanceByChannel(l);
    null != u && null != s && null != d && x.Z.showNotification(u.getIconURL(128), s.name, J.NW.formatToPlainString(J.t.sqnsSE, {
      channelName: (0, _.F6)(s, F.default, L.Z),
      channelTopic: null == d ? void 0 : d.topic
    }), {
      notif_type: "Stage Speak Invite"
    }, {
      isUserAvatar: !1
    })
  },
  STAGE_INSTANCE_UPDATE: function(e) {
    let {
      instance: t
    } = e;
    if (eo() || !t.send_start_notification || er(t.channel_id)) return !1;
    let n = F.default.getCurrentUser(),
      i = b.Z.getGuild(t.guild_id),
      a = R.Z.getChannel(t.channel_id),
      o = F.default.getUser(t.host_id);
    if (null == n || null == a || null == i || null == o || !(0, v.LL)(n, o, a) || !k.Z.can(l.$e(X.Plq.CONNECT, X.Plq.VIEW_CHANNEL), a) || ei.has(t.id)) return !1;
    ei.add(t.id), x.Z.showNotification(i.getIconURL(128), J.NW.formatToPlainString(J.t.bZ4OkZ, {
      guildName: i.name
    }), J.NW.formatToPlainString(J.t.qTelnJ, {
      username: H.ZP.getName(i.id, a.id, o),
      topic: t.topic
    }), {
      notif_type: "STAGE_INSTANCE_CREATE",
      guild_id: i.id,
      channel_id: a.id
    }, {
      onClick() {
        (0, P.Cq)(a)
      },
      isUserAvatar: !1
    })
  },
  STAGE_INSTANCE_DELETE: function(e) {
    let {
      instance: t
    } = e;
    ei.delete(t.id)
  },
  GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
    let {
      guildScheduledEvent: t
    } = e;
    if (eo() || null == t.notification_type) return !1;
    t.notification_type === B.sy.EVENT_START && (t.entity_type === B.WX.STAGE_INSTANCE || t.entity_type === B.WX.VOICE ? function(e) {
      if (eo()) return !1;
      let t = e.channel_id;
      if (null == t || er(t)) return !1;
      let n = F.default.getCurrentUser(),
        i = b.Z.getGuild(e.guild_id),
        a = R.Z.getChannel(e.channel_id),
        o = F.default.getUser(e.host_id);
      if (null == n || null == a || null == i || null == o || !k.Z.can(l.$e(X.Plq.CONNECT, X.Plq.VIEW_CHANNEL), a)) return !1;
      x.Z.showNotification(i.getIconURL(128), J.NW.formatToPlainString(J.t.bOu6Wl, {
        guildName: i.name
      }), J.NW.formatToPlainString(J.t.GV9L8v, {
        topic: e.name,
        username: H.ZP.getName(i.id, a.id, o)
      }), {
        notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
        guild_id: i.id,
        channel_id: a.id
      }, {
        onClick() {
          e.entity_type === B.WX.STAGE_INSTANCE && (0, P.Cq)(a), e.entity_type === B.WX.VOICE && f.default.selectVoiceChannel(a.id)
        },
        isUserAvatar: !1
      })
    }(t) : t.entity_type === B.WX.EXTERNAL && function(e) {
      if (eo()) return !1;
      let t = F.default.getCurrentUser(),
        n = b.Z.getGuild(e.guild_id);
      if (null == t || null == n) return !1;
      x.Z.showNotification(n.getIconURL(128), J.NW.formatToPlainString(J.t.bOu6Wl, {
        guildName: n.name
      }), J.NW.formatToPlainString(J.t.mYyaRE, {
        topic: e.name
      }), {
        notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
        guild_id: n.id
      }, {
        onClick() {
          d.Z.transitionToGuildSync(e.guild_id), (0, S.bO)({
            eventId: e.id
          })
        },
        isUserAvatar: !1
      })
    }(t))
  },
  THREAD_CREATE: function(e) {
    var t;
    let {
      channel: n,
      isNewlyCreated: i
    } = e;
    if (eo()) return !1;
    let l = R.Z.getChannel(n.parent_id);
    if (null == l || !X.TPd.GUILD_THREADS_ONLY.has(l.type) || !i || !(0, v.FI)(n, l, !et)) return !1;
    let {
      author: a,
      user: o
    } = (0, N.MC)(n);
    if (null == o) return !1;
    let r = b.Z.getGuild(l.guild_id);
    if (null == r) return !1;
    let u = J.NW.formatToPlainString(J.t["2IGVl5"], {
        channelName: l.name,
        guildName: r.name
      }),
      s = J.NW.formatToPlainString(J.t.jPhTvb, {
        channelName: n.name,
        userUsername: null !== (t = null == a ? void 0 : a.nick) && void 0 !== t ? t : null == o ? void 0 : o.username
      }),
      d = o.getAvatarURL(void 0, 128);
    x.Z.showNotification(d, u, s, {
      notif_type: "THREAD_CREATE",
      notif_user_id: o.id
    }, {
      onClick() {
        (0, D.ok)(n)
      },
      isUserAvatar: !0
    })
  },
  GENERIC_PUSH_NOTIFICATION_SENT: function(e) {
    let t, {
      icon: n,
      title: i,
      body: l,
      route: a,
      trackingType: o,
      tag: r
    } = e;
    if (eo() || null == i || null == l || null == o) return !1;
    let u = "reactions_push_notification" === o;
    if (u) {
      var s;
      let {
        enableInAppNotifications: e
      } = m.Z.getCurrentConfig({
        location: "desktopNotification"
      }, {
        autoTrackExposure: !0
      });
      if (!e) return !1;
      let n = null !== (s = (0, T.Qj)(a)) && void 0 !== s ? s : {
        channelId: null,
        guildId: null
      };
      if (null == (t = n.channelId) || null == n.guildId || M.Z.getCurrentlySelectedChannelId() === t && et) return !1
    }
    x.Z.showNotification(n, i, l, {
      notif_type: o
    }, {
      onClick() {
        null != a && ((0, p.Z)(a), c.default.clickedNotification())
      },
      tag: r,
      isUserAvatar: u
    }).then(e => {
      null != e && null != t && ea.track(t, e)
    })
  },
  WINDOW_HIDDEN: function() {
    let e = (0, z.isWindows)(),
      t = (0, z.isLinux)();
    if (!(!o.K.get(ee, !1) && z.isPlatformEmbedded && (e || t))) return !1;
    let i = !1;
    return null != en && (i = el.includes(en)), !!i && (x.Z.showNotification(n(95045), J.NW.string(J.t.VSgOVl), J.NW.string(J.t["+J/F6+"]), {
      notif_type: "WINDOW_HIDDEN"
    }, {
      overrideStreamerMode: !0,
      onClick: () => {
        (0, y.uL)(X.Z5c.SETTINGS(e ? "windows" : "linux"))
      },
      onShown: () => {
        o.K.set(ee, !0)
      },
      isUserAvatar: !1
    }), !1)
  },
  LOGOUT: function() {
    return o.K.remove(ee), !1
  },
  CONNECTION_OPEN: function(e) {
    let {
      countryCode: t,
      guilds: n
    } = e;
    en = t, ei.clear(), n.forEach(e => e.stage_instances.forEach(e => ei.add(e.id)))
  },
  MESSAGE_REMINDER_DUE: function(e) {
    let {
      savedMessage: t
    } = e;
    if (eo()) return !1;
    let n = t.message;
    if (null == n || null == n.author) return !1;
    let i = R.Z.getChannel(t.saveData.channelId);
    if (null == i) return !1;
    let {
      icon: l,
      body: a
    } = (0, v.Xi)(i, n, n.author);
    x.Z.showNotification(l, J.NW.string(J.t.IjZJBw), a, {
      notif_type: "MESSAGE_REMINDER_DUE"
    }, {
      onClick() {
        (0, p.Z)(X.Z5c.CHANNEL(null == i ? void 0 : i.getGuildId(), i.id, n.id))
      },
      isUserAvatar: !0
    })
  }
})