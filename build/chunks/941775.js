/** Chunk was on 7654 **/
/** chunk id: 941775, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk345162 = require("./345162.js"),
  Chunk485386 = require("./485386.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk700785 = require("./700785.js"),
  Chunk981631 = require("./981631.js");

function c(e) {
  let {
    sortedRoles: t,
    currentUser: n,
    canManageRoles: c
  } = (0, i.cj)([r.Z, o.default, a.Z], () => ({
    sortedRoles: null != e ? r.Z.getSortedRoles(e.id) : [],
    currentUser: o.default.getCurrentUser(),
    canManageRoles: null != e && a.Z.can(d.Plq.MANAGE_ROLES, e)
  }), [e]);
  return l.useMemo(() => {
    if (null == e || null == n || !c) return [];
    let l = u.e9(e, n.id);
    return t.filter(t => {
      var i;
      return !(0, s.fI)(t) && !t.managed && (null == (i = t.tags) ? true : i.guild_connections) === true && !!u.r6(e, n.id, l, t)
    })
  }, [e, n, c, t])
}