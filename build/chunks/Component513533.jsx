/** Chunk was on web.js **/
/** chunk id: 513533, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => l
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk23393 = require("./23393.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class l extends Chunk473749.PureComponent {
  componentDidCatch(e, t) {
    console.error("Error rendering component (LocalErrorBoundary): ", e), this.setState({
      error: e,
      info: t
    })
  }
  render() {
    return null != this.state.error ? (0, Chunk54381.jsx)("div", {
      children: (0, Chunk54381.jsx)(Chunk481060.Text, {
        color: "text-feedback-critical",
        variant: "text-md/normal",
        className: Chunk23393.labelSpacing,
        children: "Error rendering component. Check console for more information on the error."
      })
    }) : this.props.children
  }
  constructor(...e) {
    super(...e), s(this, "state", {
      error: null,
      info: null
    })
  }
}