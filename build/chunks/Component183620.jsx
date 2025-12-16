/** Chunk was on web.js **/
/** chunk id: 183620, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk775086 = require("./775086.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk816814 = require("./816814.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk44463 = require("./44463.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class d extends Chunk473749.PureComponent {
  render() {
    let {
      transitionState: e
    } = this.props, {
      code: t,
      errorMessage: n,
      retrySuccess: i
    } = this.state, s = Chunk473749 ? (0, Chunk54381.jsx)(Chunk481060.Zbd, {
      type: Chunk481060.Zbd.Types.SUCCESS,
      className: Chunk44463.card,
      children: (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-md/normal",
        children: Chunk388032.intl.string(Chunk388032.t.j4qu8n)
      })
    }) : null;
    return (0, Chunk54381.jsx)(Chunk775086.Modal, {
      title: Chunk388032.intl.string(Chunk388032.t["mGppp/"]),
      actions: [{
        text: Chunk388032.intl.string(Chunk388032.t["ETE/oC"]),
        onClick: this.props.onClose,
        variant: "secondary",
        disabled: this.state.isLoading
      }, {
        text: Chunk388032.intl.string(Chunk388032.t.piW6YS),
        type: "submit",
        disabled: this.state.isLoading || 0 === exports.length,
        onClick: this.handleSubmit
      }],
      onClose: this.props.onClose,
      transitionState: module,
      children: (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
        direction: "vertical",
        gap: 8,
        children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
          color: "text-default",
          variant: "text-md/normal",
          className: Chunk44463.spacing,
          children: Chunk388032.intl.string(Chunk388032.t["37S9yU"])
        }), Chunk816814, (0, Chunk54381.jsx)(Chunk481060.oil, {
          inputRef: this.setRef,
          label: Chunk388032.intl.string(Chunk388032.t.TjGb4Q),
          onChange: this.handleCodeChange,
          maxLength: 8,
          value: exports,
          autoComplete: "one-time-code",
          autoFocus: true,
          error: require
        }), (0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-sm/normal",
          children: (0, Chunk54381.jsx)(Chunk481060.P3F, {
            onClick: this.handleRetry,
            children: (0, Chunk54381.jsx)(Chunk481060.Anchor, {
              children: Chunk388032.intl.string(Chunk388032.t.PZgmxv)
            })
          })
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), u(this, "_input", true), u(this, "state", {
      code: "",
      errorMessage: "",
      retrySuccess: false,
      isLoading: false
    }), u(this, "setRef", e => {
      this._input = e
    }), u(this, "handleRetry", async () => {
      await s.Z.sendMFABackupCodesVerificationKeyEmail(this.props.password), this.setState({
        retrySuccess: true
      })
    }), u(this, "handleSubmit", async e => {
      e.preventDefault(), this.setState({
        isLoading: true
      });
      try {
        await s.Z.confirmViewBackupCodes(this.state.code, false), this.props.onClose()
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
    }), u(this, "handleCodeChange", e => {
      this.setState({
        code: e
      })
    })
  }
}