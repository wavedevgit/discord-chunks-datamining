/** Chunk was on 88934 **/
/** chunk id: 949507, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk565138 = require("./565138.jsx"),
  Chunk372769 = require("./372769.jsx"),
  Chunk134432 = require("./134432.js"),
  Chunk768581 = require("./768581.js"),
  Chunk411198 = require("./411198.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk754726 = require("./754726.js"),
  Chunk129512 = require("./129512.js"),
  Chunk330065 = require("./330065.js");

function x(e) {
  let {
    guild: t,
    className: n,
    onClick: a
  } = e, x = (0, s.ZP)(), v = (0, m.Jh)({
    name: t.name,
    icon: t.icon
  }), C = p.ZP.getGuildDiscoverySplashURL({
    id: t.id,
    splash: t.discovery_splash,
    size: 192 * (0, u.x_)()
  }), j = null != C ? C : function(e) {
    switch (e) {
      case h.BRd.DARK:
        return _;
      case h.BRd.LIGHT:
        return b
    }
  }(x), y = p.ZP.getGuildIconURL({
    id: t.id,
    icon: t.icon,
    size: 50
  });
  return <l.P3F className={i()(f.card, n)} onClick={a} aria-label={g.intl.string(g.t.RB4L29)}>{<div className={f.cardHeader}>{<img src={j} alt={""} className={f.splashImage} />}{<div className={f.guildIcon}><o.ZP mask={o.ZP.Masks.AVATAR_DEFAULT} width={58} height={58}><div className={f.iconMask}><c.Z className={f.__invalid_icon} iconSrc={y} guild={v} size={c.Z.Sizes.LARGE} /></div></o.ZP></div>}</div>}{<div className={f.cardDetails}>{<div className={f.guildNameWrapper}>{<d.Z className={f.guildBadge} guild={t} tooltipColor={l.ua7.Colors.PRIMARY} />}{<l.X6q variant={"heading-md/semibold"} className={f.guildName}>{t.name}</l.X6q>}</div>}{<l.Text className={f.guildDescription} variant={"text-sm/normal"} color={"header-secondary"} lineClamp={2}>{t.description}</l.Text>}{<div className={f.memberInfo}><div className={f.memberCountWrapper}>{<l.tBG color={"currentColor"} className={f.memberCountIcon} size={"xs"} />}{<l.Text variant={"text-xs/normal"} color={"header-secondary"}>{g.intl.format(g.t.zRl6XV, {
              count: t.approximate_member_count
            })}</l.Text>}</div></div>}</div>}</l.P3F>
}