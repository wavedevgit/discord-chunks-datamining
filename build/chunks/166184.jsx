/** Chunk was on 54408 **/
/** chunk id: 166184, original params: e,i,t (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./953529.js"), require("./388685.js"), require("./35282.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk686546 = require("./686546.js"),
  Chunk372769 = require("./372769.js"),
  Chunk134432 = require("./134432.js"),
  Chunk768581 = require("./768581.js"),
  Chunk624138 = require("./624138.js"),
  Chunk388032 = require("./388032.js"),
  Chunk192639 = require("./192639.js"),
  Chunk129512 = require("./129512.js"),
  Chunk330065 = require("./330065.js");
let h = [16, 16, 14, 14, 12, 10, 8],
  v = function(e) {
    var i, t;
    let {
      guild: r,
      disabled: v,
      small: T,
      loading: p = false,
      description: A,
      memberCount: N,
      presenceCount: C,
      className: D
    } = e, y = (0, o.ZP)(), [O, P] = l.useState(false);
    if (null == r || p) return <div className={s()(D, S.card, S.cardPlaceholder, {
        [S.cardSmall]: T,
        [S.cardDisabled]: v
      })} />;
    let {
      name: R
    } = r, L = null != r.discoverySplash && /^data:/.test(r.discoverySplash) ? r.discoverySplash : f.ZP.getGuildDiscoverySplashURL({
      id: r.id,
      splash: r.discoverySplash,
      size: 240 * (0, E.x_)()
    }), b = (0, a.wj)(y) ? g : m, j = null != (i = f.ZP.getGuildIconURL({
      id: r.id,
      icon: r.icon,
      size: 40
    })) ? i : true, V = null != r.description ? r.description : A, G = null != N ? N : null == r ? true : r.memberCount, x = null != C ? C : null == r ? true : r.presenceCount, M = null;
    if (null != j) M = <img src={j} alt={""} className={S.avatar} />;
    else {
      let e = (0, I.Zg)(r.name);
      M = <div className={S.defaultIcon}><u.Text className={S.acronym} style={{
            fontSize: null != (t = h[e.length]) ? t : h[h.length - 1]
          }} variant={"text-sm/normal"}>{e}</u.Text></div>
    }
    return <div className={s()(D, S.card, {
        [S.cardSmall]: T,
        [S.cardDisabled]: v,
        [S.splashLoaded]: O
      })}>{<div className={S.cardHeader}>{<div className={S.splash}><img src={null != L ? L : b} alt={""} className={S.splashImage} onLoad={() => P(true)} /></div>}{<div className={S.guildIcon}><c.ZP mask={c.ZP.Masks.SQUIRCLE} width={48} height={48}><div className={S.iconMask}><c.ZP mask={c.ZP.Masks.SQUIRCLE} width={40} height={40}>{null != M ? M : null}</c.ZP></div></c.ZP></div>}</div>}{<div className={S.guildInfo}>{<div className={S.title}>{<d.Z className={S.verifiedIcon} guild={r} tooltipColor={u.ua7.Colors.PRIMARY} />}{<u.Text className={S.guildName} variant={"text-md/normal"}><span>{R}</span></u.Text>}</div>}{<div className={S.descriptionContainer}><u.Text lineClamp={3} className={S.description} variant={"text-sm/normal"} tag={"span"}>{V}</u.Text></div>}{<div className={S.memberInfo}>{null != x && <div className={S.memberCount}>{<div className={S.dotOnline} />}{<u.Text variant={"text-xs/normal"}>{T ? _.intl.formatToPlainString(_.t.YMor7u, {
                count: x
              }) : _.intl.formatToPlainString(_.t["LC+S+v"], {
                membersOnline: x
              })}</u.Text>}</div>}{null != G && <div className={S.memberCount}>{<div className={S.dotOffline} />}{<u.Text variant={"text-xs/normal"}>{T ? _.intl.formatToPlainString(_.t.YMor7u, {
                count: G
              }) : _.intl.formatToPlainString(_.t.zRl6XV, {
                count: G
              })}</u.Text>}</div>}</div>}</div>}</div>
  }