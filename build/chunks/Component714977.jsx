/** Chunk was on 84018 **/
/** chunk id: 714977, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => j
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk684013 = require("./684013.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk499820 = require("./499820.jsx"),
  Chunk540999 = require("./540999.js"),
  Chunk532624 = require("./532624.js"),
  Chunk256415 = require("./256415.js"),
  Chunk837921 = require("./837921.js"),
  Chunk350535 = require("./350535.js"),
  Chunk93465 = require("./93465.js"),
  Chunk994322 = require("./994322.js"),
  Chunk592598 = require("./592598.js"),
  Chunk672396 = require("./672396.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk300597 = require("./300597.js"),
  Chunk473169 = require("./473169.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function x() {
  let e = p.default.getNotificationPositionMode(),
    t = e !== b.G6Q.DISABLED,
    n = u.Ay.getOverlayKeybind(),
    i = u.Ay.getOverlayChatKeybind();
  o.A.track(b.HAw.OVERLAY_SETTINGS_UPDATED, {
    enabled: true,
    notifications_enabled: t,
    notifications_position: t ? e : null,
    text_notifications_mode: m.A.isNotificationDisabled(_.KS.TextChat) ? "DISABLED" : "ENABLED",
    text_opacity_slider: p.default.getTextWidgetOpacity(),
    hotkey: null != n ? (0, f.dI)(n.shortcut) : null,
    text_activation_hotkey: null != i ? (0, f.dI)(i.shortcut) : null
  })
}
class S extends Chunk64700.PureComponent {
  componentDidMount() {
    o.A.track(b.HAw.SETTINGS_PANE_VIEWED, {
      settings_type: "overlay",
      destination_pane: "OVERLAY SETTINGS",
      origin_pane: null
    })
  }
  handleChangeNotificationPositionMode(e, t) {
    o.A.setNotificationPositionMode(t), x()
  }
  handleChangeAvatarSizeMode(e) {
    let {
      value: t
    } = e;
    o.A.setAvatarSizeMode(t)
  }
  handleChangeDisplayNameMode(e) {
    let {
      value: t
    } = e;
    o.A.setDisplayNameMode(t)
  }
  handleChangeDisplayUserMode(e) {
    let {
      value: t
    } = e;
    o.A.setDisplayUserMode(t)
  }
  renderHeader() {
    return (0, i.jsxs)(a.A, {
      direction: a.A.Direction.VERTICAL,
      grow: 0,
      shrink: 0,
      className: O.wx,
      children: [(0, i.jsxs)(a.A, {
        children: [(0, i.jsx)(l.Heading, {
          variant: "heading-md/semibold",
          className: O.qd,
          children: A.intl.string(A.t["35G2Mq"])
        }), (0, i.jsx)("div", {
          className: O.Q7,
          children: (0, i.jsx)(l.K0, {
            variant: "icon-only",
            size: "md",
            icon: l.PGe,
            onClick: this.props.onClose,
            "aria-label": A.intl.string(A.t.cpT0Cq)
          })
        })]
      }), this.renderTabBar()]
    })
  }
  renderTabBar() {
    let {
      selectedSection: e
    } = this.state, t = d.A.isDeveloper ? (0, i.jsx)(l.VQ0.Item, {
      id: "DEVELOPER",
      className: O.YU,
      children: "Developer"
    }) : null;
    return (0, i.jsxs)(l.VQ0, {
      selectedItem: e,
      type: "top",
      className: O.__invalid_tabBar,
      onItemSelect: this.handleSelectSection,
      children: [(0, i.jsx)(l.VQ0.Item, {
        id: "GENERAL",
        className: O.YU,
        children: A.intl.string(A.t["0FYxxw"])
      }), (0, i.jsx)(l.VQ0.Item, {
        id: "VOICE",
        className: O.YU,
        children: A.intl.string(A.t["3WeSiE"])
      }), t]
    })
  }
  renderBody() {
    let e, {
      selectedSection: t
    } = this.state;
    switch (t) {
      case "DEVELOPER":
        e = this.renderDeveloperSettings();
        break;
      case "VOICE":
        e = this.renderVoiceSettings();
        break;
      default:
        e = this.renderGeneralSettings()
    }
    return (0, i.jsx)(l.ChK, {
      className: O.Qs,
      children: e
    }, t)
  }
  renderGeneralSettings() {
    let {
      notificationPositionMode: e,
      shouldShowKeybindIndicators: t,
      showKeybindIndicators: n,
      shouldShowInviteNotification: r
    } = this.props, s = !m.A.isNotificationDisabled(_.KS.TextChat), a = e !== b.G6Q.DISABLED;
    return (0, i.jsxs)(l.nVY, {
      children: [(0, i.jsx)(l.D0$, {
        label: A.intl.string(A.t.IQv8Eo),
        children: (0, i.jsx)(c.A, {
          position: e,
          onChange: this.handleChangeNotificationPositionMode
        })
      }), (0, i.jsx)(l.dOG, {
        label: A.intl.string(A.t.Fy5kPp),
        checked: s && a,
        onChange: this.handleToggleTextChatNotifications,
        disabled: !a
      }), (0, i.jsx)(l.dOG, {
        label: A.intl.string(A.t["f+c48/"]),
        description: A.intl.string(A.t.W9DVVf),
        checked: r,
        onChange: this.handleToggleInviteNotification
      }), n && (0, i.jsx)(l.dOG, {
        label: A.intl.string(A.t.XZTl9r),
        checked: t,
        onChange: e => o.A.setShowKeybindIndicators(e)
      })]
    })
  }
  renderVoiceSettings() {
    let {
      avatarSizeMode: e,
      displayNameMode: t,
      displayUserMode: n
    } = this.props;
    return (0, i.jsxs)(l.BJc, {
      gap: 20,
      children: [(0, i.jsx)(l.z6M, {
        label: A.intl.string(A.t.dnvZSg),
        onChange: e => this.handleChangeAvatarSizeMode({
          value: e
        }),
        options: [{
          value: b.OSZ.LARGE,
          name: A.intl.string(A.t.YcOxtr)
        }, {
          value: b.OSZ.SMALL,
          name: A.intl.string(A.t.BKIKqx)
        }],
        value: e
      }), (0, i.jsx)(l.z6M, {
        label: A.intl.string(A.t.J0dpcB),
        onChange: e => this.handleChangeDisplayNameMode({
          value: e
        }),
        options: [{
          value: b.pwA.ALWAYS,
          name: A.intl.string(A.t.nBmDrT)
        }, {
          value: b.pwA.ONLY_WHILE_SPEAKING,
          name: A.intl.string(A.t["2OvIZY"])
        }, {
          value: b.pwA.NEVER,
          name: A.intl.string(A.t.ekjlPL)
        }],
        value: t
      }), (0, i.jsx)(l.z6M, {
        label: A.intl.string(A.t.swsWWC),
        onChange: e => this.handleChangeDisplayUserMode({
          value: e
        }),
        options: [{
          value: b.f5z.ALWAYS,
          name: A.intl.string(A.t.nBmDrT)
        }, {
          value: b.f5z.ONLY_WHILE_SPEAKING,
          name: A.intl.string(A.t["2OvIZY"])
        }],
        value: n
      })]
    })
  }
  renderDeveloperSettings() {
    return (0, i.jsx)("div", {
      className: v.SX,
      children: (0, i.jsx)(l.l6P, {
        label: "Crashes",
        value: true,
        options: [{
          id: "native-crash",
          value: true,
          label: "Native crash"
        }, {
          id: "abort",
          value: 0,
          label: "Abort()"
        }, {
          id: "sigsegv",
          value: 1,
          label: "SIGSEGV()"
        }, {
          id: "exception-access-violation",
          value: 2,
          label: "EXCEPTION_ACCESS_VIOLATION"
        }, {
          id: "raise-fail-fast-exception",
          value: 3,
          label: "RaiseFailFastException"
        }, {
          id: "out-of-memory",
          value: 4,
          label: "Out of Memory"
        }],
        onSelectionChange: e => null != e && h.Ay.crash(e),
        selectionMode: "single",
        fullWidth: true
      })
    })
  }
  render() {
    return (0, i.jsxs)(l.lGe, {
      "aria-label": A.intl.string(A.t["35G2Mq"]),
      className: O.kL,
      children: [this.renderHeader(), this.renderBody()]
    })
  }
  constructor(...e) {
    super(...e), E(this, "state", {
      selectedSection: "GENERAL"
    }), E(this, "handleSelectSection", e => {
      this.setState({
        selectedSection: e
      })
    }), E(this, "handleToggleTextChatNotifications", () => {
      o.A.setNotificationDisabledSetting(g.M.TEXT_CHAT, !this.props.textChatDisabled), x()
    }), E(this, "handleToggleInviteNotification", () => {
      let e = this.props.shouldShowInviteNotification;
      o.A.setNotificationDisabledSetting(g.M.GAME_ACTIVITY, !e)
    })
  }
}

function j(e) {
  let {
    onClose: t
  } = e, {
    avatarSizeMode: n,
    displayNameMode: r,
    displayUserMode: l,
    notificationPositionMode: o,
    textChatDisabled: a,
    shouldShowKeybindIndicators: c,
    shouldShowInviteNotification: d
  } = (0, s.cf)([p.default, m.A], () => ({
    avatarSizeMode: p.default.getAvatarSizeMode(),
    displayNameMode: p.default.getDisplayNameMode(),
    displayUserMode: p.default.getDisplayUserMode(),
    notificationPositionMode: p.default.getNotificationPositionMode(),
    textChatDisabled: m.A.isNotificationDisabled(_.KS.TextChat),
    shouldShowKeybindIndicators: p.default.showKeybindIndicators,
    shouldShowInviteNotification: !m.A.isNotificationDisabled(_.KS.ActivityInvite)
  })), u = (0, y.A)({
    location: "Overlay Settings"
  });
  return (0, i.jsx)(S, {
    onClose: t,
    avatarSizeMode: n,
    displayNameMode: r,
    displayUserMode: l,
    notificationPositionMode: o,
    textChatDisabled: a,
    shouldShowKeybindIndicators: c,
    showKeybindIndicators: u,
    shouldShowInviteNotification: d
  })
}