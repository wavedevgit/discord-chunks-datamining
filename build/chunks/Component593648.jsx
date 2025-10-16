/** Chunk was on web.js **/
/** chunk id: 593648, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => er
}), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk524437 = require("./524437.js"),
  Chunk481060 = require("./481060.js"),
  Chunk668781 = require("./668781.js"),
  Chunk292556 = require("./292556.js"),
  Chunk87051 = require("./87051.js"),
  Chunk419363 = require("./419363.js"),
  Chunk818083 = require("./818083.js"),
  Chunk705579 = require("./705579.js"),
  Chunk487419 = require("./487419.js"),
  Chunk197344 = require("./197344.js"),
  Chunk476756 = require("./476756.jsx"),
  Chunk734934 = require("./734934.js"),
  Chunk223683 = require("./223683.js"),
  Chunk312400 = require("./312400.js"),
  Chunk891353 = require("./891353.js"),
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
    let n = t ? B.$Ab.ENABLED : B.$Ab.BLOCKED;
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
  return (0, r.jsx)(c.rsf, {
    label: t,
    checked: n,
    onChange: o,
    disabled: i,
    description: F.intl.format(F.t.OOiGCA, {
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
    t.stopPropagation(), t.preventDefault(), null != o.current && o.current.stop(), o.current = (0, N.GN)(e)
  }, []), u = i.useCallback((e, n) => {
    let r = t.filter(t => t !== e);
    n || r.push(e), d.default.setDisabledSounds(r)
  }, [t]);
  i.useEffect(() => () => {
    var e;
    null == (e = o.current) || e.stop()
  });
  let f = [{
      label: F.intl.string(F.t.pz71xM),
      sound: "message1",
      focusModeDisabled: s
    }, {
      label: F.intl.string(F.t.hK51Ym),
      sound: "deafen"
    }, {
      label: F.intl.string(F.t.XiejaG),
      sound: "undeafen"
    }, {
      label: F.intl.string(F.t["w4m94+"]),
      sound: "mute"
    }, {
      label: F.intl.string(F.t.YqAjX1),
      sound: "unmute"
    }, {
      label: F.intl.string(F.t.JoTq8v),
      sound: "camera_on"
    }, {
      label: F.intl.string(F.t["8P6tQ0"]),
      sound: "camera_off"
    }, {
      label: F.intl.string(F.t["juL9/P"]),
      sound: "disconnect"
    }, {
      label: F.intl.string(F.t.x98vQk),
      sound: "ptt_start"
    }, {
      label: F.intl.string(F.t["1HjRqK"]),
      sound: "ptt_stop"
    }, {
      label: F.intl.string(F.t["9JB1Cg"]),
      sound: "user_join"
    }, {
      label: F.intl.string(F.t.KUBBNj),
      sound: "user_leave"
    }, {
      label: F.intl.string(F.t.EZjqUV),
      sound: "user_moved"
    }, {
      label: F.intl.string(F.t.LnNlQk),
      sound: "call_calling"
    }, {
      label: F.intl.string(F.t.XBrJT0),
      sound: "call_ringing"
    }, {
      label: F.intl.string(F.t["Nd8P5+"]),
      sound: "stream_started"
    }, {
      label: F.intl.string(F.t["9bYj+P"]),
      sound: "stream_ended"
    }, {
      label: F.intl.string(F.t.KccUIy),
      sound: "stream_user_joined"
    }, {
      label: F.intl.string(F.t.dsjkiI),
      sound: "stream_user_left"
    }, {
      label: F.intl.string(F.t.nFOcf3),
      sound: "activity_launch"
    }, {
      label: F.intl.string(F.t["a6lw/v"]),
      sound: "activity_end"
    }, {
      label: F.intl.string(F.t.KaFxra),
      sound: "activity_user_join"
    }, {
      label: F.intl.string(F.t.S14z9v),
      sound: "activity_user_left"
    }, {
      label: F.intl.string(F.t.CP3DCw),
      sound: "reconnect"
    }],
    _ = null != g.Z.useHolidaySoundpack();
  return (0, r.jsx)(C.F, {
    setting: G.s6.NOTIFICATIONS_SOUNDS,
    children: (0, r.jsx)("div", {
      children: (0, r.jsxs)(c.C3N, {
        label: F.intl.string(F.t.MKWyKS),
        children: [_ ? (0, r.jsx)(E.Z, {}) : null, (0, r.jsx)(c.rsf, {
          label: F.intl.string(F.t.lF5GGR),
          description: F.intl.string(F.t["7oXUio"]),
          checked: a,
          onChange: d.default.setNotifyMessagesInSelectedChannel
        }), (0, r.jsx)(c.rsf, {
          label: F.intl.string(F.t["2ZhCOT"]),
          description: F.intl.string(F.t["+B0XLC"]),
          checked: n,
          onChange: d.default.toggleDisableAllSounds
        }), f.map((e, i) => {
          let {
            label: a,
            sound: o,
            focusModeDisabled: s
          } = e;
          return (0, r.jsxs)(c.Kqy, {
            children: [i > 0 && (0, r.jsx)(c.izJ, {
              gap: 8
            }), (0, r.jsx)(z, {
              label: a,
              disabled: n || true === s,
              onChange: e => u(o, e),
              onPreview: e => l(o, e),
              enabled: !n && !t.includes(o) && true !== s
            }, o), s ? (0, r.jsx)(c.Wn, {
              messageType: c.QYI.WARNING,
              children: F.intl.string(F.t.cIRG0t)
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
class Q extends Chunk647438.PureComponent {
  handleDesktopChange(e) {
    let t = e ? B.qrD.ALL : B.qrD.NEVER;
    t !== B.qrD.NEVER ? K("UserSettingsModal") : d.default.setDesktopType(t)
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
      focusMode: u
    } = this.props, d = Chunk45640.Z.getCurrentConfig({
      location: "Messages"
    }).enabled || 0 === exports ? 0 : 1, f = o().range(Chunk292556, 11).map(e => ({
      value: 60 * e,
      label: 0 === e ? F.intl.string(F.t["0QN7cX"]) : F.intl.formatToPlainString(F.t.iXLF9f, {
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
            checked: module !== Chunk981631.qrD.NEVER && !Chunk668781,
            helperText: Chunk668781 ? Chunk388032.intl.string(Chunk388032.t.cIRG0t) : true,
            onChange: this.handleDesktopChange,
            disabled: Chunk668781
          })
        }), (0, Chunk951288.jsx)($, {}), (0, Chunk951288.jsx)(Chunk921801.F, {
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
        }), (0, Chunk951288.jsx)(ee, {}), (0, Chunk951288.jsx)(ea, {}), (0, Chunk951288.jsx)(eo, {}), (0, Chunk951288.jsx)(es, {}), (0, Chunk951288.jsx)(ei, {}), (0, Chunk951288.jsxs)(Chunk921801.F, {
          setting: Chunk726985.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT,
          children: [(0, Chunk951288.jsx)(Chunk481060.q4e, {
            label: Chunk388032.intl.string(Chunk388032.t.TTvjd3),
            description: Chunk388032.intl.string(Chunk388032.t.Xytv9P),
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
        name: F.intl.string(F.t.B1AGeH),
        value: B.PrB.ALL_CHANNELS
      }, {
        name: F.intl.string(F.t.uM2rNj),
        value: B.PrB.SELECTED_CHANNEL
      }, {
        name: F.intl.string(F.t.DYO5Oj),
        value: B.PrB.NEVER
      }];
      return (0, r.jsxs)(C.F, {
        setting: G.s6.NOTIFICATIONS_TEXT_TO_SPEECH,
        children: [(0, r.jsx)(c.FXm, {
          label: F.intl.string(F.t.VIm5MD),
          description: F.intl.string(F.t["+4dnAw"]),
          options: e,
          onChange: this.handleTTSChange,
          value: this.props.ttsType
        }), (0, r.jsx)(c.izJ, {
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
        f.Z.setAccountFlag(Z.c.MENTION_ON_ALL_MESSAGES, e)
      }
    })
  }) : null
}

function ee() {
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
        onChange: () => et(o)
      })
    }) : exports ? (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.NOTIFICATIONS_UNREAD_SETTINGS,
      children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
        label: Chunk388032.intl.string(Chunk388032.t.z21l8P),
        description: "Turns on the new notification system",
        checked: require,
        disabled: Chunk392711 || require,
        onChange: e => {
          f.Z.setAccountFlag(Z.c.USE_NEW_NOTIFICATIONS, e)
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
                f.Z.setAccountFlag(Z.c.USE_NEW_NOTIFICATIONS, e)
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
async function et(e) {
  e(true);
  let t = await (0, y.Tn)();
  0 === t.length ? await (0, I.oL)() : u.Z.show({
    title: F.intl.string(F.t["cY+Ooa"]),
    body: F.intl.format(F.t["7zTJJS"], {
      date: new Date(t[t.length - 1].recorded_at)
    }),
    cancelText: F.intl.string(F.t["ETE/oK"]),
    confirmText: F.intl.string(F.t.Rm96T0),
    onConfirm: I.oL
  }), e(false)
}

function en(e) {
  let t = (0, b.p)();
  return (0, r.jsx)(Q, W(H({}, e), {
    focusMode: t
  }))
}

function er() {
  let e = (0, Chunk442837.cj)([Chunk292959.Z], () => ({
    disableUnreadBadge: Chunk292959.Z.getDisableUnreadBadge(),
    taskbarFlash: Chunk292959.Z.taskbarFlash,
    disabledSounds: Chunk292959.Z.getDisabledSounds(),
    disableAllSounds: Chunk292959.Z.getDisableAllSounds(),
    desktopType: Chunk292959.Z.getDesktopType(),
    ttsType: Chunk292959.Z.getTTSType(),
    notifyMessagesInSelectedChannel: Chunk292959.Z.getNotifyMessagesInSelectedChannel()
  }));
  return (0, Chunk951288.jsx)(en, W(H({}, module), {
    afkTimeout: Chunk695346.CM.useSetting()
  }))
}

function ei() {
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
      (0, A.MR)(t.value, e)
    };
  return Chunk106371.Z.getCurrentConfig({
    location: "webSettings"
  }).enableInAppNotifications ? (0, Chunk951288.jsxs)(Chunk921801.F, {
    setting: Chunk726985.s6.NOTIFICATIONS_REACTIONS,
    children: [(0, Chunk951288.jsx)(Chunk481060.FXm, {
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

function ea() {
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

function eo() {
  let e = Chunk695346.JY.useSetting();
  return (0, Chunk951288.jsx)(Chunk921801.F, {
    setting: Chunk726985.s6.NOTIFICATIONS_FRIEND_ONLINE,
    children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
      label: Chunk388032.intl.string(Chunk388032.t["uvIi//"]),
      description: Chunk388032.intl.string(Chunk388032.t.E6O06u),
      checked: module,
      onChange: Chunk891353.N
    })
  })
}

function es() {
  let e = Chunk695346.V6.useSetting();
  return (0, Chunk951288.jsx)(Chunk921801.F, {
    setting: Chunk726985.s6.NOTIFICATIONS_USER_RESURRECTION,
    children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
      label: Chunk388032.intl.string(Chunk388032.t.Zyn45e),
      description: Chunk388032.intl.string(Chunk388032.t.XdihbG),
      checked: module,
      onChange: Chunk705579.F
    })
  })
}