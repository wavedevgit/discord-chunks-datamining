/** Chunk was on 76977 **/
n.d(t, {
  QR: () => y,
  Yj: () => _,
  ZP: () => O,
  iz: () => m
});
var i, r = n(200651),
  o = n(192379),
  s = n(120356),
  l = n.n(s),
  a = n(481060),
  c = n(294033),
  d = n(388032),
  u = n(343408),
  h = n(802138);

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let f = e => e.stopPropagation(),
  g = () => (0, r.jsx)("div", {
    className: u.clickBlocker,
    onClick: f,
    onMouseEnter: f,
    onMouseOver: f
  }),
  m = () => (0, r.jsx)("div", {
    className: u.divider
  }),
  y = (e, t, n) => (0, r.jsx)("div", {
    className: u.keybindMessage,
    children: d.NW.format(n, {
      keybind: t,
      keybindHook: (e, n) => (0, r.jsx)(c.Z, {
        keybind: t,
        className: u.keybind
      }, n)
    })
  }),
  _ = (e, t) => (0, r.jsx)("div", {
    className: u.hintSubtleText,
    children: t
  });
class v extends(i = o.PureComponent) {
  static getDerivedStateFromProps(e, t) {
    let {
      expand: n
    } = e, {
      expanded: i
    } = t;
    return !i && n ? {
      expanded: !0
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
    return "function" == typeof this.props.title ? null : (0, r.jsx)(a.zxk, {
      look: a.zxk.Looks.BLANK,
      size: a.zxk.Sizes.NONE,
      onClick: this.handleDismiss,
      className: u.dismissButton,
      "aria-label": d.NW.string(d.t.LnEgqa),
      children: (0, r.jsx)(a.Dio, {
        size: "xs",
        color: "currentColor",
        className: u.dismissIcon
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
      return null != i ? (0, r.jsxs)(o.Fragment, {
        children: [(0, r.jsx)(m, {}), i]
      }, "hint-custom") : null
    }
    return (0, r.jsxs)(o.Fragment, {
      children: [(0, r.jsx)(m, {}), (0, r.jsx)("div", {
        className: "string" == typeof e ? u.hintText : void 0,
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
        hint: s
      },
      state: {
        expanded: l
      }
    } = this;
    if (!l) return null != s ? this.renderHint() : null;
    if (null != this.props.renderFooter) {
      let e = this.props.renderFooter(l);
      return null != e ? (0, r.jsxs)(o.Fragment, {
        children: [(0, r.jsx)(m, {}), e]
      }, "footer-custom-content") : null
    }
    if (null != n || null != i) {
      let s = a.zxk.Colors.GREEN,
        l = a.zxk.Colors.PRIMARY,
        c = a.zxk.Looks.FILLED;
      return (0, r.jsxs)(o.Fragment, {
        children: [(0, r.jsx)(m, {}), (0, r.jsxs)("div", {
          className: u.buttonContainer,
          children: [null != n ? (0, r.jsx)(a.zxk, {
            fullWidth: !0,
            size: a.zxk.Sizes.SMALL,
            color: s,
            onClick: this.handleConfirmClick,
            className: u.button,
            innerClassName: u.innerText,
            children: null != t ? t : d.NW.string(d.t.BddRzc)
          }) : null, null != i ? (0, r.jsx)(a.zxk, {
            fullWidth: !0,
            size: a.zxk.Sizes.SMALL,
            look: c,
            color: l,
            onClick: this.handleCancelClick,
            className: u.button,
            children: null != e ? e : d.NW.string(d.t["ETE/oK"])
          }) : null]
        })]
      }, "footer-button-content")
    }
    return this.renderHint()
  }
  renderIcon() {
    let {
      icon: e
    } = this.props;
    return null == e ? null : "string" == typeof e ? (0, r.jsx)(a.qEK, {
      src: e,
      size: a.EFr.SIZE_40,
      className: u.avatar,
      "aria-hidden": !0
    }) : (0, r.jsx)("div", {
      className: u.avatar,
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
      className: u.content,
      children: [this.renderIcon(), (0, r.jsxs)("div", {
        className: u.details,
        children: [(0, r.jsx)("div", {
          className: u.title,
          children: "function" == typeof t ? t(this.handleDismiss) : t
        }), null != e ? (0, r.jsx)("div", {
          className: l()(u.body, h.marginTop4),
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
    } = this, i = null != e ? a.P3F : "div";
    return (0, r.jsxs)(i, {
      onMouseOver: n ? null : this.handleMouseEnter,
      onFocus: n ? null : this.handleMouseEnter,
      onClick: e,
      className: l()(u.container, {
        [u.themePrimary]: !0,
        [u.clickable]: null != e && !t
      }),
      children: [this.renderCloseButton(), this.renderContent(), this.renderFooter(), t ? (0, r.jsx)(g, {}) : null]
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
        expanded: !0
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
p(v, "defaultProps", {
  maxBodyLines: void 0,
  expand: !1,
  disabled: !1
});
let O = v