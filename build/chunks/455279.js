/** Chunk was on 58120 **/
n.d(t, {
  Z: () => v,
  c: () => y
}), n(388685);
var i, r = n(255367),
  s = n(73800),
  o = n(120356),
  a = n.n(o),
  l = n(879443),
  c = n.n(l),
  d = n(392711),
  u = n.n(d),
  h = n(755721),
  p = n(481060),
  b = n(600164),
  f = n(13140),
  g = n(388032),
  m = n(556707);

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
var y = ((i = {}).DEFAULT = "DEFAULT", i.RECORDING = "RECORDING", i);
let E = {
  DEFAULT: m.__invalid_default,
  RECORDING: m.recording
};
class D extends s.PureComponent {
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
      s = (0, f.BB)(n, !0);
    e = "RECORDING" === t ? g.intl.string(g.t.bmOri4) : 0 === n.length ? g.intl.string(g.t.co3wt7) : g.intl.string(g.t.idFMvL);
    let o = "DEFAULT" === t && n.length > 0;
    return (0, r.jsx)(p.tEY, {
      focusTarget: this._inputRef,
      ringTarget: this._containerRef,
      children: (0, r.jsx)("div", {
        onClick: this.handleClick,
        onMouseDown: this.handleMouseDown,
        ref: this._containerRef,
        className: a()(m.recorderContainer, E[t], {
          [m.hasValue]: o,
          [m.containerDisabled]: i
        }),
        children: (0, r.jsxs)(b.Z, {
          className: m.recorderLayout,
          children: [(0, r.jsx)(b.Z.Child, {
            className: m.keybindInput,
            children: (0, r.jsx)("input", {
              id: this._inputId,
              placeholder: g.intl.string(g.t.nWRdnp),
              type: "text",
              ref: this.setInputRef,
              readOnly: !0,
              value: s,
              disabled: "RECORDING" !== this.props.mode || i
            })
          }), (0, r.jsx)(b.Z, {
            shrink: 1,
            grow: 0,
            style: {
              margin: 0
            },
            children: (0, r.jsxs)(h.zx, {
              className: m.addKeybindButton,
              disabled: i,
              onClick: e => {
                e.stopPropagation(), e.preventDefault(), this.handleClick(e)
              },
              size: h.zx.Sizes.MIN,
              color: h.Tt.PRIMARY,
              children: [(0, r.jsx)("span", {
                className: m.text,
                children: e
              }), (0, r.jsx)("span", {
                className: m.editIcon
              })]
            })
          })]
        })
      })
    })
  }
  constructor(...e) {
    super(...e), _(this, "_inputId", u().uniqueId("key-recorder-")), _(this, "_unregisterNativeRecorder", null), _(this, "_mousedownMode", null), _(this, "_inputRef", s.createRef()), _(this, "_containerRef", s.createRef()), _(this, "setInputRef", e => {
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
    }), _(this, "handleClick", e => {
      e.stopPropagation(), e.preventDefault();
      let {
        onClick: t,
        disableOnClickWhileRecording: n
      } = this.props;
      n && "RECORDING" === this._mousedownMode || t()
    }), _(this, "handleMouseDown", () => {
      this._mousedownMode = this.props.mode
    })
  }
}
let v = D