/** Chunk was on 5606 **/
/** chunk id: 78837, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  f: () => f
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

function f(e) {
  let {
    title: t,
    collapsedSubtitle: n,
    isExpanded: l,
    onExpandedChange: f,
    onExpandedChangeComplete: b,
    children: h,
    animate: A = true
  } = e, E = i.useRef(null), [x, O] = i.useState(null), C = i.useRef(l), y = i.useRef(false);
  i.useEffect(() => {
    C.current !== l && (y.current = true, C.current = l)
  }, [l]);
  let j = i.useCallback(e => {
      null != e.target && y.current && (y.current = false, null == b || b(l))
    }, [l, b]),
    T = i.useMemo(() => (0, a.debounce)(j, 50), [j]),
    v = (0, _.w)(T, [], {
      enabled: null != b
    }),
    S = l && null != x;
  return i.useLayoutEffect(() => {
    null != E.current && null == x && O(E.current.clientHeight)
  }, [x]), (0, r.jsxs)(o.EN, {
    ref: v,
    isExpanded: l,
    onExpandedChange: f,
    children: [(0, r.jsx)(m.U, {
      ref: E,
      style: null != x ? {
        minHeight: x
      } : true,
      title: t,
      description: S ? true : n,
      secondaryTrailingElement: (0, r.jsx)(p.vN3, {
        children: (0, r.jsx)(c.$, {
          slot: "trigger",
          className: g.bW,
          children: (0, r.jsx)(d.ChevronLargeUpIcon, {
            className: s()(g.Kk, {
              [g.kX]: !l
            }),
            color: u.A.colors.ICON_STRONG
          })
        })
      }),
      onClick: () => f(!l)
    }), (0, r.jsx)(o.kS, {
      className: s()(g.nd, {
        [g.t5]: !A
      }),
      children: (0, r.jsx)(p.BJc, {
        gap: 16,
        padding: {
          top: 16
        },
        children: h
      })
    })]
  })
}