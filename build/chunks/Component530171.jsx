/** Chunk was on 88569 **/
/** chunk id: 530171, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => v
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk913793 = require("./913793.js"),
  Chunk23893 = require("./23893.js"),
  Chunk657707 = require("./657707.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393903 = require("./393903.js"),
  Chunk206403 = require("./206403.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk481446 = require("./481446.js");

function v(e) {
  let {
    title: t,
    collapsedSubtitle: n,
    isExpanded: i,
    onExpandedChange: v,
    onExpandedChangeComplete: m,
    children: h,
    animate: x = true
  } = e, j = l.useRef(null), [O, C] = l.useState(null), P = l.useRef(null), S = l.useMemo(() => null == m ? y.dG : (0, a.debounce)(e => {
    null != e.target && m(i)
  }), [i, m]);
  (0, p.s)(P, S, [], {
    enabled: null != m
  });
  let _ = i && null != O;
  return l.useLayoutEffect(() => {
    null != j.current && null == O && C(j.current.clientHeight)
  }, [O]), (0, r.jsxs)(s.pJ, {
    ref: P,
    isExpanded: i,
    onExpandedChange: v,
    children: [(0, r.jsx)(b.x, {
      ref: j,
      style: null != O ? {
        minHeight: O
      } : true,
      title: t,
      description: _ ? true : n,
      secondaryTrailingElement: (0, r.jsx)(f.tEY, {
        children: (0, r.jsx)(c.z, {
          slot: "trigger",
          className: g.triggerButton,
          children: (0, r.jsx)(u.sXD, {
            className: o()(g.icon, {
              [g.iconClosed]: !i
            }),
            color: d.Z.colors.ICON_LINK
          })
        })
      }),
      onClick: () => v(!i),
      headingColor: "text-link"
    }), (0, r.jsx)(s.V2, {
      className: o()(g.panel, {
        [g.disablePanelAnimation]: !x
      }),
      children: (0, r.jsx)(f.Kqy, {
        gap: 16,
        padding: {
          top: 16
        },
        children: h
      })
    })]
  })
}