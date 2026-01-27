/** Chunk was on 41727 **/
/** chunk id: 559149, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => r
});
let r = (0, require("./600975.js").C)({
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