/** Chunk was on 9207 **/
/** chunk id: 78837, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  f: () => m
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk386181 = require("./386181.js"),
  Chunk650682 = require("./650682.js"),
  Chunk934551 = require("./934551.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk590089 = require("./590089.jsx"),
  Chunk747625 = require("./747625.js");

function m(e) {
  let {
    ref: t,
    title: n,
    collapsedSubtitle: l,
    isExpanded: m,
    onExpandedChange: g,
    children: A,
    animate: f = true
  } = e, b = i.useRef(null), [h, E] = i.useState(null), O = m && null != h;
  return i.useLayoutEffect(() => {
    null != b.current && null == h && E(b.current.clientHeight)
  }, [h]), (0, r.jsxs)(a.EN, {
    ref: t,
    isExpanded: m,
    onExpandedChange: g,
    children: [(0, r.jsx)(_.U, {
      ref: b,
      style: null != h ? {
        minHeight: h
      } : true,
      title: n,
      description: O ? true : l,
      secondaryTrailingElement: (0, r.jsx)(u.vN3, {
        children: (0, r.jsx)(o.$, {
          slot: "trigger",
          className: p.bW,
          children: (0, r.jsx)(c.ChevronLargeUpIcon, {
            className: s()(p.Kk, {
              [p.kX]: !m
            }),
            color: d.A.colors.ICON_STRONG
          })
        })
      }),
      onClick: () => g(!m)
    }), (0, r.jsx)(a.kS, {
      className: s()(p.nd, {
        [p.t5]: !f
      }),
      children: (0, r.jsx)(u.BJc, {
        gap: 16,
        padding: {
          top: 16
        },
        children: A
      })
    })]
  })
}