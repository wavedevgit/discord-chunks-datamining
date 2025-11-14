/** Chunk was on 80448 **/
/** chunk id: 824480, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  d: () => d
});
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk224706 = require("./224706.js"),
  Chunk515970 = require("./515970.js"),
  Chunk5888 = require("./5888.js");

function d() {
  let t = (0, Chunk442837.e7)([Chunk5888.Z], () => Chunk5888.Z.getFetchState()),
    e = (0, Chunk442837.e7)([Chunk5888.Z], () => Chunk5888.Z.getCheckpointData()),
    i = (0, Chunk647438.useMemo)(() => null != exports.applications ? exports.applications.applications.map(t => t.game.id) : [], [exports.applications]);
  (0, Chunk647438.useEffect)(() => {
    module !== Chunk5888.p.FETCHING && module !== Chunk5888.p.SUCCESS && (0, Chunk515970.p)()
  }, [module]), (0, Chunk647438.useEffect)(() => {
    Chunk224706.Z.getDetectableGamesSupplemental(require)
  }, [require])
}