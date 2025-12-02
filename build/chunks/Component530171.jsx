/** Chunk was on web.js **/
/** chunk id: 530171, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => g
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

function g(e) {
  let {
    title: t,
    collapsedSubtitle: n,
    isExpanded: a,
    onExpandedChange: g,
    onExpandedChangeComplete: E,
    children: b,
    animate: y = true
  } = e, O = i.useRef(null), [v, S] = i.useState(null), I = i.useRef(null), T = i.useMemo(() => null == E ? m.dG : (0, s.debounce)(e => {
    null != e.target && E(a)
  }), [a, E]);
  (0, p.s)(I, T, [], {
    enabled: null != E
  });
  let A = a && null != v;
  return i.useLayoutEffect(() => {
    null != O.current && null == v && S(O.current.clientHeight)
  }, [v]), (0, r.jsxs)(l.pJ, {
    ref: I,
    isExpanded: a,
    onExpandedChange: g,
    children: [(0, r.jsx)(_.x, {
      ref: O,
      style: null != v ? {
        minHeight: v
      } : true,
      title: t,
      description: A ? true : n,
      secondaryTrailingElement: (0, r.jsx)(f.tEY, {
        children: (0, r.jsx)(c.z, {
          slot: "trigger",
          className: h.triggerButton,
          children: (0, r.jsx)(u.sXD, {
            className: o()(h.icon, {
              [h.iconClosed]: !a
            }),
            color: d.Z.colors.ICON_LINK
          })
        })
      }),
      onClick: () => g(!a),
      headingColor: "text-link"
    }), (0, r.jsx)(l.V2, {
      className: o()(h.panel, {
        [h.disablePanelAnimation]: !y
      }),
      children: (0, r.jsx)(f.Kqy, {
        gap: 16,
        padding: {
          top: 16
        },
        children: b
      })
    })]
  })
}