/** Chunk was on 98414 **/
/** chunk id: 765483, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk660189 = require("./660189.js"),
  Chunk501517 = require("./501517.js"),
  Chunk982168 = require("./982168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk792389 = require("./792389.js"),
  Chunk278744 = require("./278744.js");

function f(e) {
  let n = e.isArchivedThread(),
    t = (0, u.P0)(e),
    {
      firstMessage: f
    } = (0, i.e7)([o.Z], () => o.Z.getMessage(e.id), [e.id]);
  return !t || n || null == f ? null : (0, r.jsx)(l.sNh, {
    id: "resolve-report",
    label: c.intl.string(d.default["8yIKem"]),
    action: () => a.Z.resolveFlag(e.id),
    className: s.menuItem
  })
}