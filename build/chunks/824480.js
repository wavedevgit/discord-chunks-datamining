/** Chunk was on 80448 **/
/** chunk id: 824480, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  d: () => o
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk496929 = require("./496929.js"),
  Chunk224706 = require("./224706.js"),
  Chunk515970 = require("./515970.js"),
  Chunk5888 = require("./5888.js"),
  Chunk981631 = require("./981631.js");

function o() {
  let t = (0, Chunk442837.e7)([Chunk5888.Z], () => Chunk5888.Z.getFetchState()),
    e = (0, Chunk442837.e7)([Chunk5888.Z], () => Chunk5888.Z.getCheckpointData()),
    i = (0, Chunk473749.useMemo)(() => null != exports.applications ? exports.applications.applications.map(t => t.game.id) : [], [exports.applications]);
  (0, Chunk473749.useEffect)(() => {
    module === Chunk5888.p.INIT && ((0, Chunk515970.pg)(), (0, Chunk496929.p0)({
      entitlementType: Chunk981631.qc2.FREE_PURCHASE
    }))
  }, [module]), (0, Chunk473749.useEffect)(() => {
    Chunk224706.Z.getDetectableGamesSupplemental(require)
  }, [require])
}