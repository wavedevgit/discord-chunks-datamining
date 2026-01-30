/** Chunk was on 78376 **/
/** chunk id: 451802, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => O,
  E: () => b
}), require("./896048.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk507392 = require("./507392.js"),
  c = require.n(Chunk507392),
  Chunk735438 = require("./735438.js"),
  u = require.n(Chunk735438),
  Chunk397927 = require("./397927.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk350535 = require("./350535.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk181204 = require("./181204.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var b = ((r = {}).DEFAULT = "DEFAULT", r.RECORDING = "RECORDING", r);
let h = {
  DEFAULT: Chunk181204.__invalid_default,
  RECORDING: Chunk181204.oz
};
class E extends Chunk64700.PureComponent {
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
        disabled: r
      } = this.props,
      l = (0, m.dI)(n, true);
    return e = "RECORDING" === t ? g.intl.string(g.t.bmOri0) : 0 === n.length ? g.intl.string(g.t.co3wt9) : g.intl.string(g.t.idFMvH), (0, i.jsx)(_.vN3, {
      focusTarget: this._inputRef,
      ringTarget: this._containerRef,
      children: (0, i.jsx)("div", {
        onClick: this.handleClick,
        onMouseDown: this.handleMouseDown,
        ref: this._containerRef,
        className: a()(A.Qm, h[t], {
          [A.Qz]: r
        }),
        children: (0, i.jsxs)(p.A, {
          className: A.Pp,
          children: [(0, i.jsx)(p.A.Child, {
            className: A.bZ,
            children: (0, i.jsx)("input", {
              id: this._inputId,
              placeholder: g.intl.string(g.t.nWRdnl),
              type: "text",
              ref: this.setInputRef,
              readOnly: true,
              value: l,
              disabled: "RECORDING" !== this.props.mode || r
            })
          }), (0, i.jsx)("div", {
            className: A.UD,
            children: (0, i.jsx)(_.Button, {
              size: "sm",
              variant: "RECORDING" === this.props.mode ? "critical-secondary" : "secondary",
              text: e,
              onClick: e => {
                e.stopPropagation(), e.preventDefault(), this.handleClick(e)
              },
              disabled: r
            })
          })]
        })
      })
    })
  }
  constructor(...e) {
    super(...e), f(this, "_inputId", u().uniqueId("key-recorder-")), f(this, "_unregisterNativeRecorder", null), f(this, "_mousedownMode", null), f(this, "_inputRef", l.createRef()), f(this, "_containerRef", l.createRef()), f(this, "setInputRef", e => {
      var t;
      let {
        registerNativeRecorder: n,
        onChange: r
      } = this.props;
      if (this._inputRef.current = e, null == (t = this._unregisterNativeRecorder) || t.call(this), null != e)
        if (null != n && null != r) try {
          this._unregisterNativeRecorder = n(e.id, r)
        } catch (e) {
          this._unregisterNativeRecorder = null
        } else null != r && (new(c())(e).handleKey = r)
    }), f(this, "handleClick", e => {
      e.stopPropagation(), e.preventDefault();
      let {
        onClick: t,
        disableOnClickWhileRecording: n
      } = this.props;
      n && "RECORDING" === this._mousedownMode || t()
    }), f(this, "handleMouseDown", () => {
      this._mousedownMode = this.props.mode
    })
  }
}
let O = E