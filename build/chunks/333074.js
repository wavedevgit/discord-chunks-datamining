/** Chunk was on web.js **/
/** chunk id: 333074, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => s
}), require("./896048.js"), require("./114821.js"), require("./339614.js");
var Chunk64700 = require("./64700.js"),
  Chunk96337 = require("./96337.js"),
  Chunk518977 = require("./518977.js");

function s() {
  return r.useMemo(() => {
    let e = new Map(i.A.flatMap(e => {
        let {
          alpha2: t,
          phoneCountryCodes: n
        } = e, r = (0, a.Gw)(t);
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