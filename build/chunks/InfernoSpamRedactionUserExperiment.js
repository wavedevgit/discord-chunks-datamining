/** Chunk was on 82124 **/
/** chunk id: 135938, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => r
});
let r = (0, require("./818083.js").B)({
  kind: "user",
  id: "2021-12_inferno_spam_redaction",
  label: "Inferno Spam Redaction",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Allow guild channel messages from spammers to be collapsed",
    config: {
      enabled: true
    }
  }]
})