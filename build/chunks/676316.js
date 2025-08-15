/** Chunk was on 86357 **/
/** chunk id: 676316, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk661869 = require("./661869.js"),
  Chunk876215 = require("./876215.js"),
  Chunk442837 = require("./442837.js"),
  Chunk592125 = require("./592125.js"),
  Chunk994752 = require("./994752.js"),
  Chunk463031 = require("./463031.js");
let u = "1221458499993600000",
  d = {
    content_type: Chunk876215.s.LEADERBOARD,
    extra: {
      type: "leaderboard_extra",
      leaderboard_id: Chunk463031.z
    },
    id: u,
    author_id: u,
    author_type: Chunk661869.i.USER,
    participants: [],
    traits: []
  };

function p(e) {
  let {
    entries: t,
    channelId: n
  } = e, i = (0, a.e7)([o.Z], () => o.Z.getChannel(n)), l = null == i ? true : i.guild_id, c = (0, a.e7)([s.Z], () => null != l && null != s.Z.getLeaderboards(l), [l]);
  return {
    entriesWithLeaderboard: r.useMemo(() => c ? [d, ...null != t ? t : []] : t, [c, t]),
    hasLeaderboardEntry: c
  }
}