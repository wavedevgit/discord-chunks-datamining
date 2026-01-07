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
    t === B ? N() : u.default.isAuthenticated() ? l.tn.post({
      url: p.ANM.HANDOFF,
      body: {
        key: e
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
    return (0, s.jsxs)(h.ZP, {
      children: [(0, s.jsx)(h.Ee, {
        src: n(69008),
        className: x.marginBottom20
      }), (0, s.jsx)(h.Dx, {
        className: x.marginBottom8,
        children: m.intl.string(m.t.YsLqvs)
      }), (0, s.jsx)(h.DK, {
        className: x.marginBottom40,
        children: m.intl.string(m.t.CSBYDo)
      }), (0, s.jsx)(o.Button, {
        text: m.intl.string(m.t.fIv16B),
        fullWidth: true,
        onClick: this.handleOpenApp
      })]
    })
  }
  renderFailed() {
    return (0, s.jsxs)(h.ZP, {
      children: [(0, s.jsx)(h.Ee, {
        src: n(69008),
        className: x.marginBottom20
      }), (0, s.jsx)(h.Dx, {
        className: x.marginBottom8,
        children: m.intl.string(m.t.hsLIsW)
      }), (0, s.jsx)(h.DK, {
        className: x.marginBottom40,
        children: m.intl.string(m.t.CSBYDo)
      }), (0, s.jsx)(o.Button, {
        text: m.intl.string(m.t.fIv16B),
        fullWidth: true,
        onClick: this.handleOpenApp
      })]
    })
  }
  renderHandoff() {
    return (0, s.jsxs)(h.ZP, {
      children: [(0, s.jsx)(h.Hh, {}), (0, s.jsx)(h.Dx, {
        className: x.marginBottom8,
        children: m.intl.string(m.t.ctWa65)
      }), (0, s.jsx)(h.DK, {
        children: m.intl.string(m.t["53IHoo"])
      })]
    })
  }
  render() {
    let t, {
      stage: e
    } = this.state;
    switch (e) {
      case B:
        t = this.renderDone();
        break;
      case D:
        t = this.renderFailed();
        break;
      default:
        t = this.renderHandoff()
    }
    return (0, s.jsx)(c.Z, {
      justify: c.Z.Justify.CENTER,
      align: c.Z.Align.CENTER,
      className: g.wrapper,
      children: t
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