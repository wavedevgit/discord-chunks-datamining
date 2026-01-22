/** Chunk was on web.js **/
/** chunk id: 692744, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  el: () => c,
  xf: () => l
});
var Chunk572808 = require("./572808.js"),
  Chunk588703 = require("./588703.js"),
  Chunk985018 = require("./985018.jsx");

function s(e) {
  return {
    userId: e.user_id,
    position: e.position,
    avatar: e.avatar
  }
}

function o(e) {
  return {
    id: e.id,
    claimedBy: e.claimed_by
  }
}

function l(e) {
  return {
    roomId: e.room_id,
    participants: e.participants.map(s),
    seats: e.seats.map(o)
  }
}

function c(e) {
  switch (e) {
    case r.wS.RADIO:
      return a.intl.string(i.default.AjiGKB);
    case r.wS.ENVIRONMENT:
      return a.intl.string(i.default.YEYIbI);
    case r.wS.CAMPFIRE:
      return a.intl.string(i.default["Vk9+Ez"]);
    default:
      return ""
  }
}