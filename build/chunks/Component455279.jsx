/** Chunk was on 58120 **/
/** chunk id: 455279, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => D,
  c: () => _
}), require("./388685.js");
var i, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk879443 = require("./879443.js"),
  c = require.n(Chunk879443),
  Chunk392711 = require("./392711.js"),
  u = require.n(Chunk392711),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk13140 = require("./13140.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk151028 = require("./151028.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var _ = ((i = {}).DEFAULT = "DEFAULT", i.RECORDING = "RECORDING", i);
let E = {
  DEFAULT: Chunk151028.__invalid_default,
  RECORDING: Chunk151028.recording
};
class y extends Chunk647438.PureComponent {
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
      _inputRef: i
    } = this;
    if (null == i.current) return;
    let {
      activeElement: r
    } = document;
    "DEFAULT" === t && i.current === r && i.current.blur(), "RECORDING" === t && i.current !== r && i.current.focus()
  }
  render() {
    let e, {
        mode: t,
        value: n,
        disabled: i
      } = this.props,
      s = (0, Chunk13140.BB)(require, true);
    return e = "RECORDING" === exports ? Chunk388032.intl.string(Chunk388032.t.bmOri4) : 0 === require.length ? Chunk388032.intl.string(Chunk388032.t.co3wt7) : Chunk388032.intl.string(Chunk388032.t.idFMvL), (0, Chunk951288.jsx)(Chunk481060.tEY, {
      focusTarget: this._inputRef,
      ringTarget: this._containerRef,
      children: (0, Chunk951288.jsx)("div", {
        onClick: this.handleClick,
        onMouseDown: this.handleMouseDown,
        ref: this._containerRef,
        className: a()(Chunk151028.recorderContainer, E[exports], {
          [Chunk151028.containerDisabled]: i
        }),
        children: (0, Chunk951288.jsxs)(Chunk600164.Z, {
          className: Chunk151028.recorderLayout,
          children: [(0, Chunk951288.jsx)(Chunk600164.Z.Child, {
            className: Chunk151028.keybindInput,
            children: (0, Chunk951288.jsx)("input", {
              id: this._inputId,
              placeholder: Chunk388032.intl.string(Chunk388032.t.nWRdnp),
              type: "text",
              ref: this.setInputRef,
              readOnly: true,
              value: Chunk647438,
              disabled: "RECORDING" !== this.props.mode || i
            })
          }), (0, Chunk951288.jsx)("div", {
            className: Chunk151028.buttonContainer,
            children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
              size: "sm",
              variant: "RECORDING" === this.props.mode ? "critical-secondary" : "secondary",
              text: module,
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
    super(...e), g(this, "_inputId", u().uniqueId("key-recorder-")), g(this, "_unregisterNativeRecorder", null), g(this, "_mousedownMode", null), g(this, "_inputRef", s.createRef()), g(this, "_containerRef", s.createRef()), g(this, "setInputRef", e => {
      var t;
      let {
        registerNativeRecorder: n,
        onChange: i
      } = this.props;
      if (this._inputRef.current = e, null == (t = this._unregisterNativeRecorder) || t.call(this), null != e)
        if (null != n && null != i) try {
          this._unregisterNativeRecorder = n(e.id, i)
        } catch (e) {
          this._unregisterNativeRecorder = null
        } else null != i && (new(c())(e).handleKey = i)
    }), g(this, "handleClick", e => {
      e.stopPropagation(), e.preventDefault();
      let {
        onClick: t,
        disableOnClickWhileRecording: n
      } = this.props;
      n && "RECORDING" === this._mousedownMode || t()
    }), g(this, "handleMouseDown", () => {
      this._mousedownMode = this.props.mode
    })
  }
}
let D = y