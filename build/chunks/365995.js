/** Chunk was on 13492 **/
/** chunk id: 365995, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  A: () => r
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk87001 = require("./87001.js"),
  Chunk652215 = require("./652215.js");

function r() {
  let e = (0, n.bG)([l.A], () => l.A.getWindow(d.MLl.ACTIVITY_POPOUT)),
    t = c.useMemo(() => null == e ? true : e.window.document, [e]),
    a = c.useMemo(() => null == t ? true : t.getElementById("app-mount"), [t]);
  return {
    popoutWindow: e,
    currentDocument: t,
    rootNode: a
  }
}