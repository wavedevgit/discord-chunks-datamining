/** Chunk was on 73545 **/
/** chunk id: 990028, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  A: () => u
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

function u(e) {
  let n = e.isArchivedThread(),
    t = (0, c.uW)(e),
    {
      firstMessage: u
    } = (0, i.bG)([a.A], () => a.A.getMessage(e.id), [e.id]);
  return !t || n || null == u ? null : (0, r.jsx)(l.Drp, {
    id: "resolve-report",
    label: d.intl.string(s.default["8yIKem"]),
    action: () => o.A.resolveFlag(e.id)
  })
}