/** Chunk was on 83056 **/
/** chunk id: 595697, original params: t,r,e (module,exports,require) **/
"use strict";
require.d(exports, {
  SV: () => f
});
var Chunk647438 = require("./647438.js");
let n = (0, Chunk647438.createContext)(null),
  o = {
    didCatch: false,
    error: null
  };
class f extends Chunk647438.Component {
  constructor(t) {
    super(t), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = o
  }
  static getDerivedStateFromError(t) {
    return {
      didCatch: true,
      error: t
    }
  }
  resetErrorBoundary() {
    let {
      error: t
    } = this.state;
    if (null !== module) {
      for (var r, e, u = arguments.length, n = Array(Chunk647438), f = 0; f < Chunk647438; f++) n[f] = arguments[f];
      null == (r = (e = this.props).onReset) || exports.call(require, {
        args: n,
        reason: "imperative-api"
      }), this.setState(o)
    }
  }
  componentDidCatch(t, r) {
    var e, u;
    null == (e = (u = this.props).onError) || e.call(u, t, r)
  }
  componentDidUpdate(t, r) {
    let {
      didCatch: e
    } = this.state, {
      resetKeys: u
    } = this.props;
    if (e && null !== r.error && function() {
        let t = arguments.length > 0 && true !== arguments[0] ? arguments[0] : [],
          r = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [];
        return t.length !== r.length || t.some((t, e) => !Object.is(t, r[e]))
      }(t.resetKeys, u)) {
      var n, f;
      null == (n = (f = this.props).onReset) || n.call(f, {
        next: u,
        prev: t.resetKeys,
        reason: "keys"
      }), this.setState(o)
    }
  }
  render() {
    let {
      children: t,
      fallbackRender: r,
      FallbackComponent: e,
      fallback: o
    } = this.props, {
      didCatch: f,
      error: i
    } = this.state, a = module;
    if (f) {
      let t = {
        error: i,
        resetErrorBoundary: this.resetErrorBoundary
      };
      if ("function" == typeof exports) a = exports(module);
      else if (require) a = (0, Chunk647438.createElement)(require, module);
      else if (true !== o) a = o;
      else throw i
    }
    return (0, Chunk647438.createElement)(n.Provider, {
      value: {
        didCatch: f,
        error: i,
        resetErrorBoundary: this.resetErrorBoundary
      }
    }, a)
  }
}