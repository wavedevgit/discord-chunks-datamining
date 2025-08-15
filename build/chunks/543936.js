/** Chunk was on 85362 **/
/** chunk id: 543936, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  x: () => l
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk960048 = require("./960048.js");
class l extends Chunk647438.PureComponent {
  componentDidCatch(e, t) {
    i.Z.captureException(e, {
      tags: {
        app_context: "virtual_currency",
        source: this.props.errorSource
      },
      extra: {
        info: t
      }
    }), this.setState({
      error: e,
      info: t
    })
  }
  render() {
    return null != this.state.error ? null != this.props.renderCustomErrorComponent ? this.props.renderCustomErrorComponent() : null : this.props.children
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
        error: null,
        info: null
      })
  }
}