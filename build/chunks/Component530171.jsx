/** Chunk was on web.js **/
/** chunk id: 530171, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk913793 = require("./913793.js"),
  Chunk23893 = require("./23893.js"),
  Chunk657707 = require("./657707.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393903 = require("./393903.js"),
  Chunk206403 = require("./206403.jsx"),
  Chunk481446 = require("./481446.js");

function h(e) {
  let {
    title: t,
    collapsedSubtitle: n,
    isExpanded: o,
    onExpandedChange: h,
    onExpandedChangeComplete: g,
    children: E,
    animate: b = true
  } = e, y = i.useRef(null), [O, v] = i.useState(null), S = i.useRef(o), I = i.useRef(false);
  i.useEffect(() => {
    S.current !== o && (I.current = true, S.current = o)
  }, [o]);
  let T = i.useCallback(e => {
      null != e.target && I.current && (I.current = false, null == g || g(o))
    }, [o, g]),
    C = i.useMemo(() => (0, s.debounce)(T, 50), [T]),
    A = (0, p.y)(C, [], {
      enabled: null != g
    }),
    N = o && null != O;
  return i.useLayoutEffect(() => {
    null != y.current && null == O && v(y.current.clientHeight)
  }, [O]), (0, r.jsxs)(l.pJ, {
    ref: A,
    isExpanded: o,
    onExpandedChange: h,
    children: [(0, r.jsx)(_.x, {
      ref: y,
      style: null != O ? {
        minHeight: O
      } : true,
      title: t,
      description: N ? true : n,
      secondaryTrailingElement: (0, r.jsx)(f.tEY, {
        children: (0, r.jsx)(c.z, {
          slot: "trigger",
          className: m.triggerButton,
          children: (0, r.jsx)(u.sXD, {
            className: a()(m.icon, {
              [m.iconClosed]: !o
            }),
            color: d.Z.colors.ICON_LINK
          })
        })
      }),
      onClick: () => h(!o),
      headingColor: "text-link"
    }), (0, r.jsx)(l.V2, {
      className: a()(m.panel, {
        [m.disablePanelAnimation]: !b
      }),
      children: (0, r.jsx)(f.Kqy, {
        gap: 16,
        padding: {
          top: 16
        },
        children: E
      })
    })]
  })
}