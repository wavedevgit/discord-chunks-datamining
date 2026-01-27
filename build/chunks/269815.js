/** Chunk was on web.js **/
/** chunk id: 269815, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk803306 = require("./803306.js"),
  Chunk475743 = require("./475743.js"),
  Chunk961350 = require("./961350.js");

function l() {
  let [e, t] = (0, i.yK)([s.default], () => [s.default.isAuthenticated(), null != s.default.getAnalyticsToken()]), n = (0, o.A)(e);
  r.useEffect(() => {
    n || !e || t || a.rQ({
      withAnalyticsToken: true
    })
  }, [n, e, t])
}