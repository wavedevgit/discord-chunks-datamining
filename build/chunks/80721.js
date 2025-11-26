/** Chunk was on 86948 **/
/** chunk id: 80721, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  MT: () => s,
  cD: () => o
});
var Chunk544891 = require("./544891.js"),
  Chunk598077 = require("./598077.js");
require("./504518.js");
var Chunk981631 = require("./981631.js");
async function s(e, t, r, s) {
  let {
    users: o,
    next_index: l
  } = (await n.tn.get({
    url: a.ANM.BILLING_SUBSCRIPTION_ELIGIBLE_USERS(e),
    query: {
      index: t,
      limit: null != s ? s : 10,
      search_query: r
    },
    rejectWithError: true
  })).body;
  return {
    users: o.map(e => new i.Z(e)),
    nextIndex: l
  }
}
async function o(e, t) {
  try {
    return await n.tn.post({
      url: a.ANM.BILLING_SUBSCRIPTION_INVITES(e),
      body: {
        user_ids: t
      },
      rejectWithError: true
    })
  } catch (e) {}
}