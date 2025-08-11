/** Chunk was on 6850 **/
/** chunk id: 48210, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk544891 = require("./544891.js"),
  Chunk981631 = require("./981631.js");
let o = {
  async updateEstimate(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 7,
      n = arguments.length > 2 ? arguments[2] : true;
    return (await r.tn.get({
      url: l.ANM.GUILD_PRUNE(e),
      query: {
        days: t,
        include_roles: n
      },
      oldFormErrors: true,
      rejectWithError: false
    })).body.pruned
  },
  prune: (e, t, n) => r.tn.post({
    url: l.ANM.GUILD_PRUNE(e),
    body: {
      days: t,
      compute_prune_count: false,
      include_roles: n
    },
    oldFormErrors: true,
    rejectWithError: false
  })
}