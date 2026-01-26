/** Chunk was on 97887 **/
/** chunk id: 534963, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk652215 = require("./652215.js");
let s = {
  fetchRegions(e) {
    r.Bo.get({
      url: i.Rsh.REGIONS(e),
      retries: 1,
      oldFormErrors: true,
      rejectWithError: true
    }).then(t => l.h.dispatch({
      type: "LOAD_REGIONS",
      regions: t.body,
      guildId: e
    }), () => l.h.dispatch({
      type: "LOAD_REGIONS",
      regions: [],
      guildId: e
    }))
  },
  changeCallRegion(e, t) {
    r.Bo.patch({
      url: i.Rsh.CALL(e),
      body: {
        region: t
      },
      oldFormErrors: true,
      rejectWithError: true
    })
  }
}