/** Chunk was on 58120 **/
n.d(t, {
  Z: () => m
}), n(388685), n(539854);
var r = n(200651),
  s = n(192379),
  i = n(921738),
  o = n.n(i),
  a = n(213005),
  l = n(455279),
  c = n(358085),
  d = n(998502),
  u = n(981631);

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let p = c.isPlatformEmbedded && null != d.ZP.getDiscordUtils().inputCaptureRegisterElement;
class b extends s.PureComponent {
  componentDidMount() {
    this._mounted = !0
  }
  componentWillUnmount() {
    this._mounted = !1, this.cleanUp()
  }
  componentDidUpdate(e) {
    this.props.defaultValue !== e.defaultValue && this.setState({
      codes: this.props.defaultValue
    })
  }
  cleanUp() {
    c.isPlatformEmbedded && null != this.gs && (this.gs.destroy(), this.gs = null)
  }
  handleComboChange(e) {
    let {
      mode: t
    } = this.state, {
      onChange: n
    } = this.props;
    t === l.c.RECORDING && (null != n && n(e), this.setState({
      codes: e
    }))
  }
  render() {
    let e, t, {
        codes: n,
        mode: s
      } = this.state,
      {
        disabled: i
      } = this.props;
    return p ? (t = d.ZP.getDiscordUtils().inputCaptureRegisterElement, e = this.handleNativeChange) : c.isPlatformEmbedded || (e = this.handleComboKeys), (0, r.jsx)(l.Z, {
      disabled: i,
      value: n,
      mode: s,
      onClick: this.toggleRecordMode,
      onChange: e,
      registerNativeRecorder: t,
      disableOnClickWhileRecording: p
    })
  }
  constructor(e) {
    super(e), h(this, "_input", void 0), h(this, "gs", void 0), h(this, "_mounted", !1), h(this, "recordStart", () => {
      c.isPlatformEmbedded && !p && (this.gs = new a.Z, this.gs.on("change", this.handleGSChange)), this.setState({
        mode: l.c.RECORDING
      })
    }), h(this, "recordEnd", () => {
      this.cleanUp(), this.setState({
        mode: l.c.DEFAULT
      })
    }), h(this, "toggleRecordMode", () => {
      this.state.mode === l.c.DEFAULT ? this.recordStart() : this.recordEnd()
    }), h(this, "handleComboKeys", (e, t, n) => {
      if (n.preventDefault(), "keydown" === n.type) {
        let e = t.map(e => [u.MoX.KEYBOARD_KEY, o()(e), u.CgE.BROWSER]),
          {
            keyCode: r
          } = n;
        null == e.find(e => {
          let [, t] = e;
          return r === t
        }) && e.push([u.MoX.KEYBOARD_KEY, r, u.CgE.BROWSER]), this.handleComboChange(e)
      }
    }), h(this, "handleGSChange", e => {
      if (!1 === this._mounted) return;
      let t = [...e.combo];
      this.handleComboChange(t)
    }), h(this, "handleNativeChange", e => {
      e.length > 0 && this.handleComboChange(e), this.recordEnd()
    });
    let {
      defaultValue: t
    } = e;
    this.state = {
      codes: t,
      mode: l.c.DEFAULT
    }
  }
}
let m = b