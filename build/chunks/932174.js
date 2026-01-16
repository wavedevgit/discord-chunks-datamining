/** Chunk was on 27278 **/
/** chunk id: 932174, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => i
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk522474 = require("./522474.js"),
  Chunk981631 = require("./981631.js");

function i() {
  let e = (0, o.e7)([r.Z], () => r.Z.getWindow(c.KJ3.ACTIVITY_POPOUT)),
    n = a.useMemo(() => null == e ? true : e.window.document, [e]),
    t = a.useMemo(() => null == n ? true : n.getElementById("app-mount"), [n]);
  return {
    popoutWindow: e,
    currentDocument: n,
    rootNode: t
  }
}