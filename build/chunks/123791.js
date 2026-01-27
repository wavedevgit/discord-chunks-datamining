/** Chunk was on web.js **/
/** chunk id: 123791, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => p,
  F: () => _
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk996759 = require("./996759.js"),
  Chunk339048 = require("./339048.js"),
  Chunk800342 = require("./800342.js"),
  Chunk163437 = require("./163437.js"),
  Chunk961350 = require("./961350.js"),
  Chunk97352 = require("./97352.js"),
  Chunk31455 = require("./31455.js"),
  Chunk67480 = require("./67480.js");

function p(e) {
  r.useEffect(() => {
    _(e)
  }, [e]);
  let t = (0, i.yK)([d.A, f.A, u.A], () => {
      let t = d.A.getStoreLayout(e);
      return (0, l.oC)(t.subscriptions, f.A, u.A)
    }, [e]),
    n = (0, i.yK)([d.A], () => d.A.getStoreLayout(e).otps, [e]);
  return r.useMemo(() => ({
    subscriptions: t,
    otps: n
  }), [t, n])
}

function _(e) {
  (0, a.V)(e), (0, s.JI)(e), c.default.isAuthenticated() && (0, o.LM)(e, false)
}