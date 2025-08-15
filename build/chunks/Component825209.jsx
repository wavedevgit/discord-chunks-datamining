/** Chunk was on 58120 **/
/** chunk id: 825209, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk921738 = require("./921738.js"),
  o = require.n(Chunk921738),
  Chunk213005 = require("./213005.js"),
  Chunk455279 = require("./455279.jsx"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk981631 = require("./981631.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let p = Chunk358085.isPlatformEmbedded && null != Chunk998502.ZP.getDiscordUtils().inputCaptureRegisterElement;
class b extends Chunk647438.PureComponent {
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
    Chunk358085.isPlatformEmbedded && null != this.gs && (this.gs.destroy(), this.gs = null)
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
        mode: r
      } = this.state,
      {
        disabled: s
      } = this.props;
    return p ? (t = Chunk998502.ZP.getDiscordUtils().inputCaptureRegisterElement, e = this.handleNativeChange) : Chunk358085.isPlatformEmbedded || (e = this.handleComboKeys), (0, Chunk951288.jsx)(Chunk455279.Z, {
      disabled: Chunk921738,
      value: require,
      mode: Chunk647438,
      onClick: this.toggleRecordMode,
      onChange: module,
      registerNativeRecorder: exports,
      disableOnClickWhileRecording: p
    })
  }
  constructor(e) {
    super(e), h(this, "_input", true), h(this, "gs", true), h(this, "_mounted", false), h(this, "recordStart", () => {
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
            keyCode: i
          } = n;
        null == e.find(e => {
          let [, t] = e;
          return i === t
        }) && e.push([u.MoX.KEYBOARD_KEY, i, u.CgE.BROWSER]), this.handleComboChange(e)
      }
    }), h(this, "handleGSChange", e => {
      if (false === this._mounted) return;
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
let f = b