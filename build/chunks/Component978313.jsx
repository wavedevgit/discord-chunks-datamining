/** Chunk was on 89311 **/
/** chunk id: 978313, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => x
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

function x(e) {
  let {
    detectedGame: t,
    trackAction: r
  } = e, [l, x] = i.useState((null == t ? true : t.summaryLocalized) != null), [O, h] = i.useState(true), [v, b] = i.useState(false), y = i.useRef(null), {
    width: P,
    height: w
  } = (0, d.Z)();
  return (i.useEffect(() => {
    let e = y.current;
    null != e && b(e.scrollHeight - e.clientHeight > 1 || !O)
  }, [y, P, w, O]), null == t.summary) ? null : (0, n.jsxs)("div", {
    className: a()(g.column, g.gapMd),
    children: [null != t.summaryLocalized && (0, n.jsxs)("div", {
      className: a()(g.row, g.gapSm),
      children: [(0, n.jsx)(s.SxY, {
        color: c.Z.colors.HEADER_SECONDARY,
        size: "xs"
      }), (0, n.jsx)(o.xvT, {
        variant: "text-xs/medium",
        color: "header-secondary",
        children: l ? f.intl.format(f.t.aZ2iIi, {
          onShowOriginal: () => x(false)
        }) : f.intl.format(f.t["/2ylFx"], {
          onShowTranslated: () => x(true)
        })
      })]
    }), (0, n.jsx)(o.xvT, {
      ref: y,
      lineClamp: O ? 8 : true,
      variant: "text-sm/normal",
      children: l ? t.summaryLocalized : t.summary
    }), v && (0, n.jsx)(u.P3F, {
      className: g.clickable,
      onClick: () => {
        r(O ? m.as.ShowMore : m.as.ShowLess), h(!O)
      },
      children: (0, n.jsx)(o.xvT, {
        variant: "text-sm/semibold",
        children: O ? f.intl.string(f.t.lBeKY2) : f.intl.string(f.t["6MwJo6"])
      })
    }), (0, n.jsx)(p.Z, {
      className: j.platforms,
      detectedGame: t
    })]
  })
}