/** Chunk was on web.js **/
/** chunk id: 341335, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk427262 = require("./427262.js"),
  Chunk272984 = require("./272984.js"),
  Chunk985018 = require("./985018.jsx");

function s(e, t, n) {
  switch (t) {
    case i.Qp.USER_ACTIVITY_PLAY:
      if (e.isCurrentUser) return a.intl.string(a.t.ZpDeUC);
      if (e.playingSameTrack) return a.intl.string(a.t.TYSymS);
      if (e.notPlayable) return a.intl.formatToPlainString(a.t.SqJBnN, {
        name: i.HD
      });
      return;
    case i.Qp.USER_ACTIVITY_SYNC:
      if (e.isCurrentUser) return a.intl.string(a.t["AOU/CR"]);
      if (e.syncingWithUser || e.syncingWithParty) return a.intl.string(a.t.m8CScv);
      if (e.notPlayable) return a.intl.formatToPlainString(a.t.SqJBnN, {
        name: i.HD
      });
      return a.intl.formatToPlainString(a.t.CT9xYI, {
        name: null != n ? n : r.Ay.getName(e.user)
      });
    case i.Qp.EMBED_SYNC:
      if (e.notPlayable) return a.intl.formatToPlainString(a.t.SqJBnN, {
        name: i.HD
      });
      return;
    default:
      return
  }
}