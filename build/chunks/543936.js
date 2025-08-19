/** Chunk was on 82081 **/
/** chunk id: 543936, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  x: () => o
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk960048 = require("./960048.js");
class o extends Chunk647438.PureComponent {
  componentDidCatch(e, t) {
    a.Z.captureException(e, {
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
      function(e, t, r) {
        t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = r
      }(this, "state", {
        error: null,
        info: null
      })
  }
}