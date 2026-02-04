/** Chunk was on 17869 **/
/** chunk id: 750580, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk95701 = require("./95701.js"),
  Chunk769591 = require("./769591.js"),
  Chunk517092 = require("./517092.js");

function o(e) {
  let t = (0, a.os)("useShouldRenderBanner"),
    [n, o] = l.useState("");
  l.useEffect(() => {
    o("")
  }, [e.id]);
  let c = (0, r.bG)([s.A], () => s.A.getLastActionTime(e.id));
  l.useEffect(() => {
    !i.B4.has(e.type) || n === e.id || t && s.A.maybeAutoUpgradeChannel(e.id) && o(e.id)
  }, [n, t, c, e]);
  let u = l.useCallback(() => o(""), []);
  return {
    showUnreadsNotice: n === e.id,
    clearUnreadsNotice: u
  }
}