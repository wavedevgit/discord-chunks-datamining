/** Chunk was on web.js **/
/** chunk id: 579132, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => l
});
var Chunk473749 = require("./473749.js"),
  Chunk399606 = require("./399606.js"),
  Chunk900089 = require("./900089.js"),
  Chunk692547 = require("./692547.js"),
  Chunk607070 = require("./607070.js");

function l(e) {
  let t = (0, i.e7)([s.Z], () => s.Z.saturation);
  return (0, r.useMemo)(() => {
    if (null == e) return null;
    let n = {
      theme: e,
      saturation: t
    };
    return {
      overlaySyncedWithUserTheme: a.Z.colors.PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME.resolve(n).hex(),
      overlay: a.Z.colors.PROFILE_GRADIENT_OVERLAY.resolve(n).hex(),
      sectionBox: a.Z.colors.PROFILE_GRADIENT_SECTION_BOX.resolve(n).hex(),
      dividerOpacity: e === (0, o.RC)().DARK ? .24 : .12,
      rolePillBackgroundColor: a.Z.colors.PROFILE_GRADIENT_ROLE_PILL_BACKGROUND.resolve(n).hex()
    }
  }, [e, t])
}