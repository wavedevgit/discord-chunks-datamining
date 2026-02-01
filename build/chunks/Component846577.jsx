/** Chunk was on 93169 **/
/** chunk id: 846577, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk966107 = require("./966107.js"),
  Chunk287809 = require("./287809.js"),
  Chunk985018 = require("./985018.jsx");

function d(e) {
  let t = (0, r.bG)([s.default], () => s.default.getCurrentUser());
  return (null == t ? true : t.isStaff()) !== true ? null : (0, i.jsxs)(i.Fragment, {
    children: [!e.isMessageRequest && (0, i.jsx)(l.Drp, {
      id: "mark-as-message-request",
      label: o.intl.string(o.t.L6623r),
      action: () => (0, a.Sk)(e.id)
    }), (0, i.jsx)(l.Drp, {
      id: "clear-message-request",
      label: o.intl.string(o.t["85YWlY"]),
      action: () => (0, a.JH)(e.id)
    })]
  })
}