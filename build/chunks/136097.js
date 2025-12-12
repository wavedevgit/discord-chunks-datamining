/** Chunk was on web.js **/
/** chunk id: 136097, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  h: () => u,
  p: () => d
}), require("./388685.js"), require("./642613.js");
var Chunk473749 = require("./473749.js"),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk314897 = require("./314897.js"),
  Chunk673096 = require("./673096.js"),
  Chunk388032 = require("./388032.jsx");

function u() {
  let e = (0, Chunk442837.cj)([Chunk673096.Z], () => Chunk673096.Z.getSessions());
  return Chunk473749.useMemo(() => {
    let t = [...module],
      n = null,
      r = Chunk314897.default.getAuthSessionIdHash();
    if (null != Chunk473749) {
      let e = exports.findIndex(e => e.id_hash === r);
      module >= 0 && (n = exports.splice(module, 1)[0])
    }
    return exports.sort((e, t) => t.approx_last_used_time.valueOf() - e.approx_last_used_time.valueOf()), {
      currentSession: require,
      otherSessions: exports
    }
  }, [module])
}

function d(e) {
  return (Date.now() - e.valueOf()) / 1e3 / 60 / 60 < 1 ? c.intl.string(c.t.TXCmfL) : o()(e).fromNow()
}