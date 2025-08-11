/** Chunk was on 34779 **/
/** chunk id: 510273, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk955204 = require("./955204.js"),
  Chunk818765 = require("./818765.js"),
  Chunk674680 = require("./674680.js"),
  Chunk127058 = require("./127058.js");
let h = e => {
  let {
    color: t
  } = e;
  return <svg width={"48"} height={"28"} viewBox={"0 0 55 34"} fill={"none"} xmlns={"http://www.w3.org/2000/svg"}>{<rect x={"10.1968"} y={"7"} width={"14.4203"} height={"14.4203"} transform={"rotate(45 10.1968 7)"} className={d.__invalid_toastBG} />}{<rect x={"27.3936"} y={"0.59021"} width={"23.4851"} height={"23.4851"} transform={"rotate(45 27.3936 0.59021)"} className={d.__invalid_toastBG} />}{<rect x={"44.5903"} y={"7"} width={"14.4203"} height={"14.4203"} transform={"rotate(45 44.5903 7)"} className={d.__invalid_toastBG} />}{<rect x={"10.1968"} y={"13"} width={"6"} height={"6"} transform={"rotate(45 10.1968 13)"} fill={t} />}{<path d={"M27.3936 4.39355L34.1233 16.2873L27.3936 28.1811L20.6638 16.2873L27.3936 4.39355Z"} fill={t} />}{<rect x={"44.5903"} y={"13"} width={"6"} height={"6"} transform={"rotate(45 44.5903 13)"} fill={t} />}</svg>
};

function p(e) {
  let {
    achievement: t,
    unlocked: n
  } = e, {
    name: l,
    description: p,
    rarity: f,
    hideDescriptionUntilUnlock: g,
    onAction: m
  } = t, {
    color: b
  } = (0, a.F7)(f);
  i.useEffect(() => {
    let e = setTimeout(() => {
      c.Z.playAchievementUnlockSound()
    }, 50);
    return () => {
      clearTimeout(e)
    }
  }, []);
  let O = null != m && n,
    _ = O ? s.P3F : "div";
  return <_ className={o()(d.container, O && d.actionable)} onClick={() => {
      O && m()
    }}>{<div className={d.iconContainer}><u.Z achievementId={t.id} size={u.Z.Sizes.SIZE_40} unlocked={n} /></div>}{<div className={d.__invalid_nameContainer}>{<s.Text variant={"text-md/semibold"} color={"header-primary"}>{l()}</s.Text>}{<s.Text variant={"text-xs/medium"} color={"header-secondary"}>{g && !n ? "?????" : p()}</s.Text>}</div>}{<div className={d.flair}><h color={b} /></div>}</_>
}