/** Chunk was on web.js **/
/** chunk id: 264388, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G: () => f,
  n: () => d
}), require("./896048.js");
var Chunk942381 = require("./942381.js"),
  Chunk265690 = require("./265690.js"),
  Chunk870844 = require("./870844.js"),
  Chunk121894 = require("./121894.js"),
  Chunk506774 = require("./506774.js"),
  Chunk200700 = require("./200700.js");

function c() {
  var e;
  return new Set(null != (e = s.w.get(l.hs)) ? e : [])
}
let u = (0, Chunk870844.y)((e, t) => ({
  notificationDismissedInGuilds: c(),
  dismissNotification: n => {
    let r = t().notificationDismissedInGuilds;
    r.add(n), s.w.set(l.hs, r), (0, o.r)(() => e({
      notificationDismissedInGuilds: r
    }))
  },
  resetNotification: n => {
    let r = t().notificationDismissedInGuilds;
    r.has(n) && (r.delete(n), s.w.set(l.hs, r), (0, o.r)(() => e({
      notificationDismissedInGuilds: r
    })))
  }
}));

function d(e) {
  let [t, n] = (0, i.n)(u, e => [e.notificationDismissedInGuilds, e.dismissNotification], r.x);
  return [!t.has(e), n]
}

function f(e) {
  return u.getState().resetNotification(e)
}