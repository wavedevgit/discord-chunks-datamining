/** Chunk was on web.js **/
/** chunk id: 887018, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  x: () => a
});
var Chunk689234 = require("./689234.js"),
  Chunk129966 = require("./129966.js");
class a {
  static open(e, t) {
    return i.v.executeAsync("database_open", n => {
      var i;
      return r.T.databaseOpen(n, {
        database: e,
        invalidateDisabledHandles: null != (i = null == t ? true : t.invalidateDisabledHandles) && i
      })
    })
  }
  static openSyncUnsafe(e, t) {
    var n;
    return r.T.databaseOpen(null, {
      database: e,
      invalidateDisabledHandles: null != (n = null == t ? true : t.invalidateDisabledHandles) && n
    }, {
      synchronous: true
    })
  }
  static delete(e) {
    return i.v.executeAsync("database_delete", t => r.T.databaseDelete(t, {
      database: e
    }))
  }
  static async list() {
    return (await i.v.executeAsync("database_list", e => r.T.databaseList(e))).map(e => e.data)
  }
  static optimize(e) {
    return i.v.executeAsync("database_optimize", t => r.T.databaseOptimize(t, {
      aggressive: e
    }))
  }
  static raise(e) {
    r.T.raise(e)
  }
}