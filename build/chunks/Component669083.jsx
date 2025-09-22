/** Chunk was on 63141 **/
/** chunk id: 669083, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
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

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function x() {
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
    text_activation_hotkey: null != Chunk951288 ? (0, Chunk13140.BB)(Chunk951288.shortcut) : null
  })
}
class Z extends Chunk647438.PureComponent {
  componentDidMount() {
    Chunk13245.Z.track(Chunk981631.rMx.SETTINGS_PANE_VIEWED, {
      settings_type: "overlay",
      destination_pane: "OVERLAY SETTINGS",
      origin_pane: null
    })
  }
  handleChangeNotificationPositionMode(e, t) {
    a.Z.setNotificationPositionMode(t), x()
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
    return (0, Chunk951288.jsxs)(Chunk600164.Z, {
      direction: Chunk600164.Z.Direction.VERTICAL,
      grow: 0,
      shrink: 0,
      className: Chunk476828.header,
      children: [(0, Chunk951288.jsxs)(Chunk600164.Z, {
        children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
          className: Chunk476828.headerTitle,
          tag: "h1",
          children: Chunk388032.intl.string(Chunk388032.t["35G2Mj"])
        }), (0, Chunk951288.jsx)(Chunk481060.olH, {
          className: Chunk476828.headerClose,
          onClick: this.props.onClose
        })]
      }), this.renderTabBar()]
    })
  }
  renderTabBar() {
    let {
      selectedSection: e
    } = this.state, t = Chunk906467.Z.isDeveloper ? (0, Chunk951288.jsx)(Chunk481060.njP.Item, {
      id: "DEVELOPER",
      className: Chunk476828.tabBarItem,
      children: "Developer"
    }) : null;
    return (0, Chunk951288.jsxs)(Chunk481060.njP, {
      selectedItem: module,
      type: "top",
      className: Chunk476828.__invalid_tabBar,
      onItemSelect: this.handleSelectSection,
      children: [(0, Chunk951288.jsx)(Chunk481060.njP.Item, {
        id: "GENERAL",
        className: Chunk476828.tabBarItem,
        children: Chunk388032.intl.string(Chunk388032.t["0FYxx8"])
      }), (0, Chunk951288.jsx)(Chunk481060.njP.Item, {
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
    return (0, Chunk951288.jsx)(Chunk481060.hzk, {
      className: Chunk476828.content,
      children: module
    }, exports)
  }
  renderGeneralSettings() {
    let {
      notificationPositionMode: e,
      shouldShowKeybindIndicators: t,
      showKeybindIndicators: n,
      shouldShowInviteNotification: l
    } = this.props, o = !Chunk624864.Z.isNotificationDisabled(Chunk486016.OverlayNotificationDisabledSetting.TEXT_CHAT), c = module !== Chunk981631._vf.DISABLED;
    return (0, Chunk951288.jsxs)(Chunk647438.Fragment, {
      children: [(0, Chunk951288.jsx)(Chunk481060.xJW, {
        title: Chunk388032.intl.string(Chunk388032.t.IQv8Eh),
        className: Chunk197571.marginBottom20,
        children: (0, Chunk951288.jsx)(Chunk212632.Z, {
          position: module,
          onChange: this.handleChangeNotificationPositionMode
        })
      }), (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: Chunk755721 && Chunk600164,
        onChange: this.handleToggleTextChatNotifications,
        disabled: !Chunk600164,
        hideBorder: true,
        children: Chunk388032.intl.string(Chunk388032.t.Fy5kPj)
      }), (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: Chunk442837,
        onChange: this.handleToggleInviteNotification,
        hideBorder: true,
        note: Chunk388032.intl.string(Chunk388032.t.W9DVVV),
        children: Chunk388032.intl.string(Chunk388032.t["f+c48/"])
      }), require && (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: exports,
        onChange: e => a.Z.setShowKeybindIndicators(e),
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
    return (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
      gap: 20,
      children: [(0, Chunk951288.jsx)(Chunk755721.Gu, {
        label: Chunk388032.intl.string(Chunk388032.t.dnvZSk),
        onChange: this.handleChangeAvatarSizeMode,
        options: [{
          value: Chunk981631.ipw.LARGE,
          name: Chunk388032.intl.string(Chunk388032.t.YcOxtr)
        }, {
          value: Chunk981631.ipw.SMALL,
          name: Chunk388032.intl.string(Chunk388032.t.BKIKq6)
        }],
        value: module,
        size: Chunk755721.l7.SMALL
      }), (0, Chunk951288.jsx)(Chunk755721.Gu, {
        label: Chunk388032.intl.string(Chunk388032.t.J0dpcH),
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
        size: Chunk755721.l7.SMALL
      }), (0, Chunk951288.jsx)(Chunk755721.Gu, {
        label: Chunk388032.intl.string(Chunk388032.t.swsWWF),
        onChange: this.handleChangeDisplayUserMode,
        options: [{
          value: Chunk981631.OYC.ALWAYS,
          name: Chunk388032.intl.string(Chunk388032.t.nBmDra)
        }, {
          value: Chunk981631.OYC.ONLY_WHILE_SPEAKING,
          name: Chunk388032.intl.string(Chunk388032.t["2OvIZW"])
        }],
        value: require,
        size: Chunk755721.l7.SMALL
      })]
    })
  }
  renderDeveloperSettings() {
    return (0, Chunk951288.jsx)("div", {
      className: Chunk197571.marginBottom20,
      children: (0, Chunk951288.jsx)(Chunk481060.q4e, {
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
        onChange: e => null != e && f.ZP.crash(e)
      })
    })
  }
  render() {
    return (0, Chunk951288.jsxs)(Chunk481060.Y0X, {
      "aria-label": Chunk388032.intl.string(Chunk388032.t["35G2Mj"]),
      transitionState: Chunk481060.Dvm.ENTERED,
      parentComponent: "OverlaySettings",
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
      a.Z.setNotificationDisabledSetting(m.OverlayNotificationDisabledSetting.TEXT_CHAT, !this.props.textChatDisabled), x()
    }), S(this, "handleToggleInviteNotification", () => {
      let e = this.props.shouldShowInviteNotification;
      a.Z.setNotificationDisabledSetting(m.OverlayNotificationDisabledSetting.GAME_ACTIVITY, !e)
    })
  }
}

function j(e) {
  let {
    onClose: t
  } = e, {
    avatarSizeMode: n,
    displayNameMode: r,
    displayUserMode: o,
    notificationPositionMode: s,
    textChatDisabled: a,
    shouldShowKeybindIndicators: c,
    shouldShowInviteNotification: d
  } = (0, l.cj)([p.default, O.Z], () => ({
    avatarSizeMode: p.default.getAvatarSizeMode(),
    displayNameMode: p.default.getDisplayNameMode(),
    displayUserMode: p.default.getDisplayUserMode(),
    notificationPositionMode: p.default.getNotificationPositionMode(),
    textChatDisabled: O.Z.isNotificationDisabled(m.OverlayNotificationDisabledSetting.TEXT_CHAT),
    shouldShowKeybindIndicators: p.default.showKeybindIndicators,
    shouldShowInviteNotification: !O.Z.isNotificationDisabled(m.OverlayNotificationDisabledSetting.GAME_ACTIVITY)
  })), u = (0, y.Z)({
    location: "Overlay Settings"
  });
  return (0, i.jsx)(Z, {
    onClose: t,
    avatarSizeMode: n,
    displayNameMode: r,
    displayUserMode: o,
    notificationPositionMode: s,
    textChatDisabled: a,
    shouldShowKeybindIndicators: c,
    showKeybindIndicators: u,
    shouldShowInviteNotification: d
  })
}