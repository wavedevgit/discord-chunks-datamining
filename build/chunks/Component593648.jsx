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
  Chunk538534 = require("./538534.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk668781 = require("./668781.js"),
  Chunk292556 = require("./292556.js"),
  Chunk87051 = require("./87051.js"),
  Chunk419363 = require("./419363.js"),
  Chunk818083 = require("./818083.js"),
  Chunk487419 = require("./487419.js"),
  Chunk197344 = require("./197344.js"),
  Chunk476756 = require("./476756.jsx"),
  Chunk734934 = require("./734934.js"),
  Chunk223683 = require("./223683.js"),
  Chunk312400 = require("./312400.js"),
  Chunk115345 = require("./115345.js"),
  Chunk392888 = require("./392888.jsx"),
  Chunk106371 = require("./106371.js"),
  Chunk995774 = require("./995774.js"),
  Chunk921801 = require("./921801.js"),
  Chunk460181 = require("./460181.js"),
  Chunk210176 = require("./210176.js"),
  Chunk292959 = require("./292959.js"),
  Chunk9156 = require("./9156.js"),
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
  Chunk388032 = require("./388032.jsx"),
  Chunk285746 = require("./285746.js"),
  Chunk10198 = require("./10198.js");

function H(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function Y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      H(e, t, n[t])
    })
  }
  return e
}

function W(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function K(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : W(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function z(e) {
  w.Z.requestPermission(t => {
    let n = t ? G.$Ab.ENABLED : G.$Ab.BLOCKED;
    f.default.setPermissionsState(n, e)
  })
}

function q(e) {
  let {
    label: t,
    enabled: n,
    disabled: i,
    onPreview: a,
    onChange: o,
    tooltip: s
  } = e;
  return (0, r.jsx)(u.j7V, {
    className: F.soundRow,
    value: n,
    onChange: o,
    disabled: i,
    tooltipNote: s,
    children: (0, r.jsxs)("div", {
      className: F.notificationSound,
      children: [(0, r.jsx)("div", {
        className: F.soundName,
        children: t
      }), (0, r.jsx)(u.P3F, {
        className: F.soundIcon,
        onClick: a,
        "aria-label": Z.intl.string(Z.t.Kd4uxM),
        children: (0, r.jsx)(u.gj8, {
          size: "xs",
          color: "currentColor",
          className: F.icon,
          "aria-hidden": true
        })
      })]
    })
  })
}

function X(e) {
  let {
    disabledSounds: t,
    disableAllSounds: n,
    notifyMessagesInSelectedChannel: a
  } = e, o = i.useRef(null), s = (0, b.p)(), l = i.useCallback((e, t) => {
    t.stopPropagation(), t.preventDefault(), null != o.current && o.current.stop(), o.current = (0, C.GN)(e)
  }, []), c = i.useCallback((e, n) => {
    let r = t.filter(t => t !== e);
    n || r.push(e), f.default.setDisabledSounds(r)
  }, [t]);
  i.useEffect(() => () => {
    var e;
    null == (e = o.current) || e.stop()
  });
  let d = [{
      label: Z.intl.string(Z.t.pz71xM),
      sound: "message1",
      focusModeDisabled: s
    }, {
      label: Z.intl.string(Z.t.hK51Ym),
      sound: "deafen"
    }, {
      label: Z.intl.string(Z.t.XiejaG),
      sound: "undeafen"
    }, {
      label: Z.intl.string(Z.t["w4m94+"]),
      sound: "mute"
    }, {
      label: Z.intl.string(Z.t.YqAjX1),
      sound: "unmute"
    }, {
      label: Z.intl.string(Z.t.JoTq8v),
      sound: "camera_on"
    }, {
      label: Z.intl.string(Z.t["8P6tQ0"]),
      sound: "camera_off"
    }, {
      label: Z.intl.string(Z.t["juL9/P"]),
      sound: "disconnect"
    }, {
      label: Z.intl.string(Z.t.x98vQk),
      sound: "ptt_start"
    }, {
      label: Z.intl.string(Z.t["1HjRqK"]),
      sound: "ptt_stop"
    }, {
      label: Z.intl.string(Z.t["9JB1Cg"]),
      sound: "user_join"
    }, {
      label: Z.intl.string(Z.t.KUBBNj),
      sound: "user_leave"
    }, {
      label: Z.intl.string(Z.t.EZjqUV),
      sound: "user_moved"
    }, {
      label: Z.intl.string(Z.t.LnNlQk),
      sound: "call_calling"
    }, {
      label: Z.intl.string(Z.t.XBrJT0),
      sound: "call_ringing"
    }, {
      label: Z.intl.string(Z.t["Nd8P5+"]),
      sound: "stream_started"
    }, {
      label: Z.intl.string(Z.t["9bYj+P"]),
      sound: "stream_ended"
    }, {
      label: Z.intl.string(Z.t.KccUIy),
      sound: "stream_user_joined"
    }, {
      label: Z.intl.string(Z.t.dsjkiI),
      sound: "stream_user_left"
    }, {
      label: Z.intl.string(Z.t.nFOcf3),
      sound: "activity_launch"
    }, {
      label: Z.intl.string(Z.t["a6lw/v"]),
      sound: "activity_end"
    }, {
      label: Z.intl.string(Z.t.KaFxra),
      sound: "activity_user_join"
    }, {
      label: Z.intl.string(Z.t.S14z9v),
      sound: "activity_user_left"
    }, {
      label: Z.intl.string(Z.t.CP3DCw),
      sound: "reconnect"
    }],
    _ = null != g.Z.useHolidaySoundpack();
  return (0, r.jsx)(A.F, {
    setting: U.s6.NOTIFICATIONS_SOUNDS,
    children: (0, r.jsxs)(u.hjN, {
      children: [_ ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(u.vwX, {
          className: V.marginBottom20,
          children: Z.intl.string(Z.t.fgSHf3)
        }), (0, r.jsx)(E.Z, {})]
      }) : null, (0, r.jsxs)(u.C3N, {
        label: Z.intl.string(Z.t.MKWyKS),
        children: [(0, r.jsx)(u.rsf, {
          label: Z.intl.string(Z.t.lF5GGR),
          description: Z.intl.string(Z.t["7oXUio"]),
          checked: a,
          onChange: f.default.setNotifyMessagesInSelectedChannel
        }), (0, r.jsx)(u.rsf, {
          label: Z.intl.string(Z.t["2ZhCOT"]),
          description: Z.intl.string(Z.t["+B0XLC"]),
          checked: n,
          onChange: f.default.toggleDisableAllSounds
        }), d.map(e => {
          let {
            label: i,
            sound: a,
            focusModeDisabled: o
          } = e;
          return (0, r.jsx)(q, {
            label: i,
            disabled: n || true === o,
            tooltip: o ? Z.intl.string(Z.t.cIRG0t) : true,
            onChange: e => c(a, e),
            onPreview: e => l(a, e),
            enabled: !n && !t.includes(a) && true !== o
          }, a)
        })]
      })]
    })
  })
}

function Q() {
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
      label: Chunk388032.intl.string(Chunk388032.t.D9yVAA),
      description: Chunk388032.intl.string(Chunk388032.t["0PhAOD"]),
      children: [(0, Chunk951288.jsx)(Chunk481060.q4e, {
        label: Chunk388032.intl.string(Chunk388032.t.Q0PsXV),
        value: exports,
        onChange: e => {
          n(e)
        },
        options: Chunk392711
      }), null != exports ? (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
        children: [(0, Chunk951288.jsx)(Chunk921801.F, {
          setting: Chunk726985.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS,
          children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
            label: Chunk388032.intl.string(Chunk388032.t.u6dc5O),
            description: Chunk388032.intl.string(Chunk388032.t["z8Td4+"]),
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
            label: Chunk388032.intl.string(Chunk388032.t.P8MG6u),
            description: Chunk388032.intl.string(Chunk388032.t.PyxXs7),
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
class J extends Chunk647438.PureComponent {
  handleDesktopChange(e) {
    let t = e ? G.qrD.ALL : G.qrD.NEVER;
    t !== G.qrD.NEVER ? z("UserSettingsModal") : f.default.setDesktopType(t)
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
    } = this.props, d = Chunk45640.Z.getCurrentConfig({
      location: "Messages"
    }).enabled || 0 === exports ? 0 : 1, f = o().range(Chunk668781, 11).map(e => ({
      value: 60 * e,
      label: 0 === e ? Z.intl.string(Z.t["0QN7cX"]) : Z.intl.formatToPlainString(Z.t.iXLF9f, {
        minutes: e
      })
    }));
    return (0, Chunk951288.jsx)(Chunk273313.Z, {
      title: Chunk388032.intl.string(Chunk388032.t.HcoRu7),
      children: (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
        gap: 16,
        children: [(0, Chunk951288.jsx)(Chunk921801.F, {
          setting: Chunk726985.s6.NOTIFICATIONS_ENABLE_DESKTOP,
          children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
            label: Chunk388032.intl.string(Chunk388032.t["/0WClp"]),
            description: Chunk388032.intl.string(Chunk388032.t.wF9ih4),
            checked: module !== Chunk981631.qrD.NEVER && !Chunk538534,
            helperText: Chunk538534 ? Chunk388032.intl.string(Chunk388032.t.cIRG0t) : true,
            onChange: this.handleDesktopChange,
            disabled: Chunk538534
          })
        }), (0, Chunk951288.jsx)(ee, {}), (0, Chunk951288.jsx)(Chunk921801.F, {
          setting: Chunk726985.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE,
          children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
            label: Chunk388032.intl.string(Chunk388032.t.VH8AIC),
            description: Chunk388032.intl.string(Chunk388032.t["9K4qwc"]),
            checked: !require,
            onChange: this.handleToggleShowUnreadBadge
          })
        }), (0, Chunk951288.jsx)(Chunk921801.F, {
          setting: Chunk726985.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING,
          children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
            label: Chunk388032.intl.string(Chunk388032.t.xSmFQE),
            description: Chunk388032.intl.string(Chunk388032.t["bd4j4+"]),
            checked: Chunk647438,
            onChange: this.handleToggleShowFlash
          })
        }), (0, Chunk951288.jsx)(et, {}), (0, Chunk951288.jsx)(eo, {}), (0, Chunk951288.jsx)(ea, {}), (0, Chunk951288.jsxs)(Chunk921801.F, {
          setting: Chunk726985.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT,
          children: [(0, Chunk951288.jsx)(Chunk481060.q4e, {
            label: Chunk388032.intl.string(Chunk388032.t.TTvjd3),
            description: Chunk388032.intl.string(Chunk388032.t.Xytv9P),
            value: exports,
            onChange: Chunk695346.CM.updateSetting,
            options: Chunk292556
          }), (0, Chunk951288.jsx)(Chunk481060.izJ, {
            gap: 16
          })]
        }), this.renderTTS(), (0, Chunk951288.jsx)(Q, {}), (0, Chunk951288.jsx)(Chunk481060.izJ, {
          gap: 24
        }), (0, Chunk951288.jsx)(X, {
          disabledSounds: Chunk392711,
          disableAllSounds: Chunk442837,
          notifyMessagesInSelectedChannel: Chunk524437
        }), (0, Chunk951288.jsx)(Chunk33656.Z, {})]
      })
    })
  }
  constructor(...e) {
    super(...e), H(this, "handleToggleShowUnreadBadge", () => {
      f.default.setDisableUnreadBadge(!this.props.disableUnreadBadge)
    }), H(this, "handleToggleShowFlash", () => {
      f.default.setTaskbarFlash(!this.props.taskbarFlash)
    }), H(this, "renderTTS", () => {
      if (!p.Zh) return null;
      let e = [{
        name: Z.intl.string(Z.t.B1AGeH),
        value: G.PrB.ALL_CHANNELS
      }, {
        name: Z.intl.string(Z.t.uM2rNj),
        value: G.PrB.SELECTED_CHANNEL
      }, {
        name: Z.intl.string(Z.t.DYO5Oj),
        value: G.PrB.NEVER
      }];
      return (0, r.jsxs)(A.F, {
        setting: U.s6.NOTIFICATIONS_TEXT_TO_SPEECH,
        children: [(0, r.jsx)(c.E, {
          label: Z.intl.string(Z.t.VIm5MD),
          description: Z.intl.string(Z.t["+4dnAw"]),
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
let $ = (0, Chunk818083.B)({
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

function ee() {
  let e = $.useExperiment({
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
        _.Z.setAccountFlag(B.c.MENTION_ON_ALL_MESSAGES, e)
      }
    })
  }) : null
}

function et() {
  let e = Chunk312400.xT.useExperiment({
      location: "UserSettingsNotifications"
    }, {
      autoTrackExposure: false
    }).enabled,
    {
      manuallyOpen: t
    } = Chunk312400.fs.useExperiment({
      location: "UserSettingsNotifications"
    }, {
      autoTrackExposure: false
    }),
    n = (0, Chunk442837.e7)([Chunk9156.ZP], () => Chunk9156.ZP.useNewNotifications),
    [a, o] = Chunk647438.useState(false);
  return module && (require || exports) ? (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
    children: [require ? (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.NOTIFICATIONS_UNREAD_SETTINGS,
      children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
        label: Chunk388032.intl.string(Chunk388032.t.z21l8P),
        description: Chunk388032.intl.string(Chunk388032.t.frbLrK),
        checked: require,
        disabled: Chunk392711 || !require,
        onChange: () => en(o)
      })
    }) : exports ? (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.NOTIFICATIONS_UNREAD_SETTINGS,
      children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
        label: Chunk388032.intl.string(Chunk388032.t.z21l8P),
        description: "Turns on the new notification system",
        checked: require,
        disabled: Chunk392711 || require,
        onChange: e => {
          _.Z.setAccountFlag(B.c.USE_NEW_NOTIFICATIONS, e)
        }
      })
    }) : null, (0, Chunk951288.jsxs)(Chunk921801.F, {
      setting: Chunk726985.s6.NOTIFICATIONS_NEW_SETTINGS,
      children: [(0, Chunk951288.jsx)(Chunk481060.hjN, {
        title: "New Notification Settings (Advanced, Staff Only)",
        children: (0, Chunk951288.jsxs)("div", {
          style: {
            display: "flex",
            gap: 16
          },
          children: [(0, Chunk951288.jsx)(Chunk921801.F, {
            setting: Chunk726985.s6.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT,
            children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
              variant: "primary",
              text: "Restore most recent snapshot",
              onClick: Chunk223683.KP
            })
          }), (0, Chunk951288.jsx)(Chunk921801.F, {
            setting: Chunk726985.s6.NOTIFICATIONS_LAUNCH_MIGRATION,
            children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
              variant: "primary",
              text: "Launch Migration",
              onClick: () => {
                (0, Chunk392888.R)(true)
              }
            })
          }), (0, Chunk951288.jsx)(Chunk921801.F, {
            setting: Chunk726985.s6.NOTIFICATIONS_TOGGLE_NEW_SYSTEM,
            children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
              label: "Toggle new system on/off",
              checked: require,
              onChange: e => {
                _.Z.setAccountFlag(B.c.USE_NEW_NOTIFICATIONS, e)
              }
            })
          })]
        })
      }), (0, Chunk951288.jsx)(Chunk481060.izJ, {
        gap: 16
      })]
    })]
  }) : null
}
async function en(e) {
  e(true);
  let t = await (0, y.Tn)();
  0 === t.length ? await (0, v.oL)() : d.Z.show({
    title: Z.intl.string(Z.t["cY+Ooa"]),
    body: Z.intl.format(Z.t["7zTJJS"], {
      date: new Date(t[t.length - 1].recorded_at)
    }),
    cancelText: Z.intl.string(Z.t["ETE/oK"]),
    confirmText: Z.intl.string(Z.t.Rm96T0),
    onConfirm: v.oL
  }), e(false)
}

function er(e) {
  let t = (0, b.p)();
  return (0, r.jsx)(J, K(Y({}, e), {
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
  return (0, Chunk951288.jsx)(er, K(Y({}, module), {
    afkTimeout: Chunk695346.CM.useSetting()
  }))
}

function ea() {
  let e = Chunk695346.fz.useSetting(),
    t = [{
      name: Chunk388032.intl.string(Chunk388032.t["9x/Rtb"]),
      value: Chunk524437.Ns.NOTIFICATIONS_ENABLED
    }, {
      name: Chunk388032.intl.string(Chunk388032.t.fJAbQU),
      value: Chunk524437.Ns.ONLY_DMS
    }, {
      name: Chunk388032.intl.string(Chunk388032.t["xu+UDQ"]),
      value: Chunk524437.Ns.NOTIFICATIONS_DISABLED
    }],
    n = t => {
      (0, S.MR)(t.value, e)
    };
  return Chunk106371.Z.getCurrentConfig({
    location: "webSettings"
  }).enableInAppNotifications ? (0, Chunk951288.jsxs)(Chunk921801.F, {
    setting: Chunk726985.s6.NOTIFICATIONS_REACTIONS,
    children: [(0, Chunk951288.jsx)(Chunk538534.E, {
      label: Chunk388032.intl.string(Chunk388032.t.Rq0NFh),
      description: Chunk388032.intl.string(Chunk388032.t.oWF6eX),
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
        label: Chunk388032.intl.string(Chunk388032.t.wtk08f),
        description: Chunk388032.intl.string(Chunk388032.t.rngMNz),
        badge: "beta",
        checked: module,
        onChange: Chunk210176.I
      })
    }), (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.NOTIFICATIONS_GO_LIVE,
      children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
        label: Chunk388032.intl.string(Chunk388032.t.pW4TMj),
        description: Chunk388032.intl.string(Chunk388032.t["H+WYqa"]),
        checked: exports,
        onChange: Chunk695346.JN.updateSetting
      })
    })]
  })
}