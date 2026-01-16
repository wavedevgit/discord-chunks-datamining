/** Chunk was on web.js **/
/** chunk id: 134049, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => d,
  l: () => f
}), require("./388685.js");
var Chunk782425 = require("./782425.js"),
  Chunk524550 = require("./524550.js"),
  Chunk771196 = require("./771196.js"),
  Chunk731965 = require("./731965.js"),
  Chunk433517 = require("./433517.js"),
  Chunk590433 = require("./590433.js");

function c() {
  var e;
  return new Set(null != (e = s.K.get(l.hL)) ? e : [])
}
let u = (0, Chunk771196.M)((e, t) => ({
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