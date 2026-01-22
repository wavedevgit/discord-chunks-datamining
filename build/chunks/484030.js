/** Chunk was on web.js **/
/** chunk id: 484030, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  tH: () => s
});
var Chunk64700 = require("./64700.js");
let i = (0, Chunk64700.createContext)(null),
  a = {
    didCatch: false,
    error: null
  };
class s extends Chunk64700.Component {
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
    if (null !== e) {
      for (var t, n, r = arguments.length, i = Array(r), s = 0; s < r; s++) i[s] = arguments[s];
      null == (t = (n = this.props).onReset) || t.call(n, {
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
    if (n && null !== t.error && o(e.resetKeys, r)) {
      var i, s;
      null == (i = (s = this.props).onReset) || i.call(s, {
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
      didCatch: s,
      error: o
    } = this.state, l = e;
    if (s) {
      let e = {
        error: o,
        resetErrorBoundary: this.resetErrorBoundary
      };
      if ("function" == typeof t) l = t(e);
      else if (n) l = (0, r.createElement)(n, e);
      else if (true !== a) l = a;
      else throw o
    }
    return (0, r.createElement)(i.Provider, {
      value: {
        didCatch: s,
        error: o,
        resetErrorBoundary: this.resetErrorBoundary
      }
    }, l)
  }
}

function o() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : [],
    t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [];
  return e.length !== t.length || e.some((e, n) => !Object.is(e, t[n]))
}