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
  let e = (0, Chunk442837.e7)([Chunk5888.Z], () => Chunk5888.Z.getFetchState()),
    t = (0, Chunk442837.e7)([Chunk5888.Z], () => Chunk5888.Z.getCheckpointData()),
    n = (0, Chunk473749.useMemo)(() => null != exports.applications ? exports.applications.applications.map(e => e.game.id) : [], [exports.applications]);
  return (0, Chunk473749.useEffect)(() => {
    module === Chunk5888.p.INIT && ((0, Chunk515970.pg)(), (0, Chunk496929.p0)({
      entitlementType: Chunk981631.qc2.FREE_PURCHASE
    }))
  }, [module]), (0, Chunk473749.useEffect)(() => {
    Chunk224706.Z.getDetectableGamesSupplemental(require)
  }, [require]), module
}