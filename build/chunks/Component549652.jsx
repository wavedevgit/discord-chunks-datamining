/** Chunk was on 57047 **/
/** chunk id: 549652, original params: t,e,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => b
}), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk593473 = require("./593473.js"),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk536285 = require("./536285.js"),
  Chunk388905 = require("./388905.jsx"),
  Chunk600164 = require("./600164.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk314897 = require("./314897.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk259522 = require("./259522.js"),
  Chunk10198 = require("./10198.js");

function x(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = n, t
}
Chunk442837.ZP.initialize();
let j = "done",
  D = "failed";

function N() {
  try {
    window.close()
  } catch (t) {}
}
class b extends Chunk647438.PureComponent {
  componentDidMount() {
    let {
      stage: t,
      key: e
    } = this.state;
    module === j ? N() : Chunk314897.default.isAuthenticated() ? Chunk544891.tn.post({
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
    return (0, Chunk951288.jsxs)(Chunk388905.ZP, {
      children: [(0, Chunk951288.jsx)(Chunk388905.Ee, {
        src: require("./69008.js"),
        className: Chunk10198.marginBottom20
      }), (0, Chunk951288.jsx)(Chunk388905.Dx, {
        className: Chunk10198.marginBottom8,
        children: Chunk388032.intl.string(Chunk388032.t.YsLqvr)
      }), (0, Chunk951288.jsx)(Chunk388905.DK, {
        className: Chunk10198.marginBottom40,
        children: Chunk388032.intl.string(Chunk388032.t.CSBYDg)
      }), (0, Chunk951288.jsx)(Chunk388905.zx, {
        onClick: this.handleOpenApp,
        children: Chunk388032.intl.string(Chunk388032.t.fIv16O)
      })]
    })
  }
  renderFailed() {
    return (0, Chunk951288.jsxs)(Chunk388905.ZP, {
      children: [(0, Chunk951288.jsx)(Chunk388905.Ee, {
        src: require("./69008.js"),
        className: Chunk10198.marginBottom20
      }), (0, Chunk951288.jsx)(Chunk388905.Dx, {
        className: Chunk10198.marginBottom8,
        children: Chunk388032.intl.string(Chunk388032.t.hsLIsb)
      }), (0, Chunk951288.jsx)(Chunk388905.DK, {
        className: Chunk10198.marginBottom40,
        children: Chunk388032.intl.string(Chunk388032.t.CSBYDg)
      }), (0, Chunk951288.jsx)(Chunk388905.zx, {
        onClick: this.handleOpenApp,
        children: Chunk388032.intl.string(Chunk388032.t.fIv16O)
      })]
    })
  }
  renderHandoff() {
    return (0, Chunk951288.jsxs)(Chunk388905.ZP, {
      children: [(0, Chunk951288.jsx)(Chunk388905.Hh, {}), (0, Chunk951288.jsx)(Chunk388905.Dx, {
        className: Chunk10198.marginBottom8,
        children: Chunk388032.intl.string(Chunk388032.t["ctWa6+"])
      }), (0, Chunk951288.jsx)(Chunk388905.DK, {
        children: Chunk388032.intl.string(Chunk388032.t["53IHoq"])
      })]
    })
  }
  render() {
    let t, {
      stage: e
    } = this.state;
    switch (exports) {
      case j:
        t = this.renderDone();
        break;
      case D:
        t = this.renderFailed();
        break;
      default:
        t = this.renderHandoff()
    }
    return (0, Chunk951288.jsx)(Chunk600164.Z, {
      justify: Chunk600164.Z.Justify.CENTER,
      align: Chunk600164.Z.Align.CENTER,
      className: Chunk259522.wrapper,
      children: module
    })
  }
  constructor(t) {
    var e;
    super(t), x(this, "done", () => {
      N(), this.setState({
        stage: j
      })
    }), x(this, "failed", () => {
      this.setState({
        stage: D
      }), N()
    }), x(this, "handleOpenApp", () => {
      (0, h.uL)(u.Z5c.ME)
    });
    let {
      search: n
    } = t.location, s = null != n && "" !== n ? (0, i.parse)(n) : {};
    this.state = {
      key: null != (e = s.key) ? e : "",
      stage: "true" === s.done ? j : "handoff"
    }
  }
}