/** Chunk was on 85032 **/
/** chunk id: 510231, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  h: () => d
}), require("./583741.js");
var Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk86419 = require("./86419.js"),
  Chunk77498 = require("./77498.js"),
  Chunk570911 = require("./570911.js");

function u(e) {
  var t;
  return null != (t = s.gQ.get(e)) ? t : 0
}

function d() {
  let e = (0, Chunk442837.e7)([Chunk77498.Z], () => Chunk77498.Z.games),
    t = Chunk473749.useMemo(() => a()(module).filter(e => (0, o.pZ)(e)).map(e => ({
      value: e.id,
      label: e.name
    })).sortBy(e => {
      let {
        value: t
      } = e;
      return u(t)
    }).reverse().value(), [module]),
    n = Chunk473749.useCallback((e, t) => u(t.item.value) - u(e.item.value), []);
  return {
    options: exports,
    matchSorterOptions: Chunk473749.useMemo(() => ({
      baseSort: require,
      keys: ["label"]
    }), [require])
  }
}