/** Chunk was on 47495 **/
/** chunk id: 438759, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk821795 = require("./821795.js"),
  Chunk892567 = require("./892567.js"),
  Chunk660662 = require("./660662.js"),
  Chunk698282 = require("./698282.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk397419 = require("./397419.js"),
  Chunk395921 = require("./395921.js");

function g(e) {
  let {
    selectedEffectId: t,
    setSelectedEffectId: n,
    configs: o,
    className: g
  } = e;
  return <div className={g}>{<a.X6 variant={"heading-md/semibold"} className={f.selectorHeading}>{p.intl.string(u.default["1wilMz"])}{<i.SrA size={"xs"} color={i.TVs.colors.TEXT_DEFAULT} />}</a.X6>}{<a.Kq direction={"horizontal"} align={"center"} wrap={true} gap={8}>{d.mH.map(e => {
        let a = o[e],
          d = e === t,
          u = a.previewStyles;
        return (0, r.jsx)(i.P3F, {
          className: l()(m.effectContainer, {
            [m.selected]: d
          }),
          onClick: () => n(e),
          children: (0, r.jsx)(c.Z, {
            userName: a.name,
            effectDisplayType: s.F.STATIC,
            displayNameStyles: u,
            textClassName: m.effectText,
            inProfile: true
          })
        }, e)
      })}</a.Kq>}</div>
}