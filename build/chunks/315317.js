/** Chunk was on 77223 **/
/** chunk id: 315317, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  XG: () => v,
  XV: () => m
}), require("./321073.js"), require("./896048.js"), require("./65821.js");
var Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk755584 = require("./755584.js"),
  Chunk602146 = require("./602146.js"),
  Chunk95701 = require("./95701.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk496092 = require("./496092.js"),
  Chunk988794 = require("./988794.js"),
  Chunk652215 = require("./652215.js");
async function x(e, n) {
  let t = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [],
    l = [];
  l.push(...t);
  let i = await s.A.createChannel({
    guildId: e.id,
    type: h.rbe.GUILD_STAGE_VOICE,
    name: n.substring(0, 100),
    permissionOverwrites: l
  });
  if (null == i || 201 !== i.status) throw Error("Can't create channel for event");
  return (0, a.UE)(i.body)
}
async function m(e, n) {
  let {
    entity_type: t
  } = e;
  if (t === d.Ps.STAGE_INSTANCE) {
    let t = await
    function(e, n) {
      let {
        guild_id: t,
        channel_id: l
      } = e, i = o.A.getGuild(t);
      if (null == i) return Promise.resolve(null);
      let s = c.A.getChannel(l);
      return null == s ? x(i, e.name, n) : Promise.resolve(s)
    }(e, n);
    i()(null != t, "could not find or create channel")
  }
}
async function v(e) {
  let n = arguments.length > 1 && true !== arguments[1] && arguments[1],
    {
      channel_id: t,
      entity_type: l,
      name: s,
      id: a,
      guild_id: c
    } = e;
  switch (l) {
    case d.Ps.STAGE_INSTANCE:
      i()(null != t, "channel_id is required"), await (0, r.yG)(t, s, d.dD.GUILD_ONLY, n, a);
      break;
    case d.Ps.VOICE:
      i()(null != t, "channel_id is required"), await u.A.startEvent(a, c);
      break;
    case d.Ps.EXTERNAL:
      await u.A.startEvent(a, c)
  }
}