/** Chunk was on 63141 **/
/** chunk id: 312186, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk199849 = require("./199849.jsx"),
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

function Z(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function j() {
  let e = f.default.getNotificationPositionMode(),
    t = e !== O._vf.DISABLED,
    n = h.ZP.getOverlayKeybind(),
    i = h.ZP.getOverlayChatKeybind();
  a.Z.track(O.rMx.OVERLAY_SETTINGS_UPDATED, {
    enabled: true,
    notifications_enabled: t,
    notifications_position: t ? e : null,
    text_notifications_mode: y.Z.isNotificationDisabled(v.n0.TextChat) ? "DISABLED" : "ENABLED",
    text_opacity_slider: f.default.getTextWidgetOpacity(),
    hotkey: null != n ? (0, g.BB)(n.shortcut) : null,
    text_activation_hotkey: null != i ? (0, g.BB)(i.shortcut) : null
  })
}
class _ extends Chunk473749.PureComponent {
  componentDidMount() {
    a.Z.track(O.rMx.SETTINGS_PANE_VIEWED, {
      settings_type: "overlay",
      destination_pane: "OVERLAY SETTINGS",
      origin_pane: null
    })
  }
  handleChangeNotificationPositionMode(e, t) {
    a.Z.setNotificationPositionMode(t), j()
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
    return (0, i.jsxs)(c.Z, {
      direction: c.Z.Direction.VERTICAL,
      grow: 0,
      shrink: 0,
      className: x.header,
      children: [(0, i.jsxs)(c.Z, {
        children: [(0, i.jsx)(l.Heading, {
          variant: "heading-md/semibold",
          className: x.headerTitle,
          children: E.intl.string(E.t["35G2Mq"])
        }), (0, i.jsx)("div", {
          className: x.headerClose,
          children: (0, i.jsx)(l.hU, {
            variant: "icon-only",
            size: "md",
            icon: l.Dio,
            onClick: this.props.onClose,
            "aria-label": E.intl.string(E.t.cpT0Cq)
          })
        })]
      }), this.renderTabBar()]
    })
  }
  renderTabBar() {
    let {
      selectedSection: e
    } = this.state, t = u.Z.isDeveloper ? (0, i.jsx)(l.njP.Item, {
      id: "DEVELOPER",
      className: x.tabBarItem,
      children: "Developer"
    }) : null;
    return (0, i.jsxs)(l.njP, {
      selectedItem: e,
      type: "top",
      className: x.__invalid_tabBar,
      onItemSelect: this.handleSelectSection,
      children: [(0, i.jsx)(l.njP.Item, {
        id: "GENERAL",
        className: x.tabBarItem,
        children: E.intl.string(E.t["0FYxxw"])
      }), (0, i.jsx)(l.njP.Item, {
        id: "VOICE",
        className: x.tabBarItem,
        children: E.intl.string(E.t["3WeSiE"])
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
    return (0, i.jsx)(l.h21, {
      className: x.content,
      children: e
    }, t)
  }
  renderGeneralSettings() {
    let {
      notificationPositionMode: e,
      shouldShowKeybindIndicators: t,
      showKeybindIndicators: n,
      shouldShowInviteNotification: r
    } = this.props, s = !y.Z.isNotificationDisabled(v.n0.TextChat), o = e !== O._vf.DISABLED;
    return (0, i.jsxs)(l.C3N, {
      children: [(0, i.jsx)(l.gNt, {
        label: E.intl.string(E.t.IQv8Eo),
        children: (0, i.jsx)(d.Z, {
          position: e,
          onChange: this.handleChangeNotificationPositionMode
        })
      }), (0, i.jsx)(l.rsf, {
        label: E.intl.string(E.t.Fy5kPp),
        checked: s && o,
        onChange: this.handleToggleTextChatNotifications,
        disabled: !o
      }), (0, i.jsx)(l.rsf, {
        label: E.intl.string(E.t["f+c48/"]),
        description: E.intl.string(E.t.W9DVVf),
        checked: r,
        onChange: this.handleToggleInviteNotification
      }), n && (0, i.jsx)(l.rsf, {
        label: E.intl.string(E.t.XZTl9r),
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
    return (0, i.jsxs)(l.Kqy, {
      gap: 20,
      children: [(0, i.jsx)(l.FXm, {
        label: E.intl.string(E.t.dnvZSg),
        onChange: e => this.handleChangeAvatarSizeMode({
          value: e
        }),
        options: [{
          value: O.ipw.LARGE,
          name: E.intl.string(E.t.YcOxtr)
        }, {
          value: O.ipw.SMALL,
          name: E.intl.string(E.t.BKIKqx)
        }],
        value: e
      }), (0, i.jsx)(l.FXm, {
        label: E.intl.string(E.t.J0dpcB),
        onChange: e => this.handleChangeDisplayNameMode({
          value: e
        }),
        options: [{
          value: O.wC$.ALWAYS,
          name: E.intl.string(E.t.nBmDrT)
        }, {
          value: O.wC$.ONLY_WHILE_SPEAKING,
          name: E.intl.string(E.t["2OvIZY"])
        }, {
          value: O.wC$.NEVER,
          name: E.intl.string(E.t.ekjlPL)
        }],
        value: t
      }), (0, i.jsx)(l.FXm, {
        label: E.intl.string(E.t.swsWWC),
        onChange: e => this.handleChangeDisplayUserMode({
          value: e
        }),
        options: [{
          value: O.OYC.ALWAYS,
          name: E.intl.string(E.t.nBmDrT)
        }, {
          value: O.OYC.ONLY_WHILE_SPEAKING,
          name: E.intl.string(E.t["2OvIZY"])
        }],
        value: n
      })]
    })
  }
  renderDeveloperSettings() {
    return (0, i.jsx)("div", {
      className: S.marginBottom20,
      children: (0, i.jsx)(o.y6, {
        label: "Crashes",
        value: true,
        options: [{
          value: true,
          label: "Native crash"
        }, {
          value: 0,
          label: "Abort()"
        }, {
          value: 1,
          label: "SIGSEGV()"
        }, {
          value: 2,
          label: "EXCEPTION_ACCESS_VIOLATION"
        }, {
          value: 3,
          label: "RaiseFailFastException"
        }, {
          value: 4,
          label: "Out of Memory"
        }],
        onChange: e => null != e && p.ZP.crash(e)
      })
    })
  }
  render() {
    return (0, i.jsxs)(l.VqE, {
      "aria-label": E.intl.string(E.t["35G2Mq"]),
      className: x.container,
      children: [this.renderHeader(), this.renderBody()]
    })
  }
  constructor(...e) {
    super(...e), Z(this, "state", {
      selectedSection: "GENERAL"
    }), Z(this, "handleSelectSection", e => {
      this.setState({
        selectedSection: e
      })
    }), Z(this, "handleToggleTextChatNotifications", () => {
      a.Z.setNotificationDisabledSetting(m.i.TEXT_CHAT, !this.props.textChatDisabled), j()
    }), Z(this, "handleToggleInviteNotification", () => {
      let e = this.props.shouldShowInviteNotification;
      a.Z.setNotificationDisabledSetting(m.i.GAME_ACTIVITY, !e)
    })
  }
}

function C(e) {
  let {
    onClose: t
  } = e, {
    avatarSizeMode: n,
    displayNameMode: r,
    displayUserMode: o,
    notificationPositionMode: l,
    textChatDisabled: a,
    shouldShowKeybindIndicators: c,
    shouldShowInviteNotification: d
  } = (0, s.cj)([f.default, y.Z], () => ({
    avatarSizeMode: f.default.getAvatarSizeMode(),
    displayNameMode: f.default.getDisplayNameMode(),
    displayUserMode: f.default.getDisplayUserMode(),
    notificationPositionMode: f.default.getNotificationPositionMode(),
    textChatDisabled: y.Z.isNotificationDisabled(v.n0.TextChat),
    shouldShowKeybindIndicators: f.default.showKeybindIndicators,
    shouldShowInviteNotification: !y.Z.isNotificationDisabled(v.n0.ActivityInvite)
  })), u = (0, b.Z)({
    location: "Overlay Settings"
  });
  return (0, i.jsx)(_, {
    onClose: t,
    avatarSizeMode: n,
    displayNameMode: r,
    displayUserMode: o,
    notificationPositionMode: l,
    textChatDisabled: a,
    shouldShowKeybindIndicators: c,
    showKeybindIndicators: u,
    shouldShowInviteNotification: d
  })
}