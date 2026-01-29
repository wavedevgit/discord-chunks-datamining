/** Chunk was on 84018 **/
/** chunk id: 471024, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Ay: () => A,
  de: () => _,
  sI: () => m
});
var i, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk12641 = require("./12641.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk58755 = require("./58755.js"),
  Chunk473169 = require("./473169.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let f = e => e.stopPropagation(),
  g = () => (0, r.jsx)("div", {
    className: u.tR,
    onClick: f,
    onMouseEnter: f,
    onMouseOver: f
  }),
  y = () => (0, r.jsx)("div", {
    className: u.yF
  }),
  m = (e, t, n) => (0, r.jsx)("div", {
    className: u.qD,
    children: d.intl.format(n, {
      keybind: t,
      keybindHook: (e, n) => (0, r.jsx)(c.A, {
        keybind: t,
        className: u.P
      }, n)
    })
  }),
  _ = (e, t) => (0, r.jsx)("div", {
    className: u.g2,
    children: t
  });
class b extends(i = Chunk64700.PureComponent) {
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
    null == e || e()
  }
  componentDidUpdate(e) {
    let {
      onNotificationShow: t
    } = this.props;
    null != t && null == e.onNotificationShow && t()
  }
  renderCloseButton() {
    return "function" == typeof this.props.title ? null : (0, r.jsx)(a.DUT, {
      onClick: this.handleDismiss,
      className: u.r,
      "aria-label": d.intl.string(d.t.LnEgqX),
      children: (0, r.jsx)(a.PGe, {
        size: "xs",
        color: "currentColor",
        className: u.MW
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
    if (null == e) return null;
    if ("function" == typeof e) {
      let i = e(n, t);
      return null != i ? (0, r.jsxs)(s.Fragment, {
        children: [(0, r.jsx)(y, {}), i]
      }, "hint-custom") : null
    }
    return (0, r.jsxs)(s.Fragment, {
      children: [(0, r.jsx)(y, {}), (0, r.jsx)("div", {
        className: "string" == typeof e ? u.dx : true,
        children: e
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
        expanded: o
      }
    } = this;
    if (!o) return null != l ? this.renderHint() : null;
    if (null != this.props.renderFooter) {
      let e = this.props.renderFooter(o);
      return null != e ? (0, r.jsxs)(s.Fragment, {
        children: [(0, r.jsx)(y, {}), e]
      }, "footer-custom-content") : null
    }
    return null != n || null != i ? (0, r.jsxs)(s.Fragment, {
      children: [(0, r.jsx)(y, {}), (0, r.jsxs)(a.ButtonGroup, {
        fullWidth: true,
        children: [null != n ? (0, r.jsx)(a.Button, {
          variant: "active",
          size: "sm",
          text: null != t ? t : d.intl.string(d.t.BddRzS),
          onClick: this.handleConfirmClick
        }) : null, null != i ? (0, r.jsx)(a.Button, {
          variant: "secondary",
          size: "sm",
          text: null != e ? e : d.intl.string(d.t["ETE/oC"]),
          onClick: this.handleCancelClick
        }) : null]
      })]
    }, "footer-button-content") : this.renderHint()
  }
  renderIcon() {
    let {
      icon: e
    } = this.props;
    return null == e ? null : "string" == typeof e ? (0, r.jsx)(a.euF, {
      src: e,
      size: a._3J.SIZE_40,
      className: u.my,
      "aria-hidden": true
    }) : (0, r.jsx)("div", {
      className: u.my,
      children: e
    })
  }
  renderContent() {
    let {
      body: e,
      title: t,
      maxBodyLines: n
    } = this.props;
    return (0, r.jsxs)("div", {
      className: u.Qs,
      children: [this.renderIcon(), (0, r.jsxs)("div", {
        className: u.zH,
        children: [(0, r.jsx)("div", {
          className: u.DD,
          children: "function" == typeof t ? t(this.handleDismiss) : t
        }), null != e ? (0, r.jsx)("div", {
          className: o()(u.rf, p.a5),
          style: {
            WebkitLineClamp: n,
            lineClamp: n
          },
          children: e
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
    } = this, i = null != e ? a.DUT : "div";
    return (0, r.jsxs)(i, {
      onMouseOver: n ? true : this.handleMouseEnter,
      onFocus: n ? true : this.handleMouseEnter,
      onClick: null != e ? e : true,
      className: o()(u.kL, {
        [u.gr]: true,
        [u.vk]: null != e && !t
      }),
      children: [this.renderCloseButton(), this.renderContent(), this.renderFooter(), t ? (0, r.jsx)(g, {}) : null]
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
    const {
      expand: t
    } = e;
    this.state = {
      expanded: t
    }
  }
}
h(b, "defaultProps", {
  maxBodyLines: true,
  expand: false,
  disabled: false
});
let A = b