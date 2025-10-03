/** Chunk was on 80448 **/
/** chunk id: 824480, original params: t,i,r (module,exports,require) **/
require.d(exports, {
  d: () => c
});
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk232567 = require("./232567.js"),
  Chunk516373 = require("./516373.js"),
  Chunk515970 = require("./515970.js"),
  Chunk5888 = require("./5888.js");

function c() {
  let t = (0, Chunk442837.e7)([Chunk5888.Z], () => Chunk5888.Z.getFetchState()),
    {
      sidekicks: i
    } = (0, Chunk442837.e7)([Chunk5888.Z], () => Chunk5888.Z.getCheckpointData()),
    r = (0, Chunk516373.D)();
  (0, Chunk647438.useEffect)(() => {
    module !== Chunk5888.p.FETCHING && module !== Chunk5888.p.SUCCESS && null != require && (0, Chunk515970.p)()
  }, [module, require]), (0, Chunk647438.useEffect)(() => {
    null != exports && exports.forEach(t => {
      let {
        userId: i
      } = t;
      return (0, a.PR)(i)
    })
  }, [exports])
}