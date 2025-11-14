/** Chunk was on 45620 **/
/** chunk id: 888302, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk335818 = require("./335818.js"),
  Chunk481060 = require("./481060.js"),
  Chunk501431 = require("./501431.js"),
  Chunk149705 = require("./149705.js"),
  Chunk388032 = require("./388032.jsx");

function u() {
  let {
    itemTypeFilters: e,
    searchQuery: t
  } = (0, Chunk501431.S)(e => e), {
    totalCount: n,
    isFetchingResults: u
  } = (0, Chunk149705.a)(), d = (0, Chunk501431.S)(e => e.hasFilters()), p = Chunk647438.useCallback(() => {
    if (!d) return "";
    if (u) return Chunk388032.intl.string(Chunk388032.t["/FaMSE"]);
    if ("" !== exports) {
      let e = exports.length > 40 ? "".concat(exports.slice(0, 40), "...") : exports;
      return Chunk388032.intl.format(Chunk388032.t.KJMJOz, {
        count: require,
        search: module
      })
    }
    return 1 === module.size && module.has(Chunk335818.G.AVATAR_DECORATION) ? Chunk388032.intl.format(Chunk388032.t.s1UzGQ, {
      count: require
    }) : 1 === module.size && module.has(Chunk335818.G.NAMEPLATE) ? Chunk388032.intl.format(Chunk388032.t.ZWGN9T, {
      count: require
    }) : 1 === module.size && module.has(Chunk335818.G.PROFILE_EFFECT) ? Chunk388032.intl.format(Chunk388032.t["v/7apu"], {
      count: require
    }) : 1 === module.size && module.has(Chunk335818.G.BUNDLE) ? Chunk388032.intl.format(Chunk388032.t.fZ1rdk, {
      count: require
    }) : Chunk388032.intl.format(Chunk388032.t["/rPvmQ"], {
      count: require
    })
  }, [module, require, d, exports, u]);
  return (0, Chunk951288.jsx)(Chunk481060.Heading, {
    variant: "heading-lg/semibold",
    children: p()
  })
}