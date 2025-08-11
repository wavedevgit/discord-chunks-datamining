/** Chunk was on web.js **/
/** chunk id: 827299, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => E
}), require("./388685.js"), require("./35282.js"), require("./539854.js"), require("./415506.js");
var Chunk73800 = require("./73800.js"),
  Chunk399606 = require("./399606.js");

function o(e, t) {
  if (t.has(e)) throw TypeError("Cannot initialize the same private elements twice on an object")
}

function a(e, t) {
  return t.get ? t.get.call(e) : t.value
}

function s(e, t, n) {
  if (!t.has(e)) throw TypeError("attempted to " + n + " private field on non-instance");
  return t.get(e)
}

function l(e, t) {
  var n = s(e, t, "get");
  return a(e, n)
}

function c(e, t, n) {
  o(e, t), t.set(e, n)
}

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var d = new WeakMap,
  f = new WeakMap;
class _ {
  abort(e) {
    let {
      controller: t
    } = l(this.search(e), f);
    null != t && t.abort()
  }
  doesDataNeedValidation(e) {
    returntrue === l(this.search(e), f).isStale
  }
  getOrCreate(e) {
    return null == l(this, d)[e] && (l(this, d)[e] = new _), l(this, d)[e]
  }
  getState(e) {
    var t;
    return l(t = this.search(e), f)
  }
  loadingDone(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
      n = this.search(e);
    t ? (l(n, f).fetchFailCounter = 0, l(n, f).isStale = false, l(n, f).fetchState = 3) : (l(n, f).fetchFailCounter += 1, l(n, f).fetchState = 2)
  }
  loadingStart(e, t) {
    let n = this.search(e);
    l(n, f).fetchState = 1, null != t && (l(n, f).controller = t), l(n, f).error = true
  }
  search(e) {
    if (null == e) return new _;
    let t = this;
    for (let n of e) t = t.getOrCreate(n);
    return t
  }
  setError(e, t) {
    let n = this.search(e);
    l(n, f).error = t, l(n, f).isStale = false
  }
  subscribe(e, t) {
    l(this.search(e), f).validateData = t
  }
  validate(e) {
    let t = this.search(e),
      n = [];
    "function" == typeof l(t, f).validateData && n.push(l(t, f).validateData);
    let r = Object.values(l(t, d));
    for (; r.length > 0;) {
      let e = r.pop();
      null != e && (l(e, f).isStale = true, _.resetErrorState(e), r.push(...Object.values(l(e, d))), "function" == typeof l(e, f).validateData && n.push(l(e, f).validateData))
    }
    l(t, f).isStale = true, _.resetErrorState(t), n.forEach(e => e())
  }
  static resetErrorState(e) {
    l(e, f).error = true, l(e, f).fetchFailCounter = 0, l(e, f).fetchState = 0
  }
  constructor() {
    c(this, d, {
      writable: true,
      value: Object.create(null)
    }), c(this, f, {
      writable: true,
      value: {
        fetchFailCounter: 0,
        fetchState: 0
      }
    })
  }
}
let p = new _,
  h = 5;
class m extends Error {
  setStatus(e) {
    this.status = e
  }
  constructor(...e) {
    super(...e), u(this, "name", "HTTPResponseError"), u(this, "status", 0)
  }
}

function g(e) {
  if (e instanceof Error) return e;
  if ("object" == typeof e) {
    if ("body" in e && null != e.body && "message" in e.body) {
      let t = new m(String(e.body.message));
      return t.setStatus(e.status), t
    }
    let t = new m(Object.entries(e).map((e, t) => "".concat(e, ": [").concat(String(t), "]")).join(","));
    return t.setStatus(e.status), t
  }
  return Error(String(e))
}

function E(e, t) {
  let {
    dangerousAbortOnCleanup: n = false,
    get: o,
    load: a,
    maxNumFetchErrors: s = h,
    queryId: l,
    useStateHook: c
  } = t;
  return function() {
    for (var t = arguments.length, u = Array(t), d = 0; d < t; d++) u[d] = arguments[d];
    let f = (0, r.useMemo)(() => l(...u), u),
      _ = c(Array.isArray(e) ? e : [e], () => o(...u), u),
      h = p.getState(f),
      E = h.error,
      b = (0, r.useRef)(u);
    (0, r.useEffect)(() => {
      b.current = u
    }, [u]);
    let y = (0, r.useCallback)(() => {
        if (null == f || 1 === h.fetchState) returnfalse;
        let e = false;
        c === i.Wu ? _.length > 0 && (e = true) : null != _ && (e = true);
        let t = p.doesDataNeedValidation(f),
          n = null != E;
        return t || !e && !n
      }, [_, h.fetchState, E, f]),
      O = (0, r.useCallback)(() => {
        if (null == f || !y()) return;
        let e = new AbortController;
        p.loadingStart(f, n ? e : true), a(e.signal, ...b.current).then(e => (p.loadingDone(f, true), e)).catch(t => {
          if (p.loadingDone(f), e.signal.aborted) return;
          let n = g(t);
          !(h.fetchFailCounter >= s) && n instanceof m && (n.status >= 500 || 429 === n.status) || p.setError(f, n)
        })
      }, [h.fetchFailCounter, f, y]);
    return (0, r.useEffect)(() => (O(), p.subscribe(f, O), () => {
      p.abort(f), p.subscribe(f, true)
    }), [f, O]), {
      data: _,
      error: E,
      isLoading: 0 === h.fetchState ? y() : 1 === h.fetchState
    }
  }
}