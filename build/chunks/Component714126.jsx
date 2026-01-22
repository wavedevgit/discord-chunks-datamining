/** Chunk was on web.js **/
/** chunk id: 714126, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => l
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk798233 = require("./798233.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class l extends Chunk64700.PureComponent {
  componentDidCatch(e, t) {
    console.error("Error rendering component (LocalErrorBoundary): ", e), this.setState({
      error: e,
      info: t
    })
  }
  render() {
    return null != this.state.error ? (0, r.jsx)("div", {
      children: (0, r.jsx)(a.Text, {
        color: "text-feedback-critical",
        variant: "text-md/normal",
        className: s.cW,
        children: "Error rendering component. Check console for more information on the error."
      })
    }) : this.props.children
  }
  constructor(...e) {
    super(...e), o(this, "state", {
      error: null,
      info: null
    })
  }
}