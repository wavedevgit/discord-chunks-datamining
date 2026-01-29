/** Chunk was on 4670 **/
/** chunk id: 340889, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  U: () => o
});
var Chunk311907 = require("./311907.js"),
  Chunk55619 = require("./55619.js"),
  Chunk419954 = require("./419954.js"),
  Chunk351906 = require("./351906.js"),
  Chunk780964 = require("./780964.js"),
  Chunk985018 = require("./985018.jsx");
let o = (0, Chunk419954.zD)(Chunk780964.X.STREAMING_STREAMER_MODE, {
  useTitle: () => u.intl.string(u.t.TGNg6T),
  useSubtitle: () => u.intl.string(u.t["4nXLnE"]),
  useValue: function() {
    return (0, n.bG)([r.A], () => {
      let {
        enabled: e
      } = r.A.getSettings();
      return e
    })
  },
  setValue: function(e) {
    l.A.update({
      enabled: e
    })
  }
})