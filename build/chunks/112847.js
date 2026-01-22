/** Chunk was on web.js **/
/** chunk id: 112847, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => l
});
var Chunk64700 = require("./64700.js"),
  Chunk417597 = require("./417597.js"),
  Chunk374994 = require("./374994.js"),
  Chunk827734 = require("./827734.js"),
  Chunk775602 = require("./775602.js");

function l(e) {
  let t = (0, i.bG)([o.A], () => o.A.saturation);
  return (0, r.useMemo)(() => {
    if (null == e) return null;
    let n = {
      theme: e,
      saturation: t
    };
    return {
      overlaySyncedWithUserTheme: s.A.colors.PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME.resolve(n).hex(),
      overlay: s.A.colors.PROFILE_GRADIENT_OVERLAY.resolve(n).hex(),
      sectionBox: s.A.colors.PROFILE_GRADIENT_SECTION_BOX.resolve(n).hex(),
      dividerOpacity: e === (0, a.$D)().DARK ? .24 : .12,
      rolePillBackgroundColor: s.A.colors.PROFILE_GRADIENT_ROLE_PILL_BACKGROUND.resolve(n).hex()
    }
  }, [e, t])
}