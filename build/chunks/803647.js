/** Chunk was on web.js **/
/** chunk id: 803647, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk846027 = require("./846027.js"),
  Chunk872810 = require("./872810.js"),
  Chunk314897 = require("./314897.js"),
  Chunk569545 = require("./569545.js");

function s(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    n = !(arguments.length > 2) || true === arguments[2] || arguments[2];
  if (null == e) return;
  let {
    streamType: s,
    guildId: l,
    channelId: c,
    ownerId: u
  } = e, d = (0, o.V9)({
    streamType: s,
    guildId: l,
    channelId: c,
    ownerId: u
  });
  u === a.default.getId() && r.Z.setGoLiveSource(null), i.g(d, t, n)
}