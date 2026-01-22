/** Chunk was on web.js **/
/** chunk id: 986192, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => g
}), require("./896048.js"), require("./65821.js");
var Chunk64700 = require("./64700.js"),
  Chunk353640 = require("./353640.js"),
  Chunk158390 = require("./158390.js"),
  Chunk52133 = require("./52133.js"),
  Chunk417597 = require("./417597.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class c extends Error {
  setStatus(e) {
    this.status = e
  }
  constructor(...e) {
    super(...e), l(this, "name", "HTTPResponseError"), l(this, "status", 0)
  }
}

function u(e) {
  if (e instanceof Error) return e;
  if ("object" == typeof e && null != e && "status" in e && "number" == typeof e.status) {
    if ("body" in e && null != e.body && "object" == typeof e.body && "message" in e.body) {
      let t = new c(String(e.body.message));
      return t.setStatus(e.status), t
    }
    let t = new c(Object.entries(e).map(e => {
      let [t, n] = e;
      return "".concat(t, ": [").concat(String(n), "]")
    }).join(","));
    return t.setStatus(e.status), t
  }
  return Error(String(e))
}

function d(e) {
  let [t, n] = (0, r.useState)(e);
  return e === t || (0, s.v)(e, t) || n(e), t
}

function f(e, t) {
  return Array.isArray(e) && Array.isArray(t) ? (0, s.v)(e, t) : Object.is(e, t)
}

function p(e) {
  return e instanceof c && (e.status >= 500 || 429 === e.status)
}
let _ = 5;

function h() {
  return new a.A
}
let m = (0, Chunk353640.v)(() => ({
  isLoading: false,
  error: null,
  backoff: new a.A
}));

function g(e, t) {
  let {
    getQueryId: n,
    get: a,
    load: s,
    getIsLoading: l,
    getError: c,
    retryConfig: {
      maxRetries: g = _,
      backoff: E = h,
      retryableErrors: b = p
    } = {}
  } = t, y = new Map;

  function O(e) {
    if (null == e) return m;
    let t = y.get(e);
    return null == t && (t = (0, i.v)(() => ({
      isLoading: false,
      error: null,
      backoff: E()
    })), y.set(e, t)), t
  }
  async function A(e) {
    var t;
    let {
      queryId: n,
      args: r,
      refetch: i = false,
      useStoreState: o = O(n)
    } = e, c = o.getState().backoff, d = null != (t = null == l ? true : l(...r)) ? t : o.getState().isLoading;
    if (null != n && !d && (i || null == a(...r))) try {
      o.setState({
        isLoading: true
      }), await s(...r), c.succeed(), o.setState({
        error: null,
        isLoading: false
      })
    } catch (t) {
      let e = u(t);
      o.setState({
        error: e,
        isLoading: false
      }), b(e) && g > c.fails && await new Promise((e, t) => {
        c.fail(() => {
          A({
            queryId: n,
            args: r,
            useStoreState: o,
            refetch: i
          }).then(e, t)
        })
      })
    }
  }

  function v() {
    for (var t = arguments.length, i = Array(t), s = 0; s < t; s++) i[s] = arguments[s];
    let u = d(i),
      p = Array.isArray(e) ? e : [e],
      _ = n(...u),
      h = O(_),
      m = (0, o.bG)(p, () => null == l ? true : l(...u), [u]),
      g = h(e => null == l && e.isLoading),
      E = null != m ? m : g,
      b = (0, o.bG)(p, () => null == c ? true : c(...u), [u]),
      y = h(e => null == c ? e.error : null),
      v = null != b ? b : y,
      S = (0, o.bG)(p, () => a(...u), [u], f);
    return (0, r.useEffect)(() => {
      A({
        queryId: _,
        args: u,
        useStoreState: h
      })
    }, [_, u, h]), {
      data: S,
      error: v,
      isLoading: E,
      refetch: (0, r.useCallback)(() => {
        A({
          queryId: _,
          args: u,
          useStoreState: h,
          refetch: true
        })
      }, [_, u, h])
    }
  }
  return v.refetch = async function() {
    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
    let i = n(...t);
    O(i).getState().backoff.succeed(), await A({
      queryId: i,
      args: t,
      refetch: true
    })
  }, v
}