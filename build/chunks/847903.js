/** Chunk was on web.js **/
/** chunk id: 847903, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk355467 = require("./355467.js"),
  Chunk314897 = require("./314897.js"),
  Chunk351402 = require("./351402.js"),
  Chunk853872 = require("./853872.js");

function u() {
  let e = (0, i.e7)([c.Z], () => c.Z.getDefaultBillingCountryCode()),
    t = (0, i.e7)([l.Z], () => l.Z.ipLocation),
    n = (0, i.e7)([s.default], () => s.default.isAuthenticated());
  return r.useEffect(() => {
    a.Z.wait(() => {
      !n || l.Z.isPaymentSourceFetching || c.Z.hasFetchedPaymentSources || o.tZ()
    })
  }, [n]), r.useEffect(() => {
    n && !l.Z.ipLocationLoaded && o.lC()
  }, [t, n]), {
    defaultBillingCountryCode: e,
    ipCountryCode: null == t ? true : t.countryCode,
    ipSubdivisionCode: null == t ? true : t.subdivisionCode
  }
}