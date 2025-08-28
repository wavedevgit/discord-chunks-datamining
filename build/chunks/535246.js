/** Chunk was on web.js **/
/** chunk id: 535246, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  v: () => o
});
var Chunk427164 = require("./427164.js"),
  Chunk380249 = require("./380249.js");
let a = (0, Chunk427164.le)({
  name: "2025-08-remote-join-game-invite",
  kind: "user",
  defaultConfig: {
    enableRemoteJoin: false
  },
  variations: {
    0: {
      enableRemoteJoin: false
    },
    1: {
      enableRemoteJoin: true
    }
  }
});

function o() {
  let e = a.getConfig({
      location: "useIsRemoteJoinGameInviteEnabled"
    }).enableRemoteJoin,
    t = Chunk380249.m.getCurrentConfig({
      location: "useIsRemoteJoinGameInviteEnabled"
    }).enabled;
  return module && exports
}