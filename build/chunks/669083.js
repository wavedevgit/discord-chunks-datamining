/** Chunk was on 76977 **/
"use strict";
n.d(t, {
  Z: () => N
}), n(47120);
var i = n(200651),
  r = n(192379),
  s = n(442837),
  o = n(481060),
  a = n(13245),
  l = n(600164),
  c = n(212632),
  d = n(906467),
  u = n(556296),
  h = n(237997),
  p = n(998502),
  f = n(13140),
  g = n(809357),
  m = n(981631),
  y = n(388032),
  _ = n(748509),
  v = n(802138);

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
  x = () => [{
    value: m.wC$.ALWAYS,
    name: y.NW.string(y.t.nBmDra)
  }, {
    value: m.wC$.ONLY_WHILE_SPEAKING,
    name: y.NW.string(y.t["2OvIZW"])
  }, {
    value: m.wC$.NEVER,
    name: y.NW.string(y.t.ekjlPD)
  }],
  S = () => [{
    value: m.OYC.ALWAYS,
    name: y.NW.string(y.t.nBmDra)
  }, {
    value: m.OYC.ONLY_WHILE_SPEAKING,
    name: y.NW.string(y.t["2OvIZW"])
  }];

function E() {
  let e = h.default.getNotificationPositionMode(),
    t = e !== m._vf.DISABLED,
    n = u.ZP.getOverlayKeybind(),
    i = u.ZP.getOverlayChatKeybind();
  a.Z.track(m.rMx.OVERLAY_SETTINGS_UPDATED, {
    enabled: !0,
    notifications_enabled: t,
    notifications_position: t ? e : null,
    text_notifications_mode: h.default.getTextChatNotificationMode(),
    text_opacity_slider: h.default.getTextWidgetOpacity(),
    hotkey: null != n ? (0, f.BB)(n.shortcut) : null,
    text_activation_hotkey: null != i ? (0, f.BB)(i.shortcut) : null
  })
}
class j extends r.PureComponent {
  componentDidMount() {
    a.Z.track(m.rMx.SETTINGS_PANE_VIEWED, {
      settings_type: "overlay",
      destination_pane: "OVERLAY SETTINGS",
      origin_pane: null
    })
  }
  handleChangeNotificationPositionMode(e, t) {
    a.Z.setNotificationPositionMode(t), E()
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
      className: _.header,
      children: [(0, i.jsxs)(l.Z, {
        children: [(0, i.jsx)(o.vwX, {
          className: _.headerTitle,
          tag: "h1",
          children: y.NW.string(y.t["35G2Mj"])
        }), (0, i.jsx)(o.olH, {
          className: _.headerClose,
          onClick: this.props.onClose
        })]
      }), this.renderTabBar()]
    })
  }
  renderTabBar() {
    let {
      selectedSection: e
    } = this.state, t = d.Z.isDeveloper ? (0, i.jsx)(o.njP.Item, {
      id: "DEVELOPER",
      className: _.tabBarItem,
      children: "Developer"
    }) : null;
    return (0, i.jsxs)(o.njP, {
      selectedItem: e,
      type: "top",
      className: _.__invalid_tabBar,
      onItemSelect: this.handleSelectSection,
      children: [(0, i.jsx)(o.njP.Item, {
        id: "GENERAL",
        className: _.tabBarItem,
        children: y.NW.string(y.t["0FYxx8"])
      }), (0, i.jsx)(o.njP.Item, {
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
    return (0, i.jsx)(o.hzk, {
      className: _.content,
      children: e
    }, t)
  }
  renderGeneralSettings() {
    let {
      textChatNotificationMode: e,
      notificationPositionMode: t,
      shouldShowKeybindIndicators: n,
      showKeybindIndicators: s,
      shouldShowInviteNotification: l
    } = this.props, d = t !== m._vf.DISABLED;
    return (0, i.jsxs)(r.Fragment, {
      children: [(0, i.jsx)(o.xJW, {
        title: y.NW.string(y.t.IQv8Eh),
        className: v.marginBottom20,
        children: (0, i.jsx)(c.Z, {
          position: t,
          onChange: this.handleChangeNotificationPositionMode
        })
      }), (0, i.jsx)(o.j7V, {
        value: d && e === m.Ypu.ENABLED,
        onChange: this.handleToggleTextChatNotifications,
        disabled: !d,
        hideBorder: !0,
        children: y.NW.string(y.t.Fy5kPj)
      }), (0, i.jsx)(o.j7V, {
        value: l,
        onChange: this.handleToggleInviteNotification,
        hideBorder: !0,
        note: y.NW.string(y.t.W9DVVV),
        children: y.NW.string(y.t["f+c48/"])
      }), s && (0, i.jsx)(o.j7V, {
        value: n,
        onChange: e => a.Z.setShowKeybindIndicators(e),
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
      children: [(0, i.jsx)(o.xJW, {
        title: y.NW.string(y.t.dnvZSk),
        className: v.marginBottom20,
        children: (0, i.jsx)(o.FXm, {
          onChange: this.handleChangeAvatarSizeMode,
          options: b(),
          value: e,
          size: o.FXm.Sizes.SMALL
        })
      }), (0, i.jsx)(o.xJW, {
        title: y.NW.string(y.t.J0dpcH),
        className: v.marginBottom20,
        children: (0, i.jsx)(o.FXm, {
          onChange: this.handleChangeDisplayNameMode,
          options: x(),
          value: t,
          size: o.FXm.Sizes.SMALL
        })
      }), (0, i.jsx)(o.xJW, {
        title: y.NW.string(y.t.swsWWF),
        className: v.marginBottom20,
        children: (0, i.jsx)(o.FXm, {
          onChange: this.handleChangeDisplayUserMode,
          options: S(),
          value: n,
          size: o.FXm.Sizes.SMALL
        })
      })]
    })
  }
  renderDeveloperSettings() {
    return (0, i.jsx)(o.xJW, {
      title: "Crashes",
      className: v.marginBottom20,
      children: (0, i.jsx)(o.q4e, {
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
    return (0, i.jsxs)(o.Y0X, {
      "aria-label": y.NW.string(y.t["35G2Mj"]),
      transitionState: o.Dvm.ENTERED,
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
      a.Z.setTextChatNotificationMode(n), E()
    }), O(this, "handleToggleInviteNotification", () => {
      let e = this.props.shouldShowInviteNotification;
      a.Z.setShowGameInviteNotification(!e)
    })
  }
}

function N(e) {
  let {
    onClose: t
  } = e, {
    avatarSizeMode: n,
    displayNameMode: r,
    displayUserMode: o,
    notificationPositionMode: a,
    textChatNotificationMode: l,
    shouldShowKeybindIndicators: c,
    shouldShowInviteNotification: d
  } = (0, s.cj)([h.default], () => ({
    avatarSizeMode: h.default.getAvatarSizeMode(),
    displayNameMode: h.default.getDisplayNameMode(),
    displayUserMode: h.default.getDisplayUserMode(),
    notificationPositionMode: h.default.getNotificationPositionMode(),
    textChatNotificationMode: h.default.getTextChatNotificationMode(),
    shouldShowKeybindIndicators: h.default.showKeybindIndicators,
    shouldShowInviteNotification: h.default.showInviteNotification
  })), u = (0, g.Z)({
    location: "Overlay Settings"
  });
  return (0, i.jsx)(j, {
    onClose: t,
    avatarSizeMode: n,
    displayNameMode: r,
    displayUserMode: o,
    notificationPositionMode: a,
    textChatNotificationMode: l,
    shouldShowKeybindIndicators: c,
    showKeybindIndicators: u,
    shouldShowInviteNotification: d
  })
}