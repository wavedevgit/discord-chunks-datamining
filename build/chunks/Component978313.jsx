/** Chunk was on 89311 **/
/** chunk id: 978313, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk657707 = require("./657707.js"),
  Chunk793030 = require("./793030.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk885006 = require("./885006.js"),
  Chunk810568 = require("./810568.js"),
  Chunk221370 = require("./221370.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk456486 = require("./456486.js"),
  Chunk593146 = require("./593146.js");

function h(e) {
  let {
    detectedGame: t,
    trackAction: n
  } = e, [r, h] = l.useState((null == t ? true : t.summaryLocalized) != null), [v, j] = l.useState(true), [O, y] = l.useState(false), I = l.useRef(null), {
    width: b,
    height: E
  } = (0, u.Z)();
  return (l.useEffect(() => {
    let e = I.current;
    null != e && y(e.scrollHeight - e.clientHeight > 1 || !v)
  }, [I, b, E, v]), null == t.summary) ? null : (0, i.jsxs)("div", {
    className: a()(p.column, p.gapMd),
    children: [null != t.summaryLocalized && (0, i.jsxs)("div", {
      className: a()(p.row, p.gapSm),
      children: [(0, i.jsx)(s.SxY, {
        color: c.Z.colors.HEADER_SECONDARY,
        size: "xs"
      }), (0, i.jsx)(o.xvT, {
        variant: "text-xs/medium",
        color: "header-secondary",
        children: r ? g.intl.format(g.t.aZ2iIp, {
          onShowOriginal: () => h(false)
        }) : g.intl.format(g.t["/2ylF4"], {
          onShowTranslated: () => h(true)
        })
      })]
    }), (0, i.jsx)(o.xvT, {
      ref: I,
      lineClamp: v ? 8 : true,
      variant: "text-sm/normal",
      children: r ? t.summaryLocalized : t.summary
    }), O && (0, i.jsx)(d.P3F, {
      className: p.clickable,
      onClick: () => {
        n(v ? m.as.ShowMore : m.as.ShowLess), j(!v)
      },
      children: (0, i.jsx)(o.xvT, {
        variant: "text-sm/semibold",
        children: v ? g.intl.string(g.t.lBeKY2) : g.intl.string(g.t["6MwJo/"])
      })
    }), (0, i.jsx)(f.Z, {
      className: x.platforms,
      detectedGame: t
    })]
  })
}