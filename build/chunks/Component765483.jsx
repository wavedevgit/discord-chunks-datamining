/** Chunk was on 78650 **/
/** chunk id: 765483, original params: e,t,n (module,exports,require) **/
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
  Chunk764295 = require("./764295.js"),
  Chunk474440 = require("./474440.js");

function f(e) {
  let t = e.isArchivedThread(),
    n = (0, s.P0)(e),
    {
      firstMessage: f
    } = (0, r.e7)([a.Z], () => a.Z.getMessage(e.id), [e.id]);
  return !n || t || null == f ? null : (0, i.jsx)(l.sNh, {
    id: "resolve-report",
    label: d.intl.string(u.default["8yIKen"]),
    action: () => o.Z.resolveFlag(e.id),
    className: c.menuItem
  })
}