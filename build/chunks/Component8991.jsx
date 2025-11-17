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
    I = module.get("q"),
    _ = module.get("category_id");
  return module.delete("page"), (0, Chunk54381.jsxs)(Chunk828700.rs, {
    children: [null != require && null == exports ? (0, Chunk54381.jsx)(Chunk828700.l_, {
      path: Chunk981631.Z5c.APPLICATION_DIRECTORY_SEARCH,
      to: "".concat(Chunk981631.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY("".concat(require)))
    }) : (0, Chunk54381.jsx)(Chunk828700.l_, {
      path: Chunk981631.Z5c.APPLICATION_DIRECTORY_SEARCH,
      to: "".concat(Chunk981631.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, "?").concat(module.toString())
    }), (0, Chunk54381.jsx)(Chunk828700.l_, {
      path: Chunk981631.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(":applicationId", ":skuId"),
      to: Chunk981631.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(":applicationId", ":skuId")
    }), (0, Chunk54381.jsx)(Chunk828700.l_, {
      path: Chunk981631.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(":applicationId", Chunk688357.c.STORE),
      to: Chunk981631.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(":applicationId", Chunk979007.GlobalDiscoveryAppsSections.STORE)
    }), (0, Chunk54381.jsx)(Chunk828700.l_, {
      path: Chunk981631.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(":applicationId", Chunk688357.c.PREMIUM_DEPRECATED),
      to: Chunk981631.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(":applicationId", Chunk979007.GlobalDiscoveryAppsSections.STORE)
    }), (0, Chunk54381.jsx)(Chunk828700.l_, {
      path: Chunk981631.Z5c.APPLICATION_DIRECTORY_PROFILE(":applicationId"),
      to: {
        pathname: Chunk981631.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(":applicationId"),
        search: location.search
      }
    }), (0, Chunk54381.jsx)(Chunk828700.l_, {
      path: Chunk981631.Z5c.APPLICATION_DIRECTORY,
      to: Chunk981631.Z5c.GLOBAL_DISCOVERY_APPS
    })]
  })
}