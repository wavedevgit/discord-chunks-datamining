/** Chunk was on 47841 **/
/** chunk id: 327325, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk963027 = require("./963027.js"),
  Chunk47167 = require("./47167.js"),
  Chunk734057 = require("./734057.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk2242 = require("./2242.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function u(e) {
  switch (e.ref_type) {
    case o.bN.CHANNEL: {
      let t = l.A.getChannel(e.ref_id);
      return null != t ? function(e) {
        let t = (0, i.m1)(e, a.default, s.A);
        switch (e.type) {
          case c.rbe.GUILD_VOICE:
            return d.intl.formatToPlainString(d.t.bkpadO, {
              channelName: t
            });
          case c.rbe.GUILD_STAGE_VOICE:
            return d.intl.formatToPlainString(d.t.TPPk2T, {
              channelName: t
            });
          default:
            return (0, r.Ay)({
              channel: e
            })
        }
      }(t) : ""
    }
    case o.bN.INTANGIBLE:
      var t;
      return null != (t = e.name) ? t : ""
  }
}