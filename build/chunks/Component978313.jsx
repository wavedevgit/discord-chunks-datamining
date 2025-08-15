/** Chunk was on 89311 **/
/** chunk id: 978313, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk226788 = require("./226788.js"),
  Chunk802318 = require("./802318.js");

function v(e) {
  let {
    detectedGame: t,
    trackAction: r
  } = e, [i, v] = a.useState((null == t ? true : t.summaryLocalized) != null), [h, j] = a.useState(true), [b, O] = a.useState(false), y = a.useRef(null), {
    width: _,
    height: I
  } = (0, d.Z)();
  return (a.useEffect(() => {
    let e = y.current;
    null != e && O(e.scrollHeight - e.clientHeight > 1 || !h)
  }, [y, _, I, h]), null == t.summary) ? null : (0, n.jsxs)("div", {
    className: l()(p.column, p.gapMd),
    children: [null != t.summaryLocalized && (0, n.jsxs)("div", {
      className: l()(p.row, p.gapSm),
      children: [(0, n.jsx)(o.SxY, {
        color: c.Z.colors.HEADER_SECONDARY,
        size: "xs"
      }), (0, n.jsx)(s.xv, {
        variant: "text-xs/medium",
        color: "header-secondary",
        children: i ? g.intl.format(g.t.aZ2iIi, {
          onShowOriginal: () => v(false)
        }) : g.intl.format(g.t["/2ylFx"], {
          onShowTranslated: () => v(true)
        })
      })]
    }), (0, n.jsx)(s.xv, {
      ref: y,
      lineClamp: h ? 8 : true,
      variant: "text-sm/normal",
      children: i ? t.summaryLocalized : t.summary
    }), b && (0, n.jsx)(u.P3F, {
      className: p.clickable,
      onClick: () => {
        r(h ? m.as.ShowMore : m.as.ShowLess), j(!h)
      },
      children: (0, n.jsx)(s.xv, {
        variant: "text-sm/semibold",
        children: h ? g.intl.string(g.t.lBeKY2) : g.intl.string(g.t["6MwJo6"])
      })
    }), (0, n.jsx)(f.Z, {
      className: x.platforms,
      detectedGame: t
    })]
  })
}