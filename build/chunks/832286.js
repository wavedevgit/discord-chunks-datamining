/** Chunk was on web.js **/
/** chunk id: 832286, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  y: () => c
}), require("./896048.js");
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk71393 = require("./71393.js"),
  Chunk958340 = require("./958340.js"),
  Chunk652215 = require("./652215.js");
let l = new Set;
async function c(e) {
  if (null == a.A.getGuild(e) && null == s.A.getGuildOrStatus(e) && !l.has(e)) {
    i.h.dispatch({
      type: "BASIC_GUILD_FETCH",
      guildId: e
    }), l.add(e);
    try {
      let t = (await r.Bo.get({
        url: o.Rsh.GUILD_BASIC(e),
        rejectWithError: true
      })).body;
      i.h.dispatch({
        type: "BASIC_GUILD_FETCH_SUCCESS",
        guildId: e,
        guildInfo: t
      })
    } catch (t) {
      i.h.dispatch({
        type: "BASIC_GUILD_FETCH_FAILURE",
        guildId: e
      })
    } finally {
      l.delete(e)
    }
  }
}