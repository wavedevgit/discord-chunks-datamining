/** Chunk was on web.js **/
/** chunk id: 456190, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk51144 = require("./51144.js"),
  Chunk616922 = require("./616922.js"),
  Chunk388032 = require("./388032.jsx");

function o(e, t, n) {
  switch (t) {
    case i.kG.USER_ACTIVITY_PLAY:
      if (e.isCurrentUser) return a.intl.string(a.t.ZpDeUC);
      if (e.playingSameTrack) return a.intl.string(a.t.TYSymS);
      if (e.notPlayable) return a.intl.formatToPlainString(a.t.SqJBnN, {
        name: i.ai
      });
      return;
    case i.kG.USER_ACTIVITY_SYNC:
      if (e.isCurrentUser) return a.intl.string(a.t["AOU/CR"]);
      if (e.syncingWithUser || e.syncingWithParty) return a.intl.string(a.t.m8CScv);
      if (e.notPlayable) return a.intl.formatToPlainString(a.t.SqJBnN, {
        name: i.ai
      });
      return a.intl.formatToPlainString(a.t.CT9xYI, {
        name: null != n ? n : r.ZP.getName(e.user)
      });
    case i.kG.EMBED_SYNC:
      if (e.notPlayable) return a.intl.formatToPlainString(a.t.SqJBnN, {
        name: i.ai
      });
      return;
    default:
      return
  }
}