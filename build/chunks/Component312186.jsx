/** Chunk was on 63141 **/
/** chunk id: 312186, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk13245 = require("./13245.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk212632 = require("./212632.jsx"),
  Chunk906467 = require("./906467.js"),
  Chunk556296 = require("./556296.js"),
  Chunk237997 = require("./237997.js"),
  Chunk998502 = require("./998502.js"),
  Chunk13140 = require("./13140.js"),
  Chunk486016 = require("./486016.js"),
  Chunk809357 = require("./809357.js"),
  Chunk624864 = require("./624864.js"),
  Chunk987650 = require("./987650.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk512080 = require("./512080.js"),
  Chunk478411 = require("./478411.js");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function Z() {
  let e = h.default.getNotificationPositionMode(),
    t = e !== v._vf.DISABLED,
    n = u.ZP.getOverlayKeybind(),
    i = u.ZP.getOverlayChatKeybind();
  a.Z.track(v.rMx.OVERLAY_SETTINGS_UPDATED, {
    enabled: true,
    notifications_enabled: t,
    notifications_position: t ? e : null,
    text_notifications_mode: b.Z.isNotificationDisabled(y.n0.TextChat) ? "DISABLED" : "ENABLED",
    text_opacity_slider: h.default.getTextWidgetOpacity(),
    hotkey: null != n ? (0, p.BB)(n.shortcut) : null,
    text_activation_hotkey: null != i ? (0, p.BB)(i.shortcut) : null
  })
}
class j extends Chunk473749.PureComponent {
  componentDidMount() {
    a.Z.track(v.rMx.SETTINGS_PANE_VIEWED, {
      settings_type: "overlay",
      destination_pane: "OVERLAY SETTINGS",
      origin_pane: null
    })
  }
  handleChangeNotificationPositionMode(e, t) {
    a.Z.setNotificationPositionMode(t), Z()
  }
  handleChangeAvatarSizeMode(e) {
    let {
      value: t
    } = e;
    a.Z.setAvatarSizeMode(t)
  }
  handleChangeDisplayNameMode(e) {
    let {
      value: t
    } = e;
    a.Z.setDisplayNameMode(t)
  }
  handleChangeDisplayUserMode(e) {
    let {
      value: t
    } = e;
    a.Z.setDisplayUserMode(t)
  }
  renderHeader() {
    return (0, i.jsxs)(l.Z, {
      direction: l.Z.Direction.VERTICAL,
      grow: 0,
      shrink: 0,
      className: E.header,
      children: [(0, i.jsxs)(l.Z, {
        children: [(0, i.jsx)(o.Heading, {
          variant: "heading-md/semibold",
          className: E.headerTitle,
          children: O.intl.string(O.t["35G2Mq"])
        }), (0, i.jsx)("div", {
          className: E.headerClose,
          children: (0, i.jsx)(o.hU, {
            variant: "icon-only",
            size: "md",
            icon: o.Dio,
            onClick: this.props.onClose,
            "aria-label": O.intl.string(O.t.cpT0Cq)
          })
        })]
      }), this.renderTabBar()]
    })
  }
  renderTabBar() {
    let {
      selectedSection: e
    } = this.state, t = d.Z.isDeveloper ? (0, i.jsx)(o.njP.Item, {
      id: "DEVELOPER",
      className: E.tabBarItem,
      children: "Developer"
    }) : null;
    return (0, i.jsxs)(o.njP, {
      selectedItem: e,
      type: "top",
      className: E.__invalid_tabBar,
      onItemSelect: this.handleSelectSection,
      children: [(0, i.jsx)(o.njP.Item, {
        id: "GENERAL",
        className: E.tabBarItem,
        children: O.intl.string(O.t["0FYxxw"])
      }), (0, i.jsx)(o.njP.Item, {
        id: "VOICE",
        className: E.tabBarItem,
        children: O.intl.string(O.t["3WeSiE"])
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
    return (0, i.jsx)(o.h21, {
      className: E.content,
      children: e
    }, t)
  }
  renderGeneralSettings() {
    let {
      notificationPositionMode: e,
      shouldShowKeybindIndicators: t,
      showKeybindIndicators: n,
      shouldShowInviteNotification: r
    } = this.props, s = !b.Z.isNotificationDisabled(y.n0.TextChat), l = e !== v._vf.DISABLED;
    return (0, i.jsxs)(o.C3N, {
      children: [(0, i.jsx)(o.gNt, {
        label: O.intl.string(O.t.IQv8Eo),
        children: (0, i.jsx)(c.Z, {
          position: e,
          onChange: this.handleChangeNotificationPositionMode
        })
      }), (0, i.jsx)(o.rsf, {
        label: O.intl.string(O.t.Fy5kPp),
        checked: s && l,
        onChange: this.handleToggleTextChatNotifications,
        disabled: !l
      }), (0, i.jsx)(o.rsf, {
        label: O.intl.string(O.t["f+c48/"]),
        description: O.intl.string(O.t.W9DVVf),
        checked: r,
        onChange: this.handleToggleInviteNotification
      }), n && (0, i.jsx)(o.rsf, {
        label: O.intl.string(O.t.XZTl9r),
        checked: t,
        onChange: e => a.Z.setShowKeybindIndicators(e)
      })]
    })
  }
  renderVoiceSettings() {
    let {
      avatarSizeMode: e,
      displayNameMode: t,
      displayUserMode: n
    } = this.props;
    return (0, i.jsxs)(o.Kqy, {
      gap: 20,
      children: [(0, i.jsx)(o.FXm, {
        label: O.intl.string(O.t.dnvZSg),
        onChange: e => this.handleChangeAvatarSizeMode({
          value: e
        }),
        options: [{
          value: v.ipw.LARGE,
          name: O.intl.string(O.t.YcOxtr)
        }, {
          value: v.ipw.SMALL,
          name: O.intl.string(O.t.BKIKqx)
        }],
        value: e
      }), (0, i.jsx)(o.FXm, {
        label: O.intl.string(O.t.J0dpcB),
        onChange: e => this.handleChangeDisplayNameMode({
          value: e
        }),
        options: [{
          value: v.wC$.ALWAYS,
          name: O.intl.string(O.t.nBmDrT)
        }, {
          value: v.wC$.ONLY_WHILE_SPEAKING,
          name: O.intl.string(O.t["2OvIZY"])
        }, {
          value: v.wC$.NEVER,
          name: O.intl.string(O.t.ekjlPL)
        }],
        value: t
      }), (0, i.jsx)(o.FXm, {
        label: O.intl.string(O.t.swsWWC),
        onChange: e => this.handleChangeDisplayUserMode({
          value: e
        }),
        options: [{
          value: v.OYC.ALWAYS,
          name: O.intl.string(O.t.nBmDrT)
        }, {
          value: v.OYC.ONLY_WHILE_SPEAKING,
          name: O.intl.string(O.t["2OvIZY"])
        }],
        value: n
      })]
    })
  }
  renderDeveloperSettings() {
    return (0, i.jsx)("div", {
      className: x.marginBottom20,
      children: (0, i.jsx)(o.PhF, {
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
        onSelectionChange: e => null != e && f.ZP.crash(e),
        selectionMode: "single",
        fullWidth: true
      })
    })
  }
  render() {
    return (0, i.jsxs)(o.VqE, {
      "aria-label": O.intl.string(O.t["35G2Mq"]),
      className: E.container,
      children: [this.renderHeader(), this.renderBody()]
    })
  }
  constructor(...e) {
    super(...e), S(this, "state", {
      selectedSection: "GENERAL"
    }), S(this, "handleSelectSection", e => {
      this.setState({
        selectedSection: e
      })
    }), S(this, "handleToggleTextChatNotifications", () => {
      a.Z.setNotificationDisabledSetting(g.i.TEXT_CHAT, !this.props.textChatDisabled), Z()
    }), S(this, "handleToggleInviteNotification", () => {
      let e = this.props.shouldShowInviteNotification;
      a.Z.setNotificationDisabledSetting(g.i.GAME_ACTIVITY, !e)
    })
  }
}

function _(e) {
  let {
    onClose: t
  } = e, {
    avatarSizeMode: n,
    displayNameMode: r,
    displayUserMode: o,
    notificationPositionMode: a,
    textChatDisabled: l,
    shouldShowKeybindIndicators: c,
    shouldShowInviteNotification: d
  } = (0, s.cj)([h.default, b.Z], () => ({
    avatarSizeMode: h.default.getAvatarSizeMode(),
    displayNameMode: h.default.getDisplayNameMode(),
    displayUserMode: h.default.getDisplayUserMode(),
    notificationPositionMode: h.default.getNotificationPositionMode(),
    textChatDisabled: b.Z.isNotificationDisabled(y.n0.TextChat),
    shouldShowKeybindIndicators: h.default.showKeybindIndicators,
    shouldShowInviteNotification: !b.Z.isNotificationDisabled(y.n0.ActivityInvite)
  })), u = (0, m.Z)({
    location: "Overlay Settings"
  });
  return (0, i.jsx)(j, {
    onClose: t,
    avatarSizeMode: n,
    displayNameMode: r,
    displayUserMode: o,
    notificationPositionMode: a,
    textChatDisabled: l,
    shouldShowKeybindIndicators: c,
    showKeybindIndicators: u,
    shouldShowInviteNotification: d
  })
}