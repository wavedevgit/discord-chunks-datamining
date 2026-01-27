/** Chunk was on web.js **/
/** chunk id: 995273, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  KS: () => u,
  NW: () => l,
  Qi: () => c,
  _u: () => d,
  gk: () => f,
  jb: () => s
});
var Chunk253932 = require("./253932.js"),
  Chunk661191 = require("./661191.js"),
  Chunk322387 = require("./322387.js"),
  Chunk381849 = require("./381849.js");
let s = function(e) {
    let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
    return (0, o.Ay)({
      since: e,
      getFormatter: t ? o.i : o._e
    })
  },
  l = (e, t) => e.acked || t !== r.xM && i.default.compare(t, e.id) >= 0;

function c(e, t, n) {
  let r = i.default.fromTimestamp(new Date(t).getTime());
  return {
    acked: false,
    forceUnacked: true,
    other_user: e,
    kind: "notification-center-item",
    local_id: "incoming_friend_requests_".concat(e.id, "_").concat(r),
    deeplink: "https://discord.com/users/".concat(e.id),
    type: a.Uo.INCOMING_FRIEND_REQUESTS,
    id: r,
    applicationId: n
  }
}

function u(e, t, n) {
  let r = i.default.fromTimestamp(new Date(t).getTime());
  return {
    acked: false,
    forceUnacked: true,
    other_user: e,
    kind: "notification-center-item",
    local_id: "incoming_game_friend_requests_".concat(e.id, "_").concat(r),
    deeplink: "https://discord.com/users/".concat(e.id),
    type: a.Uo.INCOMING_GAME_FRIEND_REQUESTS,
    id: r,
    applicationId: n
  }
}

function d(e) {
  return {
    acked: false,
    enableBadge: true,
    id: i.default.fromTimestamp(new Date().getTime()),
    kind: "notification-center-item",
    local_id: "mobile_update_available_".concat(e.build),
    type: a.Uo.MOBILE_NATIVE_UPDATE_AVAILABLE,
    deeplink: e.urls.install.toString()
  }
}
let f = e => e.type === a.hW.RECENT_MENTION || e.type === a.hW.REPLY_MENTION