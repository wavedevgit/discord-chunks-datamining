/** Chunk was on 51111 **/
/** chunk id: 374426, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => b
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk997509 = require("./997509.js"),
  Chunk931991 = require("./931991.js"),
  Chunk71393 = require("./71393.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function b(e, t) {
  let r = (0, o.bG)([a.A], () => null != e ? a.A.getGuild(e) : null),
    {
      canCreateExpressions: b,
      canManageAllExpressions: p
    } = (0, c.nr)(r);
  return null != e && b && p ? (0, n.jsx)(i.Drp, {
    id: s.intl.string(s.t["154/bL"]),
    label: s.intl.string(s.t["154/bL"]),
    action: () => {
      l.A.open(e, u.BEX.SOUNDBOARD), null == t || t()
    }
  }) : null
}