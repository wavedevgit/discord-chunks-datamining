/** Chunk was on 22988 **/
/** chunk id: 208150, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk623624 = require("./623624.js"),
  Chunk372444 = require("./372444.js"),
  Chunk852679 = require("./852679.js"),
  Chunk317169 = require("./317169.js"),
  Chunk926491 = require("./926491.js"),
  Chunk145499 = require("./145499.jsx"),
  Chunk424218 = require("./424218.js"),
  Chunk267642 = require("./267642.js"),
  Chunk63063 = require("./63063.js"),
  Chunk999382 = require("./999382.js"),
  Chunk981631 = require("./981631.js"),
  Chunk611480 = require("./611480.js"),
  Chunk388032 = require("./388032.js"),
  Chunk776739 = require("./776739.js");
let y = {
    page: Chunk981631.ZY5.GUILD_SETTINGS,
    section: Chunk981631.jXE.GUILD_SETTINGS_STICKERS,
    object: Chunk981631.qAy.BOOSTING_BANNER
  },
  C = e => {
    let {
      guild: t
    } = e, {
      analyticsLocations: n
    } = (0, o.ZP)(), i = (0, m.Z)(t.id).available, s = j.oCV[j.Eu4.TIER_1] - i;
    return <div className={O.upsellContainer}>{<a.X6q className={O.upsellHeader} variant={"heading-xl/semibold"}>{_.intl.string(_.t.hzCkys)}</a.X6q>}{<a.Text className={O.upsellDescription} variant={"text-md/normal"}>{_.intl.string(_.t.jcesAA)}</a.Text>}{<div className={O.upsellButtons}>{<l.zx className={O.upsellButtonPrimary} innerClassName={O.upsellButton} color={l.zx.Colors.WHITE} onClick={() => (0, u.Z)({
            analyticsLocations: n,
            analyticsLocation: y,
            guildId: t.id,
            totalNumberOfSlotsToAssign: s
          })}>{_.intl.string(_.t.Q5dbTk)}</l.zx>}{<l.zx innerClassName={O.upsellButton} color={l.zx.Colors.WHITE} onClick={() => (0, c.f)({
            guildId: t.id,
            location: {
              section: j.jXE.GUILD_SETTINGS_STICKERS
            }
          })}>{_.intl.string(_.t.hvVgAQ)}</l.zx>}</div>}</div>
  },
  N = () => <Chunk481060.hjN title={Chunk388032.intl.string(Chunk388032.t["9N2OWF"])}>{<Chunk481060.R94 type={Chunk481060.geA.DESCRIPTION}>{Chunk388032.intl.format(Chunk388032.t.hxLvi4, {
        fileSize: (0, Chunk424218.IC)(Chunk611480.Ht, {
          useKibibytes: true
        })
      })}</Chunk481060.R94>}{<Chunk481060.R94 type={Chunk481060.geA.DESCRIPTION}>{Chunk388032.intl.format(Chunk388032.t.UBj0aW, {
        articleUrl: Chunk63063.Z.getArticleURL(Chunk981631.BhN.STICKERS_UPLOAD)
      })}</Chunk481060.R94>}</Chunk481060.hjN>,
  I = e => {
    let t, n, i, {
        guild: l,
        guildStickers: a
      } = e,
      s = l.premiumTier,
      o = (0, f.Qi)(a, s),
      c = (0, f.FZ)(s),
      u = (0, f.A3)(s),
      m = a.length;
    return null == c || s === j.Eu4.TIER_3 || o > 0 ? null : (m > u ? (t = _.intl.formatToPlainString(_.t.ZtAY1d, {
      level: c
    }), n = _.intl.formatToPlainString(_.t["13hOWl"], {
      level: c
    }), i = j.qAy.BOOST_UPSELL_BANNER_LOST_LEVEL) : (t = _.intl.string(_.t.zT9Sxc), n = _.intl.formatToPlainString(_.t.YaW9wM, {
      level: c,
      numAdditional: (0, f.ig)(c)
    }), i = j.qAy.BOOST_UPSELL_BANNER_SLOTS_FULL), <d.Z header={t} text={n} guild={l} analyticsLocation={{
        page: j.ZY5.GUILD_SETTINGS,
        section: j.jXE.GUILD_SETTINGS_STICKERS,
        object: i,
        objectType: (0, f.ge)(c)
      }} />)
  },
  E = () => {
    let e = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuild()),
      t = (0, Chunk442837.e7)([Chunk926491.Z], () => {
        var t;
        return null != module && null != (t = Chunk926491.Z.getStickersByGuildId(module.id)) ? exports : []
      }, [module]),
      {
        analyticsLocations: n
      } = (0, Chunk906732.ZP)(Chunk100527.Z.STICKERS);
    if (null == module) return null;
    let l = module.premiumTier !== Chunk981631.Eu4.NONE || exports.length > 0;
    return <Chunk906732.Gt value={require}><Chunk481060.hjN title={Chunk388032.intl.string(Chunk388032.t.R5nQkZ)} tag={Chunk481060.RB0.H1}>{Chunk755721 ? <div>{<I guild={module} guildStickers={exports} />}{<N />}</div> : <C guild={module} />}{<Chunk481060.$i$ className={Chunk776739.divider} />}{<Chunk145499.Z guild={module} />}</Chunk481060.hjN></Chunk906732.Gt>
  }