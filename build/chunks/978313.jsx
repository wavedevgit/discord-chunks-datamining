/** Chunk was on 89311 **/
/** chunk id: 978313, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk657707 = require("./657707.js"),
  Chunk793030 = require("./793030.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk885006 = require("./885006.js"),
  Chunk810568 = require("./810568.js"),
  Chunk221370 = require("./221370.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk263930 = require("./263930.js"),
  Chunk430871 = require("./430871.js");

function j(e) {
  let {
    detectedGame: t,
    trackAction: r
  } = e, [i, j] = a.useState((null == t ? true : t.summaryLocalized) != null), [v, h] = a.useState(true), [b, O] = a.useState(false), y = a.useRef(null), {
    width: _,
    height: I
  } = (0, u.Z)();
  return (a.useEffect(() => {
    let e = y.current;
    null != e && O(e.scrollHeight - e.clientHeight > 1 || !v)
  }, [y, _, I, v]), null == t.summary) ? null : <div className={l()(f.column, f.gapMd)}>{null != t.summaryLocalized && <div className={l()(f.row, f.gapSm)}>{<o.SxY color={c.Z.colors.HEADER_SECONDARY} size={"xs"} />}{<s.xv variant={"text-xs/medium"} color={"header-secondary"}>{i ? p.intl.format(p.t.aZ2iIi, {
          onShowOriginal: () => j(false)
        }) : p.intl.format(p.t["/2ylFx"], {
          onShowTranslated: () => j(true)
        })}</s.xv>}</div>}{<s.xv ref={y} lineClamp={v ? 8 : true} variant={"text-sm/normal"}>{i ? t.summaryLocalized : t.summary}</s.xv>}{b && <d.P3F className={f.clickable} onClick={() => {
        r(v ? m.as.ShowMore : m.as.ShowLess), h(!v)
      }}><s.xv variant={"text-sm/semibold"}>{v ? p.intl.string(p.t.lBeKY2) : p.intl.string(p.t["6MwJo6"])}</s.xv></d.P3F>}{<g.Z className={x.platforms} detectedGame={t} />}</div>
}