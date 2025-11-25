/** Chunk was on 46984 **/
/** chunk id: 530171, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => b
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk913793 = require("./913793.js"),
  Chunk23893 = require("./23893.js"),
  Chunk657707 = require("./657707.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk206403 = require("./206403.jsx"),
  Chunk481446 = require("./481446.js");

function b(e) {
  let {
    title: t,
    collapsedSubtitle: n,
    isOpen: i,
    setIsOpen: b,
    children: y
  } = e, g = l.useRef(null), [v, h] = l.useState(null), m = i && null != v;
  return l.useLayoutEffect(() => {
    null != g.current && null == v && h(g.current.clientHeight)
  }, [v]), (0, r.jsxs)(a.pJ, {
    isExpanded: i,
    onExpandedChange: b,
    children: [(0, r.jsx)(f.x, {
      ref: g,
      style: null != v ? {
        minHeight: v
      } : true,
      title: t,
      description: m ? true : n,
      secondaryTrailingElement: (0, r.jsx)(d.tEY, {
        children: (0, r.jsx)(s.z, {
          slot: "trigger",
          className: p.triggerButton,
          children: (0, r.jsx)(c.sXD, {
            className: o()(p.icon, {
              [p.iconClosed]: !i
            }),
            color: u.Z.colors.ICON_LINK
          })
        })
      }),
      onClick: () => b(!i),
      headingColor: "text-link"
    }), (0, r.jsx)(a.V2, {
      className: p.panel,
      children: (0, r.jsx)(d.Kqy, {
        gap: 16,
        padding: {
          top: 16
        },
        children: y
      })
    })]
  })
}