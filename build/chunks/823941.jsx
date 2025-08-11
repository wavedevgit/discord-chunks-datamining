/** Chunk was on 78223 **/
/** chunk id: 823941, original params: e,n,r (module,exports,require) **/
require.d(exports, {
  Z: () => L,
  n: () => A
}), require("./35282.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk180650 = require("./180650.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk906732 = require("./906732.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk963249 = require("./963249.js"),
  Chunk594174 = require("./594174.js"),
  Chunk451478 = require("./451478.js"),
  Chunk754347 = require("./754347.jsx"),
  Chunk74538 = require("./74538.js"),
  Chunk884697 = require("./884697.js"),
  Chunk624377 = require("./624377.js"),
  Chunk141011 = require("./141011.jsx"),
  Chunk813083 = require("./813083.jsx"),
  Chunk372654 = require("./372654.js"),
  Chunk794324 = require("./794324.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk544348 = require("./544348.js");
let A = (0, Chunk884697.IC)(90),
  E = e => {
    let {
      category: n
    } = e, {
      analyticsLocations: r
    } = (0, d.ZP)(), o = t.useRef(null), a = (0, i.e7)([m.default], () => m.default.getCurrentUser());
    return p.ZP.canUseCollectibles(a) ? n.summary : T.intl.format(T.t["9hafRk"], {
      getPremium: e => <s.P3F innerRef={o} className={k.getPremiumHook} onClick={() => {
          (0, b.Z)({
            subscriptionTier: S.Si.TIER_2,
            analyticsLocations: r,
            returnRef: o
          })
        }} tag={"span"}><s.Text variant={"text-md/normal"} color={"always-white"} tag={"span"}>{e}</s.Text></s.P3F>
    })
  },
  P = e => {
    let {
      src: n
    } = e;
    return /.*\.png/i.test(n) ? <img src={n} alt={""} className={k.animationAsset} /> : <g.Z src={n} className={k.animationAsset} autoPlay={true} loop={true} />
  };

function L(e) {
  let {
    category: n,
    className: r,
    hideLimitedTimeBadge: t = false
  } = e, {
    backgroundColors: o
  } = (0, y.Z)(n.styles), d = (0, i.e7)([c.Z], () => c.Z.useReducedMotion), g = (0, i.e7)([v.Z], () => v.Z.isFocused()), {
    bannerOverrides: b,
    shopAllBannerStatic: m,
    shopAllBannerAnimated: p
  } = (0, _.t0)(n), S = !!(null == b ? true : b.showDarkBannerText);
  return <j.Z asset={m} className={a()(k.shopBanner, r)} style={null != o ? {
      background: "".concat((0, B.nH)(o), " border-box border-box"),
      outlineColor: o.border.toHslString()
    } : true}>{!d && null != p && g && <P src={p} />}{(null == b ? true : b.addAttributionLogo) ? <div className={k.discordLogo}>{<s.gw7 size={"custom"} width={28} height={28} color={"currentColor"} className={k.discordIcon} />}{<O.Z className={k.discordWordmark} />}</div> : <s.LZC size={28} />}{(null == b ? true : b.addLogo) ? <img className={k.categoryLogo} src={(0, f.uV)(n.logo, {
        size: A
      })} alt={n.name} style={{
        maxWidth: null == b ? true : b.logoMaxWidth
      }} /> : <s.LZC size={90} />}{"" !== n.summary && <s.Text className={a()(k.summary, {
        [k.blackSummary]: S
      })} style={null != n.bannerTextColor ? {
        color: n.bannerTextColor
      } : true} variant={"text-md/normal"}>{n.skuId === u.T.DISXCORE ? (0, l.jsx)(E, {
        category: n
      }) : n.summary}</s.Text>}{!t && <h.Z category={n} className={k.limitedTimeBadge} display={"banner"} />}</j.Z>
}