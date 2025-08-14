/** Chunk was on 63141 **/
/** chunk id: 669083, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk476828 = require("./476828.js"),
  Chunk197571 = require("./197571.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S() {
  let e = Chunk237997.default.getNotificationPositionMode(),
    t = module !== Chunk981631._vf.DISABLED,
    n = Chunk556296.ZP.getOverlayKeybind(),
    i = Chunk556296.ZP.getOverlayChatKeybind();
  Chunk13245.Z.track(Chunk981631.rMx.OVERLAY_SETTINGS_UPDATED, {
    enabled: true,
    notifications_enabled: exports,
    notifications_position: exports ? module : null,
    text_notifications_mode: Chunk624864.Z.isNotificationDisabled(Chunk486016.OverlayNotificationDisabledSetting.TEXT_CHAT) ? "DISABLED" : "ENABLED",
    text_opacity_slider: Chunk237997.default.getTextWidgetOpacity(),
    hotkey: null != require ? (0, Chunk13140.BB)(require.shortcut) : null,
    text_activation_hotkey: null != Chunk255367 ? (0, Chunk13140.BB)(Chunk255367.shortcut) : null
  })
}
class x extends Chunk73800.PureComponent {
  componentDidMount() {
    Chunk13245.Z.track(Chunk981631.rMx.SETTINGS_PANE_VIEWED, {
      settings_type: "overlay",
      destination_pane: "OVERLAY SETTINGS",
      origin_pane: null
    })
  }
  handleChangeNotificationPositionMode(e, t) {
    s.Z.setNotificationPositionMode(t), S()
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
    return (0, Chunk255367.jsxs)(Chunk600164.Z, {
      direction: Chunk600164.Z.Direction.VERTICAL,
      grow: 0,
      shrink: 0,
      className: Chunk476828.header,
      children: [(0, Chunk255367.jsxs)(Chunk600164.Z, {
        children: [(0, Chunk255367.jsx)(Chunk481060.vwX, {
          className: Chunk476828.headerTitle,
          tag: "h1",
          children: Chunk388032.intl.string(Chunk388032.t["35G2Mj"])
        }), (0, Chunk255367.jsx)(Chunk481060.olH, {
          className: Chunk476828.headerClose,
          onClick: this.props.onClose
        })]
      }), this.renderTabBar()]
    })
  }
  renderTabBar() {
    let {
      selectedSection: e
    } = this.state, t = Chunk906467.Z.isDeveloper ? (0, Chunk255367.jsx)(Chunk481060.njP.Item, {
      id: "DEVELOPER",
      className: Chunk476828.tabBarItem,
      children: "Developer"
    }) : null;
    return (0, Chunk255367.jsxs)(Chunk481060.njP, {
      selectedItem: module,
      type: "top",
      className: Chunk476828.__invalid_tabBar,
      onItemSelect: this.handleSelectSection,
      children: [(0, Chunk255367.jsx)(Chunk481060.njP.Item, {
        id: "GENERAL",
        className: Chunk476828.tabBarItem,
        children: Chunk388032.intl.string(Chunk388032.t["0FYxx8"])
      }), (0, Chunk255367.jsx)(Chunk481060.njP.Item, {
        id: "VOICE",
        className: Chunk476828.tabBarItem,
        children: Chunk388032.intl.string(Chunk388032.t["3WeSiI"])
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
    return (0, Chunk255367.jsx)(Chunk481060.hzk, {
      className: Chunk476828.content,
      children: module
    }, exports)
  }
  renderGeneralSettings() {
    let {
      notificationPositionMode: e,
      shouldShowKeybindIndicators: t,
      showKeybindIndicators: n,
      shouldShowInviteNotification: o
    } = this.props, a = !Chunk624864.Z.isNotificationDisabled(Chunk486016.OverlayNotificationDisabledSetting.TEXT_CHAT), d = module !== Chunk981631._vf.DISABLED;
    return (0, Chunk255367.jsxs)(Chunk73800.Fragment, {
      children: [(0, Chunk255367.jsx)(Chunk481060.xJW, {
        title: Chunk388032.intl.string(Chunk388032.t.IQv8Eh),
        className: Chunk197571.marginBottom20,
        children: (0, Chunk255367.jsx)(Chunk212632.Z, {
          position: module,
          onChange: this.handleChangeNotificationPositionMode
        })
      }), (0, Chunk255367.jsx)(Chunk481060.j7V, {
        value: Chunk600164 && Chunk906467,
        onChange: this.handleToggleTextChatNotifications,
        disabled: !Chunk906467,
        hideBorder: true,
        children: Chunk388032.intl.string(Chunk388032.t.Fy5kPj)
      }), (0, Chunk255367.jsx)(Chunk481060.j7V, {
        value: Chunk442837,
        onChange: this.handleToggleInviteNotification,
        hideBorder: true,
        note: Chunk388032.intl.string(Chunk388032.t.W9DVVV),
        children: Chunk388032.intl.string(Chunk388032.t["f+c48/"])
      }), require && (0, Chunk255367.jsx)(Chunk481060.j7V, {
        value: exports,
        onChange: e => s.Z.setShowKeybindIndicators(e),
        hideBorder: true,
        children: Chunk388032.intl.string(Chunk388032.t.XZTl9v)
      })]
    })
  }
  renderVoiceSettings() {
    let {
      avatarSizeMode: e,
      displayNameMode: t,
      displayUserMode: n
    } = this.props;
    return (0, Chunk255367.jsxs)(Chunk73800.Fragment, {
      children: [(0, Chunk255367.jsx)(Chunk481060.xJW, {
        title: Chunk388032.intl.string(Chunk388032.t.dnvZSk),
        className: Chunk197571.marginBottom20,
        children: (0, Chunk255367.jsx)(Chunk481060.FXm, {
          onChange: this.handleChangeAvatarSizeMode,
          options: [{
            value: Chunk981631.ipw.LARGE,
            name: Chunk388032.intl.string(Chunk388032.t.YcOxtr)
          }, {
            value: Chunk981631.ipw.SMALL,
            name: Chunk388032.intl.string(Chunk388032.t.BKIKq6)
          }],
          value: module,
          size: Chunk481060.FXm.Sizes.SMALL
        })
      }), (0, Chunk255367.jsx)(Chunk481060.xJW, {
        title: Chunk388032.intl.string(Chunk388032.t.J0dpcH),
        className: Chunk197571.marginBottom20,
        children: (0, Chunk255367.jsx)(Chunk481060.FXm, {
          onChange: this.handleChangeDisplayNameMode,
          options: [{
            value: Chunk981631.wC$.ALWAYS,
            name: Chunk388032.intl.string(Chunk388032.t.nBmDra)
          }, {
            value: Chunk981631.wC$.ONLY_WHILE_SPEAKING,
            name: Chunk388032.intl.string(Chunk388032.t["2OvIZW"])
          }, {
            value: Chunk981631.wC$.NEVER,
            name: Chunk388032.intl.string(Chunk388032.t.ekjlPD)
          }],
          value: exports,
          size: Chunk481060.FXm.Sizes.SMALL
        })
      }), (0, Chunk255367.jsx)(Chunk481060.xJW, {
        title: Chunk388032.intl.string(Chunk388032.t.swsWWF),
        className: Chunk197571.marginBottom20,
        children: (0, Chunk255367.jsx)(Chunk481060.FXm, {
          onChange: this.handleChangeDisplayUserMode,
          options: [{
            value: Chunk981631.OYC.ALWAYS,
            name: Chunk388032.intl.string(Chunk388032.t.nBmDra)
          }, {
            value: Chunk981631.OYC.ONLY_WHILE_SPEAKING,
            name: Chunk388032.intl.string(Chunk388032.t["2OvIZW"])
          }],
          value: require,
          size: Chunk481060.FXm.Sizes.SMALL
        })
      })]
    })
  }
  renderDeveloperSettings() {
    return (0, Chunk255367.jsx)(Chunk481060.xJW, {
      title: "Crashes",
      className: Chunk197571.marginBottom20,
      children: (0, Chunk255367.jsx)(Chunk481060.q4e, {
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
    return (0, Chunk255367.jsxs)(Chunk481060.Y0X, {
      "aria-label": Chunk388032.intl.string(Chunk388032.t["35G2Mj"]),
      transitionState: Chunk481060.Dvm.ENTERED,
      parentComponent: "OverlaySettings",
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
      s.Z.setNotificationDisabledSetting(g.OverlayNotificationDisabledSetting.TEXT_CHAT, !this.props.textChatDisabled), S()
    }), E(this, "handleToggleInviteNotification", () => {
      let e = this.props.shouldShowInviteNotification;
      s.Z.setNotificationDisabledSetting(g.OverlayNotificationDisabledSetting.GAME_ACTIVITY, !e)
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
    textChatDisabled: y.Z.isNotificationDisabled(g.OverlayNotificationDisabledSetting.TEXT_CHAT),
    shouldShowKeybindIndicators: h.default.showKeybindIndicators,
    shouldShowInviteNotification: !y.Z.isNotificationDisabled(g.OverlayNotificationDisabledSetting.GAME_ACTIVITY)
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