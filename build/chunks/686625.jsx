/** Chunk was on 49152 **/
/** chunk id: 686625, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk785717 = require("./785717.js"),
  Chunk507710 = require("./507710.js");

function u(e) {
  let {
    section: t,
    header: n,
    items: l,
    listClassName: u,
    onExpand: d
  } = e, {
    trackUserProfileAction: h
  } = (0, o.KZ)(), p = i.useId(), [f, g] = i.useState(false), m = f ? s.CJ0 : s.Fbu;
  return <section className={c.section}>{<s.P3F className={a()(c.header, c.clickable)} aria-controls={p} aria-expanded={f} onClick={() => {
        g(!f), f || (h({
          action: "PRESS_SECTION",
          section: t
        }), null == d || d())
      }}>{<s.X6q variant={"text-sm/medium"} color={"text-default"}>{n}{" — "}{l.length}</s.X6q>}{<m size={"md"} />}</s.P3F>}{l.length > 0 && <ul id={p} hidden={!f} className={a()(c.list, u)}>{l}</ul>}</section>
}