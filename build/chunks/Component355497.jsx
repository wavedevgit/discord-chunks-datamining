/** Chunk was on web.js **/
/** chunk id: 355497, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./388685.js"), require("./457542.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk718325 = require("./718325.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class u extends(r = Chunk473749.PureComponent) {
  render() {
    let {
      title: e,
      actionText: t,
      children: n,
      transitionState: r
    } = this.props, {
      error: c,
      isLoading: u,
      value: d
    } = this.state, f = Chunk473749.Children.count(require) > 0 ? (0, Chunk54381.jsx)(Chunk481060.Zbd, {
      type: Chunk481060.Zbd.Types.WARNING,
      className: Chunk718325.card,
      children: (0, Chunk54381.jsx)(Chunk481060.Text, {
        color: "currentColor",
        variant: "text-md/normal",
        children: require
      })
    }) : null;
    return (0, Chunk54381.jsx)(Chunk481060.Y0X, {
      transitionState: r,
      parentComponent: "PasswordConfirm",
      children: (0, Chunk54381.jsxs)("form", {
        onSubmit: this.handleSubmit,
        children: [(0, Chunk54381.jsx)(Chunk481060.xBx, {
          separator: false,
          children: (0, Chunk54381.jsx)(Chunk481060.Heading, {
            variant: "heading-lg/semibold",
            children: module
          })
        }), (0, Chunk54381.jsxs)(Chunk481060.hzk, {
          children: [f, (0, Chunk54381.jsxs)("div", {
            className: Chunk718325.spacing,
            children: [(0, Chunk54381.jsx)(Chunk481060.oil, {
              type: "password",
              label: Chunk388032.intl.string(Chunk388032.t["CIGa+7"]),
              autoComplete: "current-password",
              autoFocus: true,
              value: d,
              onChange: this.handlePasswordChange,
              required: true
            }), null != c && "" !== c ? (0, Chunk54381.jsxs)(Chunk481060.Text, {
              variant: "text-xs/normal",
              color: "text-feedback-critical",
              className: Chunk718325.error,
              children: [" ", c, " "]
            }) : null]
          })]
        }), (0, Chunk54381.jsx)(Chunk481060.mzw, {
          children: (0, Chunk54381.jsxs)(Chunk481060.ButtonGroup, {
            direction: "horizontal-reverse",
            children: [(0, Chunk54381.jsx)(Chunk481060.Button, {
              variant: "primary",
              text: null != exports ? exports : Chunk388032.intl.string(Chunk388032.t["cY+Oob"]),
              type: "submit",
              disabled: u || 0 === d.length
            }), (0, Chunk54381.jsx)(Chunk481060.Button, {
              variant: "secondary",
              text: Chunk388032.intl.string(Chunk388032.t["ETE/oC"]),
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
        onClose: r,
        onError: i
      } = this.props;
      this.setState({
        isLoading: true
      }), n(t).then(e => r(null != e ? e : true), e => {
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
c(u, "key", () => "password-confirm-modal");
let d = u