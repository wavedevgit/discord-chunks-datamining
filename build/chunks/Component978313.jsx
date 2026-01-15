/** Chunk was on 89311 **/
/** chunk id: 978313, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk452379 = require("./452379.js"),
  Chunk772770 = require("./772770.js");

function v(e) {
  let {
    detectedGame: t,
    trackAction: n
  } = e, [r, v] = i.useState((null == t ? true : t.summaryLocalized) != null), [h, j] = i.useState(true), [b, I] = i.useState(false), y = i.useRef(null), {
    width: O,
    height: w
  } = (0, u.Z)();
  return (i.useEffect(() => {
    let e = y.current;
    null != e && I(e.scrollHeight - e.clientHeight > 1 || !h)
  }, [y, O, w, h]), null == t.summary) ? null : (0, a.jsxs)("div", {
    className: l()(p.column, p.gapMd),
    children: [null != t.summaryLocalized && (0, a.jsxs)("div", {
      className: l()(p.row, p.gapSm),
      children: [(0, a.jsx)(o.PencilSparkleIcon, {
        color: c.Z.colors.TEXT_DEFAULT,
        size: "xs"
      }), (0, a.jsx)(s.xvT, {
        variant: "text-xs/medium",
        color: "text-default",
        children: r ? g.intl.format(g.t.aZ2iIp, {
          onShowOriginal: () => v(false)
        }) : g.intl.format(g.t["/2ylF4"], {
          onShowTranslated: () => v(true)
        })
      })]
    }), (0, a.jsx)(s.xvT, {
      ref: y,
      lineClamp: h ? 8 : true,
      variant: "text-sm/normal",
      children: r ? t.summaryLocalized : t.summary
    }), b && (0, a.jsx)(d.P3F, {
      className: p.clickable,
      onClick: () => {
        n(h ? m.as.ShowMore : m.as.ShowLess), j(!h)
      },
      children: (0, a.jsx)(s.xvT, {
        variant: "text-sm/semibold",
        children: h ? g.intl.string(g.t.lBeKY2) : g.intl.string(g.t["6MwJo/"])
      })
    }), (0, a.jsx)(f.Z, {
      className: x.platforms,
      detectedGame: t
    })]
  })
}