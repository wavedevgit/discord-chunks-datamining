/** Chunk was on web.js **/
/** chunk id: 544891, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J9: () => Chunk357280.J,
  Jt: () => L,
  K0: () => P,
  Pd: () => g,
  f$: () => Chunk343817.f$,
  lg: () => D,
  sX: () => Chunk343817.Hx,
  tn: () => R,
  yZ: () => Chunk817109.H
}), require("./388685.js"), require("./704826.js"), require("./35282.js"), require("./415506.js"), require("./539854.js"), require("./49124.js");
var Chunk203651 = require("./203651.js"),
  i = require.n(Chunk203651),
  Chunk261470 = require("./261470.js");
require("./17089.js");
var Chunk579092 = require("./579092.js"),
  Chunk343817 = require("./343817.js"),
  Chunk357280 = require("./357280.js");
require("./380094.js");
var Chunk817109 = require("./817109.js"),
  u = require("./413135.js").Buffer;

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let h = new Chunk579092.Yd("HTTPUtils"),
  m = new Set([502, 504, 507, 598, 599, 522, 523, 524]);
class g extends Error {
  constructor({
    method: e,
    url: t,
    ok: n,
    status: r,
    body: i,
    text: a,
    headers: o
  }, ...s) {
    super("".concat(e.toUpperCase(), " ").concat(t.replace(/\d+/g, "xxx"), " [").concat(r, "]"), ...s), d(this, "method", true), d(this, "url", true), d(this, "ok", true), d(this, "status", true), d(this, "body", true), d(this, "text", true), d(this, "headers", true), this.name = "HTTPResponseError", this.method = e, this.url = t, this.ok = n, this.status = r, this.body = i, this.text = a, this.headers = o
  }
}

function E(e, t, n, r, o) {
  var c, u, d, _, h;
  let b = i()[e](t.url);
  if (null != t.onRequestCreated && t.onRequestCreated(b), null != t.query) {
    let e = t.query;
    if ("object" == typeof e) {
      let t = f({}, e);
      Object.keys(t).map(e => {
        null == t[e] && delete t[e]
      }), e = t
    }
    b.query(e)
  }
  if (t.body && b.send(t.body), null != t.headers && b.set(t.headers), null != t.reason && b.set("X-Audit-Log-Reason", encodeURIComponent(t.reason)), null == (c = t.attachments) || c.forEach(e => {
      b.attach(e.name, e.file, e.filename)
    }), null == (u = t.fields) || u.forEach(e => {
      b.field(e.name, e.value)
    }), null != t.context) {
    let e = M(t.context);
    null != e && b.set("X-Context-Properties", e)
  }
  null != t.retried && 0 !== t.retried && b.set("X-Failed-Requests", "".concat(t.retried)), null != t.timeout && 0 !== t.timeout && b.timeout(t.timeout), t.binary && b.responseType("blob"), null != t.onRequestProgress && b.on("progress", e => {
    var n;
    null == (n = t.onRequestProgress) || n.call(t, e)
  });
  let y = () => {
    t.backoff = null != t.backoff ? t.backoff : new a.Z, t.retried = (null != t.retried ? t.retried : 0) + 1, t.backoff.fail(() => x(t.url).then(() => E(e, t, n, r, o)))
  };
  null == w || null == (d = w.prepareRequest) || d.call(w, b), b.ok(e => null != e.status), b.then(i => {
    var a, c, u;
    if (null != t.retries && t.retries-- > 0 && m.has(i.status)) return y();
    let d = {
      ok: i.ok,
      headers: i.headers,
      body: i.body,
      text: i.text,
      status: i.status
    };
    O(t, d);
    let _ = false,
      h = (i, a) => {
        let s = p(f({}, t), {
          headers: f({}, t.headers, i),
          interceptResponse: a
        });
        _ = true, E(e, s, n, r, o)
      },
      b = e => {
        _ || (r(e), null == o || o({
          ok: false,
          hasErr: true,
          err: e
        }))
      };
    if ((null == t || null == (a = t.interceptResponse) ? true : a.call(t, i, h, b)) !== true && (null == w || null == (c = w.interceptResponse) ? true : c.call(w, i, h, b)) !== true) {
      if (i.ok) n(d);
      else {
        if (t.oldFormErrors && (null == d || null == (u = d.body) ? true : u.code) === s.f$) {
          let {
            errors: e
          } = d.body;
          null != e && (d.body = (0, l.J)(e))
        }
        t.rejectWithError ? r(new g({
          method: e,
          url: t.url,
          ok: d.ok,
          status: d.status,
          body: d.body,
          text: d.text,
          headers: d.headers
        })) : r(d)
      }
      null != o && o(f({
        hasErr: false
      }, d))
    }
  }, e => {
    null != t.retries && t.retries-- > 0 && "ABORTED" !== e.code ? y() : (O(t), r(e), null != o && o({
      ok: false,
      hasErr: true,
      err: e
    }))
  }), (null == (_ = t.signal) ? true : _.aborted) ? b.abort() : null == (h = t.signal) || h.addEventListener("abort", () => b.abort(), {
    once: true
  })
}
let b = new Map;

function y(e) {
  let t = b.get(e);
  if (null == t) return void h.verbose("rateLimitExpirationHandler: rate limit for", e, "expired, but record was already removed");
  let n = t.queue.shift();
  if (null == n) {
    h.verbose("rateLimitExpirationHandler: removing key for", e), b.delete(e);
    return
  }
  h.verbose("rateLimitExpirationHandler: moving to next record for ", e), n()
}

function O(e, t) {
  let n = b.get(e.url);
  if (null != t && 429 === t.status) {
    var r, i, a;
    let o = (null == (r = t.body) ? true : r.retry_after) || 5,
      s = Date.now() + 1e3 * o;
    if (null != n)
      if (!(n.retryAfterTimestamp < s)) return void h.verbose("cleanupRequestEntry: already has rate limit for ", e.url);
      else h.verbose("cleanupRequestEntry: extending rate limit for ", e.url), clearTimeout(n.timeoutId);
    h.verbose("cleanupRequestEntry: rate limit for ".concat(e.url, " retry after ").concat(o, " seconds"));
    let l = setTimeout(() => y(e.url), 1e3 * o);
    b.set(e.url, {
      queue: null != (a = null == n ? true : n.queue) ? a : [],
      retryAfterTimestamp: s,
      latestErrorMessage: String(null == (i = t.body) ? true : i.message),
      timeoutId: l
    })
  } else null != n && n.retryAfterTimestamp < Date.now() && (h.verbose("cleanupRequestEntry: rate limit for ", e.url, "expired"), y(e.url))
}
let v = (e, t, n) => {
  let r = Math.round((t.retryAfterTimestamp - Date.now()) / 1e3);
  e({
    status: 429,
    body: {
      message: t.latestErrorMessage,
      retry_after: r
    }
  }), null != n && n({
    ok: true,
    hasErr: false,
    status: 429,
    body: {
      message: t.latestErrorMessage,
      retry_after: r
    },
    text: "",
    headers: {}
  })
};

function I(e, t, n) {
  return new Promise((r, i) => {
    "string" == typeof t && (t = {
      url: t,
      rejectWithError: false
    });
    let a = b.get(t.url);
    if (null != a && t.failImmediatelyWhenRateLimited) return v(i, a, n);
    null != a ? (h.verbose("makeRequest: queueing request for ", t.url), a.queue.push(E.bind(null, e, t, r, i, n))) : E(e, t, r, i, n)
  })
}
let S = I.bind(null, "get"),
  T = I.bind(null, "post"),
  A = I.bind(null, "put"),
  C = I.bind(null, "patch"),
  N = I.bind(null, "del"),
  R = {
    get: S,
    post: T,
    put: A,
    patch: C,
    del: N
  };
if (require.g.isServerRendering) {
  let e = (e, t) => Promise.resolve({
    ok: true,
    status: 200,
    headers: {},
    body: null,
    text: ""
  });
  S = module, T = module, A = module, C = module, N = module
}

function P() {
  let e = !(arguments.length > 0) || true === arguments[0] || arguments[0];
  return "https:" + window.GLOBAL_ENV.API_ENDPOINT + (module ? "/v".concat(window.GLOBAL_ENV.API_VERSION) : "")
}
let w = null;

function D(e) {
  w = e
}
let x = () => Promise.resolve();

function L(e) {
  x = e
}

function M(e) {
  try {
    return u.from(JSON.stringify(e)).toString("base64")
  } catch (e) {
    return null
  }
}