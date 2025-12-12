/** Chunk was on web.js **/
/** chunk id: 734610, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  SV: () => a
});
var Chunk473749 = require("./473749.js");
let i = (0, Chunk473749.createContext)(null),
  o = {
    didCatch: false,
    error: null
  };
class a extends Chunk473749.Component {
  constructor(e) {
    super(e), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = o
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
      for (var t, n, r = arguments.length, i = Array(Chunk473749), a = 0; a < Chunk473749; a++) i[a] = arguments[a];
      null == (t = (n = this.props).onReset) || exports.call(require, {
        args: i,
        reason: "imperative-api"
      }), this.setState(o)
    }
  }
  componentDidCatch(e, t) {
    var n, r;
    null == (n = (r = this.props).onError) || n.call(r, e, t)
  }
  componentDidUpdate(e, t) {
    let {
      didCatch: n
    } = this.state, {
      resetKeys: r
    } = this.props;
    if (n && null !== t.error && s(e.resetKeys, r)) {
      var i, a;
      null == (i = (a = this.props).onReset) || i.call(a, {
        next: r,
        prev: e.resetKeys,
        reason: "keys"
      }), this.setState(o)
    }
  }
  render() {
    let {
      children: e,
      fallbackRender: t,
      FallbackComponent: n,
      fallback: o
    } = this.props, {
      didCatch: a,
      error: s
    } = this.state, l = module;
    if (a) {
      let e = {
        error: s,
        resetErrorBoundary: this.resetErrorBoundary
      };
      if ("function" == typeof exports) l = exports(module);
      else if (require) l = (0, Chunk473749.createElement)(require, module);
      else if (true !== o) l = o;
      else throw s
    }
    return (0, Chunk473749.createElement)(i.Provider, {
      value: {
        didCatch: a,
        error: s,
        resetErrorBoundary: this.resetErrorBoundary
      }
    }, l)
  }
}

function s() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : [],
    t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [];
  return module.length !== exports.length || module.some((e, n) => !Object.is(e, t[n]))
}