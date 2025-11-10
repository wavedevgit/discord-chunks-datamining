/** Chunk was on 63141 **/
/** chunk id: 593481, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  QR: () => y,
  Yj: () => O,
  ZP: () => b
});
var i, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk294033 = require("./294033.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk866497 = require("./866497.js"),
  Chunk197571 = require("./197571.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let f = e => e.stopPropagation(),
  g = () => (0, Chunk951288.jsx)("div", {
    className: Chunk866497.clickBlocker,
    onClick: f,
    onMouseEnter: f,
    onMouseOver: f
  }),
  m = () => (0, Chunk951288.jsx)("div", {
    className: Chunk866497.divider
  }),
  y = (e, t, n) => (0, r.jsx)("div", {
    className: u.keybindMessage,
    children: d.intl.format(n, {
      keybind: t,
      keybindHook: (e, n) => (0, r.jsx)(c.Z, {
        keybind: t,
        className: u.keybind
      }, n)
    })
  }),
  O = (e, t) => (0, r.jsx)("div", {
    className: u.hintSubtleText,
    children: t
  });
class _ extends(i = Chunk647438.PureComponent) {
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
      className: Chunk866497.dismissButton,
      "aria-label": Chunk388032.intl.string(Chunk388032.t.LnEgqX),
      children: (0, Chunk951288.jsx)(Chunk481060.Dio, {
        size: "xs",
        color: "currentColor",
        className: Chunk866497.dismissIcon
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
        className: "string" == typeof module ? Chunk866497.hintText : true,
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
        hint: o
      },
      state: {
        expanded: l
      }
    } = this;
    if (!l) return null != Chunk120356 ? this.renderHint() : null;
    if (null != this.props.renderFooter) {
      let e = this.props.renderFooter(l);
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
      className: Chunk866497.avatar,
      "aria-hidden": true
    }) : (0, Chunk951288.jsx)("div", {
      className: Chunk866497.avatar,
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
      className: Chunk866497.content,
      children: [this.renderIcon(), (0, Chunk951288.jsxs)("div", {
        className: Chunk866497.details,
        children: [(0, Chunk951288.jsx)("div", {
          className: Chunk866497.title,
          children: "function" == typeof exports ? exports(this.handleDismiss) : exports
        }), null != module ? (0, Chunk951288.jsx)("div", {
          className: l()(Chunk866497.body, Chunk197571.marginTop4),
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
      className: l()(Chunk866497.container, {
        [Chunk866497.themePrimary]: true,
        [Chunk866497.clickable]: null != module && !exports
      }),
      children: [this.renderCloseButton(), this.renderContent(), this.renderFooter(), exports ? (0, Chunk951288.jsx)(g, {}) : null]
    })
  }
  constructor(e) {
    super(e), h(this, "handleDismiss", e => {
      e.stopPropagation();
      let {
        onDismissClick: t
      } = this.props;
      null == t || t(e)
    }), h(this, "handleConfirmClick", e => {
      e.stopPropagation();
      let {
        onConfirmClick: t
      } = this.props;
      null == t || t(e)
    }), h(this, "handleCancelClick", e => {
      e.stopPropagation();
      let {
        onCancelClick: t
      } = this.props;
      null == t || t(e)
    }), h(this, "handleMouseEnter", () => {
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
h(_, "defaultProps", {
  maxBodyLines: true,
  expand: false,
  disabled: false
});
let b = _