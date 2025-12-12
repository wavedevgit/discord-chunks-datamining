/** Chunk was on 40184 **/
/** chunk id: 771340, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk981631 = require("./981631.js");
let a = {
  fetchRegions(e) {
    i.tn.get({
      url: l.ANM.REGIONS(e),
      retries: 1,
      oldFormErrors: true,
      rejectWithError: true
    }).then(t => r.Z.dispatch({
      type: "LOAD_REGIONS",
      regions: t.body,
      guildId: e
    }), () => r.Z.dispatch({
      type: "LOAD_REGIONS",
      regions: [],
      guildId: e
    }))
  },
  changeCallRegion(e, t) {
    i.tn.patch({
      url: l.ANM.CALL(e),
      body: {
        region: t
      },
      oldFormErrors: true,
      rejectWithError: true
    })
  }
}