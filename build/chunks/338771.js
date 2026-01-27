/** Chunk was on web.js **/
/** chunk id: 338771, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk827343 = require("./827343.js"),
  Chunk401843 = require("./401843.js"),
  Chunk961350 = require("./961350.js"),
  Chunk652896 = require("./652896.js");

function s(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    n = !(arguments.length > 2) || true === arguments[2] || arguments[2];
  if (null == e) return;
  let {
    streamType: s,
    guildId: l,
    channelId: c,
    ownerId: u
  } = e, d = (0, o._z)({
    streamType: s,
    guildId: l,
    channelId: c,
    ownerId: u
  });
  u === a.default.getId() && r.A.setGoLiveSource(null), i.vN(d, t, n)
}