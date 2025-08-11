/** Chunk was on 87597 **/
/** chunk id: 740442, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  SV: () => u
});
var Chunk73800 = require("./73800.js");
let o = (0, Chunk73800.createContext)(null),
  i = {
    didCatch: false,
    error: null
  };
class u extends Chunk73800.Component {
  constructor(e) {
    super(e), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = i
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
      for (var n, t, r = arguments.length, o = Array(Chunk73800), u = 0; u < Chunk73800; u++) o[u] = arguments[u];
      null == (n = (t = this.props).onReset) || exports.call(require, {
        args: o,
        reason: "imperative-api"
      }), this.setState(i)
    }
  }
  componentDidCatch(e, n) {
    var t, r;
    null == (t = (r = this.props).onError) || t.call(r, e, n)
  }
  componentDidUpdate(e, n) {
    let {
      didCatch: t
    } = this.state, {
      resetKeys: r
    } = this.props;
    if (t && null !== n.error && function() {
        let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : [],
          n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [];
        return e.length !== n.length || e.some((e, t) => !Object.is(e, n[t]))
      }(e.resetKeys, r)) {
      var o, u;
      null == (o = (u = this.props).onReset) || o.call(u, {
        next: r,
        prev: e.resetKeys,
        reason: "keys"
      }), this.setState(i)
    }
  }
  render() {
    let {
      children: e,
      fallbackRender: n,
      FallbackComponent: t,
      fallback: i
    } = this.props, {
      didCatch: u,
      error: c
    } = this.state, _ = module;
    if (u) {
      let e = {
        error: c,
        resetErrorBoundary: this.resetErrorBoundary
      };
      if ("function" == typeof exports) _ = exports(module);
      else if (require) _ = (0, Chunk73800.createElement)(require, module);
      else if (true !== i) _ = i;
      else throw c
    }
    return (0, Chunk73800.createElement)(o.Provider, {
      value: {
        didCatch: u,
        error: c,
        resetErrorBoundary: this.resetErrorBoundary
      }
    }, _)
  }
}