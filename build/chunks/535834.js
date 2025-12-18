/** Chunk was on web.js **/
/** chunk id: 535834, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  CK: () => l,
  Tx: () => c
});
var Chunk390551 = require("./390551.js"),
  Chunk610746 = require("./610746.js"),
  Chunk388032 = require("./388032.jsx");

function o(e) {
  return {
    userId: e.user_id,
    position: e.position,
    avatar: e.avatar
  }
}

function s(e) {
  return {
    id: e.id,
    claimedBy: e.claimed_by
  }
}

function l(e) {
  return {
    roomId: e.room_id,
    participants: e.participants.map(o),
    seats: e.seats.map(s)
  }
}

function c(e) {
  switch (e) {
    case r.Yg.RADIO:
      return a.intl.string(i.default.AjiGKB);
    case r.Yg.ENVIRONMENT:
      return a.intl.string(i.default.YEYIbI);
    case r.Yg.CAMPFIRE:
      return a.intl.string(i.default["Vk9+Ez"]);
    default:
      return ""
  }
}