/** Chunk was on 42402 **/
/** chunk id: 62218, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk723702 = require("./723702.js"),
  Chunk837921 = require("./837921.js"),
  Chunk332191 = require("./332191.jsx"),
  Chunk985018 = require("./985018.jsx");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class d extends Chunk64700.PureComponent {
  async componentDidMount() {
    this.setState({
      openOnStartup: await a.Ay.getOpenOnStart(),
      startMinimized: await a.Ay.getSetting("START_MINIMIZED", false),
      minimizeToTray: await a.Ay.getSetting("MINIMIZE_TO_TRAY", true)
    })
  }
  render() {
    let {
      openOnStartup: e,
      startMinimized: t,
      minimizeToTray: n
    } = this.state, l = (0, s.isLinux)() ? c.intl.string(c.t["7pPjTW"]) : c.intl.string(c.t.ZkDZov);
    return (0, r.jsxs)(i.BJc, {
      gap: 16,
      children: [(0, r.jsx)(i.Heading, {
        variant: "heading-lg/semibold",
        color: "text-strong",
        children: l
      }), (0, r.jsxs)(i.nVY, {
        children: [(0, r.jsx)(i.dOG, {
          label: c.intl.string(c.t.WQm4p1),
          description: c.intl.string(c.t["s/cQrU"]),
          checked: e,
          onChange: this.handleToggleOpenOnStartup
        }), (0, s.isWindows)() ? (0, r.jsx)(i.dOG, {
          label: c.intl.string(c.t.n7Yjes),
          description: c.intl.string(c.t.o2FSjB),
          checked: !!e && t,
          disabled: !e,
          onChange: this.handleToggleStartMinimized
        }) : null, (0, r.jsx)(i.dOG, {
          label: c.intl.string(c.t.abLFes),
          description: c.intl.string(c.t["mVuX+j"]),
          checked: n,
          onChange: this.handleToggleMinimizeToTray
        }), (0, r.jsx)(o.J, {})]
      })]
    })
  }
  constructor(e) {
    super(e), u(this, "handleToggleOpenOnStartup", () => {
      let e = !this.state.openOnStartup;
      this.setState({
        openOnStartup: e
      }), a.Ay.send("TOGGLE_OPEN_ON_STARTUP", e)
    }), u(this, "handleToggleStartMinimized", () => {
      let e = !this.state.startMinimized;
      this.setState({
        startMinimized: e
      }), a.Ay.send("TOGGLE_START_MINIMIZED", e)
    }), u(this, "handleToggleMinimizeToTray", () => {
      let e = !this.state.minimizeToTray;
      this.setState({
        minimizeToTray: e
      }), a.Ay.send("TOGGLE_MINIMIZE_TO_TRAY", e)
    }), this.state = {
      openOnStartup: true,
      startMinimized: false,
      minimizeToTray: true
    }
  }
}
let p = d