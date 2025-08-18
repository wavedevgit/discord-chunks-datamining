/** Chunk was on 91173 **/
/** chunk id: 621615, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => r
});
let r = (0, require("./818083.js").B)({
  kind: "user",
  id: "2023-09_proxy_block_notice",
  label: "Proxy Block Experiment",
  defaultConfig: {
    eligibleForNotice: false
  },
  treatments: [{
    id: 1,
    label: "Show nag bar when proxy blocks an API request",
    config: {
      eligibleForNotice: true
    }
  }]
})