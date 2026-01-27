/** Chunk was on web.js **/
/** chunk id: 881335, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk729937 = require("./729937.js"),
  Chunk981616 = require("./981616.js"),
  Chunk285933 = require("./285933.js"),
  Chunk227005 = require("./227005.js");
async function s(e, t, n) {
  let {
    hasSpotifyAccount: s,
    activity: l,
    user: c
  } = e;
  (0, o.A)(s) && null != l && null != l.sync_id && (await (0, i.dM)(), r.ZH(l, c.id), (0, a.A)(t, c, l, n))
}