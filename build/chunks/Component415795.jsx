/** Chunk was on web.js **/
/** chunk id: 415795, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $W: () => A,
  Mx: () => P,
  PZ: () => C,
  h4: () => R,
  ic: () => T,
  n5: () => N,
  rU: () => w,
  s8: () => D
}), require("./388685.js"), require("./35282.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk815372 = require("./815372.js"),
  Chunk43267 = require("./43267.js"),
  Chunk933557 = require("./933557.js"),
  Chunk471445 = require("./471445.js"),
  Chunk16206 = require("./16206.js"),
  Chunk790145 = require("./790145.jsx"),
  Chunk925329 = require("./925329.jsx"),
  Chunk565138 = require("./565138.jsx"),
  Chunk754688 = require("./754688.js"),
  Chunk237583 = require("./237583.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk51144 = require("./51144.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk297762 = require("./297762.js");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class I extends Chunk473749.PureComponent {
  componentDidMount() {
    let {
      focused: e,
      onFocus: t
    } = this.props, {
      node: n
    } = this;
    module && null != require && exports(require)
  }
  componentDidUpdate(e) {
    let {
      focused: t,
      onFocus: n
    } = this.props, {
      node: r
    } = this;
    null != r && t && !e.focused && n(r)
  }
  render() {
    let {
      focused: e,
      children: t,
      score: n,
      onContextMenu: r,
      id: a,
      "aria-label": s
    } = this.props;
    return (0, Chunk54381.jsxs)(Chunk481060.P3F, {
      role: "option",
      id: Chunk473749,
      "aria-label": Chunk815372,
      "aria-selected": module,
      focusProps: {
        enabled: false
      },
      tabIndex: false,
      innerRef: this.setRef,
      className: Chunk297762.result,
      onClick: this.handleClick,
      onMouseEnter: this.handleMouseEnter,
      onContextMenu: r,
      children: [exports, null != require ? (0, Chunk54381.jsx)("div", {
        className: Chunk297762.score,
        children: 0 | require
      }) : null]
    })
  }
  constructor(...e) {
    super(...e), S(this, "node", true), S(this, "handleClick", e => {
      e.preventDefault();
      let {
        onClick: t
      } = this.props, {
        node: n
      } = this;
      null != n && t(e, n)
    }), S(this, "handleMouseEnter", e => {
      let {
        onMouseEnter: t
      } = this.props, {
        node: n
      } = this;
      null != n && t(e, n)
    }), S(this, "setRef", e => {
      this.node = e
    })
  }
}
class T extends Chunk473749.Component {
  renderIcon() {
    let {
      guild: e
    } = this.props;
    return (0, Chunk54381.jsx)("div", {
      className: Chunk297762.guildIconContainer,
      children: (0, Chunk54381.jsx)(Chunk565138.Z, {
        tabIndex: false,
        guild: module,
        size: Chunk565138.Z.Sizes.MINI,
        className: Chunk297762.guildIcon
      })
    })
  }
  renderName() {
    let {
      guild: e
    } = this.props;
    return (0, Chunk54381.jsx)("div", {
      className: Chunk297762.name,
      children: (0, Chunk54381.jsx)("span", {
        className: Chunk297762.match,
        children: module.name
      })
    })
  }
  renderContent() {
    let {
      unread: e,
      children: t
    } = this.props;
    return (0, Chunk54381.jsxs)("div", {
      className: module ? Chunk297762.contentUnread : Chunk297762.contentDefault,
      children: [this.renderIcon(), this.renderName(), (0, Chunk54381.jsx)("div", {
        className: Chunk297762.misc,
        children: exports
      })]
    })
  }
  getAccessibilityLabel() {
    let {
      guild: e
    } = this.props;
    return Chunk388032.intl.formatToPlainString(Chunk388032.t.WVq3Lr, {
      name: module.name
    })
  }
  render() {
    let {
      onMouseEnter: e,
      onClick: t,
      onFocus: n,
      onContextMenu: r,
      focused: a,
      score: o,
      id: s
    } = this.props;
    return (0, Chunk54381.jsx)(I, {
      id: Chunk815372,
      "aria-label": this.getAccessibilityLabel(),
      onMouseEnter: module,
      onClick: exports,
      onFocus: require,
      onContextMenu: r,
      focused: Chunk473749,
      score: Chunk481060,
      children: this.renderContent()
    })
  }
}
class A extends(r = Chunk473749.Component) {
  renderIcon() {
    var e;
    let {
      channel: t
    } = this.props, n = (0, Chunk471445.KS)(exports);
    if (null == require) return null;
    let r = null != (e = (0, Chunk16206.Z)(exports)) ? module : "";
    return (0, Chunk54381.jsx)("div", {
      className: Chunk297762.iconContainer,
      role: "img",
      "aria-label": r,
      children: (0, Chunk54381.jsx)(require, {
        className: Chunk297762.icon,
        size: "xs",
        color: "currentColor"
      })
    })
  }
  renderName() {
    let e, t, {
      mentions: n,
      category: r,
      channel: a,
      isMentionLowImportance: o
    } = this.props;
    return null != require && require > 0 && (e = (0, Chunk54381.jsx)(Chunk790145.Z, {
      className: Chunk297762.badge,
      value: require,
      lowImportance: Chunk481060
    })), null != r && (t = (0, Chunk54381.jsx)("span", {
      className: Chunk297762.note,
      children: (0, Chunk933557.F6)(r, Chunk594174.default, Chunk699516.Z)
    })), (0, Chunk54381.jsxs)("div", {
      className: Chunk297762.name,
      children: [(0, Chunk54381.jsx)("span", {
        className: Chunk297762.match,
        children: (0, Chunk933557.F6)(Chunk473749, Chunk594174.default, Chunk699516.Z)
      }), module, this.renderVoiceStates(), exports]
    })
  }
  renderVoiceStates() {
    let {
      voiceStates: e,
      channel: t
    } = this.props;
    return null == module ? null : (0, Chunk54381.jsx)(Chunk237583.Z, {
      className: Chunk297762.voiceSummaryContainer,
      guildId: exports.guild_id,
      users: module.map(e => {
        let {
          user: t
        } = e;
        return {
          user: t
        }
      }),
      max: 4
    })
  }
  renderContent() {
    let {
      unread: e,
      mentions: t,
      children: n
    } = this.props;
    return (0, Chunk54381.jsxs)("div", {
      "aria-hidden": true,
      className: module || null != exports && exports > 0 ? Chunk297762.contentUnread : Chunk297762.contentDefault,
      children: [this.renderIcon(), this.renderName(), (0, Chunk54381.jsx)("div", {
        className: Chunk297762.misc,
        children: require
      })]
    })
  }
  getAccessibilityLabel() {
    var e;
    let {
      channel: t
    } = this.props, n = null == (e = Chunk430824.Z.getGuild(this.props.channel.guild_id)) ? true : module.name, r = (0, Chunk933557.F6)(exports, Chunk594174.default, Chunk699516.Z), i = (0, Chunk16206.Z)(exports);
    return Chunk388032.intl.formatToPlainString(Chunk388032.t["Vw/da+"], {
      name: r,
      type: Chunk54381,
      guild: require
    })
  }
  render() {
    let {
      onMouseEnter: e,
      onClick: t,
      onFocus: n,
      onContextMenu: r,
      focused: a,
      score: o,
      id: s
    } = this.props;
    return (0, Chunk54381.jsx)(I, {
      id: Chunk815372,
      "aria-label": this.getAccessibilityLabel(),
      onMouseEnter: module,
      onClick: exports,
      onFocus: require,
      onContextMenu: r,
      focused: Chunk473749,
      score: Chunk481060,
      children: this.renderContent()
    })
  }
}
S(A, "defaultProps", {
  unread: false
});
class C extends Chunk473749.Component {
  renderIcon() {
    let {
      channel: e,
      status: t
    } = this.props;
    return (0, Chunk54381.jsx)("div", {
      className: Chunk297762.dmIconContainer,
      children: (0, Chunk54381.jsx)(Chunk481060.qEK, {
        src: (0, Chunk43267.x)(module),
        size: Chunk481060.EFr.SIZE_20,
        "aria-hidden": true,
        status: exports
      })
    })
  }
  renderName() {
    let e, {
      mentions: t,
      channel: n
    } = this.props;
    return null != exports && exports > 0 && (e = (0, Chunk54381.jsx)(Chunk790145.Z, {
      className: Chunk297762.badge,
      value: exports
    })), (0, Chunk54381.jsxs)("div", {
      className: Chunk297762.name,
      children: [(0, Chunk54381.jsx)("span", {
        className: Chunk297762.match,
        children: (0, Chunk933557.F6)(require, Chunk594174.default, Chunk699516.Z)
      }), module]
    })
  }
  renderContent() {
    let {
      mentions: e,
      children: t
    } = this.props;
    return (0, Chunk54381.jsxs)("div", {
      className: null != module && module > 0 ? Chunk297762.contentUnread : Chunk297762.contentDefault,
      children: [this.renderIcon(), this.renderName(), (0, Chunk54381.jsx)("div", {
        className: Chunk297762.misc,
        children: exports
      })]
    })
  }
  getAccessibilityLabel() {
    let {
      channel: e,
      mentions: t
    } = this.props, n = (0, Chunk933557.F6)(module, Chunk594174.default, Chunk699516.Z);
    return null != exports && exports > 0 ? Chunk388032.intl.formatToPlainString(Chunk388032.t.LYdVfN, {
      name: require,
      mentions: exports
    }) : Chunk388032.intl.formatToPlainString(Chunk388032.t.lLSbno, {
      name: require
    })
  }
  render() {
    let {
      onMouseEnter: e,
      onClick: t,
      onFocus: n,
      onContextMenu: r,
      focused: a,
      score: o,
      id: s
    } = this.props;
    return (0, Chunk54381.jsx)(I, {
      id: Chunk815372,
      "aria-label": this.getAccessibilityLabel(),
      onMouseEnter: module,
      onClick: exports,
      onFocus: require,
      onContextMenu: r,
      focused: Chunk473749,
      score: Chunk481060,
      children: this.renderContent()
    })
  }
}
class N extends Chunk473749.Component {
  renderIcon() {
    let {
      user: e,
      status: t,
      isMobile: n
    } = this.props;
    return (0, Chunk54381.jsx)("div", {
      className: Chunk297762.iconContainer,
      children: (0, Chunk54381.jsx)(Chunk481060.qEK, {
        src: module.getAvatarURL(true, 20),
        "aria-hidden": true,
        size: Chunk481060.EFr.SIZE_20,
        status: exports,
        isMobile: require
      })
    })
  }
  getDisplayNickname() {
    let e, {
        user: t,
        comparator: n
      } = this.props,
      r = Chunk699516.Z.getNickname(exports.id);
    return ((e = require === exports.tag || null == require || "" === require ? exports.username : require) === exports.username || module === exports.id) && (e = null != r ? r : Chunk51144.ZP.getName(exports)), module
  }
  renderName() {
    let e, {
        user: t,
        mentions: n
      } = this.props,
      r = this.getDisplayNickname();
    return null != require && require > 0 && (e = (0, Chunk54381.jsx)(Chunk790145.Z, {
      className: Chunk297762.badge,
      value: require
    })), (0, Chunk54381.jsxs)("div", {
      className: Chunk297762.name,
      children: [(0, Chunk54381.jsx)("span", {
        className: Chunk297762.match,
        children: r
      }), module, (0, Chunk54381.jsx)("span", {
        className: Chunk297762.username,
        children: Chunk51144.ZP.getUserTag(exports)
      })]
    })
  }
  renderContent() {
    let {
      children: e,
      mentions: t
    } = this.props;
    return (0, Chunk54381.jsxs)("div", {
      className: null != exports && exports > 0 ? Chunk297762.contentUnread : Chunk297762.contentDefault,
      children: [this.renderIcon(), this.renderName(), (0, Chunk54381.jsx)("div", {
        className: Chunk297762.misc,
        children: module
      })]
    })
  }
  getAccessibilityLabel() {
    let {
      mentions: e,
      user: t
    } = this.props, n = this.getDisplayNickname(), r = Chunk51144.ZP.getUserTag(exports);
    return null != module && module > 0 ? Chunk388032.intl.formatToPlainString(Chunk388032.t["6b9UrR"], {
      name: require,
      id: r,
      mentions: module
    }) : Chunk388032.intl.formatToPlainString(Chunk388032.t.GWYOAY, {
      name: require,
      id: r
    })
  }
  render() {
    let {
      onMouseEnter: e,
      onClick: t,
      onFocus: n,
      onContextMenu: r,
      focused: a,
      score: o,
      id: s
    } = this.props;
    return (0, Chunk54381.jsx)(I, {
      id: Chunk815372,
      "aria-label": this.getAccessibilityLabel(),
      onMouseEnter: module,
      onClick: exports,
      onFocus: require,
      onContextMenu: r,
      focused: Chunk473749,
      score: Chunk481060,
      children: this.renderContent()
    })
  }
}
class P extends Chunk473749.Component {
  renderContent() {
    let {
      children: e,
      application: t
    } = this.props;
    return (0, Chunk54381.jsxs)("div", {
      className: Chunk297762.contentDefault,
      children: [(0, Chunk54381.jsx)("div", {
        className: Chunk297762.iconContainer,
        children: (0, Chunk54381.jsx)(Chunk925329.Z, {
          tabIndex: false,
          className: Chunk297762.gameIcon,
          game: exports,
          size: Chunk297762.gameIconSize
        })
      }), exports.name, (0, Chunk54381.jsx)("div", {
        className: Chunk297762.misc,
        children: module
      })]
    })
  }
  render() {
    let {
      onMouseEnter: e,
      onClick: t,
      onFocus: n,
      focused: r,
      id: a
    } = this.props;
    return (0, Chunk54381.jsx)(I, {
      id: Chunk473749,
      onMouseEnter: module,
      onClick: exports,
      onFocus: require,
      focused: r,
      children: this.renderContent()
    })
  }
}
class R extends Chunk473749.Component {
  render() {
    return (0, Chunk54381.jsx)("div", {
      className: Chunk297762.__invalid_resultDefault,
      children: (0, Chunk54381.jsx)("div", {
        className: Chunk297762.contentDefault,
        children: (0, Chunk54381.jsx)("div", {
          className: Chunk297762.header,
          children: this.props.children
        })
      })
    })
  }
}
class w extends Chunk473749.Component {
  renderContent() {
    let e, t, {
        link: n,
        children: r
      } = this.props,
      a = (0, Chunk754688.Qj)(require.path);
    return null == Chunk473749 || true === Chunk473749.messageId ? (e = Chunk388032.intl.string(Chunk388032.t.qbSCqj), t = (0, Chunk54381.jsx)(Chunk481060.xPt, {
      size: "xs",
      color: "currentColor"
    })) : (0, Chunk754688.VO)(Chunk473749) ? (e = Chunk388032.intl.string(Chunk388032.t["6Fd/j1"]), t = (0, Chunk54381.jsx)(Chunk481060.acy, {
      size: "xs",
      color: "currentColor"
    })) : (e = Chunk388032.intl.string(Chunk388032.t.jQRwp4), t = (0, Chunk54381.jsx)(Chunk481060.mBM, {
      size: "xs",
      color: "currentColor"
    })), (0, Chunk54381.jsxs)("div", {
      className: Chunk297762.contentDefault,
      children: [(0, Chunk54381.jsx)("div", {
        className: Chunk297762.iconContainer,
        children: exports
      }), module, (0, Chunk54381.jsx)("div", {
        className: Chunk297762.misc,
        children: r
      })]
    })
  }
  render() {
    let {
      onMouseEnter: e,
      onClick: t,
      onFocus: n,
      onContextMenu: r,
      focused: a,
      score: o,
      id: s
    } = this.props;
    return (0, Chunk54381.jsx)(I, {
      id: Chunk815372,
      onMouseEnter: module,
      onClick: exports,
      onFocus: require,
      onContextMenu: r,
      focused: Chunk473749,
      score: Chunk481060,
      children: this.renderContent()
    })
  }
}
class D extends Chunk473749.Component {
  renderContent() {
    var e, t;
    let n, r, {
      navigationRecord: a,
      children: l
    } = this.props;
    switch (Chunk473749.type) {
      case Chunk815372.Ky.SHOP:
        n = Chunk388032.intl.string(Chunk388032.t.pWG4ze), r = (0, Chunk54381.jsx)(Chunk481060.EOn, {
          size: "xs",
          color: "currentColor"
        });
        break;
      case Chunk815372.Ky.SHOP_ORBS_TAB:
        n = Chunk388032.intl.string(Chunk388032.t.EBYkzk), r = (0, Chunk54381.jsx)(Chunk481060.EOn, {
          size: "xs",
          color: "currentColor"
        });
        break;
      case Chunk815372.Ky.QUEST_ORBS:
        n = "".concat(Chunk388032.intl.string(Chunk388032.t.ElYQFS), " ").concat(Chunk388032.intl.string(Chunk388032.t.JALI2K)), r = (0, Chunk54381.jsx)(Chunk481060.qDn, {
          size: "xs",
          color: "currentColor"
        });
        break;
      case Chunk815372.Ky.NITRO_HOME:
        n = Chunk388032.intl.string(Chunk388032.t.Ipxkog), r = (0, Chunk54381.jsx)(Chunk481060.SrA, {
          size: "xs",
          color: "currentColor"
        });
        break;
      case Chunk815372.Ky.QUEST_HOME:
        n = Chunk388032.intl.string(Chunk388032.t.JALI2K), r = (0, Chunk54381.jsx)(Chunk481060.qDn, {
          size: "xs",
          color: "currentColor"
        });
        break;
      case Chunk815372.Ky.APPS_HOME:
        n = Chunk388032.intl.string(Chunk388032.t.PHjkRE), r = (0, Chunk54381.jsx)(Chunk481060.jje, {
          size: "xs",
          color: "currentColor"
        });
        break;
      case Chunk815372.Ky.SETTINGS:
        n = null != (e = Chunk473749.label) ? module : Chunk388032.intl.string(Chunk388032.t["3D5yo/"]), r = (0, Chunk54381.jsx)(Chunk481060.ewm, {
          size: "xs",
          color: "currentColor"
        });
        break;
      case Chunk815372.Ky.PLAYGROUND:
        if (n = null != (t = Chunk473749.label) ? exports : "".concat(Chunk473749.collectionId, " Playground"), null != Chunk473749.IconComponent) {
          let e = Chunk473749.IconComponent;
          r = (0, Chunk54381.jsx)(module, {
            size: "xs",
            color: "currentColor"
          })
        } else r = (0, Chunk54381.jsx)(Chunk481060.hh5, {
          size: "xs",
          color: "currentColor"
        });
        break;
      default:
        n = Chunk473749.id, r = (0, Chunk54381.jsx)(Chunk481060.xPt, {
          size: "xs",
          color: "currentColor"
        })
    }
    return (0, Chunk54381.jsxs)("div", {
      className: Chunk297762.contentDefault,
      children: [(0, Chunk54381.jsx)("div", {
        className: Chunk297762.iconContainer,
        children: r
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk297762.name,
        children: require
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk297762.misc,
        children: Chunk43267
      })]
    })
  }
  render() {
    let {
      onMouseEnter: e,
      onClick: t,
      onFocus: n,
      onContextMenu: r,
      focused: a,
      score: o,
      id: s
    } = this.props;
    return (0, Chunk54381.jsx)(I, {
      id: Chunk815372,
      onMouseEnter: module,
      onClick: exports,
      onFocus: require,
      onContextMenu: r,
      focused: Chunk473749,
      score: Chunk481060,
      children: this.renderContent()
    })
  }
}