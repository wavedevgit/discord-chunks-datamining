/** Chunk was on 81393 **/
/** chunk id: 595697, original params: t,e,o (module,exports,require) **/
"use strict";
require.d(exports, {
  SV: () => a
});
var Chunk647438 = require("./647438.js");
let r = (0, Chunk647438.createContext)(null),
  i = {
    didCatch: false,
    error: null
  };
class a extends Chunk647438.Component {
  constructor(t) {
    super(t), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = i
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
      for (var e, o, n = arguments.length, r = Array(Chunk647438), a = 0; a < Chunk647438; a++) r[a] = arguments[a];
      null == (e = (o = this.props).onReset) || exports.call(require, {
        args: r,
        reason: "imperative-api"
      }), this.setState(i)
    }
  }
  componentDidCatch(t, e) {
    var o, n;
    null == (o = (n = this.props).onError) || o.call(n, t, e)
  }
  componentDidUpdate(t, e) {
    let {
      didCatch: o
    } = this.state, {
      resetKeys: n
    } = this.props;
    if (o && null !== e.error && function() {
        let t = arguments.length > 0 && true !== arguments[0] ? arguments[0] : [],
          e = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [];
        return t.length !== e.length || t.some((t, o) => !Object.is(t, e[o]))
      }(t.resetKeys, n)) {
      var r, a;
      null == (r = (a = this.props).onReset) || r.call(a, {
        next: n,
        prev: t.resetKeys,
        reason: "keys"
      }), this.setState(i)
    }
  }
  render() {
    let {
      children: t,
      fallbackRender: e,
      FallbackComponent: o,
      fallback: i
    } = this.props, {
      didCatch: a,
      error: s
    } = this.state, l = module;
    if (a) {
      let t = {
        error: s,
        resetErrorBoundary: this.resetErrorBoundary
      };
      if ("function" == typeof exports) l = exports(module);
      else if (require) l = (0, Chunk647438.createElement)(require, module);
      else if (true !== i) l = i;
      else throw s
    }
    return (0, Chunk647438.createElement)(r.Provider, {
      value: {
        didCatch: a,
        error: s,
        resetErrorBoundary: this.resetErrorBoundary
      }
    }, l)
  }
}