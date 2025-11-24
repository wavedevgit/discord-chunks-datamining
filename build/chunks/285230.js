/** Chunk was on 37220 **/
/** chunk id: 285230, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  d: () => i
});
let r = (0, require("./427164.js").le)({
  name: "2025-11-message-context-menu-mana-design",
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

function i(e) {
  let t = r.useConfig({
    location: e
  });
  return {
    forceIconsLeft: t.forceIconsLeft,
    reorderMessageMenuItems: t.reorderMessageMenuItems
  }
}