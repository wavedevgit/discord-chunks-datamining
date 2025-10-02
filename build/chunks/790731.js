/** Chunk was on 93886 **/
/** chunk id: 790731, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk384275 = require("./384275.js"),
  Chunk881998 = require("./881998.js");

function o() {
  let {
    disableFetch: e = false
  } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {}, t = (0, Chunk442837.e7)([Chunk881998.Z], () => Chunk881998.Z.getFetchState());
  return Chunk647438.useEffect(() => {
    module || exports !== Chunk881998.M.NOT_FETCHED || Chunk384275.Z.fetch()
  }, [module, exports]), {
    loading: exports !== Chunk881998.M.FETCHED
  }
}