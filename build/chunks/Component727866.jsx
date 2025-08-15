/** Chunk was on 70274 **/
/** chunk id: 727866, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx");
let l = (t, e) => (0, n.jsxs)(r.Text, {
    color: "text-danger",
    style: {
      display: "flex",
      gap: "4px",
      margin: "8px 0 4px 0",
      alignItems: "center"
    },
    variant: "text-sm/normal",
    children: [(0, n.jsx)(r.Mgn, {
      size: "custom",
      color: "currentColor",
      width: 14,
      height: 14
    }), t]
  }, e),
  s = {
    getTextInVoiceSendMessageChannelPermissionText: function(t) {
      return t ? E.intl.format(E.t.Q1rwpq, {
        warningHook: l
      }) : E.intl.string(E.t.WQ6zpa)
    },
    getTextInVoiceReadMessageHistoryChannelPermissionText: function(t) {
      return t ? E.intl.format(E.t.Rx4pbG, {
        warningHook: l
      }) : E.intl.string(E.t.cuMfHx)
    }
  }