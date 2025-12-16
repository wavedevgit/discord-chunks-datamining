/** Chunk was on web.js **/
/** chunk id: 200645, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk885418 = require("./885418.jsx"),
  Chunk388032 = require("./388032.jsx");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class d extends Chunk473749.PureComponent {
  async componentDidMount() {
    this.setState({
      openOnStartup: await Chunk998502.ZP.getOpenOnStart(),
      startMinimized: await Chunk998502.ZP.getSetting("START_MINIMIZED", false),
      minimizeToTray: await Chunk998502.ZP.getSetting("MINIMIZE_TO_TRAY", true)
    })
  }
  render() {
    let {
      openOnStartup: e,
      startMinimized: t,
      minimizeToTray: n
    } = this.state, i = (0, Chunk358085.isLinux)() ? Chunk388032.intl.string(Chunk388032.t["7pPjTW"]) : Chunk388032.intl.string(Chunk388032.t.ZkDZov);
    return (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
      gap: 16,
      children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
        variant: "heading-lg/semibold",
        color: "text-strong",
        children: Chunk473749
      }), (0, Chunk54381.jsxs)(Chunk481060.C3N, {
        children: [(0, Chunk54381.jsx)(Chunk481060.rsf, {
          label: Chunk388032.intl.string(Chunk388032.t.WQm4p1),
          description: Chunk388032.intl.string(Chunk388032.t["s/cQrU"]),
          checked: module,
          onChange: this.handleToggleOpenOnStartup
        }), (0, Chunk358085.isWindows)() ? (0, Chunk54381.jsx)(Chunk481060.rsf, {
          label: Chunk388032.intl.string(Chunk388032.t.n7Yjes),
          description: Chunk388032.intl.string(Chunk388032.t.o2FSjB),
          checked: !!module && exports,
          disabled: !module,
          onChange: this.handleToggleStartMinimized
        }) : null, (0, Chunk54381.jsx)(Chunk481060.rsf, {
          label: Chunk388032.intl.string(Chunk388032.t.abLFes),
          description: Chunk388032.intl.string(Chunk388032.t["mVuX+j"]),
          checked: require,
          onChange: this.handleToggleMinimizeToTray
        }), (0, Chunk54381.jsx)(Chunk885418.s, {})]
      })]
    })
  }
  constructor(e) {
    super(e), u(this, "handleToggleOpenOnStartup", () => {
      let e = !this.state.openOnStartup;
      this.setState({
        openOnStartup: e
      }), s.ZP.send("TOGGLE_OPEN_ON_STARTUP", e)
    }), u(this, "handleToggleStartMinimized", () => {
      let e = !this.state.startMinimized;
      this.setState({
        startMinimized: e
      }), s.ZP.send("TOGGLE_START_MINIMIZED", e)
    }), u(this, "handleToggleMinimizeToTray", () => {
      let e = !this.state.minimizeToTray;
      this.setState({
        minimizeToTray: e
      }), s.ZP.send("TOGGLE_MINIMIZE_TO_TRAY", e)
    }), this.state = {
      openOnStartup: true,
      startMinimized: false,
      minimizeToTray: true
    }
  }
}
let f = d