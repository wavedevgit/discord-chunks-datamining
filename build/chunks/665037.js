/** Chunk was on 21738 **/
/** chunk id: 665037, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A,
  G: () => f
});
var r, Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk285059 = require("./285059.js"),
  Chunk82005 = require("./82005.js"),
  Chunk508654 = require("./508654.js"),
  Chunk221094 = require("./221094.js"),
  Chunk320426 = require("./320426.js"),
  Chunk915043 = require("./915043.js"),
  Chunk788866 = require("./788866.js"),
  Chunk992250 = require("./992250.js"),
  Chunk15438 = require("./15438.js"),
  Chunk652215 = require("./652215.js"),
  f = ((r = {})[r.ENABLE_PUBLIC_GUILD = 0] = "ENABLE_PUBLIC_GUILD", r[r.MAX_MEMBER_COUNT = 1] = "MAX_MEMBER_COUNT", r[r.GUILD_LIVE_CHANNEL = 2] = "GUILD_LIVE_CHANNEL", r[r.GUILD_MFA_WARNING = 3] = "GUILD_MFA_WARNING", r[r.COMMANDS_MIGRATION = 4] = "COMMANDS_MIGRATION", r[r.APPLICATION_SUBSCRIPTION_EXPIRATION = 5] = "APPLICATION_SUBSCRIPTION_EXPIRATION", r[r.HUB_STUDY_ROOM = 6] = "HUB_STUDY_ROOM", r[r.CLAN_UPSELL = 7] = "CLAN_UPSELL", r);

function A(e) {
  var t;
  let n = null != (t = null == e ? true : e.id) ? t : m.dJq,
    r = (0, l.bG)([p.A], () => p.A.isVisible(e)),
    f = (0, l.bG)([g.A], () => g.A.isVisible(e)),
    A = (0, s.C)(n),
    _ = (0, l.bG)([h.A], () => h.A.isVisible(e)),
    b = u.A.useShouldShowChannelNotice(n),
    E = (0, d.$s)(e),
    {
      enableStudyGroup: O
    } = (0, c.y)(e),
    y = E.length > 0,
    I = O && !(null == e ? true : e.features.has(m.GuildFeatures.HUB)),
    v = (0, o.WG)(n);
  if (i.useEffect(() => {
      a.A.getGuildEventsForCurrentUser(n)
    }, [n]), r) return 0;
  if (f) return 1;
  if (A || null != v) return 2;
  if (_) return 3;
  if (b) return 4;
  else if (y) return 5;
  else if (I) return 6;
  return null
}