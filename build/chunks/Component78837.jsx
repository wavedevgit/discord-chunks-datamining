/** Chunk was on web.js **/
/** chunk id: 78837, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => m
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  Chunk386181 = require("./386181.js"),
  Chunk650682 = require("./650682.js"),
  Chunk934551 = require("./934551.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk770178 = require("./770178.js"),
  Chunk590089 = require("./590089.jsx"),
  Chunk747625 = require("./747625.js");

function m(e) {
  let {
    title: t,
    collapsedSubtitle: n,
    isExpanded: a,
    onExpandedChange: m,
    onExpandedChangeComplete: g,
    children: E,
    animate: y = true
  } = e, b = i.useRef(null), [O, v] = i.useState(null), A = i.useRef(a), I = i.useRef(false);
  i.useEffect(() => {
    A.current !== a && (I.current = true, A.current = a)
  }, [a]);
  let S = i.useCallback(e => {
      null != e.target && I.current && (I.current = false, null == g || g(a))
    }, [a, g]),
    T = i.useMemo(() => (0, o.debounce)(S, 50), [S]),
    C = (0, p.w)(T, [], {
      enabled: null != g
    }),
    N = a && null != O;
  return i.useLayoutEffect(() => {
    null != b.current && null == O && v(b.current.clientHeight)
  }, [O]), (0, r.jsxs)(l.EN, {
    ref: C,
    isExpanded: a,
    onExpandedChange: m,
    children: [(0, r.jsx)(_.U, {
      ref: b,
      style: null != O ? {
        minHeight: O
      } : true,
      title: t,
      description: N ? true : n,
      secondaryTrailingElement: (0, r.jsx)(f.vN3, {
        children: (0, r.jsx)(c.$, {
          slot: "trigger",
          className: h.bW,
          children: (0, r.jsx)(u.ChevronLargeUpIcon, {
            className: s()(h.Kk, {
              [h.kX]: !a
            }),
            color: d.A.colors.ICON_LINK
          })
        })
      }),
      onClick: () => m(!a),
      headingColor: "text-link"
    }), (0, r.jsx)(l.kS, {
      className: s()(h.nd, {
        [h.t5]: !y
      }),
      children: (0, r.jsx)(f.BJc, {
        gap: 16,
        padding: {
          top: 16
        },
        children: E
      })
    })]
  })
}