/** Chunk was on 1113 **/
/** chunk id: 251766, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  e: () => h
});
var Chunk311907 = require("./311907.js"),
  Chunk164956 = require("./164956.js"),
  Chunk34457 = require("./34457.js"),
  Chunk734057 = require("./734057.js"),
  Chunk317525 = require("./317525.js"),
  Chunk71393 = require("./71393.js"),
  Chunk599941 = require("./599941.js"),
  Chunk855918 = require("./855918.js"),
  Chunk652215 = require("./652215.js");

function h(e) {
  let {
    guildId: t,
    channelId: n
  } = e, h = (0, c.uP)(t);
  return (0, r.yK)([s.A, o.A, l.A], () => {
    let e = s.A.getChannel(n),
      r = o.A.getGuild(t),
      c = l.A.isViewingServerShop(t);
    return null != r && null != e ? h.filter(t => (function(e, t, n) {
      let {
        isPreviewingRoles: r = false
      } = arguments.length > 3 && true !== arguments[3] ? arguments[3] : {};
      if (!(r || e.published)) returnfalse;
      let l = n.permissionOverwrites[e.role_id];
      if ((0, u.Uj)(n, l)) returntrue;
      let s = a.A.getEveryoneRole(t),
        o = null != s && !(0, i._m)(s, d.xBc.VIEW_CHANNEL),
        c = (0, u.AN)(n, n.permissionOverwrites[t.id]),
        h = a.A.getRole(t.id, e.role_id);
      return o && !c && null != h && (0, u.iR)(h) && !(0, u.AN)(n, l)
    })(t, r, e, {
      isPreviewingRoles: c
    })) : []
  }, [t, n, h])
}