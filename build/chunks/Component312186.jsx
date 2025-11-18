/** Chunk was on 63141 **/
/** chunk id: 312186, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
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
  Chunk627641 = require("./627641.js"),
  Chunk10198 = require("./10198.js");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function Z() {
  let e = Chunk237997.default.getNotificationPositionMode(),
    t = module !== Chunk981631._vf.DISABLED,
    n = Chunk556296.ZP.getOverlayKeybind(),
    i = Chunk556296.ZP.getOverlayChatKeybind();
  Chunk13245.Z.track(Chunk981631.rMx.OVERLAY_SETTINGS_UPDATED, {
    enabled: true,
    notifications_enabled: exports,
    notifications_position: exports ? module : null,
    text_notifications_mode: Chunk624864.Z.isNotificationDisabled(Chunk987650.n0.TextChat) ? "DISABLED" : "ENABLED",
    text_opacity_slider: Chunk237997.default.getTextWidgetOpacity(),
    hotkey: null != require ? (0, Chunk13140.BB)(require.shortcut) : null,
    text_activation_hotkey: null != Chunk54381 ? (0, Chunk13140.BB)(Chunk54381.shortcut) : null
  })
}
class x extends Chunk473749.PureComponent {
  componentDidMount() {
    Chunk13245.Z.track(Chunk981631.rMx.SETTINGS_PANE_VIEWED, {
      settings_type: "overlay",
      destination_pane: "OVERLAY SETTINGS",
      origin_pane: null
    })
  }
  handleChangeNotificationPositionMode(e, t) {
    s.Z.setNotificationPositionMode(t), Z()
  }
  handleChangeAvatarSizeMode(e) {
    let {
      value: t
    } = e;
    s.Z.setAvatarSizeMode(t)
  }
  handleChangeDisplayNameMode(e) {
    let {
      value: t
    } = e;
    s.Z.setDisplayNameMode(t)
  }
  handleChangeDisplayUserMode(e) {
    let {
      value: t
    } = e;
    s.Z.setDisplayUserMode(t)
  }
  renderHeader() {
    return (0, Chunk54381.jsxs)(Chunk600164.Z, {
      direction: Chunk600164.Z.Direction.VERTICAL,
      grow: 0,
      shrink: 0,
      className: Chunk627641.header,
      children: [(0, Chunk54381.jsxs)(Chunk600164.Z, {
        children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
          variant: "heading-md/semibold",
          className: Chunk627641.headerTitle,
          children: Chunk388032.intl.string(Chunk388032.t["35G2Mq"])
        }), (0, Chunk54381.jsx)("div", {
          className: Chunk627641.headerClose,
          children: (0, Chunk54381.jsx)(Chunk481060.hU, {
            variant: "icon-only",
            size: "md",
            icon: Chunk481060.Dio,
            onClick: this.props.onClose,
            "aria-label": Chunk388032.intl.string(Chunk388032.t.cpT0Cq)
          })
        })]
      }), this.renderTabBar()]
    })
  }
  renderTabBar() {
    let {
      selectedSection: e
    } = this.state, t = Chunk906467.Z.isDeveloper ? (0, Chunk54381.jsx)(Chunk481060.njP.Item, {
      id: "DEVELOPER",
      className: Chunk627641.tabBarItem,
      children: "Developer"
    }) : null;
    return (0, Chunk54381.jsxs)(Chunk481060.njP, {
      selectedItem: module,
      type: "top",
      className: Chunk627641.__invalid_tabBar,
      onItemSelect: this.handleSelectSection,
      children: [(0, Chunk54381.jsx)(Chunk481060.njP.Item, {
        id: "GENERAL",
        className: Chunk627641.tabBarItem,
        children: Chunk388032.intl.string(Chunk388032.t["0FYxxw"])
      }), (0, Chunk54381.jsx)(Chunk481060.njP.Item, {
        id: "VOICE",
        className: Chunk627641.tabBarItem,
        children: Chunk388032.intl.string(Chunk388032.t["3WeSiE"])
      }), exports]
    })
  }
  renderBody() {
    let e, {
      selectedSection: t
    } = this.state;
    switch (exports) {
      case "DEVELOPER":
        e = this.renderDeveloperSettings();
        break;
      case "VOICE":
        e = this.renderVoiceSettings();
        break;
      default:
        e = this.renderGeneralSettings()
    }
    return (0, Chunk54381.jsx)(Chunk481060.h21, {
      className: Chunk627641.content,
      children: module
    }, exports)
  }
  renderGeneralSettings() {
    let {
      notificationPositionMode: e,
      shouldShowKeybindIndicators: t,
      showKeybindIndicators: n,
      shouldShowInviteNotification: r
    } = this.props, o = !Chunk624864.Z.isNotificationDisabled(Chunk987650.n0.TextChat), a = module !== Chunk981631._vf.DISABLED;
    return (0, Chunk54381.jsxs)(Chunk481060.C3N, {
      children: [(0, Chunk54381.jsx)(Chunk481060.gNt, {
        label: Chunk388032.intl.string(Chunk388032.t.IQv8Eo),
        children: (0, Chunk54381.jsx)(Chunk212632.Z, {
          position: module,
          onChange: this.handleChangeNotificationPositionMode
        })
      }), (0, Chunk54381.jsx)(Chunk481060.rsf, {
        label: Chunk388032.intl.string(Chunk388032.t.Fy5kPp),
        checked: Chunk442837 && Chunk600164,
        onChange: this.handleToggleTextChatNotifications,
        disabled: !Chunk600164
      }), (0, Chunk54381.jsx)(Chunk481060.rsf, {
        label: Chunk388032.intl.string(Chunk388032.t["f+c48/"]),
        description: Chunk388032.intl.string(Chunk388032.t.W9DVVf),
        checked: Chunk473749,
        onChange: this.handleToggleInviteNotification
      }), require && (0, Chunk54381.jsx)(Chunk481060.rsf, {
        label: Chunk388032.intl.string(Chunk388032.t.XZTl9r),
        checked: exports,
        onChange: e => s.Z.setShowKeybindIndicators(e)
      })]
    })
  }
  renderVoiceSettings() {
    let {
      avatarSizeMode: e,
      displayNameMode: t,
      displayUserMode: n
    } = this.props;
    return (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
      gap: 20,
      children: [(0, Chunk54381.jsx)(Chunk481060.FXm, {
        label: Chunk388032.intl.string(Chunk388032.t.dnvZSg),
        onChange: e => this.handleChangeAvatarSizeMode({
          value: e
        }),
        options: [{
          value: Chunk981631.ipw.LARGE,
          name: Chunk388032.intl.string(Chunk388032.t.YcOxtr)
        }, {
          value: Chunk981631.ipw.SMALL,
          name: Chunk388032.intl.string(Chunk388032.t.BKIKqx)
        }],
        value: module
      }), (0, Chunk54381.jsx)(Chunk481060.FXm, {
        label: Chunk388032.intl.string(Chunk388032.t.J0dpcB),
        onChange: e => this.handleChangeDisplayNameMode({
          value: e
        }),
        options: [{
          value: Chunk981631.wC$.ALWAYS,
          name: Chunk388032.intl.string(Chunk388032.t.nBmDrT)
        }, {
          value: Chunk981631.wC$.ONLY_WHILE_SPEAKING,
          name: Chunk388032.intl.string(Chunk388032.t["2OvIZY"])
        }, {
          value: Chunk981631.wC$.NEVER,
          name: Chunk388032.intl.string(Chunk388032.t.ekjlPL)
        }],
        value: exports
      }), (0, Chunk54381.jsx)(Chunk481060.FXm, {
        label: Chunk388032.intl.string(Chunk388032.t.swsWWC),
        onChange: e => this.handleChangeDisplayUserMode({
          value: e
        }),
        options: [{
          value: Chunk981631.OYC.ALWAYS,
          name: Chunk388032.intl.string(Chunk388032.t.nBmDrT)
        }, {
          value: Chunk981631.OYC.ONLY_WHILE_SPEAKING,
          name: Chunk388032.intl.string(Chunk388032.t["2OvIZY"])
        }],
        value: require
      })]
    })
  }
  renderDeveloperSettings() {
    return (0, Chunk54381.jsx)("div", {
      className: Chunk10198.marginBottom20,
      children: (0, Chunk54381.jsx)(Chunk481060.q4e, {
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
    return (0, Chunk54381.jsxs)(Chunk481060.VqE, {
      "aria-label": Chunk388032.intl.string(Chunk388032.t["35G2Mq"]),
      className: Chunk627641.container,
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
      s.Z.setNotificationDisabledSetting(g.i.TEXT_CHAT, !this.props.textChatDisabled), Z()
    }), S(this, "handleToggleInviteNotification", () => {
      let e = this.props.shouldShowInviteNotification;
      s.Z.setNotificationDisabledSetting(g.i.GAME_ACTIVITY, !e)
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
    notificationPositionMode: s,
    textChatDisabled: a,
    shouldShowKeybindIndicators: c,
    shouldShowInviteNotification: d
  } = (0, o.cj)([h.default, y.Z], () => ({
    avatarSizeMode: h.default.getAvatarSizeMode(),
    displayNameMode: h.default.getDisplayNameMode(),
    displayUserMode: h.default.getDisplayUserMode(),
    notificationPositionMode: h.default.getNotificationPositionMode(),
    textChatDisabled: y.Z.isNotificationDisabled(b.n0.TextChat),
    shouldShowKeybindIndicators: h.default.showKeybindIndicators,
    shouldShowInviteNotification: !y.Z.isNotificationDisabled(b.n0.ActivityInvite)
  })), u = (0, m.Z)({
    location: "Overlay Settings"
  });
  return (0, i.jsx)(x, {
    onClose: t,
    avatarSizeMode: n,
    displayNameMode: r,
    displayUserMode: l,
    notificationPositionMode: s,
    textChatDisabled: a,
    shouldShowKeybindIndicators: c,
    showKeybindIndicators: u,
    shouldShowInviteNotification: d
  })
}