/** Chunk was on web.js **/
/** chunk id: 593648, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => el
}), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk524437 = require("./524437.js"),
  Chunk538534 = require("./538534.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk668781 = require("./668781.js"),
  Chunk292556 = require("./292556.js"),
  Chunk87051 = require("./87051.js"),
  Chunk419363 = require("./419363.js"),
  Chunk818083 = require("./818083.js"),
  Chunk688465 = require("./688465.jsx"),
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
  Chunk358085 = require("./358085.js"),
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
  Chunk728495 = require("./728495.js"),
  Chunk197571 = require("./197571.js");

function z(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function q(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      z(e, t, n[t])
    })
  }
  return e
}

function X(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : X(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function J(e) {
  L.Z.requestPermission(t => {
    let n = t ? V.$Ab.ENABLED : V.$Ab.BLOCKED;
    p.default.setPermissionsState(n, e)
  })
}

function $(e) {
  let {
    label: t,
    enabled: n,
    disabled: i,
    onPreview: a,
    onChange: o,
    tooltip: s
  } = e;
  return (0, r.jsx)(f.j7V, {
    className: W.soundRow,
    value: n,
    onChange: o,
    disabled: i,
    tooltipNote: s,
    children: (0, r.jsxs)("div", {
      className: W.notificationSound,
      children: [(0, r.jsx)("div", {
        className: W.soundName,
        children: t
      }), (0, r.jsx)(f.P3F, {
        className: W.soundIcon,
        onClick: a,
        "aria-label": Y.intl.string(Y.t.Kd4uxM),
        children: (0, r.jsx)(f.gj8, {
          size: "xs",
          color: "currentColor",
          className: W.icon,
          "aria-hidden": true
        })
      })]
    })
  })
}

function ee(e) {
  let {
    disabledSounds: t,
    disableAllSounds: n,
    notifyMessagesInSelectedChannel: a
  } = e, s = i.useRef(null), l = (0, v.p)(), c = i.useCallback((e, t) => {
    t.stopPropagation(), t.preventDefault(), null != s.current && s.current.stop(), s.current = (0, P.GN)(e)
  }, []), u = i.useCallback((e, n) => {
    let r = t.filter(t => t !== e);
    n || r.push(e), p.default.setDisabledSounds(r)
  }, [t]);
  i.useEffect(() => () => {
    var e;
    null == (e = s.current) || e.stop()
  });
  let d = [{
      label: Y.intl.string(Y.t.pz71xM),
      sound: "message1",
      focusModeDisabled: l
    }, {
      label: Y.intl.string(Y.t.hK51Ym),
      sound: "deafen"
    }, {
      label: Y.intl.string(Y.t.XiejaG),
      sound: "undeafen"
    }, {
      label: Y.intl.string(Y.t["w4m94+"]),
      sound: "mute"
    }, {
      label: Y.intl.string(Y.t.YqAjX1),
      sound: "unmute"
    }, {
      label: Y.intl.string(Y.t.JoTq8v),
      sound: "camera_on"
    }, {
      label: Y.intl.string(Y.t["8P6tQ0"]),
      sound: "camera_off"
    }, {
      label: Y.intl.string(Y.t["juL9/P"]),
      sound: "disconnect"
    }, {
      label: Y.intl.string(Y.t.x98vQk),
      sound: "ptt_start"
    }, {
      label: Y.intl.string(Y.t["1HjRqK"]),
      sound: "ptt_stop"
    }, {
      label: Y.intl.string(Y.t["9JB1Cg"]),
      sound: "user_join"
    }, {
      label: Y.intl.string(Y.t.KUBBNj),
      sound: "user_leave"
    }, {
      label: Y.intl.string(Y.t.EZjqUV),
      sound: "user_moved"
    }, {
      label: Y.intl.string(Y.t.LnNlQk),
      sound: "call_calling"
    }, {
      label: Y.intl.string(Y.t.XBrJT0),
      sound: "call_ringing"
    }, {
      label: Y.intl.string(Y.t["Nd8P5+"]),
      sound: "stream_started"
    }, {
      label: Y.intl.string(Y.t["9bYj+P"]),
      sound: "stream_ended"
    }, {
      label: Y.intl.string(Y.t.KccUIy),
      sound: "stream_user_joined"
    }, {
      label: Y.intl.string(Y.t.dsjkiI),
      sound: "stream_user_left"
    }, {
      label: Y.intl.string(Y.t.nFOcf3),
      sound: "activity_launch"
    }, {
      label: Y.intl.string(Y.t["a6lw/v"]),
      sound: "activity_end"
    }, {
      label: Y.intl.string(Y.t.KaFxra),
      sound: "activity_user_join"
    }, {
      label: Y.intl.string(Y.t.S14z9v),
      sound: "activity_user_left"
    }, {
      label: Y.intl.string(Y.t.CP3DCw),
      sound: "reconnect"
    }],
    _ = null != y.Z.useHolidaySoundpack();
  return (0, r.jsx)(R.F, {
    setting: F.s6.NOTIFICATIONS_SOUNDS,
    children: (0, r.jsxs)(f.hjN, {
      children: [_ ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(f.vwX, {
          className: K.marginBottom20,
          children: Y.intl.string(Y.t.fgSHf3)
        }), (0, r.jsx)(O.Z, {})]
      }) : null, (0, r.jsx)(f.vwX, {
        className: o()(K.marginBottom20, K.marginTop20),
        children: Y.intl.string(Y.t.MKWyKS)
      }), (0, r.jsx)(f.j7V, {
        note: Y.intl.string(Y.t["7oXUio"]),
        value: a,
        onChange: p.default.setNotifyMessagesInSelectedChannel,
        children: Y.intl.string(Y.t.lF5GGR)
      }), (0, r.jsx)(f.j7V, {
        note: Y.intl.string(Y.t["+B0XLC"]),
        value: n,
        onChange: p.default.toggleDisableAllSounds,
        children: Y.intl.string(Y.t["2ZhCOT"])
      }), d.map(e => {
        let {
          label: i,
          sound: a,
          focusModeDisabled: o
        } = e;
        return (0, r.jsx)($, {
          label: i,
          disabled: n || true === o,
          tooltip: o ? Y.intl.string(Y.t.cIRG0t) : true,
          onChange: e => u(a, e),
          onPreview: e => c(a, e),
          enabled: !n && !t.includes(a) && true !== o
        }, a)
      })]
    })
  })
}

function et() {
  let e = (0, Chunk442837.e7)([Chunk487419.Z], () => Chunk487419.Z.getGuildAlertSettings()),
    [t, n] = Chunk647438.useState(null),
    a = Chunk709054.default.keys(module).map(t => {
      let n = e[t];
      return {
        label: n.guildName,
        value: n.guildId
      }
    });
  return 0 === Object.keys(module).length ? null : (0, Chunk951288.jsxs)(Chunk921801.F, {
    setting: Chunk726985.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
    children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-lg/semibold",
      className: Chunk197571.marginBottom20,
      children: Chunk388032.intl.string(Chunk388032.t.D9yVAA)
    }), (0, Chunk951288.jsx)(Chunk481060.R94, {
      type: Chunk481060.geA.DESCRIPTION,
      className: Chunk197571.marginBottom20,
      children: Chunk388032.intl.string(Chunk388032.t["0PhAOD"])
    }), (0, Chunk951288.jsx)(Chunk481060.q4e, {
      label: Chunk388032.intl.string(Chunk388032.t.Q0PsXV),
      className: null != exports ? Chunk197571.marginBottom20 : Chunk197571.marginBottom40,
      value: exports,
      onChange: e => {
        n(e)
      },
      options: Chunk120356
    }), null != exports ? (0, Chunk951288.jsxs)("div", {
      className: Chunk197571.marginTop20,
      children: [(0, Chunk951288.jsxs)(Chunk921801.F, {
        setting: Chunk726985.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS,
        children: [(0, Chunk951288.jsx)(Chunk481060.j7V, {
          className: Chunk197571.marginBottom20,
          note: Chunk388032.intl.string(Chunk388032.t["z8Td4+"]),
          value: !module[exports].disableRaidAlertNag,
          onChange: () => {
            (0, Chunk675478.PS)(exports, e => {
              e.disableRaidAlertNag = !e.disableRaidAlertNag
            }, Chunk675478.fy.INFREQUENT_USER_ACTION)
          },
          hideBorder: true,
          children: Chunk388032.intl.string(Chunk388032.t.u6dc5O)
        }), (0, Chunk951288.jsx)(Chunk481060.$i$, {
          className: o()(Chunk197571.marginTop20, Chunk197571.marginBottom40)
        })]
      }), (0, Chunk951288.jsxs)(Chunk921801.F, {
        setting: Chunk726985.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS,
        children: [(0, Chunk951288.jsx)(Chunk481060.j7V, {
          className: Chunk197571.marginBottom20,
          note: Chunk388032.intl.string(Chunk388032.t.PyxXs7),
          value: !module[exports].disableRaidAlertPush,
          onChange: () => {
            (0, Chunk675478.PS)(exports, e => {
              e.disableRaidAlertPush = !e.disableRaidAlertPush
            }, Chunk675478.fy.INFREQUENT_USER_ACTION)
          },
          hideBorder: true,
          children: Chunk388032.intl.string(Chunk388032.t.P8MG6u)
        }), (0, Chunk951288.jsx)(Chunk481060.$i$, {
          className: o()(Chunk197571.marginTop20, Chunk197571.marginBottom40)
        })]
      })]
    }) : null, null != exports ? null : (0, Chunk951288.jsx)(Chunk481060.$i$, {
      className: o()(Chunk197571.marginTop20, Chunk197571.marginBottom40)
    })]
  })
}
class en extends Chunk647438.PureComponent {
  handleDesktopChange(e) {
    let t = e ? V.qrD.ALL : V.qrD.NEVER;
    t !== V.qrD.NEVER ? J("UserSettingsModal") : p.default.setDesktopType(t)
  }
  handleTTSChange(e) {
    let t = e;
    p.default.setTTSType(t)
  }
  render() {
    let {
      desktopType: e,
      afkTimeout: t,
      disableUnreadBadge: n,
      taskbarFlash: i,
      disabledSounds: a,
      disableAllSounds: s,
      notifyMessagesInSelectedChannel: c,
      focusMode: u
    } = this.props, d = Chunk358085.isPlatformEmbedded && (0, Chunk358085.isWindows)(), _ = Chunk45640.Z.getCurrentConfig({
      location: "Messages"
    }).enabled || 0 === exports ? 0 : 1, p = l().range(Chunk668781, 11).map(e => ({
      value: 60 * e,
      label: 0 === e ? Y.intl.string(Y.t["0QN7cX"]) : Y.intl.formatToPlainString(Y.t.iXLF9f, {
        minutes: e
      })
    }));
    return (0, Chunk951288.jsxs)(Chunk273313.Z, {
      title: Chunk388032.intl.string(Chunk388032.t.HcoRu7),
      children: [(0, Chunk951288.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.NOTIFICATIONS_ENABLE_DESKTOP,
        children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
          className: Chunk197571.marginBottom20,
          value: module !== Chunk981631.qrD.NEVER && !Chunk524437,
          onChange: this.handleDesktopChange,
          note: Chunk388032.intl.string(Chunk388032.t.wF9ih4),
          disabled: Chunk524437,
          tooltipNote: Chunk524437 ? Chunk388032.intl.string(Chunk388032.t.cIRG0t) : true,
          children: Chunk388032.intl.string(Chunk388032.t["/0WClp"])
        })
      }), (0, Chunk951288.jsx)(ei, {}), (0, Chunk951288.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE,
        children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
          className: Chunk538534 ? Chunk197571.marginBottom20 : Chunk197571.marginBottom40,
          value: !require,
          note: Chunk388032.intl.string(Chunk388032.t["9K4qwc"]),
          onChange: this.handleToggleShowUnreadBadge,
          children: Chunk388032.intl.string(Chunk388032.t.VH8AIC)
        })
      }), (0, Chunk951288.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING,
        children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
          className: Chunk197571.marginBottom40,
          value: Chunk647438,
          note: Chunk388032.intl.string(Chunk388032.t["bd4j4+"]),
          onChange: this.handleToggleShowFlash,
          children: Chunk388032.intl.string(Chunk388032.t.xSmFQE)
        })
      }), (0, Chunk951288.jsx)(ea, {}), (0, Chunk951288.jsx)(eu, {}), (0, Chunk951288.jsx)(ec, {}), (0, Chunk951288.jsxs)(Chunk921801.F, {
        setting: Chunk726985.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT,
        children: [(0, Chunk951288.jsx)(Chunk481060.q4e, {
          label: Chunk388032.intl.string(Chunk388032.t.TTvjd3),
          description: Chunk388032.intl.string(Chunk388032.t.Xytv9P),
          value: exports,
          onChange: Chunk695346.CM.updateSetting,
          options: Chunk292556
        }), (0, Chunk951288.jsx)(Chunk481060.$i$, {
          className: o()(Chunk197571.marginTop40, Chunk197571.marginBottom40)
        })]
      }), this.renderTTS(), (0, Chunk951288.jsx)(et, {}), (0, Chunk951288.jsx)(ee, {
        disabledSounds: Chunk120356,
        disableAllSounds: Chunk392711,
        notifyMessagesInSelectedChannel: Chunk442837
      }), (0, Chunk951288.jsx)(Chunk33656.Z, {})]
    })
  }
  constructor(...e) {
    super(...e), z(this, "handleToggleShowUnreadBadge", () => {
      p.default.setDisableUnreadBadge(!this.props.disableUnreadBadge)
    }), z(this, "handleToggleShowFlash", () => {
      p.default.setTaskbarFlash(!this.props.taskbarFlash)
    }), z(this, "renderTTS", () => {
      if (!m.Zh) return null;
      let e = [{
        name: Y.intl.string(Y.t.B1AGeH),
        value: V.PrB.ALL_CHANNELS
      }, {
        name: Y.intl.string(Y.t.uM2rNj),
        value: V.PrB.SELECTED_CHANNEL
      }, {
        name: Y.intl.string(Y.t.DYO5Oj),
        value: V.PrB.NEVER
      }];
      return (0, r.jsxs)(R.F, {
        setting: F.s6.NOTIFICATIONS_TEXT_TO_SPEECH,
        children: [(0, r.jsx)(d.E, {
          label: Y.intl.string(Y.t.VIm5MD),
          description: Y.intl.string(Y.t["+4dnAw"]),
          options: e,
          onChange: this.handleTTSChange,
          value: this.props.ttsType
        }), (0, r.jsx)(f.$i$, {
          className: o()(K.marginTop40, K.marginBottom40)
        })]
      })
    })
  }
}
let er = (0, Chunk818083.B)({
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

function ei() {
  let e = er.useExperiment({
      location: "settings"
    }, {
      autoTrackExposure: false
    }).enabled,
    t = (0, Chunk442837.e7)([Chunk9156.ZP], () => Chunk9156.ZP.mentionOnAllMessages);
  return module ? (0, Chunk951288.jsx)(Chunk921801.F, {
    setting: Chunk726985.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES,
    children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
      className: Chunk197571.marginBottom20,
      value: exports,
      onChange: e => {
        h.Z.setAccountFlag(H.c.MENTION_ON_ALL_MESSAGES, e)
      },
      note: "Increments the mention count when receiving a message in a channel set to 'All Messages'",
      children: "Mention on all messages?"
    })
  }) : null
}

function ea() {
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
    [a, s] = Chunk647438.useState(false);
  return module && (require || exports) ? (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
    children: [require ? (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.NOTIFICATIONS_UNREAD_SETTINGS,
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        className: Chunk197571.marginBottom40,
        value: require,
        disabled: Chunk120356 || !require,
        note: Chunk388032.intl.string(Chunk388032.t.frbLrK),
        onChange: () => eo(Chunk392711),
        children: Chunk388032.intl.string(Chunk388032.t.z21l8P)
      })
    }) : exports ? (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.NOTIFICATIONS_UNREAD_SETTINGS,
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        className: Chunk197571.marginBottom40,
        value: require,
        disabled: Chunk120356 || require,
        note: "Turns on the new notification system",
        onChange: e => {
          h.Z.setAccountFlag(H.c.USE_NEW_NOTIFICATIONS, e)
        },
        children: Chunk388032.intl.string(Chunk388032.t.z21l8P)
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
            children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
              hideBorder: true,
              value: require,
              onChange: e => {
                h.Z.setAccountFlag(H.c.USE_NEW_NOTIFICATIONS, e)
              },
              children: "Toggle new system on/off"
            })
          })]
        })
      }), (0, Chunk951288.jsx)(Chunk481060.$i$, {
        className: o()(Chunk197571.marginTop40, Chunk197571.marginBottom40)
      })]
    })]
  }) : null
}
async function eo(e) {
  e(true);
  let t = await (0, I.Tn)();
  0 === t.length ? await (0, S.oL)() : _.Z.show({
    title: Y.intl.string(Y.t["cY+Ooa"]),
    body: Y.intl.format(Y.t["7zTJJS"], {
      date: new Date(t[t.length - 1].recorded_at)
    }),
    cancelText: Y.intl.string(Y.t["ETE/oK"]),
    confirmText: Y.intl.string(Y.t.Rm96T0),
    onConfirm: S.oL
  }), e(false)
}

function es(e) {
  let t = (0, v.p)();
  return (0, r.jsx)(en, Q(q({}, e), {
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
  return (0, Chunk951288.jsx)(es, Q(q({}, module), {
    afkTimeout: Chunk695346.CM.useSetting()
  }))
}

function ec() {
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
      (0, N.MR)(t.value, e)
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
    }), (0, Chunk951288.jsx)(Chunk481060.$i$, {
      className: o()(Chunk197571.marginTop40, Chunk197571.marginBottom40)
    })]
  }) : null
}

function eu() {
  let e = Chunk695346.d8.useSetting(),
    t = Chunk695346.JN.useSetting();
  return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
    children: [(0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.NOTIFICATIONS_VOICE_ACTIVITY,
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: module,
        onChange: Chunk210176.I,
        note: Chunk388032.intl.string(Chunk388032.t.rngMNz),
        children: (0, Chunk951288.jsxs)(Chunk481060.vwX, {
          className: Chunk728495.titleWithBeta,
          children: [Chunk388032.intl.string(Chunk388032.t.wtk08f), (0, Chunk951288.jsx)(Chunk688465.Z, {})]
        })
      })
    }), (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.NOTIFICATIONS_GO_LIVE,
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: exports,
        onChange: Chunk695346.JN.updateSetting,
        note: Chunk388032.intl.string(Chunk388032.t["H+WYqa"]),
        children: (0, Chunk951288.jsx)(Chunk481060.vwX, {
          children: Chunk388032.intl.string(Chunk388032.t.pW4TMj)
        })
      })
    })]
  })
}