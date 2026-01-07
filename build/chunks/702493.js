/** Chunk was on web.js **/
/** chunk id: 702493, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk232567 = require("./232567.js"),
  Chunk110924 = require("./110924.js"),
  Chunk314897 = require("./314897.js");

function l() {
  let [e, t] = (0, i.Wu)([s.default], () => [s.default.isAuthenticated(), null != s.default.getAnalyticsToken()]), n = (0, o.Z)(e);
  r.useEffect(() => {
    n || !e || t || a.k({
      withAnalyticsToken: true
    })
  }, [n, e, t])
}