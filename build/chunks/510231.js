/** Chunk was on web.js **/
/** chunk id: 510231, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => f,
  h: () => p
}), require("./583741.js");
var Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk624238 = require("./624238.js"),
  Chunk442837 = require("./442837.js"),
  Chunk189451 = require("./189451.js"),
  Chunk77498 = require("./77498.js"),
  Chunk570911 = require("./570911.js");

function d(e) {
  var t;
  return null != (t = u.gQ.get(e)) ? t : 0
}

function f(e) {
  return (null == e ? true : e.themes) != null && e.themes.includes(l.J8.EROTIC)
}

function p() {
  let e = (0, Chunk442837.e7)([Chunk77498.Z], () => Chunk77498.Z.games),
    t = Chunk473749.useMemo(() => a()(module).filter(e => !f(e) && !o.Fb.has(e.id)).map(e => ({
      value: e.id,
      label: e.name
    })).sortBy(e => {
      let {
        value: t
      } = e;
      return d(t)
    }).reverse().value(), [module]),
    n = Chunk473749.useCallback((e, t) => d(t.item.value) - d(e.item.value), []);
  return {
    options: exports,
    matchSorterOptions: Chunk473749.useMemo(() => ({
      baseSort: require,
      keys: ["label"]
    }), [require])
  }
}