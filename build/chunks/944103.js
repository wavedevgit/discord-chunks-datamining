/** Chunk was on web.js **/
/** chunk id: 944103, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk131704 = require("./131704.js"),
  Chunk423589 = require("./423589.js"),
  Chunk390289 = require("./390289.js");

function l(e) {
  let t = (0, a.Mn)("useShouldRenderBanner"),
    [n, l] = r.useState("");
  r.useEffect(() => {
    l("")
  }, [e.id]);
  let c = (0, i.e7)([s.Z], () => s.Z.getLastActionTime(e.id));
  r.useEffect(() => {
    o.$N.has(e.type) && n !== e.id && t && s.Z.maybeAutoUpgradeChannel(e.id) && l(e.id)
  }, [n, t, c, e]);
  let u = r.useCallback(() => l(""), []);
  return {
    showUnreadsNotice: n === e.id,
    clearUnreadsNotice: u
  }
}