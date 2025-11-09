/** Chunk was on web.js **/
/** chunk id: 183620, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk140909 = require("./140909.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class f extends(r = Chunk647438.PureComponent) {
  render() {
    var e;
    let {
      title: t,
      actionText: n,
      children: r,
      error: o,
      isLoading: d,
      maxLength: f,
      transitionState: _,
      helpMessage: p,
      retryPrompt: h,
      retrySuccessMessage: m
    } = this.props, {
      code: g,
      errorMessage: E,
      retrySuccess: b
    } = this.state, y = Chunk647438.Children.count(r) > 0 ? (0, Chunk951288.jsx)(Chunk481060.Zbd, {
      type: Chunk481060.Zbd.Types.WARNING,
      className: Chunk140909.card,
      children: (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-md/normal",
        children: r
      })
    }) : null, O = null != h ? (0, Chunk951288.jsxs)(Chunk481060.Text, {
      className: s()(Chunk140909.__invalid_submitText, Chunk140909.spacing),
      variant: "text-sm/normal",
      children: [(0, Chunk951288.jsx)("br", {}), (0, Chunk951288.jsx)(Chunk481060.P3F, {
        className: s()(Chunk140909.spacing, Chunk140909.__invalid_link),
        onClick: this.handleRetry,
        children: (0, Chunk951288.jsx)(Chunk481060.Anchor, {
          children: h
        })
      })]
    }) : null, v = b ? (0, Chunk951288.jsx)(Chunk481060.Zbd, {
      type: Chunk481060.Zbd.Types.SUCCESS,
      className: Chunk140909.card,
      children: (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-md/normal",
        children: m
      })
    }) : null;
    return (0, Chunk951288.jsx)(Chunk481060.Y0X, {
      transitionState: _,
      parentComponent: "MFAConfirm",
      children: (0, Chunk951288.jsxs)("form", {
        onSubmit: this.handleSubmit,
        children: [(0, Chunk951288.jsx)(Chunk481060.xBx, {
          separator: false,
          children: (0, Chunk951288.jsx)(Chunk481060.Heading, {
            variant: "heading-lg/semibold",
            children: exports
          })
        }), (0, Chunk951288.jsxs)(Chunk481060.hzk, {
          children: [null != p ? (0, Chunk951288.jsx)(Chunk481060.Text, {
            color: "text-default",
            variant: "text-md/normal",
            className: Chunk140909.spacing,
            children: p
          }) : null, y, v, (0, Chunk951288.jsxs)("div", {
            className: Chunk140909.spacing,
            children: [(0, Chunk951288.jsx)(Chunk481060.oil, {
              inputRef: this.setRef,
              label: this.getLabelText(),
              onChange: this.handleCodeChange,
              placeholder: null != (e = this.getPlaceholder()) ? module : true,
              maxLength: null != f ? f : 10,
              value: g,
              autoComplete: "one-time-code",
              autoFocus: true
            }), this.errorPresent() ? (0, Chunk951288.jsx)(Chunk481060.Text, {
              color: "text-danger",
              variant: "text-xs/normal",
              className: Chunk140909.error,
              children: null != Chunk120356 ? Chunk120356 : E
            }) : null, O]
          })]
        }), (0, Chunk951288.jsx)(Chunk481060.mzw, {
          children: (0, Chunk951288.jsxs)(Chunk481060.ButtonGroup, {
            direction: "horizontal-reverse",
            children: [(0, Chunk951288.jsx)(Chunk481060.Button, {
              variant: "primary",
              text: null != require ? require : Chunk388032.intl.string(Chunk388032.t["cY+Oob"]),
              type: "submit",
              disabled: d || 0 === g.length
            }), (0, Chunk951288.jsx)(Chunk481060.Button, {
              variant: "secondary",
              text: Chunk388032.intl.string(Chunk388032.t["ETE/oC"]),
              onClick: this.handleCancel,
              disabled: d
            })]
          })
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), d(this, "_input", true), d(this, "state", {
      code: "",
      errorMessage: "",
      retrySuccess: false
    }), d(this, "setRef", e => {
      this._input = e
    }), d(this, "getLabelText", () => {
      var e;
      return null != (e = this.props.label) ? e : this.props.disallowBackupCodes ? c.intl.string(c.t.HZPBOd) : c.intl.string(c.t["+NQopF"])
    }), d(this, "getSupportedCodeTypes", () => this.props.disallowBackupCodes ? c.intl.string(c.t.tARzgo) : c.intl.string(c.t.yO4lAM)), d(this, "getPlaceholder", () => {
      var e;
      return this.props.forceNoPlaceholder ? null : null != (e = this.props.placeholder) ? e : this.getSupportedCodeTypes()
    }), d(this, "errorPresent", () => null != this.props.error && "" !== this.props.error || null != this.state.errorMessage && "" !== this.state.errorMessage), d(this, "handleRetry", () => {
      let {
        onRetry: e
      } = this.props;
      null == e || e().then(() => this.setState({
        retrySuccess: true
      }))
    }), d(this, "handleSubmit", e => {
      e.preventDefault();
      let {
        handleSubmit: t,
        onError: n
      } = this.props;
      t(this.state.code).catch(e => {
        null != e.body && (null == n || n(e.body), e.body.message && this.setState({
          errorMessage: e.body.message
        }))
      })
    }), d(this, "handleCancel", () => {
      let {
        onClose: e,
        handleEarlyClose: t
      } = this.props;
      e(), null == t || t()
    }), d(this, "handleCodeChange", e => {
      this.setState({
        code: e
      })
    })
  }
}
d(f, "defaultProps", {
  btnClass: "",
  isLoading: false,
  disallowBackupCodes: false,
  error: null,
  forceNoPlaceholder: false
});
let _ = f