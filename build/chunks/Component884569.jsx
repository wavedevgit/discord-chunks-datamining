/** Chunk was on 39778 **/
/** chunk id: 884569, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk367130 = require("./367130.js"),
  Chunk486227 = require("./486227.js"),
  Chunk287809 = require("./287809.js"),
  Chunk985018 = require("./985018.jsx");

function u(e) {
  let t = (0, i.bG)([s.default], () => s.default.getCurrentUser()),
    n = (0, o.E)(e.id);
  return (null == t ? true : t.isStaff()) === true && e.isDM() && null == n ? (0, r.jsx)(l.Drp, {
    id: "mark-as-likely-ato",
    label: d.intl.string(d.t.AWKKgc),
    action: () => (0, a.a)(e.id)
  }) : null
}