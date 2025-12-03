/** Chunk was on 44097 **/
/** chunk id: 747101, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  kN: () => s,
  kO: () => o,
  qU: () => c
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk224706 = require("./224706.js"),
  Chunk669764 = require("./669764.js");

function o(e) {
  return (0, i.e7)([a.Z], () => a.Z.isFetching(e))
}

function c(e) {
  r.useEffect(() => {
    if (e.length > 0) {
      let t = e.filter(e => a.Z.canFetch(e));
      t.length > 0 && l.Z.getDetectableGamesSupplemental(t)
    }
  }, [e])
}

function s(e) {
  let [t, n] = (0, i.Wu)([a.Z], () => [a.Z.numNoDataAvailable(), a.Z.numSupplementalGames()]);
  return r.useMemo(() => {
    let t = {};
    return e.forEach(e => {
      t[e] = a.Z.getGame(e)
    }), t
  }, [e, t, n])
}