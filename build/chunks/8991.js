/** Chunk was on 78449 **/
_.d(I, {
  E: () => P
}), _(65234), _(111804), _(490233), _(97749), _(388685), _(35282);
var a = _(255367);
_(73800);
var t = _(114858),
  O = _(979007),
  R = _(688357),
  E = _(981631);

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