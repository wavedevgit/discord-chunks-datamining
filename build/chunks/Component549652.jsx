/** Chunk was on 57047 **/
/** chunk id: 549652, original params: t,e,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => b
}), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk593473 = require("./593473.js"),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk481060 = require("./481060.js"),
  Chunk536285 = require("./536285.js"),
  Chunk388905 = require("./388905.jsx"),
  Chunk600164 = require("./600164.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk314897 = require("./314897.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk989532 = require("./989532.js"),
  Chunk478411 = require("./478411.js");

function j(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = n, t
}
Chunk442837.ZP.initialize();
let B = "done",
  D = "failed";

function N() {
  try {
    window.close()
  } catch (t) {}
}
class b extends Chunk473749.PureComponent {
  componentDidMount() {
    let {
      stage: t,
      key: e
    } = this.state;
    module === B ? N() : Chunk314897.default.isAuthenticated() ? Chunk544891.tn.post({
      url: Chunk981631.ANM.HANDOFF,
      body: {
        key: exports
      },
      oldFormErrors: true,
      rejectWithError: true
    }).then(t => this.handoff(t.body.handoff_token), () => this.handoff()) : this.handoff()
  }
  handoff(t) {
    d.default.requestRedirect(p.Etm.BROWSER_HANDOFF, {
      handoffToken: t,
      fingerprint: u.default.getFingerprint()
    }).then(this.done, this.failed)
  }
  renderDone() {
    return (0, Chunk54381.jsxs)(Chunk388905.ZP, {
      children: [(0, Chunk54381.jsx)(Chunk388905.Ee, {
        src: require("./69008.js"),
        className: Chunk478411.marginBottom20
      }), (0, Chunk54381.jsx)(Chunk388905.Dx, {
        className: Chunk478411.marginBottom8,
        children: Chunk388032.intl.string(Chunk388032.t.YsLqvs)
      }), (0, Chunk54381.jsx)(Chunk388905.DK, {
        className: Chunk478411.marginBottom40,
        children: Chunk388032.intl.string(Chunk388032.t.CSBYDo)
      }), (0, Chunk54381.jsx)(Chunk481060.Button, {
        text: Chunk388032.intl.string(Chunk388032.t.fIv16B),
        fullWidth: true,
        onClick: this.handleOpenApp
      })]
    })
  }
  renderFailed() {
    return (0, Chunk54381.jsxs)(Chunk388905.ZP, {
      children: [(0, Chunk54381.jsx)(Chunk388905.Ee, {
        src: require("./69008.js"),
        className: Chunk478411.marginBottom20
      }), (0, Chunk54381.jsx)(Chunk388905.Dx, {
        className: Chunk478411.marginBottom8,
        children: Chunk388032.intl.string(Chunk388032.t.hsLIsW)
      }), (0, Chunk54381.jsx)(Chunk388905.DK, {
        className: Chunk478411.marginBottom40,
        children: Chunk388032.intl.string(Chunk388032.t.CSBYDo)
      }), (0, Chunk54381.jsx)(Chunk481060.Button, {
        text: Chunk388032.intl.string(Chunk388032.t.fIv16B),
        fullWidth: true,
        onClick: this.handleOpenApp
      })]
    })
  }
  renderHandoff() {
    return (0, Chunk54381.jsxs)(Chunk388905.ZP, {
      children: [(0, Chunk54381.jsx)(Chunk388905.Hh, {}), (0, Chunk54381.jsx)(Chunk388905.Dx, {
        className: Chunk478411.marginBottom8,
        children: Chunk388032.intl.string(Chunk388032.t.ctWa65)
      }), (0, Chunk54381.jsx)(Chunk388905.DK, {
        children: Chunk388032.intl.string(Chunk388032.t["53IHoo"])
      })]
    })
  }
  render() {
    let t, {
      stage: e
    } = this.state;
    switch (exports) {
      case B:
        t = this.renderDone();
        break;
      case D:
        t = this.renderFailed();
        break;
      default:
        t = this.renderHandoff()
    }
    return (0, Chunk54381.jsx)(Chunk600164.Z, {
      justify: Chunk600164.Z.Justify.CENTER,
      align: Chunk600164.Z.Align.CENTER,
      className: Chunk989532.wrapper,
      children: module
    })
  }
  constructor(t) {
    var e;
    super(t), j(this, "done", () => {
      N(), this.setState({
        stage: B
      })
    }), j(this, "failed", () => {
      this.setState({
        stage: D
      }), N()
    }), j(this, "handleOpenApp", () => {
      (0, f.uL)(p.Z5c.ME)
    });
    let {
      search: n
    } = t.location, s = null != n && "" !== n ? (0, i.parse)(n) : {};
    this.state = {
      key: null != (e = s.key) ? e : "",
      stage: "true" === s.done ? B : "handoff"
    }
  }
}