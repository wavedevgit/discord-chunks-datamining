/** Chunk was on 35894 **/
/** chunk id: 437553, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => i
});
var Chunk562465 = require("./562465.js"),
  Chunk652215 = require("./652215.js");
let i = {
  async updateEstimate(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 7,
      n = arguments.length > 2 ? arguments[2] : true;
    return (await r.Bo.get({
      url: l.Rsh.GUILD_PRUNE(e),
      query: {
        days: t,
        include_roles: n
      },
      oldFormErrors: true,
      rejectWithError: false
    })).body.pruned
  },
  async updateEstimateV2(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 7,
      n = arguments.length > 2 ? arguments[2] : true;
    await r.Bo.get({
      url: l.Rsh.GUILD_PRUNE_V2(e),
      query: {
        days: t,
        include_roles: n
      },
      oldFormErrors: true,
      rejectWithError: false
    })
  },
  prune: (e, t, n) => r.Bo.post({
    url: l.Rsh.GUILD_PRUNE(e),
    body: {
      days: t,
      compute_prune_count: false,
      include_roles: n
    },
    oldFormErrors: true,
    rejectWithError: false
  })
}