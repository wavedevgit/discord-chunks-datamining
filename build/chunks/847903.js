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
  let e = (0, Chunk442837.e7)([Chunk853872.Z], () => Chunk853872.Z.getDefaultBillingCountryCode()),
    t = (0, Chunk442837.e7)([Chunk351402.Z], () => Chunk351402.Z.ipLocation),
    n = (0, Chunk442837.e7)([Chunk314897.default], () => Chunk314897.default.isAuthenticated());
  return Chunk473749.useEffect(() => {
    Chunk570140.Z.wait(() => {
      !require || Chunk351402.Z.isPaymentSourceFetching || Chunk853872.Z.hasFetchedPaymentSources || Chunk355467.tZ()
    })
  }, [require]), Chunk473749.useEffect(() => {
    require && !Chunk351402.Z.ipLocationLoaded && Chunk355467.lC()
  }, [exports, require]), {
    defaultBillingCountryCode: module,
    ipCountryCode: null == exports ? true : exports.countryCode,
    ipSubdivisionCode: null == exports ? true : exports.subdivisionCode
  }
}