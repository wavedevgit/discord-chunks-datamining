/** Chunk was on 75708 **/
/** chunk id: 645616, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk255367 = require("./255367.js"),
  Chunk399606 = require("./399606.js"),
  Chunk607070 = require("./607070.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk526167 = require("./526167.js"),
  Chunk176754 = require("./176754.jsx"),
  Chunk151451 = require("./151451.jsx"),
  Chunk294242 = require("./294242.js"),
  Chunk323053 = require("./323053.js"),
  Chunk530347 = require("./530347.js"),
  Chunk334937 = require("./334937.js");
let g = e => {
    let {
      supportHEVCAlpha: t,
      isMotionReduced: n,
      containerVisibilityPercentage: r
    } = e;
    return n ? <div className={d.flyingWumpusContainer}><img src={p.Z} alt={""} className={d.flyingWumpusAsset} /></div> : <div className={d.flyingWumpusContainer}><o.ZP scaleAnimationData={{
          startScale: .9,
          endScale: 1,
          duration: o.SR
        }} yAxisAnimationData={{
          range: 20,
          duration: o.b5,
          path: o.js.SINE
        }} parallaxAnimationData={{
          pathDirection: o.eo.UP,
          range: 200,
          containerVisibilityPercentage: r,
          changeOpacity: false
        }} animateXAxisWiggle={true}>{t ? (0, i.jsx)("img", {
          src: u.Z,
          alt: "",
          className: d.flyingWumpusAsset
        }) : (0, i.jsx)(a.Z, {
          muted: true,
          autoPlay: true,
          playsInline: true,
          loop: true,
          className: d.flyingWumpusAsset,
          children: (0, i.jsx)("source", {
            src: m.Z
          })
        }, m.Z)}</o.ZP></div>
  },
  h = e => {
    let {
      containerVisibilityPercentage: t
    } = e, n = (0, r.e7)([s.Z], () => s.Z.useReducedMotion), a = (0, l.rO)();
    return <i.Fragment>{<g supportHEVCAlpha={a} isMotionReduced={n} containerVisibilityPercentage={t} />}{<c.Z isMotionReduced={n} containerVisibilityPercentage={t} boltTrinketClassName={d.bolt} carTrinketClassName={d.car} hammerTrinketClassName={d.hammer} keyTrinketClassName={d.key} starTrinketClassName={d.star} />}</i.Fragment>
  }