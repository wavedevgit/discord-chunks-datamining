/** Chunk was on 5749 **/
/** chunk id: 850165, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk948582 = require("./948582.js");

function a(t) {
  let {
    heroImageSrc: e,
    heroImageAlt: n,
    children: a,
    header: o,
    description: c
  } = t;
  return <i.Fragment>{<img src={e} alt={n} className={s.heroImage} />}{<r.hzk data-migration-pending={true} className={s.body}>{<div className={s.textContainer}>{<r.X6q variant={"heading-xl/semibold"} color={"header-primary"}>{o}</r.X6q>}{null != c && <r.Text variant={"text-md/medium"} color={"header-secondary"} className={s.description}>{c}</r.Text>}</div>}{a}</r.hzk>}</i.Fragment>
}