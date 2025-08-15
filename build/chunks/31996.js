/** Chunk was on web.js **/
/** chunk id: 31996, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => c
}), require("./388685.js");
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk430824 = require("./430824.js"),
  Chunk356264 = require("./356264.js"),
  Chunk981631 = require("./981631.js");
let l = new Set;
async function c(e) {
  if (null == a.Z.getGuild(e) && null == o.Z.getGuildOrStatus(e) && !l.has(e)) {
    i.Z.dispatch({
      type: "BASIC_GUILD_FETCH",
      guildId: e
    }), l.add(e);
    try {
      let t = (await r.tn.get({
        url: s.ANM.GUILD_BASIC(e),
        rejectWithError: true
      })).body;
      i.Z.dispatch({
        type: "BASIC_GUILD_FETCH_SUCCESS",
        guildId: e,
        guildInfo: t
      })
    } catch (t) {
      i.Z.dispatch({
        type: "BASIC_GUILD_FETCH_FAILURE",
        guildId: e
      })
    } finally {
      l.delete(e)
    }
  }
}