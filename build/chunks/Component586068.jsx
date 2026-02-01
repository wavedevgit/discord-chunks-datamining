/** Chunk was on 9207 **/
/** chunk id: 586068, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  KJ: () => y,
  N_: () => P,
  OS: () => T,
  Y9: () => v,
  c3: () => I,
  lg: () => j,
  nG: () => N,
  vw: () => R
}), require("./896048.js"), require("./747238.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk329308 = require("./329308.js"),
  Chunk571694 = require("./571694.js"),
  Chunk47167 = require("./47167.js"),
  Chunk713654 = require("./713654.js"),
  Chunk523728 = require("./523728.js"),
  Chunk200470 = require("./200470.jsx"),
  Chunk769015 = require("./769015.jsx"),
  Chunk263063 = require("./263063.jsx"),
  Chunk376943 = require("./376943.js"),
  Chunk636585 = require("./636585.jsx"),
  Chunk71393 = require("./71393.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk427262 = require("./427262.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk649134 = require("./649134.js");

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class S extends Chunk64700.PureComponent {
  componentDidMount() {
    let {
      focused: e,
      onFocus: t
    } = this.props, {
      node: n
    } = this;
    e && null != n && t(n)
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
      id: l,
      "aria-label": a
    } = this.props;
    return (0, i.jsxs)(s.DUT, {
      role: "option",
      id: l,
      "aria-label": a,
      "aria-selected": e,
      focusProps: {
        enabled: false
      },
      tabIndex: false,
      innerRef: this.setRef,
      className: x.Ke,
      onClick: this.handleClick,
      onMouseEnter: this.handleMouseEnter,
      onContextMenu: r,
      children: [t, null != n ? (0, i.jsx)("div", {
        className: x.fN,
        children: 0 | n
      }) : null]
    })
  }
  constructor(...e) {
    super(...e), C(this, "node", true), C(this, "handleClick", e => {
      e.preventDefault();
      let {
        onClick: t
      } = this.props, {
        node: n
      } = this;
      null != n && t(e, n)
    }), C(this, "handleMouseEnter", e => {
      let {
        onMouseEnter: t
      } = this.props, {
        node: n
      } = this;
      null != n && t(e, n)
    }), C(this, "setRef", e => {
      this.node = e
    })
  }
}
class T extends Chunk64700.Component {
  renderIcon() {
    let {
      guild: e
    } = this.props;
    return (0, i.jsx)("div", {
      className: x._C,
      children: (0, i.jsx)(m.A, {
        tabIndex: false,
        guild: e,
        size: m.A.Sizes.MINI,
        className: x.$f
      })
    })
  }
  renderName() {
    let {
      guild: e
    } = this.props;
    return (0, i.jsx)("div", {
      className: x.UU,
      children: (0, i.jsx)("span", {
        className: x.YW,
        children: e.name
      })
    })
  }
  renderContent() {
    let {
      unread: e,
      children: t
    } = this.props;
    return (0, i.jsxs)("div", {
      className: e ? x.XB : x.xr,
      children: [this.renderIcon(), this.renderName(), (0, i.jsx)("div", {
        className: x.Lr,
        children: t
      })]
    })
  }
  getAccessibilityLabel() {
    let {
      guild: e
    } = this.props;
    return O.intl.formatToPlainString(O.t.WVq3Lr, {
      name: e.name
    })
  }
  render() {
    let {
      onMouseEnter: e,
      onClick: t,
      onFocus: n,
      onContextMenu: r,
      focused: l,
      score: s,
      id: a
    } = this.props;
    return (0, i.jsx)(S, {
      id: a,
      "aria-label": this.getAccessibilityLabel(),
      onMouseEnter: e,
      onClick: t,
      onFocus: n,
      onContextMenu: r,
      focused: l,
      score: s,
      children: this.renderContent()
    })
  }
}
class I extends(r = Chunk64700.Component) {
  renderIcon() {
    var e;
    let {
      channel: t
    } = this.props, n = (0, d.gU)(t);
    if (null == n) return null;
    let r = null != (e = (0, u.A)(t)) ? e : "";
    return (0, i.jsx)("div", {
      className: x.zc,
      role: "img",
      "aria-label": r,
      children: (0, i.jsx)(n, {
        className: x.Kk,
        size: "xs",
        color: "currentColor"
      })
    })
  }
  renderName() {
    let e, t, {
      mentions: n,
      category: r,
      channel: l,
      isMentionLowImportance: s
    } = this.props;
    return null != n && n > 0 && (e = (0, i.jsx)(_.A, {
      className: x.qS,
      value: n,
      lowImportance: s
    })), null != r && (t = (0, i.jsx)("span", {
      className: x.N4,
      children: (0, c.m1)(r, h.default, b.A)
    })), (0, i.jsxs)("div", {
      className: x.UU,
      children: [(0, i.jsx)("span", {
        className: x.YW,
        children: (0, c.m1)(l, h.default, b.A)
      }), e, this.renderVoiceStates(), t]
    })
  }
  renderVoiceStates() {
    let {
      voiceStates: e,
      channel: t
    } = this.props;
    return null == e ? null : (0, i.jsx)(A.A, {
      className: x.x7,
      guildId: t.guild_id,
      users: e.map(e => {
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
    return (0, i.jsxs)("div", {
      "aria-hidden": true,
      className: e || null != t && t > 0 ? x.XB : x.xr,
      children: [this.renderIcon(), this.renderName(), (0, i.jsx)("div", {
        className: x.Lr,
        children: n
      })]
    })
  }
  getAccessibilityLabel() {
    var e;
    let {
      channel: t
    } = this.props, n = null == (e = f.A.getGuild(this.props.channel.guild_id)) ? true : e.name, r = (0, c.m1)(t, h.default, b.A), i = (0, u.A)(t);
    return O.intl.formatToPlainString(O.t["Vw/da+"], {
      name: r,
      type: i,
      guild: n
    })
  }
  render() {
    let {
      onMouseEnter: e,
      onClick: t,
      onFocus: n,
      onContextMenu: r,
      focused: l,
      score: s,
      id: a
    } = this.props;
    return (0, i.jsx)(S, {
      id: a,
      "aria-label": this.getAccessibilityLabel(),
      onMouseEnter: e,
      onClick: t,
      onFocus: n,
      onContextMenu: r,
      focused: l,
      score: s,
      children: this.renderContent()
    })
  }
}
C(I, "defaultProps", {
  unread: false
});
class N extends Chunk64700.Component {
  renderIcon() {
    let {
      channel: e,
      status: t
    } = this.props;
    return (0, i.jsx)("div", {
      className: x.IU,
      children: (0, i.jsx)(s.euF, {
        src: (0, o.Y)(e),
        size: s._3J.SIZE_20,
        "aria-hidden": true,
        status: t
      })
    })
  }
  renderName() {
    let e, {
      mentions: t,
      channel: n
    } = this.props;
    return null != t && t > 0 && (e = (0, i.jsx)(_.A, {
      className: x.qS,
      value: t
    })), (0, i.jsxs)("div", {
      className: x.UU,
      children: [(0, i.jsx)("span", {
        className: x.YW,
        children: (0, c.m1)(n, h.default, b.A)
      }), e]
    })
  }
  renderContent() {
    let {
      mentions: e,
      children: t
    } = this.props;
    return (0, i.jsxs)("div", {
      className: null != e && e > 0 ? x.XB : x.xr,
      children: [this.renderIcon(), this.renderName(), (0, i.jsx)("div", {
        className: x.Lr,
        children: t
      })]
    })
  }
  getAccessibilityLabel() {
    let {
      channel: e,
      mentions: t
    } = this.props, n = (0, c.m1)(e, h.default, b.A);
    return null != t && t > 0 ? O.intl.formatToPlainString(O.t.LYdVfN, {
      name: n,
      mentions: t
    }) : O.intl.formatToPlainString(O.t.lLSbno, {
      name: n
    })
  }
  render() {
    let {
      onMouseEnter: e,
      onClick: t,
      onFocus: n,
      onContextMenu: r,
      focused: l,
      score: s,
      id: a
    } = this.props;
    return (0, i.jsx)(S, {
      id: a,
      "aria-label": this.getAccessibilityLabel(),
      onMouseEnter: e,
      onClick: t,
      onFocus: n,
      onContextMenu: r,
      focused: l,
      score: s,
      children: this.renderContent()
    })
  }
}
class y extends Chunk64700.Component {
  renderIcon() {
    let {
      user: e,
      status: t,
      isMobile: n
    } = this.props;
    return (0, i.jsx)("div", {
      className: x.zc,
      children: (0, i.jsx)(s.euF, {
        src: e.getAvatarURL(true, 20),
        "aria-hidden": true,
        size: s._3J.SIZE_20,
        status: t,
        isMobile: n
      })
    })
  }
  getDisplayNickname() {
    let e, {
        user: t,
        comparator: n
      } = this.props,
      r = b.A.getNickname(t.id);
    return ((e = n === t.tag || null == n || "" === n ? t.username : n) === t.username || e === t.id) && (e = null != r ? r : E.Ay.getName(t)), e
  }
  renderName() {
    let e, {
        user: t,
        mentions: n
      } = this.props,
      r = this.getDisplayNickname();
    return null != n && n > 0 && (e = (0, i.jsx)(_.A, {
      className: x.qS,
      value: n
    })), (0, i.jsxs)("div", {
      className: x.UU,
      children: [(0, i.jsx)("span", {
        className: x.YW,
        children: r
      }), e, (0, i.jsx)("span", {
        className: x.Xh,
        children: E.Ay.getUserTag(t)
      })]
    })
  }
  renderContent() {
    let {
      children: e,
      mentions: t
    } = this.props;
    return (0, i.jsxs)("div", {
      className: null != t && t > 0 ? x.XB : x.xr,
      children: [this.renderIcon(), this.renderName(), (0, i.jsx)("div", {
        className: x.Lr,
        children: e
      })]
    })
  }
  getAccessibilityLabel() {
    let {
      mentions: e,
      user: t
    } = this.props, n = this.getDisplayNickname(), r = E.Ay.getUserTag(t);
    return null != e && e > 0 ? O.intl.formatToPlainString(O.t["6b9UrR"], {
      name: n,
      id: r,
      mentions: e
    }) : O.intl.formatToPlainString(O.t.GWYOAY, {
      name: n,
      id: r
    })
  }
  render() {
    let {
      onMouseEnter: e,
      onClick: t,
      onFocus: n,
      onContextMenu: r,
      focused: l,
      score: s,
      id: a
    } = this.props;
    return (0, i.jsx)(S, {
      id: a,
      "aria-label": this.getAccessibilityLabel(),
      onMouseEnter: e,
      onClick: t,
      onFocus: n,
      onContextMenu: r,
      focused: l,
      score: s,
      children: this.renderContent()
    })
  }
}
class j extends Chunk64700.Component {
  renderContent() {
    let {
      children: e,
      application: t
    } = this.props;
    return (0, i.jsxs)("div", {
      className: x.xr,
      children: [(0, i.jsx)("div", {
        className: x.zc,
        children: (0, i.jsx)(p.A, {
          tabIndex: false,
          className: x.Gt,
          game: t,
          size: x.D0
        })
      }), t.name, (0, i.jsx)("div", {
        className: x.Lr,
        children: e
      })]
    })
  }
  render() {
    let {
      onMouseEnter: e,
      onClick: t,
      onFocus: n,
      focused: r,
      id: l
    } = this.props;
    return (0, i.jsx)(S, {
      id: l,
      onMouseEnter: e,
      onClick: t,
      onFocus: n,
      focused: r,
      children: this.renderContent()
    })
  }
}
class v extends Chunk64700.Component {
  render() {
    return (0, i.jsx)("div", {
      className: x.__invalid_resultDefault,
      children: (0, i.jsx)("div", {
        className: x.xr,
        children: (0, i.jsx)("div", {
          className: x.wx,
          children: this.props.children
        })
      })
    })
  }
}
class P extends Chunk64700.Component {
  renderContent() {
    let e, t, {
        link: n,
        children: r
      } = this.props,
      l = (0, g.vu)(n.path);
    return null == l || true === l.messageId ? (e = O.intl.string(O.t.qbSCqj), t = (0, i.jsx)(s.qYV, {
      size: "xs",
      color: "currentColor"
    })) : (0, g.r9)(l) ? (e = O.intl.string(O.t["6Fd/j1"]), t = (0, i.jsx)(s.txs, {
      size: "xs",
      color: "currentColor"
    })) : (e = O.intl.string(O.t.jQRwp4), t = (0, i.jsx)(s.XAi, {
      size: "xs",
      color: "currentColor"
    })), (0, i.jsxs)("div", {
      className: x.xr,
      children: [(0, i.jsx)("div", {
        className: x.zc,
        children: t
      }), e, (0, i.jsx)("div", {
        className: x.Lr,
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
      focused: l,
      score: s,
      id: a
    } = this.props;
    return (0, i.jsx)(S, {
      id: a,
      onMouseEnter: e,
      onClick: t,
      onFocus: n,
      onContextMenu: r,
      focused: l,
      score: s,
      children: this.renderContent()
    })
  }
}
class R extends Chunk64700.Component {
  renderContent() {
    var e, t;
    let n, r, {
      navigationRecord: l,
      children: o
    } = this.props;
    switch (l.type) {
      case a.t1.SHOP:
        n = O.intl.string(O.t.pWG4ze), r = (0, i.jsx)(s.U1X, {
          size: "xs",
          color: "currentColor"
        });
        break;
      case a.t1.SHOP_ORBS_TAB:
        n = O.intl.string(O.t.EBYkzk), r = (0, i.jsx)(s.U1X, {
          size: "xs",
          color: "currentColor"
        });
        break;
      case a.t1.QUEST_ORBS:
        n = "".concat(O.intl.string(O.t.ElYQFS), " ").concat(O.intl.string(O.t.JALI2K)), r = (0, i.jsx)(s.r2v, {
          size: "xs",
          color: "currentColor"
        });
        break;
      case a.t1.NITRO_HOME:
        n = O.intl.string(O.t.Ipxkog), r = (0, i.jsx)(s.tvc, {
          size: "xs",
          color: "currentColor"
        });
        break;
      case a.t1.QUEST_HOME:
        n = O.intl.string(O.t.JALI2K), r = (0, i.jsx)(s.r2v, {
          size: "xs",
          color: "currentColor"
        });
        break;
      case a.t1.APPS_HOME:
        n = O.intl.string(O.t.PHjkRE), r = (0, i.jsx)(s.k9F, {
          size: "xs",
          color: "currentColor"
        });
        break;
      case a.t1.SETTINGS:
        n = null != (e = l.label) ? e : O.intl.string(O.t["3D5yo/"]), r = (0, i.jsx)(s.Zes, {
          size: "xs",
          color: "currentColor"
        });
        break;
      case a.t1.PLAYGROUND:
        if (n = null != (t = l.label) ? t : "".concat(l.collectionId, " Playground"), null != l.IconComponent) {
          let e = l.IconComponent;
          r = (0, i.jsx)(e, {
            size: "xs",
            color: "currentColor"
          })
        } else r = (0, i.jsx)(s.HUC, {
          size: "xs",
          color: "currentColor"
        });
        break;
      default:
        n = l.id, r = (0, i.jsx)(s.qYV, {
          size: "xs",
          color: "currentColor"
        })
    }
    return (0, i.jsxs)("div", {
      className: x.xr,
      children: [(0, i.jsx)("div", {
        className: x.zc,
        children: r
      }), (0, i.jsx)("div", {
        className: x.UU,
        children: n
      }), (0, i.jsx)("div", {
        className: x.Lr,
        children: o
      })]
    })
  }
  render() {
    let {
      onMouseEnter: e,
      onClick: t,
      onFocus: n,
      onContextMenu: r,
      focused: l,
      score: s,
      id: a
    } = this.props;
    return (0, i.jsx)(S, {
      id: a,
      onMouseEnter: e,
      onClick: t,
      onFocus: n,
      onContextMenu: r,
      focused: l,
      score: s,
      children: this.renderContent()
    })
  }
}