/** Chunk was on 81985 **/
/** chunk id: 975984, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Lz: () => d,
  MQ: () => s,
  TR: () => p,
  Th: () => u,
  _N: () => c
}), require("./953529.js"), require("./388685.js");
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk486527 = require("./486527.js");

function s(e) {
  var t, n, r, l, a, s, c;
  return i()(e.type === o.C2.GUILD, "Directory entries must be connected to a guild!"), {
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
    features: new Set(null == (l = e.guild) ? true : l.features),
    approximateMemberCount: null == (a = e.guild) ? true : a.approximate_member_count,
    approximatePresenceCount: null == (s = e.guild) ? true : s.approximate_presence_count,
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

function p(e) {
  return u(e)
}