/** Chunk was on web.js **/
/** chunk id: 593648, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => el
}), require("./539854.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk524437 = require("./524437.js"),
  Chunk433517 = require("./433517.js"),
  Chunk199849 = require("./199849.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk292556 = require("./292556.js"),
  Chunk87051 = require("./87051.js"),
  Chunk419363 = require("./419363.js"),
  Chunk818083 = require("./818083.js"),
  Chunk820942 = require("./820942.js"),
  Chunk705579 = require("./705579.js"),
  Chunk487419 = require("./487419.js"),
  Chunk197344 = require("./197344.js"),
  Chunk476756 = require("./476756.jsx"),
  Chunk734934 = require("./734934.js"),
  Chunk891353 = require("./891353.js"),
  Chunk801056 = require("./801056.js"),
  Chunk106371 = require("./106371.js"),
  Chunk995774 = require("./995774.js"),
  Chunk921801 = require("./921801.js"),
  Chunk460181 = require("./460181.js"),
  Chunk210176 = require("./210176.js"),
  Chunk430824 = require("./430824.js"),
  Chunk292959 = require("./292959.js"),
  Chunk9156 = require("./9156.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk912101 = require("./912101.js"),
  Chunk709054 = require("./709054.js"),
  Chunk45640 = require("./45640.js"),
  Chunk695346 = require("./695346.js"),
  Chunk675478 = require("./675478.js"),
  Chunk273313 = require("./273313.jsx"),
  Chunk33656 = require("./33656.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk468788 = require("./468788.js"),
  Chunk490897 = require("./490897.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk966470 = require("./966470.js");

function K(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      K(e, t, n[t])
    })
  }
  return e
}

function q(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function Q(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : q(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function X(e) {
  L.Z.requestPermission(t => {
    let n = t ? F.$Ab.ENABLED : F.$Ab.BLOCKED;
    f.default.setPermissionsState(n, e)
  })
}

function J(e) {
  let {
    label: t,
    enabled: n,
    disabled: i,
    onPreview: a,
    onChange: o
  } = e;
  return (0, r.jsx)(d.rsf, {
    label: t,
    checked: n,
    onChange: o,
    disabled: i,
    description: Y.intl.format(Y.t.OOiGCM, {
      onClick: a
    })
  })
}

function $(e) {
  let {
    disabledSounds: t,
    disableAllSounds: n,
    notifyMessagesInSelectedChannel: a
  } = e, o = i.useRef(null), s = (0, O.p)(), l = i.useCallback((e, t) => {
    t.stopPropagation(), t.preventDefault(), null != o.current && o.current.stop(), o.current = (0, C.GN)(e)
  }, []), c = i.useCallback((e, n) => {
    let r = t.filter(t => t !== e);
    n || r.push(e), f.default.setDisabledSounds(r)
  }, [t]);
  i.useEffect(() => () => {
    var e;
    null == (e = o.current) || e.stop()
  });
  let u = [{
      label: Y.intl.string(Y.t.pz71xC),
      sound: "message1",
      focusModeDisabled: s
    }, {
      label: Y.intl.string(Y.t.hK51Yg),
      sound: "deafen"
    }, {
      label: Y.intl.string(Y.t.XiejaJ),
      sound: "undeafen"
    }, {
      label: Y.intl.string(Y.t.w4m945),
      sound: "mute"
    }, {
      label: Y.intl.string(Y.t.YqAjXy),
      sound: "unmute"
    }, {
      label: Y.intl.string(Y.t.JoTq8n),
      sound: "camera_on"
    }, {
      label: Y.intl.string(Y.t["8P6tQ6"]),
      sound: "camera_off"
    }, {
      label: Y.intl.string(Y.t["juL9/L"]),
      sound: "disconnect"
    }, {
      label: Y.intl.string(Y.t.x98vQq),
      sound: "ptt_start"
    }, {
      label: Y.intl.string(Y.t["1HjRqC"]),
      sound: "ptt_stop"
    }, {
      label: Y.intl.string(Y.t["9JB1Ck"]),
      sound: "user_join"
    }, {
      label: Y.intl.string(Y.t.KUBBNt),
      sound: "user_leave"
    }, {
      label: Y.intl.string(Y.t.EZjqUT),
      sound: "user_moved"
    }, {
      label: Y.intl.string(Y.t.LnNlQh),
      sound: "call_calling"
    }, {
      label: Y.intl.string(Y.t.XBrJT6),
      sound: "call_ringing"
    }, {
      label: Y.intl.string(Y.t.Nd8P5y),
      sound: "stream_started"
    }, {
      label: Y.intl.string(Y.t["9bYj+G"]),
      sound: "stream_ended"
    }, {
      label: Y.intl.string(Y.t.KccUI1),
      sound: "stream_user_joined"
    }, {
      label: Y.intl.string(Y.t.dsjkiN),
      sound: "stream_user_left"
    }, {
      label: Y.intl.string(Y.t.nFOcf9),
      sound: "activity_launch"
    }, {
      label: Y.intl.string(Y.t["a6lw/u"]),
      sound: "activity_end"
    }, {
      label: Y.intl.string(Y.t.KaFxrY),
      sound: "activity_user_join"
    }, {
      label: Y.intl.string(Y.t.S14z9n),
      sound: "activity_user_left"
    }, {
      label: Y.intl.string(Y.t.CP3DC3),
      sound: "reconnect"
    }],
    p = null != b.Z.useHolidaySoundpack();
  return (0, r.jsx)(A.F, {
    setting: B.s6.NOTIFICATIONS_SOUNDS,
    children: (0, r.jsx)("div", {
      children: (0, r.jsxs)(d.C3N, {
        label: Y.intl.string(Y.t.MKWyKc),
        children: [p ? (0, r.jsx)(y.Z, {}) : null, (0, r.jsx)(d.rsf, {
          label: Y.intl.string(Y.t.lF5GGe),
          description: Y.intl.string(Y.t["7oXUim"]),
          checked: a && !n,
          onChange: f.default.setNotifyMessagesInSelectedChannel,
          disabled: n
        }), (0, r.jsx)(d.rsf, {
          label: Y.intl.string(Y.t["2ZhCOd"]),
          description: Y.intl.string(Y.t["+B0XLE"]),
          checked: n,
          onChange: f.default.toggleDisableAllSounds
        }), u.map((e, i) => {
          let {
            label: a,
            sound: o,
            focusModeDisabled: s
          } = e;
          return (0, r.jsxs)(d.Kqy, {
            children: [i > 0 && (0, r.jsx)(d.izJ, {
              gap: 8
            }), (0, r.jsx)(J, {
              label: a,
              disabled: n || true === s,
              onChange: e => c(o, e),
              onPreview: e => l(o, e),
              enabled: !n && !t.includes(o) && true !== s
            }, o), s ? (0, r.jsx)(d.Wn, {
              messageType: d.QYI.WARNING,
              children: Y.intl.string(Y.t.cIRG0s)
            }) : null]
          }, o)
        })]
      })
    })
  })
}

function ee() {
  let e = (0, Chunk442837.e7)([Chunk487419.Z], () => Chunk487419.Z.getGuildAlertSettings()),
    [t, n] = Chunk473749.useState(null),
    a = Chunk709054.default.keys(module).map(t => {
      let n = e[t];
      return {
        label: n.guildName,
        value: n.guildId
      }
    });
  return 0 === Object.keys(module).length ? null : (0, Chunk54381.jsx)(Chunk921801.F, {
    setting: Chunk726985.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
    children: (0, Chunk54381.jsxs)(Chunk481060.C3N, {
      label: Chunk388032.intl.string(Chunk388032.t.D9yVAH),
      description: Chunk388032.intl.string(Chunk388032.t["0PhAOH"]),
      children: [(0, Chunk54381.jsx)(Chunk199849.y6, {
        label: Chunk388032.intl.string(Chunk388032.t.Q0PsXX),
        value: exports,
        onChange: e => {
          n(e)
        },
        options: Chunk392711
      }), null != exports ? (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
        children: [(0, Chunk54381.jsx)(Chunk921801.F, {
          setting: Chunk726985.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS,
          children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
            label: Chunk388032.intl.string(Chunk388032.t.u6dc5B),
            description: Chunk388032.intl.string(Chunk388032.t.z8Td48),
            checked: !module[exports].disableRaidAlertNag,
            onChange: () => {
              (0, Chunk675478.PS)(exports, e => {
                e.disableRaidAlertNag = !e.disableRaidAlertNag
              }, Chunk675478.fy.INFREQUENT_USER_ACTION)
            }
          })
        }), (0, Chunk54381.jsx)(Chunk921801.F, {
          setting: Chunk726985.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS,
          children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
            label: Chunk388032.intl.string(Chunk388032.t.P8MG6q),
            description: Chunk388032.intl.string(Chunk388032.t.PyxXs8),
            checked: !module[exports].disableRaidAlertPush,
            onChange: () => {
              (0, Chunk675478.PS)(exports, e => {
                e.disableRaidAlertPush = !e.disableRaidAlertPush
              }, Chunk675478.fy.INFREQUENT_USER_ACTION)
            }
          })
        })]
      }) : null]
    })
  })
}
class et extends Chunk473749.PureComponent {
  handleDesktopChange(e) {
    let t = e ? F.qrD.ALL : F.qrD.NEVER;
    t !== F.qrD.NEVER ? X("UserSettingsModal") : f.default.setDesktopType(t)
  }
  handleTTSChange(e) {
    let t = e;
    f.default.setTTSType(t)
  }
  render() {
    let {
      desktopType: e,
      afkTimeout: t,
      disableUnreadBadge: n,
      taskbarFlash: i,
      disabledSounds: a,
      disableAllSounds: s,
      notifyMessagesInSelectedChannel: l,
      focusMode: c
    } = this.props, f = Chunk45640.Z.getCurrentConfig({
      location: "Messages"
    }).enabled || 0 === exports ? 0 : 1, p = o().range(Chunk292556, 11).map(e => ({
      value: 60 * e,
      label: 0 === e ? Y.intl.string(Y.t["0QN7cZ"]) : Y.intl.formatToPlainString(Y.t.iXLF9W, {
        minutes: e
      })
    }));
    return (0, Chunk54381.jsx)(Chunk273313.Z, {
      title: Chunk388032.intl.string(Chunk388032.t.HcoRu0),
      children: (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
        gap: 16,
        children: [(0, Chunk54381.jsx)(Chunk921801.F, {
          setting: Chunk726985.s6.NOTIFICATIONS_ENABLE_DESKTOP,
          children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
            label: Chunk388032.intl.string(Chunk388032.t["/0WCll"]),
            checked: module !== Chunk981631.qrD.NEVER && !Chunk433517,
            description: Chunk433517 ? Chunk388032.intl.string(Chunk388032.t.cIRG0s) : Chunk388032.intl.string(Chunk388032.t.wF9ih3),
            onChange: this.handleDesktopChange,
            disabled: Chunk433517
          })
        }), (0, Chunk54381.jsx)(er, {}), (0, Chunk54381.jsx)(Chunk921801.F, {
          setting: Chunk726985.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE,
          children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
            label: Chunk388032.intl.string(Chunk388032.t.VH8AIJ),
            description: Chunk388032.intl.string(Chunk388032.t["9K4qwX"]),
            checked: !require,
            onChange: this.handleToggleShowUnreadBadge
          })
        }), (0, Chunk54381.jsx)(Chunk921801.F, {
          setting: Chunk726985.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING,
          children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
            label: Chunk388032.intl.string(Chunk388032.t.xSmFQG),
            description: Chunk388032.intl.string(Chunk388032.t.bd4j4x),
            checked: Chunk473749,
            onChange: this.handleToggleShowFlash
          })
        }), (0, Chunk54381.jsx)(ei, {}), (0, Chunk54381.jsx)(eu, {}), (0, Chunk54381.jsx)(ed, {}), (0, Chunk54381.jsx)(ef, {}), (0, Chunk54381.jsx)(ep, {}), (0, Chunk54381.jsx)(e_, {}), (0, Chunk54381.jsx)(em, {}), (0, Chunk54381.jsx)(ec, {}), (0, Chunk54381.jsxs)(Chunk921801.F, {
          setting: Chunk726985.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT,
          children: [(0, Chunk54381.jsx)(Chunk199849.y6, {
            label: Chunk388032.intl.string(Chunk388032.t.TTvjd9),
            description: Chunk388032.intl.string(Chunk388032.t.Xytv9C),
            value: exports,
            onChange: Chunk695346.CM.updateSetting,
            options: Chunk87051
          }), (0, Chunk54381.jsx)(Chunk481060.izJ, {
            gap: 16
          })]
        }), this.renderTTS(), (0, Chunk54381.jsx)(ee, {}), (0, Chunk54381.jsx)(Chunk481060.izJ, {
          gap: 24
        }), (0, Chunk54381.jsx)($, {
          disabledSounds: Chunk392711,
          disableAllSounds: Chunk442837,
          notifyMessagesInSelectedChannel: Chunk524437
        }), (0, Chunk54381.jsx)(Chunk33656.Z, {})]
      })
    })
  }
  constructor(...e) {
    super(...e), K(this, "handleToggleShowUnreadBadge", () => {
      f.default.setDisableUnreadBadge(!this.props.disableUnreadBadge)
    }), K(this, "handleToggleShowFlash", () => {
      f.default.setTaskbarFlash(!this.props.taskbarFlash)
    }), K(this, "renderTTS", () => {
      if (!_.Zh) return null;
      let e = [{
        name: Y.intl.string(Y.t.B1AGeJ),
        value: F.PrB.ALL_CHANNELS
      }, {
        name: Y.intl.string(Y.t.uM2rNr),
        value: F.PrB.SELECTED_CHANNEL
      }, {
        name: Y.intl.string(Y.t.DYO5Oi),
        value: F.PrB.NEVER
      }];
      return (0, r.jsxs)(A.F, {
        setting: B.s6.NOTIFICATIONS_TEXT_TO_SPEECH,
        children: [(0, r.jsx)(d.FXm, {
          label: Y.intl.string(Y.t.VIm5MO),
          description: Y.intl.string(Y.t["+4dnA5"]),
          options: e,
          onChange: this.handleTTSChange,
          value: this.props.ttsType
        }), (0, r.jsx)(d.izJ, {
          gap: 16
        })]
      })
    })
  }
}
let en = (0, Chunk818083.B)({
  kind: "user",
  id: "2024-01_mention_on_all_messages",
  label: "Mention on all messages",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Increment mention count when receiving a message in a channel set to all messages",
    config: {
      enabled: true
    }
  }]
});

function er() {
  let e = en.useExperiment({
      location: "settings"
    }, {
      autoTrackExposure: false
    }).enabled,
    t = (0, Chunk442837.e7)([Chunk9156.ZP], () => Chunk9156.ZP.mentionOnAllMessages);
  return module ? (0, Chunk54381.jsx)(Chunk921801.F, {
    setting: Chunk726985.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES,
    children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
      label: "Mention on all messages?",
      description: "Increments the mention count when receiving a message in a channel set to 'All Messages'",
      checked: exports,
      onChange: e => {
        p.Z.setAccountFlag(V.c.MENTION_ON_ALL_MESSAGES, e)
      }
    })
  }) : null
}

function ei() {
  let [e, t] = Chunk473749.useState(false), n = (0, Chunk442837.e7)([Chunk594174.default], () => {
    var e;
    return null == (e = Chunk594174.default.getCurrentUser()) ? true : module.isStaff()
  }), a = (0, Chunk442837.e7)([Chunk9156.ZP], () => Chunk9156.ZP.useNewNotifications);
  return Chunk392711 || require ? (0, Chunk54381.jsx)(Chunk921801.F, {
    setting: Chunk726985.s6.NOTIFICATIONS_UNREAD_SETTINGS,
    children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
      label: "New Unreads Setting (Experimental)",
      description: "Turns off the new unread setting that allows you to pick which channels are most important in a server.",
      checked: Chunk392711,
      disabled: module,
      onChange: () => Chunk392711 ? eo(exports) : ea(exports)
    })
  }) : null
}
async function ea(e) {
  e(true), await p.Z.setAccountFlag(V.c.USE_NEW_NOTIFICATIONS, true), e(false)
}
async function eo(e) {
  e(true), c.K.set("turnedOffNewNotifications", true), x.default.track(F.rMx.NOTIFICATION_MIGRATION_OPTOUT, {
    num_guilds_with_new_setting: P.Z.getGuildsArray().filter(e => w.ZP.resolveGuildUnreadSetting(e) === H.i.ONLY_MENTIONS).length
  }), await p.Z.setAccountFlag(V.c.USE_NEW_NOTIFICATIONS, false), e(false)
}

function es(e) {
  let t = (0, O.p)();
  return (0, r.jsx)(et, Q(z({}, e), {
    focusMode: t
  }))
}

function el() {
  let e = (0, Chunk442837.cj)([Chunk292959.Z], () => ({
    disableUnreadBadge: Chunk292959.Z.getDisableUnreadBadge(),
    taskbarFlash: Chunk292959.Z.taskbarFlash,
    disabledSounds: Chunk292959.Z.getDisabledSounds(),
    disableAllSounds: Chunk292959.Z.getDisableAllSounds(),
    desktopType: Chunk292959.Z.getDesktopType(),
    ttsType: Chunk292959.Z.getTTSType(),
    notifyMessagesInSelectedChannel: Chunk292959.Z.getNotifyMessagesInSelectedChannel()
  }));
  return (0, Chunk54381.jsx)(es, Q(z({}, module), {
    afkTimeout: Chunk695346.CM.useSetting()
  }))
}

function ec() {
  let e = Chunk695346.fz.useSetting(),
    t = [{
      name: Chunk388032.intl.string(Chunk388032.t["9x/RtT"]),
      value: Chunk524437.Ns.NOTIFICATIONS_ENABLED
    }, {
      name: Chunk388032.intl.string(Chunk388032.t.fJAbQd),
      value: Chunk524437.Ns.ONLY_DMS
    }, {
      name: Chunk388032.intl.string(Chunk388032.t["xu+UDU"]),
      value: Chunk524437.Ns.NOTIFICATIONS_DISABLED
    }],
    n = t => {
      (0, T.MR)(t.value, e)
    };
  return Chunk106371.Z.getCurrentConfig({
    location: "webSettings"
  }).enableInAppNotifications ? (0, Chunk54381.jsxs)(Chunk921801.F, {
    setting: Chunk726985.s6.NOTIFICATIONS_REACTIONS,
    children: [(0, Chunk54381.jsx)(Chunk481060.FXm, {
      label: Chunk388032.intl.string(Chunk388032.t.Rq0NFs),
      description: Chunk388032.intl.string(Chunk388032.t.oWF6eQ),
      options: exports,
      onChange: e => n({
        value: e
      }),
      value: module
    }), (0, Chunk54381.jsx)(Chunk481060.izJ, {
      gap: 16
    })]
  }) : null
}

function eu() {
  let e = Chunk695346.d8.useSetting(),
    t = Chunk695346.JN.useSetting();
  return (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
    children: [(0, Chunk54381.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.NOTIFICATIONS_VOICE_ACTIVITY,
      children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
        label: Chunk388032.intl.string(Chunk388032.t.wtk08S),
        description: Chunk388032.intl.string(Chunk388032.t.rngMNx),
        checked: module,
        onChange: Chunk210176.I
      })
    }), (0, Chunk54381.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.NOTIFICATIONS_GO_LIVE,
      children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
        label: Chunk388032.intl.string(Chunk388032.t.pW4TMp),
        description: Chunk388032.intl.string(Chunk388032.t["H+WYqZ"]),
        checked: exports,
        onChange: Chunk695346.JN.updateSetting
      })
    })]
  })
}

function ed() {
  let e = Chunk695346.vc.useSetting();
  return (0, Chunk54381.jsx)(Chunk921801.F, {
    setting: Chunk726985.s6.NOTIFICATIONS_FRIEND_ANNIVERSARY,
    children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
      label: Chunk388032.intl.string(Chunk388032.t.hi4dSk),
      description: Chunk388032.intl.string(Chunk388032.t["00TNo7"]),
      badge: "beta",
      checked: module,
      onChange: Chunk695346.vc.updateSetting
    })
  })
}

function ef() {
  let e = Chunk695346.JY.useSetting();
  return (0, Chunk54381.jsx)(Chunk921801.F, {
    setting: Chunk726985.s6.NOTIFICATIONS_FRIEND_ONLINE,
    children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
      label: Chunk388032.intl.string(Chunk388032.t["uvIi/4"]),
      description: Chunk388032.intl.string(Chunk388032.t.E6O06k),
      checked: module,
      onChange: Chunk891353.N
    })
  })
}

function ep() {
  let e = Chunk695346.V6.useSetting();
  return (0, Chunk54381.jsx)(Chunk921801.F, {
    setting: Chunk726985.s6.NOTIFICATIONS_USER_RESURRECTION,
    children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
      label: Chunk388032.intl.string(Chunk388032.t.Zyn45S),
      description: Chunk388032.intl.string(Chunk388032.t.XdihbD),
      checked: module,
      onChange: Chunk705579.F
    })
  })
}

function e_() {
  let e = Chunk695346.p1.useSetting();
  return (0, Chunk54381.jsx)(Chunk921801.F, {
    setting: Chunk726985.s6.NOTIFICATIONS_GAME_UPDATE,
    children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
      label: Chunk388032.intl.string(Chunk966470.default["3TO4/r"]),
      description: Chunk388032.intl.string(Chunk966470.default.diGDe0),
      checked: module,
      onChange: Chunk820942.c
    })
  })
}

function em() {
  let e = Chunk695346.a7.useSetting();
  return (0, Chunk54381.jsx)(Chunk921801.F, {
    setting: Chunk726985.s6.NOTIFICATIONS_PROFILE_UPDATES,
    children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
      label: Chunk388032.intl.string(Chunk388032.t.VxBO2F),
      description: Chunk388032.intl.string(Chunk388032.t.F4VeBe),
      checked: module,
      onChange: Chunk801056.A
    })
  })
}