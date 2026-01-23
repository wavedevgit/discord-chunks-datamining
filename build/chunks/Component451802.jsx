/** Chunk was on web.js **/
/** chunk id: 451802, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => b,
  E: () => g
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk507392 = require("./507392.js"),
  l = require.n(Chunk507392),
  Chunk735438 = require("./735438.js"),
  u = require.n(Chunk735438),
  Chunk397927 = require("./397927.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk350535 = require("./350535.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk181204 = require("./181204.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var g = function(e) {
  return e.DEFAULT = "DEFAULT", e.RECORDING = "RECORDING", e
}({});
let E = {
  DEFAULT: Chunk181204.__invalid_default,
  RECORDING: Chunk181204.oz
};
class y extends Chunk64700.PureComponent {
  componentWillUnmount() {
    null != this._unregisterNativeRecorder && this._unregisterNativeRecorder()
  }
  componentDidUpdate(e) {
    let {
      mode: t
    } = this.props, {
      mode: n
    } = e;
    if (n === t) return;
    let {
      _inputRef: r
    } = this;
    if (null == r.current) return;
    let {
      activeElement: i
    } = document;
    "DEFAULT" === t && r.current === i && r.current.blur(), "RECORDING" === t && r.current !== i && r.current.focus()
  }
  render() {
    let e, {
        mode: t,
        value: n,
        disabled: i
      } = this.props,
      a = (0, p.dI)(n, true);
    return e = "RECORDING" === t ? _.intl.string(_.t.bmOri0) : 0 === n.length ? _.intl.string(_.t.co3wt9) : _.intl.string(_.t.idFMvH), (0, r.jsx)(d.vN3, {
      focusTarget: this._inputRef,
      ringTarget: this._containerRef,
      children: (0, r.jsx)("div", {
        onClick: this.handleClick,
        onMouseDown: this.handleMouseDown,
        ref: this._containerRef,
        className: s()(h.Qm, E[t], {
          [h.Qz]: i
        }),
        children: (0, r.jsxs)(f.A, {
          className: h.Pp,
          children: [(0, r.jsx)(f.A.Child, {
            className: h.bZ,
            children: (0, r.jsx)("input", {
              id: this._inputId,
              placeholder: _.intl.string(_.t.nWRdnl),
              type: "text",
              ref: this.setInputRef,
              readOnly: true,
              value: a,
              disabled: "RECORDING" !== this.props.mode || i
            })
          }), (0, r.jsx)("div", {
            className: h.UD,
            children: (0, r.jsx)(d.Button, {
              size: "sm",
              variant: "RECORDING" === this.props.mode ? "critical-secondary" : "secondary",
              text: e,
              onClick: e => {
                e.stopPropagation(), e.preventDefault(), this.handleClick(e)
              },
              disabled: i
            })
          })]
        })
      })
    })
  }
  constructor(...e) {
    super(...e), m(this, "_inputId", u().uniqueId("key-recorder-")), m(this, "_unregisterNativeRecorder", null), m(this, "_mousedownMode", null), m(this, "_inputRef", i.createRef()), m(this, "_containerRef", i.createRef()), m(this, "setInputRef", e => {
      var t, n;
      let {
        registerNativeRecorder: r,
        onChange: i
      } = this.props;
      if (this._inputRef.current = e, null == (t = (n = this)._unregisterNativeRecorder) || t.call(n), null != e)
        if (null != r && null != i) try {
          this._unregisterNativeRecorder = r(e.id, i)
        } catch (e) {
          this._unregisterNativeRecorder = null
        } else null != i && (new(l())(e).handleKey = i)
    }), m(this, "handleClick", e => {
      e.stopPropagation(), e.preventDefault();
      let {
        onClick: t,
        disableOnClickWhileRecording: n
      } = this.props;
      n && "RECORDING" === this._mousedownMode || t()
    }), m(this, "handleMouseDown", () => {
      this._mousedownMode = this.props.mode
    })
  }
}
let b = y