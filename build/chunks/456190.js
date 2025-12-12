/** Chunk was on web.js **/
/** chunk id: 456190, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk51144 = require("./51144.js"),
  Chunk616922 = require("./616922.js"),
  Chunk388032 = require("./388032.jsx");

function a(e, t, n) {
  switch (t) {
    case i.kG.USER_ACTIVITY_PLAY:
      if (e.isCurrentUser) return o.intl.string(o.t.ZpDeUC);
      if (e.playingSameTrack) return o.intl.string(o.t.TYSymS);
      if (e.notPlayable) return o.intl.formatToPlainString(o.t.SqJBnN, {
        name: i.ai
      });
      return;
    case i.kG.USER_ACTIVITY_SYNC:
      if (e.isCurrentUser) return o.intl.string(o.t["AOU/CR"]);
      if (e.syncingWithUser || e.syncingWithParty) return o.intl.string(o.t.m8CScv);
      if (e.notPlayable) return o.intl.formatToPlainString(o.t.SqJBnN, {
        name: i.ai
      });
      return o.intl.formatToPlainString(o.t.CT9xYI, {
        name: null != n ? n : r.ZP.getName(e.user)
      });
    case i.kG.EMBED_SYNC:
      if (e.notPlayable) return o.intl.formatToPlainString(o.t.SqJBnN, {
        name: i.ai
      });
      return;
    default:
      return
  }
}