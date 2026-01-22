/** Chunk was on web.js **/
/** chunk id: 206835, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk64700 = require("./64700.js"),
  Chunk159001 = require("./159001.js"),
  Chunk780964 = require("./780964.js"),
  Chunk652215 = require("./652215.js"),
  Chunk355097 = require("./355097.js");

function l() {
  let {
    guild: e,
    scrollPosition: t,
    analyticsLocation: l,
    analyticsLocations: c
  } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
  return (0, r.useCallback)(() => {
    null != e && (0, i.V2)(e);
    {
      let {
        openUserSettings: t
      } = n(840065);
      t(a.X.PROFILE_PANEL, {
        section: s.nc_.PROFILE_CUSTOMIZATION,
        subsection: null != e ? o.Eq.GUILD : o.Eq.USER_PROFILE,
        analyticsLocation: l,
        analyticsLocations: c
      })
    }
  }, [e, t, l, c])
}
require("./833336.js"), require("./628965.js")