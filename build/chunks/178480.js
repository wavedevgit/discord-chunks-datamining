/** Chunk was on web.js **/
/** chunk id: 178480, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  LF: () => u,
  RB: () => f,
  a3: () => s,
  hn: () => d,
  mH: () => c,
  r: () => l
});
var Chunk695346 = require("./695346.js"),
  Chunk709054 = require("./709054.js"),
  Chunk497089 = require("./497089.js"),
  Chunk925928 = require("./925928.js");
let s = function(e) {
    let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
    return (0, o.ZP)({
      since: e,
      getFormatter: t ? o.d0 : o.Zk
    })
  },
  l = (e, t) => e.acked || t !== r.uL && i.default.compare(t, e.id) >= 0;

function c(e, t, n) {
  let r = i.default.fromTimestamp(new Date(t).getTime());
  return {
    acked: false,
    forceUnacked: true,
    other_user: e,
    kind: "notification-center-item",
    local_id: "incoming_friend_requests_".concat(e.id, "_").concat(r),
    deeplink: "https://discord.com/users/".concat(e.id),
    type: a.O7.INCOMING_FRIEND_REQUESTS,
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
    type: a.O7.INCOMING_GAME_FRIEND_REQUESTS,
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
    type: a.O7.MOBILE_NATIVE_UPDATE_AVAILABLE,
    deeplink: e.urls.install.toString()
  }
}
let f = e => e.type === a.DY.RECENT_MENTION || e.type === a.DY.REPLY_MENTION