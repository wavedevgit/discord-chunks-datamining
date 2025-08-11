/** Chunk was on web.js **/
/** chunk id: 510231, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => d,
  h: () => f
}), require("./583741.js");
var Chunk73800 = require("./73800.js"),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk189451 = require("./189451.js"),
  Chunk77498 = require("./77498.js"),
  Chunk570911 = require("./570911.js");

function u(e) {
  var t;
  return null != (t = c.gQ.get(e)) ? t : 0
}

function d(e) {
  return (null == e ? true : e.themes) != null && e.themes.includes(s.u.EROTIC)
}

function f() {
  let e = (0, Chunk442837.e7)([Chunk77498.Z], () => Chunk77498.Z.games),
    t = Chunk73800.useMemo(() => o()(module).filter(e => !d(e)).map(e => ({
      value: e.id,
      label: e.name
    })).sortBy(e => {
      let {
        value: t
      } = e;
      return u(t)
    }).reverse().value(), [module]),
    n = Chunk73800.useCallback((e, t) => u(t.item.value) - u(e.item.value), []);
  return {
    options: exports,
    matchSorterOptions: Chunk73800.useMemo(() => ({
      baseSort: require,
      keys: ["label"]
    }), [require])
  }
}