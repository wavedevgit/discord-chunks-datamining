/** Chunk was on 65102 **/
/** chunk id: 489618, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
let a = (0, require("./818083.js").B)({
  kind: "user",
  id: "2025-07_right_click_redemption",
  label: "Right Click Redemption",
  defaultConfig: {
    dotsInsteadOfCloseButton: false,
    rearrangeContextMenu: false
  },
  treatments: [{
    id: 1,
    label: "Replace DM Close Button with Right-Click menu",
    config: {
      dotsInsteadOfCloseButton: true,
      rearrangeContextMenu: false
    }
  }, {
    id: 2,
    label: "Replace DM Close Button with a focused menu",
    config: {
      dotsInsteadOfCloseButton: true,
      rearrangeContextMenu: true
    }
  }]
})