/** Chunk was on 43233 **/
/** chunk id: 765483, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk660189 = require("./660189.js"),
  Chunk501517 = require("./501517.js"),
  Chunk982168 = require("./982168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk797013 = require("./797013.js"),
  Chunk474440 = require("./474440.js");

function f(e) {
  let n = e.isArchivedThread(),
    t = (0, c.P0)(e),
    {
      firstMessage: f
    } = (0, i.e7)([o.Z], () => o.Z.getMessage(e.id), [e.id]);
  return !t || n || null == f ? null : (0, r.jsx)(l.sNh, {
    id: "resolve-report",
    label: u.intl.string(s.default["8yIKem"]),
    action: () => a.Z.resolveFlag(e.id),
    className: d.menuItem
  })
}