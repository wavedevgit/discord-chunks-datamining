/** Chunk was on web.js **/
/** chunk id: 355045, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk622535 = require("./622535.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.js"),
  Chunk975298 = require("./975298.js"),
  Chunk565138 = require("./565138.js"),
  Chunk963249 = require("./963249.js"),
  Chunk317169 = require("./317169.js"),
  Chunk594174 = require("./594174.js"),
  Chunk314884 = require("./314884.js"),
  Chunk74538 = require("./74538.js"),
  Chunk678558 = require("./678558.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.js"),
  Chunk491503 = require("./491503.js");
let T = function(e) {
  let {
    closeLayer: t,
    guild: n,
    onCtaVisibilityChange: o
  } = e, T = i.useRef(null), S = (0, s.e7)([m.default], () => m.default.getCurrentUser()), A = (0, s.e7)([g.Z], () => g.Z.boostSlots), {
    analyticsLocations: N
  } = (0, d.ZP)(), {
    fractionalState: C
  } = (0, f.Z)({
    forceFetch: false
  }), R = i.useMemo(() => Object.keys(A).filter(e => {
    let t = A[e];
    return null != t.premiumGuildSubscription && t.premiumGuildSubscription.guildId === n.id
  }).length, [A, n.id]), P = (0, h.Z)(e.guild.id).total;

  function w() {
    (0, p.Z)({
      initialPlanId: null,
      subscriptionTier: O.Si.TIER_2,
      analyticsLocations: N,
      analyticsObject: {
        page: y.ZY5.PREMIUM_GUILD_USER_MODAL,
        section: y.jXE.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
        object: y.qAy.BUTTON_ICON,
        objectType: y.Qqv.BUY
      },
      onClose: e => e && t()
    })
  }

  function D() {
    (0, p.Z)({
      initialPlanId: null,
      subscriptionTier: O.Si.TIER_2,
      isGift: true,
      analyticsLocations: N,
      analyticsObject: {
        page: y.ZY5.PREMIUM_GUILD_USER_MODAL,
        section: y.jXE.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
        object: y.qAy.BUTTON_ICON,
        objectType: y.Qqv.GIFT
      },
      onClose: e => e && t()
    })
  }
  return <div className={I.guildStatus}>{<_.Z className={I.guildIcon} guild={n} size={_.Z.Sizes.LARGER} />}{<u.X6q className={I.guildName} color={"always-white"} variant={"text-lg/bold"}>{n.name}</u.X6q>}{<div className={I.guildBoostCountWrapper}>{<div className={I.guildBoostCount}>{<u.$Eu color={P > 0 ? u.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK : "currentColor"} className={a()(I.guildBoostBadge, {
            [I.guildBoostBadgeWithBoosts]: P > 0
          })} />}{<u.Text className={I.guildStatusCopy} variant={"text-md/bold"}>{v.intl.format(v.t["pob/cH"], {
            subscriptions: P
          })}</u.Text>}</div>}{R > 0 ? <u.Text className={I.guildBoostCountCurrentUser} variant={"text-sm/normal"}>{v.intl.format(v.t.Jeto2t, {
          numSubscriptions: R
        })}</u.Text> : null}</div>}{<div className={I.guildBoostCtas}>{<l.$ innerRef={T} onChange={o} threshold={.9}><div ref={T} className={a()(I.guildBoostCta, I.guildBoostCtaBoostWrapper)}><b.Z className={I.guildBoostCtaBoost} innerClassName={a()(I.__invalid_guildBoostCtaContent, I.guildBoostCtaBoostContent)} buttonShineClassName={I.guildBoostCtaBoostShine} guild={n} analyticsLocation={{
              page: y.ZY5.PREMIUM_GUILD_USER_MODAL,
              section: y.jXE.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
              object: y.qAy.BUTTON_CTA,
              objectType: y.Qqv.BUY
            }} closeLayer={t} color={c.zx.Colors.WHITE} size={c.zx.Sizes.LARGE} fullWidth={true} /></div></l.$>}{E.ZP.hasFreeBoosts(S, C) || E.ZP.isPremium(S, O.p9.TIER_2) ? <c.zx className={a()(I.guildBoostCta, I.guildBoostCtaSecondary)} innerClassName={a()(I.__invalid_guildBoostCtaContent, I.guildBoostCtaGiftContent)} look={c.zx.Looks.OUTLINED} color={c.zx.Colors.WHITE} onClick={D} size={c.zx.Sizes.LARGE}>{<u.OgN size={"md"} color={"currentColor"} className={I.guildBoostCtaGiftIcon} />}{v.intl.string(v.t["8MYSQ0"])}</c.zx> : <c.zx className={a()(I.guildBoostCta, I.guildBoostCtaSecondary)} innerClassName={a()(I.__invalid_guildBoostCtaContent, I.__invalid_guildBoostCtaSubscribeContent)} look={c.zx.Looks.OUTLINED} color={c.zx.Colors.WHITE} onClick={w} size={c.zx.Sizes.LARGE}>{v.intl.string(v.t.Q43TvL)}</c.zx>}</div>}</div>
}