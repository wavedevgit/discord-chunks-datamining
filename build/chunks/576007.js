/** Chunk was on web.js **/
/** chunk id: 576007, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  g: () => d
}), require("./415506.js");
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk881052 = require("./881052.js"),
  Chunk70956 = require("./70956.js"),
  Chunk672458 = require("./672458.js"),
  Chunk981631 = require("./981631.js");

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
    let a = await r.tn.post({
      url: l.ANM.GUILD_MEMBER_SEARCH(e),
      body: t,
      signal: _,
      rejectWithError: false
    });
    if (a.status === s.t) {
      if (null == a.body.retry_after) throw Error("Indexing response did not include retry_after");
      if (!p) throw Error("Indexing response received but autoRetry is disabled");
      return await i.Z.dispatch({
        type: "MEMBER_SAFETY_GUILD_MEMBER_SEARCH_STILL_INDEXING",
        guildId: e
      }), await new Promise(e => setTimeout(e, a.body.retry_after * o.Z.Millis.SECOND)), d(e, t, n, f + 1)
    }
    return {
      type: s.d.SUCCESSFUL_QUERY,
      body: c(a.body)
    }
  } catch (t) {
    let e = new a.Hx(t);
    return {
      type: s.d.ERROR,
      body: e
    }
  }
}