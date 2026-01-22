/** Chunk was on 30514 **/
/** chunk id: 146088, original params: t,e,s (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => C
}), require("./747238.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk492462 = require("./492462.js"),
  Chunk311907 = require("./311907.js"),
  Chunk562465 = require("./562465.js"),
  Chunk397927 = require("./397927.js"),
  Chunk129014 = require("./129014.js"),
  Chunk854378 = require("./854378.jsx"),
  Chunk235986 = require("./235986.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk961350 = require("./961350.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk922730 = require("./922730.js"),
  Chunk473169 = require("./473169.js");

function A(t, e, s) {
  return e in t ? Object.defineProperty(t, e, {
    value: s,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = s, t
}
Chunk311907.Ay.initialize();
let m = "done",
  y = "failed";

function B() {
  try {
    window.close()
  } catch (t) {}
}
class C extends Chunk64700.PureComponent {
  componentDidMount() {
    let {
      stage: t,
      key: e
    } = this.state;
    t === m ? B() : u.default.isAuthenticated() ? l.Bo.post({
      url: p.Rsh.HANDOFF,
      body: {
        key: e
      },
      oldFormErrors: true,
      rejectWithError: true
    }).then(t => this.handoff(t.body.handoff_token), () => this.handoff()) : this.handoff()
  }
  handoff(t) {
    h.default.requestRedirect(p.e$_.BROWSER_HANDOFF, {
      handoffToken: t,
      fingerprint: u.default.getFingerprint()
    }).then(this.done, this.failed)
  }
  renderDone() {
    return (0, n.jsxs)(o.Ay, {
      children: [(0, n.jsx)(o._V, {
        src: s(20203),
        className: g.SX
      }), (0, n.jsx)(o.hE, {
        className: g.QB,
        children: x.intl.string(x.t.YsLqvs)
      }), (0, n.jsx)(o.tK, {
        className: g.C2,
        children: x.intl.string(x.t.CSBYDo)
      }), (0, n.jsx)(d.Button, {
        text: x.intl.string(x.t.fIv16B),
        fullWidth: true,
        onClick: this.handleOpenApp
      })]
    })
  }
  renderFailed() {
    return (0, n.jsxs)(o.Ay, {
      children: [(0, n.jsx)(o._V, {
        src: s(20203),
        className: g.SX
      }), (0, n.jsx)(o.hE, {
        className: g.QB,
        children: x.intl.string(x.t.hsLIsW)
      }), (0, n.jsx)(o.tK, {
        className: g.C2,
        children: x.intl.string(x.t.CSBYDo)
      }), (0, n.jsx)(d.Button, {
        text: x.intl.string(x.t.fIv16B),
        fullWidth: true,
        onClick: this.handleOpenApp
      })]
    })
  }
  renderHandoff() {
    return (0, n.jsxs)(o.Ay, {
      children: [(0, n.jsx)(o.CK, {}), (0, n.jsx)(o.hE, {
        className: g.QB,
        children: x.intl.string(x.t.ctWa65)
      }), (0, n.jsx)(o.tK, {
        children: x.intl.string(x.t["53IHoo"])
      })]
    })
  }
  render() {
    let t, {
      stage: e
    } = this.state;
    switch (e) {
      case m:
        t = this.renderDone();
        break;
      case y:
        t = this.renderFailed();
        break;
      default:
        t = this.renderHandoff()
    }
    return (0, n.jsx)(c.A, {
      justify: c.A.Justify.CENTER,
      align: c.A.Align.CENTER,
      className: j.i,
      children: t
    })
  }
  constructor(t) {
    var e;
    super(t), A(this, "done", () => {
      B(), this.setState({
        stage: m
      })
    }), A(this, "failed", () => {
      this.setState({
        stage: y
      }), B()
    }), A(this, "handleOpenApp", () => {
      (0, f.pX)(p.BVt.ME)
    });
    const {
      search: s
    } = t.location, n = null != s && "" !== s ? (0, r.parse)(s) : {};
    this.state = {
      key: null != (e = n.key) ? e : "",
      stage: "true" === n.done ? m : "handoff"
    }
  }
}