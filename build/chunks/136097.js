/** Chunk was on 7384 **/
/** chunk id: 136097, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  h: () => d,
  p: () => u
}), require("./388685.js"), require("./642613.js");
var Chunk73800 = require("./73800.js"),
  Chunk913527 = require("./913527.js"),
  s = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk314897 = require("./314897.js"),
  Chunk673096 = require("./673096.js"),
  Chunk388032 = require("./388032.jsx");

function d() {
  let e = (0, Chunk442837.cj)([Chunk673096.Z], () => Chunk673096.Z.getSessions());
  return Chunk73800.useMemo(() => {
    let t = [...module],
      n = null,
      i = Chunk314897.default.getAuthSessionIdHash();
    if (null != Chunk73800) {
      let e = exports.findIndex(e => e.id_hash === i);
      module >= 0 && (n = exports.splice(module, 1)[0])
    }
    return exports.sort((e, t) => t.approx_last_used_time.valueOf() - e.approx_last_used_time.valueOf()), {
      currentSession: require,
      otherSessions: exports
    }
  }, [module])
}

function u(e) {
  return (Date.now() - e.valueOf()) / 1e3 / 60 / 60 < 1 ? c.intl.string(c.t.TXCmfH) : s()(e).fromNow()
}