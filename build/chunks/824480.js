/** Chunk was on 80448 **/
/** chunk id: 824480, original params: i,e,t (module,exports,require) **/
require.d(exports, {
  d: () => d
});
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk232567 = require("./232567.js"),
  Chunk515970 = require("./515970.js"),
  Chunk5888 = require("./5888.js");

function d() {
  let i = (0, Chunk442837.e7)([Chunk5888.Z], () => Chunk5888.Z.getFetchState()),
    {
      sidekicks: e
    } = (0, Chunk442837.e7)([Chunk5888.Z], () => Chunk5888.Z.getCheckpointData());
  (0, Chunk647438.useEffect)(() => {
    module !== Chunk5888.p.FETCHING && module !== Chunk5888.p.SUCCESS && (0, Chunk515970.p)()
  }, [module]), (0, Chunk647438.useEffect)(() => {
    null != exports && exports.forEach(i => {
      let {
        userId: e
      } = i;
      return (0, s.PR)(e)
    })
  }, [exports])
}