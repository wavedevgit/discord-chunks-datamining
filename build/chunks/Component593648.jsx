/** Chunk was on web.js **/
/** chunk id: 593648, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => ei
}), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk524437 = require("./524437.js"),
  Chunk433517 = require("./433517.js"),
  Chunk481060 = require("./481060.js"),
  Chunk292556 = require("./292556.js"),
  Chunk87051 = require("./87051.js"),
  Chunk419363 = require("./419363.js"),
  Chunk818083 = require("./818083.js"),
  Chunk705579 = require("./705579.js"),
  Chunk487419 = require("./487419.js"),
  Chunk197344 = require("./197344.js"),
  Chunk476756 = require("./476756.jsx"),
  Chunk734934 = require("./734934.js"),
  Chunk891353 = require("./891353.js"),
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
  Chunk388032 = require("./388032.jsx");

function V(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function H(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      V(e, t, n[t])
    })
  }
  return e
}

function Y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function W(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function K(e) {
  D.Z.requestPermission(t => {
    let n = t ? G.$Ab.ENABLED : G.$Ab.BLOCKED;
    d.default.setPermissionsState(n, e)
  })
}

function z(e) {
  let {
    label: t,
    enabled: n,
    disabled: i,
    onPreview: a,
    onChange: o
  } = e;
  return (0, r.jsx)(u.rsf, {
    label: t,
    checked: n,
    onChange: o,
    disabled: i,
    description: F.intl.format(F.t.OOiGCM, {
      onClick: a
    })
  })
}

function q(e) {
  let {
    disabledSounds: t,
    disableAllSounds: n,
    notifyMessagesInSelectedChannel: a
  } = e, o = i.useRef(null), s = (0, b.p)(), l = i.useCallback((e, t) => {
    t.stopPropagation(), t.preventDefault(), null != o.current && o.current.stop(), o.current = (0, T.GN)(e)
  }, []), c = i.useCallback((e, n) => {
    let r = t.filter(t => t !== e);
    n || r.push(e), d.default.setDisabledSounds(r)
  }, [t]);
  i.useEffect(() => () => {
    var e;
    null == (e = o.current) || e.stop()
  });
  let f = [{
      label: F.intl.string(F.t.pz71xC),
      sound: "message1",
      focusModeDisabled: s
    }, {
      label: F.intl.string(F.t.hK51Yg),
      sound: "deafen"
    }, {
      label: F.intl.string(F.t.XiejaJ),
      sound: "undeafen"
    }, {
      label: F.intl.string(F.t.w4m945),
      sound: "mute"
    }, {
      label: F.intl.string(F.t.YqAjXy),
      sound: "unmute"
    }, {
      label: F.intl.string(F.t.JoTq8n),
      sound: "camera_on"
    }, {
      label: F.intl.string(F.t["8P6tQ6"]),
      sound: "camera_off"
    }, {
      label: F.intl.string(F.t["juL9/L"]),
      sound: "disconnect"
    }, {
      label: F.intl.string(F.t.x98vQq),
      sound: "ptt_start"
    }, {
      label: F.intl.string(F.t["1HjRqC"]),
      sound: "ptt_stop"
    }, {
      label: F.intl.string(F.t["9JB1Ck"]),
      sound: "user_join"
    }, {
      label: F.intl.string(F.t.KUBBNt),
      sound: "user_leave"
    }, {
      label: F.intl.string(F.t.EZjqUT),
      sound: "user_moved"
    }, {
      label: F.intl.string(F.t.LnNlQh),
      sound: "call_calling"
    }, {
      label: F.intl.string(F.t.XBrJT6),
      sound: "call_ringing"
    }, {
      label: F.intl.string(F.t.Nd8P5y),
      sound: "stream_started"
    }, {
      label: F.intl.string(F.t["9bYj+G"]),
      sound: "stream_ended"
    }, {
      label: F.intl.string(F.t.KccUI1),
      sound: "stream_user_joined"
    }, {
      label: F.intl.string(F.t.dsjkiN),
      sound: "stream_user_left"
    }, {
      label: F.intl.string(F.t.nFOcf9),
      sound: "activity_launch"
    }, {
      label: F.intl.string(F.t["a6lw/u"]),
      sound: "activity_end"
    }, {
      label: F.intl.string(F.t.KaFxrY),
      sound: "activity_user_join"
    }, {
      label: F.intl.string(F.t.S14z9n),
      sound: "activity_user_left"
    }, {
      label: F.intl.string(F.t.CP3DC3),
      sound: "reconnect"
    }],
    _ = null != g.Z.useHolidaySoundpack();
  return (0, r.jsx)(I.F, {
    setting: U.s6.NOTIFICATIONS_SOUNDS,
    children: (0, r.jsx)("div", {
      children: (0, r.jsxs)(u.C3N, {
        label: F.intl.string(F.t.MKWyKc),
        children: [_ ? (0, r.jsx)(E.Z, {}) : null, (0, r.jsx)(u.rsf, {
          label: F.intl.string(F.t.lF5GGe),
          description: F.intl.string(F.t["7oXUim"]),
          checked: a,
          onChange: d.default.setNotifyMessagesInSelectedChannel
        }), (0, r.jsx)(u.rsf, {
          label: F.intl.string(F.t["2ZhCOd"]),
          description: F.intl.string(F.t["+B0XLE"]),
          checked: n,
          onChange: d.default.toggleDisableAllSounds
        }), f.map((e, i) => {
          let {
            label: a,
            sound: o,
            focusModeDisabled: s
          } = e;
          return (0, r.jsxs)(u.Kqy, {
            children: [i > 0 && (0, r.jsx)(u.izJ, {
              gap: 8
            }), (0, r.jsx)(z, {
              label: a,
              disabled: n || true === s,
              onChange: e => c(o, e),
              onPreview: e => l(o, e),
              enabled: !n && !t.includes(o) && true !== s
            }, o), s ? (0, r.jsx)(u.Wn, {
              messageType: u.QYI.WARNING,
              children: F.intl.string(F.t.cIRG0s)
            }) : null]
          }, o)
        })]
      })
    })
  })
}

function X() {
  let e = (0, Chunk442837.e7)([Chunk487419.Z], () => Chunk487419.Z.getGuildAlertSettings()),
    [t, n] = Chunk647438.useState(null),
    a = Chunk709054.default.keys(module).map(t => {
      let n = e[t];
      return {
        label: n.guildName,
        value: n.guildId
      }
    });
  return 0 === Object.keys(module).length ? null : (0, Chunk951288.jsx)(Chunk921801.F, {
    setting: Chunk726985.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
    children: (0, Chunk951288.jsxs)(Chunk481060.C3N, {
      label: Chunk388032.intl.string(Chunk388032.t.D9yVAH),
      description: Chunk388032.intl.string(Chunk388032.t["0PhAOH"]),
      children: [(0, Chunk951288.jsx)(Chunk481060.q4e, {
        label: Chunk388032.intl.string(Chunk388032.t.Q0PsXX),
        value: exports,
        onChange: e => {
          n(e)
        },
        options: Chunk392711
      }), null != exports ? (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
        children: [(0, Chunk951288.jsx)(Chunk921801.F, {
          setting: Chunk726985.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS,
          children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
            label: Chunk388032.intl.string(Chunk388032.t.u6dc5B),
            description: Chunk388032.intl.string(Chunk388032.t.z8Td48),
            checked: !module[exports].disableRaidAlertNag,
            onChange: () => {
              (0, Chunk675478.PS)(exports, e => {
                e.disableRaidAlertNag = !e.disableRaidAlertNag
              }, Chunk675478.fy.INFREQUENT_USER_ACTION)
            }
          })
        }), (0, Chunk951288.jsx)(Chunk921801.F, {
          setting: Chunk726985.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS,
          children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
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
class Q extends Chunk647438.PureComponent {
  handleDesktopChange(e) {
    let t = e ? G.qrD.ALL : G.qrD.NEVER;
    t !== G.qrD.NEVER ? K("UserSettingsModal") : d.default.setDesktopType(t)
  }
  handleTTSChange(e) {
    let t = e;
    d.default.setTTSType(t)
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
    } = this.props, d = Chunk45640.Z.getCurrentConfig({
      location: "Messages"
    }).enabled || 0 === exports ? 0 : 1, f = o().range(Chunk292556, 11).map(e => ({
      value: 60 * e,
      label: 0 === e ? F.intl.string(F.t["0QN7cZ"]) : F.intl.formatToPlainString(F.t.iXLF9W, {
        minutes: e
      })
    }));
    return (0, Chunk951288.jsx)(Chunk273313.Z, {
      title: Chunk388032.intl.string(Chunk388032.t.HcoRu0),
      children: (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
        gap: 16,
        children: [(0, Chunk951288.jsx)(Chunk921801.F, {
          setting: Chunk726985.s6.NOTIFICATIONS_ENABLE_DESKTOP,
          children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
            label: Chunk388032.intl.string(Chunk388032.t["/0WCll"]),
            checked: module !== Chunk981631.qrD.NEVER && !Chunk433517,
            description: Chunk433517 ? Chunk388032.intl.string(Chunk388032.t.cIRG0s) : Chunk388032.intl.string(Chunk388032.t.wF9ih3),
            onChange: this.handleDesktopChange,
            disabled: Chunk433517
          })
        }), (0, Chunk951288.jsx)($, {}), (0, Chunk951288.jsx)(Chunk921801.F, {
          setting: Chunk726985.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE,
          children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
            label: Chunk388032.intl.string(Chunk388032.t.VH8AIJ),
            description: Chunk388032.intl.string(Chunk388032.t["9K4qwX"]),
            checked: !require,
            onChange: this.handleToggleShowUnreadBadge
          })
        }), (0, Chunk951288.jsx)(Chunk921801.F, {
          setting: Chunk726985.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING,
          children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
            label: Chunk388032.intl.string(Chunk388032.t.xSmFQG),
            description: Chunk388032.intl.string(Chunk388032.t.bd4j4x),
            checked: Chunk647438,
            onChange: this.handleToggleShowFlash
          })
        }), (0, Chunk951288.jsx)(ee, {}), (0, Chunk951288.jsx)(eo, {}), (0, Chunk951288.jsx)(es, {}), (0, Chunk951288.jsx)(el, {}), (0, Chunk951288.jsx)(ea, {}), (0, Chunk951288.jsxs)(Chunk921801.F, {
          setting: Chunk726985.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT,
          children: [(0, Chunk951288.jsx)(Chunk481060.q4e, {
            label: Chunk388032.intl.string(Chunk388032.t.TTvjd9),
            description: Chunk388032.intl.string(Chunk388032.t.Xytv9C),
            value: exports,
            onChange: Chunk695346.CM.updateSetting,
            options: Chunk87051
          }), (0, Chunk951288.jsx)(Chunk481060.izJ, {
            gap: 16
          })]
        }), this.renderTTS(), (0, Chunk951288.jsx)(X, {}), (0, Chunk951288.jsx)(Chunk481060.izJ, {
          gap: 24
        }), (0, Chunk951288.jsx)(q, {
          disabledSounds: Chunk392711,
          disableAllSounds: Chunk442837,
          notifyMessagesInSelectedChannel: Chunk524437
        }), (0, Chunk951288.jsx)(Chunk33656.Z, {})]
      })
    })
  }
  constructor(...e) {
    super(...e), V(this, "handleToggleShowUnreadBadge", () => {
      d.default.setDisableUnreadBadge(!this.props.disableUnreadBadge)
    }), V(this, "handleToggleShowFlash", () => {
      d.default.setTaskbarFlash(!this.props.taskbarFlash)
    }), V(this, "renderTTS", () => {
      if (!_.Zh) return null;
      let e = [{
        name: F.intl.string(F.t.B1AGeJ),
        value: G.PrB.ALL_CHANNELS
      }, {
        name: F.intl.string(F.t.uM2rNr),
        value: G.PrB.SELECTED_CHANNEL
      }, {
        name: F.intl.string(F.t.DYO5Oi),
        value: G.PrB.NEVER
      }];
      return (0, r.jsxs)(I.F, {
        setting: U.s6.NOTIFICATIONS_TEXT_TO_SPEECH,
        children: [(0, r.jsx)(u.FXm, {
          label: F.intl.string(F.t.VIm5MO),
          description: F.intl.string(F.t["+4dnA5"]),
          options: e,
          onChange: this.handleTTSChange,
          value: this.props.ttsType
        }), (0, r.jsx)(u.izJ, {
          gap: 16
        })]
      })
    })
  }
}
let J = (0, Chunk818083.B)({
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

function $() {
  let e = J.useExperiment({
      location: "settings"
    }, {
      autoTrackExposure: false
    }).enabled,
    t = (0, Chunk442837.e7)([Chunk9156.ZP], () => Chunk9156.ZP.mentionOnAllMessages);
  return module ? (0, Chunk951288.jsx)(Chunk921801.F, {
    setting: Chunk726985.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES,
    children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
      label: "Mention on all messages?",
      description: "Increments the mention count when receiving a message in a channel set to 'All Messages'",
      checked: exports,
      onChange: e => {
        f.Z.setAccountFlag(B.c.MENTION_ON_ALL_MESSAGES, e)
      }
    })
  }) : null
}

function ee() {
  let [e, t] = Chunk647438.useState(false), n = (0, Chunk442837.e7)([Chunk594174.default], () => {
    var e;
    return null == (e = Chunk594174.default.getCurrentUser()) ? true : module.isStaff()
  }), a = (0, Chunk442837.e7)([Chunk9156.ZP], () => Chunk9156.ZP.useNewNotifications);
  return Chunk392711 || require ? (0, Chunk951288.jsx)(Chunk921801.F, {
    setting: Chunk726985.s6.NOTIFICATIONS_UNREAD_SETTINGS,
    children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
      label: "New Unreads Setting (Experimental)",
      description: "Turns off the new unread setting that allows you to pick which channels are most important in a server.",
      checked: Chunk392711,
      disabled: module,
      onChange: () => Chunk392711 ? en(exports) : et(exports)
    })
  }) : null
}
async function et(e) {
  e(true), await f.Z.setAccountFlag(B.c.USE_NEW_NOTIFICATIONS, true), e(false)
}
async function en(e) {
  e(true), c.K.set("turnedOffNewNotifications", true), P.default.track(G.rMx.NOTIFICATION_MIGRATION_OPTOUT, {
    num_guilds_with_new_setting: A.Z.getGuildsArray().filter(e => N.ZP.resolveGuildUnreadSetting(e) === Z.i.ONLY_MENTIONS).length
  }), await f.Z.setAccountFlag(B.c.USE_NEW_NOTIFICATIONS, false), e(false)
}

function er(e) {
  let t = (0, b.p)();
  return (0, r.jsx)(Q, W(H({}, e), {
    focusMode: t
  }))
}

function ei() {
  let e = (0, Chunk442837.cj)([Chunk292959.Z], () => ({
    disableUnreadBadge: Chunk292959.Z.getDisableUnreadBadge(),
    taskbarFlash: Chunk292959.Z.taskbarFlash,
    disabledSounds: Chunk292959.Z.getDisabledSounds(),
    disableAllSounds: Chunk292959.Z.getDisableAllSounds(),
    desktopType: Chunk292959.Z.getDesktopType(),
    ttsType: Chunk292959.Z.getTTSType(),
    notifyMessagesInSelectedChannel: Chunk292959.Z.getNotifyMessagesInSelectedChannel()
  }));
  return (0, Chunk951288.jsx)(er, W(H({}, module), {
    afkTimeout: Chunk695346.CM.useSetting()
  }))
}

function ea() {
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
      (0, v.MR)(t.value, e)
    };
  return Chunk106371.Z.getCurrentConfig({
    location: "webSettings"
  }).enableInAppNotifications ? (0, Chunk951288.jsxs)(Chunk921801.F, {
    setting: Chunk726985.s6.NOTIFICATIONS_REACTIONS,
    children: [(0, Chunk951288.jsx)(Chunk481060.FXm, {
      label: Chunk388032.intl.string(Chunk388032.t.Rq0NFs),
      description: Chunk388032.intl.string(Chunk388032.t.oWF6eQ),
      options: exports,
      onChange: e => n({
        value: e
      }),
      value: module
    }), (0, Chunk951288.jsx)(Chunk481060.izJ, {
      gap: 16
    })]
  }) : null
}

function eo() {
  let e = Chunk695346.d8.useSetting(),
    t = Chunk695346.JN.useSetting();
  return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
    children: [(0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.NOTIFICATIONS_VOICE_ACTIVITY,
      children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
        label: Chunk388032.intl.string(Chunk388032.t.wtk08S),
        description: Chunk388032.intl.string(Chunk388032.t.rngMNx),
        badge: "beta",
        checked: module,
        onChange: Chunk210176.I
      })
    }), (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.NOTIFICATIONS_GO_LIVE,
      children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
        label: Chunk388032.intl.string(Chunk388032.t.pW4TMp),
        description: Chunk388032.intl.string(Chunk388032.t["H+WYqZ"]),
        checked: exports,
        onChange: Chunk695346.JN.updateSetting
      })
    })]
  })
}

function es() {
  let e = Chunk695346.JY.useSetting();
  return (0, Chunk951288.jsx)(Chunk921801.F, {
    setting: Chunk726985.s6.NOTIFICATIONS_FRIEND_ONLINE,
    children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
      label: Chunk388032.intl.string(Chunk388032.t["uvIi/4"]),
      description: Chunk388032.intl.string(Chunk388032.t.E6O06k),
      checked: module,
      onChange: Chunk891353.N
    })
  })
}

function el() {
  let e = Chunk695346.V6.useSetting();
  return (0, Chunk951288.jsx)(Chunk921801.F, {
    setting: Chunk726985.s6.NOTIFICATIONS_USER_RESURRECTION,
    children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
      label: Chunk388032.intl.string(Chunk388032.t.Zyn45S),
      description: Chunk388032.intl.string(Chunk388032.t.XdihbD),
      checked: module,
      onChange: Chunk705579.F
    })
  })
}