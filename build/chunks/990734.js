/** Chunk was on 46467 **/
/** chunk id: 990734, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  p: () => i
});
let r = (0, require("./427164.js").le)({
  name: "2025-09-threads-in-channel-list-qol",
  kind: "user",
  defaultConfig: {
    enabled: false,
    variant: "none"
  },
  variations: {
    1: {
      enabled: true,
      variant: "icon-with-avatar"
    },
    2: {
      enabled: true,
      variant: "icon-in-bubble"
    },
    3: {
      enabled: true,
      variant: "small-text-only"
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