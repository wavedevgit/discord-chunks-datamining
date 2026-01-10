/** Chunk was on 45620 **/
/** chunk id: 888302, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk335818 = require("./335818.js"),
  Chunk481060 = require("./481060.js"),
  Chunk501431 = require("./501431.js"),
  Chunk149705 = require("./149705.js"),
  Chunk388032 = require("./388032.jsx");

function u() {
  let {
    itemTypeFilters: e,
    searchQuery: t
  } = (0, i.S)(e => e), {
    totalCount: n,
    isFetchingResults: u
  } = (0, o.a)(), d = (0, i.S)(e => e.hasFilters()), f = l.useCallback(() => {
    if (!d) return "";
    if (u) return c.intl.string(c.t["/FaMSE"]);
    if ("" !== t) {
      let e = t.length > 40 ? "".concat(t.slice(0, 40), "...") : t;
      return c.intl.format(c.t.KJMJOz, {
        count: n,
        search: e
      })
    }
    return 1 === e.size && e.has(a.G.AVATAR_DECORATION) ? c.intl.format(c.t.s1UzGQ, {
      count: n
    }) : 1 === e.size && e.has(a.G.NAMEPLATE) ? c.intl.format(c.t.ZWGN9T, {
      count: n
    }) : 1 === e.size && e.has(a.G.PROFILE_EFFECT) ? c.intl.format(c.t["v/7apu"], {
      count: n
    }) : 1 === e.size && e.has(a.G.BUNDLE) ? c.intl.format(c.t.fZ1rdk, {
      count: n
    }) : c.intl.format(c.t["/rPvmQ"], {
      count: n
    })
  }, [e, n, d, t, u]);
  return (0, r.jsx)(s.Heading, {
    variant: "heading-lg/semibold",
    children: f()
  })
}