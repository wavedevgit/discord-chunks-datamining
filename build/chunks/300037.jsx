/** Chunk was on 75708 **/
/** chunk id: 300037, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk565138 = require("./565138.js"),
  Chunk623624 = require("./623624.js"),
  Chunk678558 = require("./678558.js"),
  Chunk317169 = require("./317169.js"),
  Chunk430824 = require("./430824.js"),
  Chunk267642 = require("./267642.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk939400 = require("./939400.js");
let x = function(e) {
  let {
    className: t,
    guildId: n,
    boostingVariant: r
  } = e, x = (0, a.e7)([p.Z], () => p.Z.getGuild(n), [n]), _ = (0, m.Z)(null == x ? true : x.id).total;
  return null == x ? <div className={s()(t, b.guildContainer)}><div className={b.guildInfoContainer}><o.Text variant={"text-lg/bold"}>{f.intl.string(f.t["6Kwwur"])}</o.Text></div></div> : <div className={s()(t, b.guildContainer)}>{<c.Z className={b.__invalid_guildIcon} guild={x} size={c.Z.Sizes.LARGER} />}{<div className={b.guildInfoContainer}>{<o.Text variant={"text-lg/bold"}>{x.name}</o.Text>}{<div className={b.guildBoostStatsContainer}>{<o.$Eu color={o.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK} className={b.guildBoostBadge} />}{<o.Text variant={"text-sm/bold"} color={"text-muted"}>{f.intl.format(f.t["pob/cH"], {
            subscriptions: _
          })}</o.Text>}{<div className={b.separator} />}{<o.Text variant={"text-sm/bold"} color={"text-muted"}>{(0, g.nW)(x.premiumTier, {
            useLevels: false
          })}</o.Text>}</div>}</div>}{r ? <u.Z guild={x} analyticsLocation={{
        page: h.ZY5.GUILD_BOOSTING_USER_SETTINGS,
        section: h.jXE.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
        object: h.qAy.BUTTON_CTA,
        objectType: h.Qqv.BUY
      }} pauseAnimation={true} size={l.zx.Sizes.MEDIUM} color={l.zx.Colors.PRIMARY} buttonText={f.intl.string(f.t.aBHecH)} /> : <o.zxk variant={"secondary"} text={f.intl.string(f.t.KLOhbG)} onClick={() => {
        (0, d.f)({
          guildId: x.id,
          location: {
            section: h.jXE.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA
          }
        })
      }} />}</div>
}