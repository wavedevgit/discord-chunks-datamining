/** Chunk was on 43600 **/
/** chunk id: 968010, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk34457 = require("./34457.js"),
  Chunk317525 = require("./317525.js"),
  Chunk576705 = require("./576705.js"),
  Chunk287809 = require("./287809.js"),
  Chunk488926 = require("./488926.js"),
  Chunk652215 = require("./652215.js");

function c(e) {
  let {
    sortedRoles: t,
    currentUser: n,
    canManageRoles: c
  } = (0, i.cf)([a.A, o.default, r.A], () => ({
    sortedRoles: null != e ? a.A.getSortedRoles(e.id) : [],
    currentUser: o.default.getCurrentUser(),
    canManageRoles: null != e && r.A.can(d.xBc.MANAGE_ROLES, e)
  }), [e]);
  return l.useMemo(() => {
    if (null == e || null == n || !c) return [];
    let l = u.HJ(e, n.id);
    return t.filter(t => {
      var i;
      return !(0, s.Oy)(t) && !t.managed && (null == (i = t.tags) ? true : i.guild_connections) === true && !!u.wO(e, n.id, l, t)
    })
  }, [e, n, c, t])
}