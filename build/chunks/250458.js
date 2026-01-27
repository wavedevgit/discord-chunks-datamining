/** Chunk was on web.js **/
/** chunk id: 250458, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
}), require("./896048.js");
var Chunk73153 = require("./73153.js"),
  Chunk256311 = require("./256311.js"),
  Chunk439372 = require("./439372.js"),
  Chunk773669 = require("./773669.js"),
  Chunk661191 = require("./661191.js"),
  Chunk883600 = require("./883600.js"),
  Chunk446023 = require("./446023.js"),
  Chunk212031 = require("./212031.jsx");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e, t) {
  let n = 0,
    r = null;
  for (var [i, {
      min_version: a
    }] of Object.entries(e)) a <= t && a > n && (n = a, r = i);
  return r
}
class p extends Chunk439372.A {
  constructor(...e) {
    super(...e), d(this, "actions", {
      POST_CONNECTION_OPEN: e => this.handleConnectionOpen(e)
    }), d(this, "handleConnectionOpen", async e => {
      try {
        let e = await i.A.fetchChangelogConfig(),
          t = e.body,
          n = (0, c.$)(),
          a = f(t, n);
        if (r.h.dispatch({
            type: "CHANGE_LOG_SET_CONFIG",
            config: e.body,
            latestChangelogId: a
          }), null == a || true !== t[a].show_on_startup) return;
        let d = l.A.lastSeenChangelogId(),
          p = l.A.lastSeenChangelogDate();
        if (null != d && 0 >= s.default.compare(a, d)) return;
        let _ = await i.A.fetchChangelog(a, o.default.locale);
        if (null == _) return;
        if (null == p || null == l.A.lastSeenChangelogDate()) return void i.A.markChangelogAsSeen(a, _.date);
        if (l.A.isLocked()) return;
        new Date(_.date) > new Date(p) && (0, u.j)()
      } finally {
        r.h.dispatch({
          type: "CHANGE_LOG_RESOLVED"
        })
      }
    })
  }
}
let _ = new p