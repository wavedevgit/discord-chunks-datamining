/** Chunk was on web.js **/
/** chunk id: 518142, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk189213 = require("./189213.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk98207 = require("./98207.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk876692 = require("./876692.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class d extends Chunk64700.PureComponent {
  render() {
    let {
      transitionState: e
    } = this.props, {
      code: t,
      errorMessage: n,
      retrySuccess: i
    } = this.state, o = i ? (0, r.jsx)(s.ZpM, {
      type: s.ZpM.Types.SUCCESS,
      className: c.Nr,
      children: (0, r.jsx)(s.Text, {
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
      children: (0, r.jsxs)(s.BJc, {
        direction: "vertical",
        gap: 8,
        children: [(0, r.jsx)(s.Text, {
          color: "text-default",
          variant: "text-md/normal",
          className: c.YK,
          children: l.intl.string(l.t["37S9yU"])
        }), o, (0, r.jsx)(s.ksK, {
          inputRef: this.setRef,
          label: l.intl.string(l.t.TjGb4Q),
          onChange: this.handleCodeChange,
          maxLength: 8,
          value: t,
          autoComplete: "one-time-code",
          autoFocus: true,
          error: n
        }), (0, r.jsx)(s.Text, {
          variant: "text-sm/normal",
          children: (0, r.jsx)(s.DUT, {
            onClick: this.handleRetry,
            children: (0, r.jsx)(s.MzZ, {
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
      await o.A.sendMFABackupCodesVerificationKeyEmail(this.props.password), this.setState({
        retrySuccess: true
      })
    }), u(this, "handleSubmit", async e => {
      e.preventDefault(), this.setState({
        isLoading: true
      });
      try {
        await o.A.confirmViewBackupCodes(this.state.code, false), this.props.onClose()
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