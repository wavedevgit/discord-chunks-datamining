/** Chunk was on web.js **/
/** chunk id: 930145, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk198584 = require("./198584.js"),
  Chunk350167 = require("./350167.js");
class o {
  static open(e, t) {
    return i.r.executeAsync("database_open", n => {
      var i;
      return r.d.databaseOpen(n, {
        database: e,
        invalidateDisabledHandles: null != (i = null == t ? true : t.invalidateDisabledHandles) && i
      })
    })
  }
  static openSyncUnsafe(e, t) {
    var n;
    return r.d.databaseOpen(null, {
      database: e,
      invalidateDisabledHandles: null != (n = null == t ? true : t.invalidateDisabledHandles) && n
    }, {
      synchronous: true
    })
  }
  static delete(e) {
    return i.r.executeAsync("database_delete", t => r.d.databaseDelete(t, {
      database: e
    }))
  }
  static async list() {
    return (await Chunk350167.r.executeAsync("database_list", e => r.d.databaseList(e))).map(e => e.data)
  }
  static optimize(e) {
    return i.r.executeAsync("database_optimize", t => r.d.databaseOptimize(t, {
      aggressive: e
    }))
  }
  static raise(e) {
    r.d.raise(e)
  }
}