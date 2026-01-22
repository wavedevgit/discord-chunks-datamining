/** Chunk was on web.js **/
/** chunk id: 285933, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk954571 = require("./954571.js"),
  Chunk981616 = require("./981616.js"),
  Chunk272984 = require("./272984.js"),
  Chunk652215 = require("./652215.js");
let o = [Chunk272984.Qp.USER_ACTIVITY_SYNC, Chunk272984.Qp.EMBED_SYNC];

function l(e, t, n, a) {
  r.default.track(s.HAw.SPOTIFY_BUTTON_CLICKED, {
    type: e,
    source: a,
    is_premium: (0, i.mD)(),
    party_id: o.includes(e) && (null == n ? true : n.party) != null ? n.party.id : null,
    other_user_id: t.id
  })
}