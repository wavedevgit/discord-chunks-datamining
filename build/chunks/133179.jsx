/** Chunk was on 46746 **/
/** chunk id: 133179, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.js"),
  Chunk873270 = require("./873270.js");

function c(e) {
  let {
    source: t,
    selectedSource: n
  } = e, {
    id: i,
    name: c,
    url: d
  } = t, u = (null == n ? true : n.id) === i;
  return <o.Z direction={o.Z.Direction.VERTICAL} justify={o.Z.Justify.CENTER} align={o.Z.Align.CENTER}>{<o.Z justify={o.Z.Justify.CENTER} align={o.Z.Align.CENTER}><div style={{
          backgroundImage: "url(".concat(d, ")")
        }} className={l()(a.sourceThumbnail, {
          [a.selected]: u
        })} /></o.Z>}{<s.Text className={l()(a.sourceName, {
        [a.selected]: u
      })} variant={"text-sm/normal"}>{c}</s.Text>}</o.Z>
}