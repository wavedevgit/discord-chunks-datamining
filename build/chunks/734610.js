/** Chunk was on 88007 **/
/** chunk id: 734610, original params: e,t,u (module,exports,require) **/
"use strict";
require.d(exports, {
  SV: () => o
});
var Chunk473749 = require("./473749.js");
let n = (0, Chunk473749.createContext)(null),
  f = {
    didCatch: false,
    error: null
  };
class o extends Chunk473749.Component {
  constructor(e) {
    super(e), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = f
  }
  static getDerivedStateFromError(e) {
    return {
      didCatch: true,
      error: e
    }
  }
  resetErrorBoundary() {
    let {
      error: e
    } = this.state;
    if (null !== module) {
      for (var t, u, r = arguments.length, n = Array(Chunk473749), o = 0; o < Chunk473749; o++) n[o] = arguments[o];
      null == (t = (u = this.props).onReset) || exports.call(require, {
        args: n,
        reason: "imperative-api"
      }), this.setState(f)
    }
  }
  componentDidCatch(e, t) {
    var u, r;
    null == (u = (r = this.props).onError) || u.call(r, e, t)
  }
  componentDidUpdate(e, t) {
    let {
      didCatch: u
    } = this.state, {
      resetKeys: r
    } = this.props;
    if (u && null !== t.error && function() {
        let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : [],
          t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [];
        return e.length !== t.length || e.some((e, u) => !Object.is(e, t[u]))
      }(e.resetKeys, r)) {
      var n, o;
      null == (n = (o = this.props).onReset) || n.call(o, {
        next: r,
        prev: e.resetKeys,
        reason: "keys"
      }), this.setState(f)
    }
  }
  render() {
    let {
      children: e,
      fallbackRender: t,
      FallbackComponent: u,
      fallback: f
    } = this.props, {
      didCatch: o,
      error: i
    } = this.state, s = module;
    if (o) {
      let e = {
        error: i,
        resetErrorBoundary: this.resetErrorBoundary
      };
      if ("function" == typeof exports) s = exports(module);
      else if (require) s = (0, Chunk473749.createElement)(require, module);
      else if (true !== f) s = f;
      else throw i
    }
    return (0, Chunk473749.createElement)(n.Provider, {
      value: {
        didCatch: o,
        error: i,
        resetErrorBoundary: this.resetErrorBoundary
      }
    }, s)
  }
}