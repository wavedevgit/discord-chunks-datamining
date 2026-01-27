/** Chunk was on 41727 **/
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
  let t = (0, s.os)("useShouldRenderBanner"),
    [n, o] = r.useState("");
  r.useEffect(() => {
    o("")
  }, [e.id]);
  let c = (0, l.bG)([a.A], () => a.A.getLastActionTime(e.id));
  r.useEffect(() => {
    !i.B4.has(e.type) || n === e.id || t && a.A.maybeAutoUpgradeChannel(e.id) && o(e.id)
  }, [n, t, c, e]);
  let u = r.useCallback(() => o(""), []);
  return {
    showUnreadsNotice: n === e.id,
    clearUnreadsNotice: u
  }
}