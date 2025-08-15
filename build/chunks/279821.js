/** Chunk was on web.js **/
/** chunk id: 279821, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
require.d(exports, {
  d: () => a
}), require("./415506.js");
class i {
  raise(e) {
    throw e
  }
  setCallbacks(e) {
    this.callback = e.response
  }
  databaseOpen(e, t, n) {
    let r = 'kv_storage: platform "web" is not supported at this time.';
    if (null == n ? true : n.synchronous) throw Error(r);
    return this.reply({
      requestId: e,
      synchronous: false,
      ok: false,
      data: r
    })
  }
  databaseList(e, t) {
    return this.reply({
      requestId: e,
      synchronous: null == t ? true : t.synchronous,
      ok: true,
      data: []
    })
  }
  databaseDelete(e, t, n) {
    return this.reply({
      requestId: e,
      synchronous: null == n ? true : n.synchronous,
      ok: true,
      data: true
    })
  }
  databaseOptimize(e, t, n) {
    return this.reply({
      requestId: e,
      synchronous: null == n ? true : n.synchronous,
      ok: true,
      data: true
    })
  }
  reply(e) {
    if (e.synchronous) return e.data;
    if (null != e.requestId) {
      var t, n;
      let r = 0;
      null == (t = (n = this).callback) || t.call(n, {
        id: e.requestId,
        ok: e.ok,
        data: e.data,
        timings: {
          queueTimeNanoseconds: 0,
          executionTimeNanoseconds: 0,
          materializationTimeNanoseconds: 0,
          totalTimeNanoseconds: 0
        }
      }, r)
    }
  }
  constructor() {
    r(this, "callback", null)
  }
}
let a = new i