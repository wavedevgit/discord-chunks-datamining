/** Chunk was on 69835 **/
n.d(t, {
  Z: () => er
}), n(539854), n(388685);
var i = n(255367),
  r = n(73800),
  s = n(120356),
  l = n.n(s),
  a = n(392711),
  o = n.n(a),
  c = n(442837),
  d = n(524437),
  u = n(481060),
  m = n(668781),
  g = n(292556),
  p = n(87051),
  h = n(419363),
  f = n(818083),
  b = n(688465),
  _ = n(890022),
  x = n(688907),
  E = n(487419),
  C = n(197344),
  j = n(476756),
  O = n(734934),
  S = n(223683),
  v = n(312400),
  T = n(115345),
  I = n(392888),
  N = n(106371),
  y = n(995774),
  A = n(921801),
  P = n(460181),
  R = n(292959),
  D = n(9156),
  Z = n(912101),
  w = n(358085),
  k = n(709054),
  L = n(695346),
  B = n(675478),
  M = n(33656),
  U = n(726985),
  V = n(981631),
  G = n(468788),
  F = n(388032),
  H = n(589848),
  z = n(20493);

function Y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function W(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      Y(e, t, n[t])
    })
  }
  return e
}

function K(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function q(e) {
  let {
    label: t,
    enabled: n,
    disabled: r,
    onPreview: s,
    onChange: l,
    tooltip: a
  } = e;
  return (0, i.jsx)(u.j7V, {
    className: H.soundRow,
    value: n,
    onChange: l,
    disabled: r,
    tooltipNote: a,
    children: (0, i.jsxs)("div", {
      className: H.notificationSound,
      children: [(0, i.jsx)("div", {
        className: H.soundName,
        children: t
      }), (0, i.jsx)(u.P3F, {
        className: H.soundIcon,
        onClick: s,
        "aria-label": F.intl.string(F.t.Kd4uxM),
        children: (0, i.jsx)(u.gj8, {
          size: "xs",
          color: "currentColor",
          className: H.icon,
          "aria-hidden": !0
        })
      })]
    })
  })
}

function X(e) {
  let {
    disabledSounds: t,
    disableAllSounds: n,
    notifyMessagesInSelectedChannel: s
  } = e, a = r.useRef(null), o = (0, O.p)(), c = r.useCallback((e, t) => {
    t.stopPropagation(), t.preventDefault(), null != a.current && a.current.stop(), a.current = (0, P.GN)(e)
  }, []), d = r.useCallback((e, n) => {
    let i = t.filter(t => t !== e);
    n || i.push(e), g.default.setDisabledSounds(i)
  }, [t]);
  r.useEffect(() => () => {
    var e;
    null == (e = a.current) || e.stop()
  });
  let m = [{
      label: F.intl.string(F.t.pz71xM),
      sound: "message1",
      focusModeDisabled: o
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
    p = null != C.Z.useHolidaySoundpack();
  return (0, i.jsx)(A.F, {
    setting: U.s6.NOTIFICATIONS_SOUNDS,
    children: (0, i.jsxs)(u.hjN, {
      children: [p ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(u.vwX, {
          className: z.marginBottom20,
          children: F.intl.string(F.t.fgSHf3)
        }), (0, i.jsx)(j.Z, {})]
      }) : null, (0, i.jsx)(u.vwX, {
        className: l()(z.marginBottom20, z.marginTop20),
        children: F.intl.string(F.t.MKWyKS)
      }), (0, i.jsx)(u.j7V, {
        note: F.intl.string(F.t["7oXUio"]),
        value: s,
        onChange: g.default.setNotifyMessagesInSelectedChannel,
        children: F.intl.string(F.t.lF5GGR)
      }), (0, i.jsx)(u.j7V, {
        note: F.intl.string(F.t["+B0XLC"]),
        value: n,
        onChange: g.default.toggleDisableAllSounds,
        children: F.intl.string(F.t["2ZhCOT"])
      }), m.map(e => {
        let {
          label: r,
          sound: s,
          focusModeDisabled: l
        } = e;
        return (0, i.jsx)(q, {
          label: r,
          disabled: n || !0 === l,
          tooltip: l ? F.intl.string(F.t.cIRG0t) : void 0,
          onChange: e => d(s, e),
          onPreview: e => c(s, e),
          enabled: !n && !t.includes(s) && !0 !== l
        }, s)
      })]
    })
  })
}

function Q() {
  let e = (0, c.e7)([E.Z], () => E.Z.getGuildAlertSettings()),
    [t, n] = r.useState(null),
    s = k.default.keys(e).map(t => {
      let n = e[t];
      return {
        label: n.guildName,
        value: n.guildId
      }
    });
  return 0 === Object.keys(e).length ? null : (0, i.jsxs)(A.F, {
    setting: U.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
    children: [(0, i.jsxs)(u.X6q, {
      variant: "heading-lg/semibold",
      className: l()(H.titleWithBeta, z.marginBottom20),
      children: [F.intl.string(F.t.D9yVAA), (0, i.jsx)(b.Z, {})]
    }), (0, i.jsx)(u.R94, {
      type: u.geA.DESCRIPTION,
      className: z.marginBottom20,
      children: F.intl.string(F.t["0PhAOD"])
    }), (0, i.jsxs)(u.xJW, {
      title: F.intl.string(F.t.Q0PsXV),
      children: [(0, i.jsx)(u.q4e, {
        className: null != t ? z.marginBottom20 : z.marginBottom40,
        value: t,
        onChange: e => {
          n(e)
        },
        options: s
      }), null != t ? (0, i.jsxs)("div", {
        className: z.marginTop20,
        children: [(0, i.jsxs)(A.F, {
          setting: U.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS,
          children: [(0, i.jsx)(u.j7V, {
            className: z.marginBottom20,
            note: F.intl.string(F.t["z8Td4+"]),
            value: !e[t].disableRaidAlertNag,
            onChange: () => {
              (0, B.PS)(t, e => {
                e.disableRaidAlertNag = !e.disableRaidAlertNag
              }, B.fy.INFREQUENT_USER_ACTION)
            },
            hideBorder: !0,
            children: F.intl.string(F.t.u6dc5O)
          }), (0, i.jsx)(u.$i$, {
            className: l()(z.marginTop20, z.marginBottom40)
          })]
        }), (0, i.jsxs)(A.F, {
          setting: U.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS,
          children: [(0, i.jsx)(u.j7V, {
            className: z.marginBottom20,
            note: F.intl.string(F.t.PyxXs7),
            value: !e[t].disableRaidAlertPush,
            onChange: () => {
              (0, B.PS)(t, e => {
                e.disableRaidAlertPush = !e.disableRaidAlertPush
              }, B.fy.INFREQUENT_USER_ACTION)
            },
            hideBorder: !0,
            children: F.intl.string(F.t.P8MG6u)
          }), (0, i.jsx)(u.$i$, {
            className: l()(z.marginTop20, z.marginBottom40)
          })]
        })]
      }) : null, null != t ? null : (0, i.jsx)(u.$i$, {
        className: l()(z.marginTop20, z.marginBottom40)
      })]
    })]
  })
}
class J extends r.PureComponent {
  handleDesktopChange(e) {
    let t = e ? V.qrD.ALL : V.qrD.NEVER;
    if (t !== V.qrD.NEVER) Z.Z.requestPermission(e => {
      let t = e ? V.$Ab.ENABLED : V.$Ab.BLOCKED;
      g.default.setPermissionsState(t, "UserSettingsModal")
    });
    else g.default.setDesktopType(t)
  }
  handleTTSChange(e) {
    let t = e.value;
    g.default.setTTSType(t)
  }
  render() {
    let {
      desktopType: e,
      afkTimeout: t,
      disableUnreadBadge: n,
      taskbarFlash: r,
      disabledSounds: s,
      disableAllSounds: a,
      notifyMessagesInSelectedChannel: c,
      focusMode: d
    } = this.props, m = w.isPlatformEmbedded && (0, w.isWindows)(), g = o().range(1, 11).map(e => ({
      value: 60 * e,
      label: F.intl.formatToPlainString(F.t.iXLF9f, {
        minutes: e
      })
    }));
    return (0, i.jsxs)(u.hjN, {
      tag: u.RB0.H1,
      title: F.intl.string(F.t.HcoRu7),
      children: [(0, i.jsx)(A.F, {
        setting: U.s6.NOTIFICATIONS_ENABLE_DESKTOP,
        children: (0, i.jsx)(u.j7V, {
          className: z.marginBottom20,
          value: e !== V.qrD.NEVER && !d,
          onChange: this.handleDesktopChange,
          note: F.intl.string(F.t.wF9ih4),
          disabled: d,
          tooltipNote: d ? F.intl.string(F.t.cIRG0t) : void 0,
          children: F.intl.string(F.t["/0WClp"])
        })
      }), (0, i.jsx)(ee, {}), (0, i.jsx)(A.F, {
        setting: U.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE,
        children: (0, i.jsx)(u.j7V, {
          className: m ? z.marginBottom20 : z.marginBottom40,
          value: !n,
          note: F.intl.string(F.t["9K4qwc"]),
          onChange: this.handleToggleShowUnreadBadge,
          children: F.intl.string(F.t.VH8AIC)
        })
      }), (0, i.jsx)(A.F, {
        setting: U.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING,
        children: (0, i.jsx)(u.j7V, {
          className: z.marginBottom40,
          value: r,
          note: F.intl.string(F.t["bd4j4+"]),
          onChange: this.handleToggleShowFlash,
          children: F.intl.string(F.t.xSmFQE)
        })
      }), (0, i.jsx)(et, {}), (0, i.jsx)(el, {}), (0, i.jsx)(es, {}), (0, i.jsx)(A.F, {
        setting: U.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT,
        children: (0, i.jsxs)(u.xJW, {
          title: F.intl.string(F.t.TTvjd3),
          children: [(0, i.jsx)(u.q4e, {
            value: t,
            onChange: L.CM.updateSetting,
            options: g
          }), (0, i.jsx)(u.R94, {
            type: u.geA.DESCRIPTION,
            className: z.marginTop8,
            children: F.intl.string(F.t.Xytv9P)
          }), (0, i.jsx)(u.$i$, {
            className: l()(z.marginTop40, z.marginBottom40)
          })]
        })
      }), this.renderTTS(), (0, i.jsx)(Q, {}), (0, i.jsx)(u.xJW, {
        children: (0, i.jsx)(X, {
          disabledSounds: s,
          disableAllSounds: a,
          notifyMessagesInSelectedChannel: c
        })
      }), (0, i.jsx)(M.Z, {})]
    })
  }
  constructor(...e) {
    super(...e), Y(this, "handleToggleShowUnreadBadge", () => {
      g.default.setDisableUnreadBadge(!this.props.disableUnreadBadge)
    }), Y(this, "handleToggleShowFlash", () => {
      g.default.setTaskbarFlash(!this.props.taskbarFlash)
    }), Y(this, "renderTTS", () => {
      if (!h.Zh) return null;
      let e = [{
        name: F.intl.string(F.t.B1AGeH),
        value: V.PrB.ALL_CHANNELS
      }, {
        name: F.intl.string(F.t.uM2rNj),
        value: V.PrB.SELECTED_CHANNEL
      }, {
        name: F.intl.string(F.t.DYO5Oj),
        value: V.PrB.NEVER
      }];
      return (0, i.jsxs)(A.F, {
        setting: U.s6.NOTIFICATIONS_TEXT_TO_SPEECH,
        children: [(0, i.jsxs)(u.xJW, {
          title: F.intl.string(F.t.VIm5MD),
          children: [(0, i.jsx)(u.R94, {
            type: u.geA.DESCRIPTION,
            className: z.marginBottom8,
            children: F.intl.string(F.t["+4dnAw"])
          }), (0, i.jsx)(u.FXm, {
            options: e,
            onChange: this.handleTTSChange,
            value: this.props.ttsType
          })]
        }), (0, i.jsx)(u.$i$, {
          className: l()(z.marginTop40, z.marginBottom40)
        })]
      })
    })
  }
}
let $ = (0, f.B)({
  kind: "user",
  id: "2024-01_mention_on_all_messages",
  label: "Mention on all messages",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Increment mention count when receiving a message in a channel set to all messages",
    config: {
      enabled: !0
    }
  }]
});

function ee() {
  let e = $.useExperiment({
      location: "settings"
    }, {
      autoTrackExposure: !1
    }).enabled,
    t = (0, c.e7)([D.ZP], () => D.ZP.mentionOnAllMessages);
  return e ? (0, i.jsx)(A.F, {
    setting: U.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES,
    children: (0, i.jsx)(u.j7V, {
      className: z.marginBottom20,
      value: t,
      onChange: e => {
        p.Z.setAccountFlag(G.c.MENTION_ON_ALL_MESSAGES, e)
      },
      note: "Increments the mention count when receiving a message in a channel set to 'All Messages'",
      children: "Mention on all messages?"
    })
  }) : null
}

function et() {
  let e = v.xT.useExperiment({
      location: "UserSettingsNotifications"
    }, {
      autoTrackExposure: !1
    }).enabled,
    {
      manuallyOpen: t
    } = v.fs.useExperiment({
      location: "UserSettingsNotifications"
    }, {
      autoTrackExposure: !1
    }),
    n = (0, c.e7)([D.ZP], () => D.ZP.useNewNotifications),
    [s, a] = r.useState(!1);
  return e && (n || t) ? (0, i.jsxs)(i.Fragment, {
    children: [n ? (0, i.jsx)(A.F, {
      setting: U.s6.NOTIFICATIONS_UNREAD_SETTINGS,
      children: (0, i.jsx)(u.j7V, {
        className: z.marginBottom40,
        value: n,
        disabled: s || !n,
        note: F.intl.string(F.t.frbLrK),
        onChange: () => en(a),
        children: F.intl.string(F.t.z21l8P)
      })
    }) : t ? (0, i.jsx)(A.F, {
      setting: U.s6.NOTIFICATIONS_UNREAD_SETTINGS,
      children: (0, i.jsx)(u.j7V, {
        className: z.marginBottom40,
        value: n,
        disabled: s || n,
        note: "Turns on the new notification system",
        onChange: e => {
          p.Z.setAccountFlag(G.c.USE_NEW_NOTIFICATIONS, e)
        },
        children: F.intl.string(F.t.z21l8P)
      })
    }) : null, (0, i.jsxs)(A.F, {
      setting: U.s6.NOTIFICATIONS_NEW_SETTINGS,
      children: [(0, i.jsx)(u.xJW, {
        title: "New Notification Settings (Advanced, Staff Only)",
        children: (0, i.jsxs)("div", {
          style: {
            display: "flex",
            gap: 16
          },
          children: [(0, i.jsx)(A.F, {
            setting: U.s6.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT,
            children: (0, i.jsx)(u.zxk, {
              onClick: S.KP,
              children: "Restore most recent snapshot"
            })
          }), (0, i.jsx)(A.F, {
            setting: U.s6.NOTIFICATIONS_LAUNCH_MIGRATION,
            children: (0, i.jsx)(u.zxk, {
              onClick: () => {
                (0, I.R)(!0)
              },
              children: "Launch Migration"
            })
          }), (0, i.jsx)(A.F, {
            setting: U.s6.NOTIFICATIONS_TOGGLE_NEW_SYSTEM,
            children: (0, i.jsx)(u.j7V, {
              hideBorder: !0,
              value: n,
              onChange: e => {
                p.Z.setAccountFlag(G.c.USE_NEW_NOTIFICATIONS, e)
              },
              children: "Toggle new system on/off"
            })
          })]
        })
      }), (0, i.jsx)(u.$i$, {
        className: l()(z.marginTop40, z.marginBottom40)
      })]
    })]
  }) : null
}
async function en(e) {
  e(!0);
  let t = await (0, S.Tn)();
  0 === t.length ? await (0, T.oL)() : m.Z.show({
    title: F.intl.string(F.t["cY+Ooa"]),
    body: F.intl.format(F.t["7zTJJS"], {
      date: new Date(t[t.length - 1].recorded_at)
    }),
    cancelText: F.intl.string(F.t["ETE/oK"]),
    confirmText: F.intl.string(F.t.Rm96T0),
    onConfirm: T.oL
  }), e(!1)
}

function ei(e) {
  let t = (0, O.p)();
  return (0, i.jsx)(J, K(W({}, e), {
    focusMode: t
  }))
}

function er() {
  let e = (0, c.cj)([R.Z], () => ({
    disableUnreadBadge: R.Z.getDisableUnreadBadge(),
    taskbarFlash: R.Z.taskbarFlash,
    disabledSounds: R.Z.getDisabledSounds(),
    disableAllSounds: R.Z.getDisableAllSounds(),
    desktopType: R.Z.getDesktopType(),
    ttsType: R.Z.getTTSType(),
    notifyMessagesInSelectedChannel: R.Z.getNotifyMessagesInSelectedChannel()
  }));
  return (0, i.jsx)(ei, K(W({}, e), {
    afkTimeout: L.CM.useSetting()
  }))
}

function es() {
  let e = (0, _._x)("notification_settings"),
    t = (0, x.B)();
  if (!e) return null;
  let n = [{
    name: F.intl.string(F.t.PCRbS0),
    value: d.Tv.ACTIVITY_NOTIFICATIONS_ENABLED
  }, {
    name: F.intl.string(F.t.UBa6pa),
    value: d.Tv.ONLY_GAMES_PLAYED
  }, {
    name: F.intl.string(F.t.TCxJ8v),
    value: d.Tv.ACTIVITY_NOTIFICATIONS_DISABLED
  }];
  return (0, i.jsxs)(A.F, {
    setting: U.s6.NOTIFICATIONS_GAME_ACTIVITY,
    children: [(0, i.jsxs)(u.xJW, {
      title: F.intl.string(F.t.omtoJy),
      children: [(0, i.jsx)(u.R94, {
        type: u.geA.DESCRIPTION,
        className: z.marginBottom8,
        children: F.intl.string(F.t.ncS4CA)
      }), (0, i.jsx)(u.FXm, {
        options: n,
        onChange: e => {
          L.YT.updateSetting(e.value)
        },
        value: t
      })]
    }), (0, i.jsx)(u.$i$, {
      className: l()(z.marginTop40, z.marginBottom40)
    })]
  })
}

function el() {
  let e = L.fz.useSetting(),
    t = [{
      name: F.intl.string(F.t["9x/Rtb"]),
      value: d.Ns.NOTIFICATIONS_ENABLED
    }, {
      name: F.intl.string(F.t.fJAbQU),
      value: d.Ns.ONLY_DMS
    }, {
      name: F.intl.string(F.t["xu+UDQ"]),
      value: d.Ns.NOTIFICATIONS_DISABLED
    }];
  return N.Z.getCurrentConfig({
    location: "webSettings"
  }).enableInAppNotifications ? (0, i.jsxs)(A.F, {
    setting: U.s6.NOTIFICATIONS_REACTIONS,
    children: [(0, i.jsxs)(u.xJW, {
      title: F.intl.string(F.t.Rq0NFh),
      children: [(0, i.jsx)(u.R94, {
        type: u.geA.DESCRIPTION,
        className: z.marginBottom8,
        children: F.intl.string(F.t.oWF6eX)
      }), (0, i.jsx)(u.FXm, {
        options: t,
        onChange: t => {
          (0, y.MR)(t.value, e)
        },
        value: e
      })]
    }), (0, i.jsx)(u.$i$, {
      className: l()(z.marginTop40, z.marginBottom40)
    })]
  }) : null
}