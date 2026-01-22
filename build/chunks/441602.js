/** Chunk was on 1636 **/
/** chunk id: 441602, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => l
});
let r = (0, require("./945810.js").mj)({
  name: "2025-11-message-context-menu",
  kind: "user",
  defaultConfig: {
    variant: "control",
    forceIconsLeft: false,
    reorderMessageMenuItems: false
  },
  variations: {
    0: {
      variant: "control",
      forceIconsLeft: false,
      reorderMessageMenuItems: false
    },
    1: {
      variant: "icons_added",
      forceIconsLeft: true,
      reorderMessageMenuItems: false
    },
    2: {
      variant: "items_reordered",
      forceIconsLeft: true,
      reorderMessageMenuItems: true
    }
  }
});

function l(e) {
  let t = r.useConfig({
    location: e
  });
  return {
    forceIconsLeft: t.forceIconsLeft,
    reorderMessageMenuItems: t.reorderMessageMenuItems
  }
}