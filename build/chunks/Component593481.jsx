/** Chunk was on 63141 **/
/** chunk id: 593481, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  QR: () => _,
  Yj: () => y,
  ZP: () => v
});
var i, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk294033 = require("./294033.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk681212 = require("./681212.js"),
  Chunk10198 = require("./10198.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let f = e => e.stopPropagation(),
  g = () => (0, Chunk951288.jsx)("div", {
    className: Chunk681212.clickBlocker,
    onClick: f,
    onMouseEnter: f,
    onMouseOver: f
  }),
  m = () => (0, Chunk951288.jsx)("div", {
    className: Chunk681212.divider
  }),
  _ = (e, t, n) => (0, r.jsx)("div", {
    className: u.keybindMessage,
    children: d.intl.format(n, {
      keybind: t,
      keybindHook: (e, n) => (0, r.jsx)(c.Z, {
        keybind: t,
        className: u.keybind
      }, n)
    })
  }),
  y = (e, t) => (0, r.jsx)("div", {
    className: u.hintSubtleText,
    children: t
  });
class O extends(i = Chunk647438.PureComponent) {
  static getDerivedStateFromProps(e, t) {
    let {
      expand: n
    } = e, {
      expanded: i
    } = t;
    return !i && n ? {
      expanded: true
    } : null
  }
  componentDidMount() {
    let {
      onNotificationShow: e
    } = this.props;
    null == module || module()
  }
  componentDidUpdate(e) {
    let {
      onNotificationShow: t
    } = this.props;
    null != t && null == e.onNotificationShow && t()
  }
  renderCloseButton() {
    return "function" == typeof this.props.title ? null : (0, Chunk951288.jsx)(Chunk481060.P3F, {
      onClick: this.handleDismiss,
      className: Chunk681212.dismissButton,
      "aria-label": Chunk388032.intl.string(Chunk388032.t.LnEgqX),
      children: (0, Chunk951288.jsx)(Chunk481060.Dio, {
        size: "xs",
        color: "currentColor",
        className: Chunk681212.dismissIcon
      })
    })
  }
  renderHint() {
    let {
      props: {
        hint: e,
        locked: t
      },
      state: {
        expanded: n
      }
    } = this;
    if (null == module) return null;
    if ("function" == typeof module) {
      let i = module(require, exports);
      return null != i ? (0, Chunk951288.jsxs)(Chunk647438.Fragment, {
        children: [(0, Chunk951288.jsx)(m, {}), i]
      }, "hint-custom") : null
    }
    return (0, Chunk951288.jsxs)(Chunk647438.Fragment, {
      children: [(0, Chunk951288.jsx)(m, {}), (0, Chunk951288.jsx)("div", {
        className: "string" == typeof module ? Chunk681212.hintText : true,
        children: module
      }, "hint-text")]
    }, "hint-text")
  }
  renderFooter() {
    let {
      props: {
        cancelText: e,
        confirmText: t,
        onConfirmClick: n,
        onCancelClick: i,
        hint: l
      },
      state: {
        expanded: a
      }
    } = this;
    if (!a) return null != Chunk120356 ? this.renderHint() : null;
    if (null != this.props.renderFooter) {
      let e = this.props.renderFooter(a);
      return null != module ? (0, Chunk951288.jsxs)(Chunk647438.Fragment, {
        children: [(0, Chunk951288.jsx)(m, {}), module]
      }, "footer-custom-content") : null
    }
    return null != require || null != i ? (0, Chunk951288.jsxs)(Chunk647438.Fragment, {
      children: [(0, Chunk951288.jsx)(m, {}), (0, Chunk951288.jsxs)(Chunk481060.ButtonGroup, {
        fullWidth: true,
        children: [null != require ? (0, Chunk951288.jsx)(Chunk481060.Button, {
          variant: "active",
          size: "sm",
          text: null != exports ? exports : Chunk388032.intl.string(Chunk388032.t.BddRzS),
          onClick: this.handleConfirmClick
        }) : null, null != i ? (0, Chunk951288.jsx)(Chunk481060.Button, {
          variant: "secondary",
          size: "sm",
          text: null != module ? module : Chunk388032.intl.string(Chunk388032.t["ETE/oC"]),
          onClick: this.handleCancelClick
        }) : null]
      })]
    }, "footer-button-content") : this.renderHint()
  }
  renderIcon() {
    let {
      icon: e
    } = this.props;
    return null == module ? null : "string" == typeof module ? (0, Chunk951288.jsx)(Chunk481060.qEK, {
      src: module,
      size: Chunk481060.EFr.SIZE_40,
      className: Chunk681212.avatar,
      "aria-hidden": true
    }) : (0, Chunk951288.jsx)("div", {
      className: Chunk681212.avatar,
      children: module
    })
  }
  renderContent() {
    let {
      body: e,
      title: t,
      maxBodyLines: n
    } = this.props;
    return (0, Chunk951288.jsxs)("div", {
      className: Chunk681212.content,
      children: [this.renderIcon(), (0, Chunk951288.jsxs)("div", {
        className: Chunk681212.details,
        children: [(0, Chunk951288.jsx)("div", {
          className: Chunk681212.title,
          children: "function" == typeof exports ? exports(this.handleDismiss) : exports
        }), null != module ? (0, Chunk951288.jsx)("div", {
          className: a()(Chunk681212.body, Chunk10198.marginTop4),
          style: {
            WebkitLineClamp: require,
            lineClamp: require
          },
          children: module
        }) : null]
      })]
    })
  }
  render() {
    let {
      props: {
        onNotificationClick: e,
        disabled: t
      },
      state: {
        expanded: n
      }
    } = this, i = null != module ? Chunk481060.P3F : "div";
    return (0, Chunk951288.jsxs)(i, {
      onMouseOver: require ? true : this.handleMouseEnter,
      onFocus: require ? true : this.handleMouseEnter,
      onClick: null != module ? module : true,
      className: a()(Chunk681212.container, {
        [Chunk681212.themePrimary]: true,
        [Chunk681212.clickable]: null != module && !exports
      }),
      children: [this.renderCloseButton(), this.renderContent(), this.renderFooter(), exports ? (0, Chunk951288.jsx)(g, {}) : null]
    })
  }
  constructor(e) {
    super(e), p(this, "handleDismiss", e => {
      e.stopPropagation();
      let {
        onDismissClick: t
      } = this.props;
      null == t || t(e)
    }), p(this, "handleConfirmClick", e => {
      e.stopPropagation();
      let {
        onConfirmClick: t
      } = this.props;
      null == t || t(e)
    }), p(this, "handleCancelClick", e => {
      e.stopPropagation();
      let {
        onCancelClick: t
      } = this.props;
      null == t || t(e)
    }), p(this, "handleMouseEnter", () => {
      this.props.disabled || this.setState({
        expanded: true
      })
    });
    let {
      expand: t
    } = e;
    this.state = {
      expanded: t
    }
  }
}
p(O, "defaultProps", {
  maxBodyLines: true,
  expand: false,
  disabled: false
});
let v = O