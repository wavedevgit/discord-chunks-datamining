/** Chunk was on web.js **/
/** chunk id: 300284, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk647438 = require("./647438.js"),
  Chunk230711 = require("./230711.js"),
  Chunk18438 = require("./18438.js"),
  Chunk981631 = require("./981631.js"),
  Chunk526761 = require("./526761.js");

function l() {
  let {
    guild: e,
    scrollPosition: t,
    analyticsLocation: n,
    analyticsLocations: l,
    openWithoutBackstack: c
  } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
  return (0, Chunk647438.useCallback)(() => {
    null != module && (0, Chunk18438.Fq)(module), Chunk230711.Z.open(Chunk981631.oAB.PROFILE_CUSTOMIZATION, null != module ? Chunk526761.NB.GUILD : Chunk526761.NB.USER_PROFILE, {
      analyticsLocation: require,
      analyticsLocations: l,
      openWithoutBackstack: c,
      scrollPosition: exports
    })
  }, [module, exports, require, l, c])
}
require("./778825.js"), require("./663389.js")