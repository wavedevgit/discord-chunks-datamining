/** Chunk was on web.js **/
/** chunk id: 233993, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Gk: () => l,
  Kn: () => s,
  QY: () => a,
  Uu: () => c,
  Zq: () => o
}), require("./896048.js");
var Chunk136722 = require("./136722.js"),
  Chunk652215 = require("./652215.js");
let a = Chunk136722.kg(Chunk652215.xBc.MANAGE_CHANNELS, Chunk652215.xBc.MUTE_MEMBERS, Chunk652215.xBc.MOVE_MEMBERS);
Chunk136722.kg(Chunk652215.xBc.MANAGE_CHANNELS, Chunk652215.xBc.MANAGE_ROLES);
let o = new Set([Chunk652215.xBc.SPEAK, Chunk652215.xBc.REQUEST_TO_SPEAK, Chunk652215.xBc.USE_VAD]),
  s = Chunk136722.kg(a, Chunk652215.xBc.MANAGE_ROLES),
  l = Chunk136722.kg(Chunk652215.xBc.CONNECT, Chunk652215.xBc.VIEW_CHANNEL),
  c = Chunk136722.kg(l, Chunk652215.xBc.READ_MESSAGE_HISTORY, Chunk652215.xBc.REQUEST_TO_SPEAK, Chunk652215.xBc.SPEAK, Chunk652215.xBc.USE_VAD)