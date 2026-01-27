/** Chunk was on 86901 **/
/** chunk id: 990028, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk969043 = require("./969043.js"),
  Chunk226698 = require("./226698.js"),
  Chunk376708 = require("./376708.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk641131 = require("./641131.js");

function d(e) {
  let t = e.isArchivedThread(),
    n = (0, c.uW)(e),
    {
      firstMessage: d
    } = (0, i.bG)([a.A], () => a.A.getMessage(e.id), [e.id]);
  return !n || t || null == d ? null : (0, r.jsx)(l.Drp, {
    id: "resolve-report",
    label: s.intl.string(u.default["8yIKem"]),
    action: () => o.A.resolveFlag(e.id)
  })
}