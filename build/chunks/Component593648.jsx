/** Chunk was on web.js **/
/** chunk id: 593648, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => en
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
  Chunk388032 = require("./388032.jsx");

function F(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function V(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      F(e, t, n[t])
    })
  }
  return e
}

function H(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function Y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : H(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function W(e) {
  w.Z.requestPermission(t => {
    let n = t ? G.$Ab.ENABLED : G.$Ab.BLOCKED;
    f.default.setPermissionsState(n, e)
  })
}

function K(e) {
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
    description: Z.intl.format(Z.t.OOiGCM, {
      onClick: a
    })
  })
}

function z(e) {
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
      label: Z.intl.string(Z.t.pz71xC),
      sound: "message1",
      focusModeDisabled: s
    }, {
      label: Z.intl.string(Z.t.hK51Yg),
      sound: "deafen"
    }, {
      label: Z.intl.string(Z.t.XiejaJ),
      sound: "undeafen"
    }, {
      label: Z.intl.string(Z.t.w4m945),
      sound: "mute"
    }, {
      label: Z.intl.string(Z.t.YqAjXy),
      sound: "unmute"
    }, {
      label: Z.intl.string(Z.t.JoTq8n),
      sound: "camera_on"
    }, {
      label: Z.intl.string(Z.t["8P6tQ6"]),
      sound: "camera_off"
    }, {
      label: Z.intl.string(Z.t["juL9/L"]),
      sound: "disconnect"
    }, {
      label: Z.intl.string(Z.t.x98vQq),
      sound: "ptt_start"
    }, {
      label: Z.intl.string(Z.t["1HjRqC"]),
      sound: "ptt_stop"
    }, {
      label: Z.intl.string(Z.t["9JB1Ck"]),
      sound: "user_join"
    }, {
      label: Z.intl.string(Z.t.KUBBNt),
      sound: "user_leave"
    }, {
      label: Z.intl.string(Z.t.EZjqUT),
      sound: "user_moved"
    }, {
      label: Z.intl.string(Z.t.LnNlQh),
      sound: "call_calling"
    }, {
      label: Z.intl.string(Z.t.XBrJT6),
      sound: "call_ringing"
    }, {
      label: Z.intl.string(Z.t.Nd8P5y),
      sound: "stream_started"
    }, {
      label: Z.intl.string(Z.t["9bYj+G"]),
      sound: "stream_ended"
    }, {
      label: Z.intl.string(Z.t.KccUI1),
      sound: "stream_user_joined"
    }, {
      label: Z.intl.string(Z.t.dsjkiN),
      sound: "stream_user_left"
    }, {
      label: Z.intl.string(Z.t.nFOcf9),
      sound: "activity_launch"
    }, {
      label: Z.intl.string(Z.t["a6lw/u"]),
      sound: "activity_end"
    }, {
      label: Z.intl.string(Z.t.KaFxrY),
      sound: "activity_user_join"
    }, {
      label: Z.intl.string(Z.t.S14z9n),
      sound: "activity_user_left"
    }, {
      label: Z.intl.string(Z.t.CP3DC3),
      sound: "reconnect"
    }],
    _ = null != g.Z.useHolidaySoundpack();
  return (0, r.jsx)(A.F, {
    setting: U.s6.NOTIFICATIONS_SOUNDS,
    children: (0, r.jsxs)("div", {
      children: [_ ? (0, r.jsx)(E.Z, {}) : null, (0, r.jsxs)(u.C3N, {
        label: Z.intl.string(Z.t.MKWyKc),
        children: [(0, r.jsx)(u.rsf, {
          label: Z.intl.string(Z.t.lF5GGe),
          description: Z.intl.string(Z.t["7oXUim"]),
          checked: a,
          onChange: f.default.setNotifyMessagesInSelectedChannel
        }), (0, r.jsx)(u.rsf, {
          label: Z.intl.string(Z.t["2ZhCOd"]),
          description: Z.intl.string(Z.t["+B0XLE"]),
          checked: n,
          onChange: f.default.toggleDisableAllSounds
        }), d.map((e, i) => {
          let {
            label: a,
            sound: o,
            focusModeDisabled: s
          } = e;
          return (0, r.jsxs)(u.Kqy, {
            children: [i > 0 && (0, r.jsx)(u.izJ, {
              gap: 8
            }), (0, r.jsx)(K, {
              label: a,
              disabled: n || true === s,
              onChange: e => c(o, e),
              onPreview: e => l(o, e),
              enabled: !n && !t.includes(o) && true !== s
            }, o), s ? (0, r.jsx)(u.Wn, {
              messageType: u.QYI.WARNING,
              children: Z.intl.string(Z.t.cIRG0s)
            }) : null]
          }, o)
        })]
      })]
    })
  })
}

function q() {
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
class X extends Chunk647438.PureComponent {
  handleDesktopChange(e) {
    let t = e ? G.qrD.ALL : G.qrD.NEVER;
    t !== G.qrD.NEVER ? W("UserSettingsModal") : f.default.setDesktopType(t)
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
      label: 0 === e ? Z.intl.string(Z.t["0QN7cZ"]) : Z.intl.formatToPlainString(Z.t.iXLF9W, {
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
            description: Chunk388032.intl.string(Chunk388032.t.wF9ih3),
            checked: module !== Chunk981631.qrD.NEVER && !Chunk538534,
            helperText: Chunk538534 ? Chunk388032.intl.string(Chunk388032.t.cIRG0s) : true,
            onChange: this.handleDesktopChange,
            disabled: Chunk538534
          })
        }), (0, Chunk951288.jsx)(J, {}), (0, Chunk951288.jsx)(Chunk921801.F, {
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
        }), (0, Chunk951288.jsx)($, {}), (0, Chunk951288.jsx)(ei, {}), (0, Chunk951288.jsx)(er, {}), (0, Chunk951288.jsxs)(Chunk921801.F, {
          setting: Chunk726985.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT,
          children: [(0, Chunk951288.jsx)(Chunk481060.q4e, {
            label: Chunk388032.intl.string(Chunk388032.t.TTvjd9),
            description: Chunk388032.intl.string(Chunk388032.t.Xytv9C),
            value: exports,
            onChange: Chunk695346.CM.updateSetting,
            options: Chunk292556
          }), (0, Chunk951288.jsx)(Chunk481060.izJ, {
            gap: 16
          })]
        }), this.renderTTS(), (0, Chunk951288.jsx)(q, {}), (0, Chunk951288.jsx)(Chunk481060.izJ, {
          gap: 24
        }), (0, Chunk951288.jsx)(z, {
          disabledSounds: Chunk392711,
          disableAllSounds: Chunk442837,
          notifyMessagesInSelectedChannel: Chunk524437
        }), (0, Chunk951288.jsx)(Chunk33656.Z, {})]
      })
    })
  }
  constructor(...e) {
    super(...e), F(this, "handleToggleShowUnreadBadge", () => {
      f.default.setDisableUnreadBadge(!this.props.disableUnreadBadge)
    }), F(this, "handleToggleShowFlash", () => {
      f.default.setTaskbarFlash(!this.props.taskbarFlash)
    }), F(this, "renderTTS", () => {
      if (!p.Zh) return null;
      let e = [{
        name: Z.intl.string(Z.t.B1AGeJ),
        value: G.PrB.ALL_CHANNELS
      }, {
        name: Z.intl.string(Z.t.uM2rNr),
        value: G.PrB.SELECTED_CHANNEL
      }, {
        name: Z.intl.string(Z.t.DYO5Oi),
        value: G.PrB.NEVER
      }];
      return (0, r.jsxs)(A.F, {
        setting: U.s6.NOTIFICATIONS_TEXT_TO_SPEECH,
        children: [(0, r.jsx)(c.E, {
          label: Z.intl.string(Z.t.VIm5MO),
          description: Z.intl.string(Z.t["+4dnA5"]),
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
let Q = (0, Chunk818083.B)({
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

function J() {
  let e = Q.useExperiment({
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

function $() {
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
        label: Chunk388032.intl.string(Chunk388032.t.z21l8M),
        description: Chunk388032.intl.string(Chunk388032.t.frbLrH),
        checked: require,
        disabled: Chunk392711 || !require,
        onChange: () => ee(o)
      })
    }) : exports ? (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.NOTIFICATIONS_UNREAD_SETTINGS,
      children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
        label: Chunk388032.intl.string(Chunk388032.t.z21l8M),
        description: "Turns on the new notification system",
        checked: require,
        disabled: Chunk392711 || require,
        onChange: e => {
          _.Z.setAccountFlag(B.c.USE_NEW_NOTIFICATIONS, e)
        }
      })
    }) : null, (0, Chunk951288.jsxs)(Chunk921801.F, {
      setting: Chunk726985.s6.NOTIFICATIONS_NEW_SETTINGS,
      children: [(0, Chunk951288.jsx)(Chunk481060.C3N, {
        label: "New Notification Settings (Advanced, Staff Only)",
        children: (0, Chunk951288.jsxs)("div", {
          style: {
            display: "flex",
            gap: 16
          },
          children: [(0, Chunk951288.jsx)(Chunk921801.F, {
            setting: Chunk726985.s6.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT,
            children: (0, Chunk951288.jsx)(Chunk481060.Button, {
              variant: "primary",
              text: "Restore most recent snapshot",
              onClick: Chunk223683.KP
            })
          }), (0, Chunk951288.jsx)(Chunk921801.F, {
            setting: Chunk726985.s6.NOTIFICATIONS_LAUNCH_MIGRATION,
            children: (0, Chunk951288.jsx)(Chunk481060.Button, {
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
async function ee(e) {
  e(true);
  let t = await (0, y.Tn)();
  0 === t.length ? await (0, v.oL)() : d.Z.show({
    title: Z.intl.string(Z.t["cY+Oob"]),
    body: Z.intl.format(Z.t["7zTJJQ"], {
      date: new Date(t[t.length - 1].recorded_at)
    }),
    cancelText: Z.intl.string(Z.t["ETE/oC"]),
    confirmText: Z.intl.string(Z.t.Rm96Ty),
    onConfirm: v.oL
  }), e(false)
}

function et(e) {
  let t = (0, b.p)();
  return (0, r.jsx)(X, Y(V({}, e), {
    focusMode: t
  }))
}

function en() {
  let e = (0, Chunk442837.cj)([Chunk292959.Z], () => ({
    disableUnreadBadge: Chunk292959.Z.getDisableUnreadBadge(),
    taskbarFlash: Chunk292959.Z.taskbarFlash,
    disabledSounds: Chunk292959.Z.getDisabledSounds(),
    disableAllSounds: Chunk292959.Z.getDisableAllSounds(),
    desktopType: Chunk292959.Z.getDesktopType(),
    ttsType: Chunk292959.Z.getTTSType(),
    notifyMessagesInSelectedChannel: Chunk292959.Z.getNotifyMessagesInSelectedChannel()
  }));
  return (0, Chunk951288.jsx)(et, Y(V({}, module), {
    afkTimeout: Chunk695346.CM.useSetting()
  }))
}

function er() {
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
      (0, S.MR)(t.value, e)
    };
  return Chunk106371.Z.getCurrentConfig({
    location: "webSettings"
  }).enableInAppNotifications ? (0, Chunk951288.jsxs)(Chunk921801.F, {
    setting: Chunk726985.s6.NOTIFICATIONS_REACTIONS,
    children: [(0, Chunk951288.jsx)(Chunk538534.E, {
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

function ei() {
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