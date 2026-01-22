/** Chunk was on 75149 **/
/** chunk id: 23724, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk914430 = require("./914430.js"),
  Chunk924985 = require("./924985.js"),
  Chunk985018 = require("./985018.jsx");

function s(e) {
  let t = (0, i.bG)([c.A], () => c.A.isCollapsed(e.id), [e.id]);
  return (0, r.jsx)(l.sLh, {
    id: "collapse-category",
    label: o.intl.string(o.t.SvVRsj),
    action: () => t ? (0, a.fh)(e.id) : (0, a.Gv)(e.id),
    checked: t
  })
}