/** Chunk was on 59275 **/
/** chunk id: 549367, original params: e,t,l (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk641150 = require("./641150.js"),
  Chunk397927 = require("./397927.js"),
  Chunk365491 = require("./365491.js"),
  Chunk856686 = require("./856686.js"),
  Chunk985018 = require("./985018.jsx");

function u() {
  let {
    itemTypeFilters: e,
    searchQuery: t
  } = (0, i.v)(e => e), {
    totalCount: l,
    isFetchingResults: u
  } = (0, o.S)(), d = (0, i.v)(e => e.hasFilters()), f = r.useCallback(() => {
    if (!d) return "";
    if (u) return c.intl.string(c.t["/FaMSE"]);
    if ("" !== t) {
      let e = t.length > 40 ? "".concat(t.slice(0, 40), "...") : t;
      return c.intl.format(c.t.KJMJOz, {
        count: l,
        search: e
      })
    }
    return 1 === e.size && e.has(s.q.AVATAR_DECORATION) ? c.intl.format(c.t.s1UzGQ, {
      count: l
    }) : 1 === e.size && e.has(s.q.NAMEPLATE) ? c.intl.format(c.t.ZWGN9T, {
      count: l
    }) : 1 === e.size && e.has(s.q.PROFILE_EFFECT) ? c.intl.format(c.t["v/7apu"], {
      count: l
    }) : 1 === e.size && e.has(s.q.BUNDLE) ? c.intl.format(c.t.fZ1rdk, {
      count: l
    }) : c.intl.format(c.t["/rPvmQ"], {
      count: l
    })
  }, [e, l, d, t, u]);
  return (0, n.jsx)(a.Heading, {
    variant: "heading-lg/semibold",
    children: f()
  })
}