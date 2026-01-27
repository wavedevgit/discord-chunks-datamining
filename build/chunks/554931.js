/** Chunk was on 52199 **/
/** chunk id: 554931, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => i
}), require("./896048.js");
var Chunk835245 = require("./835245.js"),
  Chunk822382 = require("./822382.js");

function s(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = r, e
}

function a() {
  return {
    sessionId: (0, n.A)(),
    searchQueryId: null
  }
}
class i {
  getSession(e) {
    var t;
    return null != (t = this.sessions.get((0, l.bS)(e))) ? t : null
  }
  setSession(e, t) {
    var r;
    let n = (0, l.bS)(e),
      i = null != (r = this.sessions.get(n)) ? r : a();
    this.sessions.set(n, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
          n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
          return Object.getOwnPropertyDescriptor(r, e).enumerable
        }))), n.forEach(function(t) {
          s(e, t, r[t])
        })
      }
      return e
    }({}, i, t))
  }
  deleteSession(e) {
    this.sessions.delete((0, l.bS)(e))
  }
  getSessionId(e) {
    var t, r;
    return null != (t = null == (r = this.getSession(e)) ? true : r.sessionId) ? t : null
  }
  getQueryId(e) {
    var t, r;
    return null != (t = null == (r = this.getSession(e)) ? true : r.searchQueryId) ? t : null
  }
  refreshQueryId(e) {
    this.setSession(e, {
      searchQueryId: (0, n.A)()
    })
  }
  initialize(e) {
    for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), l = 1; l < t; l++) r[l - 1] = arguments[l];
    this._initialize(e, ...r), this.setSession(e, {
      sessionId: (0, n.A)(),
      searchQueryId: null
    })
  }
  terminate(e) {
    this._terminate(e), this.deleteSession(e)
  }
  transferSession(e, t) {
    this._transferSession(e, t);
    let r = this.getSession(e);
    this.sessions.set((0, l.bS)(t), null != r ? r : a()), this.deleteSession(e)
  }
  constructor() {
    s(this, "sessions", new Map)
  }
}