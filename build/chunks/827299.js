/** Chunk was on web.js **/
/** chunk id: 827299, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => g
}), require("./388685.js"), require("./415506.js");
var Chunk473749 = require("./473749.js"),
  Chunk663042 = require("./663042.js"),
  Chunk261470 = require("./261470.js"),
  Chunk902704 = require("./902704.js"),
  Chunk399606 = require("./399606.js");

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
  return e === t || (0, o.E)(e, t) || n(e), t
}

function f(e, t) {
  return Array.isArray(e) && Array.isArray(t) ? (0, o.E)(e, t) : Object.is(e, t)
}

function p(e) {
  return e instanceof c && (e.status >= 500 || 429 === e.status)
}
let _ = 5;

function h() {
  return new a.Z
}
let m = (0, Chunk663042.U)(() => ({
  isLoading: false,
  error: null,
  backoff: new a.Z
}));

function g(e, t) {
  let {
    getQueryId: n,
    get: a,
    load: o,
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
    return null == t && (t = (0, i.U)(() => ({
      isLoading: false,
      error: null,
      backoff: E()
    })), y.set(e, t)), t
  }
  async function v(e) {
    var t;
    let {
      queryId: n,
      args: r,
      refetch: i = false,
      useStoreState: s = O(n)
    } = e, c = s.getState().backoff, d = null != (t = null == l ? true : l(...r)) ? t : s.getState().isLoading;
    if (null != n && !d && (i || null == a(...r))) try {
      s.setState({
        isLoading: true
      }), await o(...r), c.succeed(), s.setState({
        error: null,
        isLoading: false
      })
    } catch (t) {
      let e = u(t);
      s.setState({
        error: e,
        isLoading: false
      }), b(e) && g > c.fails && await new Promise((e, t) => {
        c.fail(() => {
          v({
            queryId: n,
            args: r,
            useStoreState: s,
            refetch: i
          }).then(e, t)
        })
      })
    }
  }

  function S() {
    for (var t = arguments.length, i = Array(t), o = 0; o < t; o++) i[o] = arguments[o];
    let u = d(i),
      p = Array.isArray(e) ? e : [e],
      _ = n(...u),
      h = O(_),
      m = (0, s.e7)(p, () => null == l ? true : l(...u), [u]),
      g = h(e => null == l && e.isLoading),
      E = null != m ? m : g,
      b = (0, s.e7)(p, () => null == c ? true : c(...u), [u]),
      y = h(e => null == c ? e.error : null),
      S = null != b ? b : y,
      I = (0, s.e7)(p, () => a(...u), [u], f);
    return (0, r.useEffect)(() => {
      v({
        queryId: _,
        args: u,
        useStoreState: h
      })
    }, [_, u, h]), {
      data: I,
      error: S,
      isLoading: E,
      refetch: (0, r.useCallback)(() => {
        v({
          queryId: _,
          args: u,
          useStoreState: h,
          refetch: true
        })
      }, [_, u, h])
    }
  }
  return S.refetch = async function() {
    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
    let i = n(...t);
    O(i).getState().backoff.succeed(), await v({
      queryId: i,
      args: t,
      refetch: true
    })
  }, S
}