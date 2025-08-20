/** Chunk was on web.js **/
/** chunk id: 200645, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk197571 = require("./197571.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class _ extends Chunk647438.PureComponent {
  async componentDidMount() {
    this.setState({
      openOnStartup: await Chunk998502.ZP.getSetting("OPEN_ON_STARTUP", true),
      startMinimized: await Chunk998502.ZP.getSetting("START_MINIMIZED", false),
      minimizeToTray: await Chunk998502.ZP.getSetting("MINIMIZE_TO_TRAY", true)
    })
  }
  render() {
    let {
      openOnStartup: e,
      startMinimized: t,
      minimizeToTray: n
    } = this.state, i = (0, Chunk358085.isLinux)() ? Chunk388032.intl.string(Chunk388032.t["7pPjTU"]) : Chunk388032.intl.string(Chunk388032.t.ZkDZoq);
    return (0, Chunk951288.jsxs)(Chunk481060.hjN, {
      tag: Chunk481060.RB0.H1,
      title: Chunk647438,
      children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
        children: Chunk388032.intl.string(Chunk388032.t["w/vU5u"])
      }), (0, Chunk951288.jsx)(Chunk481060.j7V, {
        className: Chunk197571.marginBottom20,
        value: module,
        note: Chunk388032.intl.string(Chunk388032.t["s/cQra"]),
        onChange: this.handleToggleOpenOnStartup,
        children: Chunk388032.intl.string(Chunk388032.t.WQm4p6)
      }), (0, Chunk358085.isWindows)() ? (0, Chunk951288.jsx)(Chunk481060.j7V, {
        disabled: !module,
        className: o()(Chunk197571.marginTop8, Chunk197571.marginBottom20),
        value: !!module && exports,
        note: Chunk388032.intl.string(Chunk388032.t.o2FSjI),
        onChange: this.handleToggleStartMinimized,
        children: Chunk388032.intl.string(Chunk388032.t.n7Yjen)
      }) : null, (0, Chunk951288.jsx)(Chunk481060.vwX, {
        className: o()(Chunk197571.marginTop20, Chunk197571.marginBottom8),
        children: Chunk388032.intl.string(Chunk388032.t.h0hFx8)
      }), (0, Chunk951288.jsx)(Chunk481060.j7V, {
        className: Chunk197571.marginBottom20,
        value: require,
        note: Chunk388032.intl.string(Chunk388032.t["mVuX+v"]),
        onChange: this.handleToggleMinimizeToTray,
        children: Chunk388032.intl.string(Chunk388032.t.abLFen)
      })]
    })
  }
  constructor(e) {
    super(e), f(this, "handleToggleOpenOnStartup", () => {
      let e = !this.state.openOnStartup;
      this.setState({
        openOnStartup: e
      }), c.ZP.send("TOGGLE_OPEN_ON_STARTUP", e)
    }), f(this, "handleToggleStartMinimized", () => {
      let e = !this.state.startMinimized;
      this.setState({
        startMinimized: e
      }), c.ZP.send("TOGGLE_START_MINIMIZED", e)
    }), f(this, "handleToggleMinimizeToTray", () => {
      let e = !this.state.minimizeToTray;
      this.setState({
        minimizeToTray: e
      }), c.ZP.send("TOGGLE_MINIMIZE_TO_TRAY", e)
    }), this.state = {
      openOnStartup: true,
      startMinimized: false,
      minimizeToTray: true
    }
  }
}
let p = _