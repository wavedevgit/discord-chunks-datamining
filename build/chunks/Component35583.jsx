/** Chunk was on 1272 **/
/** chunk id: 35583, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
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
  Chunk979905 = require("./979905.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class m extends Chunk473749.PureComponent {
  static getDerivedStateFromProps(e, t) {
    return e.mode !== t.memoizedMode ? {
      memoizedMode: e.mode,
      clicked: false
    } : null
  }
  handleDownloadApps() {
    (0, Chunk481060.h7j)(e => (0, r.jsx)(c.default, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          h(e, t, n[t])
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
        return (0, Chunk54381.jsx)(Chunk665149.JO, {
          hideOnClick: false,
          tooltip: Chunk388032.intl.string(Chunk388032.t["zp9d/4"]),
          foreground: Chunk979905.downloadArrow,
          background: Chunk979905.cloud,
          icon: Chunk481060._8t,
          className: this.props.className
        });
      case "UPDATE_MANUALLY":
      case "UPDATE_DOWNLOADED":
        return (0, Chunk54381.jsx)(Chunk665149.JO, {
          tooltip: Chunk388032.intl.string(Chunk388032.t.u18OXF),
          foreground: Chunk979905.updateIconForeground,
          onClick: this.handleInstallDownload,
          icon: Chunk481060._8t,
          className: this.props.className
        });
      default:
        return null
    }
  }
  constructor(...e) {
    super(...e), h(this, "state", {
      memoizedMode: this.props.mode,
      clicked: false
    }), h(this, "handleInstallDownload", () => {
      d.Z.isConnected() ? s.Z.show({
        title: f.intl.string(f.t.tiu1ly),
        body: f.intl.string(f.t["zK+lqW"]),
        onConfirm: this.doUpdate,
        cancelText: f.intl.string(f.t["ETE/oC"]),
        confirmText: f.intl.string(f.t["QDX/qu"]),
        confirmVariant: "critical-primary"
      }) : this.doUpdate()
    }), h(this, "doUpdate", () => {
      this.state.clicked || (this.setState({
        clicked: true
      }), (0, o.Q)())
    })
  }
}
let _ = Chunk442837.ZP.connectStores([Chunk91372.Z], () => ({
  mode: Chunk91372.Z.getState()
}))(m)