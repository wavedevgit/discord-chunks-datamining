/** Chunk was on web.js **/
/** chunk id: 160768, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk272984 = require("./272984.js"),
  Chunk985018 = require("./985018.jsx");

function a(e, t) {
  switch (t) {
    case r.Qp.USER_ACTIVITY_PLAY:
      return e.hasSpotifyAccount ? i.intl.formatToPlainString(i.t.LEgD7t, {
        platform: r.HD
      }) : i.intl.formatToPlainString(i.t.XWSHTb, {
        platform: r.HD
      });
    case r.Qp.EMBED_SYNC:
      if (!e.hasSpotifyAccount) return i.intl.formatToPlainString(i.t.XWSHTb, {
        platform: r.HD
      });
      if (e.syncingWithUser || e.syncingWithParty) return i.intl.string(i.t.KC26NR);
      return i.intl.string(i.t.VJlc0S);
    case r.Qp.USER_ACTIVITY_SYNC:
    default:
      return
  }
}