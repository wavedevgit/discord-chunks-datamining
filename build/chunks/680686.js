/** Chunk was on web.js **/
/** chunk id: 680686, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk626135 = require("./626135.js"),
  Chunk647162 = require("./647162.js"),
  Chunk616922 = require("./616922.js"),
  Chunk981631 = require("./981631.js");
let s = [Chunk616922.kG.USER_ACTIVITY_SYNC, Chunk616922.kG.EMBED_SYNC];

function l(e, t, n, o) {
  r.default.track(a.rMx.SPOTIFY_BUTTON_CLICKED, {
    type: e,
    source: o,
    is_premium: (0, i.Wo)(),
    party_id: s.includes(e) && (null == n ? true : n.party) != null ? n.party.id : null,
    other_user_id: t.id
  })
}