/** Chunk was on 85831 **/
t.d(n, {
  SV: () => i
});
var r = t(73800);
let l = (0, r.createContext)(null),
  o = {
    didCatch: !1,
    error: null
  };
class i extends r.Component {
  constructor(e) {
    super(e), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = o
  }
  static getDerivedStateFromError(e) {
    return {
      didCatch: !0,
      error: e
    }
  }
  resetErrorBoundary() {
    let {
      error: e
    } = this.state;
    if (null !== e) {
      for (var n, t, r = arguments.length, l = Array(r), i = 0; i < r; i++) l[i] = arguments[i];
      null == (n = (t = this.props).onReset) || n.call(t, {
        args: l,
        reason: "imperative-api"
      }), this.setState(o)
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
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        return e.length !== n.length || e.some((e, t) => !Object.is(e, n[t]))
      }(e.resetKeys, r)) {
      var l, i;
      null == (l = (i = this.props).onReset) || l.call(i, {
        next: r,
        prev: e.resetKeys,
        reason: "keys"
      }), this.setState(o)
    }
  }
  render() {
    let {
      children: e,
      fallbackRender: n,
      FallbackComponent: t,
      fallback: o
    } = this.props, {
      didCatch: i,
      error: c
    } = this.state, a = e;
    if (i) {
      let e = {
        error: c,
        resetErrorBoundary: this.resetErrorBoundary
      };
      if ("function" == typeof n) a = n(e);
      else if (t) a = (0, r.createElement)(t, e);
      else if (void 0 !== o) a = o;
      else throw c
    }
    return (0, r.createElement)(l.Provider, {
      value: {
        didCatch: i,
        error: c,
        resetErrorBoundary: this.resetErrorBoundary
      }
    }, a)
  }
}