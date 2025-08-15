/** Chunk was on 30243 **/
/** chunk id: 775379, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  S: () => l
}), require("./388685.js");
var Chunk647438 = require("./647438.js");
class l extends Chunk647438.PureComponent {
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
      function(e, t, r) {
        t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = r
      }(this, "state", {
        error: null
      })
  }
}