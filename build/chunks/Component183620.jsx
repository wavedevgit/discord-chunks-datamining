/** Chunk was on web.js **/
/** chunk id: 183620, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk816814 = require("./816814.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk44463 = require("./44463.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class f extends Chunk473749.PureComponent {
  render() {
    let {
      transitionState: e
    } = this.props, {
      code: t,
      errorMessage: n,
      retrySuccess: i
    } = this.state, a = Chunk473749 ? (0, Chunk54381.jsx)(Chunk481060.Zbd, {
      type: Chunk481060.Zbd.Types.SUCCESS,
      className: Chunk44463.card,
      children: (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-md/normal",
        children: Chunk388032.intl.string(Chunk388032.t.j4qu8n)
      })
    }) : null;
    return (0, Chunk54381.jsx)(Chunk481060.Y0X, {
      transitionState: module,
      parentComponent: "MFAConfirm",
      children: (0, Chunk54381.jsxs)("form", {
        onSubmit: this.handleSubmit,
        children: [(0, Chunk54381.jsx)(Chunk481060.xBx, {
          separator: false,
          children: (0, Chunk54381.jsx)(Chunk481060.Heading, {
            variant: "heading-lg/semibold",
            children: Chunk388032.intl.string(Chunk388032.t["mGppp/"])
          })
        }), (0, Chunk54381.jsxs)(Chunk481060.hzk, {
          children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
            color: "text-default",
            variant: "text-md/normal",
            className: Chunk44463.spacing,
            children: Chunk388032.intl.string(Chunk388032.t["37S9yU"])
          }), Chunk120356, (0, Chunk54381.jsxs)("div", {
            className: Chunk44463.spacing,
            children: [(0, Chunk54381.jsx)(Chunk481060.oil, {
              inputRef: this.setRef,
              label: Chunk388032.intl.string(Chunk388032.t.TjGb4Q),
              onChange: this.handleCodeChange,
              maxLength: 8,
              value: exports,
              autoComplete: "one-time-code",
              autoFocus: true
            }), null != this.state.errorMessage && "" !== this.state.errorMessage ? (0, Chunk54381.jsx)(Chunk481060.Text, {
              color: "text-feedback-critical",
              variant: "text-xs/normal",
              className: Chunk44463.error,
              children: require
            }) : null, (0, Chunk54381.jsxs)(Chunk481060.Text, {
              className: o()(Chunk44463.__invalid_submitText, Chunk44463.spacing),
              variant: "text-sm/normal",
              children: [(0, Chunk54381.jsx)("br", {}), (0, Chunk54381.jsx)(Chunk481060.P3F, {
                className: o()(Chunk44463.spacing, Chunk44463.__invalid_link),
                onClick: this.handleRetry,
                children: (0, Chunk54381.jsx)(Chunk481060.Anchor, {
                  children: Chunk388032.intl.string(Chunk388032.t.PZgmxv)
                })
              })]
            })]
          })]
        }), (0, Chunk54381.jsx)(Chunk481060.mzw, {
          children: (0, Chunk54381.jsxs)(Chunk481060.ButtonGroup, {
            direction: "horizontal-reverse",
            children: [(0, Chunk54381.jsx)(Chunk481060.Button, {
              variant: "primary",
              text: Chunk388032.intl.string(Chunk388032.t.piW6YS),
              type: "submit",
              disabled: this.state.isLoading || 0 === exports.length
            }), (0, Chunk54381.jsx)(Chunk481060.Button, {
              variant: "secondary",
              text: Chunk388032.intl.string(Chunk388032.t["ETE/oC"]),
              onClick: this.props.onClose,
              disabled: this.state.isLoading
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
      retrySuccess: false,
      isLoading: false
    }), d(this, "setRef", e => {
      this._input = e
    }), d(this, "handleRetry", async () => {
      await l.Z.sendMFABackupCodesVerificationKeyEmail(this.props.password), this.setState({
        retrySuccess: true
      })
    }), d(this, "handleSubmit", async e => {
      e.preventDefault(), this.setState({
        isLoading: true
      });
      try {
        await l.Z.confirmViewBackupCodes(this.state.code, false), this.props.onClose()
      } catch (e) {
        if (null == e.body) return;
        e.body.message && this.setState({
          errorMessage: e.body.message
        })
      } finally {
        this.setState({
          isLoading: false
        })
      }
    }), d(this, "handleCodeChange", e => {
      this.setState({
        code: e
      })
    })
  }
}