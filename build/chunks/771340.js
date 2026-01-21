/** Chunk was on 82124 **/
/** chunk id: 771340, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk981631 = require("./981631.js");
let a = {
  fetchRegions(e) {
    r.tn.get({
      url: l.ANM.REGIONS(e),
      retries: 1,
      oldFormErrors: true,
      rejectWithError: true
    }).then(t => i.Z.dispatch({
      type: "LOAD_REGIONS",
      regions: t.body,
      guildId: e
    }), () => i.Z.dispatch({
      type: "LOAD_REGIONS",
      regions: [],
      guildId: e
    }))
  },
  changeCallRegion(e, t) {
    r.tn.patch({
      url: l.ANM.CALL(e),
      body: {
        region: t
      },
      oldFormErrors: true,
      rejectWithError: true
    })
  }
}