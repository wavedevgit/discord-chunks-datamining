/** Chunk was on 21738 **/
/** chunk id: 28025, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  x: () => o
}), require("./896048.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js"), require("./747238.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk960488 = require("./960488.js"),
  Chunk435220 = require("./435220.js"),
  Chunk162157 = require("./162157.js"),
  Chunk652215 = require("./652215.js");

function o() {
  let e = new URLSearchParams(location.search),
    t = e.get("q"),
    n = e.get("category_id");
  return e.delete("page"), (0, r.jsxs)(i.dO, {
    children: [null != n && null == t ? (0, r.jsx)(i.rd, {
      path: s.BVt.APPLICATION_DIRECTORY_SEARCH,
      to: "".concat(s.BVt.GLOBAL_DISCOVERY_APPS_CATEGORY("".concat(n)))
    }) : (0, r.jsx)(i.rd, {
      path: s.BVt.APPLICATION_DIRECTORY_SEARCH,
      to: "".concat(s.BVt.GLOBAL_DISCOVERY_APPS_SEARCH, "?").concat(e.toString())
    }), (0, r.jsx)(i.rd, {
      path: s.BVt.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(":applicationId", ":skuId"),
      to: s.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(":applicationId", ":skuId")
    }), (0, r.jsx)(i.rd, {
      path: s.BVt.APPLICATION_DIRECTORY_PROFILE_SECTION(":applicationId", a.h.STORE),
      to: s.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(":applicationId", l.GlobalDiscoveryAppsSections.STORE)
    }), (0, r.jsx)(i.rd, {
      path: s.BVt.APPLICATION_DIRECTORY_PROFILE_SECTION(":applicationId", a.h.PREMIUM_DEPRECATED),
      to: s.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(":applicationId", l.GlobalDiscoveryAppsSections.STORE)
    }), (0, r.jsx)(i.rd, {
      path: s.BVt.APPLICATION_DIRECTORY_PROFILE(":applicationId"),
      to: {
        pathname: s.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(":applicationId"),
        search: location.search
      }
    }), (0, r.jsx)(i.rd, {
      path: s.BVt.APPLICATION_DIRECTORY,
      to: s.BVt.GLOBAL_DISCOVERY_APPS
    })]
  })
}