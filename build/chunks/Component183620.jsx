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
    } = this.state, s = i ? (0, r.jsx)(o.Zbd, {
      type: o.Zbd.Types.SUCCESS,
      className: c.card,
      children: (0, r.jsx)(o.Text, {
        variant: "text-md/normal",
        children: l.intl.string(l.t.j4qu8n)
      })
    }) : null;
    return (0, r.jsx)(a.Modal, {
      title: l.intl.string(l.t["mGppp/"]),
      actions: [{
        text: l.intl.string(l.t["ETE/oC"]),
        onClick: this.props.onClose,
        variant: "secondary",
        disabled: this.state.isLoading
      }, {
        text: l.intl.string(l.t.piW6YS),
        type: "submit",
        disabled: this.state.isLoading || 0 === t.length,
        onClick: this.handleSubmit
      }],
      onClose: this.props.onClose,
      transitionState: e,
      children: (0, r.jsxs)(o.Kqy, {
        direction: "vertical",
        gap: 8,
        children: [(0, r.jsx)(o.Text, {
          color: "text-default",
          variant: "text-md/normal",
          className: c.spacing,
          children: l.intl.string(l.t["37S9yU"])
        }), s, (0, r.jsx)(o.oil, {
          inputRef: this.setRef,
          label: l.intl.string(l.t.TjGb4Q),
          onChange: this.handleCodeChange,
          maxLength: 8,
          value: t,
          autoComplete: "one-time-code",
          autoFocus: true,
          error: n
        }), (0, r.jsx)(o.Text, {
          variant: "text-sm/normal",
          children: (0, r.jsx)(o.P3F, {
            onClick: this.handleRetry,
            children: (0, r.jsx)(o.eee, {
              children: l.intl.string(l.t.PZgmxv)
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