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
  } = e, [l, h] = i.useState((null == t ? true : t.summaryLocalized) != null), [v, j] = i.useState(true), [O, y] = i.useState(false), I = i.useRef(null), {
    width: b,
    height: E
  } = (0, u.Z)();
  return (i.useEffect(() => {
    let e = I.current;
    null != e && y(e.scrollHeight - e.clientHeight > 1 || !v)
  }, [I, b, E, v]), null == t.summary) ? null : (0, r.jsxs)("div", {
    className: a()(x.column, x.gapMd),
    children: [null != t.summaryLocalized && (0, r.jsxs)("div", {
      className: a()(x.row, x.gapSm),
      children: [(0, r.jsx)(s.SxY, {
        color: c.Z.colors.HEADER_SECONDARY,
        size: "xs"
      }), (0, r.jsx)(o.xvT, {
        variant: "text-xs/medium",
        color: "header-secondary",
        children: l ? p.intl.format(p.t.aZ2iIi, {
          onShowOriginal: () => h(false)
        }) : p.intl.format(p.t["/2ylFx"], {
          onShowTranslated: () => h(true)
        })
      })]
    }), (0, r.jsx)(o.xvT, {
      ref: I,
      lineClamp: v ? 8 : true,
      variant: "text-sm/normal",
      children: l ? t.summaryLocalized : t.summary
    }), O && (0, r.jsx)(d.P3F, {
      className: x.clickable,
      onClick: () => {
        n(v ? m.as.ShowMore : m.as.ShowLess), j(!v)
      },
      children: (0, r.jsx)(o.xvT, {
        variant: "text-sm/semibold",
        children: v ? p.intl.string(p.t.lBeKY2) : p.intl.string(p.t["6MwJo6"])
      })
    }), (0, r.jsx)(f.Z, {
      className: g.platforms,
      detectedGame: t
    })]
  })
}