/** Chunk was on 48799 **/
n.d(t, {
  Z: () => N
}), n(47120);
var i = n(200651),
  r = n(192379),
  o = n(442837),
  s = n(481060),
  l = n(13245),
  a = n(600164),
  c = n(212632),
  d = n(906467),
  u = n(556296),
  h = n(237997),
  p = n(998502),
  f = n(13140),
  g = n(809357),
  m = n(981631),
  y = n(388032),
  _ = n(942176),
  v = n(455812);

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let b = () => [{
    value: m.ipw.LARGE,
    name: y.NW.string(y.t.YcOxtr)
  }, {
    value: m.ipw.SMALL,
    name: y.NW.string(y.t.BKIKq6)
  }],
  S = () => [{
    value: m.wC$.ALWAYS,
    name: y.NW.string(y.t.nBmDra)
  }, {
    value: m.wC$.ONLY_WHILE_SPEAKING,
    name: y.NW.string(y.t["2OvIZW"])
  }, {
    value: m.wC$.NEVER,
    name: y.NW.string(y.t.ekjlPD)
  }],
  x = () => [{
    value: m.OYC.ALWAYS,
    name: y.NW.string(y.t.nBmDra)
  }, {
    value: m.OYC.ONLY_WHILE_SPEAKING,
    name: y.NW.string(y.t["2OvIZW"])
  }];

function Z() {
  let e = h.Z.getNotificationPositionMode(),
    t = e !== m._vf.DISABLED,
    n = u.ZP.getOverlayKeybind(),
    i = u.ZP.getOverlayChatKeybind();
  l.Z.track(m.rMx.OVERLAY_SETTINGS_UPDATED, {
    enabled: !0,
    notifications_enabled: t,
    notifications_position: t ? e : null,
    text_notifications_mode: h.Z.getTextChatNotificationMode(),
    text_opacity_slider: h.Z.getTextWidgetOpacity(),
    hotkey: null != n ? (0, f.BB)(n.shortcut) : null,
    text_activation_hotkey: null != i ? (0, f.BB)(i.shortcut) : null
  })
}
class E extends r.PureComponent {
  componentDidMount() {
    l.Z.track(m.rMx.SETTINGS_PANE_VIEWED, {
      settings_type: "overlay",
      destination_pane: "OVERLAY SETTINGS",
      origin_pane: null
    })
  }
  handleChangeNotificationPositionMode(e, t) {
    l.Z.setNotificationPositionMode(t), Z()
  }
  handleChangeAvatarSizeMode(e) {
    let {
      value: t
    } = e;
    l.Z.setAvatarSizeMode(t)
  }
  handleChangeDisplayNameMode(e) {
    let {
      value: t
    } = e;
    l.Z.setDisplayNameMode(t)
  }
  handleChangeDisplayUserMode(e) {
    let {
      value: t
    } = e;
    l.Z.setDisplayUserMode(t)
  }
  renderHeader() {
    return (0, i.jsxs)(a.Z, {
      direction: a.Z.Direction.VERTICAL,
      grow: 0,
      shrink: 0,
      className: _.header,
      children: [(0, i.jsxs)(a.Z, {
        children: [(0, i.jsx)(s.vwX, {
          className: _.headerTitle,
          tag: "h1",
          children: y.NW.string(y.t["35G2Mj"])
        }), (0, i.jsx)(s.olH, {
          className: _.headerClose,
          onClick: this.props.onClose
        })]
      }), this.renderTabBar()]
    })
  }
  renderTabBar() {
    let {
      selectedSection: e
    } = this.state, t = d.Z.isDeveloper ? (0, i.jsx)(s.njP.Item, {
      id: "DEVELOPER",
      className: _.tabBarItem,
      children: "Developer"
    }) : null;
    return (0, i.jsxs)(s.njP, {
      selectedItem: e,
      type: "top",
      className: _.__invalid_tabBar,
      onItemSelect: this.handleSelectSection,
      children: [(0, i.jsx)(s.njP.Item, {
        id: "GENERAL",
        className: _.tabBarItem,
        children: y.NW.string(y.t["0FYxx8"])
      }), (0, i.jsx)(s.njP.Item, {
        id: "VOICE",
        className: _.tabBarItem,
        children: y.NW.string(y.t["3WeSiI"])
      }), t]
    })
  }
  renderBody() {
    let e;
    let {
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
    return (0, i.jsx)(s.hzk, {
      className: _.content,
      children: e
    }, t)
  }
  renderGeneralSettings() {
    let {
      textChatNotificationMode: e,
      notificationPositionMode: t,
      shouldShowKeybindIndicators: n,
      showKeybindIndicators: o,
      shouldShowInviteNotification: a
    } = this.props, d = t !== m._vf.DISABLED;
    return (0, i.jsxs)(r.Fragment, {
      children: [(0, i.jsx)(s.xJW, {
        title: y.NW.string(y.t.IQv8Eh),
        className: v.marginBottom20,
        children: (0, i.jsx)(c.Z, {
          position: t,
          onChange: this.handleChangeNotificationPositionMode
        })
      }), (0, i.jsx)(s.j7V, {
        value: d && e === m.Ypu.ENABLED,
        onChange: this.handleToggleTextChatNotifications,
        disabled: !d,
        hideBorder: !0,
        children: y.NW.string(y.t.Fy5kPj)
      }), (0, i.jsx)(s.j7V, {
        value: a,
        onChange: this.handleToggleInviteNotification,
        hideBorder: !0,
        note: y.NW.string(y.t.W9DVVV),
        children: y.NW.string(y.t["f+c48/"])
      }), o && (0, i.jsx)(s.j7V, {
        value: n,
        onChange: e => l.Z.setShowKeybindIndicators(e),
        hideBorder: !0,
        children: y.NW.string(y.t.XZTl9v)
      })]
    })
  }
  renderVoiceSettings() {
    let {
      avatarSizeMode: e,
      displayNameMode: t,
      displayUserMode: n
    } = this.props;
    return (0, i.jsxs)(r.Fragment, {
      children: [(0, i.jsx)(s.xJW, {
        title: y.NW.string(y.t.dnvZSk),
        className: v.marginBottom20,
        children: (0, i.jsx)(s.FXm, {
          onChange: this.handleChangeAvatarSizeMode,
          options: b(),
          value: e,
          size: s.FXm.Sizes.SMALL
        })
      }), (0, i.jsx)(s.xJW, {
        title: y.NW.string(y.t.J0dpcH),
        className: v.marginBottom20,
        children: (0, i.jsx)(s.FXm, {
          onChange: this.handleChangeDisplayNameMode,
          options: S(),
          value: t,
          size: s.FXm.Sizes.SMALL
        })
      }), (0, i.jsx)(s.xJW, {
        title: y.NW.string(y.t.swsWWF),
        className: v.marginBottom20,
        children: (0, i.jsx)(s.FXm, {
          onChange: this.handleChangeDisplayUserMode,
          options: x(),
          value: n,
          size: s.FXm.Sizes.SMALL
        })
      })]
    })
  }
  renderDeveloperSettings() {
    return (0, i.jsx)(s.xJW, {
      title: "Crashes",
      className: v.marginBottom20,
      children: (0, i.jsx)(s.q4e, {
        value: void 0,
        options: [{
          value: void 0,
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
    return (0, i.jsxs)(s.Y0X, {
      "aria-label": y.NW.string(y.t["35G2Mj"]),
      transitionState: s.Dvm.ENTERED,
      children: [this.renderHeader(), this.renderBody()]
    })
  }
  constructor(...e) {
    super(...e), O(this, "state", {
      selectedSection: "GENERAL"
    }), O(this, "handleSelectSection", e => {
      this.setState({
        selectedSection: e
      })
    }), O(this, "handleToggleTextChatNotifications", () => {
      let {
        ENABLED: e,
        DISABLED: t
      } = m.Ypu, n = this.props.textChatNotificationMode === e ? t : e;
      l.Z.setTextChatNotificationMode(n), Z()
    }), O(this, "handleToggleInviteNotification", () => {
      let e = this.props.shouldShowInviteNotification;
      l.Z.setShowGameInviteNotification(!e)
    })
  }
}

function N(e) {
  let {
    onClose: t
  } = e, {
    avatarSizeMode: n,
    displayNameMode: r,
    displayUserMode: s,
    notificationPositionMode: l,
    textChatNotificationMode: a,
    shouldShowKeybindIndicators: c,
    shouldShowInviteNotification: d
  } = (0, o.cj)([h.Z], () => ({
    avatarSizeMode: h.Z.getAvatarSizeMode(),
    displayNameMode: h.Z.getDisplayNameMode(),
    displayUserMode: h.Z.getDisplayUserMode(),
    notificationPositionMode: h.Z.getNotificationPositionMode(),
    textChatNotificationMode: h.Z.getTextChatNotificationMode(),
    shouldShowKeybindIndicators: h.Z.showKeybindIndicators,
    shouldShowInviteNotification: h.Z.showInviteNotification
  })), u = (0, g.Z)({
    location: "Overlay Settings"
  });
  return (0, i.jsx)(E, {
    onClose: t,
    avatarSizeMode: n,
    displayNameMode: r,
    displayUserMode: s,
    notificationPositionMode: l,
    textChatNotificationMode: a,
    shouldShowKeybindIndicators: c,
    showKeybindIndicators: u,
    shouldShowInviteNotification: d
  })
}