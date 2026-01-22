/** Chunk was on 86142 **/
/** chunk id: 844330, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => u
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk147925 = require("./147925.jsx"),
  Chunk314516 = require("./314516.js");

function u(e) {
  let {
    icon: t,
    title: n,
    subtitle: s,
    children: u,
    className: d,
    isExpanded: h,
    onExpandedChange: f,
    defaultExpanded: p = false,
    onOpen: g,
    maxHeight: m
  } = e, [A, x] = i.useState(p), _ = i.useRef(null), [E, b] = i.useState(null), v = true !== h, j = v ? h : A;
  i.useEffect(() => {
    j && null != _.current && b(_.current.scrollHeight)
  }, [j, u]);
  let y = i.useCallback(() => {
      let e = !j;
      v || x(e), null == f || f(e), e && null != g && g()
    }, [j, v, f, g]),
    S = i.useMemo(() => {
      if (j) {
        if (null != m) return {
          maxHeight: "number" == typeof m ? "".concat(m, "px") : m
        };
        if (null != E) return {
          maxHeight: "".concat(E, "px")
        }
      }
    }, [m, j, E]);
  return (0, r.jsxs)("div", {
    className: l()(c.Yt, d, {
      [c.Sg]: j
    }),
    children: [(0, r.jsxs)(a.DUT, {
      className: c.wx,
      onClick: y,
      children: [null != t && (0, r.jsx)("div", {
        className: c.Y5,
        children: t
      }), (0, r.jsxs)("div", {
        className: c.DD,
        children: [(0, r.jsx)(a.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: n
        }), null != s && "" !== s && (0, r.jsx)(a.Text, {
          variant: "text-xs/medium",
          color: "text-subtle",
          children: s
        })]
      }), (0, r.jsx)("div", {
        className: l()(c.OW, {
          [c.Sg]: j
        }),
        children: (0, r.jsx)(o.A, {
          width: 20,
          height: 20,
          direction: o.A.Directions.RIGHT
        })
      })]
    }), (0, r.jsx)("div", {
      ref: _,
      className: l()(c.Qs, {
        [c.Sg]: j
      }),
      style: S,
      children: u
    })]
  })
}