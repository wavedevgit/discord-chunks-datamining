/** Chunk was on 9207 **/
/** chunk id: 78837, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  f: () => A
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

function A(e) {
  let {
    title: t,
    collapsedSubtitle: n,
    isExpanded: l,
    onExpandedChange: A,
    onExpandedChangeComplete: f,
    children: b,
    animate: h = true
  } = e, E = i.useRef(null), [O, x] = i.useState(null), C = i.useRef(l), S = i.useRef(false);
  i.useEffect(() => {
    C.current !== l && (S.current = true, C.current = l)
  }, [l]);
  let T = i.useCallback(e => {
      null != e.target && S.current && (S.current = false, null == f || f(l))
    }, [l, f]),
    I = i.useMemo(() => (0, a.debounce)(T, 50), [T]),
    N = (0, p.w)(I, [], {
      enabled: null != f
    }),
    j = l && null != O;
  return i.useLayoutEffect(() => {
    null != E.current && null == O && x(E.current.clientHeight)
  }, [O]), (0, r.jsxs)(o.EN, {
    ref: N,
    isExpanded: l,
    onExpandedChange: A,
    children: [(0, r.jsx)(m.U, {
      ref: E,
      style: null != O ? {
        minHeight: O
      } : true,
      title: t,
      description: j ? true : n,
      secondaryTrailingElement: (0, r.jsx)(_.vN3, {
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
      onClick: () => A(!l)
    }), (0, r.jsx)(o.kS, {
      className: s()(g.nd, {
        [g.t5]: !h
      }),
      children: (0, r.jsx)(_.BJc, {
        gap: 16,
        padding: {
          top: 16
        },
        children: b
      })
    })]
  })
}