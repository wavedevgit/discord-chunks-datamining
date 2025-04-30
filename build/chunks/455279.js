/** Chunk was on 58120 **/
n.d(t, {
  Z: () => D,
  c: () => _
}), n(388685);
var i, r = n(200651),
  s = n(192379),
  o = n(120356),
  l = n.n(o),
  a = n(879443),
  c = n.n(a),
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
var _ = ((i = {}).DEFAULT = "DEFAULT", i.RECORDING = "RECORDING", i);
let E = {
  DEFAULT: f.__invalid_default,
  RECORDING: f.recording
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
    e = "RECORDING" === t ? m.intl.string(m.t.bmOri4) : 0 === n.length ? m.intl.string(m.t.co3wt7) : m.intl.string(m.t.idFMvL);
    let o = "DEFAULT" === t && n.length > 0;
    return (0, r.jsx)(h.tEY, {
      focusTarget: this._inputRef,
      ringTarget: this._containerRef,
      children: (0, r.jsx)("div", {
        onClick: this.handleClick,
        onMouseDown: this.handleMouseDown,
        ref: this._containerRef,
        className: l()(f.recorderContainer, E[t], {
          [f.hasValue]: o,
          [f.containerDisabled]: i
        }),
        children: (0, r.jsxs)(p.Z, {
          className: f.recorderLayout,
          children: [(0, r.jsx)(p.Z.Child, {
            className: f.keybindInput,
            children: (0, r.jsx)("input", {
              id: this._inputId,
              placeholder: m.intl.string(m.t.nWRdnp),
              type: "text",
              ref: this.setInputRef,
              readOnly: !0,
              value: s,
              disabled: "RECORDING" !== this.props.mode || i
            })
          }), (0, r.jsx)(p.Z, {
            shrink: 1,
            grow: 0,
            style: {
              margin: 0
            },
            children: (0, r.jsxs)(h.zxk, {
              className: f.addKeybindButton,
              disabled: i,
              onClick: e => {
                e.stopPropagation(), e.preventDefault(), this.handleClick(e)
              },
              size: h.zxk.Sizes.MIN,
              color: h.Ttl.PRIMARY,
              children: [(0, r.jsx)("span", {
                className: f.text,
                children: e
              }), (0, r.jsx)("span", {
                className: f.editIcon
              })]
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