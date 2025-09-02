/** Chunk was on web.js **/
/** chunk id: 827299, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => S
}), require("./388685.js"), require("./35282.js"), require("./539854.js"), require("./415506.js");
var Chunk647438 = require("./647438.js"),
  Chunk916140 = require("./916140.js"),
  a = require.n(Chunk916140),
  Chunk902704 = require("./902704.js"),
  Chunk399606 = require("./399606.js");

function l(e, t) {
  if (t.has(e)) throw TypeError("Cannot initialize the same private elements twice on an object")
}

function c(e, t) {
  return t.get ? t.get.call(e) : t.value
}

function u(e, t, n) {
  if (!t.has(e)) throw TypeError("attempted to " + n + " private field on non-instance");
  return t.get(e)
}

function d(e, t) {
  var n = u(e, t, "get");
  return c(e, n)
}

function f(e, t, n) {
  l(e, t), t.set(e, n)
}

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e, t) {
  if (t === s.Wu) {
    if (Array.isArray(e) && e.length > 0) returntrue
  } else if (null != e) returntrue;
  returnfalse
}
var h = new WeakMap,
  m = new WeakMap,
  g = new WeakMap;
class E {
  maybeAbort(e) {
    let {
      controller: t
    } = d(this.search(e), g);
    null != t && t.abort()
  }
  doesDataNeedValidation(e) {
    returntrue === d(this.search(e), g).isStale
  }
  getOrCreate(e) {
    return null == d(this, h)[e] && (d(this, h)[e] = new E), d(this, h)[e]
  }
  getState(e) {
    var t;
    return d(t = this.search(e), g)
  }
  loadingDone(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
      n = this.search(e);
    t ? (d(n, g).fetchFailCounter = 0, d(n, g).fetchState = 3) : (d(n, g).fetchFailCounter += 1, d(n, g).fetchState = 2), d(n, g).controller = true, this.notifyListeners(e)
  }
  loadingStart(e, t) {
    let n = this.search(e);
    d(n, g).fetchState = 1, d(n, g).isStale = false, null != t && (d(n, g).controller = t), d(n, g).error = true, this.notifyListeners(e)
  }
  notifyListeners(e) {
    d(this.search(e), m).forEach(e => {
      e()
    })
  }
  search(e) {
    if (null == e) return new E;
    let t = this;
    for (let n of e) t = t.getOrCreate(n);
    return t
  }
  setError(e, t) {
    let n = this.search(e);
    d(n, g).error = t, d(n, g).isStale = false
  }
  shouldLoad(e, t, n) {
    if (null == e) returnfalse;
    let r = this.getState(e);
    if (1 === r.fetchState || true === r.hasRetryScheduled && null != r.nextRetryAt && r.nextRetryAt > Date.now()) returnfalse;
    let i = p(n, t);
    return this.doesDataNeedValidation(e) || !i && 3 !== r.fetchState
  }
  scheduleRetry(e, t) {
    var n;
    let r = this.getState(e),
      i = (null != (n = r.retryAttempt) ? n : 0) + 1,
      o = null != t ? t.backoffMs(i) : 2 ** i * 1e3;
    r.nextRetryAt = Date.now() + o, r.hasRetryScheduled = true, r.retryAttempt = i, a()(() => {
      let t = this.getState(e);
      t.hasRetryScheduled && (t.hasRetryScheduled = false, t.isStale = true, null != e && this.notifyListeners(e))
    }, o)
  }
  shouldRetry(e, t, n) {
    var r, i;
    if (null == e || false === n) returnfalse;
    let a = this.getState(e),
      o = null != (r = null == n ? true : n.maxRetries) ? r : y;
    return !(a.fetchFailCounter >= o - 1) && !!(null != (i = null == n ? true : n.retryableErrors) ? i : e => e instanceof O && (e.status >= 500 || 429 === e.status))(t)
  }
  subscribe(e, t) {
    let n = this.search(e);
    return d(n, m).add(t), () => {
      d(n, m).delete(t)
    }
  }
  validate(e) {
    let t = this.search(e),
      n = [];
    n.push(...Array.from(d(t, m)));
    let r = Object.values(d(t, h));
    for (; r.length > 0;) {
      let e = r.pop();
      null != e && (d(e, g).isStale = true, E.resetErrorState(e), r.push(...Object.values(d(e, h))), n.push(...Array.from(d(e, m))))
    }
    d(t, g).isStale = true, E.resetErrorState(t), n.forEach(e => {
      e()
    })
  }
  static resetErrorState(e) {
    d(e, g).error = true, d(e, g).fetchFailCounter = 0, d(e, g).fetchState = 0, d(e, g).hasRetryScheduled = false, d(e, g).nextRetryAt = true, d(e, g).retryAttempt = 0
  }
  constructor() {
    f(this, h, {
      writable: true,
      value: Object.create(null)
    }), f(this, m, {
      writable: true,
      value: new Set
    }), f(this, g, {
      writable: true,
      value: {
        fetchFailCounter: 0,
        fetchState: 0
      }
    })
  }
}
let b = new E,
  y = 5;
class O extends Error {
  setStatus(e) {
    this.status = e
  }
  constructor(...e) {
    super(...e), _(this, "name", "HTTPResponseError"), _(this, "status", 0)
  }
}

function v(e) {
  if (e instanceof Error) return e;
  if ("object" == typeof e) {
    if ("body" in e && null != e.body && "message" in e.body) {
      let t = new O(String(e.body.message));
      return t.setStatus(e.status), t
    }
    let t = new O(Object.entries(e).map(e => {
      let [t, n] = e;
      return "".concat(t, ": [").concat(String(n), "]")
    }).join(","));
    return t.setStatus(e.status), t
  }
  return Error(String(e))
}

function I(e) {
  let t = (0, r.useRef)(e);
  return (0, o.E)(t.current, e) || (t.current = e), t.current
}

function S(e, t) {
  let {
    dangerousAbortOnCleanup: n = false,
    get: i,
    load: a,
    queryId: o,
    retryConfig: s,
    useStateHook: l
  } = t;
  return function() {
    for (var t = arguments.length, c = Array(t), u = 0; u < t; u++) c[u] = arguments[u];
    let d = I(c),
      f = (0, r.useMemo)(() => o(...d), d),
      _ = l(Array.isArray(e) ? e : [e], () => i(...d), d),
      h = b.getState(f).error,
      [m, g] = (0, r.useState)(0),
      [E, y] = (0, r.useState)(() => {
        let e = b.getState(f);
        return 0 === e.fetchState ? !p(_, l) : 1 === e.fetchState
      }),
      O = (0, r.useCallback)(async () => {
        if (null == f || !b.shouldLoad(f, l, _)) return;
        let e = new AbortController;
        b.loadingStart(f, n ? e : true);
        let t = false;
        try {
          await a(e.signal, ...d), t = true
        } catch (n) {
          if (e.signal.aborted) return;
          let t = v(n);
          if (false !== s && b.shouldRetry(f, t, s)) return void b.scheduleRetry(f, s);
          b.setError(f, t)
        } finally {
          b.loadingDone(f, t)
        }
      }, [d, _, f]);
    return (0, r.useEffect)(() => {
      if (null != f) return b.subscribe(f, () => {
        let e = b.getState(f);
        y(1 === e.fetchState), true === e.isStale && g(e => e + 1)
      })
    }, [f]), (0, r.useEffect)(() => {
      O()
    }, [m, O]), (0, r.useEffect)(() => () => {
      b.maybeAbort(f)
    }, [f]), {
      data: _,
      error: h,
      isLoading: E
    }
  }
}