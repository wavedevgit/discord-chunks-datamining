/** Chunk was on 39778 **/
/** chunk id: 87746, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Q: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk544231 = require("./544231.js"),
  Chunk74114 = require("./74114.js"),
  Chunk287809 = require("./287809.js"),
  Chunk985018 = require("./985018.jsx");

function u(e) {
  let t = (0, i.bG)([s.default], () => s.default.getCurrentUser()),
    n = (0, o.l)(e.id);
  return (null == t ? true : t.isStaff()) === true && e.isDM() && null == n ? (0, r.jsx)(l.Drp, {
    id: "mark-as-stranger-danger",
    label: d.intl.string(d.t.CgWmmT),
    action: () => (0, a.Ju)(e.id)
  }) : null
}