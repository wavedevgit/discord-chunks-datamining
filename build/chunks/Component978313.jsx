/** Chunk was on 89311 **/
/** chunk id: 978313, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
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
  Chunk226788 = require("./226788.js"),
  Chunk802318 = require("./802318.js");

function h(e) {
  let {
    detectedGame: t,
    trackAction: n
  } = e, [r, h] = i.useState((null == t ? true : t.summaryLocalized) != null), [v, j] = i.useState(true), [_, I] = i.useState(false), b = i.useRef(null), {
    width: y,
    height: O
  } = (0, u.Z)();
  return (i.useEffect(() => {
    let e = b.current;
    null != e && I(e.scrollHeight - e.clientHeight > 1 || !v)
  }, [b, y, O, v]), null == t.summary) ? null : (0, a.jsxs)("div", {
    className: l()(p.column, p.gapMd),
    children: [null != t.summaryLocalized && (0, a.jsxs)("div", {
      className: l()(p.row, p.gapSm),
      children: [(0, a.jsx)(s.SxY, {
        color: c.Z.colors.HEADER_SECONDARY,
        size: "xs"
      }), (0, a.jsx)(o.xvT, {
        variant: "text-xs/medium",
        color: "header-secondary",
        children: r ? f.intl.format(f.t.aZ2iIp, {
          onShowOriginal: () => h(false)
        }) : f.intl.format(f.t["/2ylF4"], {
          onShowTranslated: () => h(true)
        })
      })]
    }), (0, a.jsx)(o.xvT, {
      ref: b,
      lineClamp: v ? 8 : true,
      variant: "text-sm/normal",
      children: r ? t.summaryLocalized : t.summary
    }), _ && (0, a.jsx)(d.P3F, {
      className: p.clickable,
      onClick: () => {
        n(v ? m.as.ShowMore : m.as.ShowLess), j(!v)
      },
      children: (0, a.jsx)(o.xvT, {
        variant: "text-sm/semibold",
        children: v ? f.intl.string(f.t.lBeKY2) : f.intl.string(f.t["6MwJo/"])
      })
    }), (0, a.jsx)(g.Z, {
      className: x.platforms,
      detectedGame: t
    })]
  })
}