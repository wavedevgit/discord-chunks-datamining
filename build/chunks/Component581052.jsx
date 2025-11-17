/** Chunk was on 56826 **/
/** chunk id: 581052, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  V: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk823162 = require("./823162.js"),
  Chunk594174 = require("./594174.js"),
  Chunk388032 = require("./388032.jsx");

function d(e) {
  let n = (0, r.e7)([s.default], () => s.default.getCurrentUser());
  return (null == n ? true : n.isStaff()) !== true ? null : (0, i.jsxs)(i.Fragment, {
    children: [!e.isMessageRequest && (0, i.jsx)(l.sNh, {
      id: "mark-as-message-request",
      label: o.intl.string(o.t.L6623r),
      action: () => (0, a.Xy)(e.id)
    }), (0, i.jsx)(l.sNh, {
      id: "clear-message-request",
      label: o.intl.string(o.t["85YWlY"]),
      action: () => (0, a.qR)(e.id)
    })]
  })
}