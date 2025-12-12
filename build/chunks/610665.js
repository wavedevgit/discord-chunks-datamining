/** Chunk was on 84722 **/
/** chunk id: 610665, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  GV: () => m,
  iQ: () => x
}), require("./539854.js"), require("./388685.js"), require("./415506.js");
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk333848 = require("./333848.js"),
  Chunk706058 = require("./706058.js"),
  Chunk131704 = require("./131704.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk482241 = require("./482241.js"),
  Chunk765305 = require("./765305.js"),
  Chunk981631 = require("./981631.js");
async function v(e, n) {
  let t = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [],
    l = [];
  l.push(...t);
  let i = await a.Z.createChannel({
    guildId: e.id,
    type: h.d4z.GUILD_STAGE_VOICE,
    name: n.substring(0, 100),
    permissionOverwrites: l
  });
  if (null == i || 201 !== i.status) throw Error("Can't create channel for event");
  return (0, s.q_)(i.body)
}
async function m(e, n) {
  let {
    entity_type: t
  } = e;
  if (t === d.WX.STAGE_INSTANCE) {
    let t = await
    function(e, n) {
      let {
        guild_id: t,
        channel_id: l
      } = e, i = o.Z.getGuild(t);
      if (null == i) return Promise.resolve(null);
      let a = c.Z.getChannel(l);
      return null == a ? v(i, e.name, n) : Promise.resolve(a)
    }(e, n);
    i()(null != t, "could not find or create channel")
  }
}
async function x(e) {
  let n = arguments.length > 1 && true !== arguments[1] && arguments[1],
    {
      channel_id: t,
      entity_type: l,
      name: a,
      id: s,
      guild_id: c
    } = e;
  switch (l) {
    case d.WX.STAGE_INSTANCE:
      i()(null != t, "channel_id is required"), await (0, r.me)(t, a, d.j8.GUILD_ONLY, n, s);
      break;
    case d.WX.VOICE:
      i()(null != t, "channel_id is required"), await u.Z.startEvent(s, c);
      break;
    case d.WX.EXTERNAL:
      await u.Z.startEvent(s, c)
  }
}