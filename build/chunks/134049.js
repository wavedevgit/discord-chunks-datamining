/** Chunk was on web.js **/
/** chunk id: 134049, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => d,
  l: () => f
}), require("./388685.js");
var Chunk524825 = require("./524825.js"),
  Chunk131193 = require("./131193.js"),
  Chunk101186 = require("./101186.js"),
  Chunk731965 = require("./731965.js"),
  Chunk433517 = require("./433517.js"),
  Chunk590433 = require("./590433.js");

function c() {
  var e;
  return new Set(null != (e = Chunk433517.K.get(Chunk590433.hL)) ? module : [])
}
let u = (0, Chunk101186.M)((e, t) => ({
  notificationDismissedInGuilds: c(),
  dismissNotification: n => {
    let r = t().notificationDismissedInGuilds;
    r.add(n), s.K.set(l.hL, r), (0, o.j)(() => e({
      notificationDismissedInGuilds: r
    }))
  },
  resetNotification: n => {
    let r = t().notificationDismissedInGuilds;
    r.has(n) && (r.delete(n), s.K.set(l.hL, r), (0, o.j)(() => e({
      notificationDismissedInGuilds: r
    })))
  }
}));

function d(e) {
  let [t, n] = (0, i.s)(u, e => [e.notificationDismissedInGuilds, e.dismissNotification], r.X);
  return [!t.has(e), n]
}

function f(e) {
  return u.getState().resetNotification(e)
}