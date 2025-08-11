/** Chunk was on 56826 **/
/** chunk id: 581052, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  V: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk823162 = require("./823162.js"),
  Chunk594174 = require("./594174.js"),
  Chunk388032 = require("./388032.jsx");

function u(t) {
  let n = (0, r.e7)([a.default], () => a.default.getCurrentUser());
  return (null == n ? true : n.isStaff()) !== true ? null : (0, i.jsxs)(i.Fragment, {
    children: [!t.isMessageRequest && (0, i.jsx)(l.sNh, {
      id: "mark-as-message-request",
      label: d.intl.string(d.t.L6623t),
      action: () => (0, s.Xy)(t.id)
    }), (0, i.jsx)(l.sNh, {
      id: "clear-message-request",
      label: d.intl.string(d.t["85YWlZ"]),
      action: () => (0, s.qR)(t.id)
    })]
  })
}