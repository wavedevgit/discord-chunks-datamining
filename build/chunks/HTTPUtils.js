/** Chunk was on web.js **/
/** chunk id: 562465, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $F: () => s.LG,
  Bo: () => w,
  Cu: () => x,
  IA: () => D,
  TP: () => R,
  Wl: () => c.L,
  bG: () => s.bG,
  ni: () => l.n,
  oh: () => g
}), require("./896048.js"), require("./747238.js"), require("./812715.js"), require("./65821.js"), require("./321073.js"), require("./457529.js");
var Chunk333405 = require("./333405.js"),
  i = require.n(Chunk333405),
  Chunk158390 = require("./158390.js");
require("./423034.js");
var Chunk118356 = require("./118356.js"),
  Chunk319400 = require("./319400.js"),
  Chunk467710 = require("./467710.js");
require("./1880.js");
var Chunk335713 = require("./335713.js"),
  u = require("./264572.js").Buffer;

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

function p(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let h = new Chunk118356.Vy("HTTPUtils"),
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
    const l = t.replace(/\d+/g, "xxx");
    super("".concat(e.toUpperCase(), " ").concat(l, " [").concat(r, "]"), ...s), d(this, "method", true), d(this, "url", true), d(this, "ok", true), d(this, "status", true), d(this, "body", true), d(this, "text", true), d(this, "headers", true), this.name = "HTTPResponseError", this.method = e, this.url = t, this.ok = n, this.status = r, this.body = i, this.text = a, this.headers = o
  }
}

function E(e, t, n, r, o) {
  var c, u, d, p, h;
  let y = i()[e](t.url);
  if (null != t.onRequestCreated && t.onRequestCreated(y), null != t.query) {
    let e = t.query;
    if ("object" == typeof e) {
      let t = f({}, e);
      Object.keys(t).map(e => {
        null == t[e] && delete t[e]
      }), e = t
    }
    y.query(e)
  }
  if (t.body && y.send(t.body), null != t.headers && y.set(t.headers), true === t.withCredentials && y.withCredentials(), null != t.reason && y.set("X-Audit-Log-Reason", encodeURIComponent(t.reason)), null == (c = t.attachments) || c.forEach(e => {
      y.attach(e.name, e.file, e.filename)
    }), null == (u = t.fields) || u.forEach(e => {
      y.field(e.name, e.value)
    }), null != t.context) {
    let e = M(t.context);
    null != e && y.set("X-Context-Properties", e)
  }
  null != t.retried && 0 !== t.retried && y.set("X-Failed-Requests", "".concat(t.retried)), null != t.timeout && 0 !== t.timeout && y.timeout(t.timeout), t.binary && y.responseType("blob"), null != t.onRequestProgress && y.on("progress", e => {
    var n;
    null == (n = t.onRequestProgress) || n.call(t, e)
  });
  let b = () => {
    t.backoff = null != t.backoff ? t.backoff : new a.A, t.retried = (null != t.retried ? t.retried : 0) + 1, t.backoff.fail(() => L(t.url).then(() => E(e, t, n, r, o)))
  };
  null == P || null == (d = P.prepareRequest) || d.call(P, y), y.ok(e => null != e.status), y.then(i => {
    var a, c, u;
    if (null != t.retries && t.retries-- > 0 && m.has(i.status)) return b();
    let d = {
      ok: i.ok,
      headers: i.headers,
      body: i.body,
      text: i.text,
      status: i.status
    };
    O(t, d);
    let p = false,
      h = (i, a) => {
        let s = _(f({}, t), {
          headers: f({}, t.headers, i),
          interceptResponse: a
        });
        p = true, E(e, s, n, r, o)
      },
      y = e => {
        p || (r(e), null == o || o({
          ok: false,
          hasErr: true,
          err: e
        }))
      };
    if ((null == t || null == (a = t.interceptResponse) ? true : a.call(t, i, h, y)) !== true && (null == P || null == (c = P.interceptResponse) ? true : c.call(P, i, h, y)) !== true) {
      if (i.ok) n(d);
      else {
        if (t.oldFormErrors && (null == d || null == (u = d.body) ? true : u.code) === s.bG) {
          let {
            errors: e
          } = d.body;
          null != e && (d.body = (0, l.n)(e))
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
    null != t.retries && t.retries-- > 0 && "ABORTED" !== e.code ? b() : (O(t), r(e), null != o && o({
      ok: false,
      hasErr: true,
      err: e
    }))
  }), (null == (p = t.signal) ? true : p.aborted) ? y.abort() : null == (h = t.signal) || h.addEventListener("abort", () => y.abort(), {
    once: true
  })
}
let y = new Map;

function b(e) {
  let t = y.get(e);
  if (null == t) return void h.verbose("rateLimitExpirationHandler: rate limit for", e, "expired, but record was already removed");
  let n = t.queue.shift();
  if (null == n) {
    h.verbose("rateLimitExpirationHandler: removing key for", e), y.delete(e);
    return
  }
  h.verbose("rateLimitExpirationHandler: moving to next record for ", e), n()
}

function O(e, t) {
  let n = y.get(e.url);
  if (null != t && 429 === t.status) {
    var r, i, a;
    let o = (null == (i = t.body) ? true : i.retry_after) || 5,
      s = Date.now() + 1e3 * o;
    if (null != n)
      if (!(n.retryAfterTimestamp < s)) return void h.verbose("cleanupRequestEntry: already has rate limit for ", e.url);
      else h.verbose("cleanupRequestEntry: extending rate limit for ", e.url), clearTimeout(n.timeoutId);
    h.verbose("cleanupRequestEntry: rate limit for ".concat(e.url, " retry after ").concat(o, " seconds"));
    let l = setTimeout(() => b(e.url), 1e3 * o);
    y.set(e.url, {
      queue: null != (r = null == n ? true : n.queue) ? r : [],
      retryAfterTimestamp: s,
      latestErrorMessage: String(null == (a = t.body) ? true : a.message),
      timeoutId: l
    })
  } else null != n && n.retryAfterTimestamp < Date.now() && (h.verbose("cleanupRequestEntry: rate limit for ", e.url, "expired"), b(e.url))
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

function A(e, t, n) {
  return new Promise((r, i) => {
    "string" == typeof t && (t = {
      url: t,
      rejectWithError: false
    });
    let a = y.get(t.url);
    if (null != a && t.failImmediatelyWhenRateLimited) return v(i, a, n);
    null != a ? (h.verbose("makeRequest: queueing request for ", t.url), a.queue.push(E.bind(null, e, t, r, i, n))) : E(e, t, r, i, n)
  })
}
let I = A.bind(null, "get"),
  S = A.bind(null, "post"),
  T = A.bind(null, "put"),
  C = A.bind(null, "patch"),
  N = A.bind(null, "del"),
  w = {
    get: I,
    post: S,
    put: T,
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
  I = module, S = module, T = module, C = module, N = module
}

function R() {
  let e = !(arguments.length > 0) || true === arguments[0] || arguments[0];
  return "https:" + window.GLOBAL_ENV.API_ENDPOINT + (e ? "/v".concat(window.GLOBAL_ENV.API_VERSION) : "")
}
let P = null;

function D(e) {
  P = e
}
let L = () => Promise.resolve();

function x(e) {
  L = e
}

function M(e) {
  try {
    return u.from(JSON.stringify(e)).toString("base64")
  } catch (e) {
    return null
  }
}