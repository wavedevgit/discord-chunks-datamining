/** Chunk was on 78528 **/
/** chunk id: 117178, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk695497 = require("./695497.js"),
  s = require.n(Chunk695497),
  Chunk313869 = require("./313869.js"),
  Chunk451802 = require("./451802.jsx"),
  Chunk723702 = require("./723702.js"),
  Chunk837921 = require("./837921.js"),
  Chunk650583 = require("./650583.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let h = Chunk723702.isPlatformEmbedded && null != Chunk837921.Ay.getDiscordUtils().inputCaptureRegisterElement;
class f extends Chunk64700.PureComponent {
  componentDidMount() {
    this._mounted = true
  }
  componentWillUnmount() {
    this._mounted = false, this.cleanUp()
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
    t === o.E.RECORDING && (null != n && n(e), this.setState({
      codes: e
    }))
  }
  render() {
    let e, t, {
        codes: n,
        mode: l
      } = this.state,
      {
        disabled: i
      } = this.props;
    return h ? (t = u.Ay.getDiscordUtils().inputCaptureRegisterElement, e = this.handleNativeChange) : c.isPlatformEmbedded || (e = this.handleComboKeys), (0, r.jsx)(o.A, {
      disabled: i,
      value: n,
      mode: l,
      onClick: this.toggleRecordMode,
      onChange: e,
      registerNativeRecorder: t,
      disableOnClickWhileRecording: h
    })
  }
  constructor(e) {
    super(e), p(this, "_input", true), p(this, "gs", true), p(this, "_mounted", false), p(this, "recordStart", () => {
      c.isPlatformEmbedded && !h && (this.gs = new a.A, this.gs.on("change", this.handleGSChange)), this.setState({
        mode: o.E.RECORDING
      })
    }), p(this, "recordEnd", () => {
      this.cleanUp(), this.setState({
        mode: o.E.DEFAULT
      })
    }), p(this, "toggleRecordMode", () => {
      this.state.mode === o.E.DEFAULT ? this.recordStart() : this.recordEnd()
    }), p(this, "handleComboKeys", (e, t, n) => {
      if (n.preventDefault(), "keydown" === n.type) {
        let e = t.map(e => [d.zY.KEYBOARD_KEY, s()(e), d.g$.BROWSER]),
          {
            keyCode: r
          } = n;
        null == e.find(e => {
          let [, t] = e;
          return r === t
        }) && e.push([d.zY.KEYBOARD_KEY, r, d.g$.BROWSER]), this.handleComboChange(e)
      }
    }), p(this, "handleGSChange", e => {
      if (false === this._mounted) return;
      let t = [...e.combo];
      this.handleComboChange(t)
    }), p(this, "handleNativeChange", e => {
      e.length > 0 && this.handleComboChange(e), this.recordEnd()
    });
    const {
      defaultValue: t
    } = e;
    this.state = {
      codes: t,
      mode: o.E.DEFAULT
    }
  }
}
let g = f