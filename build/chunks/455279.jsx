/** Chunk was on 75708 **/
/** chunk id: 455279, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E,
  c: () => x
}), require("./388685.js");
var i, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk879443 = require("./879443.js"),
  c = require.n(Chunk879443),
  Chunk392711 = require("./392711.js"),
  u = require.n(Chunk392711),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.js"),
  Chunk13140 = require("./13140.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk556707 = require("./556707.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var x = ((i = {}).DEFAULT = "DEFAULT", i.RECORDING = "RECORDING", i);
let _ = {
  DEFAULT: Chunk556707.__invalid_default,
  RECORDING: Chunk556707.recording
};
class j extends Chunk73800.PureComponent {
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
    return e = "RECORDING" === exports ? Chunk388032.intl.string(Chunk388032.t.bmOri4) : 0 === require.length ? Chunk388032.intl.string(Chunk388032.t.co3wt7) : Chunk388032.intl.string(Chunk388032.t.idFMvL), <Chunk481060.tEY focusTarget={this._inputRef} ringTarget={this._containerRef}><div onClick={this.handleClick} onMouseDown={this.handleMouseDown} ref={this._containerRef} className={l()(Chunk556707.recorderContainer, _[exports], {
          [Chunk556707.containerDisabled]: i
        })}><Chunk600164.Z className={Chunk556707.recorderLayout}>{<Chunk600164.Z.Child className={Chunk556707.keybindInput}><input id={this._inputId} placeholder={Chunk388032.intl.string(Chunk388032.t.nWRdnp)} type={"text"} ref={this.setInputRef} readOnly={true} value={Chunk73800} disabled={"RECORDING" !== this.props.mode || i} /></Chunk600164.Z.Child>}{<div className={Chunk556707.buttonContainer}><Chunk481060.zxk size={"sm"} variant={"RECORDING" === this.props.mode ? "critical-secondary" : "secondary"} text={module} onClick={e => {
                e.stopPropagation(), e.preventDefault(), this.handleClick(e)
              }} disabled={i} /></div>}</Chunk600164.Z></div></Chunk481060.tEY>
  }
  constructor(...e) {
    super(...e), b(this, "_inputId", u().uniqueId("key-recorder-")), b(this, "_unregisterNativeRecorder", null), b(this, "_mousedownMode", null), b(this, "_inputRef", s.createRef()), b(this, "_containerRef", s.createRef()), b(this, "setInputRef", e => {
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
    }), b(this, "handleClick", e => {
      e.stopPropagation(), e.preventDefault();
      let {
        onClick: t,
        disableOnClickWhileRecording: n
      } = this.props;
      n && "RECORDING" === this._mousedownMode || t()
    }), b(this, "handleMouseDown", () => {
      this._mousedownMode = this.props.mode
    })
  }
}
let E = j