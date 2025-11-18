/** Chunk was on 71264 **/
/** chunk id: 944103, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk131704 = require("./131704.js"),
  Chunk423589 = require("./423589.js"),
  Chunk390289 = require("./390289.js");

function s(e) {
  let t = (0, a.Mn)("useShouldRenderBanner"),
    [n, s] = i.useState("");
  i.useEffect(() => {
    s("")
  }, [e.id]);
  let c = (0, r.e7)([o.Z], () => o.Z.getLastActionTime(e.id));
  i.useEffect(() => {
    l.$N.has(e.type) && n !== e.id && t && o.Z.maybeAutoUpgradeChannel(e.id) && s(e.id)
  }, [n, t, c, e]);
  let u = i.useCallback(() => s(""), []);
  return {
    showUnreadsNotice: n === e.id,
    clearUnreadsNotice: u
  }
}