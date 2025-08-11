/** Chunk was on 57047 **/
/** chunk id: 549652, original params: t,e,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => E
}), require("./35282.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk593473 = require("./593473.js"),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk536285 = require("./536285.js"),
  Chunk388905 = require("./388905.jsx"),
  Chunk600164 = require("./600164.js"),
  Chunk703656 = require("./703656.js"),
  Chunk314897 = require("./314897.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk396096 = require("./396096.js"),
  Chunk20493 = require("./20493.js");

function D(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = n, t
}
Chunk442837.ZP.initialize();
let x = {
  HANDOFF: "handoff",
  DONE: "done",
  FAILED: "failed"
};

function N() {
  try {
    window.close()
  } catch (t) {}
}
class E extends Chunk73800.PureComponent {
  componentDidMount() {
    let {
      stage: t,
      key: e
    } = this.state;
    module === x.DONE ? N() : Chunk314897.default.isAuthenticated() ? Chunk544891.tn.post({
      url: Chunk981631.ANM.HANDOFF,
      body: {
        key: exports
      },
      oldFormErrors: true,
      rejectWithError: true
    }).then(t => this.handoff(t.body.handoff_token), () => this.handoff()) : this.handoff()
  }
  handoff(t) {
    o.default.requestRedirect(u.Etm.BROWSER_HANDOFF, {
      handoffToken: t,
      fingerprint: f.default.getFingerprint()
    }).then(this.done, this.failed)
  }
  renderDone() {
    return <Chunk388905.ZP>{<Chunk388905.Ee src={require("./69008.js")} className={Chunk20493.marginBottom20} />}{<Chunk388905.Dx className={Chunk20493.marginBottom8}>{Chunk388032.intl.string(Chunk388032.t.YsLqvr)}</Chunk388905.Dx>}{<Chunk388905.DK className={Chunk20493.marginBottom40}>{Chunk388032.intl.string(Chunk388032.t.CSBYDg)}</Chunk388905.DK>}{<Chunk388905.zx onClick={this.handleOpenApp}>{Chunk388032.intl.string(Chunk388032.t.fIv16O)}</Chunk388905.zx>}</Chunk388905.ZP>
  }
  renderFailed() {
    return <Chunk388905.ZP>{<Chunk388905.Ee src={require("./69008.js")} className={Chunk20493.marginBottom20} />}{<Chunk388905.Dx className={Chunk20493.marginBottom8}>{Chunk388032.intl.string(Chunk388032.t.hsLIsb)}</Chunk388905.Dx>}{<Chunk388905.DK className={Chunk20493.marginBottom40}>{Chunk388032.intl.string(Chunk388032.t.CSBYDg)}</Chunk388905.DK>}{<Chunk388905.zx onClick={this.handleOpenApp}>{Chunk388032.intl.string(Chunk388032.t.fIv16O)}</Chunk388905.zx>}</Chunk388905.ZP>
  }
  renderHandoff() {
    return <Chunk388905.ZP>{<Chunk388905.Hh />}{<Chunk388905.Dx className={Chunk20493.marginBottom8}>{Chunk388032.intl.string(Chunk388032.t["ctWa6+"])}</Chunk388905.Dx>}{<Chunk388905.DK>{Chunk388032.intl.string(Chunk388032.t["53IHoq"])}</Chunk388905.DK>}</Chunk388905.ZP>
  }
  render() {
    let t, {
      stage: e
    } = this.state;
    switch (exports) {
      case x.DONE:
        t = this.renderDone();
        break;
      case x.FAILED:
        t = this.renderFailed();
        break;
      case x.HANDOFF:
      default:
        t = this.renderHandoff()
    }
    return <Chunk600164.Z justify={Chunk600164.Z.Justify.CENTER} align={Chunk600164.Z.Align.CENTER} className={Chunk396096.wrapper}>{module}</Chunk600164.Z>
  }
  constructor(t) {
    var e;
    super(t), D(this, "done", () => {
      N(), this.setState({
        stage: x.DONE
      })
    }), D(this, "failed", () => {
      this.setState({
        stage: x.FAILED
      }), N()
    }), D(this, "handleOpenApp", () => {
      (0, h.uL)(u.Z5c.ME)
    });
    let {
      search: n
    } = t.location, s = null != n && "" !== n ? (0, i.parse)(n) : {};
    this.state = {
      key: null != (e = s.key) ? e : "",
      stage: "true" === s.done ? x.DONE : x.HANDOFF
    }
  }
}