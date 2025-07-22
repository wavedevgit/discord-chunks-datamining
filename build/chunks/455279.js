/** Chunk was on 58120 **/
n.d(t, {
  Z: () => D,
  c: () => _
}), n(388685);
var i, r = n(255367),
  s = n(73800),
  o = n(120356),
  a = n.n(o),
  l = n(879443),
  c = n.n(l),
  d = n(392711),
  u = n.n(d),
  h = n(481060),
  p = n(600164),
  b = n(13140),
  f = n(388032),
  m = n(556707);

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
var _ = ((i = {}).DEFAULT = "DEFAULT", i.RECORDING = "RECORDING", i);
let E = {
  DEFAULT: m.__invalid_default,
  RECORDING: m.recording
};
class y extends s.PureComponent {
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
      s = (0, b.BB)(n, !0);
    return e = "RECORDING" === t ? f.intl.string(f.t.bmOri4) : 0 === n.length ? f.intl.string(f.t.co3wt7) : f.intl.string(f.t.idFMvL), (0, r.jsx)(h.tEY, {
      focusTarget: this._inputRef,
      ringTarget: this._containerRef,
      children: (0, r.jsx)("div", {
        onClick: this.handleClick,
        onMouseDown: this.handleMouseDown,
        ref: this._containerRef,
        className: a()(m.recorderContainer, E[t], {
          [m.containerDisabled]: i
        }),
        children: (0, r.jsxs)(p.Z, {
          className: m.recorderLayout,
          children: [(0, r.jsx)(p.Z.Child, {
            className: m.keybindInput,
            children: (0, r.jsx)("input", {
              id: this._inputId,
              placeholder: f.intl.string(f.t.nWRdnp),
              type: "text",
              ref: this.setInputRef,
              readOnly: !0,
              value: s,
              disabled: "RECORDING" !== this.props.mode || i
            })
          }), (0, r.jsx)("div", {
            className: m.buttonContainer,
            children: (0, r.jsx)(h.zxk, {
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