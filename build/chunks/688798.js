/** Chunk was on web.js **/
/** chunk id: 688798, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk570140 = require("./570140.js"),
  Chunk661111 = require("./661111.js"),
  Chunk147913 = require("./147913.js"),
  Chunk706454 = require("./706454.js"),
  Chunk709054 = require("./709054.js"),
  Chunk802098 = require("./802098.js"),
  Chunk128014 = require("./128014.js"),
  Chunk163379 = require("./163379.jsx");

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
      min_version: o
    }] of Object.entries(e)) o <= t && o > n && (n = o, r = i);
  return r
}
class p extends Chunk147913.Z {
  constructor(...e) {
    super(...e), d(this, "actions", {
      POST_CONNECTION_OPEN: e => this.handleConnectionOpen(e)
    }), d(this, "handleConnectionOpen", async e => {
      try {
        let e = await i.Z.fetchChangelogConfig(),
          t = e.body,
          n = (0, c.b)(),
          o = f(t, n);
        if (r.Z.dispatch({
            type: "CHANGE_LOG_SET_CONFIG",
            config: e.body,
            latestChangelogId: o
          }), null == o || true !== t[o].show_on_startup) return;
        let d = l.Z.lastSeenChangelogId(),
          p = l.Z.lastSeenChangelogDate();
        if (null != d && 0 >= s.default.compare(o, d)) return;
        let _ = await i.Z.fetchChangelog(o, a.default.locale);
        if (null == _) return;
        if (null == p || null == l.Z.lastSeenChangelogDate()) return void i.Z.markChangelogAsSeen(o, _.date);
        if (l.Z.isLocked()) return;
        new Date(_.date) > new Date(p) && (0, u.Z)()
      } finally {
        r.Z.dispatch({
          type: "CHANGE_LOG_RESOLVED"
        })
      }
    })
  }
}
let _ = new p