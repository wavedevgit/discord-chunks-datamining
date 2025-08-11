/** Chunk was on 5863 **/
/** chunk id: 751212, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => Y
}), require("./388685.js"), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk392711 = require("./392711.js"),
  r = require.n(Chunk392711),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk374470 = require("./374470.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk87051 = require("./87051.js"),
  Chunk798140 = require("./798140.js"),
  Chunk740504 = require("./740504.js"),
  Chunk933557 = require("./933557.js"),
  Chunk471445 = require("./471445.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk423589 = require("./423589.js"),
  Chunk74888 = require("./74888.jsx"),
  Chunk444899 = require("./444899.jsx"),
  Chunk11352 = require("./11352.js"),
  Chunk610617 = require("./610617.jsx"),
  Chunk777861 = require("./777861.jsx"),
  Chunk131704 = require("./131704.js"),
  Chunk592125 = require("./592125.js"),
  Chunk324067 = require("./324067.js"),
  Chunk650774 = require("./650774.js"),
  Chunk430824 = require("./430824.js"),
  Chunk699516 = require("./699516.js"),
  Chunk9156 = require("./9156.js"),
  Chunk594174 = require("./594174.js"),
  Chunk823379 = require("./823379.js"),
  Chunk63063 = require("./63063.js"),
  Chunk621600 = require("./621600.js"),
  Chunk981631 = require("./981631.js"),
  Chunk969943 = require("./969943.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk529651 = require("./529651.js");

function k(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function X(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      k(e, t, n[t])
    })
  }
  return e
}

function V(e, t) {
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

function W(e, t) {
  if (null == e) return {};
  var n, i, s = function(e, t) {
    if (null == e) return {};
    var n, i, s = {},
      l = Object.keys(e);
    for (i = 0; i < l.length; i++) n = l[i], t.indexOf(n) >= 0 || (s[n] = e[n]);
    return s
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (i = 0; i < l.length; i++) n = l[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n])
  }
  return s
}
class B extends Chunk73800.PureComponent {
  static getDerivedStateFromProps(e, t) {
    let {
      overrides: n,
      channelOverridesProp: i
    } = t;
    return e.channelOverrides !== i ? (n = new Set(n), (0, S.OD)(e.channelOverrides).forEach(e => n.add(e)), {
      overrides: n,
      channelOverridesProp: e.channelOverrides
    }) : null
  }
  componentDidUpdate(e, t) {
    let {
      lastSelected: n
    } = this.state, i = null != n ? this._channelRefs[n] : null;
    if (null != this._scroller && null != i && n !== t.lastSelected) {
      let e = i.contentDomRef.current;
      if (null != this._scroller && (0, d.k)(e, HTMLElement)) {
        var s;
        null == (s = this._scroller) || s.scrollIntoViewNode({
          node: e,
          animate: true,
          padding: 20,
          callback: () => this.setState({
            lastSelected: null
          })
        }), i.highlight()
      }
    }
    if (this.props.channelOverrides !== e.channelOverrides) {
      let {
        overrides: e
      } = this.state;
      e = new Set(e), (0, S.OD)(this.props.channelOverrides).forEach(t => e.add(t)), this.setState({
        overrides: e
      })
    }
  }
  handleCheckboxChange(e, t, n) {
    g.Z.updateGuildNotificationSettings(this.props.guildId, {
      [e]: t
    }, n)
  }
  handleRadioChange(e, t, n) {
    let {
      value: i
    } = t;
    g.Z.updateGuildNotificationSettings(this.props.guildId, {
      [e]: i
    }, n)
  }
  renderHeader() {
    let {
      guild: e
    } = this.props;
    return null == module ? null : (0, Chunk255367.jsxs)(Chunk481060.xBx, {
      className: Chunk529651.modalHeader,
      children: [(0, Chunk255367.jsxs)(Chunk600164.Z.Child, {
        children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
          variant: "heading-lg/semibold",
          children: Chunk388032.intl.string(Chunk388032.t.h850Sk)
        }), (0, Chunk255367.jsx)(Chunk481060.Text, {
          variant: "text-md/normal",
          className: Chunk529651.guildName,
          children: module.name
        })]
      }), (0, Chunk255367.jsx)(Chunk600164.Z.Child, {
        grow: 0,
        children: (0, Chunk255367.jsx)(Chunk481060.olH, {
          onClick: this.props.onClose
        })
      })]
    })
  }
  renderFooter() {
    return (0, Chunk255367.jsx)(Chunk481060.mzw, {
      children: (0, Chunk255367.jsx)(Chunk481060.zxk, {
        variant: "primary",
        text: Chunk388032.intl.string(Chunk388032.t.i4jeWV),
        onClick: this.props.onClose
      })
    })
  }
  renderMute() {
    var e;
    let {
      muted: t,
      muteConfig: n,
      guild: s
    } = this.props, l = null != (e = null == require ? true : require.selected_time_window) ? module : Chunk969943.Oe.ALWAYS;
    return null == Chunk73800 ? null : (0, Chunk255367.jsxs)(Chunk481060.xJW, {
      className: Chunk529651.largeSpacing,
      children: [(0, Chunk255367.jsx)(Chunk481060.j7V, {
        hideBorder: true,
        value: exports,
        onChange: e => this.handleCheckboxChange("muted", e, R.UE.muted(e)),
        note: Chunk388032.intl.string(Chunk388032.t["8wbTQ0"]),
        children: Chunk388032.intl.format(Chunk388032.t["J+7D9P"], {
          name: Chunk73800.name
        })
      }), exports ? (0, Chunk255367.jsxs)(Chunk600164.Z, {
        className: Chunk529651.spacing,
        align: Chunk600164.Z.Align.CENTER,
        children: [(0, Chunk255367.jsxs)(Chunk600164.Z, {
          direction: Chunk600164.Z.Direction.VERTICAL,
          className: Chunk529651.__invalid_muteUntilTextWrapper,
          children: [(0, Chunk255367.jsx)(Chunk481060.vwX, {
            tag: "h3",
            className: Chunk529651.muteUntilTitle,
            children: Chunk388032.intl.string(Chunk388032.t.Ztu2Ym)
          }), (0, Chunk255367.jsx)(Chunk777861.Z, {
            className: Chunk529651.muteUntilText,
            muteConfig: require
          })]
        }), (0, Chunk255367.jsx)(Chunk481060.q4e, {
          className: Chunk529651.muteTimeSelector,
          options: (0, Chunk423589.W9)(),
          value: Chunk392711,
          onChange: this.handleSelectMuteTime
        })]
      }) : null, (0, Chunk255367.jsx)(Chunk481060.$i$, {})]
    })
  }
  renderServerSettings() {
    let {
      messageNotifications: e,
      muted: t,
      memberCount: n
    } = this.props;
    return (0, Chunk255367.jsxs)("div", {
      className: Chunk529651.spacing,
      children: [(0, Chunk255367.jsx)(Chunk481060.xJW, {
        title: Chunk388032.intl.string(Chunk388032.t.lprV7e),
        className: Chunk529651.largeSpacing,
        children: (0, Chunk255367.jsx)(Chunk481060.FXm, {
          disabled: exports,
          value: module,
          onChange: e => this.handleRadioChange("message_notifications", e, R.UE.notifications(e.value)),
          options: [{
            name: Chunk388032.intl.string(Chunk388032.t["n/bTaW"]),
            value: Chunk981631.bL.ALL_MESSAGES,
            desc: null != require && require >= Chunk981631.qWG ? Chunk388032.intl.string(Chunk388032.t.Dh5p5u) : null
          }, {
            name: Chunk388032.intl.format(Chunk388032.t.L2hmY2, {}),
            value: Chunk981631.bL.ONLY_MENTIONS
          }, {
            name: Chunk388032.intl.string(Chunk388032.t.CtVGyc),
            value: Chunk981631.bL.NO_MESSAGES
          }]
        })
      }), (0, Chunk255367.jsx)(Chunk481060.$i$, {})]
    })
  }
  renderNotificationOptions() {
    let {
      suppressEveryone: e,
      suppressRoles: t,
      mobilePush: n,
      muted: s,
      muteEvents: l,
      notifyHighlights: r,
      guildId: a
    } = this.props;
    return (0, Chunk255367.jsxs)(Chunk481060.xJW, {
      className: Chunk529651.largeSpacing,
      children: [(0, Chunk255367.jsx)(Chunk481060.j7V, {
        onChange: e => this.handleCheckboxChange("suppress_everyone", e, R.UE.suppressEveryone(e)),
        value: module,
        children: Chunk388032.intl.format(Chunk388032.t.OWiWAg, {})
      }), (0, Chunk255367.jsx)(Chunk481060.j7V, {
        onChange: e => this.handleCheckboxChange("suppress_roles", e, R.UE.suppressRoles(e)),
        value: exports,
        children: Chunk388032.intl.string(Chunk388032.t["O/QdoK"])
      }), (0, Chunk255367.jsx)(Chunk481060.j7V, {
        onChange: e => {
          g.Z.updateGuildNotificationSettings(a, {
            notify_highlights: e ? w.gLR.DISABLED : w.gLR.ENABLED
          }, R.UE.highlights(!e))
        },
        value: Chunk73800 || r === Chunk981631.gLR.DISABLED,
        disabled: Chunk73800,
        note: (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
          children: [(0, Chunk255367.jsx)(Chunk481060.Text, {
            variant: "text-sm/normal",
            children: Chunk388032.intl.string(Chunk388032.t["Vw/Xn5"])
          }), (0, Chunk255367.jsx)("div", {
            className: Chunk529651.highlightsLink,
            children: (0, Chunk255367.jsx)(Chunk481060.eee, {
              href: Chunk63063.Z.getArticleURL(Chunk981631.BhN.HIGHLIGHTS),
              children: Chunk388032.intl.string(Chunk388032.t.PRBn9P)
            })
          })]
        }),
        children: (0, Chunk255367.jsx)(Chunk255367.Fragment, {
          children: Chunk388032.intl.string(Chunk388032.t.gPuteH)
        })
      }), (0, Chunk255367.jsx)(Chunk481060.j7V, {
        value: Chunk392711,
        onChange: e => this.handleCheckboxChange("mute_scheduled_events", e, R.UE.mutedEvents(e)),
        children: Chunk388032.intl.string(Chunk388032.t.ONG3Y2)
      }), (0, Chunk255367.jsx)(Chunk481060.j7V, {
        value: !Chunk73800 && require,
        disabled: Chunk73800,
        onChange: e => this.handleCheckboxChange("mobile_push", e, R.UE.mobilePush(e)),
        children: Chunk388032.intl.string(Chunk388032.t["h1DL6+"])
      })]
    })
  }
  renderCustomNotificationSoundOptions() {
    let {
      shouldShowCustomNotificationSounds: e,
      guildId: t,
      onClose: n
    } = this.props;
    if (module) return (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
      children: [(0, Chunk255367.jsx)(Chunk610617.Z, {
        guildId: exports,
        onClose: require
      }), (0, Chunk255367.jsx)(Chunk481060.$i$, {
        className: Chunk529651.customNotificationSoundsDivider
      })]
    })
  }
  renderOverrideSelect() {
    let {
      channels: e,
      categories: t
    } = this.props, n = r()(module).filter(e => {
      let {
        channel: n
      } = e;
      return n.type !== w.d4z.GUILD_CATEGORY || null != t[n.id] && t[n.id].length > 0
    }).map(e => {
      let {
        channel: t
      } = e;
      return {
        value: t.id,
        label: (0, p.F6)(t, I.default, y.Z)
      }
    }).value();
    return (0, Chunk255367.jsxs)(Chunk481060.xJW, {
      title: Chunk388032.intl.string(Chunk388032.t.O4TIvr),
      className: Chunk529651.largeSpacing,
      children: [(0, Chunk255367.jsx)(Chunk481060.R94, {
        type: Chunk481060.R94.Types.DESCRIPTION,
        className: Chunk529651.smallSpacing,
        children: Chunk388032.intl.string(Chunk388032.t["2Y9ZfH"])
      }), (0, Chunk255367.jsx)(Chunk481060.VcW, {
        value: Chunk981631.lds,
        placeholder: Chunk388032.intl.string(Chunk388032.t["Z+oF8v"]),
        renderOptionLabel: this.renderOptionLabel,
        options: require,
        onChange: this.handleSelectChange
      })]
    })
  }
  renderChannelNotifications() {
    let {
      channelOverrides: e,
      muted: t,
      channels: n,
      messageNotifications: s,
      categories: l,
      checkboxColor: r
    } = this.props, {
      overrides: a
    } = this.state, o = require.map(n => {
      let {
        channel: o
      } = n;
      if (!a.has(o.id) || null != l[o.id] && 0 === l[o.id].length) return null;
      let d = e[o.id];
      return (0, i.jsx)(f.f, {
        ref: e => {
          this._channelRefs[o.id] = e
        },
        channel: o,
        guildMuted: t,
        muted: null != d && (0, m.m$)(d),
        messageNotifications: null != d ? d.message_notifications : null,
        guildMessageNotifications: s,
        onDelete: this.handleDeleteOverride,
        checkboxColor: r
      }, o.id)
    }).filter(Chunk823379.lm);
    return (0 === Chunk913527.size || 0 === o.length) && o.push((0, Chunk255367.jsx)("div", {
      className: Chunk529651.overridePlaceholder,
      children: (0, Chunk255367.jsx)(Chunk481060.Text, {
        className: Chunk529651.overrideHeader,
        variant: "text-sm/semibold",
        children: Chunk388032.intl.string(Chunk388032.t["2Y9ZfH"])
      })
    }, "placeholder")), (0, Chunk255367.jsxs)("div", {
      className: Chunk529651.overrideList,
      children: [(0, Chunk255367.jsxs)(Chunk600164.Z, {
        children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
          variant: "eyebrow",
          className: Chunk529651.headerName,
          children: Chunk388032.intl.string(Chunk388032.t.uShwWl)
        }), (0, Chunk255367.jsx)(Chunk481060.X6q, {
          variant: "eyebrow",
          className: Chunk529651.headerOption,
          children: Chunk388032.intl.string(Chunk388032.t.e29Z19)
        }), (0, Chunk255367.jsx)(Chunk481060.X6q, {
          variant: "eyebrow",
          className: Chunk529651.headerOption,
          children: Chunk388032.intl.string(Chunk388032.t.DD6gNT)
        }), (0, Chunk255367.jsx)(Chunk481060.X6q, {
          variant: "eyebrow",
          className: Chunk529651.headerOption,
          children: Chunk388032.intl.string(Chunk388032.t.CtVGyc)
        }), (0, Chunk255367.jsx)(Chunk481060.X6q, {
          variant: "eyebrow",
          className: Chunk529651.headerOption,
          children: (0, Chunk255367.jsx)(Chunk481060.ua7, {
            text: Chunk388032.intl.string(Chunk388032.t["8wbTQ0"]),
            position: "bottom",
            children: e => (0, i.jsx)("span", V(X({}, e), {
              children: D.intl.string(D.t.sWmtIy)
            }))
          })
        })]
      }), o]
    })
  }
  render() {
    return (0, Chunk255367.jsxs)(Chunk481060.Y0X, {
      "aria-label": Chunk388032.intl.string(Chunk388032.t.h850Sk),
      size: Chunk481060.CgR.MEDIUM,
      transitionState: this.props.transitionState,
      parentComponent: "NotificationSettings",
      children: [this.renderHeader(), (0, Chunk255367.jsxs)(Chunk481060.hzk, {
        scrollerRef: this.setScrollerRef,
        children: [this.renderMute(), this.renderServerSettings(), this.renderCustomNotificationSoundOptions(), this.renderNotificationOptions(), this.renderOverrideSelect(), this.renderChannelNotifications()]
      }), this.renderFooter()]
    })
  }
  constructor(...e) {
    super(...e), k(this, "_scroller", null), k(this, "_channelRefs", {}), k(this, "state", {
      overrides: new Set((0, S.OD)(this.props.channelOverrides)),
      channelOverridesProp: this.props.channelOverrides,
      lastSelected: null
    }), k(this, "setScrollerRef", e => {
      this._scroller = e
    }), k(this, "handleSelectChange", e => {
      if (null == e) return;
      let {
        overrides: t
      } = this.state;
      (t = new Set(t)).add(e), this.setState({
        overrides: t,
        lastSelected: e
      })
    }), k(this, "handleSelectMuteTime", e => {
      let t = e > 0 ? o()().add(e, "second").toISOString() : null;
      g.Z.updateGuildNotificationSettings(this.props.guildId, {
        muted: true,
        mute_config: {
          selected_time_window: e,
          end_time: t
        }
      }, R.ZB.Muted)
    }), k(this, "handleDeleteOverride", e => {
      let {
        overrides: t
      } = this.state;
      (t = new Set(t)).delete(e), this.setState({
        overrides: t
      })
    }), k(this, "renderOptionLabel", e => {
      let t = Z.Z.getChannel(e.value);
      if (null == t) return e.label;
      let n = Z.Z.getChannel(t.parent_id),
        s = null != n ? n.name : null;
      return (0, i.jsx)(h.ZZ$, {
        icon: (0, v.KS)(t),
        title: e.label,
        subtitle: s
      })
    })
  }
}

function J(e) {
  var {
    guildId: t
  } = e, n = W(e, ["guildId"]);
  let s = (0, c.cj)([_.Z, T.Z, L.Z, M.ZP], () => {
      let e = _.Z.getCategories(t);
      return {
        guildId: t,
        categories: e,
        guild: T.Z.getGuild(t),
        memberCount: L.Z.getMemberCount(t),
        suppressEveryone: M.ZP.isSuppressEveryoneEnabled(t),
        suppressRoles: M.ZP.isSuppressRolesEnabled(t),
        muteEvents: M.ZP.isMuteScheduledEventsEnabled(t),
        mobilePush: M.ZP.isMobilePushEnabled(t),
        muted: M.ZP.isMuted(t),
        muteConfig: M.ZP.getMuteConfig(t),
        messageNotifications: M.ZP.getMessageNotifications(t),
        channelOverrides: M.ZP.getChannelOverrides(t),
        notifyHighlights: M.ZP.getNotifyHighlights(t)
      }
    }),
    l = (0, x.Z)(s.categories._categories, s.categories, e => {
      let {
        channel: {
          type: t
        }
      } = e;
      return (0, E.r8)(t) || t === w.d4z.GUILD_CATEGORY
    }),
    r = b.Y.useExperiment({
      location: "connected_notification_settings"
    }, {
      autoTrackExposure: true
    }).enabled,
    a = (0, h.dQu)(u.Z.unsafe_rawColors.GREEN_360).hex();
  return (0, i.jsx)(B, V(X(V(X({}, s), {
    channels: l
  }), n), {
    shouldShowCustomNotificationSounds: r,
    checkboxColor: a
  }))
}

function Y(e) {
  var {
    scrollToChannels: t
  } = e, n = W(e, ["scrollToChannels"]);
  return (0, S.Mn)("NotificationSettingsModal") ? (0, i.jsx)(N.Z, V(X({}, n), {
    scrollToChannels: t
  })) : (0, i.jsx)(J, X({}, n))
}