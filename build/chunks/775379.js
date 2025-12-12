/** Chunk was on web.js **/
/** chunk id: 775379, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S: () => a
}), require("./388685.js");
var Chunk473749 = require("./473749.js");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class a extends Chunk473749.PureComponent {
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
    super(...e), i(this, "state", {
      error: null
    })
  }
}