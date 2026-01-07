/** Chunk was on 1272 **/
/** chunk id: 137899, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk668781 = require("./668781.js"),
  Chunk549388 = require("./549388.js"),
  Chunk431583 = require("./431583.jsx"),
  Chunk91372 = require("./91372.js"),
  Chunk19780 = require("./19780.js"),
  Chunk665149 = require("./665149.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk350724 = require("./350724.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class h extends Chunk473749.PureComponent {
  static getDerivedStateFromProps(e, t) {
    return e.mode !== t.memoizedMode ? {
      memoizedMode: e.mode,
      clicked: false
    } : null
  }
  handleDownloadApps() {
    (0, a.h7j)(e => (0, r.jsx)(c.default, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          m(e, t, n[t])
        })
      }
      return e
    }({
      source: "Links"
    }, e)))
  }
  render() {
    switch (this.props.mode) {
      case "UPDATE_AVAILABLE":
        return (0, r.jsx)(p.JO, {
          tooltip: f.intl.string(f.t["zp9d/4"]),
          foreground: g.downloadArrow,
          background: g.cloud,
          icon: a._8t,
          className: this.props.className
        });
      case "UPDATE_MANUALLY":
      case "UPDATE_DOWNLOADED":
        return (0, r.jsx)(p.JO, {
          tooltip: f.intl.string(f.t.u18OXF),
          foreground: g.updateIconForeground,
          onClick: this.handleInstallDownload,
          icon: a._8t,
          className: this.props.className
        });
      default:
        return null
    }
  }
  constructor(...e) {
    super(...e), m(this, "state", {
      memoizedMode: this.props.mode,
      clicked: false
    }), m(this, "handleInstallDownload", () => {
      d.Z.isConnected() ? o.Z.show({
        title: f.intl.string(f.t.tiu1ly),
        body: f.intl.string(f.t["zK+lqW"]),
        onConfirm: this.doUpdate,
        cancelText: f.intl.string(f.t["ETE/oC"]),
        confirmText: f.intl.string(f.t["QDX/qu"]),
        confirmVariant: "critical-primary"
      }) : this.doUpdate()
    }), m(this, "doUpdate", () => {
      this.state.clicked || (this.setState({
        clicked: true
      }), (0, s.Q)())
    })
  }
}
let b = Chunk442837.ZP.connectStores([Chunk91372.Z], () => ({
  mode: u.Z.getState()
}))(h)