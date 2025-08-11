/** Chunk was on 96887 **/
/** chunk id: 876917, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk802433 = require("./802433.js"),
  Chunk680295 = require("./680295.jsx"),
  Chunk313305 = require("./313305.js"),
  Chunk241822 = require("./241822.js");
let u = e => {
  let {
    profileEffectId: t,
    isHovering: r,
    forCollectedModal: i = false,
    isPurchased: u,
    removeSetHeight: f = false
  } = e, v = i ? 250 : .1, [p, h] = n.useState(true);
  return (n.useEffect(() => {
    if (true !== i) h(false);
    else {
      let e = setTimeout(() => {
        h(false)
      }, v);
      return () => {
        clearTimeout(e)
      }
    }
  }, [v, i]), null != t) ? <div className={s()(c.previewContainer, {
      [c.previewContainerAnimation]: i,
      [c.previewContainerSetHeight]: !f
    })}>{<img src={d} alt={" "} className={i ? c.previewForCollected : c.preview} aria-hidden={true} />}{!p && <div className={u ? c.purchasedEffect : true}><l.Z profileEffectId={t} useThumbnail={true} autoPlay={i} restartMethod={o.j.FromStart} resetOnHover={true} isHovering={r} introDelay={v} useOpacityOnHover={false} shopPreview={true} /></div>}</div> : null
}