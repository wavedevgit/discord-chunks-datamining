/** Chunk was on 49152 **/
/** chunk id: 36246, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk873546 = require("./873546.js"),
  Chunk481060 = require("./481060.js"),
  Chunk470134 = require("./470134.js"),
  Chunk302137 = require("./302137.js");

function u(e) {
  let {
    guildId: t,
    children: n,
    className: i
  } = e, {
    horizontalScrollNotice: u,
    handleScroll: d,
    handleSetScrollerRef: h,
    handleSetContainerRef: p
  } = (0, o.Z)(t), f = <div className={c.tierPreviewsContainer}><div className={l()(c.tierPreviews, i)}>{n}</div></div>;
  return a.tq || (f = <r.Fragment>{u}{<s.Den className={c.scroller} orientation={"horizontal"} ref={h} onScroll={d}>{f}</s.Den>}</r.Fragment>), <div className={c.carouselMaxWidth} ref={p}>{f}</div>
}