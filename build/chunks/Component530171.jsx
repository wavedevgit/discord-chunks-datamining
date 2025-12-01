/** Chunk was on 88569 **/
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
    children: y,
    animate: g = true
  } = e, v = l.useRef(null), [m, h] = l.useState(null), x = i && null != m;
  return l.useLayoutEffect(() => {
    null != v.current && null == m && h(v.current.clientHeight)
  }, [m]), (0, r.jsxs)(a.pJ, {
    isExpanded: i,
    onExpandedChange: b,
    children: [(0, r.jsx)(f.x, {
      ref: v,
      style: null != m ? {
        minHeight: m
      } : true,
      title: t,
      description: x ? true : n,
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
      className: o()(p.panel, {
        [p.disablePanelAnimation]: !g
      }),
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