/** Chunk was on 84704 **/
/** chunk id: 333074, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E: () => i
}), require("./896048.js"), require("./114821.js"), require("./339614.js");
var Chunk64700 = require("./64700.js"),
  Chunk96337 = require("./96337.js"),
  Chunk518977 = require("./518977.js");

function i() {
  return l.useMemo(() => {
    let e = new Map(s.A.flatMap(e => {
        let {
          alpha2: t,
          phoneCountryCodes: n
        } = e, l = (0, a.Gw)(t);
        return n.map(e => ["".concat(t, "-").concat(e), {
          code: e,
          alpha2: t,
          name: l
        }])
      })),
      t = Array.from(e.entries()).map(e => {
        let [t, {
          name: n,
          alpha2: l
        }] = e;
        return {
          value: t,
          label: n,
          alpha2: l
        }
      });
    return {
      countriesMap: e,
      countryCodeOptions: t
    }
  }, [])
}