/** Chunk was on 63141 **/
/** chunk id: 593481, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  QR: () => O,
  Yj: () => v,
  ZP: () => b
});
var i, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk294033 = require("./294033.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk987083 = require("./987083.js"),
  Chunk20493 = require("./20493.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let g = e => e.stopPropagation(),
  m = () => <div className={Chunk987083.clickBlocker} onClick={g} onMouseEnter={g} onMouseOver={g} />,
  y = () => <div className={Chunk987083.divider} />,
  O = (e, t, n) => <div className={h.keybindMessage}>{u.intl.format(n, {
      keybind: t,
      keybindHook: (e, n) => (0, r.jsx)(d.Z, {
        keybind: t,
        className: h.keybind
      }, n)
    })}</div>,
  v = (e, t) => <div className={h.hintSubtleText}>{t}</div>;
class _ extends(i = Chunk73800.PureComponent) {
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
    return "function" == typeof this.props.title ? null : <Chunk755721.zx look={Chunk755721.zx.Looks.BLANK} size={Chunk755721.zx.Sizes.NONE} onClick={this.handleDismiss} className={Chunk987083.dismissButton} aria-label={Chunk388032.intl.string(Chunk388032.t.LnEgqa)}><Chunk481060.Dio size={"xs"} color={"currentColor"} className={Chunk987083.dismissIcon} /></Chunk755721.zx>
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
      return null != i ? <Chunk73800.Fragment>{<y />}{i}</Chunk73800.Fragment> : null
    }
    return <Chunk73800.Fragment>{<y />}{<div className={"string" == typeof module ? Chunk987083.hintText : true}>{module}</div>}</Chunk73800.Fragment>
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
        expanded: s
      }
    } = this;
    if (!s) return null != Chunk120356 ? this.renderHint() : null;
    if (null != this.props.renderFooter) {
      let e = this.props.renderFooter(s);
      return null != module ? <Chunk73800.Fragment>{<y />}{module}</Chunk73800.Fragment> : null
    }
    if (null != require || null != i) {
      let l = Chunk755721.zx.Colors.GREEN,
        s = Chunk755721.zx.Colors.PRIMARY,
        c = Chunk755721.zx.Looks.FILLED;
      return <Chunk73800.Fragment>{<y />}{<div className={Chunk987083.buttonContainer}>{null != require ? <Chunk755721.zx fullWidth={true} size={Chunk755721.zx.Sizes.SMALL} color={Chunk120356} onClick={this.handleConfirmClick} className={Chunk987083.button} innerClassName={Chunk987083.innerText}>{null != exports ? exports : Chunk388032.intl.string(Chunk388032.t.BddRzc)}</Chunk755721.zx> : null}{null != i ? <Chunk755721.zx fullWidth={true} size={Chunk755721.zx.Sizes.SMALL} look={Chunk481060} color={s} onClick={this.handleCancelClick} className={Chunk987083.button}>{null != module ? module : Chunk388032.intl.string(Chunk388032.t["ETE/oK"])}</Chunk755721.zx> : null}</div>}</Chunk73800.Fragment>
    }
    return this.renderHint()
  }
  renderIcon() {
    let {
      icon: e
    } = this.props;
    return null == module ? null : "string" == typeof module ? <Chunk481060.qEK src={module} size={Chunk481060.EFr.SIZE_40} className={Chunk987083.avatar} aria-hidden={true} /> : <div className={Chunk987083.avatar}>{module}</div>
  }
  renderContent() {
    let {
      body: e,
      title: t,
      maxBodyLines: n
    } = this.props;
    return <div className={Chunk987083.content}>{this.renderIcon()}{<div className={Chunk987083.details}>{<div className={Chunk987083.title}>{"function" == typeof exports ? exports(this.handleDismiss) : exports}</div>}{null != module ? <div className={s()(Chunk987083.body, Chunk20493.marginTop4)} style={{
            WebkitLineClamp: require,
            lineClamp: require
          }}>{module}</div> : null}</div>}</div>
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
    return <i onMouseOver={require ? true : this.handleMouseEnter} onFocus={require ? true : this.handleMouseEnter} onClick={null != module ? module : true} className={s()(Chunk987083.container, {
        [Chunk987083.themePrimary]: true,
        [Chunk987083.clickable]: null != module && !exports
      })}>{this.renderCloseButton()}{this.renderContent()}{this.renderFooter()}{exports ? <m /> : null}</i>
  }
  constructor(e) {
    super(e), f(this, "handleDismiss", e => {
      e.stopPropagation();
      let {
        onDismissClick: t
      } = this.props;
      null == t || t(e)
    }), f(this, "handleConfirmClick", e => {
      e.stopPropagation();
      let {
        onConfirmClick: t
      } = this.props;
      null == t || t(e)
    }), f(this, "handleCancelClick", e => {
      e.stopPropagation();
      let {
        onCancelClick: t
      } = this.props;
      null == t || t(e)
    }), f(this, "handleMouseEnter", () => {
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
f(_, "defaultProps", {
  maxBodyLines: true,
  expand: false,
  disabled: false
});
let b = _