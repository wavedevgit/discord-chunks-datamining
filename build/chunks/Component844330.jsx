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
    onExpandedChange: p,
    defaultExpanded: g = false,
    onOpen: m,
    maxHeight: f
  } = e, [_, A] = i.useState(g), x = i.useRef(null), [E, v] = i.useState(null), j = true !== h, y = j ? h : _;
  i.useEffect(() => {
    y && null != x.current && v(x.current.scrollHeight)
  }, [y, u]);
  let b = i.useCallback(() => {
      let e = !y;
      j || A(e), null == p || p(e), e && null != m && m()
    }, [y, j, p, m]),
    S = i.useMemo(() => {
      if (y) {
        if (null != f) return {
          maxHeight: "number" == typeof f ? "".concat(f, "px") : f
        };
        if (null != E) return {
          maxHeight: "".concat(E, "px")
        }
      }
    }, [f, y, E]);
  return (0, r.jsxs)("div", {
    className: l()(c.Yt, d, {
      [c.Sg]: y
    }),
    children: [(0, r.jsxs)(a.DUT, {
      className: c.wx,
      onClick: b,
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
          [c.Sg]: y
        }),
        children: (0, r.jsx)(o.A, {
          width: 20,
          height: 20,
          direction: o.A.Directions.RIGHT
        })
      })]
    }), (0, r.jsx)("div", {
      ref: x,
      className: l()(c.Qs, {
        [c.Sg]: y
      }),
      style: S,
      children: u
    })]
  })
}