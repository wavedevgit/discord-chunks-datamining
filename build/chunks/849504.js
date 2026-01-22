/** Chunk was on web.js **/
/** chunk id: 849504, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => u
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk339048 = require("./339048.js"),
  Chunk544420 = require("./544420.js"),
  Chunk796104 = require("./796104.js"),
  Chunk719718 = require("./719718.js"),
  Chunk652215 = require("./652215.js");

function u() {
  let e = (0, i.bG)([l.A], () => l.A.getFetchState()),
    t = (0, i.bG)([l.A], () => l.A.getCheckpointData()),
    n = (0, r.useMemo)(() => null != t.applications ? t.applications.applications.map(e => e.game.id) : [], [t.applications]);
  return (0, r.useEffect)(() => {
    e === l.$.INIT && ((0, o.nX)(), (0, a.qw)({
      entitlementType: c.zF_.FREE_PURCHASE
    }))
  }, [e]), (0, r.useEffect)(() => {
    s.A.getDetectableGamesSupplemental(n)
  }, [n]), e
}