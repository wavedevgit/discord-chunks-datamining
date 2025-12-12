/** Chunk was on web.js **/
/** chunk id: 797614, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./388685.js"), require("./539854.js");
var Chunk404097 = require("./404097.js"),
  Chunk544891 = require("./544891.js"),
  Chunk358085 = require("./358085.js"),
  Chunk747268 = require("./747268.js"),
  Chunk20186 = require("./20186.js"),
  Chunk981631 = require("./981631.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function d(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let p = new Set(["darwin", "linux", "win32", "ios", "android"]);

function _() {
  if ((0, Chunk358085.isWeb)()) return "web";
  {
    let e = (0, Chunk358085.getPlatformName)();
    return p.has(module) ? module : null
  }
}

function m() {
  let e = Chunk747268.Z;
  return null != module && Chunk404097.e.ALL.has(module) ? module : null
}
let h = 12e4,
  g = 100;
class E {
  _getMetricWithDefaults(e, t) {
    let {
      name: n,
      tags: r
    } = e, i = {
      name: n,
      type: t,
      tags: (0, s.d)()
    };
    null != r && r.forEach(e => {
      i.tags.push(e)
    });
    let a = _();
    null != a && i.tags.push("platform:".concat(a));
    let o = m();
    return null != o && i.tags.push("release_channel:".concat(o)), i
  }
  increment(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
      n = this._getMetricWithDefaults(e, "count");
    this._metrics.push(n), (t || this._metrics.length >= g) && this._flush()
  }
  distribution(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
      r = f(u({}, this._getMetricWithDefaults(e, "distribution")), {
        value: t
      });
    this._metrics.push(r), (n || this._metrics.length >= g) && this._flush()
  }
  _flush() {
    if (this._metrics.length > 0) {
      let e = [...this._metrics];
      Chunk544891.tn.post({
        url: Chunk981631.ANM.METRICS_V2,
        body: {
          metrics: module,
          client_info: {
            built_at: "1765572250957",
            build_number: "479618"
          }
        },
        retries: 1,
        rejectWithError: true
      }).catch(t => {
        this._metrics.length + e.length < g && (this._metrics = [...this._metrics, ...e])
      })
    }
    this._metrics = []
  }
  constructor() {
    c(this, "_metrics", true), c(this, "_intervalId", true), this._metrics = [], this._intervalId = setInterval(() => {
      this._flush()
    }, h)
  }
}
let b = new E