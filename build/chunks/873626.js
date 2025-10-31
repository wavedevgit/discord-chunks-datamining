/** Chunk was on web.js **/
/** chunk id: 873626, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => a,
  c: () => i
});
let r = (0, require("./427164.js").le)({
    kind: "user",
    name: "2025-10-list-profile-effects-sunset-again",
    defaultConfig: {
      isEnabled: false
    },
    variations: {
      1: {
        isEnabled: true
      }
    }
  }),
  i = e => {
    let {
      isEnabled: t
    } = r.getConfig({
      location: e
    });
    return t
  },
  a = e => {
    let {
      isEnabled: t
    } = r.useConfig({
      location: e
    });
    return t
  }