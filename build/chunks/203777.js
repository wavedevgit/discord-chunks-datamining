/** Chunk was on web.js **/
/** chunk id: 203777, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk763472 = require("./763472.js"),
  Chunk647162 = require("./647162.js"),
  Chunk680686 = require("./680686.js"),
  Chunk131303 = require("./131303.js");
async function s(e, t, n) {
  let {
    hasSpotifyAccount: s,
    activity: l,
    user: c
  } = e;
  (0, o.Z)(s) && null != l && null != l.sync_id && (await (0, i.KV)(), r.hY(l, c.id), (0, a.Z)(t, c, l, n))
}