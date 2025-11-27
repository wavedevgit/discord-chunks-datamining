/** Chunk was on 1272 **/
/** chunk id: 536687, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  R: () => m,
  Z: () => _
});
var r, Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk897285 = require("./897285.js"),
  Chunk300213 = require("./300213.js"),
  Chunk554747 = require("./554747.js"),
  Chunk499137 = require("./499137.js"),
  Chunk929507 = require("./929507.js"),
  Chunk270144 = require("./270144.js"),
  Chunk400271 = require("./400271.js"),
  Chunk192513 = require("./192513.js"),
  Chunk255791 = require("./255791.js"),
  Chunk981631 = require("./981631.js"),
  m = ((r = {})[r.ENABLE_PUBLIC_GUILD = 0] = "ENABLE_PUBLIC_GUILD", r[r.MAX_MEMBER_COUNT = 1] = "MAX_MEMBER_COUNT", r[r.GUILD_LIVE_CHANNEL = 2] = "GUILD_LIVE_CHANNEL", r[r.GUILD_MFA_WARNING = 3] = "GUILD_MFA_WARNING", r[r.COMMANDS_MIGRATION = 4] = "COMMANDS_MIGRATION", r[r.APPLICATION_SUBSCRIPTION_EXPIRATION = 5] = "APPLICATION_SUBSCRIPTION_EXPIRATION", r[r.HUB_STUDY_ROOM = 6] = "HUB_STUDY_ROOM", r[r.CLAN_UPSELL = 7] = "CLAN_UPSELL", r);

function _(e) {
  var t;
  let n = null != (t = null == e ? true : e.id) ? t : g.lds,
    r = (0, l.e7)([p.Z], () => p.Z.isVisible(e)),
    m = (0, l.e7)([h.Z], () => h.Z.isVisible(e)),
    _ = (0, s.m)(n),
    b = (0, l.e7)([f.Z], () => f.Z.isVisible(e)),
    E = u.Z.useShouldShowChannelNotice(n),
    O = (0, d.h6)(e),
    {
      enableStudyGroup: v
    } = (0, c.s)(e),
    y = O.length > 0,
    I = v && !(null == e ? true : e.features.has(g.GuildFeatures.HUB)),
    C = (0, o.Vm)(n);
  if (i.useEffect(() => {
      a.Z.getGuildEventsForCurrentUser(n)
    }, [n]), r) return 0;
  if (m) return 1;
  if (_ || null != C) return 2;
  if (b) return 3;
  if (E) return 4;
  else if (y) return 5;
  else if (I) return 6;
  return null
}