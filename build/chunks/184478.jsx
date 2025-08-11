/** Chunk was on 44799 **/
/** chunk id: 184478, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk678558 = require("./678558.js"),
  Chunk343649 = require("./343649.js"),
  Chunk430824 = require("./430824.js"),
  Chunk63063 = require("./63063.js"),
  Chunk317169 = require("./317169.js"),
  Chunk639660 = require("./639660.js"),
  Chunk767218 = require("./767218.js"),
  Chunk981631 = require("./981631.js"),
  Chunk93841 = require("./93841.js"),
  Chunk388032 = require("./388032.js"),
  Chunk466649 = require("./466649.js");

function b(e) {
  let {
    guildId: t
  } = e, n = (0, i.e7)([u.Z], () => u.Z.getGuild(t)), {
    available: b,
    spent: j,
    total: h
  } = (0, p.Z)(t);
  if (null != n) return <div className={v.container}>{<div className={v.headerContainer}>{<o.xv variant={"eyebrow"} color={"text-secondary"}>{_.intl.string(x.default.hjvcLC)}</o.xv>}{<o.xv className={v.learnMore} variant={"text-xs/semibold"}>{_.intl.format(x.default.fXE30d, {
          helpDeskArticle: d.Z.getArticleURL(g.BhN.GUILD_BOOSTING_FAQ)
        })}</o.xv>}</div>}{<div className={v.contentContainer}>{<m.Z count={b} type={m.b.AVAILABLE} />}{<m.Z count={j} type={m.b.SPENT} />}{<m.Z count={h} type={m.b.TOTAL} />}</div>}{<a.Z className={v.boostButton} guild={n} analyticsLocation={{
        page: g.ZY5.GUILD_POWERUPS_OVERVIEW,
        section: g.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR
      }} color={l.Tt.CUSTOM} size={l.Ph.LARGE} intent={c.P.NONE} icon={(0, r.jsx)(s.$Eu, {
        className: v.boostButtonIcon,
        size: "sm",
        color: s.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
      })} />}{<f.Z guildId={t} />}</div>
}