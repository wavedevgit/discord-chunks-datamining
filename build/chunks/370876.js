/** Chunk was on 97492 **/
/** chunk id: 370876, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A3: () => d,
  DN: () => u,
  _t: () => f,
  mR: () => o,
  zP: () => c
}), require("./228524.js"), require("./896048.js");
var Chunk284009 = require("./284009.js"),
  l = require.n(Chunk284009),
  Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk946116 = require("./946116.js");

function o(e) {
  var t, n, r, i, a, o, c;
  return l()(e.type === s.fx.GUILD, "Directory entries must be connected to a guild!"), {
    channelId: e.directory_channel_id,
    guildId: e.entity_id,
    type: e.type,
    authorId: e.author_id,
    createdAt: e.created_at,
    description: e.description,
    primaryCategoryId: e.primary_category_id,
    name: null == (t = e.guild) ? true : t.name,
    icon: null == (n = e.guild) ? true : n.icon,
    splash: null == (r = e.guild) ? true : r.splash,
    features: new Set(null == (i = e.guild) ? true : i.features),
    approximateMemberCount: null == (a = e.guild) ? true : a.approximate_member_count,
    approximatePresenceCount: null == (o = e.guild) ? true : o.approximate_presence_count,
    featurableInDirectory: null == (c = e.guild) ? true : c.featurable_in_directory
  }
}
let c = 5;

function u(e) {
  return a().orderBy(e, [e => e.approximateMemberCount], ["desc"])
}

function d(e) {
  var t;
  return (t = e.filter(e => e.featurableInDirectory), a().orderBy(t, [e => e.createdAt], ["desc"])).slice(0, c)
}

function f(e) {
  return u(e)
}