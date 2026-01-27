/** Chunk was on web.js **/
/** chunk id: 477421, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk384904 = require("./384904.js"),
  Chunk961350 = require("./961350.js"),
  Chunk615405 = require("./615405.js"),
  Chunk295405 = require("./295405.js");

function u() {
  let e = (0, i.bG)([c.A], () => c.A.getDefaultBillingCountryCode()),
    t = (0, i.bG)([l.A], () => l.A.ipLocation),
    n = (0, i.bG)([s.default], () => s.default.isAuthenticated());
  return r.useEffect(() => {
    a.h.wait(() => {
      !n || l.A.isPaymentSourceFetching || c.A.hasFetchedPaymentSources || o.$o()
    })
  }, [n]), r.useEffect(() => {
    n && !l.A.ipLocationLoaded && o.jZ()
  }, [t, n]), {
    defaultBillingCountryCode: e,
    ipCountryCode: null == t ? true : t.countryCode,
    ipSubdivisionCode: null == t ? true : t.subdivisionCode
  }
}