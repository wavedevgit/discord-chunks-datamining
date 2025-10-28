/** Chunk was on 32945 **/
/** chunk id: 955926, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  k: () => o
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk295136 = require("./295136.js");
class o extends Chunk647438.PureComponent {
  componentDidCatch(e, t) {
    console.error("Error rendering component (LocalErrorBoundary): ", e), this.setState({
      error: e,
      info: t
    })
  }
  render() {
    return null != this.state.error ? (0, Chunk951288.jsx)("div", {
      children: (0, Chunk951288.jsx)(Chunk481060.Text, {
        color: "text-danger",
        variant: "text-md/normal",
        className: Chunk295136.labelSpacing,
        children: "Error rendering component. Check console for more information on the error."
      })
    }) : this.props.children
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