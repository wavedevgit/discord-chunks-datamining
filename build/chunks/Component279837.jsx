/** Chunk was on 76540 **/
/** chunk id: 279837, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js"), require("./457542.js");
var s, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk405289 = require("./405289.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class h extends(s = Chunk73800.PureComponent) {
  render() {
    let {
      title: e,
      actionText: t,
      children: n,
      transitionState: s
    } = this.props, {
      error: c,
      isLoading: h,
      value: u
    } = this.state, d = Chunk73800.Children.count(require) > 0 ? (0, Chunk255367.jsx)(Chunk481060.Zbd, {
      type: Chunk481060.Zbd.Types.WARNING,
      className: Chunk405289.card,
      children: (0, Chunk255367.jsx)(Chunk481060.Text, {
        color: "currentColor",
        variant: "text-md/normal",
        children: require
      })
    }) : null;
    return (0, Chunk255367.jsx)(Chunk481060.Y0X, {
      transitionState: s,
      parentComponent: "PasswordConfirm",
      children: (0, Chunk255367.jsxs)("form", {
        onSubmit: this.handleSubmit,
        children: [(0, Chunk255367.jsx)(Chunk481060.xBx, {
          separator: false,
          children: (0, Chunk255367.jsx)(Chunk481060.X6q, {
            variant: "heading-lg/semibold",
            children: module
          })
        }), (0, Chunk255367.jsxs)(Chunk481060.hzk, {
          children: [d, (0, Chunk255367.jsxs)(Chunk481060.xJW, {
            title: Chunk388032.intl.string(Chunk388032.t["CIGa+/"]),
            className: Chunk405289.spacing,
            children: [(0, Chunk255367.jsx)(Chunk481060.oil, {
              type: "password",
              autoComplete: "current-password",
              autoFocus: true,
              value: u,
              onChange: this.handlePasswordChange,
              required: true
            }), null != c && "" !== c ? (0, Chunk255367.jsxs)(Chunk481060.Text, {
              variant: "text-xs/normal",
              color: "text-danger",
              className: Chunk405289.error,
              children: [" ", c, " "]
            }) : null]
          })]
        }), (0, Chunk255367.jsx)(Chunk481060.mzw, {
          children: (0, Chunk255367.jsxs)(Chunk481060.hE2, {
            direction: "horizontal-reverse",
            children: [(0, Chunk255367.jsx)(Chunk481060.zxk, {
              variant: "primary",
              text: null != exports ? exports : Chunk388032.intl.string(Chunk388032.t["cY+Ooa"]),
              type: "submit",
              disabled: h || 0 === u.length
            }), (0, Chunk255367.jsx)(Chunk481060.zxk, {
              variant: "secondary",
              text: Chunk388032.intl.string(Chunk388032.t["ETE/oK"]),
              onClick: this.handleCancel
            })]
          })
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), c(this, "state", {
      value: "",
      error: null,
      isLoading: false
    }), c(this, "handleSubmit", e => {
      e.preventDefault();
      let {
        value: t
      } = this.state, {
        handleSubmit: n,
        onClose: s,
        onError: i
      } = this.props;
      this.setState({
        isLoading: true
      }), n(t).then(e => s(null != e ? e : true), e => {
        null != e.body && (null == i || i(e.body), !this.shouldSkipErrorMsgRender(e.body) && (e.body.password ? this.setState({
          error: e.body.password,
          isLoading: false
        }) : e.body.message && this.setState({
          error: e.body.message,
          isLoading: false
        })))
      }).finally(() => this.setState({
        isLoading: false
      }))
    }), c(this, "shouldSkipErrorMsgRender", e => {
      let {
        skipErrorMsgAbortCode: t
      } = this.props;
      return null != t && (null == e ? true : e.code) === t
    }), c(this, "handleCancel", () => {
      let {
        onClose: e
      } = this.props;
      e()
    }), c(this, "handlePasswordChange", e => {
      let {
        onPasswordChange: t
      } = this.props;
      null == t || t(e), this.setState({
        value: e
      })
    })
  }
}
c(h, "key", () => "password-confirm-modal");
let u = h