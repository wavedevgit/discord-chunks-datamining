/** Chunk was on web.js **/
/** chunk id: 455279, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y,
  c: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk879443 = require("./879443.js"),
  l = require.n(Chunk879443),
  Chunk392711 = require("./392711.js"),
  u = require.n(Chunk392711),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk13140 = require("./13140.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk151028 = require("./151028.js");

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
  DEFAULT: Chunk151028.__invalid_default,
  RECORDING: Chunk151028.recording
};
class b extends Chunk647438.PureComponent {
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
      a = (0, Chunk13140.BB)(require, true);
    return e = "RECORDING" === exports ? Chunk388032.intl.string(Chunk388032.t.bmOri0) : 0 === require.length ? Chunk388032.intl.string(Chunk388032.t.co3wt9) : Chunk388032.intl.string(Chunk388032.t.idFMvH), (0, Chunk951288.jsx)(Chunk481060.tEY, {
      focusTarget: this._inputRef,
      ringTarget: this._containerRef,
      children: (0, Chunk951288.jsx)("div", {
        onClick: this.handleClick,
        onMouseDown: this.handleMouseDown,
        ref: this._containerRef,
        className: o()(Chunk151028.recorderContainer, E[exports], {
          [Chunk151028.containerDisabled]: Chunk647438
        }),
        children: (0, Chunk951288.jsxs)(Chunk600164.Z, {
          className: Chunk151028.recorderLayout,
          children: [(0, Chunk951288.jsx)(Chunk600164.Z.Child, {
            className: Chunk151028.keybindInput,
            children: (0, Chunk951288.jsx)("input", {
              id: this._inputId,
              placeholder: Chunk388032.intl.string(Chunk388032.t.nWRdnl),
              type: "text",
              ref: this.setInputRef,
              readOnly: true,
              value: Chunk120356,
              disabled: "RECORDING" !== this.props.mode || Chunk647438
            })
          }), (0, Chunk951288.jsx)("div", {
            className: Chunk151028.buttonContainer,
            children: (0, Chunk951288.jsx)(Chunk481060.Button, {
              size: "sm",
              variant: "RECORDING" === this.props.mode ? "critical-secondary" : "secondary",
              text: module,
              onClick: e => {
                e.stopPropagation(), e.preventDefault(), this.handleClick(e)
              },
              disabled: Chunk647438
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
let y = b