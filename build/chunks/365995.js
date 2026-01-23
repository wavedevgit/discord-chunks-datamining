/** Chunk was on 13492 **/
/** chunk id: 365995, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  A: () => l
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk87001 = require("./87001.js"),
  Chunk652215 = require("./652215.js");

function l() {
  let e = (0, o.bG)([a.A], () => a.A.getWindow(i.MLl.ACTIVITY_POPOUT)),
    n = r.useMemo(() => null == e ? true : e.window.document, [e]),
    t = r.useMemo(() => null == n ? true : n.getElementById("app-mount"), [n]);
  return {
    popoutWindow: e,
    currentDocument: n,
    rootNode: t
  }
}