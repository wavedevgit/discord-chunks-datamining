/** Chunk was on 13492 **/
/** chunk id: 365995, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => a
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk87001 = require("./87001.js"),
  Chunk652215 = require("./652215.js");

function a() {
  let e = (0, r.bG)([i.A], () => i.A.getWindow(o.MLl.ACTIVITY_POPOUT)),
    t = l.useMemo(() => null == e ? true : e.window.document, [e]),
    n = l.useMemo(() => null == t ? true : t.getElementById("app-mount"), [t]);
  return {
    popoutWindow: e,
    currentDocument: t,
    rootNode: n
  }
}