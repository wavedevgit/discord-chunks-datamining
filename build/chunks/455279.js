/** Chunk was on 58120 **/
n.d(t, {
  Z: () => y,
  c: () => _
}), n(388685);
var r, s = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  l = n(879443),
  c = n.n(l),
  d = n(392711),
  u = n.n(d),
  h = n(481060),
  p = n(600164),
  b = n(13140),
  m = n(388032),
  f = n(556707);

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
var _ = ((r = {}).DEFAULT = "DEFAULT", r.RECORDING = "RECORDING", r);
let N = {
  DEFAULT: f.__invalid_default,
  RECORDING: f.recording
};
class E extends i.PureComponent {
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
      activeElement: s
    } = document;
    "DEFAULT" === t && r.current === s && r.current.blur(), "RECORDING" === t && r.current !== s && r.current.focus()
  }
  render() {
    let e, {
        mode: t,
        value: n,
        disabled: r
      } = this.props,
      i = (0, b.BB)(n, !0);
    e = "RECORDING" === t ? m.NW.string(m.t.bmOri4) : 0 === n.length ? m.NW.string(m.t.co3wt7) : m.NW.string(m.t.idFMvL);
    let o = "DEFAULT" === t && n.length > 0;
    return (0, s.jsx)(h.tEY, {
      focusTarget: this._inputRef,
      ringTarget: this._containerRef,
      children: (0, s.jsx)("div", {
        onClick: this.handleClick,
        onMouseDown: this.handleMouseDown,
        ref: this._containerRef,
        className: a()(f.recorderContainer, N[t], {
          [f.hasValue]: o,
          [f.containerDisabled]: r
        }),
        children: (0, s.jsxs)(p.Z, {
          className: f.recorderLayout,
          children: [(0, s.jsx)(p.Z.Child, {
            className: f.keybindInput,
            children: (0, s.jsx)("input", {
              id: this._inputId,
              placeholder: m.NW.string(m.t.nWRdnp),
              type: "text",
              ref: this.setInputRef,
              readOnly: !0,
              value: i,
              disabled: "RECORDING" !== this.props.mode || r
            })
          }), (0, s.jsx)(p.Z, {
            shrink: 1,
            grow: 0,
            style: {
              margin: 0
            },
            children: (0, s.jsxs)(h.zxk, {
              className: f.addKeybindButton,
              disabled: r,
              onClick: e => {
                e.stopPropagation(), e.preventDefault(), this.handleClick(e)
              },
              size: h.zxk.Sizes.MIN,
              color: h.Ttl.PRIMARY,
              children: [(0, s.jsx)("span", {
                className: f.text,
                children: e
              }), (0, s.jsx)("span", {
                className: f.editIcon
              })]
            })
          })]
        })
      })
    })
  }
  constructor(...e) {
    super(...e), g(this, "_inputId", u().uniqueId("key-recorder-")), g(this, "_unregisterNativeRecorder", null), g(this, "_mousedownMode", null), g(this, "_inputRef", i.createRef()), g(this, "_containerRef", i.createRef()), g(this, "setInputRef", e => {
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
let y = E