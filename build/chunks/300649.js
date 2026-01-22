/** Chunk was on web.js **/
/** chunk id: 300649, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  y: () => d
}), require("./65821.js");
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk198982 = require("./198982.js"),
  Chunk927813 = require("./927813.js"),
  Chunk405473 = require("./405473.js"),
  Chunk652215 = require("./652215.js");

function c(e) {
  return {
    guild_id: e.guild_id,
    members: e.members,
    page_result_count: e.page_result_count,
    total_result_count: e.total_result_count
  }
}
let u = 3;
async function d(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {},
    f = arguments.length > 3 && true !== arguments[3] ? arguments[3] : 0;
  if (f > u) throw Error("Unable to search guild members after max retries");
  let {
    autoRetry: p = true,
    signal: _
  } = n;
  try {
    let a = await r.Bo.post({
      url: l.Rsh.GUILD_MEMBER_SEARCH(e),
      body: t,
      signal: _,
      rejectWithError: false
    });
    if (202 === a.status) {
      if (null == a.body.retry_after) throw Error("Indexing response did not include retry_after");
      if (!p) throw Error("Indexing response received but autoRetry is disabled");
      return await i.h.dispatch({
        type: "MEMBER_SAFETY_GUILD_MEMBER_SEARCH_STILL_INDEXING",
        guildId: e
      }), await new Promise(e => setTimeout(e, a.body.retry_after * s.A.Millis.SECOND)), d(e, t, n, f + 1)
    }
    return {
      type: o.r.SUCCESSFUL_QUERY,
      body: c(a.body)
    }
  } catch (t) {
    let e = new a.LG(t);
    return {
      type: o.r.ERROR,
      body: e
    }
  }
}