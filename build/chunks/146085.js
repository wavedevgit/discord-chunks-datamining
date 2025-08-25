/** Chunk was on web.js **/
/** chunk id: 146085, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L_: () => c,
  N: () => s,
  gl: () => l,
  xS: () => a,
  yP: () => o
}), require("./388685.js");
var Chunk149765 = require("./149765.js"),
  Chunk981631 = require("./981631.js");
let o = Chunk149765.$e(Chunk981631.Plq.MANAGE_CHANNELS, Chunk981631.Plq.MUTE_MEMBERS, Chunk981631.Plq.MOVE_MEMBERS);
Chunk149765.$e(Chunk981631.Plq.MANAGE_CHANNELS, Chunk981631.Plq.MANAGE_ROLES);
let a = new Set([Chunk981631.Plq.SPEAK, Chunk981631.Plq.REQUEST_TO_SPEAK, Chunk981631.Plq.USE_VAD]),
  s = Chunk149765.$e(o, Chunk981631.Plq.MANAGE_ROLES),
  l = Chunk149765.$e(Chunk981631.Plq.CONNECT, Chunk981631.Plq.VIEW_CHANNEL),
  c = Chunk149765.$e(l, Chunk981631.Plq.READ_MESSAGE_HISTORY, Chunk981631.Plq.REQUEST_TO_SPEAK, Chunk981631.Plq.SPEAK, Chunk981631.Plq.USE_VAD)