/** Chunk was on 1272 **/
/** chunk id: 726324, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./953529.js"), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk506071 = require("./506071.js"),
  Chunk353254 = require("./353254.js"),
  Chunk76014 = require("./76014.js");

function u(e) {
  let {
    coverImageAsset: t,
    title: n,
    guild: u,
    description: d,
    children: p
  } = e, f = a.QK.useSetting(), h = (0, o.n)(), [g, m] = (0, s.Z)(t, h && f);
  return <div className={c.container}>{<div ref={g} className={c.coverImageContainer}>{null != m && (0, r.jsx)("img", {
        src: m,
        alt: "",
        className: c.coverImage
      })}</div>}{<div className={c.guildIconContainer}><l.Z guild={u} size={l.Z.Sizes.XLARGE} /></div>}{<i.X6q variant={"heading-xl/semibold"} className={c.ctaTitle}>{n}</i.X6q>}{<i.Text className={c.ctaSubtitle} variant={"text-md/normal"} color={"header-secondary"}>{d}</i.Text>}{p}</div>
}