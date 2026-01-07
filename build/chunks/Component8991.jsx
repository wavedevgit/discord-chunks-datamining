/** Chunk was on 78449 **/
/** chunk id: 8991, original params: c,I,_ (module,exports,require) **/
require.d(exports, {
  E: () => P
}), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js"), require("./35282.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk828700 = require("./828700.js"),
  Chunk979007 = require("./979007.js"),
  Chunk688357 = require("./688357.js"),
  Chunk981631 = require("./981631.js");

function P() {
  let c = new URLSearchParams(location.search),
    I = c.get("q"),
    _ = c.get("category_id");
  return c.delete("page"), (0, a.jsxs)(t.rs, {
    children: [null != _ && null == I ? (0, a.jsx)(t.l_, {
      path: E.Z5c.APPLICATION_DIRECTORY_SEARCH,
      to: "".concat(E.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY("".concat(_)))
    }) : (0, a.jsx)(t.l_, {
      path: E.Z5c.APPLICATION_DIRECTORY_SEARCH,
      to: "".concat(E.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, "?").concat(c.toString())
    }), (0, a.jsx)(t.l_, {
      path: E.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(":applicationId", ":skuId"),
      to: E.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(":applicationId", ":skuId")
    }), (0, a.jsx)(t.l_, {
      path: E.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(":applicationId", R.c.STORE),
      to: E.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(":applicationId", O.GlobalDiscoveryAppsSections.STORE)
    }), (0, a.jsx)(t.l_, {
      path: E.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(":applicationId", R.c.PREMIUM_DEPRECATED),
      to: E.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(":applicationId", O.GlobalDiscoveryAppsSections.STORE)
    }), (0, a.jsx)(t.l_, {
      path: E.Z5c.APPLICATION_DIRECTORY_PROFILE(":applicationId"),
      to: {
        pathname: E.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(":applicationId"),
        search: location.search
      }
    }), (0, a.jsx)(t.l_, {
      path: E.Z5c.APPLICATION_DIRECTORY,
      to: E.Z5c.GLOBAL_DISCOVERY_APPS
    })]
  })
}