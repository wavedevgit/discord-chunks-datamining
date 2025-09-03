/** Chunk was on 56826 **/
/** chunk id: 581052, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  V: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk823162 = require("./823162.js"),
  Chunk594174 = require("./594174.js"),
  Chunk388032 = require("./388032.jsx");

function c(e) {
  let t = (0, i.e7)([o.default], () => o.default.getCurrentUser());
  return (null == t ? true : t.isStaff()) !== true ? null : (0, r.jsxs)(r.Fragment, {
    children: [!e.isMessageRequest && (0, r.jsx)(l.sNh, {
      id: "mark-as-message-request",
      label: s.intl.string(s.t.L6623t),
      action: () => (0, a.Xy)(e.id)
    }), (0, r.jsx)(l.sNh, {
      id: "clear-message-request",
      label: s.intl.string(s.t["85YWlZ"]),
      action: () => (0, a.qR)(e.id)
    })]
  })
}