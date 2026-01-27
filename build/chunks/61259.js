/** Chunk was on 20941 **/
/** chunk id: 61259, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  t: () => l
}), require("./896048.js");
var Chunk64700 = require("./64700.js");
class l extends Chunk64700.PureComponent {
  static getDerivedStateFromError(e) {
    return {
      error: e
    }
  }
  componentDidCatch(e, t) {
    console.error("ErrorBoundary caught an error", e, t)
  }
  render() {
    return null != this.state.error ? this.props.fallback : this.props.children
  }
  constructor(...e) {
    super(...e),
      function(e, t, n) {
        t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = n
      }(this, "state", {
        error: null
      })
  }
}