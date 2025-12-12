/** Chunk was on web.js **/
/** chunk id: 734610, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  SV: () => o
});
var Chunk473749 = require("./473749.js");
let i = (0, Chunk473749.createContext)(null),
  a = {
    didCatch: false,
    error: null
  };
class o extends Chunk473749.Component {
  constructor(e) {
    super(e), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = a
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
      for (var t, n, r = arguments.length, i = Array(Chunk473749), o = 0; o < Chunk473749; o++) i[o] = arguments[o];
      null == (t = (n = this.props).onReset) || exports.call(require, {
        args: i,
        reason: "imperative-api"
      }), this.setState(a)
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
      var i, o;
      null == (i = (o = this.props).onReset) || i.call(o, {
        next: r,
        prev: e.resetKeys,
        reason: "keys"
      }), this.setState(a)
    }
  }
  render() {
    let {
      children: e,
      fallbackRender: t,
      FallbackComponent: n,
      fallback: a
    } = this.props, {
      didCatch: o,
      error: s
    } = this.state, l = module;
    if (o) {
      let e = {
        error: s,
        resetErrorBoundary: this.resetErrorBoundary
      };
      if ("function" == typeof exports) l = exports(module);
      else if (require) l = (0, Chunk473749.createElement)(require, module);
      else if (true !== a) l = a;
      else throw s
    }
    return (0, Chunk473749.createElement)(i.Provider, {
      value: {
        didCatch: o,
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