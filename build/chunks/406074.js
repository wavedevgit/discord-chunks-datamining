/** Chunk was on 30025 **/
/** chunk id: 406074, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C: () => p
});
var Chunk442837 = require("./442837.js"),
  Chunk160404 = require("./160404.js"),
  Chunk345162 = require("./345162.js"),
  Chunk592125 = require("./592125.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk584825 = require("./584825.js"),
  Chunk790285 = require("./790285.js"),
  Chunk981631 = require("./981631.js");

function p(e) {
  let {
    guildId: t,
    channelId: n
  } = e, p = (0, c.qi)(t);
  return (0, r.Wu)([a.Z, o.Z, i.Z], () => {
    let e = a.Z.getChannel(n),
      r = o.Z.getGuild(t),
      c = i.Z.isViewingServerShop(t);
    return null != r && null != e ? p.filter(t => (function(e, t, n) {
      let {
        isPreviewingRoles: r = false
      } = arguments.length > 3 && true !== arguments[3] ? arguments[3] : {};
      if (!(r || e.published)) returnfalse;
      let i = n.permissionOverwrites[e.role_id];
      if ((0, d.TG)(n, i)) returntrue;
      let a = s.Z.getEveryoneRole(t),
        o = null != a && !(0, l.Fs)(a, u.Plq.VIEW_CHANNEL),
        c = (0, d.wB)(n, n.permissionOverwrites[t.id]),
        p = s.Z.getRole(t.id, e.role_id);
      return o && !c && null != p && (0, d.yt)(p) && !(0, d.wB)(n, i)
    })(t, r, e, {
      isPreviewingRoles: c
    })) : []
  }, [t, n, p])
}