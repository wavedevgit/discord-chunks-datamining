/** Chunk was on web.js **/
/** chunk id: 824480, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  d: () => u
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk496929 = require("./496929.js"),
  Chunk224706 = require("./224706.js"),
  Chunk515970 = require("./515970.js"),
  Chunk5888 = require("./5888.js"),
  Chunk981631 = require("./981631.js");

function u() {
  let e = (0, i.e7)([l.Z], () => l.Z.getFetchState()),
    t = (0, i.e7)([l.Z], () => l.Z.getCheckpointData()),
    n = (0, r.useMemo)(() => null != t.applications ? t.applications.applications.map(e => e.game.id) : [], [t.applications]);
  return (0, r.useEffect)(() => {
    e === l.p.INIT && ((0, s.pg)(), (0, a.p0)({
      entitlementType: c.qc2.FREE_PURCHASE
    }))
  }, [e]), (0, r.useEffect)(() => {
    o.Z.getDetectableGamesSupplemental(n)
  }, [n]), e
}