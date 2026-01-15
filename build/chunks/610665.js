/** Chunk was on 84722 **/
/** chunk id: 610665, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  GV: () => v,
  iQ: () => m
}), require("./539854.js"), require("./388685.js"), require("./415506.js");
var Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk333848 = require("./333848.js"),
  Chunk706058 = require("./706058.js"),
  Chunk131704 = require("./131704.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk482241 = require("./482241.js"),
  Chunk765305 = require("./765305.js"),
  Chunk981631 = require("./981631.js");
async function x(e, n) {
  let t = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [],
    i = [];
  i.push(...t);
  let l = await a.Z.createChannel({
    guildId: e.id,
    type: h.d4z.GUILD_STAGE_VOICE,
    name: n.substring(0, 100),
    permissionOverwrites: i
  });
  if (null == l || 201 !== l.status) throw Error("Can't create channel for event");
  return (0, s.q_)(l.body)
}
async function v(e, n) {
  let {
    entity_type: t
  } = e;
  if (t === d.WX.STAGE_INSTANCE) {
    let t = await
    function(e, n) {
      let {
        guild_id: t,
        channel_id: i
      } = e, l = o.Z.getGuild(t);
      if (null == l) return Promise.resolve(null);
      let a = c.Z.getChannel(i);
      return null == a ? x(l, e.name, n) : Promise.resolve(a)
    }(e, n);
    l()(null != t, "could not find or create channel")
  }
}
async function m(e) {
  let n = arguments.length > 1 && true !== arguments[1] && arguments[1],
    {
      channel_id: t,
      entity_type: i,
      name: a,
      id: s,
      guild_id: c
    } = e;
  switch (i) {
    case d.WX.STAGE_INSTANCE:
      l()(null != t, "channel_id is required"), await (0, r.me)(t, a, d.j8.GUILD_ONLY, n, s);
      break;
    case d.WX.VOICE:
      l()(null != t, "channel_id is required"), await u.Z.startEvent(s, c);
      break;
    case d.WX.EXTERNAL:
      await u.Z.startEvent(s, c)
  }
}