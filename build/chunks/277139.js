/** Chunk was on web.js **/
/** chunk id: 277139, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  b: () => o
}), require("./388685.js"), require("./361932.js"), require("./187205.js");
var Chunk473749 = require("./473749.js"),
  Chunk217986 = require("./217986.js"),
  Chunk133080 = require("./133080.js");

function o() {
  return r.useMemo(() => {
    let e = new Map(i.Z.flatMap(e => {
        let {
          alpha2: t,
          phoneCountryCodes: n
        } = e, r = (0, a.q9)(t);
        return n.map(e => ["".concat(t, "-").concat(e), {
          code: e,
          alpha2: t,
          name: r
        }])
      })),
      t = Array.from(e.entries()).map(e => {
        let [t, {
          name: n,
          alpha2: r
        }] = e;
        return {
          value: t,
          label: n,
          alpha2: r
        }
      });
    return {
      countriesMap: e,
      countryCodeOptions: t
    }
  }, [])
}