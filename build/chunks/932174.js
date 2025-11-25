/** Chunk was on 27278 **/
/** chunk id: 932174, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk522474 = require("./522474.js"),
  Chunk981631 = require("./981631.js");

function c() {
  let e = (0, Chunk442837.e7)([Chunk522474.Z], () => Chunk522474.Z.getWindow(Chunk981631.KJ3.ACTIVITY_POPOUT)),
    n = Chunk473749.useMemo(() => null == module ? true : module.window.document, [module]),
    t = Chunk473749.useMemo(() => null == exports ? true : exports.getElementById("app-mount"), [exports]);
  return {
    popoutWindow: module,
    currentDocument: exports,
    rootNode: require
  }
}