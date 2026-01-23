/** Chunk was on 21738 **/
/** chunk id: 358832, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk157559 = require("./157559.js"),
  Chunk229224 = require("./229224.js"),
  Chunk987482 = require("./987482.jsx"),
  Chunk598384 = require("./598384.js"),
  Chunk383501 = require("./383501.js"),
  Chunk58736 = require("./58736.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk892513 = require("./892513.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class m extends Chunk64700.PureComponent {
  static getDerivedStateFromProps(e, t) {
    return e.mode !== t.memoizedMode ? {
      memoizedMode: e.mode,
      clicked: false
    } : null
  }
  handleDownloadApps() {
    (0, a.qfG)(e => (0, r.jsx)(c.default, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          f(e, t, n[t])
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
        return (0, r.jsx)(p.In, {
          tooltip: h.intl.string(h.t["zp9d/4"]),
          foreground: g.el,
          background: g.gg,
          icon: a.s3U,
          className: this.props.className
        });
      case "UPDATE_MANUALLY":
      case "UPDATE_DOWNLOADED":
        return (0, r.jsx)(p.In, {
          tooltip: h.intl.string(h.t.u18OXF),
          foreground: g.wV,
          onClick: this.handleInstallDownload,
          icon: a.s3U,
          className: this.props.className
        });
      default:
        return null
    }
  }
  constructor(...e) {
    super(...e), f(this, "state", {
      memoizedMode: this.props.mode,
      clicked: false
    }), f(this, "handleInstallDownload", () => {
      d.A.isConnected() ? s.A.show({
        title: h.intl.string(h.t.tiu1ly),
        body: h.intl.string(h.t["zK+lqW"]),
        onConfirm: this.doUpdate,
        cancelText: h.intl.string(h.t["ETE/oC"]),
        confirmText: h.intl.string(h.t["QDX/qu"]),
        confirmVariant: "critical-primary"
      }) : this.doUpdate()
    }), f(this, "doUpdate", () => {
      this.state.clicked || (this.setState({
        clicked: true
      }), (0, o.a)())
    })
  }
}
let A = Chunk311907.Ay.connectStores([Chunk598384.A], () => ({
  mode: u.A.getState()
}))(m)