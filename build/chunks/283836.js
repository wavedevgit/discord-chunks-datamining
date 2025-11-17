/** Chunk was on web.js **/
/** chunk id: 283836, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p,
  q: () => _
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk241159 = require("./241159.js"),
  Chunk496929 = require("./496929.js"),
  Chunk558381 = require("./558381.js"),
  Chunk171246 = require("./171246.js"),
  Chunk314897 = require("./314897.js"),
  Chunk509545 = require("./509545.js"),
  Chunk238 = require("./238.js"),
  Chunk55563 = require("./55563.js");

function _(e) {
  r.useEffect(() => {
    p(e)
  }, [e]);
  let t = (0, i.Wu)([d.Z, f.Z, u.Z], () => {
      let t = d.Z.getStoreLayout(e);
      return (0, l.Ej)(t.subscriptions, f.Z, u.Z)
    }, [e]),
    n = (0, i.Wu)([d.Z], () => d.Z.getStoreLayout(e).otps, [e]);
  return r.useMemo(() => ({
    subscriptions: t,
    otps: n
  }), [t, n])
}

function p(e) {
  (0, a.k)(e), (0, s.oJ)(e), c.default.isAuthenticated() && (0, o.yD)(e, false)
}