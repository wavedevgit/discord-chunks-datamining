/** Chunk was on web.js **/
/** chunk id: 300284, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk473749 = require("./473749.js"),
  Chunk18438 = require("./18438.js"),
  Chunk313789 = require("./313789.js"),
  Chunk981631 = require("./981631.js"),
  Chunk526761 = require("./526761.js");

function l() {
  let {
    guild: e,
    scrollPosition: t,
    analyticsLocation: l,
    analyticsLocations: c
  } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
  return (0, r.useCallback)(() => {
    null != e && (0, i.Fq)(e);
    {
      let {
        openUserSettings: t
      } = n(518596);
      t(a.n.PROFILE_PANEL, {
        section: o.oAB.PROFILE_CUSTOMIZATION,
        subsection: null != e ? s.NB.GUILD : s.NB.USER_PROFILE,
        analyticsLocation: l,
        analyticsLocations: c
      })
    }
  }, [e, t, l, c])
}
require("./778825.js"), require("./663389.js")