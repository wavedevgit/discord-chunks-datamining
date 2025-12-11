/** Chunk was on web.js **/
/** chunk id: 125742, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  u: () => i
});
let r = (0, require("./427164.js").le)({
  name: "2025-12-user-profile-show-recommendations-in-breadcrumbs",
  kind: "user",
  defaultConfig: {
    enabledInPopout: false,
    enabledInSidebar: false
  },
  variations: {
    0: {
      enabledInPopout: false,
      enabledInSidebar: false
    },
    1: {
      enabledInPopout: true,
      enabledInSidebar: true
    },
    2: {
      enabledInPopout: true,
      enabledInSidebar: false
    },
    3: {
      enabledInPopout: false,
      enabledInSidebar: true
    }
  }
});

function i(e) {
  let {
    location: t
  } = e;
  return r.useConfig({
    location: t
  })
}