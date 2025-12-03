/** Chunk was on 384 **/
/** chunk id: 157018, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk201895 = require("./201895.js"),
  Chunk933557 = require("./933557.js"),
  Chunk592125 = require("./592125.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk293810 = require("./293810.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function d(e) {
  switch (e.ref_type) {
    case o.Qs.CHANNEL: {
      let t = l.Z.getChannel(e.ref_id);
      return null != t ? function(e) {
        let t = (0, i.F6)(e, s.default, a.Z);
        switch (e.type) {
          case c.d4z.GUILD_VOICE:
            return u.intl.formatToPlainString(u.t.bkpadO, {
              channelName: t
            });
          case c.d4z.GUILD_STAGE_VOICE:
            return u.intl.formatToPlainString(u.t.TPPk2T, {
              channelName: t
            });
          default:
            return (0, r.ZP)({
              channel: e
            })
        }
      }(t) : ""
    }
    case o.Qs.INTANGIBLE:
      var t;
      return null != (t = e.name) ? t : ""
  }
}