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
  Chunk226788 = require("./226788.js"),
  Chunk802318 = require("./802318.js");

function h(e) {
  let {
    detectedGame: t,
    trackAction: n
  } = e, [l, h] = i.useState((null == t ? true : t.summaryLocalized) != null), [v, j] = i.useState(true), [O, y] = i.useState(false), b = i.useRef(null), {
    width: I,
    height: E
  } = (0, d.Z)();
  return (i.useEffect(() => {
    let e = b.current;
    null != e && y(e.scrollHeight - e.clientHeight > 1 || !v)
  }, [b, I, E, v]), null == t.summary) ? null : (0, r.jsxs)("div", {
    className: a()(g.column, g.gapMd),
    children: [null != t.summaryLocalized && (0, r.jsxs)("div", {
      className: a()(g.row, g.gapSm),
      children: [(0, r.jsx)(s.SxY, {
        color: c.Z.colors.HEADER_SECONDARY,
        size: "xs"
      }), (0, r.jsx)(o.xv, {
        variant: "text-xs/medium",
        color: "header-secondary",
        children: l ? p.intl.format(p.t.aZ2iIi, {
          onShowOriginal: () => h(false)
        }) : p.intl.format(p.t["/2ylFx"], {
          onShowTranslated: () => h(true)
        })
      })]
    }), (0, r.jsx)(o.xv, {
      ref: b,
      lineClamp: v ? 8 : true,
      variant: "text-sm/normal",
      children: l ? t.summaryLocalized : t.summary
    }), O && (0, r.jsx)(u.P3F, {
      className: g.clickable,
      onClick: () => {
        n(v ? m.as.ShowMore : m.as.ShowLess), j(!v)
      },
      children: (0, r.jsx)(o.xv, {
        variant: "text-sm/semibold",
        children: v ? p.intl.string(p.t.lBeKY2) : p.intl.string(p.t["6MwJo6"])
      })
    }), (0, r.jsx)(f.Z, {
      className: x.platforms,
      detectedGame: t
    })]
  })
}