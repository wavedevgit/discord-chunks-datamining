/** Chunk was on 78376 **/
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

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let p = Chunk723702.isPlatformEmbedded && null != Chunk837921.Ay.getDiscordUtils().inputCaptureRegisterElement;
class m extends Chunk64700.PureComponent {
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
        mode: i
      } = this.state,
      {
        disabled: l
      } = this.props;
    return p ? (t = d.Ay.getDiscordUtils().inputCaptureRegisterElement, e = this.handleNativeChange) : c.isPlatformEmbedded || (e = this.handleComboKeys), (0, r.jsx)(o.A, {
      disabled: l,
      value: n,
      mode: i,
      onClick: this.toggleRecordMode,
      onChange: e,
      registerNativeRecorder: t,
      disableOnClickWhileRecording: p
    })
  }
  constructor(e) {
    super(e), _(this, "_input", true), _(this, "gs", true), _(this, "_mounted", false), _(this, "recordStart", () => {
      c.isPlatformEmbedded && !p && (this.gs = new a.A, this.gs.on("change", this.handleGSChange)), this.setState({
        mode: o.E.RECORDING
      })
    }), _(this, "recordEnd", () => {
      this.cleanUp(), this.setState({
        mode: o.E.DEFAULT
      })
    }), _(this, "toggleRecordMode", () => {
      this.state.mode === o.E.DEFAULT ? this.recordStart() : this.recordEnd()
    }), _(this, "handleComboKeys", (e, t, n) => {
      if (n.preventDefault(), "keydown" === n.type) {
        let e = t.map(e => [u.zY.KEYBOARD_KEY, s()(e), u.g$.BROWSER]),
          {
            keyCode: r
          } = n;
        null == e.find(e => {
          let [, t] = e;
          return r === t
        }) && e.push([u.zY.KEYBOARD_KEY, r, u.g$.BROWSER]), this.handleComboChange(e)
      }
    }), _(this, "handleGSChange", e => {
      if (false === this._mounted) return;
      let t = [...e.combo];
      this.handleComboChange(t)
    }), _(this, "handleNativeChange", e => {
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
let g = m