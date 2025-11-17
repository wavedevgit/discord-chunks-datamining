/** Chunk was on web.js **/
/** chunk id: 825209, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk921738 = require("./921738.js"),
  o = require.n(Chunk921738),
  Chunk213005 = require("./213005.js"),
  Chunk455279 = require("./455279.jsx"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk295907 = require("./295907.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let _ = Chunk358085.isPlatformEmbedded && null != Chunk998502.ZP.getDiscordUtils().inputCaptureRegisterElement;
class p extends Chunk473749.PureComponent {
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
        mode: i
      } = this.state,
      {
        disabled: a
      } = this.props;
    return _ ? (t = Chunk998502.ZP.getDiscordUtils().inputCaptureRegisterElement, e = this.handleNativeChange) : Chunk358085.isPlatformEmbedded || (e = this.handleComboKeys), (0, Chunk54381.jsx)(Chunk455279.Z, {
      disabled: Chunk921738,
      value: require,
      mode: Chunk473749,
      onClick: this.toggleRecordMode,
      onChange: module,
      registerNativeRecorder: exports,
      disableOnClickWhileRecording: _
    })
  }
  constructor(e) {
    super(e), f(this, "_input", true), f(this, "gs", true), f(this, "_mounted", false), f(this, "recordStart", () => {
      c.isPlatformEmbedded && !_ && (this.gs = new s.Z, this.gs.on("change", this.handleGSChange)), this.setState({
        mode: l.c.RECORDING
      })
    }), f(this, "recordEnd", () => {
      this.cleanUp(), this.setState({
        mode: l.c.DEFAULT
      })
    }), f(this, "toggleRecordMode", () => {
      this.state.mode === l.c.DEFAULT ? this.recordStart() : this.recordEnd()
    }), f(this, "handleComboKeys", (e, t, n) => {
      if (n.preventDefault(), "keydown" === n.type) {
        let e = t.map(e => [d.Mo.KEYBOARD_KEY, o()(e), d.Cg.BROWSER]),
          {
            keyCode: r
          } = n;
        null == e.find(e => {
          let [, t] = e;
          return r === t
        }) && e.push([d.Mo.KEYBOARD_KEY, r, d.Cg.BROWSER]), this.handleComboChange(e)
      }
    }), f(this, "handleGSChange", e => {
      if (false === this._mounted) return;
      let t = [...e.combo];
      this.handleComboChange(t)
    }), f(this, "handleNativeChange", e => {
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
let h = p